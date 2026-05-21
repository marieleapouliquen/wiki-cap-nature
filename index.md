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

<section class="section-wide">
  <div class="section">
    <p style="font-size: 1.15rem; margin-bottom: 2rem; max-width: 820px;">
      Bienvenue sur le wiki open-source du projet <strong>Cap Nature</strong>. Ce guide fournit toutes les ressources nécessaires aux enseignant·es, animateur·ices et éducateur·ices pour concevoir et animer des ateliers d'écoute des paysages sonores à l'aide de capteurs participatifs.
    </p>
    
    {% include cards.html cards=page.cards %}
  </div>
</section>

{% include photo-band.html photos=page.photos %}

<div class="section" style="max-width: 820px; margin-top: 2.5rem;">
  <main class="content" style="max-width: none;">
    <h2>À propos des ateliers Cap Nature</h2>
    <p>
      Face à l'urbanisation croissante et à la raréfaction de notre contact direct avec le vivant, les ateliers <strong>Cap Nature</strong> proposent de réveiller notre attention à la biodiversité du quotidien. En combinant l'exploration sensible et l'usage d'outils scientifiques, les participant·es apprennent à décoder l'environnement par l'écoute.
    </p>

    <h3>L'approche par le paysage sonore</h3>
    <p>
      L'atelier s'appuie sur le concept de <em>soundscape</em> (paysage sonore) théorisé par Bernie Krause, qui divise les sons de notre environnement en trois grandes familles :
    </p>
    <ul>
      <li><strong>La Géophonie :</strong> Les sons de la Terre et de la météo (le vent, l'eau, l'orage).</li>
      <li><strong>La Biophonie :</strong> Les signaux émis par les organismes vivants (les chants d'oiseaux, les insectes).</li>
      <li><strong>La Anthropophonie :</strong> Les bruits générés par l'activité humaine (le trafic routier, les machines).</li>
    </ul>
    <p>
      Analyser ces sons permet de comprendre l'état de santé d'un écosystème et de mesurer l'impact de la pollution sonore (l'anthropophonie) sur le comportement des oiseaux, qui doivent souvent chanter plus fort ou modifier leurs habitudes pour cohabiter avec la ville.
    </p>

    <h3>Des instruments d'investigation scientifique</h3>
    <p>
      Pour mener cette enquête sur le terrain, l'atelier s'appuie sur des dispositifs accessibles et participatifs :
    </p>
    <ul>
      <li>Une <strong>parabole directionnelle</strong> pour isoler, amplifier et capter les sons de la nature de manière immersive.</li>
      <li>Des applications numériques comme <strong>Merlin Bird ID</strong> (pour l'aide à l'identification des espèces par reconnaissance IA) ou <strong>Fizziq</strong> (pour mesurer précisément le volume sonore en décibels).</li>
    </ul>

    <div class="callout info" style="margin-top: 2.5rem;">
      <p class="callout-title">Licence libre (CC BY-SA 4.0)</p>
      <p>Ce guide est entièrement libre : vous pouvez l'utiliser, l'adapter et le partager, à condition de citer la source et de partager vos versions sous la même licence.</p>
    </div>

    <p style="text-align: center; margin-top: 2.5rem;">
      <a href="{{ '/protocole/' | relative_url }}" class="btn">Découvrir le protocole pas-à-pas →</a>
    </p>
  </main>
</div>
