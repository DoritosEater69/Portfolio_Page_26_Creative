#!/usr/bin/env node
/**
 * minify.js
 *
 * Gemeinsam genutzte Minify-Logik fuer build-live.js und build-bewerbung-dist.js.
 * Minifiziert nur den grossen inline <style>-Block und das grosse inline <script> in
 * einem HTML-String - Quelldateien in bewerbung/ selbst werden davon nie beruehrt,
 * nur die jeweiligen Build-Outputs (live/, bewerbung-dist/).
 *
 * Braucht "npm install" hier in .build-tools/ - wenn das nie gelaufen ist, wird der
 * Schritt sauber uebersprungen (kein Fehler, kein Zwang zu einem Build-Prozess).
 */

const path = require("path");

function loadMinifiers() {
  try {
    const toolsNodeModules = path.join(__dirname, "node_modules");
    const terser = require(path.join(toolsNodeModules, "terser"));
    const CleanCSS = require(path.join(toolsNodeModules, "clean-css"));
    return { terser, CleanCSS };
  } catch (e) {
    return null;
  }
}

async function minifyHtml(html, log) {
  log = log || (() => {});
  const minifiers = loadMinifiers();
  if (!minifiers) {
    log("Minify uebersprungen (kein 'npm install' in .build-tools/ ausgefuehrt) - bleibt unminifiziert, funktioniert trotzdem normal.");
    return html;
  }
  const { terser, CleanCSS } = minifiers;
  const before = html.length;

  // HTML-Kommentare enthalten stellenweise woertlich "<script>" als Text (z.B. ein Kommentar,
  // der erklaert, dass ein Element "vor dem <script> unten" stehen muss) - eine naive Regex ueber
  // das rohe HTML wuerde das faelschlich als echten Tag lesen und alles bis zum naechsten
  // echten </script> "verschlucken". Deshalb suchen wir Tag-Positionen auf einer Kopie, in der
  // Kommentare gleich lang durch Leerzeichen ersetzt sind (Indizes bleiben dadurch identisch),
  // und schneiden dann aus dem ORIGINAL-html an genau diesen Positionen.
  const blanked = html.replace(/<!--[\s\S]*?-->/g, m => " ".repeat(m.length));

  // <style>...</style> minifizieren (nur der eine grosse Block, siehe Kommentar oben in index.html)
  {
    const styleMatch = /<style>([\s\S]*?)<\/style>/.exec(blanked);
    if (styleMatch) {
      const css = html.slice(styleMatch.index + "<style>".length, styleMatch.index + styleMatch[0].length - "</style>".length);
      const out = new CleanCSS({ level: 2 }).minify(css);
      if (out.errors && out.errors.length) {
        log("CSS-Minify-Fehler, behalte Original: " + out.errors.join("; "));
      } else {
        html = html.slice(0, styleMatch.index) + `<style>${out.styles}</style>` + html.slice(styleMatch.index + styleMatch[0].length);
      }
    }
  }

  // Das eine grosse inline <script> minifizieren (nicht die <script src=...> Tags, nicht JSON-LD).
  // "blanked" hier NEU aus dem aktuellen "html" berechnen (die Style-Ersetzung oben hat die
  // Laenge von "html" veraendert - die alten Indizes waeren jetzt verschoben und falsch).
  // Rueckwaerts durch die Treffer gehen, damit vorherige Ersetzungen die noch offenen Indizes
  // spaeterer Treffer nicht verschieben.
  {
    const blankedAfterStyle = html.replace(/<!--[\s\S]*?-->/g, m => " ".repeat(m.length));
    const scriptRe = /<script(?![^>]*\bsrc=)(?![^>]*type="application\/ld\+json")([^>]*)>([\s\S]*?)<\/script>/g;
    let match;
    const matches = [];
    while ((match = scriptRe.exec(blankedAfterStyle))) {
      const openTagLen = `<script${match[1]}>`.length;
      const contentLen = match[2].length;
      if (contentLen < 1000) continue; // kleine Inline-Snippets unangetastet lassen
      matches.push({ start: match.index, openTagLen, contentLen, attrs: match[1] });
    }
    for (const m of matches.reverse()) {
      const contentStart = m.start + m.openTagLen;
      const contentEnd = contentStart + m.contentLen;
      const code = html.slice(contentStart, contentEnd);
      const result = await terser.minify(code, { compress: true, mangle: true });
      if (result.error) {
        log("JS-Minify-Fehler, behalte Original: " + result.error);
        continue;
      }
      html = html.slice(0, contentStart) + result.code + html.slice(contentEnd);
    }
  }

  const after = html.length;
  log(`Minify: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (-${(100 * (1 - after / before)).toFixed(0)}%)`);
  return html;
}

module.exports = { loadMinifiers, minifyHtml };
