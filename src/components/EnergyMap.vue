<template>
  <div class="energy-map-wrap">
    <div class="map-frame" ref="mapFrameRef">
      <img src="/energy-map-demo/energy-map-clean-no-text-compass-no-movers.png"
           alt="Energy Magic Islands clean map" />

      <svg class="map-layer" viewBox="0 0 1672 941"
           role="img" aria-label="Animated energy map overlays">
        <defs>
          <filter id="wf-blur" x="-30%" y="-10%" width="160%" height="120%">
            <feGaussianBlur stdDeviation="1.2"/>
          </filter>
          <clipPath id="wf1-clip">
            <polygon points="826,244 848,244 836,281 813,281"/>
          </clipPath>
          <clipPath id="wf2-clip">
            <polygon points="936,214 970,214 970,280 921,280"/>
          </clipPath>
          <clipPath id="wf3-clip">
            <polygon points="991,230 1019,230 1007,290 985,290"/>
          </clipPath>
          <clipPath id="wf4-clip">
            <polygon points="1086,270 1106,270 1100,300 1070,300"/>
          </clipPath>
          <pattern id="wf1-pat" x="0" y="0" width="80" height="20" patternUnits="userSpaceOnUse">
            <rect y="0"  width="80" height="6"  fill="rgba(186,232,255,0.48)"/>
            <rect y="6"  width="80" height="3"  fill="rgba(255,255,255,0.75)"/>
            <rect y="9"  width="80" height="5"  fill="rgba(148,210,245,0.32)"/>
            <rect y="14" width="80" height="6"  fill="rgba(186,230,255,0.10)"/>
          </pattern>
          <pattern id="wf2-pat" x="0" y="0" width="80" height="20" patternUnits="userSpaceOnUse">
            <rect y="0"  width="80" height="6"  fill="rgba(186,232,255,0.48)"/>
            <rect y="6"  width="80" height="3"  fill="rgba(255,255,255,0.75)"/>
            <rect y="9"  width="80" height="5"  fill="rgba(148,210,245,0.32)"/>
            <rect y="14" width="80" height="6"  fill="rgba(186,230,255,0.10)"/>
          </pattern>
          <pattern id="wf3-pat" x="0" y="0" width="80" height="20" patternUnits="userSpaceOnUse">
            <rect y="0"  width="80" height="6"  fill="rgba(186,232,255,0.48)"/>
            <rect y="6"  width="80" height="3"  fill="rgba(255,255,255,0.75)"/>
            <rect y="9"  width="80" height="5"  fill="rgba(148,210,245,0.32)"/>
            <rect y="14" width="80" height="6"  fill="rgba(186,230,255,0.10)"/>
          </pattern>
          <pattern id="wf4-pat" x="0" y="0" width="80" height="20" patternUnits="userSpaceOnUse">
            <rect y="0"  width="80" height="6"  fill="rgba(186,232,255,0.48)"/>
            <rect y="6"  width="80" height="3"  fill="rgba(255,255,255,0.75)"/>
            <rect y="9"  width="80" height="5"  fill="rgba(148,210,245,0.32)"/>
            <rect y="14" width="80" height="6"  fill="rgba(186,230,255,0.10)"/>
          </pattern>
          <filter id="smoke-blur" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        <g aria-hidden="true">
          <!-- ══ OCEAN ANIMATION (reduced to ~20 lines) ══ -->
          <line x1="42" y1="852" x2="104" y2="852" stroke="rgba(255,255,255,0.72)" stroke-width="2.8" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" from="0,0" to="28,0" dur="2.4s" begin="-0.0s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.72;0.50;0" keyTimes="0;0.2;0.78;1" dur="2.4s" begin="-0.0s" repeatCount="indefinite"/></line>
          <line x1="298" y1="850" x2="368" y2="850" stroke="rgba(255,255,255,0.78)" stroke-width="3.0" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" from="0,0" to="28,0" dur="2.2s" begin="-0.84s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.78;0.55;0" keyTimes="0;0.2;0.78;1" dur="2.2s" begin="-0.84s" repeatCount="indefinite"/></line>
          <line x1="600" y1="856" x2="665" y2="856" stroke="rgba(255,255,255,0.74)" stroke-width="2.8" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" from="0,0" to="28,0" dur="2.4s" begin="-1.68s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.74;0.52;0" keyTimes="0;0.2;0.78;1" dur="2.4s" begin="-1.68s" repeatCount="indefinite"/></line>
          <line x1="870" y1="848" x2="942" y2="848" stroke="rgba(255,255,255,0.76)" stroke-width="3.0" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" from="0,0" to="28,0" dur="2.2s" begin="-0.66s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.76;0.53;0" keyTimes="0;0.2;0.78;1" dur="2.2s" begin="-0.66s" repeatCount="indefinite"/></line>
          <line x1="1140" y1="854" x2="1204" y2="854" stroke="rgba(255,255,255,0.72)" stroke-width="2.8" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" from="0,0" to="28,0" dur="2.4s" begin="-1.52s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.72;0.50;0" keyTimes="0;0.2;0.78;1" dur="2.4s" begin="-1.52s" repeatCount="indefinite"/></line>
          <line x1="1385" y1="856" x2="1453" y2="856" stroke="rgba(255,255,255,0.76)" stroke-width="3.0" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" from="0,0" to="28,0" dur="2.2s" begin="-0.44s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.76;0.53;0" keyTimes="0;0.2;0.78;1" dur="2.2s" begin="-0.44s" repeatCount="indefinite"/></line>
          <line x1="1610" y1="858" x2="1656" y2="858" stroke="rgba(255,255,255,0.72)" stroke-width="2.8" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" from="0,0" to="28,0" dur="2.4s" begin="-1.32s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.72;0.50;0" keyTimes="0;0.2;0.78;1" dur="2.4s" begin="-1.32s" repeatCount="indefinite"/></line>
          <line x1="110" y1="905" x2="165" y2="905" stroke="rgba(255,255,255,0.62)" stroke-width="2.2" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" from="0,0" to="28,0" dur="2.8s" begin="-0.55s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.62;0.43;0" keyTimes="0;0.2;0.78;1" dur="2.8s" begin="-0.55s" repeatCount="indefinite"/></line>
          <line x1="665" y1="908" x2="727" y2="908" stroke="rgba(255,255,255,0.7)" stroke-width="3.0" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" from="0,0" to="28,0" dur="2.2s" begin="-1.65s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.7;0.49;0" keyTimes="0;0.2;0.78;1" dur="2.2s" begin="-1.65s" repeatCount="indefinite"/></line>
          <line x1="1365" y1="912" x2="1423" y2="912" stroke="rgba(255,255,255,0.68)" stroke-width="2.8" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" from="0,0" to="28,0" dur="2.4s" begin="-0.77s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.68;0.48;0" keyTimes="0;0.2;0.78;1" dur="2.4s" begin="-0.77s" repeatCount="indefinite"/></line>
          <line x1="830" y1="932" x2="885" y2="932" stroke="rgba(255,255,255,0.6)" stroke-width="2.5" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" from="0,0" to="28,0" dur="2.2s" begin="-0.99s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.6;0.42;0" keyTimes="0;0.2;0.78;1" dur="2.2s" begin="-0.99s" repeatCount="indefinite"/></line>
          <line x1="45" y1="14" x2="103" y2="14" stroke="rgba(255,255,255,0.68)" stroke-width="2.5" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" from="0,0" to="28,0" dur="2.4s" begin="-0.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.68;0.48;0" keyTimes="0;0.2;0.78;1" dur="2.4s" begin="-0.3s" repeatCount="indefinite"/></line>
          <line x1="370" y1="16" x2="435" y2="16" stroke="rgba(255,255,255,0.7)" stroke-width="2.8" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" from="0,0" to="28,0" dur="2.2s" begin="-0.9s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.7;0.49;0" keyTimes="0;0.2;0.78;1" dur="2.2s" begin="-0.9s" repeatCount="indefinite"/></line>
          <line x1="760" y1="20" x2="820" y2="20" stroke="rgba(255,255,255,0.68)" stroke-width="2.8" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" from="0,0" to="28,0" dur="2.4s" begin="-1.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.68;0.48;0" keyTimes="0;0.2;0.78;1" dur="2.4s" begin="-1.5s" repeatCount="indefinite"/></line>
          <line x1="1355" y1="30" x2="1403" y2="30" stroke="rgba(255,255,255,0.66)" stroke-width="2.5" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" from="0,0" to="28,0" dur="2.2s" begin="-0.15s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.66;0.46;0" keyTimes="0;0.2;0.78;1" dur="2.2s" begin="-0.15s" repeatCount="indefinite"/></line>
          <line x1="5" y1="460" x2="55" y2="460" stroke="rgba(255,255,255,0.72)" stroke-width="2.5" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" from="0,0" to="28,0" dur="2.4s" begin="-0.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.72;0.50;0" keyTimes="0;0.2;0.78;1" dur="2.4s" begin="-0.2s" repeatCount="indefinite"/></line>
          <line x1="5" y1="625" x2="60" y2="625" stroke="rgba(255,255,255,0.74)" stroke-width="2.8" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" from="0,0" to="28,0" dur="2.2s" begin="-1.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.74;0.52;0" keyTimes="0;0.2;0.78;1" dur="2.2s" begin="-1.2s" repeatCount="indefinite"/></line>
          <line x1="5" y1="778" x2="57" y2="778" stroke="rgba(255,255,255,0.68)" stroke-width="2.5" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" from="0,0" to="28,0" dur="2.4s" begin="-0.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.68;0.48;0" keyTimes="0;0.2;0.78;1" dur="2.4s" begin="-0.4s" repeatCount="indefinite"/></line>
          <line x1="1518" y1="395" x2="1573" y2="395" stroke="rgba(255,255,255,0.72)" stroke-width="2.5" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" from="0,0" to="28,0" dur="2.4s" begin="-0.35s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.72;0.50;0" keyTimes="0;0.2;0.78;1" dur="2.4s" begin="-0.35s" repeatCount="indefinite"/></line>
          <line x1="1518" y1="558" x2="1578" y2="558" stroke="rgba(255,255,255,0.74)" stroke-width="2.8" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" from="0,0" to="28,0" dur="2.2s" begin="-1.35s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.74;0.52;0" keyTimes="0;0.2;0.78;1" dur="2.2s" begin="-1.35s" repeatCount="indefinite"/></line>
          <line x1="1518" y1="722" x2="1573" y2="722" stroke="rgba(255,255,255,0.68)" stroke-width="2.5" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" from="0,0" to="28,0" dur="2.4s" begin="-0.55s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.68;0.48;0" keyTimes="0;0.2;0.78;1" dur="2.4s" begin="-0.55s" repeatCount="indefinite"/></line>
          <!-- Ripple rings -->
          <circle fill="none" stroke="rgba(255,255,255,0.52)" stroke-width="2" cx="190" cy="790" r="5"><animate attributeName="r" from="5" to="32" dur="4s" begin="0s" repeatCount="indefinite"/><animate attributeName="opacity" from="0.55" to="0" dur="4s" begin="0s" repeatCount="indefinite"/></circle>
          <circle fill="none" stroke="rgba(255,255,255,0.50)" stroke-width="2" cx="1450" cy="770" r="5"><animate attributeName="r" from="5" to="28" dur="4.5s" begin="1.5s" repeatCount="indefinite"/><animate attributeName="opacity" from="0.52" to="0" dur="4.5s" begin="1.5s" repeatCount="indefinite"/></circle>
          <circle fill="none" stroke="rgba(255,255,255,0.48)" stroke-width="2" cx="700" cy="920" r="4"><animate attributeName="r" from="4" to="26" dur="5s" begin="0.8s" repeatCount="indefinite"/><animate attributeName="opacity" from="0.50" to="0" dur="5s" begin="0.8s" repeatCount="indefinite"/></circle>
          <circle fill="none" stroke="rgba(255,255,255,0.46)" stroke-width="2" cx="1200" cy="800" r="5"><animate attributeName="r" from="5" to="30" dur="4.8s" begin="2.5s" repeatCount="indefinite"/><animate attributeName="opacity" from="0.50" to="0" dur="4.8s" begin="2.5s" repeatCount="indefinite"/></circle>
          <circle fill="none" stroke="rgba(255,255,255,0.48)" stroke-width="2" cx="60" cy="560" r="4"><animate attributeName="r" from="4" to="24" dur="5.5s" begin="2.2s" repeatCount="indefinite"/><animate attributeName="opacity" from="0.52" to="0" dur="5.5s" begin="2.2s" repeatCount="indefinite"/></circle>

          <!-- ══ WIND TURBINES (injected via DOM in onMounted) ══ -->
          <g ref="turbinesGroupRef"></g>

          <!-- ══ 靜態扇葉（最左 + 最右兩根，座標請自行微調）══ -->
          <!-- 最左邊 -->
          <g transform="translate(270,219) scale(0.48)">
            <line stroke="#fffefa" stroke-width="9" stroke-linecap="round" x1="0" y1="0" x2="0" y2="-58"/>
            <line stroke="#fffefa" stroke-width="9" stroke-linecap="round" x1="0" y1="0" x2="50" y2="29"/>
            <line stroke="#fffefa" stroke-width="9" stroke-linecap="round" x1="0" y1="0" x2="-50" y2="29"/>
            <circle fill="#fffefa" stroke="#dce8ea" stroke-width="3" cx="0" cy="0" r="10"/>
          </g>
          <!-- 最右邊第一根 -->
          <g transform="translate(597,199) scale(0.52)">
            <line stroke="#fffefa" stroke-width="9" stroke-linecap="round" x1="0" y1="0" x2="0" y2="-58"/>
            <line stroke="#fffefa" stroke-width="9" stroke-linecap="round" x1="0" y1="0" x2="50" y2="29"/>
            <line stroke="#fffefa" stroke-width="9" stroke-linecap="round" x1="0" y1="0" x2="-50" y2="29"/>
            <circle fill="#fffefa" stroke="#dce8ea" stroke-width="3" cx="0" cy="0" r="10"/>
          </g>
          <!-- 最右邊第二根 -->
          <g transform="translate(635,217) scale(0.46)">
            <line stroke="#fffefa" stroke-width="9" stroke-linecap="round" x1="0" y1="0" x2="0" y2="-58"/>
            <line stroke="#fffefa" stroke-width="9" stroke-linecap="round" x1="0" y1="0" x2="50" y2="29"/>
            <line stroke="#fffefa" stroke-width="9" stroke-linecap="round" x1="0" y1="0" x2="-50" y2="29"/>
            <circle fill="#fffefa" stroke="#dce8ea" stroke-width="3" cx="0" cy="0" r="10"/>
          </g>

          <!-- ══ HYDRO WATERFALLS ══ -->
          <g clip-path="url(#wf1-clip)"><rect x="808" y="242" width="46" height="100" fill="url(#wf1-pat)" opacity="0.90"/></g>
          <g clip-path="url(#wf2-clip)"><rect x="918" y="212" width="56" height="120" fill="url(#wf2-pat)" opacity="0.90"/></g>
          <g clip-path="url(#wf3-clip)"><rect x="983" y="228" width="40" height="115" fill="url(#wf3-pat)" opacity="0.90"/></g>
          <g clip-path="url(#wf4-clip)"><rect x="1066" y="268" width="46" height="85"  fill="url(#wf4-pat)" opacity="0.90"/></g>
          <circle class="ripple" cx="812"  cy="322" r="6"><animate attributeName="r" from="6" to="26" dur="2.1s" begin="0s"    repeatCount="indefinite"/><animate attributeName="opacity" from="0.7" to="0" dur="2.1s" begin="0s"    repeatCount="indefinite"/></circle>
          <circle class="ripple" cx="946"  cy="318" r="6"><animate attributeName="r" from="6" to="32" dur="2.0s" begin="0.5s"  repeatCount="indefinite"/><animate attributeName="opacity" from="0.7" to="0" dur="2.0s" begin="0.5s"  repeatCount="indefinite"/></circle>
          <circle class="ripple" cx="996"  cy="318" r="5"><animate attributeName="r" from="5" to="28" dur="1.9s" begin="1.0s"  repeatCount="indefinite"/><animate attributeName="opacity" from="0.65" to="0" dur="1.9s" begin="1.0s" repeatCount="indefinite"/></circle>
          <circle class="ripple" cx="1086" cy="322" r="5"><animate attributeName="r" from="5" to="24" dur="2.3s" begin="0.3s"  repeatCount="indefinite"/><animate attributeName="opacity" from="0.65" to="0" dur="2.3s" begin="0.3s" repeatCount="indefinite"/></circle>

          <!-- ══ SOLAR SUN ══ -->
          <g transform="translate(1310,240)">
            <circle class="sun-halo" r="42" />
            <g class="sun-rays-group">
              <line class="sun-ray" x1="0" y1="-32" x2="0" y2="-52" stroke-width="5" />
              <line class="sun-ray" x1="23" y1="-23" x2="37" y2="-37" stroke-width="4" />
              <line class="sun-ray" x1="32" y1="0" x2="52" y2="0" stroke-width="5" />
              <line class="sun-ray" x1="23" y1="23" x2="37" y2="37" stroke-width="4" />
              <line class="sun-ray" x1="0" y1="32" x2="0" y2="52" stroke-width="5" />
              <line class="sun-ray" x1="-23" y1="23" x2="-37" y2="37" stroke-width="4" />
              <line class="sun-ray" x1="-32" y1="0" x2="-52" y2="0" stroke-width="5" />
              <line class="sun-ray" x1="-23" y1="-23" x2="-37" y2="-37" stroke-width="4" />
            </g>
            <circle class="sun-disc" r="26" />
          </g>
          <!-- Solar sparkles -->
          <g class="sparkle s1" transform="translate(1368,388)"><line x1="0" y1="-9" x2="0" y2="9" stroke="white" stroke-width="1.8" stroke-linecap="round"/><line x1="-9" y1="0" x2="9" y2="0" stroke="white" stroke-width="1.8" stroke-linecap="round"/><line x1="-5" y1="-5" x2="5" y2="5" stroke="rgba(255,252,200,0.72)" stroke-width="1.1" stroke-linecap="round"/><line x1="-5" y1="5" x2="5" y2="-5" stroke="rgba(255,252,200,0.72)" stroke-width="1.1" stroke-linecap="round"/><circle r="2.2" fill="white"/></g>
          <g class="sparkle s2" transform="translate(1450,372)"><line x1="0" y1="-7" x2="0" y2="7" stroke="white" stroke-width="1.6" stroke-linecap="round"/><line x1="-7" y1="0" x2="7" y2="0" stroke="white" stroke-width="1.6" stroke-linecap="round"/><line x1="-4" y1="-4" x2="4" y2="4" stroke="rgba(255,252,200,0.65)" stroke-width="1" stroke-linecap="round"/><line x1="-4" y1="4" x2="4" y2="-4" stroke="rgba(255,252,200,0.65)" stroke-width="1" stroke-linecap="round"/><circle r="1.8" fill="white"/></g>
          <g class="sparkle s3" transform="translate(1500,400)"><line x1="0" y1="-8" x2="0" y2="8" stroke="white" stroke-width="1.7" stroke-linecap="round"/><line x1="-8" y1="0" x2="8" y2="0" stroke="white" stroke-width="1.7" stroke-linecap="round"/><line x1="-5" y1="-5" x2="5" y2="5" stroke="rgba(255,252,200,0.68)" stroke-width="1" stroke-linecap="round"/><line x1="-5" y1="5" x2="5" y2="-5" stroke="rgba(255,252,200,0.68)" stroke-width="1" stroke-linecap="round"/><circle r="2" fill="white"/></g>
          <g class="sparkle s4" transform="translate(1400,430)"><line x1="0" y1="-6" x2="0" y2="6" stroke="white" stroke-width="1.5" stroke-linecap="round"/><line x1="-6" y1="0" x2="6" y2="0" stroke="white" stroke-width="1.5" stroke-linecap="round"/><line x1="-3.5" y1="-3.5" x2="3.5" y2="3.5" stroke="rgba(255,252,200,0.6)" stroke-width="0.9" stroke-linecap="round"/><line x1="-3.5" y1="3.5" x2="3.5" y2="-3.5" stroke="rgba(255,252,200,0.6)" stroke-width="0.9" stroke-linecap="round"/><circle r="1.6" fill="white"/></g>
          <g class="sparkle s5" transform="translate(1470,448)"><line x1="0" y1="-7" x2="0" y2="7" stroke="white" stroke-width="1.6" stroke-linecap="round"/><line x1="-7" y1="0" x2="7" y2="0" stroke="white" stroke-width="1.6" stroke-linecap="round"/><line x1="-4" y1="-4" x2="4" y2="4" stroke="rgba(255,252,200,0.65)" stroke-width="1" stroke-linecap="round"/><line x1="-4" y1="4" x2="4" y2="-4" stroke="rgba(255,252,200,0.65)" stroke-width="1" stroke-linecap="round"/><circle r="1.8" fill="white"/></g>

          <!-- ══ SMOKE PUFFS ══ -->
          <circle class="smoke"    cx="252" cy="506" r="14" fill="white" /><circle class="smoke d1" cx="252" cy="506" r="14" fill="white" /><circle class="smoke d2" cx="252" cy="506" r="14" fill="white" />
          <circle class="smoke"    cx="295" cy="490" r="13" fill="white" /><circle class="smoke d1" cx="295" cy="490" r="13" fill="white" /><circle class="smoke d2" cx="295" cy="490" r="13" fill="white" />
          <circle class="smoke"    cx="440" cy="514" r="12" fill="white" /><circle class="smoke d1" cx="440" cy="514" r="12" fill="white" /><circle class="smoke d2" cx="440" cy="514" r="12" fill="white" />
          <circle class="smoke bio"    cx="902" cy="614" r="13" fill="rgba(240,240,235,0.95)" /><circle class="smoke bio d1" cx="902" cy="614" r="13" fill="rgba(240,240,235,0.95)" /><circle class="smoke bio d2" cx="902" cy="614" r="13" fill="rgba(240,240,235,0.95)" />
          <circle class="smoke bio"    cx="850" cy="636" r="11" fill="rgba(235,235,228,0.9)" /><circle class="smoke bio d1" cx="850" cy="636" r="11" fill="rgba(235,235,228,0.9)" /><circle class="smoke bio d2" cx="850" cy="636" r="11" fill="rgba(235,235,228,0.9)" />
          <circle class="smoke geo"    cx="1396" cy="662" r="15" fill="rgba(235,248,255,0.95)" /><circle class="smoke geo d1" cx="1396" cy="662" r="15" fill="rgba(235,248,255,0.95)" /><circle class="smoke geo d2" cx="1396" cy="662" r="15" fill="rgba(235,248,255,0.95)" />
          <circle class="smoke geo"    cx="1496" cy="678" r="13" fill="rgba(230,245,255,0.9)" /><circle class="smoke geo d1" cx="1496" cy="678" r="13" fill="rgba(230,245,255,0.9)" /><circle class="smoke geo d2" cx="1496" cy="678" r="13" fill="rgba(230,245,255,0.9)" />
          <circle class="smoke geo"    cx="1314" cy="690" r="12" fill="rgba(232,246,255,0.88)" /><circle class="smoke geo d1" cx="1314" cy="690" r="12" fill="rgba(232,246,255,0.88)" /><circle class="smoke geo d2" cx="1314" cy="690" r="12" fill="rgba(232,246,255,0.88)" />
        </g>

        <!-- ══ HOTSPOTS ══ -->
        <g v-for="island in islands" :key="island.key"
           class="hotspot"
           :class="{ 'is-active': activeIsland === island.key }"
           tabindex="0" role="button" :aria-label="island.label"
           @click="handleClick(island.key)"
           @mouseenter="(e) => showTooltip(e, island)"
           @mousemove="moveTooltip"
           @mouseleave="hideTooltip"
           @keydown.enter.prevent="handleClick(island.key)"
           @keydown.space.prevent="handleClick(island.key)">
          <path :d="island.path" />
        </g>
      </svg>

      <!-- ══ MOVERS ══ -->
      <div class="mover-layer">
        <canvas ref="wakeCanvasRef"
                style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;"></canvas>
        <img ref="boatRef" class="mover"
             src="/energy-map-demo/movers/sailboat-west.png"
             style="width:4%;top:84%;left:102%" alt=""/>
        <img ref="boatCenterRef" class="mover"
             src="/energy-map-demo/movers/sailboat-west.png"
             style="width:4.5%;top:58%;left:-10%" alt=""/>
        <img class="mover mover--dolphin-jump"
             src="/energy-map-demo/cutouts-final/dolphin-center-left.png"
             style="--x:41%;--y:52%;--w:4.5%;--speed:9s" alt=""/>
        <img class="mover mover--dolphin-jump-left"
             src="/energy-map-demo/cutouts-final/dolphin-center-left.png"
             style="--x:68%;--y:50%;--w:4%;--speed:9s;--delay:-4.5s" alt=""/>
      </div>

      <!-- Tooltip -->
      <div class="em-tooltip"
           :class="{ 'is-visible': tooltipVisible }"
           :style="{ left: tooltipX + '%', top: tooltipY + '%' }">
        {{ tooltipLabel }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({ activeKey: { type: String, default: null } })
const emit  = defineEmits(['select-energy'])

// ── Island definitions ──
// tip: tooltip anchor position as % of map size, placed just outside the island
const islands = [
  { key: 'wind',        label: '風力島',   tip: { x: 23.3, y: 47.0 }, path: 'M70 265 L250 134 L489 94 L664 216 L710 354 L598 421 L378 414 L178 355 Z' },
  { key: 'hydro',       label: '水力島',   tip: { x: 54.5, y: 43.5 }, path: 'M682 200 L842 60 L1068 58 L1234 191 L1242 332 L1110 391 L860 382 L706 306 Z' },
  { key: 'solar',       label: '太陽能島', tip: { x: 83.6, y: 29.8 }, path: 'M1182 381 L1304 314 L1450 300 L1610 380 L1618 486 L1490 544 L1276 514 L1176 454 Z' },
  { key: 'nuclear',     label: '核能島',   tip: { x: 19.7, y: 77.6 }, path: 'M105 548 L232 470 L391 488 L535 548 L558 658 L439 710 L226 708 L100 632 Z' },
  { key: 'biomass',     label: '生質能島', tip: { x: 46.3, y: 59.8 }, path: 'M548 687 L681 611 L895 582 L1031 656 L1007 819 L854 889 L636 839 L518 760 Z' },
  { key: 'geothermal',  label: '地熱島',   tip: { x: 80.3, y: 58.9 }, path: 'M1080 684 L1220 570 L1415 573 L1584 646 L1607 766 L1475 841 L1214 829 L1082 760 Z' },
]

const keyMap = { geothermal: 'geo' }

// activeIsland mirrors the parent's selectedType so it clears when modal closes
const activeIsland   = computed(() => props.activeKey)
const tooltipVisible = ref(false)
const tooltipLabel   = ref('')
const tooltipX       = ref(0)
const tooltipY       = ref(0)

function handleClick(key) {
  activeIsland.value = key
  emit('select-energy', keyMap[key] ?? key)
}
function showTooltip(e, island) {
  tooltipLabel.value   = island.label
  tooltipX.value       = island.tip.x
  tooltipY.value       = island.tip.y
  tooltipVisible.value = true
}
function moveTooltip() {}
function hideTooltip() {
  tooltipVisible.value = false
}

// ── Refs ──
const mapFrameRef      = ref(null)
const turbinesGroupRef = ref(null)
const wakeCanvasRef    = ref(null)
const boatRef          = ref(null)
const boatCenterRef    = ref(null)

let rafId       = null
let isVisible   = true
let observer    = null

onMounted(() => {
  // ── 風扇：DOM inject to bypass Vue compiler ──
  if (turbinesGroupRef.value) {
    const svgNS = 'http://www.w3.org/2000/svg'
    const turbines = [
      { x: 390, y: 111, s: 1,    dur: '5.0s' },
      { x: 501, y: 192, s: 1,    dur: '4.6s' },
      { x: 588, y: 283, s: 0.78, dur: '5.4s' },
      { x: 321, y: 163, s: 0.58, dur: '6.0s' },
      { x: 453, y: 153, s: 0.54, dur: '5.8s' },
    ]
    turbines.forEach(({ x, y, s, dur }) => {
      const outer = document.createElementNS(svgNS, 'g')
      outer.setAttribute('transform', s === 1 ? `translate(${x},${y})` : `translate(${x},${y}) scale(${s})`)
      const inner = document.createElementNS(svgNS, 'g')
      const anim = document.createElementNS(svgNS, 'animateTransform')
      anim.setAttribute('attributeName', 'transform')
      anim.setAttribute('type', 'rotate')
      anim.setAttribute('from', '0 0 0')
      anim.setAttribute('to', '360 0 0')
      anim.setAttribute('dur', dur)
      anim.setAttribute('repeatCount', 'indefinite')
      inner.appendChild(anim)
      ;[[0,0,0,-58],[0,0,50,29],[0,0,-50,29]].forEach(([x1,y1,x2,y2]) => {
        const line = document.createElementNS(svgNS, 'line')
        line.setAttribute('x1', x1); line.setAttribute('y1', y1)
        line.setAttribute('x2', x2); line.setAttribute('y2', y2)
        line.setAttribute('stroke', '#fffefa')
        line.setAttribute('stroke-width', '9')
        line.setAttribute('stroke-linecap', 'round')
        inner.appendChild(line)
      })
      const hub = document.createElementNS(svgNS, 'circle')
      hub.setAttribute('cx', '0'); hub.setAttribute('cy', '0'); hub.setAttribute('r', '10')
      hub.setAttribute('fill', '#fffefa')
      hub.setAttribute('stroke', '#dce8ea'); hub.setAttribute('stroke-width', '3')
      inner.appendChild(hub)
      outer.appendChild(inner)
      turbinesGroupRef.value.appendChild(outer)
    })
  }

  // ── Canvas & particles ──
  const canvas = wakeCanvasRef.value
  const particles = []

  if (canvas) {
    window._wakeEmit = function (cx, cy, dirX, boatPct) {
      const W = canvas.width, H = canvas.height
      if (!W || !H) return
      const bw = boatPct / 100 * W
      // emit 2 particles instead of 3
      for (let i = 0; i < 2; i++) {
        const side   = i === 0 ? -1 : 1
        const spread = side * bw * 0.22
        const vx = -dirX * (0.06 + Math.random() * 0.05) * W / 100
        const vy = side * (0.04 + Math.random() * 0.06) * H / 100
        particles.push({
          x: cx / 100 * W, y: cy / 100 * H + spread,
          vx, vy,
          r: bw * (0.04 + Math.random() * 0.05),
          alpha: 0.32 + Math.random() * 0.12,
          life: 0, maxLife: 500 + Math.random() * 300,
        })
      }
    }
  }

  function resizeCanvas() {
    if (!canvas) return
    const W = canvas.offsetWidth, H = canvas.offsetHeight
    if (W > 0 && H > 0 && (canvas.width !== W || canvas.height !== H)) {
      canvas.width = W; canvas.height = H
    }
  }

  const NUCLEAR_POLY = [
    [105,548],[232,470],[391,488],[535,548],
    [558,658],[439,710],[226,708],[100,632]
  ].map(([x,y]) => [x/1672, y/941])

  function clipExcludeNuclear(ctx, W, H) {
    ctx.beginPath()
    ctx.rect(0, 0, W, H)
    const pts = NUCLEAR_POLY
    ctx.moveTo(pts[0][0]*W, pts[0][1]*H)
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0]*W, pts[i][1]*H)
    ctx.closePath()
    ctx.clip('evenodd')
  }

  // ── Waterfall state ──
  const wf1 = document.getElementById('wf1-pat')
  const wf2 = document.getElementById('wf2-pat')
  const wf3 = document.getElementById('wf3-pat')
  const wf4 = document.getElementById('wf4-pat')
  let wfT = 0

  // ── Center boat state ──
  const boatC = boatCenterRef.value
  function getBoatCY(x) { return x < 30 ? 40 : 40 + 0.20 * (x - 30) }
  const bcX0 = -10, bcSpeed = 0.032, bcWAmp = 0.12, bcWFreq = 0.38, bcMaxRot = 0.8
  let bcX = bcX0

  // ── Small boat state ──
  const boatS = boatRef.value
  const bsBaseY = 84.0, bsSpeed = 0.055, bsWAmp = 0.28, bsWFreq = 0.7, bsMaxRot = 1.2
  let bsX = 102

  // ── Single merged RAF loop ──
  let lastTs = null
  let frame  = 0

  function tick(ts) {
    if (!isVisible) { rafId = requestAnimationFrame(tick); return }

    const dt = lastTs ? Math.min((ts - lastTs) / 1000, 0.1) : 0.016
    lastTs = ts
    frame++
    const t = ts / 1000

    // Waterfall
    wfT += 0.62
    const wfO = (wfT % 20).toFixed(2)
    if (wf1) wf1.setAttribute('patternTransform', `rotate(21.4) translate(0 ${wfO})`)
    if (wf2) wf2.setAttribute('patternTransform', `rotate(7.1)  translate(0 ${wfO})`)
    if (wf3) wf3.setAttribute('patternTransform', `rotate(4.8)  translate(0 ${wfO})`)
    if (wf4) wf4.setAttribute('patternTransform', `rotate(14.0) translate(0 ${wfO})`)

    // Center boat
    bcX += bcSpeed * dt * 60
    if (bcX > 112) bcX = bcX0
    const bcY  = getBoatCY(bcX)
    const bcYt = bcY + Math.sin(t * bcWFreq) * bcWAmp
    const bcRock  = Math.sin(t * bcWFreq * 0.6 + 0.8) * bcMaxRot
    const bcAngle = bcX < 30 ? (-1.5 + bcRock) : (2 + bcRock)
    if (boatC) {
      boatC.style.left      = bcX + '%'
      boatC.style.top       = bcYt + '%'
      boatC.style.transform = `scaleX(-1) rotate(${bcAngle.toFixed(2)}deg)`
    }
    if (frame % 3 === 0 && window._wakeEmit) window._wakeEmit(bcX, bcYt + 11, 1, 4.5)

    // Small boat
    bsX -= bsSpeed * dt * 60
    if (bsX < -12) bsX = 102
    const bsY = bsBaseY + Math.sin(t * bsWFreq) * bsWAmp
    if (boatS) {
      boatS.style.left      = bsX + '%'
      boatS.style.width     = '4%'
      boatS.style.top       = bsY + '%'
      boatS.style.transform = `rotate(${(Math.sin(t * bsWFreq * 0.65 + 1) * bsMaxRot).toFixed(2)}deg)`
    }
    if (frame % 3 === 0 && window._wakeEmit) window._wakeEmit(bsX + 4, bsY + 10, -1, 4.0)

    // Wake particles
    if (canvas) {
      resizeCanvas()
      const W = canvas.width, H = canvas.height
      if (W && H) {
        const dtMs = Math.min(ts - (lastTs * 1000 - dt * 1000), 50)
        const ctx  = canvas.getContext('2d')
        ctx.clearRect(0, 0, W, H)
        ctx.save()
        clipExcludeNuclear(ctx, W, H)
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i]
          p.life += 16
          if (p.life >= p.maxLife) { particles.splice(i, 1); continue }
          const frac  = p.life / p.maxLife
          p.x += p.vx * (1 - frac * 0.7)
          p.y += p.vy * (1 - frac * 0.7)
          const rScale = frac < 0.3 ? (1 + frac * 1.5) : (1.45 - frac * 1.1)
          const r = Math.max(0.5, p.r * rScale)
          const a = p.alpha * (1 - frac) * (1 - frac)
          ctx.beginPath()
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255,255,255,${a.toFixed(3)})`
          ctx.fill()
        }
        ctx.restore()
      }
    }

    rafId = requestAnimationFrame(tick)
  }

  rafId = requestAnimationFrame(tick)

  // ── IntersectionObserver: pause RAF when off-screen ──
  if (mapFrameRef.value && typeof IntersectionObserver !== 'undefined') {
    observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting },
      { threshold: 0.01 }
    )
    observer.observe(mapFrameRef.value)
  }
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  if (observer) observer.disconnect()
  window._wakeEmit = null
})
</script>

<style scoped>
.energy-map-wrap {
  width: 100%;
}

.map-frame {
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  background: #62cfd4;
  box-shadow: 0 18px 40px rgba(37, 69, 94, 0.24);
  aspect-ratio: 1672 / 941;
  will-change: transform;
  contain: layout style;
}

.map-frame > img,
.map-layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.map-frame > img {
  display: block;
  object-fit: cover;
}

.map-layer { overflow: visible; }

canvas { will-change: transform; }

/* ── Movers ── */
.mover-layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.mover-layer img {
  position: absolute;
  inset: unset;
  width: var(--w, 8%);
  height: auto;
  left: var(--x, 0);
  top: var(--y, 0);
}

/* ── Dolphins ── */
.mover--dolphin-jump {
  animation: dolphin-jump var(--speed, 9s) linear infinite;
}
.mover--dolphin-jump-left {
  animation: dolphin-jump-left var(--speed, 9s) linear infinite;
  animation-delay: var(--delay, 0s);
}
@keyframes dolphin-jump {
  0%        { transform: translate(  0px,  14px) rotate(-28deg); opacity: 0;   }
  1%        { transform: translate(  4px,   5px) rotate(-20deg); opacity: 1;   }
  4%        { transform: translate( 14px,  -6px) rotate(-11deg); opacity: 1;   }
  7%        { transform: translate( 26px, -16px) rotate( -3deg); opacity: 1;   }
  9%        { transform: translate( 34px, -20px) rotate(  0deg); opacity: 1;   }
  12%       { transform: translate( 46px, -15px) rotate( 20deg); opacity: 1;   }
  15%       { transform: translate( 58px,  -3px) rotate( 42deg); opacity: 1;   }
  17%       { transform: translate( 66px,   5px) rotate( 58deg); opacity: 0.5; }
  18%       { transform: translate( 70px,  14px) rotate( 70deg); opacity: 0;   }
  19%, 100% { transform: translate(  0px,  14px) rotate(-28deg); opacity: 0;   }
}
@keyframes dolphin-jump-left {
  0%        { transform: scaleX(-1) translate(  0px,  14px) rotate(-28deg); opacity: 0;   }
  1%        { transform: scaleX(-1) translate(  4px,   5px) rotate(-20deg); opacity: 1;   }
  4%        { transform: scaleX(-1) translate( 14px,  -6px) rotate(-11deg); opacity: 1;   }
  7%        { transform: scaleX(-1) translate( 26px, -16px) rotate( -3deg); opacity: 1;   }
  9%        { transform: scaleX(-1) translate( 34px, -20px) rotate(  0deg); opacity: 1;   }
  12%       { transform: scaleX(-1) translate( 46px, -15px) rotate( 20deg); opacity: 1;   }
  15%       { transform: scaleX(-1) translate( 58px,  -3px) rotate( 42deg); opacity: 1;   }
  17%       { transform: scaleX(-1) translate( 66px,   5px) rotate( 58deg); opacity: 0.5; }
  18%       { transform: scaleX(-1) translate( 70px,  14px) rotate( 70deg); opacity: 0;   }
  19%, 100% { transform: scaleX(-1) translate(  0px,  14px) rotate(-28deg); opacity: 0;   }
}

/* ── Hotspots ── */
.hotspot { cursor: pointer; outline: none; }
.hotspot path {
  fill: rgba(255, 245, 160, 0.02);
  stroke: transparent;
  stroke-width: 8;
  transition: fill 0.18s ease, filter 0.18s ease;
}
.hotspot:hover path,
.hotspot:focus path,
.hotspot.is-active path {
  fill: rgba(200, 235, 255, 0.15);
  stroke: none;
  filter: drop-shadow(0 0 18px rgba(180, 230, 255, 0.75)) drop-shadow(0 0 6px rgba(255,255,255,0.5));
}

/* ── Turbines ── */
.blade-line {
  stroke: #fffefa;
  stroke-width: 9;
  stroke-linecap: round;
  filter: drop-shadow(0 2px 2px rgba(72, 103, 116, 0.32));
}
.blade-hub {
  fill: #fffefa;
  stroke: #dce8ea;
  stroke-width: 3;
}

/* ── Smoke ── */
.smoke {
  opacity: 0;
  animation: smoke-rise 3.4s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: center;
  filter: url(#smoke-blur);
}
.smoke.geo { animation-duration: 3.8s; }
.smoke.bio { animation-duration: 3.1s; }
.smoke.d1  { animation-delay: 1.13s; }
.smoke.d2  { animation-delay: 2.27s; }

/* ── Hydro ripple ── */
.ripple {
  fill: none;
  stroke: rgba(180, 245, 255, 0.7);
  stroke-width: 2.5;
}

/* ── Solar ── */
.sun-disc {
  fill: #ffe066;
  animation: sun-disc-pulse 2.6s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: center;
}
.sun-halo {
  fill: rgba(255, 218, 60, 0.22);
  animation: sun-disc-pulse 2.6s ease-in-out infinite reverse;
  transform-box: fill-box;
  transform-origin: center;
}
.sun-rays-group {
  animation: sun-rays-rotate 14s linear infinite;
  transform-box: fill-box;
  transform-origin: center;
}
.sun-ray {
  stroke: #ffe566;
  stroke-linecap: round;
  opacity: 0.85;
}
.sparkle        { opacity: 0; animation: sparkle-appear 3.8s ease-in-out infinite; }
.sparkle.s2     { animation-delay: -0.76s; }
.sparkle.s3     { animation-delay: -1.52s; }
.sparkle.s4     { animation-delay: -2.28s; }
.sparkle.s5     { animation-delay: -3.04s; }

/* ── Tooltip ── */
.em-tooltip {
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  padding: 5px 14px;
  border-radius: 999px;
  background: rgba(20, 30, 48, 0.82);
  color: #e8f4ff;
  font-size: 0.82rem;
  font-family: 'Noto Sans TC', 'Microsoft JhengHei', sans-serif;
  font-weight: 500;
  letter-spacing: 0.06em;
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 12px rgba(0,0,0,0.25);
  opacity: 0;
  transition: opacity 0.14s ease;
  white-space: nowrap;
  z-index: 10;
}
.em-tooltip.is-visible { opacity: 1; }

/* ── Keyframes ── */
@keyframes smoke-rise {
  0%   { opacity: 0;    transform: translateY(0)     scale(0.35); }
  18%  { opacity: 0.75; }
  70%  { opacity: 0.42; }
  100% { opacity: 0;    transform: translateY(-62px) scale(2.2);  }
}
@keyframes sun-disc-pulse {
  0%, 100% { transform: scale(1);   opacity: 0.88; }
  50%      { transform: scale(1.1); opacity: 1;    }
}
@keyframes sun-rays-rotate {
  to { transform: rotate(45deg); }
}
@keyframes sparkle-appear {
  0%,  8%  { opacity: 0; }
  20%, 35% { opacity: 1; }
  50%, 100%{ opacity: 0; }
}
@keyframes ocean-glint {
  0%, 100% { opacity: 0;    transform: scale(0.4); }
  40%, 60% { opacity: 0.82; transform: scale(1);   }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}
</style>
