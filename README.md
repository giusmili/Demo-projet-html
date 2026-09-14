# Demo Projet Web

Petit projet de démonstration : une page d'accueil HTML reliée à une feuille
de style CSS et à un script JavaScript, avec une interaction simple.

## Structure du projet

```
demo-projet-web/
├── index.html          # Page d'accueil (header, nav, main, footer)
├── pages/
│   └── exemple.html     # Exemple de page secondaire
├── src/
│   ├── css/
│   │   └── style.css    # Styles du site
│   ├── js/
│   │   └── main.js      # Interaction JS (compteur de clics)
│   └── assets/           # Images, icônes, etc.
├── README.md
└── .gitignore
```

## Comment lancer le projet

Aucune installation n'est nécessaire : il s'agit de HTML/CSS/JS "vanilla".

**Option 1 — ouvrir directement le fichier**
Double-cliquez sur `index.html` (ou faites un clic droit > "Ouvrir avec" votre
navigateur).

**Option 2 — utiliser un petit serveur local (recommandé)**
Certaines fonctionnalités (comme le chargement de fichiers via `fetch`)
nécessitent un vrai serveur plutôt que le protocole `file://`. Depuis le
dossier du projet :

```bash
# Avec Python
python -m http.server 8000

# Avec Node.js (si l'extension "Live Server" ou npx est installé)
npx serve .
```

Puis ouvrez `http://localhost:8000` dans votre navigateur.

## Contenu de démonstration

- La page d'accueil affiche un titre, une section "À propos" et une section
  "Démo".
- Un bouton dans la section "Démo" incrémente un compteur de clics via
  `src/js/main.js`, pour illustrer la liaison HTML ↔ JS.
- `pages/exemple.html` montre comment ajouter une page secondaire qui
  réutilise la même feuille de style.
