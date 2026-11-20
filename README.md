# Le Grand Mystère de Noël

## Fichiers
- `index.html` : structure de la page
- `style.css` : mise en forme responsive
- `app.js` : calendrier, mini-jeux, validation des réponses et sauvegarde locale

## Tester sur ordinateur
Ouvre `index.html` dans un navigateur. Pour afficher les 24 jours pendant les tests, ajoute `?preview=1` à l'adresse, ou démarre un serveur local :

```bash
python -m http.server 8000
```

Puis visite `http://localhost:8000/?preview=1`.

## Publication avec GitHub Pages
1. Crée un dépôt GitHub public nommé `calendrier-avent`.
2. Ajoute les trois fichiers `index.html`, `style.css` et `app.js` à la racine du dépôt.
3. Dans Settings > Pages, sélectionne `Deploy from a branch`, branche `main`, dossier `/ (root)`.
4. Après publication, l'adresse sera `https://TON-PSEUDO.github.io/calendrier-avent/`.
5. Le QR code doit pointer vers cette adresse sans `?preview=1`.

## À savoir
- Le calendrier est prévu pour décembre 2026.
- Les portes s'ouvrent selon la date locale de l'appareil. Le mode `?preview=1` ouvre toutes les portes pour les tests.
- Les validations sont enregistrées dans le navigateur utilisé (localStorage). Si la joueuse change d'appareil ou de navigateur, sa progression ne sera pas transférée.
- Pour éviter de révéler les réponses à l'écran, les validations utilisent des empreintes SHA-256. Comme le site est entièrement côté navigateur, une personne techniquement expérimentée pourrait néanmoins inspecter le code : ce n'est pas un système de sécurité inviolable.
