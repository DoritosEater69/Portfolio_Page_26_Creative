#!/usr/bin/env node
/**
 * build-live.js
 *
 * Generiert die "live"-Version der Portfolio-Seite aus der "bewerbung"-Version.
 *
 * bewerbung/index.html ist IMMER die Quelle der Wahrheit. Jede inhaltliche, gestalterische
 * oder strukturelle Aenderung wird ausschliesslich in bewerbung/ gemacht. Dieses Script
 * erzeugt daraus automatisch eine synchrone Kopie in ../live/, mit genau diesen Unterschieden:
 *
 *   - Webprojekte-Slider + Fellbox-Grafikprojekt werden ausgeblendet
 *     (gesteuert ueber die Konstante IS_LIVE_SITE im <script> von index.html - wird hier
 *     automatisch auf true gesetzt, keine sonstigen Code-Aenderungen noetig)
 *   - robots-Meta: noindex,nofollow -> index,follow
 *   - Domain ueberall: bewerbung.nicworks.de -> nicworks.de
 *   - .htaccess: kein Basic-Auth-Passwortschutz (Sicherheits-Header/Caching/Kompression bleiben)
 *   - robots.txt: Disallow entfernt, Sitemap-URL auf nicworks.de
 *   - sitemap.xml: Domain + lastmod aktualisiert
 *
 * Aufruf:  node build-live.js
 * Ausgabe: ../live/  (wird bei jedem Lauf komplett neu aus bewerbung/ erzeugt)
 */

const fs = require("fs");
const path = require("path");
const { minifyHtml: minifyHtmlShared } = require("./.build-tools/minify.js");

const SRC = __dirname;
const DEST = path.join(__dirname, "..", "live");

const BEWERBUNG_DOMAIN = "https://bewerbung.nicworks.de/";
const LIVE_DOMAIN = "https://nicworks.de/";

function log(msg) {
  console.log("[build-live] " + msg);
}

// --- 0. Optionaler Minify-Schritt (nur fuer live/index.html, bewerbung/index.html bleibt
// unveraendert lesbar). Logik liegt zentral in .build-tools/minify.js (auch von
// build-bewerbung-dist.js genutzt). Braucht "npm install" in .build-tools/ - wenn das nie
// gelaufen ist, wird der Schritt sauber uebersprungen, kein Fehler, kein Zwang zu einem
// Build-Prozess. ---
function minifyHtml(html) {
  return minifyHtmlShared(html, log);
}

async function main() {

// --- 1. Zielordner leeren/neu anlegen (aber .git darin, falls vorhanden, nicht anfassen) ---
if (!fs.existsSync(DEST)) {
  fs.mkdirSync(DEST, { recursive: true });
}

// --- 2. Statische Assets 1:1 spiegeln (Bilder, Fonts) ---
// img/privates, img/portfolio, img/tattoo und img/archive-replaced-projects enthalten
// unkomprimierte Roh-/Archivfotos, die in index.html nirgends referenziert werden (Stand
// 2026-08-10, per grep verifiziert: 0 Treffer). Zusammen ~367MB toter Ballast, der sonst bei
// jedem Live-Build mitkopiert und potenziell live hochgeladen wuerde. Deshalb hier ausgeschlossen.
const IMG_EXCLUDE_DIRS = new Set(["privates", "portfolio", "tattoo", "archive-replaced-projects"]);
// Alte Backup-Zips der Bildordner (0 Referenzen in index.html) - ebenfalls unnoetiger Deploy-Ballast.
const IMG_EXCLUDE_EXT = new Set([".zip"]);

function copyDir(srcDir, destDir, excludeDirNames, excludeExt) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    if (entry.isDirectory() && excludeDirNames && excludeDirNames.has(entry.name)) {
      log("Uebersprungen (nicht referenziert): " + path.join(srcDir, entry.name));
      continue;
    }
    if (entry.isFile() && excludeExt && excludeExt.has(path.extname(entry.name))) {
      log("Uebersprungen (nicht referenziert): " + path.join(srcDir, entry.name));
      continue;
    }
    const s = path.join(srcDir, entry.name);
    const d = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDir(s, d, excludeDirNames, excludeExt);
    } else if (entry.isFile()) {
      fs.copyFileSync(s, d);
    }
  }
}

["img", "font"].forEach(dir => {
  const s = path.join(SRC, dir);
  if (fs.existsSync(s)) {
    log("Kopiere " + dir + "/ ...");
    copyDir(s, path.join(DEST, dir), dir === "img" ? IMG_EXCLUDE_DIRS : null, dir === "img" ? IMG_EXCLUDE_EXT : null);
  }
});

// --- 3. Text-Dateien transformieren ---
function swapDomain(content) {
  return content.split(BEWERBUNG_DOMAIN).join(LIVE_DOMAIN);
}

function writeText(relPath, content) {
  const dest = path.join(DEST, relPath);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, content, "utf8");
  log("Geschrieben: " + relPath);
}

// index.html
{
  let html = fs.readFileSync(path.join(SRC, "index.html"), "utf8");
  html = swapDomain(html);
  html = html.replace(
    'const IS_LIVE_SITE = false;',
    'const IS_LIVE_SITE = true;'
  );
  html = html.replace(
    '<meta name="robots" content="noindex, nofollow">',
    '<meta name="robots" content="index, follow">'
  );

  // --- Content-Varianten (hinzugefuegt 2026-08-11) ---
  // bewerbung/index.html ist auf Bewerbungen an Unternehmen ausgerichtet (Employer-Pitch).
  // live/ richtet sich an potenzielle Kunden (KMU: Restaurants, Lieferdienste, Taetowierer,
  // Fotografen, Barber/Friseure, alternative Laeden) und soll dafuer SEO-technisch auf lokale
  // Keywords einzahlen (Webdesigner Duesseldorf/Deutschland, Agenturerfahrung, Remote, UI/UX).
  // Gezielter String-Ersatz statt Runtime-Verzweigung: bleibt suchmaschinenfreundlich (kein
  // clientseitiges Nachladen von Meta-/Sichttext noetig) und aendert nichts an der Render-Logik,
  // die diese Session schon zweimal fuer Regressionen gesorgt hat (siehe
  // feedback_portfolio_perf_refactor_risk in den Notizen).
  const LIVE_TEXT_REPLACEMENTS = [
    [
      '<title>NICLAS KOCH - Digital Designer</title>',
      '<title>Niclas Koch — Webdesigner Düsseldorf | UI/UX &amp; Webdesign</title>'
    ],
    [
      '<meta name="description" content="Niclas Koch — Web- &amp; Grafikdesigner mit UI/UX-Schwerpunkt. Echte Projekte, sauberer Code und ein Auge fürs Detail. Bewerbungs-Portfolio für meine nächste Station im Team.">',
      '<meta name="description" content="Webdesigner in Düsseldorf mit Agenturerfahrung — moderne, performante Websites für kleine und mittelständische Betriebe. UI/UX-Schwerpunkt, auch deutschlandweit remote.">'
    ],
    [
      '<meta name="keywords" content="Webdesigner, Grafikdesigner, UI UX Design, Frontend, Technisches SEO, Corporate Design">',
      '<meta name="keywords" content="Webdesigner Düsseldorf, Webdesigner Deutschland, Webdesigner mit Agenturerfahrung, UI UX Designer, Webdesigner Remote, Webdesign für kleine Unternehmen">'
    ],
    [
      '<meta property="og:title" content="NICLAS KOCH - Digital Designer">',
      '<meta property="og:title" content="Niclas Koch — Webdesigner in Düsseldorf">'
    ],
    [
      '<meta property="og:description" content="Echte Projekte, sauberer Code und ein Auge fürs Detail. Bewerbungs-Portfolio für meine nächste Station im Team.">',
      '<meta property="og:description" content="Moderne, performante Websites für kleine und mittelständische Betriebe — von Restaurants über Fotografen bis Barbershops. UI/UX-Schwerpunkt, Agenturerfahrung, auch remote deutschlandweit.">'
    ],
    [
      '<meta name="twitter:title" content="NICLAS KOCH - Digital Designer">',
      '<meta name="twitter:title" content="Niclas Koch — Webdesigner in Düsseldorf">'
    ],
    [
      '<meta name="twitter:description" content="Echte Projekte, sauberer Code und ein Auge fürs Detail. Bewerbungs-Portfolio für meine nächste Station im Team.">',
      '<meta name="twitter:description" content="Moderne, performante Websites für kleine und mittelständische Betriebe — von Restaurants über Fotografen bis Barbershops. UI/UX-Schwerpunkt, Agenturerfahrung, auch remote deutschlandweit.">'
    ],
    [
      '"description": "Web- & Grafikdesigner mit UI/UX-Schwerpunkt — moderne, performante Websites, Grafikdesign und technisches SEO aus einer Hand.",',
      '"description": "Webdesigner in Düsseldorf mit UI/UX-Schwerpunkt und Agenturerfahrung — moderne, performante Websites für kleine und mittelständische Betriebe, auch deutschlandweit remote.",'
    ],
    [
      '<p class="hero-light-text">Webdesign, Grafikdesign, KI-Scripting und technisches SEO — aus einer Hand. Ich verbinde Gestaltung mit technischem Verständnis und baue Websites, die nicht nur gut aussehen, sondern auch schnell laden, performen und gefunden werden.</p>',
      '<p class="hero-light-text">Webdesign, Grafikdesign, KI-Scripting und technisches SEO — aus einer Hand. Als Webdesigner in Düsseldorf mit Agenturerfahrung baue ich Websites für kleine und mittelständische Betriebe, die nicht nur gut aussehen, sondern auch schnell laden, performen und gefunden werden — remote auch deutschlandweit.</p>'
    ]
  ];

  // --- Cookie-Consent-Tool-Swap (hinzugefuegt 2026-08-12) ---
  // bewerbung/index.html bleibt auf dem kostenlosen Open-Source vanilla-cookieconsent (kein
  // Account/Trial noetig, passt fuer den niedrigen Traffic auf dem Bewerbungslink). live/
  // bekommt stattdessen Cookiebot (Nics Account, Domain-Group-ID unten) - der oeffentliche,
  // SEO-sichtbare Auftritt soll den professionelleren/gepflegteren CMP-Auftritt haben. Nic MUSS
  // im Cookiebot-Dashboard die Domain fuer diese Domain-Group-ID auf nicworks.de (nicht
  // bewerbung.nicworks.de) setzen, sonst antwortet Cookiebot mit HTTP 503 (siehe Session vom
  // 2026-08-12 - CBID matched sonst keine registrierte Domain).
  const COOKIEBOT_CBID = "391e6db6-aa4c-4df2-bfc9-8490c4f85d94";
  const LIVE_COOKIE_CONSENT_REPLACEMENTS = [
    [
      '<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      `<meta charset="UTF-8">\n<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="${COOKIEBOT_CBID}" data-blockingmode="auto" type="text/javascript"></script>\n<meta name="viewport" content="width=device-width, initial-scale=1.0">`
    ],
    [
      `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://js.hcaptcha.com https://newassets.hcaptcha.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; img-src 'self' data:; font-src 'self'; connect-src 'self' https://hcaptcha.com https://*.hcaptcha.com https://formspree.io; frame-src https://xd.adobe.com https://newassets.hcaptcha.com https://*.hcaptcha.com; object-src 'none'; base-uri 'self'; form-action 'self' https://formspree.io">`,
      `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://js.hcaptcha.com https://newassets.hcaptcha.com https://consent.cookiebot.com https://consentcdn.cookiebot.com; style-src 'self' 'unsafe-inline' https://consentcdn.cookiebot.com; img-src 'self' data: https://imgsct.cookiebot.com; font-src 'self'; connect-src 'self' https://hcaptcha.com https://*.hcaptcha.com https://formspree.io https://consent.cookiebot.com https://consentcdn.cookiebot.com; frame-src https://xd.adobe.com https://newassets.hcaptcha.com https://*.hcaptcha.com https://consentcdn.cookiebot.com; object-src 'none'; base-uri 'self'; form-action 'self' https://formspree.io">`
    ],
    [
      '<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>\n<link rel="dns-prefetch" href="https://cdn.jsdelivr.net">',
      '<link rel="preconnect" href="https://consent.cookiebot.com" crossorigin>'
    ],
    [
      '\n<link rel="preload" href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.css" as="style" integrity="sha256-ygRrixsQlBByBZiOcJamh7JByO9fP+/l5UPtKNJmRsE=" crossorigin="anonymous" onload="this.onload=null;this.rel=\'stylesheet\'">\n<noscript><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.css" integrity="sha256-ygRrixsQlBByBZiOcJamh7JByO9fP+/l5UPtKNJmRsE=" crossorigin="anonymous"></noscript>\n',
      '\n'
    ],
    [
      '<script defer src="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js" integrity="sha256-vG4vLmOB/AJbJ6awr7Wg4fxonG+fxAp4cIrbIFTvRXU=" crossorigin="anonymous"></script>\n',
      ''
    ],
    [
      `function getCookieConsent() {
    return window.CookieConsent && CookieConsent.acceptedCategory("functionality") ? "all" : "essential";
}

function initCookieConsent() {
    if (!window.CookieConsent) return;
    CookieConsent.run({
        guiOptions: {
            consentModal: {
                layout: "box",
                position: "bottom left",
                equalWeightButtons: true,
                flipButtons: false
            },
            preferencesModal: {
                layout: "box",
                position: "right",
                equalWeightButtons: true,
                flipButtons: false
            }
        },
        categories: {
            necessary: {
                readOnly: true
            },
            functionality: {}
        },
        language: {
            default: "de",
            translations: {
                de: {
                    consentModal: {
                        title: "Cookies &amp; externe Inhalte",
                        description: 'Diese Seite nutzt technisch notwendige Funktionen ohne Tracking. Optional werden externe Dienste eingebunden: <strong>hCaptcha</strong> (Spamschutz im Kontaktformular, Intuition Machines Inc., USA) und das <strong>Adobe XD</strong>-Prototyp-Embed bei ProteinUp. Beide laden erst nach deiner Zustimmung – Details in der <a href="datenschutz.html">Datenschutzerklärung</a>.',
                        acceptAllBtn: "Alle akzeptieren",
                        acceptNecessaryBtn: "Nur essenziell",
                        showPreferencesBtn: "Einstellungen verwalten"
                    },
                    preferencesModal: {
                        title: "Cookie-Einstellungen",
                        acceptAllBtn: "Alle akzeptieren",
                        acceptNecessaryBtn: "Nur essenziell",
                        savePreferencesBtn: "Auswahl speichern",
                        closeIconLabel: "Schließen",
                        sections: [ {
                            title: "Technisch notwendig",
                            description: "Für den grundlegenden Betrieb der Seite erforderlich (Formular-Honeypot, Barrierefreiheits-/Cookie-Einstellungen). Kein Tracking.",
                            linkedCategory: "necessary"
                        }, {
                            title: "Externe Dienste",
                            description: "hCaptcha (Spamschutz im Kontaktformular) und das Adobe-XD-Prototyp-Embed. Beide übertragen beim Laden deine IP-Adresse an den jeweiligen Anbieter (USA).",
                            linkedCategory: "functionality"
                        }, {
                            title: "Mehr Informationen",
                            description: 'Details zu den eingebundenen Diensten in der <a href="datenschutz.html">Datenschutzerklärung</a>.'
                        } ]
                    }
                }
            }
        },
        onConsent: () => {
            loadHcaptchaIfConsented();
            loadAdobeEmbedIfConsented();
        },
        onChange: () => {
            loadHcaptchaIfConsented();
            loadAdobeEmbedIfConsented();
        }
    });
}

if (window.CookieConsent) {
    initCookieConsent();
} else {
    window.addEventListener("load", initCookieConsent);
}

const cookieFab = document.getElementById("cookie-fab");

if (cookieFab) cookieFab.addEventListener("click", () => {
    if (window.CookieConsent) CookieConsent.showPreferences();
});

const cookieSettingsTrigger = document.getElementById("cookie-settings-trigger");

if (cookieSettingsTrigger) cookieSettingsTrigger.addEventListener("click", () => {
    if (window.CookieConsent) CookieConsent.showPreferences();
});`,
      `function getCookieConsent() {
    return window.Cookiebot && Cookiebot.consent && Cookiebot.consent.preferences ? "all" : "essential";
}

["CookiebotOnConsentReady", "CookiebotOnAccept", "CookiebotOnDecline"].forEach(evt => {
    window.addEventListener(evt, () => {
        loadHcaptchaIfConsented();
        loadAdobeEmbedIfConsented();
    });
});

const cookieSettingsTrigger = document.getElementById("cookie-settings-trigger");

if (cookieSettingsTrigger) cookieSettingsTrigger.addEventListener("click", () => {
    if (window.Cookiebot) Cookiebot.renew();
});`
    ],
    // Eigener .cookie-fab-Rundbutton unten links raus auf live/ - Cookiebot bringt nach der
    // Einwilligung sein eigenes Floating-Icon an derselben Stelle mit, sonst sieht man zwei
    // Buttons uebereinander (Feedback Nic 2026-08-12). Der Footer-Textlink
    // "Cookie-Einstellungen" (#cookie-settings-trigger) bleibt als barrierefreier Zugang
    // erhalten. Die JS-Seite braucht keine Anpassung - "const cookieFab = ..." + der zugehoerige
    // Listener wurden oben bereits mit entfernt, und document.getElementById("cookie-fab") wird
    // auf live/ ohnehin nirgends sonst referenziert.
    [
      `<button type="button" class="cookie-fab" id="cookie-fab" aria-label="Cookie-Einstellungen öffnen" title="Cookie-Einstellungen">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
    <path d="M8.5 8.5v.01"/>
    <path d="M16 15.5v.01"/>
    <path d="M12 12v.01"/>
    <path d="M11 17v.01"/>
    <path d="M7 14v.01"/>
  </svg>
</button>`,
      ''
    ]
  ];
  for (const [from, to] of LIVE_COOKIE_CONSENT_REPLACEMENTS) LIVE_TEXT_REPLACEMENTS.push([from, to]);

  let liveTextMisses = 0;
  for (const [from, to] of LIVE_TEXT_REPLACEMENTS) {
    if (!html.includes(from)) {
      liveTextMisses++;
      log("WARNUNG: Content-Varianten-Text nicht gefunden (bewerbung/index.html vermutlich seitdem geaendert), uebersprungen: " + from.slice(0, 60) + "...");
      continue;
    }
    html = html.split(from).join(to);
  }
  if (liveTextMisses === 0) log("Content-Varianten fuer live/ angewendet (" + LIVE_TEXT_REPLACEMENTS.length + " Textstellen).");

  html = await minifyHtml(html);
  writeText("index.html", html);
}

// impressum.html / datenschutz.html - nur Domain tauschen.
// robots bleibt bewusst ueberall "noindex, follow": Impressum/Datenschutz haben keinen
// eigenen Suchwert und sollen auch auf der Live-Seite nicht indexiert werden (Standard-SEO-Praxis).
// datenschutz.html Abschnitt 5 (Cookie-Einwilligung) beschreibt auf bewerbung/ noch
// vanilla-cookieconsent - live/ nutzt Cookiebot (siehe Cookie-Consent-Tool-Swap oben bei
// index.html), also muss die Beschreibung mitwandern, sonst waere die Datenschutzerklaerung
// auf live/ inhaltlich falsch.
const DATENSCHUTZ_COOKIE_SECTION_BEWERBUNG = `<h2>5. Cookie-Einwilligung</h2>
    <p>
      Diese Website verwendet die Open-Source-Bibliothek CookieConsent zur Verwaltung Ihrer
      Einwilligungen.
    </p>
    <p>
      Ihre Auswahl wird ausschließlich lokal im Browser (Local Storage) gespeichert. Dabei
      erfolgt keine Übermittlung Ihrer Einwilligungsentscheidung an den Anbieter der Bibliothek.
    </p>
    <p>
      Die Bibliothek selbst wird über das CDN jsDelivr geladen. Beim Abruf dieser Dateien wird
      aus technischen Gründen eine Verbindung zu den Servern des CDN-Anbieters hergestellt,
      wodurch insbesondere Ihre IP-Adresse verarbeitet werden kann.
    </p>
    <p>Rechtsgrundlage für die Speicherung Ihrer Einwilligung ist Art. 6 Abs. 1 lit. f DSGVO.</p>`;
const DATENSCHUTZ_COOKIE_SECTION_LIVE = `<h2>5. Cookie-Einwilligung</h2>
    <p>
      Diese Website verwendet Cookiebot, ein Cookie-Consent-Tool von Usercentrics A/S,
      Havnegade 39, 1058 Kopenhagen, Dänemark, zur Verwaltung Ihrer Einwilligungen.
    </p>
    <p>
      Beim Aufruf der Website wird eine Verbindung zu den Servern von Cookiebot hergestellt,
      damit das Einwilligungsbanner geladen und angezeigt werden kann. Dabei wird Ihre
      IP-Adresse verarbeitet (nach Angaben des Anbieters gekürzt/anonymisiert). Ihre
      Einwilligungsentscheidung wird in einem Cookie in Ihrem Browser sowie serverseitig bei
      Cookiebot gespeichert, damit sie beim nächsten Besuch nicht erneut abgefragt werden muss
      und die Einwilligung nachweisbar ist (dazu verpflichtet § 25 TDDDG).
    </p>
    <p>
      Rechtsgrundlage ist Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung zur
      Nachweisbarkeit der Einwilligung) in Verbindung mit meinem berechtigten Interesse gemäß
      Art. 6 Abs. 1 lit. f DSGVO an einer rechtssicheren Einwilligungsverwaltung.
    </p>
    <p>
      Weitere Informationen: <a href="https://www.cookiebot.com/de/privacy-policy/" target="_blank" rel="noopener">cookiebot.com/de/privacy-policy</a>
    </p>`;

["impressum.html", "datenschutz.html"].forEach(file => {
  const p = path.join(SRC, file);
  if (!fs.existsSync(p)) return;
  let html = fs.readFileSync(p, "utf8");
  html = swapDomain(html);
  if (file === "datenschutz.html") {
    if (html.includes(DATENSCHUTZ_COOKIE_SECTION_BEWERBUNG)) {
      html = html.replace(DATENSCHUTZ_COOKIE_SECTION_BEWERBUNG, DATENSCHUTZ_COOKIE_SECTION_LIVE);
    } else {
      log("WARNUNG: Cookie-Einwilligung-Abschnitt in datenschutz.html nicht gefunden (vermutlich geaendert) - live/datenschutz.html beschreibt evtl. noch das falsche Cookie-Tool, bitte pruefen.");
    }
  }
  writeText(file, html);
});

// .htaccess - ohne Basic Auth, plus CSP-Header-Swap fuer Cookiebot (gleicher Grund wie beim
// <meta> CSP-Tag in index.html oben: live/ nutzt Cookiebot statt vanilla-cookieconsent, sonst
// blockiert der (staerker wirkende) HTTP-Response-Header-CSP Cookiebot-Ressourcen, selbst wenn
// der <meta>-Tag schon korrekt ist - Browser kombinieren beide CSPs, die striktere Regel je
// Direktive gewinnt. Bug gefunden 2026-08-12: frame-src blockte consentcdn.cookiebot.com (Cookiebot
// laedt die "Details anzeigen"-Liste als iFrame von dort).
{
  let ht = fs.readFileSync(path.join(SRC, ".htaccess"), "utf8");
  ht = ht.replace(
    /AuthType Basic\nAuthName "[^"]*"\nAuthUserFile [^\n]*\nRequire valid-user\n\n?/,
    ""
  );
  const HTACCESS_CSP_BEWERBUNG = `Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://js.hcaptcha.com https://newassets.hcaptcha.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; img-src 'self' data:; font-src 'self'; connect-src 'self' https://hcaptcha.com https://*.hcaptcha.com https://formspree.io; frame-src https://xd.adobe.com https://newassets.hcaptcha.com https://*.hcaptcha.com; object-src 'none'; base-uri 'self'; form-action 'self' https://formspree.io; frame-ancestors 'self'"`;
  const HTACCESS_CSP_LIVE = `Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://js.hcaptcha.com https://newassets.hcaptcha.com https://consent.cookiebot.com https://consentcdn.cookiebot.com; style-src 'self' 'unsafe-inline' https://consentcdn.cookiebot.com; img-src 'self' data: https://imgsct.cookiebot.com; font-src 'self'; connect-src 'self' https://hcaptcha.com https://*.hcaptcha.com https://formspree.io https://consent.cookiebot.com https://consentcdn.cookiebot.com; frame-src https://xd.adobe.com https://newassets.hcaptcha.com https://*.hcaptcha.com https://consentcdn.cookiebot.com; object-src 'none'; base-uri 'self'; form-action 'self' https://formspree.io; frame-ancestors 'self'"`;
  if (ht.includes(HTACCESS_CSP_BEWERBUNG)) {
    ht = ht.replace(HTACCESS_CSP_BEWERBUNG, HTACCESS_CSP_LIVE);
  } else {
    log("WARNUNG: CSP-Header in .htaccess nicht gefunden (vermutlich geaendert) - live/.htaccess blockiert Cookiebot evtl. weiterhin, bitte pruefen.");
  }
  writeText(".htaccess", ht);
}

// robots.txt - alles erlauben
writeText("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${LIVE_DOMAIN}sitemap.xml\n`);

// llms.txt - fuer KI-Suchmaschinen/LLM-Crawler, Domain anpassen
{
  const p = path.join(SRC, "llms.txt");
  if (fs.existsSync(p)) {
    let txt = fs.readFileSync(p, "utf8");
    txt = swapDomain(txt);
    writeText("llms.txt", txt);
  }
}

// sitemap.xml - Domain + lastmod aktualisieren
{
  const today = new Date().toISOString().slice(0, 10);
  let sm = fs.readFileSync(path.join(SRC, "sitemap.xml"), "utf8");
  sm = swapDomain(sm);
  sm = sm.replace(/<lastmod>[^<]*<\/lastmod>/, `<lastmod>${today}</lastmod>`);
  writeText("sitemap.xml", sm);
}

log("Fertig. live/ wurde komplett neu aus bewerbung/ generiert.");

}

main().catch(err => {
  console.error("[build-live] Fehler:", err);
  process.exit(1);
});
