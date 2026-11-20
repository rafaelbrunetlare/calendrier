# Opération 836 — calendrier de l'Avent

Site statique en français, prêt à publier avec GitHub Pages.

## Contenu
- `index.html` : page d'accueil et calendrier interactif
- `style.css` : mise en page responsive, ambiance Noël
- `app.js` : 24 énigmes, ouverture par date, vérification des réponses et mémorisation locale

## Tester le calendrier
Ouvre `index.html` dans un navigateur. Pour voir toutes les cases sans attendre décembre, ajoute `?preview=1` à l'adresse :
`http://localhost:8000/?preview=1`

Pour lancer un petit serveur local depuis le dossier :
```bash
python -m http.server 8000
```
Puis ouvre `http://localhost:8000/?preview=1`.

## Publier sur GitHub Pages
1. Crée un dépôt GitHub, par exemple `operation-836`.
2. Dépose les trois fichiers (`index.html`, `style.css`, `app.js`) à la racine du dépôt.
3. Dans GitHub : **Settings → Pages**.
4. Dans **Build and deployment**, choisis **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
5. Attends la publication. L'adresse sera généralement `https://TON-PSEUDO.github.io/operation-836/`.
6. Ouvre cette adresse sur un téléphone pour vérifier l'affichage.

## Créer le QR code
Une fois le site publié, copie son URL GitHub Pages (sans `?preview=1`) dans un générateur de QR code, puis télécharge le QR en PNG et joins-le au mail destiné à ta maman.
Ne partage pas l'URL contenant `?preview=1` : elle permet de tester toutes les cases.

## Dates et fuseau horaire
Les cases s'ouvrent du 1er au 24 décembre 2026 selon l'heure locale de l'appareil. Les cases déjà ouvertes restent accessibles. Les cases futures restent verrouillées.

## Progression et réponses
La progression est enregistrée dans le navigateur utilisé (localStorage). Si ta maman change de téléphone ou de navigateur, sa progression ne sera pas transférée. Le site ne calcule pas la somme et ne révèle jamais le total final.

Les réponses ne sont pas stockées en clair dans le fichier JavaScript : le site compare une empreinte SHA-256 de la réponse. Comme tout site statique public, cela ne constitue toutefois pas une protection absolue contre une personne qui inspecte minutieusement le code.

## Préparation des épreuves physiques
- Jour 2 : prépare trois gobelets opaques et une petite balle. Écris `31` sur un papier plié et cache-le sous le gobelet gagnant. Tu peux mélanger les gobelets devant elle.
- Jour 3 : prépare/dessine cinq rangées de sept étoiles.
- Jour 7 : tu peux lui présenter les 36 grelots (ou lui faire imaginer les trois douzaines dans l'énigme).
- Jour 10 : dessine un mini-labyrinthe sur une feuille pour rendre le défi plus concret.
- Jour 11 : prépare six paires de cartes à retourner. Chaque paire retrouvée vaut 6 points.
- Jour 13 : dessine quatre fenêtres avec treize flocons chacune.
- Jour 17 : prépare une petite carte représentant sept sacs de 7 kg chacun.

Les autres épreuves peuvent être résolues directement depuis l'écran.
