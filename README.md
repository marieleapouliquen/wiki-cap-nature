# Cap Nature — Ateliers Birds

Site du guide **Cap Nature — Birds** : (re)découvrir la nature avec des capteurs participatifs.
À destination des enseignant·e·s et éducateur·ice·s nature.

Site statique généré avec **Jekyll** et publié sur **GitHub Pages**.

## Comment éditer le site

Le contenu de chaque page est dans un fichier Markdown (`.md`) à la racine :

| Page | Fichier |
|------|---------|
| Accueil | `index.md` |
| Protocole | `protocole.md` |
| Matériel | `materiel.md` |
| Ressources | `ressources.md` |

Pour modifier un texte, ouvrez le `.md` correspondant et éditez-le directement (sur GitHub, le petit crayon ✏️ en haut à droite du fichier). Le Markdown s'écrit simplement :

```markdown
## Un titre de section

Un paragraphe avec du **gras** et un [lien](https://exemple.fr).

- Un élément de liste
- Un autre
```

Les éléments visuels (couleurs, mise en page, hero, bande de photos) sont gérés
ailleurs et s'appliquent automatiquement — vous n'avez pas à y toucher.

## Modifier des éléments structurés

Certaines données sont en haut du fichier `.md`, entre les deux lignes `---`
(c'est le « front matter »). Par exemple, pour la page Ressources, chaque lien
est une entrée facile à éditer :

```yaml
- name: Merlin Bird ID
  tag: Gratuit
  url: https://merlin.allaboutbirds.org/
  desc: Description du lien…
```

Idem pour les photos de l'accueil (`index.md`), les cartes, et la timeline.

## Structure du dépôt

```
_config.yml          ← réglages du site (titre, navigation, etc.)
index.md             ← page d'accueil
protocole.md         ← page Protocole
materiel.md          ← page Matériel
ressources.md        ← page Ressources
_layouts/            ← gabarits (squelette des pages) — rarement à toucher
_includes/           ← composants réutilisables (header, footer, cartes…)
assets/
├── css/style.css    ← le design (couleurs, polices, mise en page)
├── js/wiki.js       ← menu mobile
└── img/             ← les photos d'oiseaux
```

## Déployer sur GitHub Pages

1. Pousser ce dépôt sur GitHub
2. **Settings → Pages**
3. Source : *Deploy from a branch*, branche `main`, dossier `/ (root)`
4. GitHub détecte Jekyll et construit le site automatiquement

> Si le site est publié sur `https://<utilisateur>.github.io/cap-nature/`,
> ouvrez `_config.yml` et mettez `baseurl: "/cap-nature"`.
> S'il est sur un domaine racine, laissez `baseurl: ""`.

## Tester en local (facultatif)

Avec Ruby installé :

```bash
gem install bundler jekyll
jekyll serve
```

Puis ouvrir `http://localhost:4000`.

## Licence

Sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).

> Pouliquen, M.-L. (2026). *Cap Nature · Ateliers Birds*. Université Rennes 2.

Photos : Amee Fairbank-Brown, Don Coombez, Andrew Odintsov, Konstantin Nezhbert,
Lex Melony, Vincent van Zalinge — Unsplash.
