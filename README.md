# Le calendrier secret de Noël

Site statique en français, prêt à publier avec GitHub Pages. Toutes les épreuves se jouent directement sur le site : aucune carte, aucun objet et aucune intervention de l'organisateur ne sont nécessaires.

## Contenu
- `index.html` : page d'accueil et calendrier interactif
- `style.css` : mise en page responsive, ambiance de Noël
- `app.js` : 24 énigmes, mini-jeux intégrés, ouverture par date et vérification des réponses

## Tester le calendrier
Ouvre `index.html` dans un navigateur. Pour tester toutes les cases sans attendre décembre, ajoute `?preview=1` à l'adresse.

Pour lancer un serveur local depuis le dossier du projet :
```bash
python -m http.server 8000
```
Puis ouvre `http://localhost:8000/?preview=1`.

## Publier sur GitHub Pages
1. Crée un dépôt GitHub, par exemple `calendrier-noel`.
2. Dépose les trois fichiers (`index.html`, `style.css`, `app.js`) à la racine du dépôt.
3. Dans GitHub : **Settings → Pages**.
4. Dans **Build and deployment**, choisis **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
5. Après publication, l'adresse sera généralement `https://TON-PSEUDO.github.io/calendrier-noel/`.
6. Teste cette adresse sur un téléphone.

## Créer le QR code
Une fois le site publié, copie l'URL GitHub Pages (sans `?preview=1`) dans un générateur de QR code. Le QR code destiné à ta maman doit pointer vers l'adresse normale, jamais vers le mode aperçu.

## Déverrouillage et progression
- Le 1er décembre, seule la case 1 est accessible.
- Le 2 décembre, les cases 1 et 2 sont accessibles ; la 3 reste verrouillée.
- Le mécanisme continue ainsi jusqu'au 24 décembre.
- Les cases déjà ouvertes restent accessibles, même si elles ont été résolues.
- La progression est enregistrée dans le navigateur de l'appareil utilisé. Elle ne se synchronise pas entre plusieurs appareils.
- Les dates suivent l'heure locale de l'appareil.

## Autonomie des épreuves
Le rébus, le jeu des gobelets et le dessin d'observation sont intégrés à la page. Les autres énigmes se résolvent à partir des instructions affichées. L'organisateur n'a rien à cacher, dessiner, mélanger ou distribuer.

## Confidentialité du résultat
Le site ne donne jamais le total final et ne calcule pas la somme à la place de la joueuse. Chaque nombre est révélé uniquement après validation de la réponse du jour ; elle doit le noter dans son carnet.

Les réponses sont vérifiées à partir d'empreintes SHA-256, et non stockées en clair dans le fichier JavaScript. Comme tout site statique public, cela ne constitue toutefois pas une protection absolue contre une personne qui inspecte minutieusement le code.
