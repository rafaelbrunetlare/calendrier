# Le Grand Mystère de Noël

Calendrier de l'Avent interactif en HTML, CSS et JavaScript. Le site fonctionne sans serveur ni intervention de l'organisateur une fois publié.

## Fichiers

- `index.html` : structure de la page.
- `style.css` : mise en forme et adaptation mobile.
- `app.js` : calendrier, mini-jeux, déverrouillage quotidien et validation des réponses.

## Tester sur ordinateur

1. Décompresser le dossier.
2. Ouvrir `index.html` dans un navigateur récent.
3. Pour afficher les 24 missions pendant les tests, ajouter `?preview=1` à l'adresse locale, par exemple `index.html?preview=1`.

Le mode aperçu est réservé à l'organisateur : ne pas transmettre cette adresse à la joueuse.

## Publier avec GitHub Pages

1. Créer un dépôt GitHub (par exemple `calendrier-avent`).
2. Ajouter les trois fichiers `index.html`, `style.css` et `app.js` à la racine du dépôt.
3. Dans **Settings → Pages**, choisir la branche principale et le dossier `/root` (ou `/`).
4. Attendre la publication : GitHub affiche alors l'adresse publique du site.
5. Tester cette adresse sans `?preview=1` avant de créer le QR code.

## Fonctionnement

- Les missions se déverrouillent selon la date locale, du 1er au 24 décembre 2026.
- Le mode `?preview=1` ouvre toutes les missions pour les tests.
- La progression est enregistrée dans le navigateur via `localStorage`.
- Les réponses sont vérifiées localement. Aucun compte ni service externe n'est nécessaire.
- Pour repartir de zéro pendant les tests, effacer les données du site dans les paramètres du navigateur.

Remarque : la progression est propre à chaque navigateur et appareil. Si la joueuse change d'appareil ou de navigateur, son avancement ne sera pas transféré automatiquement.
