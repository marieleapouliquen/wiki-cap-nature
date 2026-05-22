---
layout: default
title: Accueil
show_photo_credits: true

stat_urbain:
  - num: "45 %"
    label: vivent en grandes métropoles
  - num: "36 %"
    label: habitent de petites villes
  - num: "19 %"
    label: vivent encore en zone rurale
---

<main class="site-main">
  <div class="container">
    <div class="page-content">
      <p class="page-lead"> <strong>Cap Nature</strong> est un dispositif d'ateliers participatifs qui invite les jeunes à renouer avec le vivant, en faisant des capteurs environnementaux des outils d'attention et de découverte du milieu naturel.</p>

      <section class="content">
        <h2>Les modules proposés</h2>
        <p>Chaque module est un atelier autonome, autour d'un capteur et d'un milieu. Ils partagent la même démarche d'exploration instrumentée, et peuvent être menés indépendamment.</p>

        <div class="card-grid">
        
          <a class="card" href="{{ '/module-oiseaux/' | relative_url }}">
            <span class="card-title">Atelier · Écoacoustique</span>
            <span class="card-desc">Initiation à l'écoute des oiseaux et des paysages sonores</span>
            <span class="btn">Découvrir l'atelier →</span>
          </a>
          
          <div class="card">
            <span class="card-title">Atelier · Caméras thermiques</span>
            <span class="card-desc">Voir l'environnement autrement : explorer la chaleur invisible et les îlots de chaleur avec des caméras thermiques portatives.</span>
            <span class="btn" style="opacity: 0.5; pointer-events: none;">En préparation</span>
          </div>
        </div>
      </section>

      <section class="content">
        <h2>Reconnecter les jeunes à la nature</h2>
        <p>Dans son <a href="https://ofb.gouv.fr/doc/reference-urgence-pour-la-nature-et-humain-resume-a-intention-des-decideurs-du-rapport-sur" target="_blank" rel="noopener">évaluation mondiale de 2019</a>, la Plateforme intergouvernementale sur la biodiversité et les services écosystémiques (Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services – IPBES) dressait un constat alarmant : la biodiversité décline à un rythme sans précédent dans l'histoire humaine. Son <a href="https://www.ipbes.net/nexus-assessment" target="_blank" rel="noopener">rapport <em>Nexus</em></a>, publié fin 2024, va plus loin en montrant que biodiversité, climat, eau, alimentation et santé humaine forment <strong>cinq crises interconnectées</strong> — interdépendantes dans leurs causes, leurs effets et les réponses à y apporter. Pour enrayer cet effondrement, l'IPBES appelle à des <strong>« changements transformateurs »</strong>, qui touchent aussi, comme le souligne l'<a href="https://ofb.gouv.fr/transformer-la-relation-au-vivant-un-enjeu-de-societe-autant-que-de-biodiversite" target="_blank" rel="noopener">Office français de la biodiversité (OFB)</a>, <strong>nos représentations et nos relations au vivant</strong>.</p>
        <p>Or, à l'heure où l'urbanisation s'intensifie et où les loisirs se numérisent, le contact direct avec la nature se raréfie. La majorité de l'humanité réside désormais en ville, ce qui fragmente les habitats et éloigne, jour après jour, les jeunes générations des écosystèmes. Ce phénomène nourrit ce que les chercheurs nomment l'<a href="https://ofb.gouv.fr/amnesie-environnementale-et-la-diminution-des-experiences-de-nature" target="_blank" rel="noopener"><strong>amnésie environnementale</strong></a> (ou <em>shifting baseline syndrome</em>) : chaque génération prend pour « normal » l'environnement appauvri de son enfance, si bien que l'ampleur réelle des pertes passe inaperçue d'une génération à l'autre.<sup><a href="#ref1">1</a></sup></p>
        <p>Cette perte de lien n'est pas anodine. La recherche établit aujourd'hui que la <strong>connexion à la nature</strong> constitue un véritable levier de durabilité : elle prédit à la fois le bien-être des individus et l'adoption de comportements favorables à l'environnement.<sup><a href="#ref2">2</a></sup> Reconnecter les personnes au vivant est même décrit comme un « point de levier » pour transformer nos sociétés vers plus de soutenabilité.<sup><a href="#ref3">3</a></sup> Une part importante des jeunes exprimant aujourd'hui tristesse et anxiété face à l'effondrement de la biodiversité, l'expérience directe de la nature apparaît comme un antidote précieux à cette détresse. <strong>Promouvoir le lien des jeunes au vivant</strong> est ainsi un enjeu à la fois écologique, éducatif et de bien-être.</p>
        <div class="stat-row">
          {%- for s in page.stat_urbain -%}
          <div class="stat-item">
            <span class="stat-num">{{ s.num }}</span>
            <span class="stat-label">{{ s.label }}</span>
          </div>
          {%- endfor -%}
        </div>
        <p class="source-note">Sources : <a href="https://ofb.gouv.fr/doc/reference-urgence-pour-la-nature-et-humain-resume-a-intention-des-decideurs-du-rapport-sur" target="_blank" rel="noopener">IPBES (2019)</a> ; <a href="https://www.ipbes.net/nexus-assessment" target="_blank" rel="noopener">rapport <em>Nexus</em> (2024)</a> ; <a href="https://ofb.gouv.fr/transformer-la-relation-au-vivant-un-enjeu-de-societe-autant-que-de-biodiversite" target="_blank" rel="noopener">OFB</a> ; estimations ONU, 2025.</p>

        <h2>Cap Nature : une approche par l'expérimentation instrumentée</h2>
        <p>Plutôt que d'écarter les écrans, Cap Nature s'en saisit comme d'un levier. En plein air, munis de capteurs accessibles, les participant·es mènent une véritable <strong>enquête sensible et scientifique</strong> sur leur environnement proche : ils observent, mesurent, identifient, et portent un regard neuf sur un milieu qu'ils croyaient connaître.</p>

        <ol class="references">
          <li id="ref1">Concept proposé par Kahn &amp; Friedman (1995) et nommé « shifting baseline syndrome » par D. Pauly, « Anecdotes and the shifting baseline syndrome of fisheries », <em>Trends in Ecology &amp; Evolution</em>, 10(10), 1995, p. 430. <a href="https://doi.org/10.1016/S0169-5347(00)89171-5" target="_blank" rel="noopener">https://doi.org/10.1016/S0169-5347(00)89171-5</a>. Voir aussi la fiche OFB : <a href="https://ofb.gouv.fr/amnesie-environnementale-et-la-diminution-des-experiences-de-nature" target="_blank" rel="noopener">« L'amnésie environnementale et la diminution des expériences de nature »</a>.</li>
          <li id="ref2">G. Barragan-Jason et al., « Human–nature connectedness as a pathway to sustainability: a global meta-analysis », <em>Conservation Letters</em>, 15(1), 2022, e12852. <a href="https://doi.org/10.1111/conl.12852" target="_blank" rel="noopener">https://doi.org/10.1111/conl.12852</a></li>
          <li id="ref3">C. D. Ives et al., « Human–nature connection: a multidisciplinary review », <em>Current Opinion in Environmental Sustainability</em>, 26-27, 2017, p. 106-113. <a href="https://doi.org/10.1016/j.cosust.2017.05.005" target="_blank" rel="noopener">https://doi.org/10.1016/j.cosust.2017.05.005</a></li>
        </ol>
      </section>

    </div>
  </div>
</main>









