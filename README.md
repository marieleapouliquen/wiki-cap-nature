# 🐦 Wiki Cap Nature — Ateliers Birds

Guide complet et libre pour répliquer les **ateliers Cap Nature** : (re)découvrir la nature avec des capteurs participatifs.

> À destination des enseignant·e·s et éducateur·ice·s nature qui souhaitent répliquer l'expérience.

## ✨ Présentation

Les ateliers Cap Nature — Birds sont des dispositifs pédagogiques de **75 minutes** qui combinent l'usage de capteurs numériques (parabole acoustique, application d'identification des chants d'oiseaux, sonomètre) et l'exploration sensible d'un site naturel ou urbain.

Testés auprès de **170+ participants** (lycéens et étudiants), ils ont montré des effets significatifs sur :
- la **connexion à la nature** (d = 0,59 · effet moyen-fort)
- le **bien-être hédonique** (d = 0,58 · effet moyen-fort)
- la **fatigue perçue** (réduction modeste mais significative)

## 🌐 Voir le Wiki en ligne

👉 **[Accéder au Wiki déployé](#)** *(à publier sur GitHub Pages)*

## 📚 Contenu du Wiki

- **[Présentation](docs/presentation.html)** — objectifs, public, principes pédagogiques
- **[Protocole pas-à-pas](docs/protocole/index.html)** — déroulé complet en 3 phases, timing, checklists
- **[Matériel & applis](docs/materiel/index.html)** — Merlin Bird ID, parabole directionnelle, FizziQ
- **[Fiches élèves](docs/fiches-eleves/index.html)** — à imprimer directement
- **[Fiches espèces](docs/especes/index.html)** — mini-guide illustré de 29 oiseaux communs
- **[Lire un sonogramme](docs/sonogramme/index.html)** — pédagogie de la lecture acoustique visuelle
- **[Forum](docs/forum/index.html)** — espace d'échange (GitHub Discussions + giscus)
- **[Évaluation](docs/evaluation/index.html)** — questionnaires pré/post, échelle INS, analyse simple
- **[Ressources](docs/ressources/index.html)** — FAQ, glossaire, bibliographie, contact

## 🚀 Déployer sur GitHub Pages

1. Forker ce dépôt sur votre compte GitHub
2. Aller dans **Settings → Pages**
3. Source : choisir la branche `main` et le dossier `/docs`
4. Sauvegarder. Le wiki sera accessible à `https://<utilisateur>.github.io/<nom-du-depot>/`

Aucune compilation : c'est du HTML statique pur. Il suffit d'ouvrir `docs/index.html` localement pour le consulter.

## 💬 Activer le forum (giscus + GitHub Discussions)

Le forum est en place mais non encore configuré. Pour l'activer :

1. **Settings → Features** : cocher **Discussions**
2. Onglet **Discussions** → **Set up discussions** → créer les 8 catégories (cf. tableau dans `docs/forum/index.html` section "Configuration")
3. Installer l'app **giscus** : [github.com/apps/giscus](https://github.com/apps/giscus)
4. Générer la config sur [giscus.app](https://giscus.app) avec votre dépôt
5. Dans `docs/forum/index.html` :
   - Supprimer le bloc `<div class="giscus-placeholder">...</div>`
   - Décommenter le bloc `<!-- BLOC GISCUS À DÉCOMMENTER -->` et y coller les `data-repo-id` et `data-category-id` générés
6. Mettre à jour les liens `https://github.com/` des cartes de catégories vers vos vraies URLs

Le détail complet est sur la page du forum elle-même.

## 🛠️ Structure du dépôt

```
docs/
├── index.html              ← page d'accueil
├── presentation.html       ← présentation générale
├── assets/
│   ├── style.css           ← feuille de style commune
│   └── wiki.js             ← navigation et interactions
├── protocole/
│   └── index.html
├── materiel/
│   └── index.html
├── fiches-eleves/
│   └── index.html          ← fiches imprimables
├── especes/
│   └── index.html          ← 29 fiches espèces illustrées
├── sonogramme/
│   └── index.html          ← apprendre à lire un sonogramme
├── forum/
│   └── index.html          ← forum (GitHub Discussions via giscus)
├── evaluation/
│   └── index.html
└── ressources/
    └── index.html
```

## 🤝 Contribuer

Ce wiki est conçu pour évoluer avec les retours d'expérience de la communauté.

- **Vous avez animé l'atelier ?** Ouvrez une *issue* pour partager votre retour
- **Vous avez une amélioration à proposer ?** Faites une *pull request*
- **Vous voulez l'adapter à un autre contexte ?** Forkez librement (conformément à la licence)

## 📄 Licence

Ce wiki est partagé sous licence **[Creative Commons Attribution - Partage dans les Mêmes Conditions 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)**.

Vous pouvez librement :
- ✅ Partager — copier, distribuer
- ✅ Adapter — modifier, transformer
- ✅ Utiliser à des fins commerciales

À condition de :
- 🔗 Citer la source
- 🔗 Partager les œuvres dérivées sous la même licence

## ✍️ Citer ce wiki

> Pouliquen, M.-L. (2026). *Wiki Cap Nature · Ateliers Birds : guide de réplication pour enseignants et éducateurs nature*. Université Rennes 2, ESO UMR 6590. Sous licence CC BY-SA 4.0.

## 🙏 Remerciements

Le projet Cap Nature bénéficie du soutien du **FEDER · Programme Interreg Europe**, de l'**Université Rennes 2**, du laboratoire **ESO UMR 6590**, de **Géosciences Rennes** et du **Collège Doctoral de Bretagne** (Espaces, Sociétés, Civilisations).

Merci à tou·te·s les enseignant·e·s et étudiant·e·s qui ont participé aux ateliers et à leur évaluation.
