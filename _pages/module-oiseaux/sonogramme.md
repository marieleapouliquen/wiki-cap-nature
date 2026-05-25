---
layout: default
title: Apprendre à lire un sonogramme
---

<main class="content">

  <nav class="back-navigation" style="margin-top: 1rem; margin-bottom: 2rem;">
    <a href="{{ '/module-oiseaux/' | relative_url }}" 
       style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; color: var(--color-text-muted, #718096); font-weight: bold; font-size: 0.95rem; transition: color 0.2s ease;"
       onmouseover="this.style.color='var(--color-link, #2b6cb0)'; this.querySelector('.arrow').style.transform='translateX(-3px)';" 
       onmouseout="this.style.color='var(--color-text-muted, #718096)'; this.querySelector('.arrow').style.transform='translateX(0)';">
      <span class="arrow" style="display: inline-block; transition: transform 0.2s ease;">←</span> 
      Retour à la page "Atelier Écoacoustique"
    </a>
  </nav>

  <h2>A propos</h2>
  <p>Quand l'application Merlin identifie un oiseau, elle affiche un <strong>sonogramme</strong> (ou spectrogramme) qui défile en temps réel. Comprendre cette image enrichit considérablement l'analyse pédagogique en transformant une onde sonore invisible en repère visuel.</p>

  <div class="callout science">
    <div class="callout-title">🔬 Une IA qui regarde, pas qui écoute</div>
    <p>L'intelligence artificielle de Merlin n'écoute pas directement le fichier audio de la même façon qu'une oreille humaine. <strong>Elle convertit le signal en image (le spectrogramme), puis effectue de la reconnaissance d'image</strong> grâce à un réseau de neurones entraîné sur des millions d'exemples de référence.</p>
  </div>

  <h3>Les deux axes : temps et fréquence</h3>
  <p>Un sonogramme se lit comme une partition de musique simplifiée. Il a deux dimensions :</p>

  <div class="sono-frame">
    <svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="width: 80%; height: auto; display: block;">
      <rect x="80" y="40" width="560" height="280" fill="#fafbf6" stroke="#e2e6d8"/>
      <line x1="80" y1="40" x2="640" y2="40" stroke="#e2e6d8" stroke-dasharray="3,3"/>
      <line x1="80" y1="110" x2="640" y2="110" stroke="#e2e6d8" stroke-dasharray="3,3"/>
      <line x1="80" y1="180" x2="640" y2="180" stroke="#e2e6d8" stroke-dasharray="3,3"/>
      <line x1="80" y1="250" x2="640" y2="250" stroke="#e2e6d8" stroke-dasharray="3,3"/>
      <line x1="220" y1="40" x2="220" y2="320" stroke="#e2e6d8" stroke-dasharray="3,3"/>
      <line x1="360" y1="40" x2="360" y2="320" stroke="#e2e6d8" stroke-dasharray="3,3"/>
      <line x1="500" y1="40" x2="500" y2="320" stroke="#e2e6d8" stroke-dasharray="3,3"/>
      
      <line x1="80" y1="40" x2="80" y2="320" stroke="#1f2a6b" stroke-width="2"/>
      <polygon points="80,30 75,42 85,42" fill="#1f2a6b"/>
      <text x="65" y="45" font-size="12" fill="#1f2a6b" text-anchor="end">8 kHz</text>
      <text x="65" y="115" font-size="12" fill="#1f2a6b" text-anchor="end">6 kHz</text>
      <text x="65" y="185" font-size="12" fill="#1f2a6b" text-anchor="end">4 kHz</text>
      <text x="65" y="255" font-size="12" fill="#1f2a6b" text-anchor="end">2 kHz</text>
      <text x="65" y="325" font-size="12" fill="#1f2a6b" text-anchor="end">0</text>
      <text x="30" y="180" font-size="14" font-weight="bold" fill="#1f2a6b" text-anchor="middle" transform="rotate(-90 30 180)">Fréquence</text>
      
      <line x1="80" y1="320" x2="640" y2="320" stroke="#1f2a6b" stroke-width="2"/>
      <polygon points="650,320 638,315 638,325" fill="#1f2a6b"/>
      <text x="80" y="340" font-size="12" fill="#1f2a6b" text-anchor="middle">0 s</text>
      <text x="220" y="340" font-size="12" fill="#1f2a6b" text-anchor="middle">1 s</text>
      <text x="360" y="340" font-size="12" fill="#1f2a6b" text-anchor="middle">2 s</text>
      <text x="500" y="340" font-size="12" fill="#1f2a6b" text-anchor="middle">3 s</text>
      <text x="630" y="340" font-size="12" fill="#1f2a6b" text-anchor="middle">4 s</text>
      <text x="360" y="365" font-size="14" font-weight="bold" fill="#1f2a6b" text-anchor="middle">Temps</text>
      
      <defs>
        <marker id="arrowhead-up" markerWidth="8" markerHeight="8" refX="0" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#1f2a6b"/>
        </marker>
      </defs>
      <line x1="660" y1="320" x2="660" y2="50" stroke="#1f2a6b" stroke-width="2" marker-end="url(#arrowhead-up)"/>
      <text x="672" y="315" font-size="11" font-weight="bold" fill="#1f2a6b">Grave</text>
      <text x="672" y="55" font-size="11" font-weight="bold" fill="#1f2a6b">Aigu</text>
    </svg>
    <p class="sono-caption">Les deux axes d'un sonogramme : le <strong>temps</strong> qui défile horizontalement, la <strong>fréquence</strong> (du grave en bas à l'aigu en haut) sur la verticale.</p>
  </div>


  <h3>L'intensité du son : le contraste noir et blanc</h3>
  <p>Plus une trace est noire et foncée, plus le son est puissant à ce moment précis sur cette fréquence.</p>

  <div class="sono-frame">
    <svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; display: block;">
      <rect x="50" y="30" width="600" height="120" fill="#fafbf6" stroke="#e2e6d8"/>
      <defs>
        <linearGradient id="monochromeGrad" x1="0%" x2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="50%" stop-color="#888888"/>
          <stop offset="100%" stop-color="#000000"/>
        </linearGradient>
      </defs>
      <rect x="50" y="40" width="600" height="40" fill="url(#monochromeGrad)" stroke="#e2e6d8"/>
      <text x="50" y="25" font-size="11" fill="#1f2a6b">silence (blanc)</text>
      <text x="350" y="25" font-size="11" font-weight="bold" fill="#1f2a6b" text-anchor="middle">intensité du son →</text>
      <text x="650" y="25" font-size="11" fill="#1f2a6b" text-anchor="end">son fort (noir)</text>
      <text x="350" y="110" font-size="12" fill="#1f2a6b" text-anchor="middle">Échelle monochrome — du blanc lumineux (silence) au noir profond (son intense)</text>
    </svg>
  </div>

  

  <h3>Anatomie d'un chant : le vocabulaire visuel</h3>
  <p>Quelques termes utiles pour décrire ce qu'on observe sur un spectrogramme :</p>

  <div class="sono-frame">
    <svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; display: block;">
      <rect x="80" y="20" width="560" height="240" fill="#fafbf6" stroke="#e2e6d8"/>
      <line x1="80" y1="20" x2="80" y2="260" stroke="#1f2a6b" stroke-width="1.5"/>
      <text x="65" y="30" font-size="10" fill="#1f2a6b" text-anchor="end">8 kHz</text>
      <text x="65" y="100" font-size="10" fill="#1f2a6b" text-anchor="end">6 kHz</text>
      <text x="65" y="170" font-size="10" fill="#1f2a6b" text-anchor="end">4 kHz</text>
      <text x="65" y="240" font-size="10" fill="#1f2a6b" text-anchor="end">2 kHz</text>
      <line x1="80" y1="260" x2="640" y2="260" stroke="#1f2a6b" stroke-width="1.5"/>
      
      <ellipse cx="130" cy="120" rx="6" ry="10" fill="#e8862a"/>
      <text x="130" y="145" font-size="11" font-weight="bold" fill="#1f2a6b" text-anchor="middle">A</text>
      <path d="M 175 100 Q 185 130 200 140" stroke="#e8862a" stroke-width="6" fill="none" stroke-linecap="round"/>
      <text x="187" y="165" font-size="11" font-weight="bold" fill="#1f2a6b" text-anchor="middle">B</text>
      <path d="M 240 160 Q 250 130 265 110" stroke="#e8862a" stroke-width="6" fill="none" stroke-linecap="round"/>
      <text x="252" y="185" font-size="11" font-weight="bold" fill="#1f2a6b" text-anchor="middle">C</text>
      
      <g fill="#e8862a">
        <ellipse cx="320" cy="170" rx="3" ry="8"/><ellipse cx="330" cy="165" rx="3" ry="8"/>
        <ellipse cx="340" cy="170" rx="3" ry="8"/><ellipse cx="350" cy="165" rx="3" ry="8"/>
        <ellipse cx="360" cy="170" rx="3" ry="8"/><ellipse cx="370" cy="165" rx="3" ry="8"/>
      </g>
      <text x="345" y="195" font-size="11" font-weight="bold" fill="#1f2a6b" text-anchor="middle">D</text>
      
      <ellipse cx="430" cy="100" rx="5" ry="12" fill="#e8862a"/>
      <path d="M 445 90 Q 455 120 470 110" stroke="#e8862a" stroke-width="5" fill="none" stroke-linecap="round"/>
      <ellipse cx="485" cy="120" rx="5" ry="10" fill="#e8862a"/>
      <text x="460" y="150" font-size="11" font-weight="bold" fill="#1f2a6b" text-anchor="middle">E</text>
      
      <line x1="585" y1="200" x2="600" y2="200" stroke="#e8862a" stroke-width="3"/>
      <line x1="585" y1="160" x2="600" y2="160" stroke="#f7d038" stroke-width="3"/>
      <line x1="585" y1="120" x2="600" y2="120" stroke="#94c11f" stroke-width="2"/>
      <text x="593" y="220" font-size="11" font-weight="bold" fill="#1f2a6b" text-anchor="middle">F</text>
    </svg>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.4rem 1.2rem; margin-top: 0.75rem; font-size: 0.9rem;">
      <div><strong>A</strong> · <strong>Note pure</strong> (fréquence stable)</div>
      <div><strong>B</strong> · <strong>Note descendante</strong> (glissement grave)</div>
      <div><strong>C</strong> · <strong>Note ascendante</strong> (glissement aigu)</div>
      <div><strong>D</strong> · <strong>Trille</strong> (succession très rapide)</div>
      <div><strong>E</strong> · <strong>Strophe</strong> (phrase complète)</div>
      <div><strong>F</strong> · <strong>Harmoniques</strong> (son riche superposé)</div>
    </div>
  </div>

  <h2>Les grands motifs visuels des chants</h2>
  <p>Avant même d'identification l'espèce, apprenez à repérer ces grandes signatures visuelles :</p>

  <div class="legend-mini">
    <span><span class="swatch" style="background:#e8862a"></span> intensité forte</span>
    <span><span class="swatch" style="background:#f7d038"></span> intensité moyenne</span>
    <span><span class="swatch" style="background:#94c11f"></span> intensité faible</span>
  </div>

  <div class="sono-grid">
    
    <div class="sono-card">
      <h4>Pattern : “Strophe mélodique”</h4>
      <span class="latin">Notes flûtées fluctuantes</span>
      <svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; display: block;">
        <rect x="35" y="10" width="260" height="90" fill="#fafbf6" stroke="#e2e6d8"/>
        <line x1="35" y1="10" x2="35" y2="100" stroke="#1f2a6b"/><line x1="35" y1="100" x2="295" y2="100" stroke="#1f2a6b"/>
        <path d="M 60 60 Q 75 30 95 45 Q 110 70 125 40" stroke="#e8862a" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M 150 55 Q 170 25 190 40 Q 210 65 230 35" stroke="#e8862a" stroke-width="5" fill="none" stroke-linecap="round"/>
      </svg>
      <p class="pattern">Typique des grands chanteurs flûtés comme le <strong>Merle noir</strong> ou la <strong>Fauvette à tête noire</strong>.</p>
    </div>

    <div class="sono-card">
      <h4>Pattern : “Phrase répétée”</h4>
      <span class="latin">Séquences brèves identiques</span>
      <svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; display: block;">
        <rect x="35" y="10" width="260" height="90" fill="#fafbf6" stroke="#e2e6d8"/>
        <line x1="35" y1="10" x2="35" y2="100" stroke="#1f2a6b"/><line x1="35" y1="100" x2="295" y2="100" stroke="#1f2a6b"/>
        <ellipse cx="70" cy="40" rx="3" ry="9" fill="#e8862a"/><ellipse cx="85" cy="60" rx="3" ry="9" fill="#e8862a"/>
        <ellipse cx="140" cy="40" rx="3" ry="9" fill="#e8862a"/><ellipse cx="155" cy="60" rx="3" ry="9" fill="#e8862a"/>
        <ellipse cx="210" cy="40" rx="3" ry="9" fill="#e8862a"/><ellipse cx="225" cy="60" rx="3" ry="9" fill="#e8862a"/>
      </svg>
      <p class="pattern">Typique de la <strong>Mésange charbonnière</strong> (rythme binaire régulier en "ti-tu, ti-tu").</p>
    </div>

    <div class="sono-card">
      <h4>Pattern : “Bloc grave bas”</h4>
      <span class="latin">Traces horizontales très basses</span>
      <svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; display: block;">
        <rect x="35" y="10" width="260" height="90" fill="#fafbf6" stroke="#e2e6d8"/>
        <line x1="35" y1="10" x2="35" y2="100" stroke="#1f2a6b"/><line x1="35" y1="100" x2="295" y2="100" stroke="#1f2a6b"/>
        <ellipse cx="100" cy="85" rx="35" ry="8" fill="#e8862a"/>
        <ellipse cx="190" cy="87" rx="40" ry="6" fill="#e8862a"/>
      </svg>
      <p class="pattern">Typique du roucoulement sourd des <strong>Pigeons</strong> ou du hululement de la <strong>Chouette hulotte</strong>.</p>
    </div>

    <div class="sono-card">
      <h4>Pattern : “Cri rauque large bande”</h4>
      <span class="latin">Taches verticales épaisses</span>
      <svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; display: block;">
        <rect x="35" y="10" width="260" height="90" fill="#fafbf6" stroke="#e2e6d8"/>
        <line x1="35" y1="10" x2="35" y2="100" stroke="#1f2a6b"/><line x1="35" y1="100" x2="295" y2="100" stroke="#1f2a6b"/>
        <rect x="90" y="25" width="15" height="65" fill="#e8862a"/>
        <rect x="170" y="30" width="12" height="60" fill="#e8862a"/>
      </svg>
      <p class="pattern">Sons saturés caractéristiques des corvidés (<strong>Corneille noire</strong>, <strong>Geai des chênes</strong>) ou des cris d'alarme.</p>
    </div>

  </div>

</main>
