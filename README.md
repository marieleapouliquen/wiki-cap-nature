# Cap Nature — Ateliers Birds

Site du guide **Cap Nature — Birds** : (re)découvrir la nature avec des capteurs participatifs.
À destination des enseignant·e·s et éducateur·ice·s nature.

Site statique généré avec **Jekyll** et publié sur **GitHub Pages**.

## Structure du dépôt

```
_config.yml              ← réglages du site
_data/
└── navigation.yml       ← le menu (modifiez l'ordre/les libellés ici)
_pages/                  ← les pages de contenu (.md)
├── protocole.md
├── materiel.md
└── ressources.md
index.md                 ← page d'accueil
_layouts/                ← gabarits (squelette des pages)
├── default.html
└── page.html
_includes/               ← composants réutilisables (header, footer, cartes…)
assets/
├── css/main.css         ← le design (couleurs, polices, mise en page)
├── js/wiki.js           ← menu mobile
├── img/                 ← photos d'oiseaux
└── fiches/              ← fiches pédagogiques (PDF)
```

## Comment éditer le site

Le contenu de chaque page est dans un fichier Markdown (`.md`) :

| Page | Fichier |
|------|---------|
| Accueil | `index.md` |
| Protocole | `_pages/protocole.md` |
| Ressources | `_pages/ressources.md` |

Pour modifier un texte, ouvrez le `.md` correspondant et éditez-le directement
(sur GitHub, le crayon ✏️). Le menu se modifie dans `_data/navigation.yml`.

## Déployer sur GitHub Pages

1. **Settings → Pages**
2. Source : *Deploy from a branch*, branche `main`, dossier `/ (root)`
3. GitHub détecte Jekyll et construit le site automatiquement

> Publié sur `https://<utilisateur>.github.io/wiki-cap-nature/`,
> donc `baseurl: "/wiki-cap-nature"` dans `_config.yml`.

## Licence

Sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).

> Pouliquen, M.-L. (2026). *Cap Nature · Ateliers Birds*. Université Rennes 2.

Photos : Amee Fairbank-Brown, Don Coombez, Andrew Odintsov, Konstantin Nezhbert,
Lex Melony, Vincent van Zalinge — Unsplash.
