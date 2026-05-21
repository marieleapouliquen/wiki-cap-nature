---
layout: default
title: Accueil
show_photo_credits: false

hero:
  title: Wiki Cap Nature
  subtitle: "Guide méthodologique et technique pour l'animation d'ateliers d'écoute des oiseaux."

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
  - title: 📁 Protocole
    cta: Voir la méthodologie →
    url: /protocole/
  - title: 🛠️ Matériel
    cta: Découvrir les outils →
    url: /materiel/
  - title: 📚 Ressources
    cta: Explorer les fiches →
    url: /ressources/

---

{% include hero.html title=page.hero.title subtitle=page.hero.subtitle tags=page.hero.tags %}

<!-- 1. ACCÈS DIRECT AU CONTENU  -->
<section class="section-wide">
  <div class="section">
    <p style="font-size: 1.15rem; margin-bottom: 2rem; max-width: 820px;">
      Bienvenue sur le wiki open-source du projet <strong>Cap Nature</strong>. Ce guide fournit toutes les ressources nécessaires aux enseignant·es, animateur·ices et éducateur·ices pour concevoir et animer des ateliers d'écoute des paysages sonores à l'aide de capteurs participatifs.
    </p>
    
    {% include cards.html cards=page.cards %}
  </div>
</section>

<!-- 2. LES PHOTOS -->
{% include photo-band.html photos=page.photos %}

<!-- 3. LE CONTEXTE ET LES INFOS SECONDAIRES -->
<div class="section" style="max-width: 820px; margin-top: 2rem;">
  <main class="content" style="max-width: none;">
    <h2>À propos des ateliers</h2>
    <p>Les ateliers combine l'usage de capteurs environnementaux et l'exploration sensible d'un site naturel ou urbain. L'idée est simple : utiliser quelques outils accessibles pour <strong>réveiller l'attention au vivant</strong> qui nous entoure à travers l'écoute des oiseaux.</p>
    
    <div class="callout info" style="margin-top: 2rem;">
      <p class="callout-title">Licence libre (CC BY-SA 4.0)</p>
      <p>Ce guide est libre : vous pouvez l'utiliser, l'adapter et le partager, à condition de citer la source et de partager vos versions sous la même licence.</p>
    </div>
  </main>
</div>
