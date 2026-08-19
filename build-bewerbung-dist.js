#!/usr/bin/env node
/**
 * build-bewerbung-dist.js
 *
 * Erzeugt eine minifizierte Deploy-Version der Bewerbungsseite (bewerbung.nicworks.de)
 * in ../bewerbung-dist/. bewerbung/index.html (+ impressum.html, datenschutz.html) bleiben
 * dabei komplett unveraendert und lesbar - sie sind und bleiben die Quelle der Wahrheit fuer
 * alle inhaltlichen/gestalterischen Aenderungen (siehe README "ZIEL-STRUKTUR" bzw. die
 * Projekt-Notiz project_portfolio_two_variants).
 *
 * Anders als live/ (siehe build-live.js) werden hier KEINE anderen Transformationen gemacht:
 * keine Domain-Aenderung, kein IS_LIVE_SITE-Flip, robots bleibt noindex,nofollow. Es geht nur
 * darum, den echten Auslieferungs-HTML kleiner zu machen. Bilder/Fonts/.htaccess/robots.txt/
 * sitemap.xml aendern sich durch Minify nicht und werden hier deshalb NICHT nochmal kopiert -
 * beim Deploy einfach nur die HTML-Dateien aus bewerbung-dist/ ueber die bestehenden Dateien
 * auf bewerbung.nicworks.de hochladen, der Rest (img/, font/, .htaccess, ...) bleibt wie es ist.
 *
 * Aufruf:  node build-bewerbung-dist.js
 * Ausgabe: ../bewerbung-dist/  (index.html, impressum.html, datenschutz.html)
 */

const fs = require("fs");
const path = require("path");
const { minifyHtml } = require("./.build-tools/minify.js");

const SRC = __dirname;
const DEST = path.join(__dirname, "..", "bewerbung-dist");

function log(msg) {
  console.log("[build-bewerbung-dist] " + msg);
}

const FILES = ["index.html", "impressum.html", "datenschutz.html"];

async function main() {
  if (!fs.existsSync(DEST)) {
    fs.mkdirSync(DEST, { recursive: true });
  }

  for (const file of FILES) {
    const srcPath = path.join(SRC, file);
    if (!fs.existsSync(srcPath)) continue;
    let html = fs.readFileSync(srcPath, "utf8");
    html = await minifyHtml(html, log);
    fs.writeFileSync(path.join(DEST, file), html, "utf8");
    log("Geschrieben: " + file);
  }

  log("Fertig. Beim Deployen von bewerbung.nicworks.de: nur die HTML-Dateien aus bewerbung-dist/ hochladen (ueberschreiben), img/font/.htaccess/robots.txt/sitemap.xml bleiben unveraendert wie bisher.");
}

main().catch(err => {
  console.error("[build-bewerbung-dist] Fehler:", err);
  process.exit(1);
});
