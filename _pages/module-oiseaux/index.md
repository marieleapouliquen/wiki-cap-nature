---
layout: default
permalink: /module-oiseaux/
title: "À l'écoute des oiseaux et du paysage sonore"
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
---

{% include photo-band.html photos=page.photos %}

<main class="content">
  
  <section class="content" style="padding-bottom: 0;">
    <h1>{{ page.title }}</h1>
    <p class="page-lead">Cet atelier d'écoacoustique participative invite les participant·es à mener une enquête sensible et instrumentée sur le paysage sonore et les oiseaux présents dans l'environnement.</p>

    <h2>Qu'est-ce qu'un paysage sonore ?</h2>
    <p>Le paysage sonore (soundscape) is l'ensemble des sons présents dans un lieu à un moment donné. Comme un paysage visuel composé de couleurs et de formes, il rassemble des sons de différentes natures, classés en <strong>trois grandes catégories</strong> :</p>

    <div class="concept-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
      <div class="concept-card" style="background: #ffffff; padding: 1rem; border-radius: 4px; border: 1px solid #e2e6d8;">
        <strong>Biophonie</strong>
        <p style="font-size: 0.9rem; margin-top: 0.5rem; margin-bottom: 0;">Les manifestations sonores des êtres vivants non-humains (chants d'oiseaux, coassements d'amphibiens, stridulations d'insectes, mammifères).</p>
      </div>
      <div class="concept-card" style="background: #ffffff; padding: 1rem; border-radius: 4px; border: 1px solid #e2e6d8;">
        <strong>Géophonie</strong>
        <p style="font-size: 0.9rem; margin-top: 0.5rem; margin-bottom: 0;">Les sons de la nature non vivante, liés aux éléments naturels et à la météo (souffle du vent, clapotis de la pluie, grondement des rivières).</p>
      </div>
      <div class="concept-card" style="background: #ffffff; padding: 1rem; border-radius: 4px; border: 1px solid #e2e6d8;">
        <strong>Anthrophonie</strong>
        <p style="font-size: 0.9rem; margin-top: 0.5rem; margin-bottom: 0;">L'ensemble des bruits produits par l'activité humaine et le développement des infrastructures (paroles, moteurs, machines, circulation).</p>
      </div>
    </div>
  </section>

  <section class="content">
    <h2>Pourquoi étudier les paysages sonores ?</h2>

    <h3>Le paysage sonore comme indicateur écologique</h3>
    <p>L'analyse des indices acoustiques permet de mesurer l'état de santé d'un écosystème de manière non invasive. Les chercheurs étudient ces environnements pour quantifier la biodiversité, suivre l'évolution de l'activité animale ou évaluer l'impact négatif de la pollution sonore sur la faune sauvage. Le bruit généré par les infrastructures humaines masque les signaux de communication essentiels des animaux. Pour survivre, de nombreuses espèces doivent adapter l'amplitude, la durée ou la fréquence de leurs vocalisations, un effort qui perturbe leur équilibre énergétique et leurs chances de reproduction.</p>

    <h3>Les enjeux de la pollution sonore</h3>
    <p>Le bruit généré par les infrastructures humaines (transports, industries) masque les signaux de communication essentiels des animaux. Pour survivre en milieu anthropisé, de nombreuses espèces doivent adapter l'amplitude, la durée ou la fréquence de leurs vocalisations, un effort qui perturbe leur équilibre énergétique et leurs chances de reproduction. Le bioacousticien Bernie Krause a notamment documenté la disparition progressive de certaines niches acoustiques naturelles sous la pression humaine.</p>

    <div class="callout warning">
      <div class="callout-title">Comprendre les décibels</div>
      <p>Le décibel (dB) sert à quantifier le niveau de pression acoustique. L'échelle étant logarithmique, une petite variation en dB traduit un changement d'énergie considérable : <strong>+10 dB correspond à un son 10 fois plus puissant</strong> en énergie, bien que perçu environ 2 fois plus fort par notre oreille.</p>

      <div class="db-chart">
        <div class="db-row">
          <span class="db-label">Seuil d'audition (0 dB)</span>
          <div class="db-track"><div class="db-fill db-ok" style="width: 15%">0 dB</div></div>
        </div>
        <div class="db-row">
          <span class="db-label">Chuchotement</span>
          <div class="db-track"><div class="db-fill db-ok" style="width: 30%">25 dB</div></div>
        </div>
        <div class="db-row">
          <span class="db-label">Conversation normale</span>
          <div class="db-track"><div class="db-fill db-ok" style="width: 50%">45 dB</div></div>
        </div>
        <div class="db-row">
          <span class="db-label">Rue animée, aspirateur</span>
          <div class="db-track"><div class="db-fill db-warning" style="width: 70%">70 dB</div></div>
        </div>
        <div class="db-row">
          <span class="db-label">Tondeuse, moto</span>
          <div class="db-track"><div class="db-fill db-warning" style="width: 85%">90 dB</div></div>
        </div>
        <div class="db-row">
          <span class="db-label">Concert rock</span>
          <div class="db-track"><div class="db-fill db-danger" style="width: 95%">110 dB</div></div>
        </div>
        <div class="db-row">
          <span class="db-label">Seuil de douleur</span>
          <div class="db-track"><div class="db-fill db-danger" style="width: 100%">125 dB</div></div>
        </div>
      </div>
    </div>

    <p>Pour approfondir la thématique de l'impact du bruit humain sur les écosystèmes terrestres et marins, vous pouvez consulter les ressources du <a href="http://www.bruit.fr/" target="_blank" rel="noopener">Centre d'information sur le Bruit (CIDB)</a> ou explorer les projets de cartographie de la pollution sonore menés par <a href="https://www.biotope.fr/" target="_blank" rel="noopener">Biotope Écoacoustique</a>.</p>

    <div class="callout info">
      <div class="callout-title">Enjeu de la pollution sonore dans les parcs nationaux - Exemple des États-Unis</div>
      <p>Pour introduire la séance ou approfondir la thématique en classe, vous pouvez visionner ce reportage de contexte : <a href="https://www.youtube.com/watch?v=9X5JfGI0hr0" target="_blank" rel="noopener">Soundscapes - Yosemite sur YouTube</a>.</p>
    </div>

    <h3>Les bienfaits des sons de la nature pour la santé humaine</h3>
    <p>Au-delà de l'intérêt écologique, l'écoute de la nature exerce une action thérapeutique avérée sur notre biologie. Une vaste synthèse scientifique menée par la chercheuse <strong>Rachel T. Buxton</strong> (Colorado State University) et son équipe en 2021 a démontré que l'exposition aux sons naturels (chants d'oiseaux, bruits d'eau) engendre des bénéfices de santé considérables : baisse significative du stress, diminution du taux de cortisol, réduction de la fréquence cardiaque et amélioration nette des performances cognitives.</p>
    <p>L'étude souligne ainsi que la préservation des paysages sonores sauvages dans les parcs nationaux relève autant de la protection de la biodiversité que d'un enjeu majeur de santé publique.</p>

    <hr>
    <p>Retrouvez également toutes les <a href="#ressources">ressources et liens utiles pour aller plus loin</a> en bas de cette page.</p>
  </section>

  <section class="section-full-bleed" style="background-color: #fafbf6; border-top: 0.2px solid #e2e6d8; border-bottom: 0.2px solid #e2e6d8; padding: 0rem 0; margin: 0; overflow: hidden;">
    <div class="container">
      <div class="page-content" style="padding-top: 0; padding-bottom: 0;">
        
        <h2>Les objectifs pédagogiques de l'atelier</h2> 
        <p>Cet atelier a pour objectifs de permettre aux participants de :</p>
        <ul>
          <li>Se familiariser avec le nom des espèces d'oiseaux présents dans l'environnement.</li>
          <li>Adopter une démarche d'investigation sur le milieu (ex : où peut-on entendre les oiseaux ? À quelle heure ? Dans quel environnement sonore ?).</li>
          <li>Mesurer le niveau de bruit ambiant.</li>
          <li>Conscientiser la place des bruits humains dans l'environnement.</li>
          <li>Se questionner sur l'impact du bruit sur la faune.</li>
        </ul>

      </div>
    </div> 
  </section>

  <section class="content">
    <h2>Les outils de terrain</h2>
    
    <h3>Le sonomètre portatif de Fizziq</h3>
    <p><a href="https://www.fizziq.org/" target="_blank" rel="noopener">Fizziq</a> est une application qui transforme le smartphone en un véritable laboratoire de mesure. Dans le cadre de cet atelier, nous l'utilisons pour mesurer le niveau sonore en temps réel (décibels). Elle peut aussi servir à géolocaliser son parcours grâce au GPS.</p>
    
    <h3>Une application pour la reconnaissance des chants</h3>
    <p>Il existe beaucoup d'applications permettant d'identifier les oiseaux par le chant. Dans le cadre de cet atelier, nous avons utilisé Merlin Bird ID, une application gratuite développée par le Cornell Lab of Ornithology pour identifier les oiseaux à partir de leur chant ou de leur apparence. <strong>Comment ça marche ?</strong> Lorsque la fonction "Sound ID" est activée, l’application capte les vocalisations des oiseaux enregistrées via le micro du téléphone. L'algorithme de traitement convertit alors le signal en image (le spectrogramme), puis applique une reconnaissance d'image grâce à un réseau de neurones entraîné sur des millions de fichiers audio de référence.</p>

    <p>Vous pouvez bien sûr utiliser une autre application si vous le souhaitez (BirdNET, BirdWeather, etc.) pour compléter l'approche.</p>

    <p>Pour en savoir plus sur la lecture d'un spectrogramme ou sur l'algorithme de ce type d'outils, consultez les ressources ci-dessous :</p>

    <div class="resource-links" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-top: 1rem; margin-bottom: 2rem;">
      <a class="resource-link" href="{{ '/module-oiseaux/fiche3-sonogramme/' | relative_url }}">
        <span class="resource-link-label">Fiche Scientifique 3</span>
        <span class="resource-link-title">Lire un spectrogramme</span>
      </a>
      <a class="resource-link" href="https://birdnet.cornell.edu/" target="_blank" rel="noopener">
        <span class="resource-link-label">Plateforme Scientifique</span>
        <span class="resource-link-title">Algorithme de traitement BirdNET</span>
      </a>
    </div>

    <div class="text-image-split">
      <div class="tis-text">
        <h3 style="margin-top: 0;">Optionnel : Une parabole directionnelle</h3>
        <p>Pour les ateliers, nous avons décidé d'ajouter la parabole directionnelle <a href="https://www.birdmic.com/" target="_blank" rel="noopener">BirdMic</a> au dispositif instrumenté.</p>

        <p>Une parabole directionnelle est un dispositif qui concentre et amplifie les ondes acoustiques venant d'une direction précise. La parabole BirdMic permet en plus de brancher un casque et de percevoir les sons de façon amplifiée (ce qui crée souvent un effet "whaou" chez les participants). Ce dispositif est très utilisé par les preneurs de sons (les audio-naturalistes) pour repérer plus facilement les chants d'oiseaux mais aussi pour améliorer la qualité de leur enregistrement.</p>
        
        <h4>Comment ça marche ?</h4>
        <ul>
          <li><strong>Le principe du miroir :</strong> La grande coupole en forme de parabole agit comme un réflecteur ou miroir acoustique. Elle renvoie toutes les ondes incidentes de son axe vers un point focal central : le micro placé au foyer de la parabole.</li>
          <li><strong>Résultat :</strong> Les signaux provenant de la cible visée sont fortement amplifiés tandis que les bruits parasites latéraux et arrières sont atténués. Branchée au smartphone, elle offre à l'application Merlin un signal moins bruité qui optimise l'identification en direct.</li>
        </ul>

        <h4>Comment utiliser la parabole sur le terrain ?</h4>
        <ol>
          <li>Connecter le micro directionnel au port ou à l'adaptateur du smartphone.</li>
          <li>Lancer l'application Merlin et activer l'onglet Sound ID.</li>
          <li>Diriger la parabole en direction des sons qui vous intriguent.</li>
        </ol>
      </div>

      <figure class="tis-image">
        <img src="{{ '/assets/img/atelier-caps.jpg' | relative_url }}" alt="Participant·es captant les sons à l'aide d'une parabole directionnelle">
        <figcaption>© Marie-Léa Pouliquen</figcaption>
      </figure>
    </div>

    <h3>Matériel complémentaire</h3>
    <p>Prévoyez des fiches d'observation imprimées pour chaque groupe ainsi que des crayons pour la prise de notes sur le terrain.</p>

    <div class="course-downloads">
      <a href="{{ '/assets/pdf/fiche-observation.pdf' | relative_url }}" class="download-card" target="_blank" rel="noopener">
        <span class="download-num">Fiche d'activité</span>
        <span class="download-title">Télécharger la fiche d'observation terrain (PDF)</span>
      </a>
    </div>
  </section>

  <section class="content">
    <h2>Avant l'atelier</h2>
    <ul>
      <li>Préparer une brève mise en contexte (quelques ressources sont mises à disposition en bas de la page).</li>
      <li>Imprimer les fiches d'observation (1 par groupe d'exploration suffit).</li>
      <li>Si vous utilisez des paraboles : chargez les batteries au moins 1h avant l'exploration.</li>
      <li>Pensez à prévenir les participants que leurs téléphones devront être bien chargés le jour de l'atelier.</li>
      <li>Choisissez un site pour l'exploration — si vous êtes en pleine ville, privilégiez un lieu avec des arbres et des bosquets.</li>
    </ul>
        
    <h2>Déroulement de l'atelier</h2>

    <h3>1. En classe (env. 30 minutes)</h3>
    <ul>
      <li>Mise en contexte théorique et présentation des notions de soundscape.</li>
      <li><strong>Constitution des groupes d'exploration :</strong> Formez des sous-groupes (3 à 5 personnes idéalement).</li>
      <li><strong>Préparation du matériel :</strong> Demandez aux participants d'installer les applications (Fizziq et Merlin) sur leur téléphone (minimum 2 téléphones par équipe). Si vous utilisez les paraboles, distribuez-en une par groupe.</li>
      <li>Distribution des fiches d'observation papier.</li>
    </ul>

    <h3>2. L'exploration sur le terrain (30-45 min)</h3>
    <p><strong>Mise en attention :</strong> Proposez une écoute silencieuse à oreilles nues pendant quelques minutes. Cet exercice introduit naturellement les notions de biophonie, géophonie et anthrophonie.</p>
    <p><strong>Enquête instrumentée :</strong> Chaque groupe explore la zone en autonomie. La consigne est simple : faire silence, mesurer les décibels avec Fizziq, lancer Merlin Sound ID pour identifier les espèces, et consigner l'ensemble sur la fiche d'observation.</p>

    <h3>Quelques pistes d'activités sur le terrain</h3>

    <h4>Réaliser une soundmap collective</h4>
    <ol>
      <li><strong>Définir la zone d'étude :</strong> Divisez le terrain d'exploration en plusieurs secteurs distincts pour y établir des points d'écoute fixes.</li>
      <li><strong>Prendre les mesures :</strong> À chaque station, restez immobile : utilisez Fizziq pour capter le niveau sonore (dB), lancez Merlin pour répertorier les oiseaux présents, et notez l'heure ainsi que la météo.</li>
      <li><strong>Analyser :</strong> Prenez le temps d'étudier le profil de chaque point (dominance des bruits, niveau moyen) et consignez votre ressenti qualitatif.</li>
      <li><strong>Cartographier :</strong> Pour conclure, positionnez vos relevés sur une carte géographique en attribuant des icônes thématiques à chaque type de son rencontré.</li>
    </ol>

    <h4 style="margin-top: 2.5rem;">Idées supplémentaires</h4>
    <p style="margin-bottom: 0;">Pour d'autres idées d'activités sur le terrain, vous pouvez consulter la fiche du Réseau IDée : <a href="https://www.reseau-idee.be/fr/symbioses/lecoute-de-la-nature-7-activites-pour-tendre-loreille" target="_blank" rel="noopener">L'écoute de la nature : 7 activités pour tendre l'oreille</a>.</p>

    <h3 style="margin-top: 2.5rem;">3. Retours réflexifs</h3>
    <figure class="page-banner" style="margin-top: 1.5rem;">
      <img src="{{ '/assets/img/atelier-retours.jpg' | relative_url }}" alt="Ressenti des participants après l'exploration" class="page-banner-img">
      <figcaption class="page-banner-credit">© Marie-Léa Pouliquen</figcaption>
    </figure>
  </section>

  <section id="ressources" class="section-full-bleed" style="background-color: #F7F4E9; border-top: 0.2px solid #e2e6d8; border-bottom: 0.2px solid #e2e6d8; padding: 0rem 0; margin: 0; overflow: hidden;">
    <div class="container">
      <div class="page-content" style="padding-top: 0; padding-bottom: 0;">

        <h2>Ressources pour aller plus loin</h2>
        <p>Pour approfondir la thématique et introduire la séance, voici une sélection de supports et d'émissions scientifiques :</p>

        <div class="resource-links" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
          <a class="resource-link" href="https://www.reseau-idee.be/fr/symbioses/les-paysages-sonores-ont-beaucoup-nous-dire" target="_blank" rel="noopener">
            <span class="resource-link-label">Article · Réseau IDée</span>
            <span class="resource-link-title">Les paysages sonores ont beaucoup à nous dire</span>
          </a>

          <a class="resource-link" href="https://www.naturo-phonia.com/" target="_blank" rel="noopener">
            <span class="resource-link-label">Audio Naturaliste</span>
            <span class="resource-link-title">Naturophonia — Site de Fernand Deroussen</span>
          </a>

          <a class="resource-link" href="https://www.radiofrance.fr/franceinter/podcasts/la-terre-au-carre/la-terre-au-carre-du-vendredi-28-novembre-2025-4700890" target="_blank" rel="noopener">
            <span class="resource-link-label">Émission · France Inter</span>
            <span class="resource-link-title">La Terre au Carré — Écoacoustique</span>
          </a>

          <a class="resource-link" href="https://www.radiofrance.fr/franceculture/podcasts/lsd-la-serie-documentaire/ecologie-la-nature-sur-ecoute-4781708" target="_blank" rel="noopener">
            <span class="resource-link-label">Série Documentaire · France Culture</span>
            <span class="resource-link-title">Radio France - Écologie : la nature sur écoute</span>
          </a>
        </div>

      </div>
    </div> 
  </section>

</main>
