---
layout: page
permalink: /module-oiseaux/
title: "À l'écoute des oiseaux et du paysage sonore"
sidebar_title: Module · Écoacoustique

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
---

{% include photo-band.html photos=page.photos %}

<main class="content">

  <p class="page-lead">
    Ce module d'écoacoustique invite les participant·es à mener une enquête sensible et instrumentée sur l'environnement. En utilisant des applications et capteurs numériques accessibles, ils apprennent à écouter le paysage sonore et à identifier la biodiversité locale.
  </p>

  <h2>Contexte & Concepts</h2>

  <h3>Qu'est-ce que le paysage sonore ?</h3>
  <p>Le <strong>paysage sonore</strong> est l'ensemble des signaux acoustiques présents dans un lieu à un moment donné. C'est une signature unique, mouvante, que les chercheurs en bioacoustique décomposent en trois grandes familles de sources sonores :</p>

  {% include concepts.html items=page.soundscape %}

  <h3>Fiches pédagogiques pour aller plus loin</h3>
  <p>Retrouvez les fiches d'activités et guides d'identification complets à utiliser sur le terrain :</p>
  
  <div class="resource-links">
    <a class="resource-link" href="{{ '/module-oiseaux/ressources/fiche1-soundscape/' | relative_url }}">
      <span class="resource-link-label">Fiche Activité 1</span>
      <span class="resource-link-title">Le Paysage Sonore & Soundmap</span>
      <span class="resource-link-desc">Découvrir la biophonie, utiliser Fizziq pour mesurer les décibels et réaliser une carte sonore.</span>
    </a>
    <a class="resource-link" href="{{ '/module-oiseaux/ressources/fiche2-merlin/' | relative_url }}">
      <span class="resource-link-label">Fiche Technique 2</span>
      <span class="resource-link-title">Identifier avec Merlin Bird ID</span>
      <span class="resource-link-desc">Guide pas-à-pas pour configurer l'application et réaliser les deux défis d'écoute sur le terrain.</span>
    </a>
    <a class="resource-link" href="{{ '/module-oiseaux/ressources/fiche3-oiseaux/' | relative_url }}">
      <span class="resource-link-label">Fiche Scientifique 3</span>
      <span class="resource-link-title">Le Langage des Oiseaux</span>
      <span class="resource-link-desc">Comprendre les fonctions du chant, l'apprentissage culturel et tester ses acquis avec le grand Quiz.</span>
    </a>
  </div>

  <h2>Démarche et objectifs de l'atelier</h2>
  <p>L'atelier s'appuie sur une démarche scientifique active. Équipés de smartphones et de microphones portatifs, les sous-groupes partent sur le terrain avec trois objectifs&nbsp;: prêter <strong>attention</strong> au vivant proche, <strong>expérimenter</strong> par des outils accessibles, et <strong>réfléchir</strong> à notre cohabitation avec les autres espèces.</p>


  <h2>Les outils de l'enquête</h2>

  <h3>Un sonomètre portatif : Fizziq</h3>
  <p>Fizziq est une application gratuite développée par la fondation <em>La main à la pâte</em>, garantie sans collecte de données. Elle transforme le smartphone en laboratoire de poche et en sonomètre&nbsp;: elle permet de lire le niveau en décibels (dB) pour évaluer et comparer le niveau sonore d'une zone à l'autre.</p>

  <h3>Reconnaissance des chants : Merlin Bird ID</h3>
  <p>Développée par le <em>Cornell Lab of Ornithology</em>, cette application écoute l'environnement et propose en temps réel le nom des espèces d'oiseaux qui chantent. <strong>À préparer avant l'atelier</strong> : installer l'application, puis télécharger le pack gratuit « Europe occidentale » (≈ 200 Mo) pour un fonctionnement 100% hors-ligne.</p>

  <h3>Optionnel : La parabole directionnelle BirdMic</h3>
  <p>La parabole BirdMic se branche directement sur la prise audio du smartphone. En agissant comme un miroir acoustique, elle concentre et amplifie les ondes sonores venant de la direction visée, isolant le chant de l'oiseau des bruits de fond urbains. L'écoute en direct produit un réel effet « waouh » auprès des jeunes.</p>


  <h2>Déroulement de l'atelier</h2>

  <h3>1. Repérage du site (En amont)</h3>
  <p>Le choix du terrain est déterminant. Le milieu n'a pas besoin d'être écologiquement remarquable : l'effet de surprise est souvent plus fort dans un parc ou un espace apparemment banal. Veillez simplement à ce qu'il offre une sécurité totale (hors voirie), une diversité de micro-habitats (haies, arbres, lisières) et un accès relativement préservé des grands axes routiers.</p>

  <div class="callout tip">
    <div class="callout-title">Repérage acoustique</div>
    <p>Faites une visite préalable à la même heure que l'atelier prévu. Notez combien d'espèces vous entendez en 5 minutes, évaluez le niveau en dB et repérez les sources de bruit anthropique perturbatrices (chantiers, axes de circulation).</p>
  </div>

  <h3>2. Matériel à préparer</h3>
  <ul>
    <li>Smartphones chargés avec les applications installées et testées.</li>
    <li>Paraboles directionnelles chargées et câbles de liaison adaptés (Jack, USB-C ou Lightning).</li>
    <li>Fiches d'observation imprimées et supports rigides (cartonnettes A4 avec crayons).</li>
    <li>Plan du site avec délimitation de la zone de sécurité.</li>
  </ul>

  <h3>3. Introduction et constitution des groupes (15 min)</h3>
  <p>Présentez les capteurs aux participants de manière simple. Constituez des sous-groupes de <strong>3 à 5 personnes</strong> (4 étant la taille idéale) et attribuez les rôles au sein de chaque équipe&nbsp: un porteur de parabole, un gestionnaire Fizziq, un scribe pour consigner les données et un observateur visuel. Les rôles tourneront au cours de la session.</p>

  <h3>4. L'exploration sur le terrain (30-45 min)</h3>
  <p><strong>Exercice préalable (Mise en attention) :</strong> Proposez une écoute silencieuse à oreilles nues pendant 30 secondes. À votre signal, demandez aux participants de lister les bruits perçus. Cet exercice introduit naturellement les notions de biophonie, géophonie et anthrophonie.</p>
  <p><strong>Enquête instrumentée :</strong> Chaque groupe explore la zone délimitée. À chaque station d'écoute, la consigne est simple : s'arrêter en silence, mesurer les décibels avec Fizziq, lancer Merlin Sound ID pendant 1 à 2 minutes pour identifier les espèces, et consigner l'ensemble (lieu, dB, espèces, ressenti subjectif) sur la fiche d'observation.</p>

  <h3>5. Restitution et débriefing (15 min)</h3>
  <p>Réunissez les groupes pour mutualiser les résultats. Recensez la liste totale des espèces identifiées sur le site et comparez les mesures en décibels : où se trouvaient les zones de calme ? Quels facteurs expliquent les variations constatées ?</p>

  <div class="callout info">
    <div class="callout-title">Valoriser l'expérience subjective</div>
    <p>L'atelier vaut autant pour les données collectées que pour les émotions suscitées. Si un groupe se retrouve dans une zone très bruyante sans aucune identification d'oiseau, profitez-en pour ouvrir un débat sur l'impact écologique de la pollution sonore urbaine.</p>
  </div>


  <h2>Guide : Apprendre à lire un spectrogramme</h2>
  <p>Quand l'application Merlin identifie un oiseau, elle affiche un <strong>sonogramme</strong> (ou spectrogramme) qui défile en temps réel. Comprendre cette image enrichit considérablement l'analyse pédagogique en transformant une onde sonore invisible en repère visuel.</p>

  <div class="sono-frame">
    <svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg">
      <rect x="80" y="40" width="560" height="280" fill="#fafbf6" stroke="#e2e6d8"/>
      <line x1="80" y1="40" x2="640" y2="40" stroke="#e2e6d8" stroke-dasharray="3,3"/>
      <line x1="80" y1="110" x2="640" y2="110" stroke="#e2e6d8" stroke-dasharray="3,3"/>
      <line x1="80" y1="180" x2="640" y2="180" stroke="#e2e6d8" stroke-dasharray="3,3"/>
      <line x1="80" y1="250" x2="640" y2="250" stroke="#e2e6d8" stroke-dasharray="3,3"/>
      <line x1="220" y1="40" x2="220" y2="320" stroke="#e2e6d8" stroke-dasharray="3,3"/>
      <line x1="360" y1="40" x2="360" y2="320" stroke="#e2e6d8" stroke-dasharray="3,3"/>
      <line x1="500" y1="40" x2="500" y2="320" stroke="#e2e6d8" stroke-dasharray="3,3"/>
      <line x1="80" y1="40" x2="80" y2="320" stroke="#1f2a6b" stroke-width="2"/>
      <polygon points="80,30 75,42 85,42" fill="#1f2a6b"/>
      <text x="65" y="45" font-size="12" fill="#1f2a6b" text-anchor="end">8 kHz</text>
      <text x="65" y="115" font-size="12" fill="#1f2a6b" text-anchor="end">6 kHz</text>
      <text x="65" y="185" font-size="12" fill="#1f2a6b" text-anchor="end">4 kHz</text>
      <text x="65" y="255" font-size="12" fill="#1f2a6b" text-anchor="end">2 kHz</text>
      <text x="65" y="325" font-size="12" fill="#1f2a6b" text-anchor="end">0</text>
      <text x="30" y="180" font-size="14" font-weight="bold" fill="#1f2a6b" text-anchor="middle" transform="rotate(-90 30 180)">Fréquence</text>
      <line x1="80" y1="320" x2="640" y2="320" stroke="#1f2a6b" stroke-width="2"/>
      <polygon points="650,320 638,315 638,325" fill="#1f2a6b"/>
      <text x="80" y="340" font-size="12" fill="#1f2a6b" text-anchor="middle">0 s</text>
      <text x="220" y="340" font-size="12" fill="#1f2a6b" text-anchor="middle">1 s</text>
      <text x="360" y="340" font-size="12" fill="#1f2a6b" text-anchor="middle">2 s</text>
      <text x="500" y="340" font-size="12" fill="#1f2a6b" text-anchor="middle">3 s</text>
      <text x="630" y="340" font-size="12" fill="#1f2a6b" text-anchor="middle">4 s</text>
      <text x="360" y="365" font-size="14" font-weight="bold" fill="#1f2a6b" text-anchor="middle">Temps</text>
    </svg>
    <p class="sono-caption">Le spectrogramme se lit de gauche à droite pour le <strong>temps</strong>, et de bas en haut pour la <strong>fréquence</strong> (du son le plus grave au plus aigu).</p>
  </div>

  <h3>Comment l'application interprète les signaux ?</h3>
  <p>L'intelligence artificielle de Merlin n'écoute pas directement le fichier audio de la même façon qu'une oreille humaine. <strong>Elle convertit le signal en image (le spectrogramme), puis effectue de la reconnaissance d'image</strong> grâce à un réseau de neurones entraîné sur des millions d'exemples de référence. C'est pourquoi un bruit mécanique intense ou un vent violent, en barrant visuellement le spectrogramme, peuvent perturber le diagnostic.</p>

  <div class="sono-grid">
    <div class="sono-card">
      <h4>Le motif mélodique modulé</h4>
      <span class="latin">Notes flûtées fluctuantes</span>
      <p class="pattern">Tracés onduleux et nets situés entre 2 et 5 kHz. Profil caractéristique des grands oiseaux chanteurs des parcs et forêts comme le <strong>Merle noir</strong> ou la <strong>Fauvette à tête noire</strong>.</p>
    </div>
    <div class="sono-card">
      <h4>Le motif rythmique répété</h4>
      <span class="latin">Séquences brèves identiques</span>
      <p class="pattern">Série de petits segments verticaux ou points réguliers répétés deux à trois fois à l'identique. Profil caractéristique de la <strong>Mésange charbonnière</strong> (le célèbre "ti-tu, ti-tu").</p>
    </div>
  </div>

  <em>Les Ateliers Cap Nature</em>

</main>
