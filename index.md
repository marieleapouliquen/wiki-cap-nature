---
layout: default
title: Accueil
show_photo_credits: false
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
<div class="section" style="max-width: 820px;">
  <main class="content" style="max-width: none;">
    <h2>Pourquoi ces ateliers ?</h2>
    <p>Les ateliers <strong>Cap Nature</strong> sont des dispositifs pédagogiques qui combinent l'usage de capteurs environnementaux et l'exploration sensible d'un site naturel ou urbain.</p>
    <p>L'idée est simple : utiliser quelques outils accessibles pour <strong>réveiller l'attention au vivant</strong> qui nous entoure, même en ville.</p>
  </main>
</div>
<section class="section-wide tinted">
  <div class="section">
  <p>Ce guide a pour but de permettre à toute personne intéressée — enseignant·e, animateur·ice nature, éducateur·ice à l'environnement — de <strong>mener l'atelier</strong> dans son propre contexte, avec ses propres outils et son propre public.</p>
  
  {% include cards.html cards=page.cards %}
  </div>
</section>
<div class="section" style="max-width: 820px;">
  <main class="content" style="max-width: none;">
    <div class="callout info">
      <p class="callout-title">Licence libre</p>
      <p>Ce guide est partagé sous licence <strong>CC BY-SA 4.0</strong> : vous pouvez l'utiliser, l'adapter et le partager, à condition de citer la source et de partager vos versions sous la même licence.</p>
    </div>
    <p style="text-align: center; margin-top: 2.5rem;">
      <a href="{{ '/protocole/' | relative_url }}" class="btn">Commencer →</a>
    </p>
  </main>
</div>
