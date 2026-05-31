<script setup>
import transmissionTower from '@/assets/energy/transmission-tower.svg'
</script>

<template>
  <article class="nuc" aria-label="核能發電原理動畫">

    <div class="nuc-scene">

      <!-- ① 核燃料棒 -->
      <div class="nuc-node">
        <div class="nuc-badge nuc-badge-purple">核能</div>
        <div class="nuc-fuel" aria-hidden="true">
          <div class="nuc-fuel-glow"></div>
          <div class="nuc-assembly">
            <div class="nuc-assembly-cap"></div>
            <div class="nuc-rods">
              <div class="nuc-rod" style="--ri:1">
                <span class="nuc-pellet" style="--pi:1"></span>
                <span class="nuc-pellet" style="--pi:2"></span>
                <span class="nuc-pellet" style="--pi:3"></span>
                <span class="nuc-pellet" style="--pi:4"></span>
                <span class="nuc-pellet" style="--pi:5"></span>
              </div>
              <div class="nuc-rod" style="--ri:2">
                <span class="nuc-pellet" style="--pi:2"></span>
                <span class="nuc-pellet" style="--pi:3"></span>
                <span class="nuc-pellet" style="--pi:4"></span>
                <span class="nuc-pellet" style="--pi:5"></span>
                <span class="nuc-pellet" style="--pi:1"></span>
              </div>
              <div class="nuc-rod" style="--ri:3">
                <span class="nuc-pellet" style="--pi:3"></span>
                <span class="nuc-pellet" style="--pi:4"></span>
                <span class="nuc-pellet" style="--pi:5"></span>
                <span class="nuc-pellet" style="--pi:1"></span>
                <span class="nuc-pellet" style="--pi:2"></span>
              </div>
              <div class="nuc-rod" style="--ri:1">
                <span class="nuc-pellet" style="--pi:4"></span>
                <span class="nuc-pellet" style="--pi:5"></span>
                <span class="nuc-pellet" style="--pi:1"></span>
                <span class="nuc-pellet" style="--pi:2"></span>
                <span class="nuc-pellet" style="--pi:3"></span>
              </div>
            </div>
            <div class="nuc-assembly-base"></div>
          </div>
          <div class="nuc-radiation-shimmer"></div>
        </div>
        <p class="nuc-lbl">核燃料棒</p>
      </div>

      <!-- 連接①→② 核分裂連鎖 -->
      <div class="nuc-conn">
        <div class="nuc-badge nuc-badge-orange">熱能</div>
        <div class="nuc-fission-wrap">
          <svg class="nuc-fission-svg" viewBox="0 0 200 40" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <marker id="nuc-farr" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto" markerUnits="userSpaceOnUse">
                <path d="M2 2L7 5L2 8" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </marker>
            </defs>
            <rect x="0" y="10" width="200" height="20" rx="10" fill="rgba(254,215,170,.28)"/>
            <rect x="4" y="12.5" width="192" height="3" rx="1.5" fill="rgba(255,255,255,.4)"/>
            <path class="nuc-fflow" d="M14 20 L186 20"
              stroke="#f97316" stroke-width="5" stroke-dasharray="10 8"
              stroke-linecap="round" fill="none" marker-end="url(#nuc-farr)"/>
          </svg>
          <span class="nuc-conn-lbl">核分裂連鎖</span>
        </div>
      </div>

      <!-- ② 核反應爐 -->
      <div class="nuc-node">
        <div class="nuc-badge nuc-badge-amber">熱能</div>
        <div class="nuc-reactor-wrap">
          <div class="nuc-reactor-body">
            <div class="nuc-vessel-cap"></div>
            <div class="nuc-vessel-stripe"></div>
            <div class="nuc-core-glow"></div>
            <svg class="nuc-atom-svg" viewBox="-52 -52 104 104" aria-hidden="true">
              <defs>
                <radialGradient id="nuc-ngrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#fce7f3"/>
                  <stop offset="45%" stop-color="#f472b6"/>
                  <stop offset="100%" stop-color="#be185d"/>
                </radialGradient>
                <filter id="nuc-eglow-f" x="-120%" y="-120%" width="340%" height="340%">
                  <feGaussianBlur stdDeviation="2.5" result="b"/>
                  <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <path id="nuc-op1" d="M -44 0 A 44 17 0 1 1 44 0 A 44 17 0 1 1 -44 0"/>
              </defs>
              <ellipse rx="44" ry="17" fill="none" stroke="rgba(244,114,182,.5)" stroke-width="2"/>
              <ellipse rx="44" ry="17" fill="none" stroke="rgba(244,114,182,.5)" stroke-width="2" transform="rotate(60)"/>
              <ellipse rx="44" ry="17" fill="none" stroke="rgba(244,114,182,.5)" stroke-width="2" transform="rotate(120)"/>
              <circle r="4.5" fill="#f9a8d4" filter="url(#nuc-eglow-f)">
                <animateMotion dur="2.4s" repeatCount="indefinite"><mpath href="#nuc-op1"/></animateMotion>
              </circle>
              <g transform="rotate(60)">
                <circle r="4.5" fill="#f9a8d4" filter="url(#nuc-eglow-f)">
                  <animateMotion dur="3.1s" repeatCount="indefinite" begin="-0.8s"><mpath href="#nuc-op1"/></animateMotion>
                </circle>
              </g>
              <g transform="rotate(120)">
                <circle r="4.5" fill="#f9a8d4" filter="url(#nuc-eglow-f)">
                  <animateMotion dur="2.8s" repeatCount="indefinite" begin="-1.4s"><mpath href="#nuc-op1"/></animateMotion>
                </circle>
              </g>
              <circle r="8" fill="url(#nuc-ngrad)" class="nuc-nucleus-anim"/>
            </svg>
            <div class="nuc-coolant-flow" aria-hidden="true">
              <span class="nuc-cdot" style="--cd:0s"></span>
              <span class="nuc-cdot" style="--cd:.5s"></span>
              <span class="nuc-cdot" style="--cd:1s"></span>
            </div>
          </div>
        </div>
        <p class="nuc-lbl">核反應爐</p>
      </div>

      <!-- 連接②→③ 蒸汽管 -->
      <div class="nuc-conn">
        <div class="nuc-badge nuc-badge-cyan">動能</div>
        <div class="nuc-steam-wrap">
          <svg class="nuc-steam-svg" viewBox="0 0 200 40" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <marker id="nuc-sarr" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto" markerUnits="userSpaceOnUse">
                <path d="M2 2L7 5L2 8" fill="none" stroke="#67e8f9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </marker>
            </defs>
            <rect x="0" y="10" width="200" height="20" rx="10" fill="rgba(207,250,254,.32)"/>
            <rect x="4" y="12.5" width="192" height="3" rx="1.5" fill="rgba(255,255,255,.55)"/>
            <path class="nuc-sflow" d="M14 20 L186 20"
              stroke="#67e8f9" stroke-width="5" stroke-dasharray="10 8"
              stroke-linecap="round" fill="none" marker-end="url(#nuc-sarr)"/>
          </svg>
          <span class="nuc-conn-lbl">蒸汽管</span>
        </div>
      </div>

      <!-- ③ 蒸汽渦輪 -->
      <div class="nuc-node">
        <div class="nuc-badge nuc-badge-gray">機械能</div>
        <div class="nuc-turbine-wrap">
          <div class="nuc-turbine">
            <span class="nuc-turbine-dot nuc-turbine-inlet"></span>
            <span class="nuc-turbine-dot nuc-turbine-outlet"></span>
            <span class="nuc-t-ring"></span>
            <span class="nuc-t-ring nuc-t-ring-2"></span>
            <div class="nuc-rotor">
              <span v-for="n in 6" :key="n" class="nuc-blade" :style="`--r:${(n-1)*60}deg`"></span>
              <span class="nuc-hub"></span>
            </div>
          </div>
        </div>
        <p class="nuc-lbl">蒸汽渦輪</p>
      </div>

      <!-- 連接③→④ 傳動軸 -->
      <div class="nuc-conn">
        <div class="nuc-badge-spacer"></div>
        <div class="nuc-shaft-wrap">
          <div class="nuc-shaft-track">
            <span class="nuc-sdot" style="--sd:0s"></span>
            <span class="nuc-sdot" style="--sd:.55s"></span>
            <span class="nuc-sdot" style="--sd:1.1s"></span>
          </div>
          <span class="nuc-conn-lbl">傳動軸</span>
        </div>
      </div>

      <!-- ④ 發電機 -->
      <div class="nuc-node">
        <div class="nuc-badge nuc-badge-yellow">電能</div>
        <div class="nuc-gen-wrap">
          <div class="nuc-gen-body">
            <span class="nuc-gen-dot nuc-gen-inlet"></span>
            <span class="nuc-gen-dot nuc-gen-terminal"></span>
            <div class="nuc-coils" aria-hidden="true">
              <span class="nuc-coil" style="--cd:0s"></span>
              <span class="nuc-coil" style="--cd:.3s"></span>
              <span class="nuc-coil" style="--cd:.6s"></span>
              <span class="nuc-coil" style="--cd:.9s"></span>
            </div>
            <div class="nuc-gen-core">
              <svg viewBox="0 0 20 28" class="nuc-bolt-svg" aria-hidden="true">
                <path class="nuc-bolt" d="M13 0 L4 15H11L8 28L20 12H13Z"/>
              </svg>
            </div>
            <div class="nuc-field-rings" aria-hidden="true">
              <span class="nuc-ring" style="--ri:0"></span>
              <span class="nuc-ring" style="--ri:1"></span>
            </div>
          </div>
        </div>
        <p class="nuc-lbl">發電機</p>
      </div>

      <!-- 連接④→⑤ 電力輸出 -->
      <div class="nuc-conn">
        <div class="nuc-badge-spacer"></div>
        <div class="nuc-cable-wrap">
          <svg class="nuc-cable-svg" viewBox="0 0 200 56" preserveAspectRatio="none" overflow="visible" aria-hidden="true">
            <defs>
              <filter id="nuc-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <path d="M2 28 Q100 10 198 28" stroke="rgba(250,204,21,.16)" stroke-width="14" fill="none" stroke-linecap="round"/>
            <path class="nuc-eflow" d="M2 28 Q100 10 198 28" stroke="#facc15" stroke-width="4" stroke-dasharray="12 9" fill="none" stroke-linecap="round"/>
            <circle class="nuc-edot" r="5.5" fill="#facc15" filter="url(#nuc-glow)"/>
            <circle class="nuc-edot nuc-edot2" r="5.5" fill="#facc15" filter="url(#nuc-glow)"/>
          </svg>
          <span class="nuc-conn-lbl">電力輸出</span>
        </div>
      </div>

      <!-- ⑤ 電網 -->
      <div class="nuc-node">
        <div class="nuc-badge-spacer"></div>
        <div class="nuc-grid-wrap">
          <span class="nuc-halo"></span>
          <img :src="transmissionTower" alt="" class="nuc-tower" aria-hidden="true"/>
          <span class="nuc-spark nuc-sp1" aria-hidden="true">⚡</span>
          <span class="nuc-spark nuc-sp2" aria-hidden="true">⚡</span>
        </div>
        <p class="nuc-lbl">電網</p>
      </div>

    </div>

    <!-- 能量轉換流程摘要 -->
    <div class="nuc-summary" aria-label="能量轉換流程">
      <span class="nuc-chip nuc-chip-purple">核能</span>
      <span class="nuc-sep">→</span>
      <span class="nuc-chip nuc-chip-orange">熱能</span>
      <span class="nuc-sep">→</span>
      <span class="nuc-chip nuc-chip-cyan">動能</span>
      <span class="nuc-sep">→</span>
      <span class="nuc-chip nuc-chip-gray">機械能</span>
      <span class="nuc-sep">→</span>
      <span class="nuc-chip nuc-chip-yellow">電能</span>
    </div>

  </article>
</template>

<style scoped>
/* ── Card ── */
.nuc {
  width: 100%;
  padding: 26px 26px 20px;
  border-radius: 26px;
  background:
    linear-gradient(rgba(100,40,180,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(100,40,180,.04) 1px, transparent 1px),
    linear-gradient(135deg, #faf5ff 0%, #ffffff 50%, #f8f0ff 100%);
  background-size: 32px 32px, 32px 32px, auto;
  border: 1px solid rgba(100,40,180,.15);
  box-shadow: 0 22px 52px rgba(15,23,42,.1);
}

/* ── Scene grid (9 columns) ── */
.nuc-scene {
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr 1fr 1fr 0.75fr 1.1fr 1.4fr 1fr;
  align-items: center;
  gap: 0;
  min-height: 240px;
}

.nuc-node,
.nuc-conn {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ── Badges ── */
.nuc-badge {
  display: inline-flex;
  align-items: center;
  height: 26px;
  margin-bottom: 10px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.8px;
  white-space: nowrap;
}
.nuc-badge-spacer { height: 26px; margin-bottom: 10px; }

.nuc-badge-purple { background: #ede9fe; color: #4c1d95; border: 1px solid rgba(109,40,217,.22); }
.nuc-badge-orange { background: #ffedd5; color: #c2410c; border: 1px solid rgba(249,115,22,.22); }
.nuc-badge-amber  { background: #fef3c7; color: #b45309; border: 1px solid rgba(245,158,11,.22); }
.nuc-badge-cyan   { background: #cffafe; color: #0891b2; border: 1px solid rgba(6,182,212,.22); }
.nuc-badge-gray   { background: #f1f5f9; color: #475569; border: 1px solid rgba(148,163,184,.22); }
.nuc-badge-yellow { background: #fef9c3; color: #a16207; border: 1px solid rgba(234,179,8,.22); }

.nuc-lbl {
  margin: 10px 0 0;
  font-size: 0.82rem;
  font-weight: 900;
  color: #0f172a;
  line-height: 1;
}
.nuc-conn-lbl {
  display: block;
  margin-top: 6px;
  font-size: 0.67rem;
  font-weight: 800;
  color: #94a3b8;
  letter-spacing: 0.3px;
  text-align: center;
  white-space: nowrap;
}

/* ═══ ① 核燃料棒 ════════════════════════════════════ */
.nuc-fuel {
  width: 88px;
  height: 120px;
  border-radius: 14px;
  background: linear-gradient(180deg, #0f0a1e 0%, #1a1035 55%, #120a28 100%);
  border: 1.5px solid rgba(109,40,217,.32);
  box-shadow: 0 0 0 1px rgba(60,10,120,.18), 0 18px 36px rgba(60,10,120,.22);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
}

.nuc-fuel-glow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: radial-gradient(ellipse at 50% 100%, rgba(252,231,243,.22) 0%, rgba(109,40,217,.08) 60%, transparent 100%);
  animation: nuc-fuel-pulse 2s ease-in-out infinite alternate;
  pointer-events: none;
}

/* 燃料組件外框 */
.nuc-assembly {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.nuc-assembly-cap,
.nuc-assembly-base {
  width: 60px;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(90deg, #475569 0%, #94a3b8 50%, #475569 100%);
  border: 1px solid rgba(148,163,184,.3);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.12);
}

.nuc-rods {
  display: flex;
  gap: 6px;
  align-items: stretch;
  padding: 0 4px;
}

.nuc-rod {
  width: 11px;
  height: 76px;
  border-radius: 3px;
  background: linear-gradient(180deg, #a78bfa 0%, #7c3aed 25%, #4c1d95 75%, #2e1065 100%);
  border: 1px solid rgba(196,181,253,.25);
  box-shadow: 0 0 10px rgba(109,40,217,.55), inset 1px 0 0 rgba(255,255,255,.12);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 6px 0;
  animation: nuc-rod-glow calc(1.6s + var(--ri) * 0.4s) ease-in-out infinite alternate;
}

.nuc-pellet {
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: radial-gradient(circle, #fce7f3 0%, #f472b6 50%, #be185d 100%);
  box-shadow: 0 0 5px rgba(244,114,182,.8);
  flex-shrink: 0;
  animation: nuc-pellet-glow calc(0.7s + var(--pi) * 0.12s) ease-in-out infinite alternate;
}

/* 輻射底部微光 */
.nuc-radiation-shimmer {
  position: absolute;
  bottom: 4px;
  left: 12px;
  right: 12px;
  height: 10px;
  border-radius: 50%;
  background: rgba(244,114,182,.22);
  filter: blur(4px);
  animation: nuc-fuel-pulse 1.4s ease-in-out infinite alternate;
}

/* ═══ ② 核反應爐 ══════════════════════════════════════ */
.nuc-reactor-wrap {
  position: relative;
  width: 96px;
}

.nuc-reactor-body {
  width: 96px;
  height: 116px;
  border-radius: 20px 20px 14px 14px;
  background: linear-gradient(180deg, #1a1730 0%, #252048 45%, #1a1730 100%);
  border: 1.5px solid rgba(109,40,217,.28);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.07),
    inset 0 -1px 0 rgba(0,0,0,.3),
    0 18px 36px rgba(60,10,120,.28);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 頂部壓力容器蓋 */
.nuc-vessel-cap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 18px;
  background: linear-gradient(180deg, rgba(167,139,250,.18) 0%, transparent 100%);
  border-bottom: 1px solid rgba(139,92,246,.2);
}

/* 容器側面強調條紋 */
.nuc-vessel-stripe {
  position: absolute;
  top: 18px;
  bottom: 18px;
  left: 8px;
  width: 3px;
  border-radius: 2px;
  background: linear-gradient(180deg, transparent 0%, rgba(139,92,246,.3) 30%, rgba(244,114,182,.25) 60%, transparent 100%);
}

.nuc-core-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 52%, rgba(244,114,182,.28) 0%, rgba(109,40,217,.12) 45%, transparent 70%);
  animation: nuc-core-pulse 1.2s ease-in-out infinite alternate;
  pointer-events: none;
}

/* 原子圖示 SVG */
.nuc-atom-svg {
  position: relative;
  z-index: 3;
  width: 84px;
  height: 84px;
  overflow: visible;
  filter: drop-shadow(0 0 8px rgba(244,114,182,.45));
}
.nuc-nucleus-anim {
  animation: nuc-nucleus-pulse 1s ease-in-out infinite alternate;
}

.nuc-coolant-flow {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 64px;
  height: 5px;
  border-radius: 3px;
  background: rgba(6,182,212,.1);
  border: 1px solid rgba(6,182,212,.15);
  overflow: hidden;
}
.nuc-cdot {
  position: absolute;
  top: 50%;
  left: -8%;
  width: 10px;
  height: 3px;
  border-radius: 2px;
  background: rgba(103,232,249,.75);
  transform: translateY(-50%);
  animation: nuc-coolant-move 1.4s linear infinite;
  animation-delay: var(--cd);
  display: block;
}


/* ═══ FISSION CONNECTOR ══════════════════════════════ */
.nuc-fission-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nuc-fission-svg { width: 100%; height: 40px; overflow: visible; }
.nuc-fflow { animation: nuc-fdash .85s linear infinite; }

/* ═══ STEAM PIPE ══════════════════════════════════════ */
.nuc-steam-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nuc-steam-svg { width: 100%; height: 40px; overflow: visible; }
.nuc-sflow { animation: nuc-sdash .9s linear infinite; }

/* ═══ ③ 蒸汽渦輪 ═════════════════════════════════════ */
.nuc-turbine-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nuc-turbine {
  position: relative;
  width: 104px;
  height: 104px;
  border-radius: 50%;
  background: rgba(255,255,255,.96);
  border: 9px solid rgba(6,182,212,.22);
  box-shadow: 0 0 0 2px rgba(6,182,212,.07), 0 18px 38px rgba(6,182,212,.18);
  display: grid;
  place-items: center;
  overflow: visible;
}
.nuc-turbine-dot {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #67e8f9;
  border: 3px solid #fff;
  box-shadow: 0 0 0 3px rgba(103,232,249,.25), 0 0 10px rgba(103,232,249,.5);
  z-index: 5;
  display: block;
}
.nuc-turbine-inlet  { left:  -8px; }
.nuc-turbine-outlet { right: -8px; background: #94a3b8; box-shadow: 0 0 0 3px rgba(148,163,184,.25); }

.nuc-rotor {
  position: relative;
  width: 74px;
  height: 74px;
  animation: nuc-spin 1.5s linear infinite;
}
.nuc-blade {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 13px;
  height: 30px;
  margin-left: -6.5px;
  margin-top: -30px;
  transform-origin: 50% 100%;
  transform: rotate(var(--r));
  border-radius: 7px 7px 3px 3px;
  background: linear-gradient(180deg, #ecfeff 0%, #22d3ee 100%);
  box-shadow: 0 2px 6px rgba(6,182,212,.22);
  display: block;
}
.nuc-hub {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: radial-gradient(circle, #fff 0%, #94a3b8 100%);
  border: 3px solid #e2e8f0;
  z-index: 2;
  display: block;
}
.nuc-t-ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(103,232,249,.35);
  width: 104px;
  height: 104px;
  animation: nuc-t-ring-expand 2s ease-out infinite;
  pointer-events: none;
  display: block;
}
.nuc-t-ring-2 { animation-delay: 1s; }
/* ═══ SHAFT ═══════════════════════════════════════════ */
.nuc-shaft-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
}
.nuc-shaft-track {
  position: relative;
  width: calc(100% + 20px);
  height: 12px;
  margin-left: -10px;
  margin-right: -10px;
  border-radius: 999px;
  background: linear-gradient(90deg, #cbd5e1 0%, #94a3b8 46%, #cbd5e1 100%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.52), 0 5px 12px rgba(15,23,42,.1);
  overflow: hidden;
}
.nuc-sdot {
  position: absolute;
  top: 50%;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,.88);
  transform: translateY(-50%);
  animation: nuc-sdot-move 1.65s linear infinite;
  animation-delay: var(--sd);
  display: block;
}

/* ═══ ④ 發電機 ═══════════════════════════════════════ */
.nuc-gen-wrap {
  position: relative;
  width: 118px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nuc-gen-body {
  width: 118px;
  height: 90px;
  border-radius: 18px;
  background: linear-gradient(145deg, #f8fafc, #f1f5f9);
  border: 1.5px solid rgba(100,116,139,.2);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.9), 0 18px 36px rgba(15,23,42,.12);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: visible;
}
.nuc-gen-dot {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 3px solid #fff;
  z-index: 3;
  display: block;
}
.nuc-gen-inlet    { left: -9px; background: #94a3b8; box-shadow: 0 0 0 3px rgba(148,163,184,.25); }
.nuc-gen-terminal { right: -9px; background: #facc15; box-shadow: 0 0 0 3px rgba(250,204,21,.25), 0 0 12px rgba(250,204,21,.55); animation: nuc-terminal-pulse 1.2s ease-in-out infinite; }

.nuc-coils {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 17px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 10px;
}
.nuc-coil {
  display: block;
  width: 9px;
  border-radius: 5px;
  height: 62%;
  background: rgba(250,204,21,.32);
  animation: nuc-coil-pulse 1.2s ease-in-out infinite;
  animation-delay: var(--cd);
}
.nuc-gen-core {
  position: relative;
  z-index: 2;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid rgba(250,204,21,.35);
  box-shadow: 0 0 20px rgba(250,204,21,.3);
  display: grid;
  place-items: center;
}
.nuc-bolt-svg { width: 20px; height: 26px; }
.nuc-bolt {
  fill: #facc15;
  filter: drop-shadow(0 0 5px rgba(250,204,21,.7));
  animation: nuc-bolt-flash 1.2s ease-in-out infinite;
}
.nuc-field-rings {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 17px;
  display: grid;
  place-items: center;
  pointer-events: none;
}
.nuc-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(250,204,21,.22);
  animation: nuc-ring-expand-y 1.8s ease-out infinite;
  animation-delay: calc(var(--ri) * .9s);
  display: block;
  width: 48px;
  height: 48px;
}

/* ═══ CABLE ═══════════════════════════════════════════ */
.nuc-cable-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nuc-cable-svg { width: 100%; height: 56px; overflow: visible; }
.nuc-eflow { animation: nuc-edash .8s linear infinite; }
.nuc-edot {
  offset-path: path('M2 28 Q100 10 198 28');
  animation: nuc-edot-move 1.2s linear infinite;
}
.nuc-edot2 { animation-delay: .6s; }

/* ═══ ⑤ 電網 ════════════════════════════════════════ */
.nuc-grid-wrap {
  position: relative;
  width: 96px;
  height: 136px;
}
.nuc-tower { width: 100%; height: 100%; object-fit: contain; position: relative; z-index: 1; }
.nuc-halo {
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translateX(-50%);
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(250,204,21,.28), transparent 70%);
  animation: nuc-halo-pulse 2s ease-in-out infinite;
  display: block;
}
.nuc-spark {
  position: absolute;
  font-size: .85rem;
  z-index: 2;
  animation: nuc-spark 2.4s ease-in-out infinite;
}
.nuc-sp1 { top: 6%;  left:  4%; animation-delay: 0s; }
.nuc-sp2 { top: 12%; right: 4%; animation-delay: 1.2s; }

/* ═══ SUMMARY BAR ════════════════════════════════════ */
.nuc-summary {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  padding: 11px 16px;
  border-radius: 16px;
  background: rgba(255,255,255,.72);
  border: 1px solid rgba(15,23,42,.07);
}
.nuc-chip {
  padding: 5px 14px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 900;
}
.nuc-sep { color: #94a3b8; font-size: 1rem; font-weight: 700; }
.nuc-chip-purple { background: #ede9fe; color: #4c1d95; }
.nuc-chip-orange { background: #ffedd5; color: #c2410c; }
.nuc-chip-cyan   { background: #cffafe; color: #0891b2; }
.nuc-chip-gray   { background: #f1f5f9; color: #475569; }
.nuc-chip-yellow { background: #fef9c3; color: #a16207; }

/* ═══ KEYFRAMES ══════════════════════════════════════ */
@keyframes nuc-fuel-pulse {
  from { opacity: 0.6; }
  to   { opacity: 1; }
}
@keyframes nuc-rod-glow {
  from { box-shadow: 0 0 6px rgba(109,40,217,.4), inset 0 1px 0 rgba(255,255,255,.12); }
  to   { box-shadow: 0 0 18px rgba(109,40,217,.8), 0 0 8px rgba(244,114,182,.35), inset 0 1px 0 rgba(255,255,255,.2); }
}
@keyframes nuc-pellet-glow {
  from { box-shadow: 0 0 3px rgba(244,114,182,.5); }
  to   { box-shadow: 0 0 8px rgba(244,114,182,1); }
}
@keyframes nuc-core-pulse {
  from { opacity: .7; }
  to   { opacity: 1; }
}
@keyframes nuc-nucleus-pulse {
  from { filter: drop-shadow(0 0 5px rgba(244,114,182,.6)) drop-shadow(0 0 10px rgba(244,114,182,.25)); }
  to   { filter: drop-shadow(0 0 12px rgba(244,114,182,1)) drop-shadow(0 0 24px rgba(244,114,182,.5)); }
}
@keyframes nuc-coolant-move {
  from { left: -10%; opacity: 0; }
  15%  { opacity: .9; }
  85%  { opacity: .9; }
  to   { left: 110%; opacity: 0; }
}

@keyframes nuc-fdash {
  from { stroke-dashoffset: 36; }
  to   { stroke-dashoffset: 0; }
}
@keyframes nuc-sdash {
  from { stroke-dashoffset: 36; }
  to   { stroke-dashoffset: 0; }
}
@keyframes nuc-spin { to { transform: rotate(360deg); } }
@keyframes nuc-t-ring-expand {
  0%   { transform: scale(1);    opacity: .55; }
  100% { transform: scale(1.38); opacity: 0; }
}
@keyframes nuc-sdot-move {
  from { left: -10%; opacity: 0; }
  15%  { opacity: 1; }
  85%  { opacity: 1; }
  to   { left: 110%; opacity: 0; }
}
@keyframes nuc-coil-pulse {
  0%,100% { opacity: .28; transform: scaleY(.86); background: rgba(250,204,21,.28); }
  50%     { opacity: 1;   transform: scaleY(1);   background: rgba(250,204,21,.72); }
}
@keyframes nuc-bolt-flash {
  0%,100% { opacity: .7;  filter: drop-shadow(0 0 4px rgba(250,204,21,.55)); }
  50%     { opacity: 1;   filter: drop-shadow(0 0 12px rgba(250,204,21,1)); }
}
@keyframes nuc-ring-expand-y {
  0%   { transform: scale(.9);  opacity: .5; }
  70%  { transform: scale(1.8); opacity: 0; }
  100% { transform: scale(1.8); opacity: 0; }
}
@keyframes nuc-terminal-pulse {
  0%,100% { box-shadow: 0 0 0 3px rgba(250,204,21,.25), 0 0 12px rgba(250,204,21,.4); }
  50%     { box-shadow: 0 0 0 6px rgba(250,204,21,.12), 0 0 20px rgba(250,204,21,.75); }
}
@keyframes nuc-edash {
  from { stroke-dashoffset: 42; }
  to   { stroke-dashoffset: 0; }
}
@keyframes nuc-edot-move {
  from { offset-distance: 0%;   opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  to   { offset-distance: 100%; opacity: 0; }
}
@keyframes nuc-halo-pulse {
  0%,100% { transform: translateX(-50%) scale(1);    opacity: .6; }
  50%     { transform: translateX(-50%) scale(1.38); opacity: 1; }
}
@keyframes nuc-spark {
  0%,100% { opacity: 0; transform: scale(.5) translateY(0); }
  20%,80% { opacity: 1; transform: scale(1)  translateY(-3px); }
  50%     { opacity: 1; transform: scale(1.2) translateY(-7px); }
}

/* ═══ RESPONSIVE ═════════════════════════════════════ */
@media (max-width: 900px) {
  .nuc { padding: 16px 14px 14px; }
  .nuc-scene {
    grid-template-columns: repeat(9, minmax(100px, 1fr));
    overflow-x: auto;
    padding-bottom: 10px;
  }
  .nuc-turbine  { width: 90px; height: 90px; }
  .nuc-rotor    { width: 62px; height: 62px; }
  .nuc-reactor-wrap { width: 82px; }
  .nuc-reactor-body { width: 82px; height: 104px; }
  .nuc-gen-body { width: 104px; height: 80px; }
  .nuc-gen-wrap { width: 104px; }
  .nuc-grid-wrap { width: 84px; height: 120px; }
}
</style>
