---
layout: page
title: Ressources externes
lead: "Une sélection de sites, applications, associations et lectures pour prolonger l'expérience des ateliers — et continuer à écouter le vivant."
toc:
  - id: applis
    label: Applications
  - id: identification
    label: Identifier les oiseaux
  - id: sciences
    label: Sciences participatives
  - id: associations
    label: Associations & réseaux
  - id: sons
    label: Écouter la nature
  - id: lectures
    label: Lectures
  - id: boutiques
    label: Boutiques & matériel

applis:
  - name: Merlin Bird ID
    tag: Gratuit
    url: https://merlin.allaboutbirds.org/
    desc: "L'application du Cornell Lab of Ornithology qui identifie les oiseaux par leur chant en temps réel. Fonctionne hors-ligne après téléchargement du pack Europe occidentale."
  - name: FizziQ
    tag: Gratuit
    url: https://www.fizziq.org/
    desc: "Application de la fondation La main à la pâte. Transforme le smartphone en sonomètre et autres instruments de mesure. Sans publicité ni collecte de données."
  - name: BirdNET
    tag: Gratuit
    url: https://www.birdnet.cornell.edu/
    desc: "Une alternative à Merlin, également développée par Cornell. Permet aussi d'analyser des fichiers audio enregistrés."

identification:
  - name: Oiseaux.net
    url: https://www.oiseaux.net/
    desc: "Encyclopédie en ligne de référence sur les oiseaux, avec fiches descriptives, photos et enregistrements de chants pour chaque espèce."
  - name: Xeno-canto
    url: https://www.xeno-canto.org/
    desc: "Banque collaborative mondiale de chants d'oiseaux. Chaque enregistrement est accompagné de son sonogramme — idéal pour s'entraîner à l'écoute."
  - name: Guides d'identification LPO
    url: https://www.lpo.fr/decouvrir-la-nature/apprendre-a-identifier
    desc: "Fiches et affiches téléchargeables de la Ligue pour la Protection des Oiseaux, notamment sur les oiseaux des jardins."

sciences:
  - name: Faune-France
    url: https://www.faune-france.org/
    desc: "Plateforme nationale de saisie d'observations naturalistes. Vos observations contribuent à la connaissance de la biodiversité."
  - name: Vigie-Nature École
    url: https://www.vigienature-ecole.fr/
    desc: "Programme de sciences participatives du Muséum national d'Histoire naturelle, conçu pour les enseignants et leurs classes."
  - name: Oiseaux des jardins
    url: https://oiseauxdesjardins.fr/
    desc: "Observatoire participatif LPO + Muséum, parfait pour un suivi simple et régulier à la mangeoire ou dans la cour."

associations:
  - name: LPO — Ligue pour la Protection des Oiseaux
    url: https://www.lpo.fr/
    desc: "Réseau national avec des antennes locales proposant des animations, des formations et des ressources pédagogiques."
  - name: Bretagne Vivante
    url: https://www.bretagne-vivante.org/
    desc: "Association naturaliste régionale proposant des animations scolaires et des sorties de découverte."
  - name: Réseau des CPIE
    url: https://www.cpie.fr/
    desc: "Centres Permanents d'Initiatives pour l'Environnement, présents partout en France pour l'éducation à l'environnement."
  - name: Réseau École et Nature
    url: https://reseauecoleetnature.org/
    desc: "Plateforme nationale d'éducation à l'environnement, riche en outils et retours d'expérience pédagogiques."

sons:
  - name: Sonothèque du Muséum
    url: https://sonotheque.mnhn.fr/
    desc: "Collection sonore du Muséum national d'Histoire naturelle : enregistrements naturalistes de référence."
  - name: Boris Jollivet, audionaturaliste
    url: https://www.borisjollivet.com/
    desc: "Le travail d'un preneur de sons de la nature : une belle porte d'entrée vers l'écoute fine des paysages sonores."

lectures:
  - name: "R. Murray Schafer — Le paysage sonore"
    url: https://www.wildproject.org/livres/le-paysage-sonore
    desc: "Le livre fondateur de l'écologie sonore, qui a forgé la notion de « paysage sonore »."
  - name: "Bernie Krause — Le grand orchestre animal"
    url: https://www.actes-sud.fr/
    desc: "Un classique accessible sur la bioacoustique et la richesse sonore du vivant."
  - name: "Jérôme Sueur — Histoire naturelle du silence"
    url: https://www.actes-sud.fr/
    desc: "Une réflexion sur le silence et le bruit par un acousticien du Muséum."

boutiques:
  - name: Bird Collective
    url: https://www.birdcollective.com/
    desc: "Boutique engagée autour des oiseaux (guides, accessoires, vêtements), qui reverse une part de ses ventes à la conservation. Une belle source d'inspiration visuelle."
  - name: LPO Boutique
    url: https://www.lpo-boutique.com/
    desc: "Jumelles, guides, mangeoires, nichoirs et matériel d'observation, avec des bénéfices au profit de la protection des oiseaux."
  - name: Telinga
    url: https://www.telinga.com/
    desc: "Fabricant de microphones paraboliques pour l'enregistrement de la nature (modèles utilisés dans l'atelier)."
---

<h2 id="applis">Applications utiles</h2>
{% include res-list.html items=page.applis %}

<h2 id="identification">Identifier les oiseaux</h2>
{% include res-list.html items=page.identification %}

<h2 id="sciences">Sciences participatives</h2>
{% include res-list.html items=page.sciences %}

<h2 id="associations">Associations & réseaux</h2>
{% include res-list.html items=page.associations %}

<h2 id="sons">Écouter la nature</h2>
{% include res-list.html items=page.sons %}

<h2 id="lectures">Lectures pour aller plus loin</h2>
{% include res-list.html items=page.lectures %}

<h2 id="boutiques">Boutiques & matériel</h2>
{% include res-list.html items=page.boutiques %}

<div class="callout info" markdown="1">
**À propos de ces liens** — Ces ressources sont proposées à titre indicatif ; Cap Nature n'a aucun lien commercial avec ces sites. N'hésitez pas à explorer aussi les structures d'éducation à l'environnement de votre territoire, souvent les mieux placées pour un accompagnement local.
</div>

<p style="margin-top: 2.5rem; text-align: center;">
  <a href="{{ '/' | relative_url }}" class="btn">← Retour à l'accueil</a>
</p>
