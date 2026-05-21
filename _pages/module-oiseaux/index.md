---
layout: page
permalink: /module-oiseaux/
title: "Module 1 · Écoacoustique"
lead: "À l'écoute des oiseaux et du paysage sonore."
sidebar_title: Module 1 · Écoacoustique
toc:
  - id: paysage-sonore
    label: Le paysage sonore
  - id: vue-ensemble
    label: Vue d'ensemble
  - id: outils
    label: Les outils
  - id: avant
    label: Avant l'atelier
  - id: phase1
    label: Phase 1 · Mise en attention
  - id: phase2
    label: Phase 2 · Exploration
  - id: phase3
    label: Phase 3 · Restitution
  - id: sono-intro
    label: Lire un sonogramme
sidebar_links_title: Pour aller plus loin
sidebar_links:
  - label: Ressources & fiches
    url: /module-oiseaux/ressources/

photos:
  - file: grive.jpg
    alt: Grive musicienne au sol
    caption: Grive musicienne
  - file: merle.jpg
    alt: Merle noir chantant
    caption: Merle noir
  - file: mesange.jpg
    alt: Mésange charbonnière sur une branche
    caption: Mésange charbonnière
  - file: pinson.jpg
    alt: Pinson des arbres sur un piquet
    caption: Pinson des arbres
  - file: sittelle.jpg
    alt: Sittelle torchepot sur une branche
    caption: Sittelle torchepot
  - file: martin-pecheur.jpg
    alt: Martin-pêcheur d'Europe sortant de l'eau
    caption: Martin-pêcheur

soundscape:
  - icon: 🌧️
    title: Géophonie
    desc: "Les sons de la terre et des éléments : le vent dans les arbres, l'eau d'un ruisseau, l'orage."
  - icon: 🐦
    title: Biophonie
    desc: "Les signaux émis par les organismes vivants : chants d'oiseaux, stridulations d'insectes."
  - icon: 🚗
    title: Anthrophonie
    desc: "Les bruits générés par les activités humaines : trafic routier, machines, musiques."

timeline:
  - phase: Avant
    duration: J−7
    title: Préparation
    text: Repérage du site, installation des applis sur les smartphones, préparation du matériel et impression des fiches.
  - phase: Phase 1
    duration: 15 min
    title: Mise en attention
    text: Accueil, présentation des capteurs, écoute silencieuse de 30 secondes sans outil.
  - phase: Phase 2
    duration: 45 min
    title: Exploration en sous-groupes
    text: "Sortie sur site, identification des oiseaux, mesures sonores, prise de notes sur la fiche d'observation."
  - phase: Phase 3
    duration: 15 min
    title: Restitution collective
    text: Partage des observations, cartographie sensible et écologique du lieu exploré.
  - phase: Après
    duration: J+1
    title: Prolongements
    text: Analyse collective des observations, restitution écrite ou artistique, prolongements disciplinaires.
---

{% include photo-band.html photos=page.photos %}

<h2 id="paysage-sonore">Le paysage sonore</h2>

Le **paysage sonore** est l'ensemble des sons présents dans un lieu à un moment donné. Comme un paysage visuel composé de couleurs et de formes, il rassemble des sons de différentes natures. Les chercheurs le décomposent en trois grandes familles :

{% include concepts.html items=page.soundscape %}

Apprendre à distinguer ces sons, c'est porter une **attention nouvelle** à un environnement souvent ignoré. C'est aussi la clé pour comprendre un enjeu écologique réel : la pollution sonore.

<h2 id="vue-ensemble">Vue d'ensemble</h2>
{% include timeline.html steps=page.timeline %}

<h2 id="outils">Les outils</h2>

L'atelier repose sur trois capteurs simples, complémentaires, qui tiennent dans une poche. Aucune compétence technique préalable n'est nécessaire — ni pour l'animateur, ni pour les participants.

### Merlin Bird ID — identifier les oiseaux par leur chant

Application gratuite du Cornell Lab of Ornithology (iOS et Android). Elle écoute l'environnement et propose en temps réel le nom des oiseaux qui chantent. **À préparer avant l'atelier** : installer l'app, puis télécharger le pack «&nbsp;Europe occidentale&nbsp;» (≈ 200 Mo) pour un fonctionnement hors-ligne. Sur le terrain : ouvrir Merlin → **Sound ID** → bouton micro, et laisser écouter une à deux minutes.

### Parabole directionnelle — amplifier les sons lointains

Une coupole (type BirdMic) qui se branche au smartphone et concentre les sons venant de la direction visée, comme une oreille géante. Elle améliore nettement la détection de Merlin et crée un effet «&nbsp;waouh&nbsp;» très parlant. **Optionnelle** : l'atelier fonctionne aussi avec le simple micro du téléphone si le budget ne permet pas d'en acquérir.

### FizziQ — mesurer le niveau sonore

Application gratuite de la fondation La main à la pâte, sans publicité ni collecte de données. Elle transforme le smartphone en sonomètre&nbsp;: on lit le niveau en décibels (dB) pour comparer le calme d'une zone à l'autre. Repères utiles&nbsp;: une forêt calme tourne autour de 30 dB, une conversation 40–50 dB, une rue animée 70 dB.

<div class="callout tip" markdown="1">
**Pas besoin d'être ornithologue** — Merlin fait l'identification à votre place. Votre rôle d'animateur est d'accompagner la rencontre et l'attention, pas de vérifier les espèces. Des fiches de prise en main détaillées (installation, défis d'écoute) sont disponibles dans les [ressources]({{ '/module-oiseaux/ressources/' | relative_url }}).
</div>

<h2 id="avant">Avant l'atelier (préparation)</h2>
### J−7 à J−14 : Repérage du site

Le choix du site est **déterminant**. Il n'a pas besoin d'être « riche » écologiquement — l'effet de surprise est souvent plus fort en milieu apparemment banal — mais il doit permettre :

- Une **exploration en groupe** sans danger (pas de voirie traversante)
- Une **diversité de micro-habitats** : strates végétales, point d'eau si possible, lisières
- Un **point de regroupement** pour le briefing et la restitution
- Un accès **relativement silencieux** (loin des grands axes)

<div class="callout tip" markdown="1">
**Repérage acoustique** — Faites une visite préalable à la même heure que l'atelier prévu. Notez : combien d'espèces d'oiseaux entendez-vous en 5 minutes ? Quel est le niveau sonore moyen ? Y a-t-il des sources de bruit anthropique qui peuvent perturber (chantier, route) ?
</div>

### J−7 : Préparation des outils numériques

Sur les smartphones qui seront utilisés (ceux des participants ou ceux fournis) :

1. **Installer Merlin Bird ID** (Cornell Lab, gratuit). Télécharger le **pack Europe occidentale** en mode hors-ligne (≈ 200 Mo).
2. **Installer FizziQ** (gratuit). Ouvrir l'app et autoriser l'accès au micro.
3. **Tester** chaque smartphone à l'extérieur avant l'atelier.

Voir [la section «&nbsp;Les outils&nbsp;»](#outils) ci-dessus et les [fiches de prise en main]({{ '/module-oiseaux/ressources/' | relative_url }}#fiches) pour le détail.

### J−2 : Préparation matérielle

- Paraboles directionnelles (1 pour 4–5 élèves) chargées + câbles jack/USB-C
- Smartphones (1 pour 4–5 élèves) chargés, applis installées et testées
- Fiches d'observation imprimées (1 par participant) — une simple feuille avec colonnes lieu, espèces, niveau sonore, ressenti suffit
- Crayons + supports rigides (cartonnettes A4)
- Trousse de secours, eau, sifflet pour le regroupement
- Plan du site avec zone d'exploration délimitée

### J−1 : Communication aux participants

Prévenir les participants de :

- S'habiller pour l'extérieur (chaussures fermées, veste si frais)
- Apporter leur smartphone chargé (si vous comptez l'utiliser)
- Prévoir une bouteille d'eau
- Le caractère **silencieux** de l'atelier — c'est une condition de réussite

<h2 id="phase1">Phase 1 · Mise en attention (15 min)</h2>
### 0–5 min : Accueil

Au point de regroupement, accueillir les participants et présenter en quelques mots le déroulé de l'atelier : une exploration à l'écoute du vivant, à l'aide de quelques capteurs. Préciser l'objectif : prêter attention, découvrir, sans esprit de compétition.

### 5–10 min : Présentation des capteurs

En grand groupe, présenter brièvement **les trois outils** :

- **Merlin Bird ID** : « cette appli écoute autour de nous et propose le nom de l'oiseau qui chante »
- **Parabole directionnelle** : « cette coupole amplifie les sons qui viennent dans son axe, comme une oreille géante » — démo possible
- **FizziQ** : « cette appli mesure en décibels le niveau sonore ambiant »

Insister sur la consigne : **parler à voix basse**, marcher doucement, prendre le temps. L'atelier n'est pas une compétition : il n'y a pas de score à battre.

### 10–15 min : Écoute silencieuse de référence

<div class="callout science" markdown="1">
**Pourquoi cette phase est essentielle** — L'écoute silencieuse de 30 secondes **avant** tout usage de capteur établit une ligne de base attentionnelle. Les participants prennent conscience de ce qu'ils entendent *sans aide*. Cela rend l'effet de révélation des capteurs beaucoup plus marquant ensuite.
</div>

Consigne : *« Fermez les yeux si vous le souhaitez. Pendant 30 secondes, écoutez le plus précisément possible tout ce qui vous parvient. Combien de sources sonores différentes pouvez-vous distinguer ? »*

Au signal, on rouvre les yeux. Demander à 3–4 participants : *« Qu'avez-vous entendu ? »*. Noter au tableau si possible. Cette mise en commun introduit naturellement le vocabulaire des sons du vivant (biophonie), des sons naturels non vivants comme le vent ou l'eau (géophonie) et des sons humains (anthrophonie).

<h2 id="phase2">Phase 2 · Exploration en sous-groupes (45 min)</h2>
### 15–20 min : Constitution des sous-groupes & distribution du matériel

- Sous-groupes de **3 à 5 personnes** (4 est l'idéal)
- Chaque sous-groupe reçoit : 1 parabole + 1 smartphone (Merlin + FizziQ) + 1 fiche d'observation par participant + crayons
- Distribuer les rôles : 1 « porteur de parabole », 1 « capteur FizziQ », 1 « scribe », 1 « observateur visuel ». Les rôles tournent.

### 20–55 min : Exploration libre

Le sous-groupe explore le site librement, en respectant les **limites de la zone** et l'horaire du regroupement. À chaque point d'arrêt (5 à 10 par sortie), le groupe :

1. **S'arrête en silence** 30 secondes pour écouter
2. **Lance Merlin Bird ID** en mode Sound ID (1 à 2 minutes), avec ou sans parabole
3. **Mesure le niveau sonore** avec FizziQ
4. **Note sur la fiche** : lieu, espèces identifiées, niveau dB, ressenti
5. Reprend l'exploration vers un autre point

<div class="callout tip" markdown="1">
**Astuce d'animation** — Pendant la phase d'exploration, l'animateur·ice circule entre les sous-groupes en restant **discret·e**. Son rôle : débloquer une difficulté technique, relancer un groupe qui s'essouffle, attirer l'attention sur un détail. Surtout pas de cours magistral en pleine sortie.
</div>

### 55–60 min : Signal de retour

Sifflet ou autre signal sonore convenu, 5 minutes avant la fin. Les sous-groupes finissent leur observation en cours et reviennent au point de regroupement.

<h2 id="phase3">Phase 3 · Restitution collective (15 min)</h2>
### 60–70 min : Mise en commun

En grand groupe (assis si possible) :

- Tour des sous-groupes : *« Combien d'espèces avez-vous identifiées ? Lesquelles vous ont surpris·es ? »*
- Recensement collectif au tableau : **liste des espèces totales** du groupe
- Comparaison des **niveaux sonores** entre zones : où était-il le plus calme ? le plus bruyant ?
- Mots-clés sur les **ressentis** : chacun donne 1–2 mots qui résument son expérience

### Variante : cartographie sensible et écologique

Si vous avez plus de temps, invitez les sous-groupes à produire une **cartographie** du lieu exploré, combinant données scientifiques (zones d'observation, espèces, mesures dB) et observations sensibles (ressentis, émotions, ambiance). Formats au choix : carte schématique annotée, tableau scientifique/sensible, collage de mots-clés, court texte poétique.

### 70–75 min : Clôture

Mot de clôture : remercier les participants, recueillir quelques impressions à chaud, et indiquer les prolongements possibles (applications à garder, sorties suggérées, ressources pour aller plus loin).

<h2 id="apres">Après l'atelier (prolongements)</h2>
### Prolongements en classe (1–2 séances)

- **SVT** : approfondir les espèces identifiées, leur écologie, leur statut de conservation
- **Physique** : exploiter les mesures dB pour comprendre les échelles logarithmiques, la pollution sonore
- **Géographie** : superposer les zones d'observation et les types d'occupation du sol
- **Français / Arts** : production d'un texte ou d'une œuvre plastique à partir des observations sensibles
- **EMC** : débat sur la pollution sonore comme enjeu de santé environnementale

### Prolongements scientifiques (science citoyenne)

Inviter les participants à poursuivre les observations en autonomie via les programmes présentés dans les [ressources]({{ '/module-oiseaux/ressources/' | relative_url }}) : Faune-France, Vigie-Nature École, Oiseaux des jardins.

<h2 id="adaptations">Adaptations selon les contextes</h2>
### Niveau collège (5e–3e)

- Réduire la durée d'exploration à 30 minutes
- Simplifier le vocabulaire (« sons du vivant » plutôt que « biophonie »)
- Donner un parcours plus encadré, avec 3–4 points d'arrêt repérés à l'avance
- Allouer plus de temps à la restitution collective et au dessin

### Public adulte / animation grand public

- Ajouter une dimension réflexive : *« Quel rôle joue cette technologie dans votre rapport à la nature ? »*
- Mobiliser les connaissances naturalistes des participants (si présentes)
- Élargir la palette des outils possibles (jumelles, lentille macro…)

### Milieu urbain dense

- Choisir un parc ou un jardin, même petit
- Travailler aussi sur les sons humains (anthrophonie) comme objet d'étude, pas comme nuisance
- Insister sur l'effet de surprise : « combien d'espèces a-t-on quand même trouvées ? »

### Milieu rural / forêt

- Élargir la zone d'exploration (mais s'assurer du retour à temps)
- Possible d'ajouter d'autres sens (vue avec jumelles, toucher)
- Attention à la couverture réseau pour les apps (Merlin et FizziQ ont un mode hors-ligne)

### Saison hors-printemps

- **Hiver** : moins d'oiseaux chanteurs, mais possible avec espèces sédentaires (mésanges, merles, pinsons, rouges-gorges)
- **Été** : les chants déclinent après juillet, préférer l'aube
- **Automne** : migration, sons de passage intéressants à entendre

<h2 id="posture">Posture d'animation</h2>
### Avant tout : le silence n'est pas une contrainte

Beaucoup de participants ne sont pas habitués au silence en extérieur. Présenter cette consigne non comme une *règle* mais comme une **condition de découverte** : « si on parle, on n'entendra rien d'autre que nous-mêmes ». La métaphore du chasseur ou du photographe animalier fonctionne bien.

### Accepter les « pannes » et les « rien »

Il arrivera qu'un sous-groupe n'entende presque rien, que Merlin ne reconnaisse aucune espèce. Ces moments sont des occasions pédagogiques :

- « Pourquoi à votre avis on n'entend rien ici ? » → discussion sur l'occupation du sol, la pollution sonore
- « Pourquoi Merlin n'est pas sûr ? » → discussion sur les limites de l'IA, l'importance des conditions de mesure

### Ne pas être un·e expert·e ornitho

Vous n'avez **pas besoin** d'être ornithologue pour animer cet atelier. Merlin fait l'identification ; votre rôle est d'accompagner la rencontre, pas de vérifier. Si une espèce vous surprend, faites confiance à l'app — et apprenez avec les participants.

### Valoriser l'expérience subjective

L'atelier vaut autant pour ce qu'il fait observer que pour ce qu'il fait ressentir. Les phrases du type *« je ne savais pas que cet endroit était aussi vivant »* sont les indicateurs les plus précieux. Faites-les remonter dans la restitution.

<h2 id="sono-intro">Lire un sonogramme</h2>

Quand Merlin identifie un oiseau, il affiche à l'écran un **sonogramme** : l'image du son qui défile. Comprendre cette image enrichit beaucoup l'atelier. Voici un guide complet pour apprendre à la lire.


<h2 id="sono-quest">Qu'est-ce qu'un sonogramme ?</h2>
<p>Un <strong>sonogramme</strong> (aussi appelé <em>spectrogramme</em>) est une représentation graphique d'un son. Il transforme une onde sonore — invisible — en une image qu'on peut analyser à l'œil. Quand vous lancez Merlin Bird ID en mode <em>Sound ID</em>, l'écran qui apparaît avec des taches colorées qui défilent, c'est exactement ça : un sonogramme en temps réel.</p>

<div class="callout science">
  <p class="callout-title">🔬 Pourquoi c'est utile</p>
  <p>L'oreille humaine perçoit des sons riches mais fugaces. Le sonogramme fige le son, le rend visible, comparable, mesurable. Deux chants d'oiseaux qui semblent similaires à l'oreille apparaissent souvent très différents sur un sonogramme — et inversement. C'est l'outil de base de la bioacoustique.</p>
</div>

<h2 id="sono-axes">Les deux axes : temps et fréquence</h2>
<p>Un sonogramme se lit comme une partition de musique simplifiée. Il a deux dimensions :</p>

<div class="sono-frame">
  <svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg">
    <!-- Fond -->
    <rect x="80" y="40" width="560" height="280" fill="#fafbf6" stroke="#e2e6d8"/>

    <!-- Grille horizontale (fréquences) -->
    <line x1="80" y1="40" x2="640" y2="40" stroke="#e2e6d8" stroke-dasharray="3,3"/>
    <line x1="80" y1="110" x2="640" y2="110" stroke="#e2e6d8" stroke-dasharray="3,3"/>
    <line x1="80" y1="180" x2="640" y2="180" stroke="#e2e6d8" stroke-dasharray="3,3"/>
    <line x1="80" y1="250" x2="640" y2="250" stroke="#e2e6d8" stroke-dasharray="3,3"/>

    <!-- Grille verticale (temps) -->
    <line x1="220" y1="40" x2="220" y2="320" stroke="#e2e6d8" stroke-dasharray="3,3"/>
    <line x1="360" y1="40" x2="360" y2="320" stroke="#e2e6d8" stroke-dasharray="3,3"/>
    <line x1="500" y1="40" x2="500" y2="320" stroke="#e2e6d8" stroke-dasharray="3,3"/>

    <!-- Axe Y : fréquence -->
    <line x1="80" y1="40" x2="80" y2="320" stroke="#1f2a6b" stroke-width="2"/>
    <polygon points="80,30 75,42 85,42" fill="#1f2a6b"/>
    <text x="65" y="45" font-size="12" fill="#1f2a6b" text-anchor="end">8 kHz</text>
    <text x="65" y="115" font-size="12" fill="#1f2a6b" text-anchor="end">6 kHz</text>
    <text x="65" y="185" font-size="12" fill="#1f2a6b" text-anchor="end">4 kHz</text>
    <text x="65" y="255" font-size="12" fill="#1f2a6b" text-anchor="end">2 kHz</text>
    <text x="65" y="325" font-size="12" fill="#1f2a6b" text-anchor="end">0</text>
    <text x="30" y="180" font-size="14" font-weight="bold" fill="#1f2a6b" text-anchor="middle" transform="rotate(-90 30 180)">Fréquence</text>

    <!-- Axe X : temps -->
    <line x1="80" y1="320" x2="640" y2="320" stroke="#1f2a6b" stroke-width="2"/>
    <polygon points="650,320 638,315 638,325" fill="#1f2a6b"/>
    <text x="80" y="340" font-size="12" fill="#1f2a6b" text-anchor="middle">0 s</text>
    <text x="220" y="340" font-size="12" fill="#1f2a6b" text-anchor="middle">1 s</text>
    <text x="360" y="340" font-size="12" fill="#1f2a6b" text-anchor="middle">2 s</text>
    <text x="500" y="340" font-size="12" fill="#1f2a6b" text-anchor="middle">3 s</text>
    <text x="630" y="340" font-size="12" fill="#1f2a6b" text-anchor="middle">4 s</text>
    <text x="360" y="365" font-size="14" font-weight="bold" fill="#1f2a6b" text-anchor="middle">Temps</text>

    <!-- Annotation : aigu / grave -->
    <path d="M 660 50 L 660 150" stroke="#94c11f" stroke-width="2" marker-end="url(#arrowhead1)"/>
    <defs>
      <marker id="arrowhead1" markerWidth="8" markerHeight="8" refX="0" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#94c11f"/>
      </marker>
    </defs>
    <text x="668" y="55" font-size="12" fill="#5a8a1a">vers</text>
    <text x="668" y="70" font-size="12" font-weight="bold" fill="#5a8a1a">l'aigu</text>

    <path d="M 660 290 L 660 200" stroke="#e8862a" stroke-width="2" marker-end="url(#arrowhead2)"/>
    <defs>
      <marker id="arrowhead2" markerWidth="8" markerHeight="8" refX="0" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#e8862a"/>
      </marker>
    </defs>
    <text x="668" y="295" font-size="12" fill="#e8862a">vers</text>
    <text x="668" y="310" font-size="12" font-weight="bold" fill="#e8862a">le grave</text>
  </svg>
  <p class="sono-caption">Les deux axes d'un sonogramme : le <strong>temps</strong> qui défile horizontalement, la <strong>fréquence</strong> (du grave en bas à l'aigu en haut) sur la verticale.</p>
</div>

<h3>L'axe horizontal : le temps</h3>
<p>Le temps s'écoule de gauche à droite, comme une lecture occidentale. Un sonogramme dure typiquement quelques secondes : un chant complet d'oiseau fait souvent <strong>1 à 5 secondes</strong>. Plus une trace est étirée horizontalement, plus le son est long.</p>

<h3>L'axe vertical : la fréquence (la hauteur du son)</h3>
<p>La fréquence se mesure en <strong>Hertz (Hz)</strong> ou <strong>kilohertz (kHz, milliers de Hz)</strong>. Plus une trace est haute sur le sonogramme, plus le son est aigu.</p>

<table>
  <thead>
    <tr><th>Fréquence</th><th>Domaine</th><th>Exemples</th></tr>
  </thead>
  <tbody>
    <tr><td>20 Hz – 200 Hz</td><td>Très grave</td><td>Tonnerre, hululement de chouette grave, voix d'homme</td></tr>
    <tr><td>200 Hz – 1 kHz</td><td>Grave</td><td>Roucoulement de pigeon, “rôô-rôô” de corneille</td></tr>
    <tr><td>1 – 4 kHz</td><td>Médium</td><td>Voix humaine, chants flûtés de merle, rouge-gorge</td></tr>
    <tr><td>4 – 8 kHz</td><td>Aigu</td><td>Chants de mésanges, pinsons, hirondelles</td></tr>
    <tr><td>8 – 15 kHz</td><td>Très aigu</td><td>Cris stridents de martinet, certaines fauvettes</td></tr>
    <tr><td>15 – 20 kHz</td><td>Limite humaine</td><td>Certains chants de roitelets (audibles surtout par les jeunes)</td></tr>
  </tbody>
</table>

<div class="callout tip">
  <p class="callout-title">💡 Repère simple à retenir</p>
  <p>Une bonne partie des chants d'oiseaux européens se loge entre <strong>2 et 8 kHz</strong> — soit dans la zone où le bruit du trafic routier est <em>moins</em> présent (le trafic dominant les fréquences basses, sous 1 kHz). C'est pourquoi certaines espèces urbaines ont déplacé leur chant vers des fréquences plus aiguës pour rester audibles.</p>
</div>

<h2 id="sono-intensite">L'intensité du son : la couleur (ou le contraste)</h2>
<p>En plus du temps et de la fréquence, le sonogramme code une troisième dimension : <strong>l'intensité du son à cette fréquence à ce moment-là</strong>. Plus une trace est sombre (ou plus elle est colorée vivement), plus le son est puissant à ce moment précis.</p>

<div class="sono-frame">
  <svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="30" width="600" height="120" fill="#fafbf6" stroke="#e2e6d8"/>

    <!-- Échelle de gris dégradée -->
    <defs>
      <linearGradient id="gris" x1="0%" x2="100%">
        <stop offset="0%" stop-color="#fafbf6"/>
        <stop offset="100%" stop-color="#1a1525"/>
      </linearGradient>
    </defs>
    <rect x="50" y="30" width="600" height="40" fill="url(#gris)"/>

    <text x="50" y="22" font-size="11" fill="#1f2a6b">silence</text>
    <text x="350" y="22" font-size="11" font-weight="bold" fill="#1f2a6b" text-anchor="middle">intensité du son →</text>
    <text x="650" y="22" font-size="11" fill="#1f2a6b" text-anchor="end">son fort</text>

    <text x="50" y="90" font-size="11" fill="#5a6072">pas de son détecté</text>
    <text x="200" y="90" font-size="11" fill="#5a6072">son faible</text>
    <text x="380" y="90" font-size="11" fill="white">son net</text>
    <text x="560" y="90" font-size="11" fill="white">son puissant</text>

    <!-- Légende couleur Merlin -->
    <defs>
      <linearGradient id="merlinGrad" x1="0%" x2="100%">
        <stop offset="0%" stop-color="#0d1130"/>
        <stop offset="30%" stop-color="#3a4a8a"/>
        <stop offset="60%" stop-color="#94c11f"/>
        <stop offset="85%" stop-color="#f7d038"/>
        <stop offset="100%" stop-color="#e8862a"/>
      </linearGradient>
    </defs>
    <rect x="50" y="110" width="600" height="40" fill="url(#merlinGrad)"/>
    <text x="350" y="180" font-size="12" fill="#1f2a6b" text-anchor="middle">Échelle de couleur (style Merlin) — du sombre froid (silence) au chaud lumineux (son fort)</text>
  </svg>
  <p class="sono-caption">Deux conventions de représentation : <strong>échelle de gris</strong> (le standard scientifique) ou <strong>échelle de couleur</strong> (utilisée par Merlin et la plupart des apps modernes).</p>
</div>

<p>Dans la suite de cette page, les sonogrammes sont représentés en <strong>échelle de couleur</strong> — la même convention que celle utilisée par Merlin Bird ID, pour faciliter le transfert sur le terrain.</p>

<h2 id="sono-anatomie">Anatomie d'un chant : le vocabulaire</h2>
<p>Quelques termes utiles pour décrire ce qu'on voit sur un sonogramme :</p>

<div class="sono-frame">
  <svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg">
    <rect x="80" y="20" width="560" height="240" fill="#fafbf6" stroke="#e2e6d8"/>

    <!-- Axe Y -->
    <line x1="80" y1="20" x2="80" y2="260" stroke="#1f2a6b" stroke-width="1.5"/>
    <text x="65" y="30" font-size="10" fill="#1f2a6b" text-anchor="end">8 kHz</text>
    <text x="65" y="100" font-size="10" fill="#1f2a6b" text-anchor="end">6 kHz</text>
    <text x="65" y="170" font-size="10" fill="#1f2a6b" text-anchor="end">4 kHz</text>
    <text x="65" y="240" font-size="10" fill="#1f2a6b" text-anchor="end">2 kHz</text>
    <text x="65" y="265" font-size="10" fill="#1f2a6b" text-anchor="end">0</text>

    <!-- Axe X -->
    <line x1="80" y1="260" x2="640" y2="260" stroke="#1f2a6b" stroke-width="1.5"/>
    <text x="80" y="280" font-size="10" fill="#1f2a6b" text-anchor="middle">0 s</text>
    <text x="220" y="280" font-size="10" fill="#1f2a6b" text-anchor="middle">1 s</text>
    <text x="360" y="280" font-size="10" fill="#1f2a6b" text-anchor="middle">2 s</text>
    <text x="500" y="280" font-size="10" fill="#1f2a6b" text-anchor="middle">3 s</text>
    <text x="630" y="280" font-size="10" fill="#1f2a6b" text-anchor="middle">4 s</text>

    <!-- Note simple (point) -->
    <ellipse cx="130" cy="120" rx="6" ry="10" fill="#e8862a"/>
    <text x="130" y="140" font-size="11" fill="#1f2a6b" text-anchor="middle">A</text>

    <!-- Note descendante -->
    <path d="M 175 100 Q 185 130 200 140" stroke="#e8862a" stroke-width="6" fill="none" stroke-linecap="round"/>
    <text x="187" y="160" font-size="11" fill="#1f2a6b" text-anchor="middle">B</text>

    <!-- Note ascendante -->
    <path d="M 240 160 Q 250 130 265 110" stroke="#e8862a" stroke-width="6" fill="none" stroke-linecap="round"/>
    <text x="252" y="180" font-size="11" fill="#1f2a6b" text-anchor="middle">C</text>

    <!-- Trille (série rapide d'éléments) -->
    <ellipse cx="310" cy="170" rx="3" ry="8" fill="#e8862a"/>
    <ellipse cx="320" cy="165" rx="3" ry="8" fill="#e8862a"/>
    <ellipse cx="330" cy="170" rx="3" ry="8" fill="#e8862a"/>
    <ellipse cx="340" cy="165" rx="3" ry="8" fill="#e8862a"/>
    <ellipse cx="350" cy="170" rx="3" ry="8" fill="#e8862a"/>
    <ellipse cx="360" cy="165" rx="3" ry="8" fill="#e8862a"/>
    <ellipse cx="370" cy="170" rx="3" ry="8" fill="#e8862a"/>
    <ellipse cx="380" cy="165" rx="3" ry="8" fill="#e8862a"/>
    <text x="345" y="190" font-size="11" fill="#1f2a6b" text-anchor="middle">D</text>

    <!-- Strophe (groupe d'éléments) -->
    <ellipse cx="430" cy="100" rx="5" ry="12" fill="#e8862a"/>
    <path d="M 445 90 Q 455 120 470 110" stroke="#e8862a" stroke-width="5" fill="none" stroke-linecap="round"/>
    <ellipse cx="485" cy="120" rx="5" ry="10" fill="#e8862a"/>
    <path d="M 500 130 Q 510 100 525 95" stroke="#e8862a" stroke-width="5" fill="none" stroke-linecap="round"/>
    <text x="478" y="160" font-size="11" fill="#1f2a6b" text-anchor="middle">E</text>

    <!-- Harmoniques empilées -->
    <line x1="585" y1="200" x2="600" y2="200" stroke="#e8862a" stroke-width="3"/>
    <line x1="585" y1="160" x2="600" y2="160" stroke="#f7d038" stroke-width="3"/>
    <line x1="585" y1="120" x2="600" y2="120" stroke="#f7d038" stroke-width="2"/>
    <line x1="585" y1="80" x2="600" y2="80" stroke="#94c11f" stroke-width="2"/>
    <text x="593" y="220" font-size="11" fill="#1f2a6b" text-anchor="middle">F</text>
  </svg>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.4rem 1.2rem; margin-top: 0.75rem; font-size: 0.9rem;">
    <div><strong>A</strong> · <strong>Note pure</strong> (élément unique, une fréquence stable)</div>
    <div><strong>B</strong> · <strong>Note descendante</strong> (glissement vers le grave)</div>
    <div><strong>C</strong> · <strong>Note ascendante</strong> (glissement vers l'aigu)</div>
    <div><strong>D</strong> · <strong>Trille</strong> (série rapide d'éléments identiques)</div>
    <div><strong>E</strong> · <strong>Strophe</strong> (groupe d'éléments formant une “phrase”)</div>
    <div><strong>F</strong> · <strong>Harmoniques</strong> (lignes superposées : son riche)</div>
  </div>
</div>

<p>Avec ces six briques, vous pouvez décrire l'écrasante majorité des chants d'oiseaux européens. Le vocabulaire est volontairement simple : il s'agit moins de nommer scientifiquement que de <strong>voir et reconnaître</strong>.</p>

<h2 id="sono-patterns">Les grands motifs : ce que les chants ressemblent visuellement</h2>
<p>Avant même de chercher l'espèce, il est utile de reconnaître quelques “familles visuelles” qui reviennent souvent :</p>

<div class="legend-mini">
  <span><span class="swatch" style="background:#e8862a"></span> trace audio (intensité forte)</span>
  <span><span class="swatch" style="background:#f7d038"></span> intensité moyenne</span>
  <span><span class="swatch" style="background:#94c11f"></span> intensité faible / harmonique</span>
</div>

<div class="sono-grid two-col">

  <div class="sono-card">
    <h4>Pattern : “Sifflet descendant”</h4>
    <p class="latin">Note unique qui glisse du haut vers le bas</p>
    <svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="35" y="10" width="260" height="100" fill="#fafbf6" stroke="#e2e6d8"/>
      <line x1="35" y1="10" x2="35" y2="110" stroke="#1f2a6b" stroke-width="1"/>
      <line x1="35" y1="110" x2="295" y2="110" stroke="#1f2a6b" stroke-width="1"/>
      <text x="28" y="20" font-size="9" fill="#1f2a6b" text-anchor="end">8k</text>
      <text x="28" y="113" font-size="9" fill="#1f2a6b" text-anchor="end">0</text>
      <path d="M 80 25 Q 130 60 200 95" stroke="#e8862a" stroke-width="6" fill="none" stroke-linecap="round"/>
    </svg>
    <p class="pattern">Typique de la <strong>mésange bleue</strong> en fin de chant, ou des cris de <strong>buse variable</strong> (miaulement).</p>
  </div>

  <div class="sono-card">
    <h4>Pattern : “Strophe mélodique”</h4>
    <p class="latin">Série de notes flûtées modulées (montées + descentes)</p>
    <svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="35" y="10" width="260" height="100" fill="#fafbf6" stroke="#e2e6d8"/>
      <line x1="35" y1="10" x2="35" y2="110" stroke="#1f2a6b" stroke-width="1"/>
      <line x1="35" y1="110" x2="295" y2="110" stroke="#1f2a6b" stroke-width="1"/>
      <text x="28" y="20" font-size="9" fill="#1f2a6b" text-anchor="end">8k</text>
      <text x="28" y="113" font-size="9" fill="#1f2a6b" text-anchor="end">0</text>
      <path d="M 60 70 Q 75 40 95 55 Q 110 70 125 50" stroke="#e8862a" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M 145 65 Q 160 35 180 50 Q 195 65 215 45" stroke="#e8862a" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M 235 75 Q 250 45 270 60" stroke="#e8862a" stroke-width="5" fill="none" stroke-linecap="round"/>
    </svg>
    <p class="pattern">Typique du <strong>merle noir</strong>, du <strong>rouge-gorge</strong>, de la <strong>fauvette à tête noire</strong> — les “bons chanteurs”.</p>
  </div>

  <div class="sono-card">
    <h4>Pattern : “Trille rapide”</h4>
    <p class="latin">Série dense d'éléments identiques en succession</p>
    <svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="35" y="10" width="260" height="100" fill="#fafbf6" stroke="#e2e6d8"/>
      <line x1="35" y1="10" x2="35" y2="110" stroke="#1f2a6b" stroke-width="1"/>
      <line x1="35" y1="110" x2="295" y2="110" stroke="#1f2a6b" stroke-width="1"/>
      <text x="28" y="20" font-size="9" fill="#1f2a6b" text-anchor="end">8k</text>
      <text x="28" y="113" font-size="9" fill="#1f2a6b" text-anchor="end">0</text>
      <g fill="#e8862a">
        <ellipse cx="60" cy="55" rx="3" ry="10"/>
        <ellipse cx="72" cy="55" rx="3" ry="10"/>
        <ellipse cx="84" cy="55" rx="3" ry="10"/>
        <ellipse cx="96" cy="55" rx="3" ry="10"/>
        <ellipse cx="108" cy="55" rx="3" ry="10"/>
        <ellipse cx="120" cy="55" rx="3" ry="10"/>
        <ellipse cx="132" cy="55" rx="3" ry="10"/>
        <ellipse cx="144" cy="55" rx="3" ry="10"/>
        <ellipse cx="156" cy="55" rx="3" ry="10"/>
        <ellipse cx="168" cy="55" rx="3" ry="10"/>
        <ellipse cx="180" cy="55" rx="3" ry="10"/>
        <ellipse cx="192" cy="55" rx="3" ry="10"/>
        <ellipse cx="204" cy="55" rx="3" ry="10"/>
      </g>
    </svg>
    <p class="pattern">Typique du <strong>troglodyte mignon</strong>, du chant du <strong>pinson des arbres</strong> (le “rouleau” initial), ou du <strong>verdier</strong>.</p>
  </div>

  <div class="sono-card">
    <h4>Pattern : “Phrase répétée”</h4>
    <p class="latin">Même motif court répété 2-3 fois identiquement</p>
    <svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="35" y="10" width="260" height="100" fill="#fafbf6" stroke="#e2e6d8"/>
      <line x1="35" y1="10" x2="35" y2="110" stroke="#1f2a6b" stroke-width="1"/>
      <line x1="35" y1="110" x2="295" y2="110" stroke="#1f2a6b" stroke-width="1"/>
      <text x="28" y="20" font-size="9" fill="#1f2a6b" text-anchor="end">8k</text>
      <text x="28" y="113" font-size="9" fill="#1f2a6b" text-anchor="end">0</text>
      <!-- Motif 1 -->
      <ellipse cx="60" cy="40" rx="3" ry="9" fill="#e8862a"/>
      <ellipse cx="75" cy="60" rx="3" ry="9" fill="#e8862a"/>
      <!-- Motif 2 -->
      <ellipse cx="135" cy="40" rx="3" ry="9" fill="#e8862a"/>
      <ellipse cx="150" cy="60" rx="3" ry="9" fill="#e8862a"/>
      <!-- Motif 3 -->
      <ellipse cx="210" cy="40" rx="3" ry="9" fill="#e8862a"/>
      <ellipse cx="225" cy="60" rx="3" ry="9" fill="#e8862a"/>
    </svg>
    <p class="pattern">Typique de la <strong>mésange charbonnière</strong> (“ti-tu, ti-tu, ti-tu”) et de plusieurs grives.</p>
  </div>

  <div class="sono-card">
    <h4>Pattern : “Bloc grave bas”</h4>
    <p class="latin">Tache horizontale large dans les basses fréquences</p>
    <svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="35" y="10" width="260" height="100" fill="#fafbf6" stroke="#e2e6d8"/>
      <line x1="35" y1="10" x2="35" y2="110" stroke="#1f2a6b" stroke-width="1"/>
      <line x1="35" y1="110" x2="295" y2="110" stroke="#1f2a6b" stroke-width="1"/>
      <text x="28" y="20" font-size="9" fill="#1f2a6b" text-anchor="end">8k</text>
      <text x="28" y="113" font-size="9" fill="#1f2a6b" text-anchor="end">0</text>
      <ellipse cx="100" cy="90" rx="35" ry="8" fill="#e8862a"/>
      <ellipse cx="190" cy="92" rx="40" ry="6" fill="#e8862a"/>
    </svg>
    <p class="pattern">Typique des <strong>pigeons</strong> et <strong>tourterelles</strong> (roucoulement), du <strong>hibou</strong> ou de la <strong>chouette hulotte</strong>.</p>
  </div>

  <div class="sono-card">
    <h4>Pattern : “Cri rauque large bande”</h4>
    <p class="latin">Tache verticale couvrant beaucoup de fréquences en même temps</p>
    <svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="35" y="10" width="260" height="100" fill="#fafbf6" stroke="#e2e6d8"/>
      <line x1="35" y1="10" x2="35" y2="110" stroke="#1f2a6b" stroke-width="1"/>
      <line x1="35" y1="110" x2="295" y2="110" stroke="#1f2a6b" stroke-width="1"/>
      <text x="28" y="20" font-size="9" fill="#1f2a6b" text-anchor="end">8k</text>
      <text x="28" y="113" font-size="9" fill="#1f2a6b" text-anchor="end">0</text>
      <rect x="90" y="30" width="14" height="70" fill="#e8862a" opacity="0.85"/>
      <rect x="86" y="25" width="22" height="80" fill="#e8862a" opacity="0.3"/>
      <rect x="170" y="35" width="12" height="65" fill="#e8862a" opacity="0.85"/>
      <rect x="166" y="30" width="20" height="75" fill="#e8862a" opacity="0.3"/>
    </svg>
    <p class="pattern">Typique des <strong>corvidés</strong> (corneille, pie), du <strong>geai</strong>, ou des <strong>cris d'alarme</strong> de nombreuses espèces.</p>
  </div>

</div>

<h2 id="sono-especes">12 sonogrammes d'espèces commentés</h2>
<p>Voici 12 sonogrammes stylisés représentant le chant ou le cri caractéristique d'espèces communes. À mettre en parallèle avec les <a href="{{ '/module-oiseaux/ressources/' | relative_url }}#fiches">fiches espèces</a>.</p>

<div class="sono-grid two-col">

  <div class="sono-card">
    <h4>Merle noir</h4>
    <p class="latin">Turdus merula — chant territorial</p>
    <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="15" width="270" height="120" fill="#fafbf6" stroke="#e2e6d8"/>
      <line x1="40" y1="15" x2="40" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <line x1="40" y1="135" x2="310" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <text x="33" y="22" font-size="9" fill="#1f2a6b" text-anchor="end">8k</text>
      <text x="33" y="75" font-size="9" fill="#1f2a6b" text-anchor="end">4k</text>
      <text x="33" y="138" font-size="9" fill="#1f2a6b" text-anchor="end">0</text>
      <text x="170" y="152" font-size="9" fill="#1f2a6b" text-anchor="middle">2 secondes</text>
      <!-- Phrases flûtées modulées -->
      <path d="M 60 80 Q 75 50 95 65 Q 110 80 130 60" stroke="#e8862a" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M 150 75 Q 165 45 185 55" stroke="#e8862a" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M 205 70 Q 220 90 240 75 Q 255 60 275 65" stroke="#e8862a" stroke-width="5" fill="none" stroke-linecap="round"/>
    </svg>
    <p class="pattern">Notes flûtées dans la zone <strong>2-4 kHz</strong>, mélodieuses, avec des modulations douces. Souvent des “phrases” séparées par des silences.</p>
  </div>

  <div class="sono-card">
    <h4>Rouge-gorge familier</h4>
    <p class="latin">Erithacus rubecula — chant</p>
    <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="15" width="270" height="120" fill="#fafbf6" stroke="#e2e6d8"/>
      <line x1="40" y1="15" x2="40" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <line x1="40" y1="135" x2="310" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <text x="33" y="22" font-size="9" fill="#1f2a6b" text-anchor="end">8k</text>
      <text x="33" y="75" font-size="9" fill="#1f2a6b" text-anchor="end">4k</text>
      <text x="33" y="138" font-size="9" fill="#1f2a6b" text-anchor="end">0</text>
      <!-- Notes cristallines, trilles aigus -->
      <ellipse cx="60" cy="45" rx="2.5" ry="6" fill="#e8862a"/>
      <ellipse cx="70" cy="42" rx="2.5" ry="6" fill="#e8862a"/>
      <ellipse cx="80" cy="50" rx="2.5" ry="6" fill="#e8862a"/>
      <path d="M 100 38 Q 115 55 130 42" stroke="#e8862a" stroke-width="4" fill="none" stroke-linecap="round"/>
      <ellipse cx="150" cy="40" rx="2" ry="5" fill="#e8862a"/>
      <ellipse cx="158" cy="35" rx="2" ry="5" fill="#e8862a"/>
      <ellipse cx="166" cy="40" rx="2" ry="5" fill="#e8862a"/>
      <ellipse cx="174" cy="35" rx="2" ry="5" fill="#e8862a"/>
      <path d="M 200 45 Q 215 30 230 50" stroke="#e8862a" stroke-width="4" fill="none" stroke-linecap="round"/>
      <ellipse cx="250" cy="50" rx="2" ry="4" fill="#e8862a"/>
      <ellipse cx="258" cy="45" rx="2" ry="4" fill="#e8862a"/>
      <ellipse cx="266" cy="50" rx="2" ry="4" fill="#e8862a"/>
    </svg>
    <p class="pattern">Notes <strong>très aiguës (4-7 kHz)</strong>, cristallines, mélancoliques. Trilles courts et perlés.</p>
  </div>

  <div class="sono-card">
    <h4>Mésange charbonnière</h4>
    <p class="latin">Parus major — “ti-tu, ti-tu, ti-tu”</p>
    <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="15" width="270" height="120" fill="#fafbf6" stroke="#e2e6d8"/>
      <line x1="40" y1="15" x2="40" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <line x1="40" y1="135" x2="310" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <text x="33" y="22" font-size="9" fill="#1f2a6b" text-anchor="end">8k</text>
      <text x="33" y="75" font-size="9" fill="#1f2a6b" text-anchor="end">4k</text>
      <text x="33" y="138" font-size="9" fill="#1f2a6b" text-anchor="end">0</text>
      <!-- ti-tu ti-tu ti-tu : alternance 2 notes -->
      <ellipse cx="65" cy="45" rx="3" ry="9" fill="#e8862a"/>
      <ellipse cx="85" cy="60" rx="3" ry="9" fill="#e8862a"/>
      <ellipse cx="125" cy="45" rx="3" ry="9" fill="#e8862a"/>
      <ellipse cx="145" cy="60" rx="3" ry="9" fill="#e8862a"/>
      <ellipse cx="185" cy="45" rx="3" ry="9" fill="#e8862a"/>
      <ellipse cx="205" cy="60" rx="3" ry="9" fill="#e8862a"/>
      <ellipse cx="245" cy="45" rx="3" ry="9" fill="#e8862a"/>
      <ellipse cx="265" cy="60" rx="3" ry="9" fill="#e8862a"/>
    </svg>
    <p class="pattern">Alternance régulière de <strong>2 notes</strong> (l'une aiguë “ti”, l'autre plus grave “tu”), répétée 3-5 fois. Très reconnaissable.</p>
  </div>

  <div class="sono-card">
    <h4>Pinson des arbres</h4>
    <p class="latin">Fringilla coelebs — chant complet</p>
    <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="15" width="270" height="120" fill="#fafbf6" stroke="#e2e6d8"/>
      <line x1="40" y1="15" x2="40" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <line x1="40" y1="135" x2="310" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <text x="33" y="22" font-size="9" fill="#1f2a6b" text-anchor="end">8k</text>
      <text x="33" y="75" font-size="9" fill="#1f2a6b" text-anchor="end">4k</text>
      <text x="33" y="138" font-size="9" fill="#1f2a6b" text-anchor="end">0</text>
      <!-- Trille descendante puis chute -->
      <g fill="#e8862a">
        <ellipse cx="60" cy="45" rx="2.5" ry="6"/>
        <ellipse cx="72" cy="50" rx="2.5" ry="6"/>
        <ellipse cx="84" cy="55" rx="2.5" ry="6"/>
        <ellipse cx="96" cy="60" rx="2.5" ry="6"/>
        <ellipse cx="108" cy="65" rx="2.5" ry="6"/>
        <ellipse cx="120" cy="70" rx="2.5" ry="6"/>
        <ellipse cx="132" cy="75" rx="2.5" ry="6"/>
        <ellipse cx="144" cy="80" rx="2.5" ry="6"/>
        <ellipse cx="156" cy="80" rx="3" ry="7"/>
        <ellipse cx="170" cy="80" rx="3" ry="7"/>
        <ellipse cx="184" cy="80" rx="3" ry="7"/>
      </g>
      <!-- chute finale (cascade) -->
      <path d="M 205 75 Q 220 100 240 110 L 250 115" stroke="#e8862a" stroke-width="4" fill="none" stroke-linecap="round"/>
    </svg>
    <p class="pattern">Structure très typique : <strong>trille descendante</strong> rapide puis <strong>“cascade”</strong> finale qui chute vers le grave. Comme une phrase qui finit en plongeon.</p>
  </div>

  <div class="sono-card">
    <h4>Troglodyte mignon</h4>
    <p class="latin">Troglodytes troglodytes — chant</p>
    <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="15" width="270" height="120" fill="#fafbf6" stroke="#e2e6d8"/>
      <line x1="40" y1="15" x2="40" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <line x1="40" y1="135" x2="310" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <text x="33" y="22" font-size="9" fill="#1f2a6b" text-anchor="end">8k</text>
      <text x="33" y="75" font-size="9" fill="#1f2a6b" text-anchor="end">4k</text>
      <text x="33" y="138" font-size="9" fill="#1f2a6b" text-anchor="end">0</text>
      <!-- Cascade dense de trilles et notes -->
      <g fill="#e8862a">
        <ellipse cx="55" cy="50" rx="2" ry="6"/>
        <ellipse cx="63" cy="55" rx="2" ry="6"/>
        <ellipse cx="71" cy="50" rx="2" ry="6"/>
        <ellipse cx="79" cy="55" rx="2" ry="6"/>
        <ellipse cx="87" cy="50" rx="2" ry="6"/>
        <ellipse cx="95" cy="55" rx="2" ry="6"/>
        <ellipse cx="103" cy="50" rx="2" ry="6"/>
        <ellipse cx="111" cy="55" rx="2" ry="6"/>
      </g>
      <path d="M 125 60 Q 140 80 155 70" stroke="#e8862a" stroke-width="4" fill="none" stroke-linecap="round"/>
      <g fill="#e8862a">
        <ellipse cx="170" cy="45" rx="2" ry="6"/>
        <ellipse cx="178" cy="50" rx="2" ry="6"/>
        <ellipse cx="186" cy="45" rx="2" ry="6"/>
        <ellipse cx="194" cy="50" rx="2" ry="6"/>
        <ellipse cx="202" cy="45" rx="2" ry="6"/>
        <ellipse cx="210" cy="50" rx="2" ry="6"/>
        <ellipse cx="218" cy="45" rx="2" ry="6"/>
      </g>
      <path d="M 230 55 Q 245 30 260 50 Q 275 65 290 55" stroke="#e8862a" stroke-width="4" fill="none" stroke-linecap="round"/>
    </svg>
    <p class="pattern">Chant <strong>extrêmement dense</strong>, qui semble durer longtemps pour si petit oiseau. Beaucoup d'éléments rapprochés, trilles et modulations rapides.</p>
  </div>

  <div class="sono-card">
    <h4>Pigeon ramier</h4>
    <p class="latin">Columba palumbus — roucoulement</p>
    <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="15" width="270" height="120" fill="#fafbf6" stroke="#e2e6d8"/>
      <line x1="40" y1="15" x2="40" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <line x1="40" y1="135" x2="310" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <text x="33" y="22" font-size="9" fill="#1f2a6b" text-anchor="end">8k</text>
      <text x="33" y="75" font-size="9" fill="#1f2a6b" text-anchor="end">4k</text>
      <text x="33" y="138" font-size="9" fill="#1f2a6b" text-anchor="end">0</text>
      <!-- 5 notes graves rondes -->
      <ellipse cx="65" cy="115" rx="14" ry="6" fill="#e8862a"/>
      <ellipse cx="100" cy="110" rx="18" ry="7" fill="#e8862a"/>
      <ellipse cx="100" cy="100" rx="14" ry="4" fill="#f7d038" opacity="0.6"/>
      <ellipse cx="145" cy="115" rx="14" ry="6" fill="#e8862a"/>
      <ellipse cx="190" cy="115" rx="14" ry="6" fill="#e8862a"/>
      <ellipse cx="235" cy="115" rx="14" ry="6" fill="#e8862a"/>
    </svg>
    <p class="pattern">Notes <strong>très basses (sous 1 kHz)</strong>, espacées, formant un rythme régulier de 5 notes (“hou-houhou-hou-hou”). La 2ᵉ note est la plus puissante.</p>
  </div>

  <div class="sono-card">
    <h4>Hirondelle rustique</h4>
    <p class="latin">Hirundo rustica — gazouillis</p>
    <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="15" width="270" height="120" fill="#fafbf6" stroke="#e2e6d8"/>
      <line x1="40" y1="15" x2="40" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <line x1="40" y1="135" x2="310" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <text x="33" y="22" font-size="9" fill="#1f2a6b" text-anchor="end">8k</text>
      <text x="33" y="75" font-size="9" fill="#1f2a6b" text-anchor="end">4k</text>
      <text x="33" y="138" font-size="9" fill="#1f2a6b" text-anchor="end">0</text>
      <!-- Gazouillis dense aigu -->
      <g stroke="#e8862a" stroke-width="3" fill="none" stroke-linecap="round">
        <path d="M 55 35 Q 65 50 75 30"/>
        <path d="M 80 50 Q 90 30 100 45"/>
        <path d="M 105 35 Q 115 55 125 40"/>
        <path d="M 130 60 L 145 35"/>
        <path d="M 150 40 Q 160 60 175 45"/>
        <path d="M 180 35 Q 190 50 200 30"/>
        <path d="M 205 50 L 220 65"/>
        <path d="M 225 50 Q 235 30 245 55"/>
        <path d="M 250 40 L 265 70"/>
        <path d="M 270 60 Q 280 40 290 55"/>
      </g>
    </svg>
    <p class="pattern">Gazouillis <strong>très rapide et désordonné</strong> entre 3 et 7 kHz, sans structure répétitive claire. Comme un “ruisseau” sonore.</p>
  </div>

  <div class="sono-card">
    <h4>Martinet noir</h4>
    <p class="latin">Apus apus — cris en groupe</p>
    <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="15" width="270" height="120" fill="#fafbf6" stroke="#e2e6d8"/>
      <line x1="40" y1="15" x2="40" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <line x1="40" y1="135" x2="310" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <text x="33" y="22" font-size="9" fill="#1f2a6b" text-anchor="end">8k</text>
      <text x="33" y="75" font-size="9" fill="#1f2a6b" text-anchor="end">4k</text>
      <text x="33" y="138" font-size="9" fill="#1f2a6b" text-anchor="end">0</text>
      <!-- Sifflets stridents aigus, descendants -->
      <path d="M 60 30 Q 80 45 95 70" stroke="#e8862a" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M 120 35 Q 140 50 155 75" stroke="#e8862a" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M 180 30 Q 200 45 215 70" stroke="#e8862a" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M 240 35 Q 260 50 275 75" stroke="#e8862a" stroke-width="5" fill="none" stroke-linecap="round"/>
    </svg>
    <p class="pattern">Sifflets <strong>aigus et descendants</strong> (5-8 kHz), répétés. Souvent en chœur quand les groupes filent dans le ciel (“sriii-sriii”).</p>
  </div>

  <div class="sono-card">
    <h4>Étourneau sansonnet</h4>
    <p class="latin">Sturnus vulgaris — chant mixte avec imitations</p>
    <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="15" width="270" height="120" fill="#fafbf6" stroke="#e2e6d8"/>
      <line x1="40" y1="15" x2="40" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <line x1="40" y1="135" x2="310" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <text x="33" y="22" font-size="9" fill="#1f2a6b" text-anchor="end">8k</text>
      <text x="33" y="75" font-size="9" fill="#1f2a6b" text-anchor="end">4k</text>
      <text x="33" y="138" font-size="9" fill="#1f2a6b" text-anchor="end">0</text>
      <!-- Chaos : sifflets, trilles, traits descendants -->
      <path d="M 55 30 L 80 65" stroke="#e8862a" stroke-width="4" fill="none" stroke-linecap="round"/>
      <g fill="#e8862a">
        <ellipse cx="95" cy="50" rx="2" ry="6"/>
        <ellipse cx="103" cy="45" rx="2" ry="6"/>
        <ellipse cx="111" cy="50" rx="2" ry="6"/>
      </g>
      <ellipse cx="130" cy="100" rx="10" ry="4" fill="#e8862a"/>
      <path d="M 155 25 Q 170 50 180 80" stroke="#e8862a" stroke-width="3" fill="none" stroke-linecap="round"/>
      <g fill="#e8862a">
        <ellipse cx="200" cy="60" rx="2.5" ry="7"/>
        <ellipse cx="210" cy="65" rx="2.5" ry="7"/>
        <ellipse cx="220" cy="60" rx="2.5" ry="7"/>
      </g>
      <path d="M 240 40 L 265 95" stroke="#e8862a" stroke-width="4" fill="none" stroke-linecap="round"/>
      <ellipse cx="290" cy="75" rx="6" ry="5" fill="#e8862a"/>
    </svg>
    <p class="pattern">Mélange chaotique : <strong>sifflets, trilles, claquements, imitations</strong>. Pas de structure répétée : c'est ça l'étourneau, un imitateur qui mixe tout.</p>
  </div>

  <div class="sono-card">
    <h4>Corneille noire</h4>
    <p class="latin">Corvus corone — cri d'appel</p>
    <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="15" width="270" height="120" fill="#fafbf6" stroke="#e2e6d8"/>
      <line x1="40" y1="15" x2="40" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <line x1="40" y1="135" x2="310" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <text x="33" y="22" font-size="9" fill="#1f2a6b" text-anchor="end">8k</text>
      <text x="33" y="75" font-size="9" fill="#1f2a6b" text-anchor="end">4k</text>
      <text x="33" y="138" font-size="9" fill="#1f2a6b" text-anchor="end">0</text>
      <!-- Cris larges, peu structurés, graves -->
      <rect x="75" y="60" width="20" height="50" fill="#e8862a" opacity="0.85"/>
      <rect x="71" y="55" width="28" height="60" fill="#e8862a" opacity="0.3"/>
      <rect x="135" y="65" width="22" height="45" fill="#e8862a" opacity="0.85"/>
      <rect x="131" y="60" width="30" height="55" fill="#e8862a" opacity="0.3"/>
      <rect x="200" y="60" width="22" height="50" fill="#e8862a" opacity="0.85"/>
      <rect x="196" y="55" width="30" height="60" fill="#e8862a" opacity="0.3"/>
    </svg>
    <p class="pattern">Cris en <strong>tranches verticales larges</strong> (énergie répartie sur toutes les fréquences), surtout entre 1 et 4 kHz. Rauque, brut.</p>
  </div>

  <div class="sono-card">
    <h4>Pic épeiche (tambourinage)</h4>
    <p class="latin">Dendrocopos major — coups très rapides</p>
    <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="15" width="270" height="120" fill="#fafbf6" stroke="#e2e6d8"/>
      <line x1="40" y1="15" x2="40" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <line x1="40" y1="135" x2="310" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <text x="33" y="22" font-size="9" fill="#1f2a6b" text-anchor="end">8k</text>
      <text x="33" y="75" font-size="9" fill="#1f2a6b" text-anchor="end">4k</text>
      <text x="33" y="138" font-size="9" fill="#1f2a6b" text-anchor="end">0</text>
      <!-- Série de traits verticaux très denses (claquements) -->
      <g fill="#e8862a">
        <rect x="80" y="50" width="3" height="65"/>
        <rect x="86" y="48" width="3" height="65"/>
        <rect x="92" y="50" width="3" height="65"/>
        <rect x="98" y="48" width="3" height="65"/>
        <rect x="104" y="50" width="3" height="65"/>
        <rect x="110" y="48" width="3" height="65"/>
        <rect x="116" y="50" width="3" height="65"/>
        <rect x="122" y="48" width="3" height="65"/>
        <rect x="128" y="50" width="3" height="65"/>
        <rect x="134" y="48" width="3" height="65"/>
        <rect x="140" y="50" width="3" height="65"/>
        <rect x="146" y="48" width="3" height="65"/>
        <rect x="152" y="50" width="3" height="65"/>
        <rect x="158" y="48" width="3" height="65"/>
        <rect x="164" y="50" width="3" height="65"/>
        <rect x="170" y="48" width="3" height="65"/>
        <rect x="176" y="50" width="3" height="65"/>
        <rect x="182" y="48" width="3" height="65"/>
        <rect x="188" y="50" width="3" height="65"/>
        <rect x="194" y="48" width="3" height="65"/>
      </g>
    </svg>
    <p class="pattern">Série <strong>extrêmement rapide</strong> de claquements (15-20 coups en une seconde !), sur large bande de fréquences. Pas un chant : un <strong>tambourinage</strong>.</p>
  </div>

  <div class="sono-card">
    <h4>Chouette hulotte (mâle)</h4>
    <p class="latin">Strix aluco — hululement</p>
    <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="15" width="270" height="120" fill="#fafbf6" stroke="#e2e6d8"/>
      <line x1="40" y1="15" x2="40" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <line x1="40" y1="135" x2="310" y2="135" stroke="#1f2a6b" stroke-width="1"/>
      <text x="33" y="22" font-size="9" fill="#1f2a6b" text-anchor="end">8k</text>
      <text x="33" y="75" font-size="9" fill="#1f2a6b" text-anchor="end">4k</text>
      <text x="33" y="138" font-size="9" fill="#1f2a6b" text-anchor="end">0</text>
      <!-- Hou-hou-houououou : très grave -->
      <ellipse cx="70" cy="120" rx="14" ry="4" fill="#e8862a"/>
      <ellipse cx="115" cy="120" rx="10" ry="3" fill="#e8862a"/>
      <ellipse cx="135" cy="120" rx="10" ry="3" fill="#e8862a"/>
      <ellipse cx="200" cy="118" rx="50" ry="5" fill="#e8862a"/>
      <ellipse cx="200" cy="105" rx="40" ry="3" fill="#f7d038" opacity="0.6"/>
    </svg>
    <p class="pattern">Notes <strong>très basses (sous 1 kHz)</strong>, longues et tenues, à peine modulées. Une note isolée + un trille court + une longue note tenue (= les fameuses 3 parties du “hou-hou-houououou”).</p>
  </div>

</div>

<h2 id="sono-merlin">Comment Merlin utilise le sonogramme en temps réel</h2>
<p>Quand vous lancez Merlin Bird ID en mode Sound ID, voici ce qui se passe :</p>

<ol>
  <li>L'app <strong>enregistre</strong> en continu via le micro du smartphone (ou la parabole, si elle est branchée)</li>
  <li>Elle <strong>calcule le sonogramme</strong> en temps réel (techniquement, par <em>transformée de Fourier</em>)</li>
  <li>Elle <strong>compare le sonogramme</strong> à une base de chants de référence — pas en ré-écoutant le son, mais en analysant la <em>forme visuelle</em> des sonogrammes</li>
  <li>Elle utilise un <strong>réseau de neurones</strong> entraîné sur des millions de chants pour proposer une identification probable</li>
</ol>

<div class="callout science">
  <p class="callout-title">🔬 Une IA qui regarde, pas qui écoute</p>
  <p>C'est une subtilité importante : Merlin <strong>convertit le son en image, puis fait de la reconnaissance d'image</strong>. La même technologie qui sert à reconnaître un chat sur une photo sert à reconnaître un merle sur un sonogramme. C'est ce qui explique pourquoi un son tronqué, un bruit de fond fort, ou un chant inhabituel peuvent dérouter l'app : visuellement, le sonogramme ne ressemble plus assez aux exemples appris.</p>
</div>

<p>Pendant l'atelier, prenez 30 secondes pour montrer à un groupe ce qui défile sur l'écran de Merlin : <strong>chaque tache colorée correspond à un son réel</strong> dans l'environnement. Quand l'app détecte une espèce, demandez aux participants : <em>“laquelle des taches a déclenché l'identification ?”</em> — c'est très formateur.</p>

<h2 id="sono-exercice">Exercice pédagogique : “devine l'espèce”</h2>
<p>Voici un exercice de 10 minutes à faire en classe, après ou avant l'atelier :</p>

<div class="callout tip">
  <p class="callout-title">🎯 Atelier de lecture de sonogrammes</p>
  <ol>
    <li><strong>Préparation</strong> : imprimer 6 à 8 des sonogrammes ci-dessus en cachant les noms des espèces (1 par sous-groupe).</li>
    <li><strong>Questions guides</strong> à projeter ou distribuer :
      <ul>
        <li>À quelle hauteur (aiguë ou grave) se situe le chant ?</li>
        <li>Combien de “phrases” ou de motifs distincts voyez-vous ?</li>
        <li>Y a-t-il une structure répétée ?</li>
        <li>Le chant est-il dense ou clairsemé ?</li>
        <li>Quelle “famille de motif” reconnaissez-vous ? (sifflet, trille, strophe…)</li>
      </ul>
    </li>
    <li><strong>Mise en commun</strong> : chaque groupe présente son sonogramme et hypothétise sur l'espèce. Le reste de la classe valide ou propose autre chose.</li>
    <li><strong>Révélation</strong> : on découvre l'espèce, on écoute le chant (via Merlin ou xeno-canto), on compare avec ce que les groupes ont déduit visuellement.</li>
  </ol>
</div>

<p>Cet exercice fait passer les participants d'une posture <em>d'auditeur passif</em> à une posture <em>d'analyste visuel</em>, ce qui renforce considérablement l'attention au son réel quand ils retournent sur le terrain.</p>

<h2 id="sono-outils">Pour aller plus loin : enregistrer et analyser ses propres sonogrammes</h2>

<p>Si vous souhaitez approfondir et générer des sonogrammes à partir de vos propres enregistrements (en classe, prolongement scientifique) :</p>

<table>
  <thead>
    <tr><th>Outil</th><th>Plateforme</th><th>Niveau</th><th>Pour quoi</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Merlin Bird ID</strong></td>
      <td>iOS / Android</td>
      <td>Débutant</td>
      <td>Affiche le sonogramme en direct pendant l'identification</td>
    </tr>
    <tr>
      <td><strong>FizziQ</strong></td>
      <td>iOS / Android / Web</td>
      <td>Débutant</td>
      <td>Affiche un sonogramme simple dans la fonction “Acoustique”</td>
    </tr>
    <tr>
      <td><strong>Spectrogram (Pro)</strong></td>
      <td>iOS / Android</td>
      <td>Intermédiaire</td>
      <td>Sonogrammes temps réel haute résolution, échelles ajustables</td>
    </tr>
    <tr>
      <td><strong>Audacity</strong></td>
      <td>Windows / Mac / Linux</td>
      <td>Intermédiaire</td>
      <td>Logiciel libre, ouvre un fichier audio et affiche son sonogramme (menu “Affichage du spectre”)</td>
    </tr>
    <tr>
      <td><strong>Sonic Visualiser</strong></td>
      <td>Windows / Mac / Linux</td>
      <td>Avancé</td>
      <td>Logiciel scientifique gratuit, conçu pour l'analyse acoustique fine</td>
    </tr>
    <tr>
      <td><strong>Raven Lite</strong></td>
      <td>Windows / Mac</td>
      <td>Avancé</td>
      <td>Logiciel du Cornell Lab (référence en bioacoustique), version gratuite pour usage pédagogique</td>
    </tr>
    <tr>
      <td><strong>xeno-canto.org</strong></td>
      <td>Web (navigateur)</td>
      <td>Tout public</td>
      <td>Base de données mondiale de chants : chaque enregistrement est affiché avec son sonogramme</td>
    </tr>
  </tbody>
</table>

<div class="callout info">
  <p class="callout-title">ℹ️ Prolongement scientifique en classe</p>
  <p>Avec <strong>Audacity</strong> (gratuit), un enregistrement de 30 secondes effectué pendant l'atelier peut être ré-ouvert en classe, agrandi, analysé. C'est un excellent pont entre l'expérience sensible (vivre le son) et l'analyse scientifique (mesurer le son). Idéal pour un projet pluridisciplinaire SVT / Physique / Numérique.</p>
</div>

<p style="margin-top: 2.5rem; text-align: center;">
  <a href="{{ '/module-oiseaux/ressources/' | relative_url }}#fiches" class="btn">Voir les fiches à imprimer →</a>
</p>



<div class="callout info" markdown="1">
**À propos de ces liens** — Ces ressources sont proposées à titre indicatif ; Cap Nature n'a aucun lien commercial avec ces sites. N'hésitez pas à explorer aussi les structures d'éducation à l'environnement de votre territoire, souvent les mieux placées pour un accompagnement local.
</div>

<p style="margin-top: 2.5rem; text-align: center;">
  <a href="{{ '/module-oiseaux/ressources/' | relative_url }}" class="btn">Ressources & fiches à imprimer →</a>
</p>
