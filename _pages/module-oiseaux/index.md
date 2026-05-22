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

<main class="content">
  
  <p class="page-lead">Cet atelier d'écoacoustique participative invite les participant·es à mener une enquête sensible et instrumentée sur le paysage sonore et les oiseaux présents dans l'environnement.</p>

  {% include photo-band.html photos=page.photos %}

  <section class="content">
    <h2>Les outils de l'enquête</h2>
    
    <h3>Le sonomètre portatif Fizziq</h3>
    <p>Fizziq est une application qui transforme le smartphone en un véritable laboratoire de poche. Dans le cadre de cette enquête, elle permet notamment de <strong>mesurer le niveau sonore en temps réel (décibels)</strong>, de géolocaliser son parcours grâce au GPS, ou d'enregistrer et annoter des données.</p>

    <h3>Merlin Bird ID pour la reconnaissance des chants</h3>
    <p>Développée par le Cornell Lab of Ornithology, cette application écoute l'environnement et propose en temps réel le nom des espèces d'oiseaux qui chantent. <strong>À préparer avant l'atelier</strong> : installer l'application, puis télécharger le pack gratuit « Europe occidentale » (≈ 200 Mo) pour un fonctionnement 100% hors-ligne. (D'autres alternatives comme BirdNET ou BirdWeather peuvent être explorées en complément).</p>

    <h3>Optionnel : Utiliser Merlin avec une parabole directionnelle</h3>
    <p>Une parabole directionnelle (comme <strong>BirdMic</strong>) est un dispositif qui concentre et amplifie les ondes acoustiques venant d'une direction précise.</p>
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
  </section>

  <section class="section-full-bleed" style="background-color: #F7F4E9; border-bottom: 0.2px solid #e2e6d8; padding: 0rem 0; margin: 0; overflow: hidden;">
    <div class="container">
      <div class="page-content" style="padding-top: 0; padding-bottom: 0;">
        
        <h2>Éléments de mise en contexte</h2>
        <p>Pour introduire la séance ou nourrir vos préparations, voici une sélection de ressources, podcasts et fiches scientifiques de référence :</p>

        <div class="resource-links" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-top: 1.5rem;">
          <a class="resource-link" href="{{ '/module-oiseaux/fiche1-soundscape/' | relative_url }}">
            <span class="resource-link-label">Fiche Technique 1</span>
            <span class="resource-link-title">Le Paysage Sonore et ses enjeux</span>
          </a>

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

  <section class="content">
    <h2>Déroulement de l'atelier</h2>

    <h3>1. Avant l'exploration : Organisation des équipes</h3>
    <p>Le bon fonctionnement de l'enquête repose sur une répartition claire des tâches au sein des équipes :</p>
    <ul>
      <li><strong>Taille des équipes :</strong> Formez des sous-groupes de 3 à 5 personnes.</li>
      <li><strong>Distribution des rôles :</strong> Attribuez un rôle précis à chaque participant (les rôles tourneront au cours de la sortie) :
        <ul>
          <li>Le <em>porteur de parabole</em> guide la visée vers les sources sonores.</li>
          <li>Le <em>capteur Fizziq</em> prend en charge la lecture et le suivi des décibels.</li>
          <li>Le <em>scribe</em> consigne l'ensemble des données relevées sur la fiche d'observation papier.</li>
          <li>Le <em>superviseur visuel</em> tente de repérer l'oiseau à l'œil ou aux jumelles.</li>
        </ul>
      </li>
      <li><strong>Mise en route des applications :</strong> Demandez aux participants d'ouvrir simultanément leurs smartphones pour lancer l'interface Merlin (onglet Sound ID) et activer le sonomètre Fizziq.</li>
    </ul>

    <h3>2. L'exploration sur le terrain</h3>
    <p><strong>Mise en attention :</strong> Proposez une écoute silencieuse à oreilles nues pendant quelques minutes. Cet exercice introduit naturellement les notions de biophonie, géophonie et anthrophonie.</p>
    <p><strong>Enquête instrumentée :</strong> Chaque groupe explore la zone délimitée. À chaque station d'écoute, la consigne est simple : s'arrêter en silence, mesurer les décibels avec Fizziq, lancer Merlin Sound ID pour identifier les espèces, et consigner l'ensemble sur la fiche d'observation.</p>

    <h3 style="margin-top: 2.5rem;">Ressources Pédagogiques Cap Nature</h3>
      <div class="resource-links" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-top: 1rem;">
        <a class="resource-link" href="{{ '/module-oiseaux/fiche2-chant/' | relative_url }}">
          <span class="resource-link-label">Fiche Scientifique 2</span>
          <span class="resource-link-title">Quiz sur les Oiseaux</span>
        </a>

        <a class="resource-link" href="{{ '/module-oiseaux/fiche3-sonogramme/' | relative_url }}">
          <span class="resource-link-label">Fiche Scientifique 3</span>
          <span class="resource-link-title">Lire un spectrogramme</span>
        </a>
      </div>

      <h3>3. Retours réflexifs</h3> 

        <figure class="page-banner" style="margin-bottom: 0;">
          <img src="{{ '/assets/img/atelier-retours.jpg' | relative_url }}"
               alt="Ressenti des participants après l'exploration"
               class="page-banner-img">
          <figcaption class="page-banner-credit">© Marie-Léa Pouliquen</figcaption>
        </figure>

  </section>

  <section class="section-full-bleed" style="background-color: #F7F4E9; border-bottom: 0.2px solid #e2e6d8; padding: 0rem 0; margin: 0; overflow: hidden;">
    <div class="container">
      <div class="page-content" style="padding-top: 0; padding-bottom: 0;">

        <h2>Pistes d'activités pédagogiques</h2>
        
        <h3>Activité principale : Réaliser une soundmap</h3>
        <ol>
          <li><strong>Définir la zone d'étude :</strong> Divisez le terrain d'exploration en plusieurs secteurs distincts pour y établir des points d'écoute fixes.</li>
          <li><strong>Prendre les mesures :</strong> À chaque station, restez immobile : utilisez Fizziq pour capter le niveau sonore (dB), lancez Merlin pour répertorier les oiseaux présents, et notez l'heure ainsi que la météo.</li>
          <li><strong>Analyser :</strong> Prenez le temps d'étudier le profil de chaque point (dominance des sons, niveau moyen) et consignez votre ressenti qualitatif.</li>
          <li><strong>Cartographier :</strong> Pour conclure, positionnez vos relevés sur une carte géographique en attribuant des icônes thématiques à chaque type de son rencontré.</li>
        </ol>

        <p>Pour d'autres idées de manipulations de terrain, consultez la fiche du Réseau IDée : <a href="https://www.reseau-idee.be/fr/symbioses/lecoute-de-la-nature-7-activites-pour-tendre-loreille" target="_blank" rel="noopener">L'écoute de la nature : 7 activités pour tendre l'oreille</a>.</p>

      </div>
    </div>
  </section>

</main>
