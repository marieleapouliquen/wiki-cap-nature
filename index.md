---
layout: default
title: Accueil
show_photo_credits: true

hero:
  title: A l'écoute des oiseaux et des paysages sonores
  subtitle: "(Re)découvrir la nature avec des capteurs participatifs"

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

cards:
  - title: Protocole
    cta: Voir le protocole →
    url: /protocole/
  - title: Matériel
    cta: Découvrir →
    url: /materiel/
  - title: Ressources
    cta: Explorer →
    url: /ressources/

---

{% include photo-band.html photos=page.photos %}

{% include hero.html title=page.hero.title subtitle=page.hero.subtitle tags=page.hero.tags %}

<div class="section" style="max-width: 760px;">
  <main class="content" style="max-width: none;">
    <h2>Pourquoi ces ateliers ?</h2>
    <p>Les ateliers <strong>Cap Nature — Birds</strong> sont des dispositifs pédagogiques d'environ 75 minutes qui combinent l'usage de capteurs numériques — parabole acoustique, application d'identification des chants d'oiseaux, sonomètre — et l'exploration sensible d'un site naturel ou urbain.</p>
    <p>L'idée est simple : utiliser quelques outils accessibles pour <strong>réveiller l'attention au vivant</strong> qui nous entoure, même en ville. Identifier un chant, amplifier un son lointain, mesurer le calme d'un lieu : autant de portes d'entrée vers une nature ordinaire souvent ignorée.</p>
    <p>Ce guide a pour but de permettre à toute personne intéressée — enseignant·e, animateur·ice nature, éducateur·ice à l'environnement — de <strong>mener l'atelier</strong> dans son propre contexte, avec ses propres outils et son propre public.</p>
    <div class="callout tip">
      <p class="callout-title">Démarrage rapide</p>
      <p>Suivez le <a href="{{ '/protocole/' | relative_url }}">protocole pas-à-pas</a>, préparez le <a href="{{ '/materiel/' | relative_url }}">matériel</a>, et piochez dans les <a href="{{ '/ressources/' | relative_url }}">ressources externes</a> pour aller plus loin. Comptez environ une heure de préparation pour vous approprier le dispositif.</p>
    </div>
  </main>
</div>

<section class="section-wide tinted">
  <div class="section">
    <h2 style="text-align: center; margin-top: 0;">Le guide en trois temps</h2>
    {% include cards.html cards=page.cards %}
  </div>
</section>

<div class="section" style="max-width: 760px;">
  <main class="content" style="max-width: none;">
    <h2>L'atelier en un coup d'œil</h2>
    {% include timeline.html steps=page.timeline %}
    <div class="callout info">
      <p class="callout-title">Licence libre</p>
      <p>Ce guide est partagé sous licence <strong>CC BY-SA 4.0</strong> : vous pouvez l'utiliser, l'adapter et le partager, à condition de citer la source et de partager vos versions sous la même licence.</p>
    </div>
    <p style="text-align: center; margin-top: 2.5rem;">
      <a href="{{ '/protocole/' | relative_url }}" class="btn">Commencer →</a>
    </p>
  </main>
</div>
