---
layout: default
title: Accueil
show_photo_credits: true

hero:
  title: Cap Nature
  subtitle: "(Re)découvrir la nature avec des capteurs participatifs"

stat_urbain:
  - num: "45 %"
    label: vivent en grandes métropoles
  - num: "36 %"
    label: habitent de petites villes
  - num: "19 %"
    label: vivent encore en zone rurale
---

{% include hero.html title=page.hero.title subtitle=page.hero.subtitle tags=page.hero.tags %}

<section class="section-wide">
  <div class="section" style="max-width: 820px;">
    <p style="font-size: 1.15rem; margin: 0;">
      <strong>Cap Nature</strong> est un dispositif d'ateliers participatifs qui invite les jeunes à renouer avec le vivant — non pas en opposant nature et technologie, mais en faisant des capteurs numériques des outils d'attention et de découverte du milieu naturel.
    </p>
  </div>
</section>

<div class="section" style="max-width: 820px; margin-top: 2.5rem;">
  <main class="content" style="max-width: none;">

    <h2>Un monde qui s'éloigne du vivant</h2>
    <p>À l'heure où l'urbanisation s'intensifie et où les loisirs se numérisent, le contact direct avec la nature se raréfie. La majorité de l'humanité réside désormais en ville, ce qui fragmente les habitats et éloigne, jour après jour, les jeunes générations des écosystèmes.</p>

    <div class="stat-row">
      {%- for s in page.stat_urbain -%}
      <div class="stat-item"><span class="stat-num">{{ s.num }}</span><span class="stat-label">{{ s.label }}</span></div>
      {%- endfor -%}
    </div>
    <p class="source-note">Source : estimations ONU, 2025.</p>

    <p>Cette perte de lien n'est pas sans conséquence : une part importante des jeunes exprime tristesse et anxiété face à l'effondrement de la biodiversité. Or l'expérience directe de la nature est un antidote précieux à cette détresse. <strong>Promouvoir le lien des jeunes au vivant</strong> est ainsi un enjeu à la fois écologique, éducatif et de bien-être.</p>

    <h2>Une approche par l'expérimentation instrumentée</h2>
    <p>Plutôt que d'écarter les écrans, Cap Nature s'en saisit comme d'un levier. En plein air, munis de capteurs accessibles, les participant·es mènent une véritable <strong>enquête sensible et scientifique</strong> sur leur environnement proche : ils observent, mesurent, identifient, et portent un regard neuf sur un milieu qu'ils croyaient connaître.</p>

    <div class="callout tip">
      <p><strong>Trois intentions</strong> — Prêter <strong>attention</strong> au vivant proche ; <strong>expérimenter</strong> par des instruments scientifiques accessibles ; et <strong>réfléchir</strong> à notre cohabitation avec les autres espèces.</p>
    </div>

    <h2>Les modules proposés</h2>
    <p>Chaque module est un atelier autonome, autour d'un capteur et d'un milieu. Ils partagent la même démarche d'exploration instrumentée, et peuvent être menés indépendamment.</p>

    <div class="card-grid">
      <a class="card" href="{{ '/module-oiseaux/' | relative_url }}">
        <span class="card-icon">🐦</span>
        <span class="card-title">Module 1 · Écoacoustique</span>
        <span class="card-desc">Initiation à l'écoute des oiseaux avec une application de reconnaissance des chants et des capteurs sonores.</span>
        <span class="card-cta">Découvrir le module →</span>
      </a>
      <div class="card card-soon">
        <span class="card-icon">🌡️</span>
        <span class="card-title">Module 2 · Caméras thermiques</span>
        <span class="card-desc">Voir l'environnement autrement : explorer la chaleur invisible et les îlots de chaleur avec des caméras thermiques portatives.</span>
        <span class="card-cta card-cta-soon">En préparation</span>
      </div>
    </div>

  </main>
</div>
