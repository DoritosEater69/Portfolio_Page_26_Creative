# Portfolio-Seite auf GitHub Pages veröffentlichen

Ich habe in diesem Ordner bereits ein lokales Git-Repository angelegt und alle Dateien (`portfolio.html`, `img/`) committet. Du musst jetzt nur noch auf GitHub.com ein Repo anlegen und pushen.

## 1. Neues Repo auf GitHub erstellen
1. Gehe zu https://github.com/new (eingeloggt in deinen Account)
2. **Repository name:** z. B. `portfolio`
3. **Public** auswählen (Pages funktioniert kostenlos nur bei public Repos, außer du hast GitHub Pro)
4. **Wichtig:** KEIN README, .gitignore oder Lizenz hinzufügen (sonst gibt's beim Push einen Konflikt)
5. Auf **"Create repository"** klicken

## 2. Lokales Repo mit GitHub verbinden und pushen
Öffne das Terminal, wechsle in diesen Ordner und führe aus (ersetze `DEIN-USERNAME`):

```bash
cd "/Users/niclaskoch/Claude Private/Portfolio Page"
git remote add origin https://github.com/DEIN-USERNAME/portfolio.git
git push -u origin main
```

Beim Push wirst du nach Login gefragt — am einfachsten über den Browser-Login-Flow, den Git automatisch öffnet (oder mit einem Personal Access Token statt Passwort, falls gefragt).

## 3. GitHub Pages aktivieren
1. Im Repo auf GitHub: **Settings** → **Pages** (linkes Menü)
2. Unter **"Build and deployment"** → **Source**: `Deploy from a branch`
3. **Branch**: `main`, Ordner `/ (root)` → **Save**
4. Nach ca. 1 Minute ist die Seite live unter:
   `https://DEIN-USERNAME.github.io/portfolio/portfolio.html`

## Updates später
Nach Änderungen an der Datei einfach:
```bash
git add -A
git commit -m "Update Portfolio"
git push
```
Die Seite aktualisiert sich automatisch nach kurzer Zeit.

## Tipp: index.html statt portfolio.html
Falls du willst, dass die Seite direkt unter `https://DEIN-USERNAME.github.io/portfolio/` (ohne Dateinamen) erreichbar ist, benenne `portfolio.html` in `index.html` um, bevor du pushst:
```bash
mv portfolio.html index.html
git add -A
git commit -m "Rename to index.html"
```
