# Portfolio-Seite — Niclas Koch (creative/)

## 🟢 AKTIVER ARBEITSORDNER seit 2026-08-19

Dies ist der aktuelle Arbeitsordner für die neue Version der Portfolio-Seite. **Alle
Änderungen ab dem 2026-08-19 landen ausschließlich hier.** `creative/` wurde 1:1 aus
`../bewerbung/` kopiert (Stand 2026-08-19, ohne dessen Git-Historie, eigenes frisches
lokales Git-Repo) und ist der neue Ausgangspunkt für alles Weitere.

Die Geschwister-Ordner `../bewerbung/` und `../live/` sind seit demselben Datum
eingefroren und werden nicht mehr bearbeitet — jeder hat inzwischen ein eigenes Git-Repo
und ein eigenes, kürzeres README mit historischen Details zum jeweiligen Ordner
(`../bewerbung/README.md`, `../live/README.md`). Der historische Zusammenhang in Kurzform:
`bewerbung/` war die passwortgeschützte Vollversion für Bewerbungslinks,
`live/` wurde automatisch daraus per `node build-live.js` als öffentliche, SEO-indexierte
Variante ohne Webprojekte-Slider/Fellbox generiert. Dieser Build-Mechanismus ist mit dem
Einfrieren beider Ordner pausiert; ob/wie `creative/` künftig eine ähnliche
öffentlich/privat-Aufteilung bekommt, ist noch offen (siehe Domain-Notiz unten).

**Git:** eigenes Repo, Origin `Portfolio_Page_26_Creative` =
`https://github.com/DoritosEater69/Portfolio_Page_26_Creative`, Branch `master`.

Persönliche Portfolio-/Landingpage von Niclas Koch (Web- & Grafikdesigner). Eine einzige,
selbstständige HTML-Datei ohne Build-Step, Framework oder Page-Builder.

**Live:** siehe [GITHUB-SETUP.md](GITHUB-SETUP.md) für den GitHub-Pages-Link.

## Tech-Stack

- **Sprachen:** reines HTML, CSS und JavaScript — alles in einer Datei (`index.html`),
  kein Framework, kein Bundler, kein Build-Step (Ausnahme: `build-live.js`, historisch für
  die `bewerbung/`/`live/`-Aufteilung genutzt, liegt weiterhin im Ordner, siehe oben).
- **Bilder:** als Base64 direkt eingebettet, liegen zusätzlich als Rohdateien in `img/`.
- **Custom Smooth-Scroll-Engine:** eigener `requestAnimationFrame`-Loop statt CSS
  `scroll-behavior` — steuert u. a. Scroll-Ease, Reveal-Animationen, Parallax- und
  Stack-Effekte, Cursor-Tropfen-Interaktion und die "Steckdose"-Drag-Mechanik.
- **Keine externen JS-Frameworks** (kein React/Vue/etc.) — nur Vanilla JS.

## Werkzeuge / Plugins

- **[Claude Code](https://claude.com/product/claude-code)** (Claude Sonnet 5 von Anthropic) —
  der komplette Code, jede Animation und jedes Layout wurden iterativ im Dialog entwickelt,
  getestet und verfeinert. Kein Screendesign vorab (kein Figma/Sketch/Template).
- **Git** — Versionierung dieses Repos.

Ausführliche, chronologische Schritt-für-Schritt-Zusammenfassung: siehe das
"Wie habe ich die Seite gebaut?"-Modal ganz unten rechts auf der Seite selbst.

## Projektstruktur

Alle Bilder liegen als Base64 direkt eingebettet in `portfolio.html` — die Dateien unter `img/`
sind ausschließlich Referenz/Backup der Rohbilder (mit einer einzigen Ausnahme: `img/nic.png`
wird per relativem Pfad in den Open-Graph-/Twitter-Meta-Tags referenziert und darf seinen Pfad
nicht ändern).

```
Portfolio Page/
├── portfolio.html                  # die komplette Seite (HTML+CSS+JS, ein File)
├── README.md                       # diese Datei
├── GITHUB-SETUP.md                 # Anleitung: Repo verbinden + GitHub Pages aktivieren
├── robots.txt / sitemap.xml        # muessen fuer SEO im Domain-Root bleiben
├── font/                           # lokale @font-face-Dateien (.ttf)
├── docs/
│   └── chat-2026-07-21-online-hosting.md
└── img/
    ├── nic.png                     # Profilfoto - Pfad wird in Meta-Tags referenziert, nicht verschieben
    ├── site/                       # Header-/Hero-Hintergrundbild
    ├── gallery/
    │   ├── fellbox/                 # Fellbox Social-Media-Grafiken (Rohbilder)
    │   ├── uglyblackwork/           # Tattoo-Flashsheets, Flyer (Rohbilder)
    │   └── magazincover/            # Magazincover-Fashion-Uebung (Rohbilder)
    ├── proteinup/                  # ProteinUp-Mockups (Rohbilder)
    ├── portfolio/                  # Screenshots der echten Webprojekte + Screendesign-Ordner
    ├── privates/                   # Rohfotos private Fotografie (Galerie-Reihe 3)
    ├── archive-replaced-projects/  # Screenshots frueherer, mittlerweile ersetzter Webprojekte
    └── misc/                       # unsortierte/nicht eindeutig zuordenbare Altdateien
```

## Domain-/Deploy-Notiz (offen)

Zum Zeitpunkt des Einfrierens von `bewerbung/`/`live/` gab es folgende Domain-Roadmap, die
nicht abgeschlossen wurde — vollständige Details siehe `../bewerbung/README.md`:

| Subdomain | Inhalt (historisch geplant) | Status |
|---|---|---|
| `cms.nicworks.de` | WordPress (läuft aktuell noch auf `nicworks.de` Root) | offen |
| `bewerbung.nicworks.de` | Inhalt von `bewerbung/` | in Arbeit |
| `nicworks.de` (Root) | Inhalt von `live/` | in Arbeit |

Da `creative/` ab jetzt die aktive Weiterentwicklung übernimmt, ist offen, ob/wie diese
Roadmap für `creative/` weiterverfolgt wird (z. B. eigene Subdomain statt `bewerbung/`/
`live/`, oder `creative/` löst eine der beiden bestehenden Varianten ab). **Offene
Rückfrage an Nic:** Soll die Domain-Struktur wie oben umgesetzt werden, aber bezogen auf
`creative/` statt `bewerbung/`/`live/` — oder ändert sich der Plan grundsätzlich, sobald
`creative/` bereit für den Live-Gang ist?

## Geplant: zwei Versionen der Seite (öffentlich + versteckt)

Idee von Nic (2026-07-27), noch nicht umgesetzt — nur als Plan festgehalten, bis Inhalte/
Freigaben für die zusätzlichen Kundenprojekte stehen:

- **Öffentliche Version** (aktuelles `portfolio.html`): abgespeckt, SEO-indexiert, normal
  erreichbar/verlinkt.
- **Versteckte Version**: mehr Kundenprojekte, nicht auffindbar über Suchmaschinen, nur per
  direktem Link erreichbar.

**Technischer Ansatz (abgestimmt):**
- Zwei getrennte HTML-Dateien statt einer gemeinsamen Datei mit umschaltbaren Inhalten — bei
  einer statischen Single-File-Seite ohne Backend wären "versteckte" Projektdaten sonst trotzdem
  im Quelltext der öffentlichen Seite sichtbar (Rechtsklick → Seitenquelltext), egal ob sie
  angezeigt werden oder nicht. Nachteil: Content-Änderungen müssen in beiden Dateien gepflegt
  werden.
- Versteckte Seite bekommt `<meta name="robots" content="noindex, nofollow">` und wird NICHT in
  `robots.txt` oder `sitemap.xml` gelistet (ein `Disallow`-Eintrag in `robots.txt` wäre öffentlich
  lesbar und würde den Pfad selbst verraten).
- **Zusätzlich Passwortschutz** (HTTP Basic Auth über das Hosting) für die versteckte Seite —
  ein unauffindbarer Link allein ist keine echte Zugriffskontrolle (Indexierung durch externe
  Links, Link-Vorschau-Bots in Messengern etc. können ihn trotzdem offenlegen). Wichtig, solange
  dort Kundenprojekte ohne ausdrückliche Freigabe gezeigt werden (siehe Bildrechte-Punkt in der
  Checkliste unten).
- Konkrete Umsetzung (Dateistruktur, welche Projekte wohin, Hosting-Konfiguration für den
  Passwortschutz) folgt, sobald klar ist, welche zusätzlichen Projekte gezeigt werden sollen und
  wie der Stand der Kunden-Freigaben ist.

## Offene Content-Notizen

Kleine Merkliste für Inhalte, die noch ergänzt werden sollen — noch nicht umgesetzt, nur
festgehalten:

- [ ] **Procreate-Zeichnungen** noch mit rein — eigene Illustrationen/Zeichnungen aus Procreate,
      passt z. B. in die Galerie-Sektion "Design, Fotografie & Illustration" oder als eigene
      Reihe. Warten noch auf die konkreten Dateien von Nic.
- [ ] **Claude Design nutzen, um aus der Seite ein Figma-File generieren zu lassen** — damit
      Nic das Design in Figma überarbeiten kann (Desktop, Tablet, Mobile).

## Checkliste vor dem Live-Gang

Aktiv gepflegte Fassung (Nachfolger der ursprünglichen Checkliste aus `bewerbung/`, dort
weiterhin als historischer Snapshot vom 2026-08-19 einsehbar). Stammt aus einer
Projektnotiz ("Sicherheit/DSGVO unbedingt vor Go-Live erledigen"). **Hinweis: ich bin kein
Anwalt — die DSGVO-Punkte hier sind technische Umsetzung, keine Rechtsberatung. Bei
Unsicherheit bitte juristisch prüfen lassen, insbesondere Impressum/Datenschutzerklärung.**

### Bereits erledigt

- [x] **Fonts lokal statt über Google-CDN.** Google Fonts live zu laden überträgt bei jedem
      Seitenaufruf die IP-Adresse der Besucher:innen an Google, ohne Einwilligung (siehe u.a.
      LG München I, Urteil v. 20.01.2022, Az. 3 O 17493/20). Alle 13 Dateien liegen jetzt lokal
      im `font/`-Ordner, Glyphen-Abdeckung mit `fonttools` geprüft (a-z/A-Z/0-9 vollständig).
- [x] **Content-Security-Policy + Referrer-Policy** per Meta-Tag gesetzt — blockt jede Script-/
      Iframe-/Formular-Quelle außerhalb einer festen Whitelist (eigene Domain + hCaptcha +
      Adobe-XD-Embed).
- [x] **Honeypot-Feld** gegen einfache Spam-Bots im Kontaktformular aktiv.
- [x] **Echter hCaptcha-Sitekey** eingetragen (Widget lädt per Lazy-Load, erst wenn der
      Kontaktbereich in den Viewport scrollt).
- [x] **Formular sendet per AJAX (fetch) an Formspree**, inkl. Erfolgs-/Fehlermeldung im UI.
- [x] **Code-Review auf Injection-Vektoren (XSS).** Alle `innerHTML`-Zuweisungen geprüft — keine
      befüllt sich aus echter Nutzereingabe. Chatbot nutzt `textContent`. Kein `eval()`,
      `new Function()`, `document.write()`. Alle externen Links haben `rel="noopener"`.

### Noch von dir zu erledigen

- [ ] **Formspree-Account + Formular anlegen** (kostenlos, https://formspree.io — das Anlegen
      von Accounts kann nur der Seitenbetreiber selbst tun, nicht Claude). Danach die echte
      Formspree-URL in `portfolio.html` eintragen: Suche nach `DEIN-FORM-ID` im `action`-Attribut
      des Kontaktformulars und durch die eigene Formspree-Form-ID ersetzen.
- [ ] **hCaptcha-Secret-Key NUR im Formspree-Dashboard eintragen**, nie im Code: Formspree →
      Form Settings → Spam Protection → CAPTCHA → Custom Key. So verlässt der Secret Key nie
      Formsprees Server und landet nie im öffentlich einsehbaren Seitenquelltext.
- [ ] **Sobald die Domain feststeht: im hCaptcha-Dashboard (hcaptcha.com) die Domain zum
      Sitekey hinzufügen** — hCaptcha-Sitekeys sind an bestimmte Domains gebunden, ohne diesen
      Schritt funktioniert das Captcha-Widget auf der Live-Domain nicht.
- [ ] **Domain-Platzhalter ersetzen.** `https://DEINE-DOMAIN-HIER/` ersetzen in: Canonical-Link,
      Open-Graph-Tags, JSON-LD (alle in `portfolio.html`, bereits als TODO-Kommentar markiert),
      sowie in `robots.txt` und `sitemap.xml`.
- [x] **Impressum & Datenschutzerklärung erstellen.** ✅ Erledigt — `impressum.html` und
      `datenschutz.html` als eigene Seiten angelegt, mit den bereitgestellten Angaben (Niclas
      Koch, Aachener Str. 32a, 40223 Düsseldorf, Tel. 0172 9350097, privates Portfolio ohne
      USt-ID) befüllt, hCaptcha + Formspree als Drittanbieter genannt, `noindex`-Meta gesetzt,
      im Footer verlinkt. Beide Seiten sind als Entwurf gekennzeichnet — bitte trotzdem per
      Generator (z. B. e-recht24.de) oder anwaltlich gegenprüfen, siehe Hinweis-Box auf beiden
      Seiten. Details siehe Hotfix-Eintrag unten.
- [ ] **Zwei-Versionen-Aufteilung (öffentlich/versteckt) umsetzen** — siehe Abschnitt "Geplant:
      zwei Versionen der Seite" oben. Voraussetzung: geklärt, welche zusätzlichen Kundenprojekte
      in die versteckte Version sollen und ob dafür Freigaben vorliegen (siehe Bildrechte-Punkt
      unten), danach getrennte Datei aufsetzen inkl. `noindex`-Meta-Tag und Passwortschutz
      (HTTP Basic Auth) übers Hosting.
- [ ] **Echte HTTP-Security-Header beim Hosting setzen** (`X-Content-Type-Options: nosniff`,
      `X-Frame-Options: DENY`, `Strict-Transport-Security`, `Permissions-Policy`) — geht NICHT
      per `<meta>`-Tag, Browser ignorieren das dort aus Sicherheitsgründen. Je nach Hosting:
      Netlify/Cloudflare Pages über eine `_headers`-Datei, Apache über `.htaccess`, Nginx über
      `add_header` in der Server-Config. Sobald klar ist, wo gehostet wird, bereite ich die
      passende Konfigurationsdatei fertig vor.
- [ ] **Nach Go-Live: kostenlosen externen Check laufen lassen** über
      https://securityheaders.com und https://observatory.mozilla.org — beide prüfen von außen,
      ob Security-Header/CSP auf der live erreichbaren Seite tatsächlich greifen. Ein "echter"
      Pentest war in dieser Sandbox nicht möglich (kein Headless-Browser, keine erreichbare
      Live-Instanz) — stattdessen wurde ein statischer Code-Security-Review gemacht (siehe
      oben). Für einen richtigen manuellen Pentest (Formular-Fuzzing, Rate-Limits etc.) am besten
      einen Menschen/Dienstleister mit Erfahrung hinzuziehen, sobald die Seite live ist.

### Offene Rückfragen vor dem Live-Gang

Das sind Entscheidungen/Angaben, die nur du treffen bzw. liefern kannst — ich kann sie nicht
stellvertretend beantworten oder recherchieren.

- [ ] **Domain:** Welche Domain wird es final? Wird dort schon gehostet oder muss sie neu
      registriert werden? Hängt an: hCaptcha-Domain-Bindung, Canonical/OG-URLs, `robots.txt`,
      `sitemap.xml`.
- [ ] **Hosting:** Wo soll die Seite live laufen (z. B. Netlify, Cloudflare Pages, GitHub Pages,
      klassisches Webhosting)? Davon hängt ab, wie die echten HTTP-Security-Header gesetzt werden
      (`_headers`-Datei, `.htaccess`, Nginx-Config — jeweils unterschiedlich).
- [x] **Impressumspflichtige Angaben:** ✅ Erhalten und eingetragen — Niclas Koch, Aachener Str.
      32a, 40223 Düsseldorf, Tel. 0172 9350097, "Bin Privat" → als privates Portfolio ohne
      Gewerbe/USt-IdNr. dargestellt (siehe `impressum.html`, Abschnitt "Umsatzsteuer").
- [x] **Kontakt-E-Mail-Adresse:** hallo@nicworks.de ist bereits im Impressum/Datenschutz
      hinterlegt (aus dem bestehenden Formspree-/Kontaktformular-Setup übernommen) — bitte
      bestätigen, ob das die richtige Adresse ist.
- [ ] **Bildrechte der gezeigten Projekte:** Für den Maurice-Fey-Screenshot und alle anderen
      gezeigten Kundenarbeiten (UGLYBLACKWORK, Fellbox, Magazincover etc.) — liegt jeweils eine
      Freigabe des Kunden/Auftraggebers vor, die Arbeit öffentlich als Referenz zu zeigen?
- [ ] **Rezensionen/Zitate:** Ist die Freigabe der zitierten Personen (ehemaliger Arbeitgeber,
      Maurice Fey) vorhanden, ihre Aussage namentlich auf der Seite zu veröffentlichen?
- [ ] **Platzhalter-Inhalte, die noch echte Inhalte brauchen:** Lorem-Ipsum-Text/Technik-Tags in
      den Projekt-Detail-Modals, Platzhalterbilder (picsum.photos) in der dritten Galerie-Reihe —
      sollen die vor Go-Live durch echte Inhalte ersetzt werden oder ist das bewusst "später"?
- [x] **Analytics/Tracking:** ✅ Erledigt — Google Analytics 4 (Property `G-VHTRVMJB0K`)
      eingebunden, geladen erst nach Einwilligung in die neue Cookie-Kategorie "Statistik"
      (eigene dritte Kategorie neben "Technisch notwendig"/"Externe Dienste"). CSP und
      Datenschutzerklärung entsprechend angepasst. Details siehe Hotfix-Eintrag unten.
- [x] **Cookie-Banner nötig?** ✅ Erledigt — Cookie-Consent-Banner (vanilla-cookieconsent,
      Essenziell/Alle-Unterscheidung, hCaptcha + Adobe-XD-Embed werden erst nach Zustimmung
      geladen) ist umgesetzt und im Footer/über den Icon-Button unten links erreichbar, siehe
      Hotfix-Einträge unten.
- [ ] **Formspree-Tarif:** Der kostenlose Formspree-Plan begrenzt Einsendungen pro Monat (aktuell
      50) — reicht das erwartete Kontaktaufkommen dafür aus, oder wird ein bezahlter Plan nötig?
- [ ] **E-Mail-Weiterleitung/Sitemap bei Suchmaschinen anmelden:** Nach Go-Live die Seite bei
      Google Search Console (und optional Bing Webmaster Tools) mit der `sitemap.xml` anmelden —
      soll das gemeinsam gemacht werden, sobald die Domain live ist?

## Hotfixes

Änderungen, die nach dem initialen Commit per Commit/Push nachgezogen wurden. Neueste Einträge
oben. Dieses Log reicht zurück bis zum Beginn des Projekts (übernommen aus `bewerbung/`, wo es
bis zum Einfrieren am 2026-08-19 weitergeführt wurde) — **ab dem 2026-08-19 ist dies der
aktuelle, aktiv weitergeführte Log der Weiterentwicklung in `creative/`.**

### 2026-08-26 (Favicon aus dem "N"-Logo eingebunden)
- Bisheriges Inline-SVG-Favicon (Platzhalter "NK"-Text auf schwarzem Rechteck) ersetzt durch
  ein richtiges Favicon-Set aus dem von Nic gelieferten "N"-Logo (Amber auf Schwarz):
  `favicon.ico` (16/32/48px) im Ordner-Root, PNGs in 16, 32, 192, 512px sowie ein
  `apple-touch-icon.png` (180px) in `img/`. Entsprechende `<link rel="icon">`-/
  `apple-touch-icon`-Tags im `<head>` ergänzt.

### 2026-08-26 (Google Analytics 4 eingebunden)
- GA4 (Property `G-VHTRVMJB0K`) per neuer, eigener Cookie-Kategorie "analytics"
  (vanilla-cookieconsent) eingebunden — `loadGaIfConsented()` laedt gtag.js erst, wenn
  `CookieConsent.acceptedCategory("analytics")` true ist, analog zum bestehenden
  `loadHcaptchaIfConsented()`-Muster. Bewusst eine EIGENE Kategorie statt in "functionality"
  gebuendelt, damit Nutzer:innen hCaptcha/Adobe-XD zustimmen koennen ohne zwingend auch
  Analytics zu akzeptieren (und umgekehrt) - granularere, rechtlich sauberere Trennung.
- Consent-Banner-Texte (Haupt-Dialog + Praeferenzen-Modal, neue Sektion "Statistik") nennen
  Google Analytics explizit beim Namen, wie es die Transparenzpflicht verlangt.
- CSP (script-src, connect-src, img-src) um googletagmanager.com/google-analytics.com
  erweitert.
- datenschutz.html: neuer Abschnitt 5 "Google Analytics (GA4)" (Anbieter, verarbeitete
  Daten, Rechtsgrundlage Art. 6 Abs. 1 lit. a DSGVO + Paragraf 25 Abs. 1 TDDSG, USA-Transfer
  via EU-U.S. Data Privacy Framework, Widerrufs-/Opt-out-Hinweis), Folgeabschnitte auf 6-13
  verschoben, Uebersichtsliste in Abschnitt 2 ergaenzt.
- **Hinweis:** hCaptcha ist in dieser datenschutz.html (anders als im live/-Ordner) noch
  nicht als eigener Abschnitt gelistet - das war schon vor dieser Aenderung so und wurde
  hier bewusst nicht mit erledigt (nicht Teil dieser Aufgabe). Falls gewuenscht, kann das
  nachgezogen werden.
- **Noch zu tun (nur du kannst das):** in der GA4-Property die Datenaufbewahrungsdauer (2
  oder 14 Monate) setzen, falls noch nicht geschehen.

### 2026-08-03 (Cookie-Consent-CDN: Subresource Integrity nachgezogen)
- Die beiden jsDelivr-Includes der `vanilla-cookieconsent`-Library (`cookieconsent.css` im
  `<head>`, `cookieconsent.umd.js` am Ende von `<body>`) hatten bisher KEIN `integrity=`-Attribut -
  ein Supply-Chain-Haerteungs-Luecke (kaeme das CDN oder das GitHub-Repo dahinter jemals kompromittiert,
  haette der Browser den veraenderten Code trotzdem anstandslos ausgefuehrt). Beide Hashes ueber
  jsDelivrs eigene Daten-API (`data.jsdelivr.com/v1/package/gh/orestbida/cookieconsent@3.1.0`)
  bezogen und als `integrity="sha256-..."` + `crossorigin="anonymous"` ergaenzt - der Browser
  verifiziert die Datei jetzt gegen den Hash und wuerde eine manipulierte Version blockieren statt
  auszufuehren.

### 2026-08-03 (Navigation: Burger-Menu fuer Tablet/Mobile ergaenzt)
- **Echter Bug, kein Redesign**: `.side-nav` (das untere Sektions-Menue) wird ab `max-width:900px`
  komplett `display:none` geschaltet - dafuer gab es bisher gar KEINEN Ersatz. Tablet/Mobile hatten
  seit jeher ueberhaupt keine Navigation zwischen den Sektionen.
- Neuer Burger-Button oben links (`#nav-toggle`, Klasse `icon-toggle-btn nav-toggle-btn` - gleiches
  Glass-Icon-Grundmuster wie Theme-/A11y-Switcher oben rechts), nur sichtbar `<=900px`. Klick oeffnet
  ein Dropdown-Panel (`#mobile-nav-panel`) mit denselben 10 Sektions-Links wie `.side-nav`.
  `position:fixed` wie alle anderen Eck-Icons - bleibt dadurch beim Scrollen automatisch oben links
  stehen ("mitziehend"), ohne eigene Scroll-Berechnung.
- Die Links im Panel tragen zusaetzlich zur eigenen Klasse `.mobile-nav-item` auch `.side-nav-item` -
  dadurch nimmt sie die bestehende Scroll-Spy-Schleife (`updateSideNav()`) automatisch mit, ohne
  dass die Aktiv-Hervorhebung doppelt gepflegt werden muss.
- Fokus-Falle, Escape-Taste, Klick-ausserhalb und Klick-auf-Link schliessen das Panel - exakt
  dasselbe Zugaenglichkeits-Muster wie beim bestehenden A11y-Panel. Button + Panel werden zusaetzlich
  ausgeblendet/geschlossen, sobald das ProteinUp-iFrame aktiviert wird oder ein Projekt-Modal offen
  ist (dieselbe `hidden-for-embed`/`nav-hidden`-Logik wie beim Theme-/A11y-Switcher bzw. `.side-nav`).

### 2026-08-03 (Rezensionen: 40px Abstand auf Tablet/Mobile explizit abgesichert)
- `.reviews-grid` hatte bereits `gap:40px` als Basiswert (gilt fuer Flex-Row UND -Column
  gleichermassen) - beim Umschalten auf gestapelte Spalte ab `max-width:720px` fehlte der Wert
  aber explizit in der Media-Query. Jetzt dort zusaetzlich direkt gesetzt, damit der 40px-Abstand
  zwischen den Rezensionen auf Tablet/Mobile auch bei kuenftigen Aenderungen sicher erhalten
  bleibt statt sich nur ueber Vererbung zu ergeben.

### 2026-08-03 (Hauptgalerie "Design, Fotografie & Illustration": entpinnt ab Tablet/Mobile)
- Ab `innerWidth <= 900` (`isGalleryPinActive()`) ist die Galerie komplett entpinnt: kein hoher
  Scroll-Track/keine 100vh-Sticky-Zentrierung mehr, `.gallery-row` wird ein stinknormaler,
  nativ touch-scrollbarer Streifen (`overflow-x:auto`) statt eines per JS gegen die
  Seiten-Scroll-Position gesetzten Transforms - dadurch faellt der grosse Leerraum zwischen
  Headline und Slider auf Tablet automatisch weg (kein 100vh-Zentrierungs-Overhead mehr) und
  man kann mit dem Finger normal durchwischen, ohne dass JS dagegen ankaempft.
- `updateGallery()` steigt dort fruehzeitig aus und raeumt beim Unterschreiten der
  Breakpoint-Grenze einmalig alle zuvor gesetzten Inline-Transforms/Paddings auf
  (`galleryPinWasActive`-Flag), damit nichts vom gepinnten Zustand haengen bleibt.
- Die in #276 eingefuehrte Maus-Drag-Bedienung pro Reihe (`makeGalleryRowDrag`) wird ab
  Tablet/Mobile gar nicht erst angehaengt, um Kollisionen mit dem jetzt nativen Scrollen zu
  vermeiden.

### 2026-08-03 (Vita: kein Brenneffekt mehr ab Tablet/Mobile)
- Ab `innerWidth <= 900` (`zzSkipIgnite`, einmalig beim Laden ausgewertet) bekommen ALLE
  Vita-Punkte sofort `.zz-open` statt nur der erste - kein 3s-Hover-Anzuenden mehr noetig, alle
  Stationen sind direkt ausgeklappt sichtbar. Der "Hier anzünden"-Hinweispfeil wird dort gar
  nicht erst erzeugt, die Hover-Listener fuers Anzuenden werden nicht angehaengt.
- Die Zickzack-Linie wird in diesem Fall direkt als fertig durchgebrannt gerendert
  (`zzIgnited = true`, `.zz-lit` + `strokeDashoffset:0`) statt animiert.
- Bugfix nebenbei gefunden: `buildZigzagPath()` setzte bei JEDEM Aufruf (auch bei `resize`/
  `load`, z.B. bei einem Orientierungswechsel auf dem Handy) die Linie hart auf "unbeleuchtet"
  zurueck - das haette eine bereits durchgebrannte oder direkt ausgeklappte Linie nach einem
  Resize wieder verschwinden lassen. Neuer `rebuildZigzagPath()`-Wrapper baut den Pfad neu und
  stellt den "an"-Zustand danach sofort wieder her, haengt jetzt an `resize`/`load` statt der
  rohen Funktion (betrifft auch Desktop-Nutzer, die schon angezuendet hatten und dann das
  Fenster resizen).
- Layout bleibt wie zuvor: Tablet (bis 900px) behaelt das alternierende Links/Rechts-Zickzack,
  Mobile faellt weiterhin ueber die bereits bestehende `max-width:700px`-Regel auf eine
  linksbuendige Liste untereinander zurueck (unveraendert).

### 2026-08-03 (SEO-Graphen: responsives Grid + keine Animation ab Tablet/Mobile)
- `.seo-gauges` von organischem `flex-wrap` auf ein explizites Grid umgestellt: Desktop 4 Ringe
  nebeneinander, Tablet (`max-width:900px`) fest 2 pro Reihe, Mobile (`max-width:560px`) 1 pro
  Reihe untereinander.
- Sowohl die Cursor-Magnet-Verformung der Ringe als auch das Fuell-/Hochzaehl-Einploppen beim
  Reinscrollen laufen jetzt nur noch ab Laptop-Breite (`seoGaugesAnimated = innerWidth > 900`,
  einmalig beim Laden ausgewertet) - auf Tablet/Mobile werden weder die Mousemove-Listener
  angehaengt noch der Count-up-/Dashoffset-Tween gestartet, die Ringe zeigen den Endwert dort
  sofort statisch.

### 2026-08-03 (Responsive-Runde: Sektions-Abstaende, Webprojekte-Slider Tablet/Mobile)
- **Sektions-Abstaende oben/unten** jetzt responsiv statt fix 100px ueberall: Laptop/Desktop
  80px (Basiswert in der globalen `section`-Regel), Tablet (`max-width:900px`) 60px, Mobile
  (`max-width:560px`) 50px. Einzelne Sektionen mit bewusst abweichendem Abstand (`#seo`,
  `#proteinup-outro` etc.) behalten ihre eigenen ID-Overrides unveraendert.
- **Webprojekte-Slider Seitenabstand**: `.proj-webprojekte-head`/`.proj-slider-wrap`/
  `#proj-slider-scrollbar` hatten einen festen 40px-Wert auf allen Breakpoints - ab Tablet
  (`max-width:900px`) fallen sie jetzt auf dieselbe responsive `clamp(20px,6vw,64px)`-Formel
  zurueck wie der Rest der Seite (identisch zu `#projects .section-head`).
- **Webprojekte-Slider Scroll-Pin abgeschaltet ab Tablet/Mobile**: der hohe Pin-Track
  (`.proj-track`/`.proj-sticky`) zwang per `updateProjPin()` jeden Frame `scrollLeft` auf die
  aus dem Seiten-Scroll berechnete Position - das kollidierte mit nativem Finger-Wischen.
  Ab `max-width:900px` ist der Track jetzt `height:auto`/`position:static` (kein Pin mehr) und
  `updateProjPin()` steigt ueber `isProjPinActive()` fruehzeitig aus - der Slider ist dort ein
  ganz normaler, frei durchsliden-barer Touch-Streifen. Pfeile/Bottom-Spacing folgen automatisch
  aus der neuen responsiven Sektions-Abstands-Regel oben.

### 2026-08-03 (Webprojekte-Slider: Pin-Position wieder vertikal zentriert)
- `.proj-sticky` hatte seit einem frueheren Fix `align-items:flex-start` + Auto-Hoehe (Slider
  saß direkt am oberen Bildschirmrand) - auf Nutzerfeedback ("der ist zu weit am top vom
  screen") zurueck auf eine echte 100vh/100dvh-Pin-Flaeche mit `align-items:center`, exakt wie
  bei der Hauptgalerie (`.gallery-sticky`). Der Slider loest sich jetzt beim Reinscrollen und
  bleibt mittig im Viewport stehen, bis er komplett durchgescrollt ist.

### 2026-08-03 (Hauptgalerie: jede Reihe einzeln per Klick+Ziehen scrollbar)
- Vorher haengte ein Drag irgendwo im gepinnten Galerie-Bereich am globalen Seiten-Scroll-
  "target" und bewegte dadurch immer BEIDE Reihen gleichzeitig (gegenlaeufig) - jetzt hat jede
  Reihe (`#gallery-row-1`/`#gallery-row-2`) ihren eigenen Klick-und-Zieh-Bereich mit eigenem
  manuellen Offset, direkt 1:1 mit der Zeigerbewegung (kein Skalierungsfaktor mehr, fuehlt sich
  wie "die Reihe direkt am Bild packen" an, analog zu Fellbox-/Webprojekte-Slider-Drag).
- Der manuelle Offset (`galleryRow1Manual`/`galleryRow2Manual`) bekommt fuer 1.8s Vorrang vor
  dem scroll-gebundenen Wert (`galleryRowXAuto`, weiterhin aus dem Seiten-Scroll-Fortschritt "p"
  berechnet) und faellt danach automatisch wieder an ihn zurueck - identisches Muster wie beim
  Webprojekte-Slider (`projManualUntil`).
- Alte globale Drag-Logik (`galleryStickyEl`-weiter Pointerdown, der den Seiten-Scroll-Target
  bewegte) komplett entfernt, `cursor:grab` sitzt jetzt auf `.gallery-row` statt auf dem ganzen
  Sticky-Wrapper.

### 2026-08-03 (Weiterbildung: zurueck zu einfacher Liste ohne Kacheln/Stack-Effekt)
- Die Karten-Optik (abgerundete Kacheln mit Hintergrund/Border/Schatten, `.wb-row` als
  eigenstaendige "Karte") und der komplette Pin-/Stapel-Scroll-Effekt (`updateWbStack()`,
  `wbRows`/`wbRowOffsets`, Aufruf im raf-Loop) wurden entfernt - `.wb-list` ist jetzt wieder
  eine einfache linksbuendige Liste mit duenner Trennlinie zwischen den Zeilen (`border-bottom`),
  kein Sticky/Transform-Gebastel mehr noetig.
- Einzig die Check-Icons (✓) blenden weiterhin "etwas ein" - neuer, leichtgewichtiger
  `IntersectionObserver` pro Icon (`wbCheckObserver`, gleiches Muster wie beim ProteinUp-
  Prozess-Grid) laesst sie mit einem kleinen Pop-Effekt (`opacity`/`scale`) auftauchen, sobald
  die jeweilige Zeile beim Scrollen in den Sichtbereich kommt - dadurch erscheinen sie
  automatisch nacheinander, ohne eigenen rAF-Loop.

### 2026-08-03 (Ideensammlung-Chat: Phone-Chat-Redesign)
- **Handy-Rahmen**: der Chat sitzt jetzt in einem schmalen `.pu-phone-frame` (max. 380px breit,
  abgerundeter Rahmen + kleine "Lautsprecher"-Pille oben) statt breit ueber die ganze Sektion zu
  laufen - liest sich dadurch wie ein Messenger-Screenshot (Instagram/WhatsApp-Optik).
  Invert-Variante (weisser Case-Study-Hintergrund) mit eigenem, dunkel abgesetztem Rahmen.
- **Keine Namens-Label mehr pro Nachricht** - wie in echten Messenger-Apps unterscheiden jetzt
  nur noch Bubble-Farbe + Ausrichtung (rechts/gelb = Ich, links/grau = Mein Gehirn) die beiden
  Seiten, `.pu-chat-label` wurde komplett entfernt (CSS + JS + Cursor-Landbar-Selektor).
  Bubble-Ecken jetzt mit "Sprechblasen-Schwanz"-Ecke (`border-bottom-right/left-radius:4px`)
  wie bei echten Messengern.
- **Tipp-Animation**: neue `.msg-typing`-Bubble (drei pulsierende Punkte, `puTypingBounce`-
  Keyframe) liegt per CSS-Grid-Stacking exakt ueber jeder Nachricht und blendet erst kurz nach
  dem Scroll-Einploppen der Zeile zur echten Nachricht ueber - simuliert das kurze "..." vor
  jeder neuen Nachricht.
- **Einheitliche Bubble-Laenge**: `.pu-chat-row .msg` hat jetzt `min-width:64px` und wickelt
  wieder normal um (`white-space:normal` statt der bisherigen erzwungenen Einzeiligkeit) - die
  alte "so breit wie der Inhalt, nie umbrechend"-Regel war fuer die schmale Handy-Breite nicht
  mehr passend.

### 2026-08-03 (Steckdose: Stecker liegt am Boden, Kabel fuellt sich beim Einstecken gelb)
- **Stecker-Idle-Animation**: die bisherige `cdFloat`-Schwebe-Animation (translateY rauf/runter)
  wurde entfernt - der Stecker bewegt sich in Ruheposition nicht mehr, wirkt dadurch wie auf
  einem unsichtbaren Boden liegend. Stattdessen neues `cdRestPulse`-Keyframe: sanftes Pulsieren
  der Schatten-Tiefe (drop-shadow von flach zu tiefer und zurueck, 2.8s) als dezentes
  "Atmen"/Ruhe-Signal, ohne die Position zu verlassen. Greifen/Ziehen/Einstecken unveraendert.
- **Kabel-Fuell-Effekt**: neues zweites `<path>` (`.pu-cable-fill`, gelb) liegt exakt ueber dem
  bisherigen gedimmten Kabel-Pfad und nutzt den klassischen SVG-"Linie zeichnen"-Trick
  (`stroke-dasharray`/`stroke-dashoffset` auf Pfadlaenge) um beim Einstecken zuegig vom Stecker
  Richtung rechtem Seitenrand durchzulaufen, statt sich schlagartig einzufaerben - beim
  Herausziehen laeuft der Fuellstand genauso wieder zurueck. Fortschritt (`cableFillProgress`,
  0-1) wird pro Frame in `updateCablePath()` gedaempft auf den Zielwert (`cdInserted`) zubewegt,
  dadurch bleibt es auch bei schnellem Mehrfach-Stecken/Ziehen ruckelfrei. Die alten
  `cd-near`/`is-inserted`-Sofort-Farbwechsel-Regeln auf `.pu-cable-path` wurden entfernt, da sie
  jetzt vom neuen Overlay-Pfad uebernommen werden.

### 2026-08-03 (Nav "andockt" kurz vor dem Footer-Bereich)
- **Nav-Docking**: die untere `.side-nav` folgt beim Scrollen weiterhin `position:fixed` wie
  bisher, wechselt aber kurz bevor der Footer-Bereich (Signatur "Niclas Koch" / "Kontakt"-
  Headline) erreicht wird auf `position:absolute` (Klasse `.nav-docked`) und bleibt dort an
  einer fest berechneten Dokument-Position stehen, statt weiter über dem Footer-Inhalt zu
  schweben. Berechnung läuft in `updateOnScroll()` über `footerAreaEl.getBoundingClientRect()`
  gegen die aktuelle Nav-Höhe (`sideNavEl.offsetHeight`) mit 30px Sicherheitsabstand — dadurch
  passt sich das Andocken automatisch an, falls sich Nav- oder Footer-Höhe später ändern
  (Resize, neue Nav-Einträge etc.), ohne Hardcoded-Pixelwerte.
- Neue JS-Konstante `footerAreaEl` (Referenz auf `#footer-area`).

### 2026-08-03 (Impressum & Datenschutzerklärung erstellt)
- Zwei neue eigenständige Seiten `impressum.html` und `datenschutz.html` (nicht Teil der
  Single-File-`portfolio.html`, im gleichen dunklen Seiten-Theme gehalten) mit `noindex,
  follow`-Meta, da rechtlich zwar erreichbar aber nicht aktiv beworben werden sollen.
- **Impressum**: § 5 DDG-Angaben mit den bereitgestellten Daten (Niclas Koch, Aachener Str.
  32a, 40223 Düsseldorf, Tel. 0172 9350097, hallo@nicworks.de), Hinweis auf privates Portfolio
  ohne USt-IdNr. ("Bin Privat"), Haftung für Inhalte/Links, Urheberrecht,
  Verbraucherstreitbeilegung.
- **Datenschutzerklärung**: Verantwortlicher, Übersicht der Verarbeitungen, Hosting
  (GitHub Pages), Kontaktformular (Formspree, USA, Rechtsgrundlage), Cookie-Consent-Tool
  (vanilla-cookieconsent, localStorage-basiert), Tabelle externe Dienste (hCaptcha/Intuition
  Machines Inc. + Adobe-XD-Embed/Adobe Inc., beide USA, nur nach Einwilligung ladend),
  Betroffenenrechte inkl. zuständiger Aufsichtsbehörde NRW, SSL/TLS-Hinweis.
- Beide Seiten sind **ausdrücklich als Entwurf markiert** (Hinweis-Box oben) — vor
  Veröffentlichung per kostenlosem Generator (e-recht24.de o. ä.) gegenprüfen oder anwaltlich
  absichern lassen, wie ursprünglich gewünscht. Keine Daten wurden erfunden — alle Angaben
  stammen direkt von Nic.
- Footer verlinkt jetzt auf beide Seiten (`.footer-legal-links`) sowie auf die
  Cookie-Einstellungen (`#cookie-settings-trigger`, öffnet erneut das Consent-Panel).

### 2026-08-03 (Cookie-Consent-Banner, CSP-Fix, ProteinUp-Invert-Nachaudit, Nav-Scrim entfernt)
- **Cookie-Consent-Banner**: nutzt jetzt die etablierte, kostenlose Open-Source-Library
  "vanilla-cookieconsent" (MIT-Lizenz, https://github.com/orestbida/cookieconsent, CDN:
  cdn.jsdelivr.net) statt einer Eigenbau-Loesung - unten links positioniert, mit eigenem
  Floating-Icon-Button zum jederzeitigen Wiederaufrufen. Kategorie "necessary" (immer aktiv,
  kein echtes Tracking dahinter) und "functionality" (schaltet hCaptcha + das Adobe-XD-Embed
  frei) klar getrennt mit "Alle akzeptieren"/"Nur essenziell". **Wichtig, per Test verifiziert**:
  hCaptcha-Skript und das Adobe-XD-iFrame laden nachweislich NICHT, solange keine Zustimmung
  erteilt wurde (auch nicht beim Scrollen in den jeweiligen Bereich) - erst nach "Alle
  akzeptieren" (oder einem gezielten Klick auf den Consent-Platzhalter direkt am Adobe-Embed)
  wird tatsaechlich nachgeladen. Getestet per Playwright mit einem lokalen Stub der Library
  (die Sandbox selbst hat keinen Internetzugriff aus dem Headless-Browser heraus; die echten
  CDN-URLs wurden separat per Fetch auf Erreichbarkeit/Inhalt geprueft).
- **CSP-Bugfix gefunden und behoben**: die bestehende Content-Security-Policy erlaubte in
  `connect-src` bisher nur `hcaptcha.com` - ein `fetch()` an `formspree.io` (Kontaktformular)
  waere dadurch faktisch geblockt worden, sobald die echte Formspree-URL eingetragen ist. Jetzt
  ergaenzt: `connect-src`/`form-action` um `https://formspree.io`, `script-src`/`style-src` um
  `https://cdn.jsdelivr.net` (fuer die Cookie-Consent-Library).
- **ProteinUp Case Study: fehlende Schwarz-Overrides nachgezogen** - die in einer spaeteren
  Session ergaenzten Bereiche (Mission/Zielgruppe, Planung & Assets, Tools-Grid) hatten beim
  urspruenglichen Rot-Audit noch nicht existiert und standen dadurch weiterhin mit hellem
  var(--text)/var(--text-dim) auf der weissen Case-Study-Flaeche - kaum lesbar. 5 neue
  `#proteinup-info.invert`-Regeln ergaenzt.
- **Nav-Hintergrund-Scrim entfernt** (Nutzer-Feedback: "klappt so nicht") - der zuvor
  ergaenzte durchgehende dunkle Verlaufs-Hintergrund hinter der Nav lag als sichtbarer Balken
  ueber der GESAMTEN Seite, nicht nur der Case-Study-Flaeche. Ersetzt durch eine gezieltere
  Loesung: die Nav-Schrift selbst faerbt sich dunkel (`.nav-on-invert`), sobald sie ueber der
  weissen Flaeche steht - gleiches Prinzip wie alle anderen Textelemente im Case-Study-Bereich,
  kein zusaetzliches Hintergrund-Element mehr.

### 2026-08-03 (Navigation: immer sichtbar statt nur bei bestimmten Sektionen)
- Die untere Nav (`.side-nav`) wurde bisher waehrend der weissen ProteinUp-Case-Study-Flaeche
  komplett ausgeblendet (schlechte Lesbarkeit auf Weiss war der urspruengliche Grund). Jetzt
  bleibt sie durchgehend sichtbar - dafuer sorgt ein neuer fester dunkler Verlaufs-Scrim hinter
  der Nav (`.side-nav::before`), der auf jedem Hintergrund fuer ausreichend Kontrast sorgt.
- Ausgeblendet wird die Nav nur noch, wenn eine echte Vollbild-Ueberlagerung offen ist: das
  Projekt-Detail-Modal (`#project-modal.open`) oder das aktivierte ProteinUp-iFrame
  (`#pinned-embed-frame.pe-active`) - geprueft in `updateOnScroll()` bei jedem Frame mit
  tatsaechlicher Scroll-Bewegung.

### 2026-08-03 (Webprojekte: Seitenabstand auf 40px)
- Headline ("Portfolio 02"/Webprojekte), Slider-Wrap (Pfeile+Slider) und die Scroll-Leiste
  hatten bisher `clamp(20px,6vw,64px)` als Seitenabstand (auf Desktop effektiv 64px) - auf
  Wunsch jetzt fest auf 40px links/rechts, scoped per neuer Klasse `.proj-webprojekte-head`
  bzw. per ID `#proj-slider-scrollbar`, damit weder die "Grafikprojekte"-Headline noch die von
  `renderPpRow()` wiederverwendete Fellbox-Scrollbar mitbetroffen sind.

### 2026-08-03 (ProteinUp Case Study: Planungsinhalte ergaenzt, Tools-Grid entkachelt)
- **Neuer Block "Mission & Zielgruppe"** direkt nach dem Aufgabenstellung-Zitat: Mission
  ("Hochwertiges Proteinpulver herstellen und vertreiben...") und Zielgruppen-Beschreibung
  (gesundheitsbewusste Menschen, Fitness-Liebhaber, 18-50+ mit Schwerpunkt Mitte/Ende 20) als
  zentrierter Fliesstext-Block (`.pu-mission`).
- **Ideensammlung-Chat erweitert**: zwei neue Nachrichten-Paare vor den bestehenden - "Erste
  Fragen" (7 Fragen zu Geschmack, Naming, Zielgruppe, UX, Farben/Typo, Logo, Design-Stil) und
  "Seitenstruktur" (Start/Ueber uns/Unternehmensphilosophie/Sortiment/Aktionen/Store-Finder),
  jeweils als `bot`-Liste im `PU_CHAT`-Array (`PU_ERSTE_FRAGEN`, `PU_STRUKTUR`). Zusaetzlich 2
  neue Eintraege in `PU_IDEAS_CUSTOMER` (Gratis-Shaker-Aktion, Filial-/Online-Shop-Verweis).
- **Neue Sektion "Planung & Assets"**: 3er-Grid (`.pu-asset-grid`) mit 6 echten Planungsbildern
  aus `img/proteinup/` (Logo-Skizzen Procreate, Logo-Reinzeichnung, Font-/Farb-/Produkt-
  Vorplanung, Produktmockups) - eingebunden in dieselbe Lightbox-Navigation (Pfeile/Zoom-on-
  Hover) wie Galerie und Webprojekte-Slider. Alle 6 Bilder vor dem Embedding komprimiert
  (Python/PIL, max. 1100px Breite, JPEG Qualitaet 78) um die Dateigroesse trotz Base64-Embedding
  vertretbar zu halten.
- **"Tools & Technologien" entkachelt**: von `.glass`-Kacheln zu einem festen `dt`/`dd`-Grid
  (`.pu-tools-grid`, `grid-template-columns: max-content 1fr`) ohne Rahmen/Hintergrund - auf
  Wunsch, da die Kachel-Optik hier nicht gewollt war.

### 2026-08-03 (Light Mode entfernt/ausgelagert, Webprojekte-Abstaende korrigiert)
- **Light Mode vorerst entfernt** (siehe "THINGS TO ADD" ganz oben) - Toggle-Button (`#theme-toggle`)
  aus dem HTML entfernt, der zugehoerige Klick-Handler ist per `if(!btn) return;`-Guard inert statt
  geloescht (reaktivierbar ohne weitere Aenderungen). `.a11y-toggle-btn` von `right:64px` auf
  `right:20px` verschoben, da sie vorher links neben dem jetzt fehlenden Theme-Button sass.
  Der komplette bisherige Stand inkl. vollstaendigem Light-Mode-Code liegt unangetastet auf dem
  neuen Branch `light-mode`. Zum Sichern/Teilen dieses Branches auf GitHub lokal ausfuehren:
  ```
  git push -u origin light-mode
  git push origin main
  ```
- **Webprojekte-Bereich: 3 Abstaende korrigiert**
  - "Portfolio 02"-Headline zurueck auf `margin-top:100px` (war zwischenzeitlich auf 40px, aber
    zu wenig).
  - Abstand Headline -> Slider auf exakt 40px: `.proj-sticky` hatte `height:100vh` +
    `align-items:center`, wodurch der (viel kuerzere) Slider mittig im 100vh-Pin-Bereich schwebte
    und oben UND unten riesige Leerraeume entstanden. Jetzt `align-items:flex-start` und keine
    feste Hoehe mehr (die JS-Pin-Logik `updateProjPin()` liest die Sticky-Hoehe ohnehin dynamisch
    per `offsetHeight`) - der Slider sitzt dadurch direkt unter der Headline, Inhaltshoehe statt
    Viewport-Hoehe.
  - Abstand nach dem Slider zur naechsten Sektion dadurch ebenfalls auf die regulaeren 100px
    Section-Padding reduziert (vorher durch denselben Leerraum-Effekt deutlich mehr).

### 2026-08-03 (Icon-Groesse, Skillset-Merge, Lightbox-Navigation, Abstandssystem, Slider-Tempo, Drip-Landung)
- **Pain-Tile-Icons an Skillset-Icon-Groesse angeglichen**: `.pain-tile .picon`/`.solution-tile
  .picon` von 28px auf 30px (exakt wie `.flip-content svg` im Skillset-Bereich).
- **Skillset: "KI & Zukunftstech" und "Frischer Vibe Coder" zu einer Kachel zusammengefuehrt**
  - Beschreibungstext gemergt (erwaehnt weiterhin "frischer Vibe Coder" + Claude Code, Cursor,
    GIT), Duplikat-Eintrag aus `SKILLS` und das zugehoerige `ICONS`-SVG entfernt - jetzt 6 statt
    7 Skillset-Kacheln (glatt im 3er-Grid).
- **Cursor-Tropfen: exakte Landung auf der Linie bei Kacheln** - `computeEdgeLanding()`/
  `settleDrip()` bekommen ein `isObject`-Flag: bei Kacheln/Objekten (`OBJECT_LANDABLE_SELECTOR`)
  entfaellt jetzt sowohl der 2-5px-Inset als auch der zusaetzliche Schwerkraft-Zug nach unten,
  sodass der Tropfen exakt auf der Kante/Linie liegen bleibt statt sichtbar ein paar Pixel
  darueber hinaus zu fallen. Bei Text bleibt das bisherige, natuerlichere Verhalten erhalten.
- **Einheitliches Abstandssystem**: Eyebrow → Headline jetzt 20px (vorher 16px), Section-Head →
  Content jetzt 40px (vorher 80px), Grid-Gaps von Kachel-Grids die bisher abwichen
  (`.pain-grid`/`.solution-grid` 24px→40px, `.info-steps-grid` 16px→40px) auf die ueberall
  sonst schon genutzten 40px vereinheitlicht. Section-zu-Section-Padding bleibt bei 100px
  (bestehender Standard, bestaetigt). Bewusste Ausnahmen (`#seo` bottom:40px,
  `#proteinup-intro` margin-bottom:20px) bleiben unangetastet.
- **Fullsize-Lightbox: Navigations-Pfeile + Zoom-on-Hover** - `openImgLightbox()` nimmt jetzt
  optional eine Bilderliste + Index entgegen; neue Pfeil-Buttons (`#img-lightbox-prev/-next`,
  per Klick, Pfeiltasten oder Wraparound) erlauben das Durchblaettern innerhalb desselben
  Sliders ohne vorheriges Schliessen - angebunden an die Hauptgalerie (`buildGalleryTrack`) und
  den Webprojekte-Slider (`PROJECTS`-Array). Zusaetzlich folgt ein Hover-Zoom (Magnifier-Effekt,
  scale 1.7 mit `transform-origin` an der Mausposition) dem Cursor ueber dem Lightbox-Bild.
- **Hauptgalerie-Slider verlangsamt**: `.gallery-track` Pin-Hoehe von 260vh auf 380vh erhoeht -
  die Reihen liefen beim normalen Scrollen zu schnell durch ("fliegen erade durch").
- **Webprojekte-Slider: weniger hakelig + engerer Headline-Abstand**
  - `.proj-track` Pin-Hoehe von 220vh auf 340vh erhoeht (war deutlich kuerzer als die
    Hauptgalerie, dadurch lief derselbe Slide-Weg auf viel weniger Scroll-Distanz ab).
  - `scroll-snap-type:x proximity` von `.proj-slider` entfernt - kollidierte waehrend des
    gepinnten Scroll-Durchlaufs mit den staendigen JS-`scrollLeft`-Schreibzugriffen aus
    `updateProjPin()` und trug zum hakeligen Laufen bei.
  - Abstand der "Webprojekte"-Ueberschrift zu den Fellbox-Reihen darueber von
    `margin-top:80px` auf `40px` reduziert (war deutlich zu gross).

### 2026-07-30 (Kachel-Padding vereinheitlicht, Solution-Tile-Glow, SEO-Abstand, Weiterbildung-Stack-Bugfix)
- **Padding aller Kacheln auf 30px vereinheitlicht** (pain-tile, solution-tile, flip-content,
  wb-row, contact-panel, pu-quote, pu-tool-tile, pu-wirkung-tile, info-step-tile, pu-process-line)
  - `review-tile` bewusst ausgenommen (kein Kachel-Look gewuenscht, siehe #182).
- **"Die Lösung: Mich" (solution-tile): deutlicherer Dauer-Glow** - vorher kaum sichtbarer
  Glow (`--glow-soft`, 26px Radius) durch staerkeren `--glow`-Wert + groesseren Radius ersetzt
  (bleibt wie gewuenscht ein reiner Dark-Mode-Effekt).
- **SEO "Tools & eigene Auswertung": Abstand nach unten auf 40px** (`#seo{ padding-bottom:40px }`,
  scoped statt der globalen 100px Section-Padding).
- **Bugfix "Abgeschlossene Weiterbildungen" - Stack-Effekt am Ende unvollstaendig**: mehrere
  `position:sticky`-Geschwister mit gleichem `top` gaben den Stapel-Effekt zwar korrekt, solange
  sie einzeln einrasten - ganz am Ende der Liste loesten sich aber ALLE Karten gleichzeitig vom
  Sticky-Zustand (Playwright-Scroll-Trace bestaetigt), wodurch ein Rest-Spalt der unteren Karten
  sichtbar blieb. Komplett neu geloest: `position:sticky` entfernt, Stapel-Effekt jetzt
  deterministisch in JS berechnet (`updateWbStack()`, gleiches Muster wie `updateGallery()`/
  `updateProjPin()` - Scroll-Fortschritt direkt aus `offsetTop` lesen, Transform pro Karte direkt
  setzen). Per Playwright verifiziert: alle 4 Karten rasten jetzt exakt uebereinander ein und
  scrollen als ein Block ohne Spalt weiter.

### 2026-07-30 (Barrierefreiheits-Audit: prefers-reduced-motion + Kontrast-Fix Light Mode)
- Tiefer Security-/Web-Standards-/Barrierefreiheits-Audit durchgefuehrt (CSP, `rel=noopener`,
  Alt-Texte, Fokus-Zustaende, Heading-Hierarchie, Farbkontraste per WCAG-Formel nachgerechnet).
  Zwei echte Befunde gefunden und behoben:
  1. **`prefers-reduced-motion` fehlte komplett** - trotz eigenem Scroll-Hijacking (rAF-Loop statt
     nativem Scroll) und vieler dauerhaft laufender Animationen (Rauch, Kerze, Magnet-Tilt) gab es
     keinerlei Ruecksichtnahme auf die Betriebssystem-Einstellung "Bewegung reduzieren" (WCAG 2.3.3).
     Jetzt: globaler `@media (prefers-reduced-motion: reduce)`-Reset fuer alle CSS-Transitions/
     -Animationen, Kerzenflackern abgeschaltet, kein ambientes Rauch-Spawning mehr, Magnet-Tilt
     reagiert nicht mehr auf Mausbewegung, und der eigene Scroll-Nachzieh-Faktor rastet fast 1:1
     ein statt "schwimmend" hinterherzuziehen (per `prefersReducedMotion`-Flag + `matchMedia`-
     Listener, live umschaltbar).
  2. **Light-Mode `--text-dim` knapp unter WCAG-AA-Kontrast**: rechnerisch nachgerechnet (relative
     Luminanz-Formel) ergab `rgba(17,17,17,0.58)` auf `--bg` (#F4F4F2) nur 4.48:1 - knapp unter dem
     fuer Fliesstext geforderten 4.5:1. Alpha auf 0.62 angehoben (jetzt 5.12:1, klar AA-konform).

### 2026-07-30 (Light-Mode-Rauch: nur der Faden nahe am "Docht" reagiert auf Handbewegung)
- Vorher zog die AKTUELLE Mausgeschwindigkeit noch spuerbar an jedem Rauchpartikel, egal wie
  alt/weit aufgestiegen es schon war (Proximity-Falloff bodete bei 25% Rest-Kopplung aus statt
  auf 0 zu gehen) - dadurch wirkte es, als wuerde die GANZE Rauchwolke von der Hand mitgezogen,
  nicht nur der frisch entstehende Faden. Auf Nutzerwunsch ("wie ein qualmendes Streichholz -
  nur der Rauch am Stäbchen soll nachziehen, nicht der schon aufgestiegene") deutlich steilerer,
  quadratischer Falloff: die Kopplung an Mausgeschwindigkeit/Wirbel ist bereits nach 18% der
  Partikel-Lebenszeit komplett auf 0 - danach bewegt sich die Rauchwolke nur noch per eigenem
  Auftrieb + unabhaengiger Luft-Turbulenz weiter, unbeeinflusst von weiteren Cursor-Bewegungen.
  Die Kopplungsstaerke fuer den jungen Faden selbst wurde dafuer erhoeht (0.045→0.09), damit der
  Effekt dort weiterhin deutlich sichtbar bleibt trotz des kuerzeren Zeitfensters.

### 2026-07-30 (Making-of-Modal: technischer, mit Icon-Kacheln statt nummerierter Liste)
- Die nummerierte Schritt-Liste ("Wie diese Seite entstanden ist") wurde durch ein 2-spaltiges
  Kachel-Grid ersetzt: jeder Bauschritt hat jetzt ein kleines Icon (gleicher Strichstil wie
  Pain/Skill-Icons) plus einen kurzen, technischeren Zwei-Zeiler statt einer trockenen
  Aufzaehlung (z.B. "`IntersectionObserver` löst die Ein-/Aufhell-Animationen aus" statt nur
  "Pain Points vs. Lösung im Vergleich"). Intro-Absatz ebenfalls technischer: erwaehnt jetzt
  explizit den eigenen `requestAnimationFrame`-Scroll-Loop statt nativem Browser-Scrollen.
  Inline-Code-Begriffe im Fliesstext bekommen eine dezente Hervorhebung (`.info-modal-card code`).

### 2026-07-30 (Sammel-Update: Kachel-Zentrierung, Scroll-Bug-Fixes, Weiterbildung-Stapel)
- **Pain- + Solution-Kacheln ("Kennst du das?" / "Die Lösung: Mich"):** beide Reihen jetzt
  gleichermassen komplett zentriert (Icon+Text horizontal UND vertikal) statt nur die unteren
  gelben Kacheln - Nutzerentscheidung von vorher (obere Kacheln bewusst linksbuendig) wurde
  hier bewusst geaendert.
- **"Tools & eigene Auswertung"-Kacheln (SEO):** Icon+Titel+Text ebenfalls zentriert, scope-
  eingeschraenkt auf `#seo-highlights-grid`, damit die (dieselbe Klasse nutzenden) ProteinUp-
  "Wirkung"-Kacheln weiterhin linksbuendig bleiben.
- **Bugfix - Projekt-Slider blockierten Seiten-Scroll:** die Fellbox-/Private-Projekte-Mini-
  Galerien (`.pp-strip`) haben Mausrad-Scrollen bislang immer noch abgefangen und in
  horizontales Sliden umgewandelt, sobald der Cursor darueber stand - dadurch liess sich die
  Seite an der Stelle nicht mehr normal weiterscrollen. Das Wheel-Hijacking komplett entfernt;
  diese Streifen werden jetzt ausschliesslich per Klick-und-Halten + Ziehen bedient, das
  Mausrad scrollt normal die Seite weiter.
- **Webprojekte-Slider: hakeliges Sliden behoben:** der Scroll-Pin-Mechanismus (siehe letzter
  Eintrag) hat den Fortschritt bisher an `projTarget` uebergeben und dann ERNEUT per
  `projSliderRaf` geeast - zwei gestapelte Easing-Schritte hintereinander fuehlten sich eher
  rubberig/verzoegert an. Waehrend scroll-gesteuert wird `scrollLeft` jetzt direkt 1:1 aus dem
  Scroll-Fortschritt gesetzt (wie die Hauptgalerie ihre Transforms berechnet, ohne
  Zusatz-Easing-Schicht) - Drag/Pfeile behalten ihr eigenes Easing fuer manuelle Bedienung.
- **Weiterbildung-Liste: zentriert + Stapel-Effekt beim Scrollen:** auf Nutzerwunsch von der
  linksbuendigen Trennlinien-Liste zu zentrierten Karten gewechselt, die sich beim Scrollen
  sichtbar stapeln (jede Karte bleibt per `position:sticky` auf gleicher Hoehe haengen, die
  naechste schiebt sich mit steigendem z-index darueber).

### 2026-07-30 (Light Mode: eigenes, abgelöstes Hero-Layout)
- **Erster Baustein des komplett eigenstaendigen Light-Mode-Designs (siehe Ankuendigung):** der
  Hero sieht im Hellmodus jetzt strukturell anders aus als im Dunkelmodus statt nur umgefaerbt
  zu sein. "NICLAS KOCH" laeuft einzeilig ueber die volle Breite oben, darunter links das Foto
  mit der neuen Tagline "Allrounder. Für dich." direkt darunter, rechts daneben Fliesstext
  (erstmal Lorem Ipsum als Platzhalter, wie von Nic angekuendigt).
- **Technisch per CSS-Grid auf denselben DOM-Elementen** (`.hero-name`/`.hero-photo`) statt
  Duplizierung - nur zwei neue, Light-Mode-exklusive Text-Elemente (`.hero-light-tagline`/
  `.hero-light-text`) wurden ergaenzt, im Dark Mode per `display:none` unsichtbar und ohne
  Layout-Einfluss. Der bisherige getippte Claim + Pfeil-Text (`h1`/`h3.mono`) wird im Hellmodus
  ausgeblendet, da die neue Tagline dessen Rolle uebernimmt; der Scroll-Pfeil bleibt erhalten.
  Eigene Media-Query fuer schmale Viewports (Grid faellt auf eine Spalte zusammen, Foto/Tagline
  zentriert).
- Kleiner Bugfix waehrend der Umsetzung: der Zeilenabstand in "NICLAS KOCH" nutzte `gap` in
  `em` auf dem Flex-Container - das bezog sich auf dessen EIGENE (viel kleinere) Schriftgroesse
  statt die der Kind-Spans, wodurch der Abstand fast unsichtbar war. Auf eine feste vw-basierte
  Luecke umgestellt.

### 2026-07-30 (Webprojekte-Slider: gepinntes Scroll-Durchlaufen wie die Hauptgalerie)
- **#proj-slider laeuft jetzt beim normalen Scrollen automatisch durch, statt nur per Wheel-
  Hijacking/Drag bedient zu werden:** neuer Wrapper `.proj-track` (220vh hoch) + `.proj-sticky`
  (`position:sticky`, haelt den Slider waehrend des Durchlaufens auf dem Bildschirm fest) -
  exakt dasselbe Grundprinzip wie `.gallery-track`/`.gallery-sticky` bei der Hauptgalerie. Eine
  neue `updateProjPin()`-Funktion (aufgerufen im selben Scroll-Update-Zyklus wie `updateGallery()`)
  berechnet den Fortschritt durch den Track und setzt `projTarget` proportional dazu - die
  bereits vorhandene sanfte Easing-Schleife (`projSliderRaf`) zieht `projCurrent`/`scrollLeft`
  wie gehabt hinterher. Nach einmal komplettem Durchlauf gibt der Track die Seite fuer normales
  Weiterscrollen frei.
- **Wheel-Hijacking fuer #proj-slider entfernt** (die 260ms-Verweildauer-Regel von der letzten
  Aenderung ist damit hinfaellig): ueberfluessig geworden, da normales Scrollen jetzt direkt den
  Durchlauf antreibt, ganz ohne Wheel-Interception - analog zur Hauptgalerie, die ebenfalls kein
  eigenes Wheel-Handling braucht. `HSCROLL_STRIP_SELECTOR` deckt jetzt nur noch `.pp-strip` ab.
- **Manuelle Bedienung (Ziehen, Pfeil-Buttons) bleibt erhalten:** ueber ein kurzes
  `projManualUntil`-Zeitfenster (1200ms nach Drag-Ende, 900ms nach Pfeil-Klick) bekommt die
  manuelle Eingabe kurz Vorrang, bevor die Scroll-Pin-Steuerung im naechsten Frame wieder
  uebernimmt - dasselbe Cooldown-Prinzip wie an anderen Stellen im Code (z.B. Hover-Dwell).

### 2026-07-30 (Solution-Kacheln komplett gelb ausgefüllt, Weiterbildung als linksbündige Liste)
- **"Die Lösung: Mich"-Kacheln (.solution-tile):** statt nur einem Glow ist der Hintergrund jetzt
  vollflächig mit `var(--amber)` gefüllt, Schrift und Icons in `var(--ink)` (schwarz). Da
  `--amber` im Hellmodus (kein Gelb im Light Mode) auf `var(--text)` (schwarz) faellt, waeren
  Schrift/Icons dort sonst unsichtbar (schwarz auf schwarz) - `html.light .solution-tile h4` und
  `.solution-tile .picon` bekommen deshalb einen expliziten `var(--bg)`-Override (hell auf
  schwarzem Tile), analog zum bereits bestehenden Muster bei anderen amber-hinterlegten Elementen.
  Die `.pain-tile`-Kacheln darüber bleiben unveraendert.
- **Weiterbildung (unter Vita) von Kachel-Grid zu linksbündiger Liste umgebaut:** `.wb-course-tile`
  (Grid mit Karten-Look) ersetzt durch `.wb-row` (max-width 700px, mittig, Flex-Reihen mit
  Trennlinie `border-bottom`, letzter Eintrag ohne Linie). Jede Reihe zeigt Icon (Checkmark-Kreis),
  Titel, Text (Anbieter) und Datum nebeneinander/darunter statt in einer Kachel - kein
  Magnetic-Tilt-Hover mehr, da keine Karten-Optik mehr gewünscht war. `OBJECT_LANDABLE_SELECTOR`
  (Cursor-Tropfen-Landung) und die Hellmodus-Override fuer den Checkmark-Kreis wurden auf die neue
  `.wb-row`-Klasse umgezogen.

### 2026-07-30 (Sammel-Update: Intro-Flash, Hero-Clipping, Kontakt-Chatbot entfernt, diverser Feinschliff)
- **Intro-Aufblitzen behoben:** `#spotlight`, `#cursor-dot` und `#cursor-trail` sprangen beim
  Ende der 6s-Ladeanimation (Entfernen von `body.intro-active`) instantan von komplett
  unsichtbar auf voll sichtbar - keines der drei hatte eine Opacity-Transition. Jetzt haben alle
  drei `transition: opacity .6s ease`, wodurch sie sanft einblenden statt aufzublitzen.
- **Hero-Name "NICLAS"/"KOCH" oben abgeschnitten:** die Schriftgroesse orientierte sich nur an
  der Viewport-Breite (`17vw`) - auf breiten, aber niedrigen Viewports (z.B. 1280x720-Laptops)
  wurde der Schriftzug so gross, dass die Oberlaengen von "NICLAS" am `overflow:hidden` von
  `#hero` abgeschnitten wurden. Fix: `font-size: clamp(70px, min(17vw, 24vh), 300px)` - eine
  zusaetzliche vh-Obergrenze verhindert das auf niedrigen Viewports.
- **"Die Lösung: Mich"-Kacheln (.solution-tile):** zentriert (Icon + Text) und mit permanentem
  gelbem Glow (nutzt `var(--amber)`/`var(--glow)`, dadurch im Hellmodus automatisch schwarz statt
  gelb). Die oberen "Kennst du das?"-Kacheln (`.pain-tile`) bleiben bewusst unveraendert
  (linksbuendig, neutral).
- **Kontakt-Chatbot komplett entfernt** (Dark + Light Mode): HTML (`#contact-panel-bot`), CSS
  (`.bot-embed`/`.bot-header`/`.bot-messages`/`.bot-suggestions`/`.bot-input-row` + zugehoerige
  `.invert`-Overrides) und JS (`KNOWLEDGE_BASE`, `findAnswer`, `addMessage`, `botReply` usw.)
  restlos entfernt. Die generischen `.msg`/`.msg-list`-Klassen bleiben erhalten, da sie sich der
  Kontakt-Bot frueher mit dem ProteinUp-Ideensammlung-Chat (`.pu-chat-row`) geteilt hat.
  `.contact-options` ist jetzt eine einzelne, schmalere, zentrierte Kachel (`max-width:560px`,
  1 statt 2 Spalten) statt eines 2-Spalten-Grids.
- **Webprojekte-Slider smoother + spaeteres Wheel-Hijacking:** der Easing-Loop
  (`projSliderRaf`) normalisiert jetzt auf die tatsaechlich vergangene Zeit (`dt`) statt denselben
  festen Faktor jeden Frame anzuwenden (vorher bei schwankender Framerate mal zu schnell, mal zu
  langsam). Zusaetzlich uebernimmt das Mausrad das horizontale Sliden erst nach einer kurzen
  Verweildauer (260ms) ueber dem Slider, damit ein normales Durchscrollen der Seite nicht schon
  beim kurzen Ueberqueren des Streifens abrupt unterbrochen wird.
- **SEO-Graphen-Hover runder/sanfter:** die Magnet-Verzerrung nutzt jetzt Smoothstep
  (`t*t*(3-2t)`) statt reiner quadratischer Falloff - dadurch ist die Delle an ihrem Zentrum
  rund/weich statt spitz. Push-Staerke von 18 auf 12 reduziert, Radius leicht erhoeht (48→52).
- **"Tools & eigene Auswertung" auf 3 Kacheln reduziert** mit neuem, von Nic vorgegebenem Text
  (SEO-Tools & Audit-System, eigene SEO-Projekte, branchenuebergreifende Erfahrung) statt der
  vorherigen 6 Kacheln.
- **Rezensionen-Zitate:** `font-weight` von 400 auf 300 (duenner).
- **Light Mode: erste Sektion (#psst, Kerze) ausgeblendet** (`html.light #psst{ display:none; }`)
  - die Seite beginnt im Hellmodus direkt mit `#hero`.
- **"Entwicklung & Shops"-Kachel:** "und Claude Code für die technische Umsetzung" entfernt.
  **"KI & Zukunftstech"-Kachel:** dafuer um "Claude Code und Cursor für KI-gestütztes
  Programmieren" sowie "die KI-Tools von Adobe" ergaenzt.

### 2026-07-29 (Streichholz-Rauch: echte Partikel-Physik statt Positionsformel)
- **Geschwindigkeitsvektor statt Positionsformel:** jeder Rauch-Partikel hat jetzt ein echtes
  `vx`/`vy`, auf das pro Frame Kraefte wirken (Auftrieb als sanft eingeregeltes, mit dem Alter
  abklingendes Ziel, zwei ueberlagerte Turbulenz-Wellen, Reibung/Daempfung), statt jeden Frame
  stur dieselbe Sinus-/Drift-Formel auf die Position anzuwenden - das ist die Voraussetzung fuer
  glaubhafte Richtungswechsel.
- **Wirbel bei Richtungswechsel:** aus der Differenz von `mouseVelX/Y` zum vorherigen Tick wird
  die tatsaechliche Mausbeschleunigung berechnet; ihr vorzeichenbehaftetes Kreuzprodukt mit der
  Geschwindigkeit (`swirl`) dreht den Geschwindigkeitsvektor juengerer, naher Partikel leicht um
  sich selbst. Dadurch kraeuselt sich der Rauch sichtbar, sobald man mit dem Cursor hin- und
  herwedelt, statt nur stumpf seitlich weggeschoben zu werden - eine gleichbleibende Geschwindigkeit
  ergibt hier ~0 Wirbel, erst die Richtungsumkehr erzeugt den Effekt.
- **Dunkler/sichtbarer:** `.cursor-smoke`-Grundfarbe von `rgba(40,40,40,0.55)` auf
  `rgba(18,18,18,0.7)` verdunkelt, Blur von 2px auf 1.5px reduziert (definierter statt verwaschen),
  maximale Partikel-Opazitaet von 0.45 auf 0.62 angehoben.

### 2026-07-29 (Hauptgalerie: beide Tattoo/Illu-Reihen zu einer zusammengefasst, Galerien höher)
- **2 statt 3 Zeilen:** die frueheren zwei separaten Tattoo-/Illustrations-Slider (Zeile 1 und
  Zeile 3, `GALLERY_IMAGES` + `GALLERY_IMAGES_ROW2`) wurden zu einer einzigen Bilderreihe
  zusammengefasst (`GALLERY_IMAGES` enthaelt jetzt alle 27 Bilder). Die Foto-Reihe
  (`GALLERY_IMAGES_PHOTOS`) bleibt als zweite, verbleibende Reihe bestehen. HTML (`gallery-row-3`
  /`gallery-track-3`), JS (`galleryTrack3`, der zugehoerige `buildGalleryTrack(...)`-Aufruf, die
  `max3`/`translateX`-Berechnung in `updateGallery()`) wurden vollstaendig entfernt - die
  bestehende gegenlaeufige Slide-Choreografie zwischen Reihe 1 und Reihe 2 (`slideProg` vs.
  `1 - slideProg`) bleibt unveraendert erhalten, nur ohne die dritte Reihe.
- **Beide Galerien hoeher:** da nur noch 2 statt 3 Zeilen in dieselbe gepinnte 100vh-Sticky-Flaeche
  passen muessen, wurde die Basis-Bildhoehe von 220px auf 320px erhoeht (Mobile-Fallback
  140px→190px, Laptop-Querformat-Fallback bei `max-height:820px` 170px→250px).

### 2026-07-29 (Light Mode: konsequent kein Gelb mehr + Cursor als Streichholz mit Rauch)
- **Kein Gelb mehr im Hellmodus:** `--amber` selbst wird jetzt in `html.light` auf `var(--text)`
  (Schwarz) umgeschaltet, wodurch jede Regel, die `var(--amber)` nutzt, automatisch mitzieht
  (Rahmen, Icon-Strichfarben, Scrollbar, Textmarkierung, `.glass`-Hover-Rahmen usw.). Zusaetzlich
  gezielte Ueberschreibungen fuer Stellen, die den Gelbton stattdessen hart codiert hatten
  (`rgba(255,229,0,...)` o.ae. bei `#spotlight`, `.icon-toggle-btn:hover`, `.a11y-option:hover`,
  `.hover-pulse-fx`, `.pain-tile/.solution-tile:hover`, `.wb-course-tile .check`,
  `.project-modal-link`, `.info-steps li::before`, `.pu-process-line:hover`, `.proj-tag`) sowie
  zwei inline-SVG-Pfeile (`.arrow-down`), die `stroke="#FFE500"` fest im Markup hatten - jetzt
  `stroke="currentColor"` + `color: var(--amber)` auf `.arrow-down`. Buttons mit vormals gelbem
  Hintergrund + fest dunklem Text (`.pinned-embed-exit`, `.pinned-embed-openlink:hover`,
  `.img-lightbox-close:hover`, `.info-modal-close:hover`) bekommen im Hellmodus stattdessen
  `color: var(--bg)`, da ihr Hintergrund durch die --amber-Aenderung jetzt selbst schwarz wird.
  Bewusst NICHT angefasst: die Kerzenflamme (echtes Feuer, unabhaengig vom Farbschema) und die
  `.invert`-Panels (Footer/ProteinUp-Case-Study - immer weiss mit dunkler Schrift, unabhaengig
  vom Dark/Light-Toggle).
- **Cursor im Hellmodus = Streichholz:** statt des gelben Lava-Tropfen-Looks ist der Cursor im
  Hellmodus jetzt ein schlichter schwarzer Punkt (`html.light #cursor-drop/#cursor-trail`), von
  dem in unregelmaessigen Abstaenden weiche, sich ausdehnende Rauchschwaden aufsteigen
  (`.cursor-smoke` + `spawnSmokeParticle`/`smokeTick`, eigener zentraler rAF-Tick statt einer
  Kette pro Partikel). Physik-Modell an echtem Rauch orientiert: schneller, fast geradliniger
  Aufstieg direkt am Anfang, der sich mit der Zeit abbremst, waehrend seitliche Verwirbelung und
  Groesse zunehmen (Abkuehlung/turbulente Diffusion) - jede Schwade legt so insgesamt eine
  deutliche Strecke nach oben zurueck (~300-400px), bevor sie sich komplett auflöst. Eine
  geglaettete, dabei geclampte Mausgeschwindigkeit (`mouseVelX/Y`) sorgt zusaetzlich dafuer, dass
  der Rauch spuerbar hinter schnellen Mausbewegungen "herzieht", wie echter, durch Luftzug
  verwehter Rauch, ohne bei sehr schnellen Bewegungen unrealistisch weit wegzureissen (Drift pro
  Schwade zusaetzlich hart auf einen plausiblen Bereich um ihren Entstehungspunkt gedeckelt).

### 2026-07-29 (Weiterbildung: "Abgeschlossene Weiterbildungen"-Kacheln ebenfalls auf 950px)
- `.wb-courses-grid` war beim 950px-Rand-Fix übersehen worden (stand noch auf altem
  `max-width:860px`) - jetzt konsistent mit allen anderen Grids auf 950px.

### 2026-07-29 (Korrektur 2: Nic wollte max-width:950px, nicht randlos volle Breite)
- Der vorherige Fix (Caps komplett entfernt, Grids liefen auf `width:100%` = bis zu 1312px
  auf sehr breiten Screens) war nicht das Gewuenschte. Nic: die Bereiche sollen auf
  **maximal 950px** begrenzt bleiben. Alle betroffenen Grids (`.pain-grid`/`.solution-grid`,
  `.flip-grid`, `.pu-wirkung-grid`/`#seo-highlights-grid`, `.contact-options`, `.pp-rows`,
  `.reviews-grid`) jetzt einheitlich auf `max-width:950px; margin:0 auto` statt `100%`
  bzw. der alten uneinheitlichen 860/1040/1100px-Werte. Verifiziert per Headless-Browser
  bei 1920/1440/1200/1024px - liegt jetzt ueberall exakt bei 950px (bzw. schrumpft normal
  weiter darunter mit).

### 2026-07-29 (Korrektur: echter Rand-Bug war Desktop, nicht Mobile - max-width-Caps entfernt)
- **Vorherige Analyse war falsch:** die erste Runde (siehe Eintrag direkt darunter) hatte nur
  bei Mobile-Breiten geprüft und dort war tatsächlich alles bündig - aber genau deshalb blieb
  der Bug unsichtbar. Mit einem echten (im Sandbox nachtraeglich lauffaehig gemachten)
  Headless-Chromium neu gegengeprueft: `.pain-grid`/`.solution-grid`, `.flip-grid`,
  `.pu-wirkung-grid`/`#seo-highlights-grid`, `.contact-options` und `.pp-rows` waren per
  `max-width:860-1040px; margin:0 auto` fest gedeckelt - auf breiten/Desktop-Viewports (die
  Screendesign-Referenzbilder zeigen 3-spaltige Grids, was bei echten Mobile-Breiten wegen
  der `@media(max-width:480px){1fr}`-Regel gar nicht möglich waere - ein Hinweis, der in der
  ersten Analyse übersehen wurde) klaffte dadurch ein wachsender toter Rand zur Section
  (bei 1920px Fensterbreite z.B. ca. 530px pro Seite statt buendig mit dem
  `max-width:1440`-Sektionsrand zu laufen). Fix: die feste `max-width`-Deckelung entfernt,
  alle genannten Grids laufen jetzt auf `width:100%` und damit exakt so breit wie die
  umgebende Section (inkl. deren `clamp(20px,6vw,64px)`-Innenabstand) - randbündig auf
  jeder Bildschirmbreite. Mobile war und bleibt unveraendert korrekt (dort greift der Cap
  ohnehin nie).
- **Wie verifiziert:** `libXdamage.so.1` fehlte im Sandbox fuer Playwright/Chromium (einzige
  fehlende Abhaengigkeit) - durch eine winzige eigene Stub-.so (4 No-op-Funktionen, per gcc
  kompiliert) ersetzt, damit laesst sich jetzt doch ein echter Headless-Browser starten.
  Screenshots + `getBoundingClientRect()`-Messungen bei 1920/1440/1200/1024/390px bestaetigen
  vorher/nachher: Kacheln liegen jetzt bei jeder Breite exakt auf der Section-Kante.

### 2026-07-29 (Mobile-Rand-Audit: Galerie-Padding + ProteinUp-Embed responsiv - Analyse teilweise ueberholt, siehe Eintrag oben)
- **Anlass:** Screendesign-Referenzbilder (`/screendesign/001.png`-`008.png`, mit weißer
  Randlinie als Ziel-Seitenrand) mit dem aktuellen Stand abgeglichen. Alle "klassischen"
  Kachel-Grids (`.pain-grid`/`.solution-grid`, `.flip-grid`, `.pu-wirkung-grid`/
  `#seo-highlights-grid`, `.reviews-grid`, `.pp-rows`, `.contact-options`) nutzen bereits
  einheitlich `max-width:860-1100px; margin:0 auto` - das greift unterhalb dieser Breite
  gar nicht mehr, wodurch sie auf Mobile ohnehin schon randbündig zum Standard-Seitenrand
  (`clamp(20px,6vw,64px)`) laufen. Dort **kein Fix nötig** (001, 003, 005, 007, 008 -
  Vita wie gewünscht nicht angefasst). **[Korrektur siehe Eintrag oben: das war nur fuer
  Mobile richtig, auf Desktop-Breiten bestand der Bug tatsaechlich.]**
- **Hauptgalerie (006):** `updateGallery()` zog die Seitenpolsterung beim Reinscrollen bisher
  von einem festen `80px` auf 0 - auf schmalen Viewports lag der Startzustand dadurch nicht an
  der weißen Randlinie. Jetzt berechnet sich der Start-Abstand responsiv nach derselben Formel
  wie der Standard-Seitenrand (`clamp(20px,6vw,64px)`), sodass die Galerie beim Reinscrollen
  kurz genau an der Randlinie liegt, bevor sie beim Weiterscrollen bis zum echten Bildschirmrand
  aufzieht.
- **ProteinUp-Embed (004):** `updateEmbed()` startete die iFrame-Breite immer bei festen `60vw`
  - auf Mobile entstand dadurch schon vor dem Reinscrollen eine große Lücke statt eines an der
  Randlinie anliegenden Starts. Startbreite ist jetzt auf Mobile (≤700px) an den Standard-
  Seitenrand angeglichen (Desktop bleibt unverändert bei 60vw).
- **Kein Headless-Browser im Sandbox verfügbar** (Playwright/Chromium-Install schlägt mangels
  Root-Rechten fehl) - Fixes sind code-seitig sauber hergeleitet und gegen die bestehenden
  Standard-Abstandswerte der Seite abgeglichen, aber nicht pixelgenau gegen die Screendesigns
  gegengerendert.

### 2026-07-27 (Cursor-Tropfen: Vollaudit - fehlende Kacheln/Text-Container ergänzt)
- **Ursache gefunden:** seit der Kachel-Vereinheitlichung (".glass" als Basis-Look fast überall)
  nutzen `.pu-quote`, `.pu-tool-tile` und `.pu-wirkung-tile` (ProteinUp-Zitat, Tools&Technologien,
  Wirkung-Kacheln, per Wiederverwendung auch die SEO-Highlights) alle einen echten, sichtbaren
  1px-Rahmen (`.glass` mit `--border`) - standen aber nicht in `OBJECT_LANDABLE_SELECTOR`, weil
  die alte Ausschluss-Regel noch von einer Zeit stammte, in der `.glass`-Ränder als unsichtbar
  galten. Tropfen sind dort einfach durchgefallen. Jetzt einzeln ergänzt.
- **Reiner Text in `<div>`s statt `<p>`/`<span>`** (`.pp-tools`, `.pu-chat-label`, `.msg`,
  `.msg-list-item` - Grafikprojekte-Tools-Zeile, Ideensammlung-Chat-Label/-Bubbles) waren für
  `findTextLineRect` unsichtbar, weil ein bloßes `<div>` keinen der bisherigen Text-Selektoren
  traf. Jetzt zu `TEXT_LANDABLE_SELECTOR` ergänzt.
- `.proj-tag` (Webprojekte-Tags) war dagegen schon immer als `<span>` korrekt erfasst - kein
  Fix nötig.

### 2026-07-27 (Hauptgalerie Zoom-Abschluss + Hero-Hintergrundschrift auf Assignate)
- **`updateGallery()` Phase 3:** Bilder bleiben waehrend des kompletten Durchsliden-Vorgangs in
  der bisherigen Groesse - erst in den letzten 15% der Scroll-Strecke (kurz bevor man aus dem
  gepinnten Bereich rausscrollt) zoomt `#gallery-wrap` per `transform:scale()` bis auf 1.14 rein,
  von `.gallery-sticky{overflow:hidden}` sauber an den Viewport-Raendern abgeschnitten - randloser,
  etwas groesserer Abschluss statt fixer Groesse die ganze Zeit.
- **`.hero-name span`** (die große "NICLAS KOCH"-Hintergrundschrift oben in der 2. Sektion/Hero):
  Font von direktem `'Fraunces', serif` auf `'Assignate', 'Fraunces', serif` umgestellt - jetzt
  dieselbe Font wie alle echten Headlines (h1/h2/h3) auf der Seite.

### 2026-07-27 (ProteinUp-Abstand, SEO-Subhead, Weiterbildung-Headline+Breite)
- **`#proteinup-intro`:** Abstand zwischen Fließtext und iFrame-Sektion verkleinert
  (`padding-bottom` 100px→20px, `.section-head`-Margin 80px→20px, nur für diese Sektion).
- **"Tools & eigene Auswertung" (SEO):** jetzt genauso groß (`clamp(28px,4vw,42px)`) und weiß
  (`var(--text)`) wie die Sektions-Headline "SEO" — Override scoped auf `#seo .pu-subhead`,
  die beiden anderen `.pu-subhead`-Vorkommen (ProteinUp "Der Prozess"/"Tools & Technologien")
  bleiben unverändert.
- **Weiterbildung:** neue zweite Überschrift "Abgeschlossene Weiterbildungen" (gleiche
  `.pu-subhead`-Klasse) über den Kurs-Kacheln ergänzt. `.wb-courses-grid` max-width von 640px auf
  860px erhöht — jetzt gleich breit wie die Kacheln der Sektion darüber (SEO `.pu-wirkung-grid`).

### 2026-07-27 (Slider-Pfeile: Le Figaro/Familypage ohne Buttons + alle Pfeile nur noch Icon)
- **`noArrows`-Flag in `renderPpRow`:** `LEFIGARO_VORDESIGN` und `FAMILYPAGE_SCREENDESIGN`
  bekommen `noArrows: true` - ihre Mini-Galerie-Streifen zeigen keine Vor/Zurück-Buttons mehr
  (nur bei diesen beiden Zeilen, Fellbox/UGLYBLACKWORK/Magazincover unverändert). Scrollbar,
  Klick-und-Zieh, Wheel-Umleitung und Klick-Vorschau bleiben unangetastet funktionsfähig.
- **`.proj-slider-arrow` global umgestylt:** wirkt jetzt überall (Webprojekte-Slider, Fellbox,
  restliche pp-strips) nur noch als reines Pfeil-Icon statt als runder Button mit Kreis-
  Hintergrund/Rahmen/Blur - Hover färbt das Icon gelb + skaliert leicht statt Hintergrund zu
  füllen.

### 2026-07-27 (Hauptgalerie: Fotoslider in die mittlere Reihe verschoben)
- **`buildGalleryTrack`-Zuordnung getauscht:** die private Foto-Reihe (`GALLERY_IMAGES_PHOTOS`)
  liegt jetzt in Reihe 2 (Mitte), die beiden Tattoo-/Illustrations-Sets (`GALLERY_IMAGES` /
  `GALLERY_IMAGES_ROW2`) in Reihe 1 und 3 außen. Reine Zuordnungsänderung, Bild-Arrays und
  Verarbeitung unverändert.

### 2026-07-27 (Hauptgalerie: Klick-und-Zieh-Bedienung links/rechts)
- **`#gallery-sticky` (die 3 Design-/Foto-Reihen):** neu per Maus klick-und-halten links/rechts
  bedienbar. Technischer Sonderfall gegenüber Webprojekte-Slider/Fellbox (dort echtes
  `overflow-x:auto` mit eigenem `scrollLeft`) — hier hängt die Horizontal-Position komplett am
  normalen Seiten-Scroll (`updateGallery()` leitet `translateX` aus der Viewport-Position von
  `#gallery-track` ab). Ein Drag bewegt deshalb nicht `scrollLeft`, sondern direkt den
  Scroll-`target` selbst (gleiches Prinzip wie das Touch-Wischen weiter oben, nur horizontal).
  `pointermove`/`pointerup` bewusst auf `window` statt dem Element registriert, weil die Maus
  beim Ziehen über den gepinnten Vollbild-Bereich hinausgehen kann — gleiches Muster wie beim
  Steckdosen-Stecker-Drag. Klick auf ein Bild nach einem echten Drag öffnet die Lightbox nicht
  mehr versehentlich (`galleryDragged`-Flag, wie schon bei Fellbox/Webprojekte-Slider).

### 2026-07-27 (Private Fotografie-Galerie: alle 23 statt 10 ausgewählte Fotos)
- **`GALLERY_IMAGES_PHOTOS` (3. Galerie-Reihe):** komplett neu aus `img/privates/` aufgebaut —
  jetzt wirklich alle 23 dort liegenden Fotos statt der vorherigen 10er-Auswahl. Gleiche
  Verarbeitung wie zuvor: auf 900px lange Kante skaliert (Originale 5184×3456, Seitenverhaeltnis
  3:2 bleibt erhalten, kein Zuschnitt nötig), JPEG q76, `{src,w,h}`-Format für exaktes
  `aspect-ratio` ohne Layout-Jank. 23 Bilder zusammen ca. 900KB.

### 2026-07-27 (ProteinUp: "Das ist es!" entfernt + Ideensammlung-Chat breiter/mittiger)
- **`#pu-finish-line` ("Das ist es!") komplett entfernt:** HTML-Element, zugehöriges CSS
  (`.pu-finish-line`, `.pu-finish-line span`, Invert-Regel) sowie die Scroll-gekoppelte
  Schrumpf-/Ausblend-Logik in `updateOnScroll()` (inkl. `puFinishLine`/`pfExitStarted`/`pfRect`)
  restlos entfernt — keine toten Referenzen mehr im Code.
- **Ideensammlung-Chat ("Mein Gehirn"):** `.pu-chat` von 1100px auf 1320px verbreitert,
  `.pu-chat-row` von 88% auf 96% max-width. `.pu-chat-row .msg` bekommt `white-space:nowrap` +
  `width:fit-content` (max-width der Basis-`.msg`-Regel aufgehoben) — Sprechblasen brechen jetzt
  nicht mehr um, sondern sind exakt so breit wie ihr Inhalt. Betrifft nur diesen großen Chat, nicht
  den kleinen Kontakt-Chatbot (eigene, ungeteilte Selektoren). Ab 700px Breite (Mobile) wird
  bewusst wieder auf normalen Umbruch zurückgeschaltet, damit keine Blase über den Bildschirmrand
  hinausläuft.

### 2026-07-27 (Hauptgalerie: echte Tattoo-/Illustrationsdesigns statt Platzhalter)
- **`GALLERY_IMAGES` (Reihe 1) + neue `GALLERY_IMAGES_ROW2` (Reihe 2):** die 10 picsum.photos-
  Platzhalter durch 27 echte Tattoo-Flash- und Illustrationsdesigns von Niclas ersetzt (aus
  `img/tattoo/`, 30 hochgeladene Dateien, 3 unbrauchbare/leere Exporte aussortiert). Auf 14 (Reihe
  1) und 13 (Reihe 2) aufgeteilt — bewusst zwei eigenständige Sets statt wie vorher Reihe 2 =
  Reihe 1 rückwärts, für mehr Abwechslung beim Scrollen.
- **Bildverarbeitung:** Alle Dateien waren randvolle A4-Scans (2480×3508) mit viel Weißraum um ein
  einzelnes zentriertes Motiv — automatisch auf den tatsächlichen Inhalt zugeschnitten (Alpha-
  Bounding-Box + kleiner Rand), auf Weiß compositet (PNG-Transparenz), auf max. 850px lange Kante
  komprimiert. Ergebnis: 27 Bilder zusammen ca. 1,46MB statt vorher >70MB Rohmaterial.
- Nutzt dasselbe `{src,w,h}`-Format wie die private Foto-Reihe (siehe vorheriger Hotfix) für
  korrektes `aspect-ratio` ohne Layout-Sprung.

### 2026-07-27 (Seitenreihenfolge umgebaut: Portfolio direkt nach Pain Points, ProteinUp nach Skillset)
- **Neue Sektionsreihenfolge:** Start → Pain Points ("Was bei vielen Agenturen & Webdesignern
  schiefläuft") → **Portfolio** (Grafikprojekte + Webprojekte) → Skillset ("Was ich mitbringe")
  → **ProteinUp** (iFrame, Steckdose/Stecker-Mechanik, Case-Study-Modal) → SEO → Weiterbildung →
  Vita → Galerie → Portfolio-Projekte → Rezensionen → Kontakt. Vorher lag Portfolio ganz am Ende
  (nach ProteinUp), ProteinUp saß zwischen Vita und Portfolio.
- Per gezieltem Text-Block-Umzug umgesetzt (kompletter ProteinUp-Block inkl. `pinned-embed-track`,
  `pu-cd-wrap`, `pu-collapse` sowie der komplette `#projects`-Block wurden als zusammenhängende
  Einheiten verschoben, keine Inhalte verändert) — anschließend mit Tag-Balance-, CSS-Brace- und
  `node --check`-Prüfung sowie einem Abgleich verifiziert, dass jede Sektions-ID weiterhin genau
  einmal vorkommt.
- **Side-Nav-Reihenfolge** an die neue Sektionsreihenfolge angepasst (Portfolio jetzt direkt nach
  Pain Points, ProteinUp direkt nach Skillset).
- **Eyebrows:** Statt einem gemeinsamen "Portfolio"-Eyebrow über beiden Unterbereichen jetzt zwei
  eigene: "Portfolio 01" über Grafikprojekte, "Portfolio 02" über Webprojekte.
- **Scrollbar-Abstand:** `.proj-slider-scrollbar` (wird von Webprojekte-Slider UND Fellbox-/
  Grafikprojekte-Bildstreifen gemeinsam genutzt) hat jetzt 40px Abstand oben statt 4px.
- **Tags:** Schrift der Tag-Chips (`.proj-tag`, Webprojekte-Slider) und der Tool-Zeile (`.pp-tools`,
  Grafikprojekte-Kacheln) von JetBrains Mono auf Roboto umgestellt, auf Nutzeranfrage. Alle
  übrigen JetBrains-Mono-Vorkommen (Eyebrows, Buttons, Footer, Chatbot etc.) bewusst unverändert
  gelassen, da nur explizit nach den Tags gefragt wurde.

### 2026-07-27 (Dritte Galerie-Reihe: echte private Fotos statt Platzhalter)
- **`GALLERY_IMAGES_PHOTOS`:** die 10 picsum.photos-Platzhalter der dritten Galerie-Reihe
  ("Design, Fotografie & Illustration") durch 10 echte Fotos von Niclas ersetzt (Landschaften,
  Makro, Architektur/Verfall) — ausgewählt aus 23 hochgeladenen Rohfotos in `img/privates/`.
  Komprimiert von Original ~5184×3456 auf max. 900px lange Kante, JPEG, zusammen ca. 485KB.
- **`buildGalleryTrack()` erweitert:** akzeptiert jetzt sowohl reine picsum.photos-Strings (Reihe
  1+2, Seitenverhaeltnis aus der URL) als auch `{src,w,h}`-Objekte (Reihe 3, Seitenverhaeltnis aus
  den tatsächlichen Bildmaßen) — nötig, weil Base64-Bilder kein Seitenverhältnis in der URL
  kodieren und ohne vorab reserviertes `aspect-ratio` beim Laden zu Layout-Sprüngen im
  Scroll-Loop geführt hätten (derselbe Bug, den der bestehende Code-Kommentar für die
  picsum-Variante schon beschrieb).
- Bei der Fotoauswahl bewusst auf Bilder mit erkennbaren Personen verzichtet (z. B. ein Foto mit
  Person im Vordergrund) — reine Landschafts-/Makro-/Architekturaufnahmen.

### 2026-07-27 ("Tools & eigene Auswertung": SEObility + SEMrush zusammengefasst, Familypage zu Grafikprojekte)
- **SEO-Sektion:** Die beiden separaten Tool-Kacheln SEObility und SEMrush sind jetzt eine einzige
  Kachel "Meistgenutzte Tools" (fasst beide Tools zusammen), Teil desselben Grids wie die
  Highlight-Kacheln — kein separates `seo-tools-grid` mehr. Damit zeigt "Tools & eigene Auswertung"
  jetzt sauber 6 Kacheln im 3er-Grid (2 Reihen) statt vorher 2+5 in zwei getrennten Grids.
- **"Familypage Schiffberater (offline)"** von den Portfolio-Projekten ("Nebenbei entstanden") nach
  oben zu "Grafikprojekte" verschoben, neben Fellbox und Le Figaro Vor-Design — gleiches Vorgehen
  wie zuvor bei Le Figaro Vor-Design. Portfolio-Projekte zeigt jetzt nur noch UGLYBLACKWORK und
  Magazincover-Fashion.

### 2026-07-27 (Projektordner aufgeräumt)
- **`img/` neu strukturiert:** vorher ~28 lose Dateien direkt in `img/`, jetzt in Unterordner
  sortiert (`img/gallery/fellbox`, `img/gallery/uglyblackwork`, `img/gallery/magazincover`,
  `img/proteinup`, `img/site`, `img/archive-replaced-projects` für Screenshots der mittlerweile
  ersetzten alten Webprojekte, `img/misc` für nicht eindeutig zuordenbare Altdateien) — per
  `git mv`, Historie bleibt erhalten. `img/portfolio/` und `img/privates/` unverändert.
- `chat-2026-07-21-online-hosting.md` nach `docs/` verschoben.
- **Wichtig:** Da alle Bilder als Base64 in `portfolio.html` eingebettet sind, hat die Umsortierung
  keinerlei Auswirkung auf die Live-Seite — mit einer Ausnahme: `img/nic.png` wird per relativem
  Pfad in den Open-Graph-/Twitter-Meta-Tags referenziert und wurde deshalb bewusst nicht verschoben.
  `robots.txt`/`sitemap.xml` bleiben ebenfalls im Root (SEO-Konvention verlangt das).
- Projektstruktur-Diagramm in diesem README aktualisiert.

### 2026-07-27 (Portfolio-Sektion in "Grafikprojekte" + "Webprojekte" aufgeteilt)
- **Struktur:** Die "Projekte"-Sektion zeigt jetzt zwei gleichwertige Unterbereiche unter dem
  Eyebrow "Portfolio": "Grafikprojekte" (Fellbox-Reihe + neu: Le-Figaro-Vor-Design) und
  "Webprojekte" (der bestehende Slider mit den 8 Live-Kundenwebsites) — vorher gab es nur einen
  einzelnen Titel "Projekte" über beidem. Side-Nav-Eintrag von "Projekte" zu "Portfolio"
  angepasst, da er weiterhin zur gesamten Sektion (beide Unterbereiche) verlinkt.
- **"Coiffeur Le Figaro — Vor-Design"** aus den Portfolio-Projekten (ehem. "Private Projekte")
  entfernt und stattdessen in "Grafikprojekte" einsortiert, direkt neben der Fellbox-Reihe, im
  selben Bild+Galerie-Format. Zusätzlich ein "Shop ansehen ↗"-Link-Button ergänzt, der zum
  fertigen Shop (shop.coiffeurlefigaro.de) verlinkt — dafür `renderPpRow()` um ein optionales
  `url`/`urlLabel`-Feld erweitert (wiederverwendet den bestehenden `.proj-slide-link`-Button-Stil).
- Portfolio-Projekte (ehem. "Private Projekte") zeigt jetzt nur noch UGLYBLACKWORK, Magazincover
  und die Familypage-Screendesigns.

### 2026-07-27 (Webprojekte-Slider: zwei weitere Projekte ergänzt)
- **Webprojekte-Slider (`PROJECTS`):** BMB Deutschland (bmbdeutschland.de, Divi Builder, Adobe CC)
  und Mein Schiffberater Shop (meersuechtig.com, Shopify, Adobe CC) ergänzt — Slider zeigt jetzt
  8 echte Projekte statt 6.

### 2026-07-27 (Webprojekte komplett auf echte Kundenprojekte umgestellt)
- **Webprojekte-Slider (`PROJECTS`):** alle bisherigen Platzhalter-/Alt-Projekte entfernt, durch
  6 echte Projekte mit Live-Link ersetzt: Vinum Voyage, Woche der Meinungsfreiheit, Osteopathie
  Zentrum Oberursel, Zahnarztpraxis Kirchner-Hammrich, MyMoove, Coiffeur Le Figaro (Shop). Jeweils
  Screenshot, Kurzbeschreibung, Live-Link und genutzte Tools als Tags — Format wie zuvor.
- **Portfolio Projekte (`PRIVATE_PROJECTS`):** zwei neue Galerie-Kacheln für Projekte ohne Live-URL
  ergänzt ("als Ordner"): "Coiffeur Le Figaro — Vor-Design" (3 Screendesign-Entwürfe vor der
  Shopify-Umsetzung) und "Familypage Schiffberater (offline)" (9 Screendesign-Konzeptbilder,
  Projekt selbst mittlerweile offline) — bestehende Kacheln UGLYBLACKWORK und Magazincover-Fashion
  bleiben unverändert erhalten.
- **Bildkomprimierung:** alle Screenshots vor dem Einbetten von PNG auf JPEG umgewandelt und
  verkleinert (Hero-Screenshots auf 1400px Breite/Qualität 78, Screendesign-Galerien auf
  1000-1100px/Qualität 68-72) — Rohmaterial lag bei über 90MB (u. a. einzelne Familypage-Screenshots
  mit bis zu 13MB), komprimiert auf insgesamt ca. 3,3MB.
- **Bugfix (Nebenbefund):** eine Chatbot-Antwort im "Projekte"-Themenbereich nannte noch die alten
  Projektnamen ("BMB Deutschland", "Großelternbox") — auf die neuen Projektnamen aktualisiert.
- Rohdateien (Original-PNGs) liegen weiterhin unkomprimiert in `img/portfolio/` als Referenz/Backup.

### 2026-07-27 (DSGVO/Security-Paket, Formspree-Anbindung)
- **Fonts lokal:** Google-Fonts-`<link>`-Tags durch 13 lokale `@font-face`-Deklarationen ersetzt
  (Fraunces, JetBrains Mono, Inter, Roboto). Download-Skript (`font/download-fonts.sh`) zweimal
  gefixt: erst Kompatibilität mit macOS' bash 3.2 (keine `declare -A`), dann ein ernsterer Bug —
  mit modernem Chrome-User-Agent lieferte Google die Latin-Zeichen in einem anderen
  Unicode-Range-Block als dem ersten Treffer aus, wodurch alle 13 Dateien fast komplett ohne
  a-z/A-Z/0-9-Glyphen ankamen. Mit `fonttools` geprüft, Fix (Anfrage ohne Browser-UA) verifiziert.
- **Security-Header per Meta-Tag:** Content-Security-Policy (Whitelist: eigene Domain +
  hCaptcha-Domains + Adobe-XD-Embed) und `Referrer-Policy: strict-origin-when-cross-origin`
  ergänzt.
- **Kontaktformular abgesichert:** Honeypot-Feld (`.hp-field`, visuell versteckt statt
  `display:none`, damit Bots es nicht einfach überspringen) plus echtes hCaptcha-Widget
  (Lazy-Load erst beim Erreichen des Kontaktbereichs). Formular sendet jetzt per AJAX (`fetch`)
  an Formspree statt eines reinen Platzhalters, inkl. Erfolgs-/Fehler-UI.
- **hCaptcha-Secret-Key bewusst nirgends im Code:** die Seite ist rein clientseitig (kein
  eigener Server) — der Secret Key darf daher nie in einer Datei landen, die im Quelltext
  sichtbar ist. Verifizierung läuft stattdessen serverseitig über Formspree (Secret Key nur im
  Formspree-Dashboard hinterlegt).
- **XSS/Injection-Review:** alle `innerHTML`-Zuweisungen geprüft — befüllen sich ausschließlich
  aus fest im Code hinterlegten Konstanten, nie aus Nutzereingabe. Chatbot nutzt `textContent`.
  Kein `eval()`/`new Function()`/`document.write()`.
- **README:** neue Checkliste "Vor dem Live-Gang" mit allen noch händisch zu erledigenden
  Schritten (Formspree-Formular anlegen, hCaptcha-Domain-Bindung sobald die Domain feststeht,
  Impressum/Datenschutz, echte HTTP-Security-Header beim Hosting).

### 2026-07-24 (Rezensionen nebeneinander, Projekt-Kacheln alle klickbar)
- **Rezensionen:** `.reviews-grid` wieder von `flex-direction:column` (gestapelt) auf
  `row` mit `justify-content:center` und Zeilenumbruch fuer schmale Screens umgestellt - beide
  Kacheln stehen jetzt nebeneinander, horizontal zentriert (statt untereinander).
- **Projekt-Bento-Kacheln:** das Vergroessern-Icon (Lupe) ist jetzt auf JEDER Kachel beim Hovern
  sichtbar, nicht nur auf der aktiven/zentrierten - auf den kleinen Kacheln etwas kleiner
  skaliert. Die Lupe hat einen eigenen Klick-Handler (mit `stopPropagation`), der das Bild sofort
  als Fullsize-Ansicht oeffnet, unabhaengig vom aktiven Zustand - ein Klick auf die restliche
  Kachel rueckt kleine Kacheln weiterhin zunaechst ins Zentrum.
- **Hinweis zu "Portfolio-Kacheln wirken zerschossen":** die wahrscheinlichste Ursache ist die
  gespeicherte Schriftgroessen-Einstellung im Barrierefreiheits-Panel (`localStorage`-Schluessel
  `a11yFontStep`) - wurde dort einmal "A++" gewaehlt, vergroessert sich seitdem bei JEDEM
  Seitenaufruf automatisch der komplette Text um bis zu 26%, was in den kleinen (bis auf 38%
  herunterskalierten) Bento-Kacheln schnell zu Text-Ueberlauf/Verschiebungen fuehrt. Ueber das
  Barrierefreiheits-Panel (Button oben rechts) auf "A" (Normal) zuruecksetzen behebt das ohne
  Code-Aenderung. Konnte in dieser Sitzung nicht per Screenshot verifiziert werden (kein
  Browser-Zugriff) - falls das Layout danach immer noch anders aussieht als erwartet, bitte mit
  genauerer Beschreibung/Screenshot zurueckmelden.

### 2026-07-24 (Root-Cause-Fix: Scroll-Loop haengt sich nach ProteinUp-Bereich dauerhaft auf)
- **Echter Root-Cause-Fund:** Nutzer bestaetigte per Rueckfrage, dass der Scroll-Block in Chrome
  auch OHNE jeden Klick auf das iFrame auftritt und ausschliesslich ein harter Reload hilft -
  das ist das klassische Muster einer unbehandelten JavaScript-Exception, die den
  `requestAnimationFrame`-Loop endgueltig stoppt: wirft irgendeine der pro Frame aufgerufenen
  `update*()`-Funktionen (z.B. `updateEmbed()`, `updateTimelineItems()` etc.) einmal einen
  Fehler, wird der abschliessende `requestAnimationFrame(raf)`-Aufruf am Ende der Funktion nie
  erreicht - der komplette Scroll-/Cursor-Loop friert dauerhaft ein, keine Mausbewegung, kein
  Tastendruck und kein Klick kann das rueckgaengig machen (nur ein Reload startet das Skript neu).
  Frueher (siehe Weiterbildung-Buch-Bugfix weiter unten) gab es bereits genau dieses Muster.
- **Fix:** der komplette Frame-Body von `raf()` ist jetzt in try/catch gewrappt, mit
  `requestAnimationFrame(raf)` garantiert am Ende JEDES Durchlaufs (auch nach einem Fehler) -
  der Loop ist damit selbstheilend: ein einzelner fehlerhafter Frame wird abgefangen, in die
  Konsole geloggt, und ab dem naechsten Frame laeuft alles normal weiter. Ein Scroll-Hänger, der
  nur per Reload behebbar ist, kann dadurch strukturell nicht mehr auftreten, unabhaengig davon,
  welche Funktion im Einzelfall den Fehler wirft.
- Hinweis: kein echter Browser fuer Live-Reproduktion verfuegbar (Chrome-Extension nicht
  verbunden, kein Root fuer Playwright-Systemabhaengigkeiten in der Sandbox) - Fix basiert auf
  den vom Nutzer bestaetigten Symptomen (kein Klick noetig, nur Reload hilft) plus detaillierter
  Code-Analyse, nicht auf einer live nachgestellten Reproduktion.

### 2026-07-24 (Dark Mode als Standard, A11y-Schriftskalierung, ProteinUp-Ausweg, diverse Bugfixes)
- **Dark Mode ist jetzt immer der Startzustand:** die Theme-Wahl wurde bisher über `localStorage`
  seitenübergreifend gemerkt. Bewusst entfernt — jeder Seitenaufruf startet jetzt garantiert im
  Dark Mode, unabhängig davon, was beim letzten Besuch gewählt war; die Wahl gilt nur noch für
  die aktuelle Sitzung.
- **Light Mode — gelbe Schrift wird schwarz:** alle bisher amber-farbenen Textfarben (Eyebrows,
  Zahlen, Hover-Labels etc.) nutzen jetzt eine neue `--amber-text`-Variable, die im Light Mode
  auf Schwarz umschaltet. Ränder/Hintergründe/Icons behalten weiterhin den Amber-Akzent.
- **Barrierefreiheit — Schriftvergrößerung skaliert jetzt wirklich ALLES (BFSG/WCAG 1.4.4):**
  vorher waren nur Fließtext-Tags (p/li/blockquote/.eyebrow) betroffen. Jede einzelne
  `font-size`-Deklaration im Stylesheet (82 Stellen, inkl. aller `clamp()`-Headlines) ist jetzt
  als `calc(var(--fs-scale, 1) * <eigener Basiswert>)` geschrieben — jedes Element multipliziert
  seinen EIGENEN Basiswert mit derselben geerbten Variable, wodurch sich nichts durch
  Verschachtelung aufsummiert und die bestehende Größen-Hierarchie proportional erhalten bleibt.
- **Bugfix — ProteinUp-iFrame blockierte weiterhin das Scrollen:** der Klick-zum-Aktivieren-Fix
  reichte nicht, weil beim reinen Wheel-/Trackpad-Scrollen der Mauszeiger sich oft gar nicht
  bewegt, wodurch das `mouseleave`-Deaktivieren nie feuerte. Jetzt gibt es drei unabhängige,
  garantierte Auswege: einen permanent sichtbaren "Fertig – weiterscrollen"-Button, die
  Escape-Taste, und einen Klick irgendwo außerhalb des Frames.
- **Bugfix — Skillset-Kacheln:** der aufklappende Fließtext war bei fester Kachelhöhe (190px)
  zusammen mit Icon und Titel höher als der sichtbare Bereich und wurde durch `overflow:hidden`
  effektiv weggeschnitten (sah aus, als würde der Text beim Hovern verschwinden). Die Kachel
  wächst jetzt beim Hovern kontrolliert in der Höhe, damit der Text wirklich sichtbar wird.
- **Bugfix — Vita-Linie "springt" nach dem Anzünden:** der Linienpfad wurde nur vor und nach der
  Brenn-Animation neu berechnet, blieb während der eigentlichen Animation aber auf der alten
  (noch nicht aufgeklappten) Form eingefroren und schnappte danach abrupt in die richtige Form.
  Der Pfad wird jetzt bei jedem Animationsframe neu aus den aktuellen (live aufklappenden)
  Punktpositionen gebaut — die Linie wächst dadurch synchron mit den Punkten mit.
- SEO-Graphen-Physik deutlich verstärkt (größerer Radius, doppelter Ausschlag).
- Weiterbildung auf ein 2×2-Grid umgestellt (vorher 3 Kacheln pro Reihe).
- Icon-Größen bei Pain/Solution- und ProteinUp-Wirkung-Kacheln vereinheitlicht (30px, wie
  Skillset).
- Rechtsklick-Kontextmenü auf der gesamten Seite deaktiviert.
- Cross-Browser-Durchgang: fehlende `-webkit-backdrop-filter`-Präfixe ergänzt (3 Stellen),
  `-webkit-text-size-adjust`/`text-size-adjust` gegen ungewollte iOS-Textvergrößerung, sowie
  `-webkit-tap-highlight-color:transparent` gegen den grauen Tap-Flash auf Mobile-Browsern.

### 2026-07-24 (Kachel-Vereinheitlichung, ProteinUp-Scroll-Fix, Light-Mode-Feintuning)
- **Kacheln vereinheitlicht:** die Skillset-Kachel "Design & UI/UX" (Glass-Look + magnetischer
  Hover-Tilt) ist jetzt der Standard für alle Info-/Text-Kacheln der Seite — Rezensionen,
  Pain/Solution, Weiterbildung, ProteinUp-Tools/Wirkung. Ein einziger `attachMagneticTilt()`-
  Helfer übernimmt den Hover; Bild-/Projekt-Kacheln behalten bewusst ihren eigenen
  Zoom+Modal-Hover. Die SEO-Score-Ringe bleiben bewusst schlicht (kein Glass-Look), nur die
  darunterliegenden Tools/Highlights-Kacheln sind im Standard-Look.
- **Bugfix — Scrollen nach ProteinUp-iFrame blockiert:** die vorherige Teillösung (Pointer-Events
  nur kurz beim Skip-Klick deaktivieren) deckte den Normalfall nicht ab, dass die Maus beim
  ganz normalen Scrollen einfach über dem eingebetteten Cross-Origin-iFrame steht — das iFrame
  schluckt dann grundsätzlich alle Wheel-Events, ohne dass die Seite das verhindern kann. Neue,
  robustere Lösung: das iFrame hat standardmäßig `pointer-events:none` und wird erst nach
  bewusstem Klick auf einen "Klicken zum Interagieren"-Button aktiv, deaktiviert sich automatisch
  wieder beim Verlassen des Bereichs. Damit blockiert das iFrame nie mehr ungewollt das Scrollen.
- **Light Mode — Gelb-Akzent entfernt:** der Hellmodus hatte bisher einen amber-getönten
  Hintergrund/Glow. Erstmal auf neutrales Schwarz/Grau umgestellt (kein eigener Akzent mehr),
  bis ein bewusst gestalteter Light-Mode-Akzent nachgezogen wird.
- **Light Mode — Cursor ohne Tropfen:** im Hellmodus spawnt die Tropf-Partikel-Animation des
  Cursors nicht mehr (`spawnCursorDrip()` bricht früh ab, sobald `html.light` aktiv ist), der
  Cursor selbst ist dort nur noch ein schlichter runder Punkt mit dem bestehenden Schatten statt
  der Tropfenform.

### 2026-07-24 (Barrierefreiheits-Panel, WCAG/BFSG)
- **Feature:** Neuer Button oben rechts (neben dem Farbschema-Switcher) öffnet ein
  Barrierefreiheits-Panel mit Kontrastmodus (Normal/Hoher Kontrast), dreistufiger
  Schriftgrößen-Anpassung und einer Vorlesefunktion (Web Speech API) — alle Änderungen wirken
  sofort, ohne Neuladen, und werden in `localStorage` gemerkt.
- **WCAG/BFSG-Konformität:** echtes `&lt;button&gt;`-Element (native Tastaturbedienbarkeit),
  Klickfläche 36×36px, `aria-label`, Icon-Farbe bewusst auf `var(--text)` statt `var(--text-dim)`
  gesetzt für einen Kontrast ≥ 4,5:1 in beiden Farbschemata. Das Panel selbst ist ein
  `role="dialog"` mit `aria-modal="true"`: Fokus springt beim Öffnen automatisch hinein, eine
  Fokus-Falle hält Tab/Shift+Tab innerhalb des Panels, `aria-expanded` am Trigger-Button
  spiegelt den Status für Screenreader, Escape oder der Schließen-Button beenden das Panel und
  setzen den Fokus exakt auf den ursprünglichen Trigger-Button zurück.
- **Sichere Schriftvergrößerung:** bewusst kein page-weiter Zoom/`transform:scale()` (die
  scroll-gebundenen Animationen rechnen mit echten Pixel-Maßen), sondern eine auf Fließtext
  (`p`, `li`, `blockquote`, `.eyebrow`) begrenzte Skalierung. Nach dem Umschalten wird ein
  synthetisches `resize`-Event ausgelöst, damit z. B. die Vita-Linie sich an ggf. höhere
  Textblöcke neu ausrichtet.
- **Bugfix (Nebenbefund):** einige feste UI-Elemente (Modal-Schließen-Button, Vita-Anzünde-
  Hinweis) hatten hart codiertes weißes Text/Hintergrund, das im neuen Hellmodus unlesbar
  geworden wäre — auf Theme-Variablen umgestellt.
- **Bugfix:** Mausrad-Scroll über dem geöffneten Barrierefreiheits-Panel bewegte die
  Elternseite statt des (bei kleinen Bildschirmen ggf. länger werdenden) Panel-Inhalts selbst.

### 2026-07-24 (Light/Dark-Mode-Switcher)
- **Feature:** Neuer, dezenter Farbschema-Umschalter oben rechts (dünner Outline-Kreis,
  Mond-/Sonnen-Icon) — Standard bleibt dunkel, ein Klick schaltet auf ein helles Farbschema
  um und merkt sich die Wahl per `localStorage` fürs nächste Mal (kein Flackern beim Neuladen
  dank kleinem Inline-Script direkt im `&lt;head&gt;`, das die Klasse schon vor dem ersten
  Rendern setzt).
- **Umsetzung:** Da die ganze Seite konsequent auf CSS-Custom-Properties statt harter
  Farbwerte aufbaut (`--bg`, `--text`, `--border`, `--glass` usw.), reicht eine Variablen-
  Überschreibung unter `html.light`, um den kompletten Look umzudrehen — bewusst kein
  pauschales `filter:invert()`, das haette auch alle eingebetteten Fotos/Screenshots zu
  Negativen verkehrt. Die Cursor-Taschenlampe (`#spotlight`) wird im Hellmodus deaktiviert,
  da ein schwarzer Vignetten-Effekt auf hellem Hintergrund keinen Sinn ergibt.

### 2026-07-24 (Weiterbildung-Umbau, Bugfixes, SEO-Feinschliff)
- **Layout:** Weiterbildung zeigt die abgeschlossenen Kurse jetzt als einfache Kacheln
  nebeneinander statt als aufklappendes 3D-Buch (auf Nutzerwunsch entfernt) — dadurch auch
  eine ganze gepinnte Scroll-Strecke (132.5vh) weniger auf der Seite.
- **Bugfix (kritisch):** Beim Entfernen der Buch-HTML war zunaechst die zugehoerige
  Scroll-Handler-Funktion (`updateWbBook`) noch aktiv geblieben und griff auf nicht mehr
  vorhandene Elemente zu — das liess eine Laufzeit-Exception im zentralen Scroll-Loop
  entstehen, wodurch sich die Seite nach dem ersten Scroll-Frame nicht mehr bis ganz nach
  unten scrollen liess. Funktion und alle Referenzen entfernt, Seite wieder vollstaendig
  scrollbar.
- **Bugfix:** Klick auf das X ("Bereich ueberspringen") im ProteinUp-Embed konnte die Seite
  scroll-unfaehig machen, weil der Cursor beim automatischen Scroll-Sprung noch kurz ueber
  dem (Cross-Origin-)iFrame stand und dessen Wheel-Events dadurch nicht mehr bei der
  Elternseite ankamen. iFrame bekommt waehrend des Sprungs kurzzeitig `pointer-events:none`.
- **Design:** "Die Loesung: Mich"-Kacheln (Pain-vs-Solution) und die SEO-Score-Ringe haben
  jetzt denselben Glass-Kachel-Look wie die Skillset- und Tool-Kacheln (dezenter
  Frosted-Glass-Hintergrund statt reiner Amber-Umrandung).
- **Feature:** SEO-Score-Ringe reagieren jetzt physisch auf den Cursor — die Ringlinie weicht
  dem Mauszeiger lokal aus und federt beim Verlassen sanft zurueck, exakt dieselbe
  Magnet-Physik wie bei der Vita-Zeitlinie (Ring intern als gesampelter Pfad statt starrem
  Kreis aufgebaut).
- **SEO:** `meta keywords` ergaenzt sowie das Person-Schema (JSON-LD `knowsAbout`) um
  konkrete Kernbegriffe (WordPress, Divi, Shopify, UI/UX, Figma, Adobe XD, Branding u. a.)
  erweitert.

### 2026-07-24 (Maurice Fey Projekt-Referenz)
- **Content:** Neuer Projekteintrag "Maurice Fey" in der Projekte-Matrix (echtes Website-Projekt,
  umgesetzt mit WordPress/Divi Builder, Photoshop und Custom Code) inklusive echtem Screenshot der
  Live-Seite (komprimiert auf ~24KB JPEG) und Hinweis, dass der Kunde die Seite danach komplett
  selbst übernommen hat.
- **Feature:** Projekt-Detail-Modal zeigt jetzt einen echten "Projekt ansehen ↗"-Link (aus dem
  bislang toten `url`-Feld jedes Projekts) sowie optional individuellen Beschreibungstext/Technik-
  Kacheln pro Projekt (`modalText`/`modalTools`) statt für alle Projekte denselben Lorem-Ipsum-
  Platzhalter — Projekte ohne eigene Angaben fallen weiterhin automatisch auf den Platzhaltertext
  zurück.

### 2026-07-24 (Globale Abstands-Vereinheitlichung)
- **Layout:** Abstand Headline/Fließtext → Inhalt ist jetzt überall exakt 80px (vorher zwischen
  4px und 56px je nach Sektion uneinheitlich - Weiterbildung und Galerie hatten eigene, viel
  kleinere Overrides, die entfernt wurden).
- **Layout:** Innere Abstände zwischen Kacheln bzw. Bild-/Text-Blöcken sind jetzt überall exakt
  40px (Skillset-Kacheln, ProteinUp-Prozess-/Wirkungs-/Tools-Kacheln, Pain-vs-Solution-Zeilen,
  Rezensionen, SEO-Gauges, private Projekte/Fellbox-Bild-Text-Zeilen) statt zuvor uneinheitlicher
  Werte zwischen 18px und 56px.

### 2026-07-24 (Großes Layout-/Feinschliff-Update)
- **Layout:** Rezensionen jetzt als schmale, zentrierte Spalte statt 2er-Grid.
- **Layout:** Einheitliche Kachel-Referenzbreite (860px, wie `.pain-compare` bei "Kennst du
  das?") auf Skillset, ProteinUp-Prozess-/Wirkungs-/Tools-Kacheln, Ideensammlung-Chat und
  Kontaktbereich angeglichen, statt uneinheitlicher 700-1008px-Werte.
- **Design:** "Die Lösung: Mich"-Kacheln (Pain-vs-Solution) kompakter — weniger Innenabstand,
  insgesamt geringere Zeilenhöhe.
- **Feature:** Skillset-Kacheln haben jetzt denselben Hover-Pulse-Effekt wie Buttons/Projekt-
  Kacheln/Kontaktformular (heller Puls zieht vom Cursor über die Fläche).
- **Fix:** SEO-Tools-Kacheln (SEObility/SEMrush) hatten unten einen deutlich größeren Abstand
  als die übrigen Kacheln (70px statt 40px) - vereinheitlicht.
- **Feature:** Weiterbildung-Buch zeigt jetzt eine echte Liste abgeschlossener Kurse (LinkedIn
  Learning + Udemy, mit Titel/Anbieter/Datum) statt einer einzelnen generischen
  Zertifikat-Attrappe.
- **Feature/Fix:** Vita-Bereich nimmt vor dem "Anzünden" kaum Layout-Platz ein (nur der erste
  Punkt ist offen) - vorher waren alle 7 Punkte bereits unsichtbar, aber in voller Höhe im
  Layout reserviert, was einen großen Leerraum vor ProteinUp erzeugte. Die weiteren Punkte
  klappen jetzt beim Anzünden gestaffelt nacheinander auf (synchron zur ca. 1.8s-Brenndauer der
  Linie), statt alle auf einmal beim Weiterscrollen zu erscheinen.
- **Fix:** Close-Icon im ProteinUp-Embed war Kind von `.pinned-embed-sticky` (fix an der
  Viewport-Ecke) statt von `.pinned-embed-frame` wie der "In neuem Tab öffnen"-Link - jetzt
  beide im selben Frame, bewegen/skalieren sich also identisch mit.
- **Performance:** Vita-Linie hatte einen ungedrosselten `mousemove`-Handler (Magnet-Hover-
  Effekt) - jeder rohe Mausbewegungs-Event löste einen erzwungenen Layout-Read plus kompletten
  Pfad-Neuaufbau aus. Jetzt wie beim Kerzen-Hover-Effekt per `requestAnimationFrame` auf
  maximal einmal pro Frame gedrosselt.
- **Layout:** Seitenmenü (unten, zentriert) darf jetzt bis 98vw statt 92vw laufen.

### 2026-07-24 (Neue Sektion: Rezensionen)
- **Feature:** Neue, schlichte Sektion "Rezensionen" kurz vor der Kontakt-Sektion. Zwei
  Zitat-Kacheln in Fraunces-Kursiv mit heller Schrift: ein Auszug aus einem Arbeitszeugnis
  (Autor anonymisiert als "Alter Arbeitgeber von Fellbox") sowie ein positives Statement von
  Maurice Fey zur zusammen umgesetzten Website mauricefey.com.

### 2026-07-24 (SEO-Tool-Kacheln mit Icons)
- **Fix:** Die beiden Tool-Kacheln (SEObility, SEMrush) unter den Score-Ringen nutzten das
  reine Text-Kachel-Format (`.pu-tool-tile`, kein Icon) - jetzt auf das Icon-Kachel-Format
  (`.pu-wirkung-tile`) umgestellt, damit sie optisch zu den Erfahrungs-/Erfolgs-Kacheln
  darunter passen (Schild-Haken-Icon für SEObility, Balken+Lupe-Icon für SEMrush).

### 2026-07-24 (Neue Sektion: SEO + technischer SEO-Grundcheck der Seite selbst)
- **Feature:** Neue Sektion "SEO" zwischen Skillset und Weiterbildung (inkl. neuem Eintrag im
  Seitenmenü). Vier animierte, Lighthouse-artige Score-Ringe (Performance, SEO, Accessibility,
  Best Practices), die beim Reinscrollen einmalig hochzählen und sich füllen — bewusst per
  `IntersectionObserver` einmalig getriggert statt an den Haupt-Scroll-Loop gekoppelt (kein
  Dauerlauf, siehe Performance-Konventionen weiter oben). Darunter zwei Kacheln zu den
  genutzten Tools (SEObility, SEMrush) sowie fünf Erfahrungs-/Erfolgs-Kacheln: eigenes
  Technik-/SEO-Audit-Tool per Vibe Coding mit Claude Code als WebUI, Erfahrung über mehrere
  Branchen, eigenständig geführte SEO-Projekte, interne Projekte auf einen Site-Audit-Wert von
  90+ gebracht, sowie laufende Weiterentwicklung von Blogs/Glossaren.
- **SEO-Grundcheck der Seite selbst:** Kopfbereich hatte bisher nur Titel, Viewport und
  Sprachattribut. Ergänzt: Meta-Description, `robots`-Meta, Open-Graph- und Twitter-Card-Tags,
  `theme-color`, ein eingebettetes SVG-Favicon (NK-Monogramm) sowie ein Person-Schema per
  JSON-LD. Dazu `robots.txt` und `sitemap.xml` neu angelegt. Canonical-URL, `og:url` und die
  Domain in `robots.txt`/`sitemap.xml` sind aktuell mit einem Platzhalter versehen und müssen
  ergänzt werden, sobald die Seite unter einer festen Domain live ist.

### 2026-07-24 (Scroll-Position beim Neuladen)
- **Fix:** Beim Neuladen der Seite (oder Zurueck-Navigieren) blieb der Browser manchmal auf
  der zuletzt gescrollten Position, statt oben zu starten. `history.scrollRestoration` wird
  jetzt beim Laden hart auf `'manual'` gesetzt + `window.scrollTo(0,0)` erzwungen; zusaetzlich
  ein `pageshow`-Handler, der bei Wiederherstellung aus dem Back/Forward-Cache des Browsers
  ebenfalls hart auf 0 zuruecksetzt (inkl. der internen Scroll-Engine-Variablen).

### 2026-07-24 (Portfolio-Umbau: Fellbox, Webprojekte, 3. Galerie)
- **Struktur:** Der Fellbox-Bereich ("Social Media / Creatives") ist aus den privaten Projekten
  ausgekoppelt und direkt unter die Überschrift "Portfolio Projekte" gewandert — er läuft
  jetzt in einer eigenen Zeile vor den übrigen privaten Projekten (UGLYBLACKWORK,
  Magazincover-Fashion), die weiterhin in ihrer eigenen Sektion bleiben.
- **Struktur:** Der Bento-Grid-Bereich (Projekte-Matrix) hat jetzt ein eigenes Subheading
  "Webprojekte" bekommen, inklusive dem zugehörigen Hinweistext "Scroll weiter — das nächste
  Projekt rutscht in die Mitte.", der dafür aus dem allgemeinen Projekte-Header dorthin verschoben
  wurde.
- **Feature:** Neue, dritte Galerie-Reihe in "Mehr als Webdesign" für private Fotografie —
  gleicher Aufbau und gleiche Sliderichtung wie die erste Reihe (aktuell mit
  picsum.photos-Platzhaltern befüllt, bis echte Fotos vorliegen).
- **Content:** Headline der Galerie-Sektion von "Designs & Illustrationen" zu "Design,
  Fotografie & Illustration" geändert, dazu neuer Fließtext ("Auch privat beschäftige ich mich
  gern kreativ: Fotografie, Bildbearbeitung, Malen und Zeichnen, Tätowieren, DIY Fashion
  Projekte und und und...").
- **Fix:** Feste Bildhöhe der Galerie-Reihen (220px) reicht bei 3 statt 2 Reihen auf
  niedrigeren Viewports (Laptops im Querformat) nicht mehr sicher in die gepinnte
  100vh-Sticky-Fläche — neuer Breakpoint (`max-height:820px`) reduziert die Höhe auf 170px.

### 2026-07-24 (Buch-Timing, Projekt-Detail-Modal)
- **Fix:** Weiterbildung-Buch-Track hatte weiterhin zu viel Leerraum/Abstand unter dem Buch —
  der eigentliche Scrollweg (Track-Höhe minus 100vh Pin-Höhe) nochmal um 50% reduziert
  (165vh → 132.5vh), ohne die 100vh-Pinning-Grenze zu unterschreiten (sonst friert die
  komplette Buch-Animation ein).
- **Feature:** Jede Projekt-Kachel in der Projekte-Matrix hat jetzt einen "Mehr
  erfahren"-Button (nur auf der aktiven/mittigen Kachel sichtbar), der ein Detail-Modal
  öffnet: Screenshot oben, Titel, Fließtext sowie Technik/Programme-Kacheln, mit
  Close-Button — analog zum ProteinUp-Case-Study-Bereich. Fließtext und Technik-Kacheln sind
  aktuell Lorem-Ipsum-Platzhalter, bis echte Projekttexte vorliegen.
- **Feature:** Kleiner Hinweistext unten im ausgeklappten ProteinUp-Bereich ("Na? Wird die
  Seite zu lang? …"), der nur sichtbar ist, wenn der Steckdosen-Bereich per Stecker geöffnet
  wurde — verweist zurück auf den Stecker zum Schließen.

### 2026-07-24 (Responsive-Anpassung)
- **Fix:** Gepinnte Scroll-Sektionen (Weiterbildung-Buch, ProteinUp-Embed, Galerie, Projekte,
  Ideensammlung-Chat) nutzten `100vh`/`min-height:100vh` — auf mobilen Browsern (v.a. iOS
  Safari) zählt das die volle Bildschirmhöhe inklusive der einklappbaren Adressleiste, wodurch
  Inhalte über den sichtbaren Bereich hinausragen oder das Pinning nicht sauber greift. Überall
  `100dvh` als progressive Ergänzung hinzugefügt (Fallback auf `vh` bleibt für ältere Browser).
- **Fix:** Projekte-Matrix-Kacheln (Bento-Grid) hatten eine feste Basisgröße von 340×240px; die
  aktive Kachel wird per JS auf das 1.7-fache skaliert (≈578×408px) — auf Tablets/Handys ragte
  sie damit weit über den Viewport hinaus bzw. wurde per `overflow:hidden` unkenntlich
  abgeschnitten. Neue Breakpoints bei 900px (260×183px) und 520px (185×130px).
- **Performance:** Cursor-Tropfen-Effekt (Lava-Tropfen vom Mauszeiger) lief bisher auch auf
  Touch-Geräten dauerhaft per Timer weiter, obwohl dort mangels echtem Hover-Cursor nichts
  Sichtbares passiert — auf Geräten ohne Hover (`(hover: none)`) jetzt komplett deaktiviert.
- **Performance:** `.glass`-Kacheln (sehr viele auf der Seite) nutzen `backdrop-filter: blur`,
  was auf schwächerer Mobile-GPU-Hardware spürbar teuer ist — Blur-Radius auf Bildschirmen
  ≤820px von 20px auf 9px reduziert (Optik bleibt erhalten, Rechenlast sinkt).
- **Performance:** Kerzen-Idle-Wackeln (`setInterval`, alle 45ms) lief für immer weiter, auch
  wenn die Kerze längst weit außerhalb des Viewports lag (z. B. am Seitenende) — läuft jetzt
  nur noch, wenn die Kerze laut `IntersectionObserver` überhaupt in Viewport-Nähe ist.

### 2026-07-24
- **Fix:** "Wie habe ich die Seite gebaut?"-Modal ließ sich nicht scrollen — der globale
  Wheel-Handler der Custom-Scroll-Engine hat jedes Scroll-Event abgefangen, auch innerhalb
  des Modals. Modal (und Chat-Fenster) sind jetzt davon ausgenommen und scrollen nativ.
- **Fix:** Klick auf Navigationspunkte (Seitenmenü) hat nicht mehr zum Anker gescrollt —
  Regression aus dem vorherigen Performance-Fix (die Idle-Erkennung im Scroll-Loop hat
  Positionsänderungen durch den unabhängigen Nav-Klick-Tween nicht mehr erkannt). Idle-Check
  vergleicht jetzt gegen die zuletzt tatsächlich gerenderte Scroll-Position statt gegen den
  Wert zu Beginn desselben Frames.
- **Tuning:** Scroll-Nachzieh-Faktor (Custom-Smooth-Scroll) von 0.065 auf 0.14 erhöht — fühlt
  sich direkter/knackiger an, bleibt aber weich statt hart einzurasten.
- **Performance:** Haupt-Scroll-Loop (`raf()`) lief bisher dauerhaft mit voller Framerate
  weiter, auch im Ruhezustand (~10 erzwungene Layout-Reads/Frame für immer). Läuft jetzt nur
  noch, wenn sich tatsächlich etwas bewegt (Scroll-Position oder Cursor-Trail).
- **Performance:** Layout-Thrashing in `updateOnScroll()` reduziert (alle Haupt-Rect-Reads
  werden jetzt vorab gebündelt gelesen statt zwischen einzelnen Style-Writes verstreut).
- **Performance:** ProteinUp-iframe wurde bei jedem Scroll-Frame neu in der Größe gesetzt
  (teurer Reflow) — jetzt nur noch bei tatsächlicher Wertänderung.
- **Performance:** Kerzen-Hover-Effekt las bei jedem rohen `mousemove`-Event ein Rect ein
  (kann >60×/Sek. feuern) — jetzt per `requestAnimationFrame` auf einmal pro Frame gedrosselt.
- **Content:** "Entwickelt in Cursor" aus dem Making-of-Modal-Text entfernt (gehörte da nicht hin).
- **Fix:** Mehrere gepinnte Scroll-Sektionen hatten sehr lange "tote" Scrollstrecken, in denen
  Elemente entweder winzig vor viel schwarzem Hintergrund standen oder sich schlicht nichts
  tat — dadurch wirkten Teile der Seite wie große leere/schwarze Bereiche und Animationen wie
  "zu spät" oder "zu lang":
  - ProteinUp-Embed: Track 260vh → 195vh, Wachsen/Schrumpfen-Phasen von je 30% auf je
    16/14% verkürzt, dafür die volle (interaktive) Größe länger stehend sichtbar.
  - Weiterbildung-Buch: Track 220vh → 165vh, Wachsen/Öffnen/Schließen/Schrumpfen-Phasen
    verschlankt, Lese-Phase (Buch voll offen) dafür länger.
  - Projekte-Matrix: 55vh reine Leerlauf-Scrollstrecke vor Beginn der Bento-Karten-Animation
    auf 18vh reduziert.
- **Fix:** Root-Cause-Fix für den wiederholt gemeldeten "Scrollen bleibt nach ProteinUp
  dauerhaft hängen, nur ein Reload hilft"-Bug. Ursache: eine unbehandelte Exception in
  irgendeiner Funktion, die synchron im zentralen `raf()`-Loop aufgerufen wird, hat den
  jeweils letzten `requestAnimationFrame(raf)`-Aufruf verhindert und damit den kompletten
  Scroll-/Cursor-Loop für den Rest der Session eingefroren — unabhängig davon, welche
  konkrete Zeile den Fehler auslöst. `raf()` wrappt jetzt den gesamten Frame-Body in
  try/catch; `requestAnimationFrame(raf)` läuft garantiert immer weiter (mit
  `console.error`-Logging im Fehlerfall), sodass diese Art von dauerhaftem Einfrieren
  strukturell nicht mehr passieren kann. Hinweis: konnte in dieser Session nicht in einem
  echten Browser nachgestellt/verifiziert werden (kein Chrome-Zugriff, keine funktionierende
  Playwright/jsdom-Simulation) — Fix basiert auf gezielter Code-Analyse plus Rückfragen zum
  genauen Fehlerverhalten.
- **Layout:** Rezensionen-Kacheln wieder nebeneinander (horizontal, zentriert) statt
  gestapelt.
- **Redesign:** "Webprojekte"-Bereich komplett von der scrollgesteuerten Bento-Grid-Matrix
  auf einen klassischen, einfachen Bild-Slider umgestellt (horizontal scrollbar, große
  Screenshots, darunter Seitentitel, Link zur Live-Seite und gelbe Tag-Chips für genutzte
  Technologien — Tags sind aktuell als Platzhalter angelegt und werden noch befüllt). Der
  komplette alte Bento-Kachel-/Sticky-Scroll-Mechanismus (`.project-card`,
  `.projects-track`, `scrollToProject()` etc.) wurde entfernt.
- **Design:** Alle schwarzen Elevation-Schatten (`box-shadow`/`drop-shadow`) laufen jetzt
  über ein gemeinsames `--shadow-a`-Intensitäts-Token (moderne CSS Relative-Color-Syntax,
  mit klassischer `rgba()`-Deklaration als Fallback für ältere Browser) statt fest codierter
  `rgba(0,0,0,X)`-Werte. Dark Mode bleibt bei voller Intensität, im Light Mode ist der Wert
  deutlich reduziert — gleiche Schatten-Geometrie in beiden Modi, im Hellmodus aber spürbar
  sanfter statt hart schwarz. Lokal invertierte Bereiche (Footer-Foto, ProteinUp-Info-Panel)
  bewusst ausgenommen, da eigenständiges Design-Detail mit bereits sehr weichen Werten.
