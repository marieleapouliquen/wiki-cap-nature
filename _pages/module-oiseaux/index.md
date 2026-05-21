---
layout: page
permalink: /module-oiseaux/
title: "Module 1 · Écoacoustique"
lead: "Initiation à l'écoacoustique : (re)découvrir les oiseaux par le chant, à l'aide d'une application de reconnaissance et de capteurs sonores."
sidebar_title: Module 1 · Oiseaux
toc:
  - id: en-bref
    label: L'atelier en bref
  - id: paysage-sonore
    label: Le paysage sonore
  - id: bienfaits
    label: Les bienfaits du son naturel
  - id: pollution-sonore
    label: La pollution sonore
sidebar_links_title: Dans ce module
sidebar_links:
  - label: Présentation
    url: /module-oiseaux/
  - label: Protocole
    url: /module-oiseaux/protocole/
  - label: Ressources & fiches
    url: /module-oiseaux/ressources/

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

decibels:
  - label: Concert / Marteau-piqueur
    value: "110–130 dB"
    pct: 100
    level: danger
  - label: Trafic routier intense
    value: "80 dB"
    pct: 65
    level: warning
  - label: Conversation normale
    value: "60 dB"
    pct: 48
    level: ok
  - label: Mésange / Grive
    value: "jusqu'à 60 dB"
    pct: 48
    level: ok

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

<h2 id="en-bref">L'atelier en bref</h2>

Pendant environ **75 minutes**, un groupe explore un site — urbain ou naturel — à l'écoute des oiseaux. À l'aide de quelques capteurs accessibles, les participant·es identifient les espèces à leur chant, amplifient les sons lointains et mesurent le niveau sonore du lieu.

L'objectif n'est pas la performance, mais l'**attention** : transformer l'écoute en outil de connaissance et de reconnexion au vivant. Aucune expertise naturaliste n'est requise.

<div class="callout tip">
  <p><strong>Par où commencer ?</strong> Le <a href="{{ '/module-oiseaux/protocole/' | relative_url }}">protocole pas-à-pas</a> détaille le déroulé et la prise en main des outils. Les <a href="{{ '/module-oiseaux/ressources/' | relative_url }}">ressources</a> rassemblent les fiches à imprimer et un guide pour lire les sonogrammes.</p>
</div>

<h2 id="paysage-sonore">Le paysage sonore</h2>

Le **paysage sonore** (*soundscape*) est l'ensemble des sons présents dans un lieu à un moment donné. Comme un paysage visuel composé de couleurs et de formes, il rassemble des sons de différentes natures. Les chercheurs le décomposent en trois grandes familles :

{% include concepts.html items=page.soundscape %}

Apprendre à distinguer ces sons, c'est porter une **attention nouvelle** à un environnement souvent ignoré. C'est aussi la clé pour comprendre un enjeu écologique réel.

<h2 id="bienfaits">Les bienfaits du son naturel</h2>

Écouter les sons de la nature n'est pas qu'agréable : les effets sont mesurables. Comparé à un environnement de bruit urbain, l'exposition à des sons naturels améliore l'humeur et réduit le stress.

<div class="stat-row">
  <div class="stat-item"><span class="stat-num">+28 %</span><span class="stat-label">d'amélioration de l'humeur</span></div>
  <div class="stat-item"><span class="stat-num">↓</span><span class="stat-label">baisse du cortisol et de l'irritabilité</span></div>
</div>

<h2 id="pollution-sonore">La pollution sonore</h2>

Les oiseaux vivent dans des milieux riches en sons. Lorsqu'un milieu devient trop bruyant — circulation, machines, présence humaine — le bruit **masque** les chants. Les oiseaux doivent alors chanter plus fort ou plus aigu pour se faire entendre, ce qui leur coûte de l'énergie et affecte parfois leur reproduction.

<div class="db-chart">
  {%- for d in page.decibels -%}
  <div class="db-row">
    <span class="db-label">{{ d.label }}</span>
    <span class="db-track"><span class="db-fill db-{{ d.level }}" style="width: {{ d.pct }}%;">{{ d.value }}</span></span>
  </div>
  {%- endfor -%}
</div>

<p class="source-note">Le bruit urbain « masque » les chants, forçant les espèces à chanter plus fort ou à se déplacer.</p>

<div class="callout science">
  <p><strong>Un indicateur écologique</strong> — La part sonore du vivant — la biophonie — est un indicateur précieux de la santé des milieux. Un paysage sonore riche et diversifié signale souvent un écosystème en bonne santé ; un paysage appauvri ou dominé par l'anthrophonie alerte sur sa dégradation.</p>
</div>

<p style="margin-top: 2.5rem; text-align: center;">
  <a href="{{ '/module-oiseaux/protocole/' | relative_url }}" class="btn">Voir le protocole →</a>
</p>
