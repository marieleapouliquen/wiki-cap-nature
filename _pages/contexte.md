---
layout: page
permalink: /contexte/
title: Contexte
lead: "Pourquoi (re)découvrir la nature par l'écoute ? Un monde de plus en plus urbain, une biodiversité que l'on ne perçoit plus, et le son comme porte d'entrée vers le vivant."
sidebar_title: Le contexte
toc:
  - id: monde-urbain
    label: Un monde urbain
  - id: biodiversite-masquee
    label: Une biodiversité masquée
  - id: eco-anxiete
    label: L'écho de l'éco-anxiété
  - id: paysage-sonore
    label: Le paysage sonore
  - id: bienfaits
    label: Les bienfaits du son naturel
  - id: pollution-sonore
    label: La pollution sonore
sidebar_links_title: Aller plus loin
sidebar_links:
  - label: Le protocole
    url: /protocole/
  - label: Ressources & fiches
    url: /ressources/

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
---

<h2 id="monde-urbain">Un monde urbain</h2>

Aujourd'hui, la majorité de l'humanité réside en ville. Cette expansion urbaine fragmente les habitats naturels et réduit, jour après jour, notre contact direct avec les écosystèmes.

<div class="stat-row">
  <div class="stat-item"><span class="stat-num">45 %</span><span class="stat-label">vivent en grandes métropoles</span></div>
  <div class="stat-item"><span class="stat-num">36 %</span><span class="stat-label">habitent de petites villes</span></div>
  <div class="stat-item"><span class="stat-num">19 %</span><span class="stat-label">vivent encore en zone rurale</span></div>
</div>

<p class="source-note">Source : estimations ONU, 2025.</p>

<h2 id="biodiversite-masquee">Une biodiversité masquée</h2>

En ville, notre attention est saturée par les stimuli artificiels. La nature devient un décor lointain, souvent médiée par les écrans. Pourtant, une biodiversité bien réelle nous entoure — elle est simplement devenue invisible, ou plutôt inaudible.

C'est précisément l'enjeu des ateliers Cap Nature :

<div class="callout tip" markdown="1">
**Trois intentions** — Prêter **attention** au vivant proche ; **expérimenter** par des instruments scientifiques accessibles ; et **réfléchir** à notre cohabitation avec les autres espèces.
</div>

<h2 id="eco-anxiete">L'écho de l'éco-anxiété</h2>

Cette perte de lien n'est pas sans conséquence sur le bien-être des jeunes générations.

<div class="bigstat">
  <span class="bigstat-num">68 %</span>
  <div class="bigstat-text">
    <strong>des jeunes se disent tristes</strong> face au changement climatique. L'anxiété et le sentiment d'impuissance montent face à l'effondrement de la biodiversité.
  </div>
</div>

<p class="source-note">Source : Hickman et al., <em>The Lancet Planetary Health</em>, 2021.</p>

L'expérience directe de la nature est un antidote précieux à cette détresse : reconnecter, c'est aussi prendre soin.

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

<div class="callout science" markdown="1">
**Un indicateur écologique** — La part sonore du vivant — la biophonie — est un indicateur précieux de la santé des milieux. Un paysage sonore riche et diversifié signale souvent un écosystème en bonne santé ; un paysage appauvri ou dominé par l'anthrophonie alerte sur sa dégradation.
</div>

<p style="margin-top: 2.5rem; text-align: center;">
  <a href="{{ '/protocole/' | relative_url }}" class="btn">Découvrir le protocole →</a>
</p>
