<script setup>
import transmissionTower from '@/assets/energy/transmission-tower.svg'
</script>

<template>
  <article class="geo" aria-label="地熱發電原理動畫">

    <div class="geo-scene">

      <!-- ① 地熱源 -->
      <div class="geo-node">
        <div class="geo-badge geo-badge-red">地熱能</div>
        <div class="geo-source">
          <div class="geo-source-layers">
            <div class="geo-layer geo-layer--top"></div>
            <div class="geo-layer geo-layer--mid"></div>
            <div class="geo-layer geo-layer--bot"></div>
          </div>
          <div class="geo-magma-glow"></div>
          <div class="geo-crack" aria-hidden="true">
            <div class="geo-crack-line geo-crack-line--a"></div>
            <div class="geo-crack-line geo-crack-line--b"></div>
          </div>
          <div class="geo-bubbles" aria-hidden="true">
            <span class="geo-bubble geo-b1"></span>
            <span class="geo-bubble geo-b2"></span>
            <span class="geo-bubble geo-b3"></span>
            <span class="geo-bubble geo-b4"></span>
            <span class="geo-bubble geo-b5"></span>
            <span class="geo-bubble geo-b6"></span>
            <span class="geo-bubble geo-b7"></span>
          </div>
        </div>
        <p class="geo-lbl">地熱源</p>
      </div>

      <!-- 連接①→② 鑽井取熱 -->
      <div class="geo-conn">
        <div class="geo-badge geo-badge-orange">熱能</div>
        <div class="geo-heat-flow-wrap">
          <svg class="geo-heat-flow-svg" viewBox="0 0 200 40" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <marker id="geo-harr" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto" markerUnits="userSpaceOnUse">
                <path d="M2 2L7 5L2 8" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </marker>
            </defs>
            <rect x="0" y="10" width="200" height="20" rx="10" fill="rgba(254,215,170,.28)"/>
            <rect x="4" y="12.5" width="192" height="3" rx="1.5" fill="rgba(255,255,255,.4)"/>
            <path class="geo-hflow" d="M14 20 L186 20"
              stroke="#f97316" stroke-width="5" stroke-dasharray="10 8"
              stroke-linecap="round" fill="none" marker-end="url(#geo-harr)"/>
          </svg>
          <span class="geo-conn-lbl">鑽井取熱</span>
        </div>
      </div>

      <!-- ② 蒸汽分離器 -->
      <div class="geo-node">
        <div class="geo-badge geo-badge-amber">熱能</div>
        <div class="geo-sep-wrap">
          <span class="geo-sep-outlet"></span>
          <div class="geo-sep-body">
            <div class="geo-sep-glow"></div>
            <div class="geo-sep-inlet-pipe"></div>
            <div class="geo-sep-steam" aria-hidden="true">
              <span class="geo-steam-wisp" style="--si:0"></span>
              <span class="geo-steam-wisp" style="--si:1"></span>
              <span class="geo-steam-wisp" style="--si:2"></span>
              <span class="geo-steam-wisp" style="--si:3"></span>
              <span class="geo-steam-puff" style="--sp:0"></span>
              <span class="geo-steam-puff" style="--sp:1"></span>
            </div>
            <div class="geo-sep-label-inner">分離器</div>
          </div>
        </div>
        <p class="geo-lbl">蒸汽分離器</p>
      </div>

      <!-- 連接②→③ 蒸汽管 -->
      <div class="geo-conn">
        <div class="geo-badge geo-badge-cyan">動能</div>
        <div class="geo-steam-wrap">
          <svg class="geo-steam-svg" viewBox="0 0 200 40" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <marker id="geo-sarr" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto" markerUnits="userSpaceOnUse">
                <path d="M2 2L7 5L2 8" fill="none" stroke="#67e8f9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </marker>
            </defs>
            <rect x="0" y="10" width="200" height="20" rx="10" fill="rgba(207,250,254,.32)"/>
            <rect x="4" y="12.5" width="192" height="3" rx="1.5" fill="rgba(255,255,255,.55)"/>
            <path class="geo-sflow" d="M14 20 L186 20"
              stroke="#67e8f9" stroke-width="5" stroke-dasharray="10 8"
              stroke-linecap="round" fill="none" marker-end="url(#geo-sarr)"/>
          </svg>
          <span class="geo-conn-lbl">蒸汽管</span>
        </div>
      </div>

      <!-- ③ 蒸汽渦輪 -->
      <div class="geo-node">
        <div class="geo-badge geo-badge-gray">機械能</div>
        <div class="geo-turbine-wrap">
          <div class="geo-turbine">
            <span class="geo-turbine-dot geo-turbine-inlet"></span>
            <span class="geo-turbine-dot geo-turbine-outlet"></span>
            <span class="geo-t-ring"></span>
            <span class="geo-t-ring geo-t-ring-2"></span>
            <div class="geo-rotor">
              <span v-for="n in 6" :key="n" class="geo-blade" :style="`--r:${(n-1)*60}deg`"></span>
              <span class="geo-hub"></span>
            </div>
          </div>
        </div>
        <p class="geo-lbl">蒸汽渦輪</p>
      </div>

      <!-- 連接③→④ 傳動軸 -->
      <div class="geo-conn">
        <div class="geo-badge-spacer"></div>
        <div class="geo-shaft-wrap">
          <div class="geo-shaft-track">
            <span class="geo-sdot" style="--sd:0s"></span>
            <span class="geo-sdot" style="--sd:.55s"></span>
            <span class="geo-sdot" style="--sd:1.1s"></span>
          </div>
          <span class="geo-conn-lbl">傳動軸</span>
        </div>
      </div>

      <!-- ④ 發電機 -->
      <div class="geo-node">
        <div class="geo-badge geo-badge-yellow">電能</div>
        <div class="geo-gen-wrap">
          <div class="geo-gen-body">
            <span class="geo-gen-dot geo-gen-inlet"></span>
            <span class="geo-gen-dot geo-gen-terminal"></span>
            <div class="geo-coils" aria-hidden="true">
              <span class="geo-coil" style="--cd:0s"></span>
              <span class="geo-coil" style="--cd:.3s"></span>
              <span class="geo-coil" style="--cd:.6s"></span>
              <span class="geo-coil" style="--cd:.9s"></span>
            </div>
            <div class="geo-gen-core">
              <svg viewBox="0 0 20 28" class="geo-bolt-svg" aria-hidden="true">
                <path class="geo-bolt" d="M13 0 L4 15H11L8 28L20 12H13Z"/>
              </svg>
            </div>
            <div class="geo-field-rings" aria-hidden="true">
              <span class="geo-ring" style="--ri:0"></span>
              <span class="geo-ring" style="--ri:1"></span>
            </div>
          </div>
        </div>
        <p class="geo-lbl">發電機</p>
      </div>

      <!-- 連接④→⑤ 電力輸出 -->
      <div class="geo-conn">
        <div class="geo-badge-spacer"></div>
        <div class="geo-cable-wrap">
          <svg class="geo-cable-svg" viewBox="0 0 200 56" preserveAspectRatio="none" overflow="visible" aria-hidden="true">
            <defs>
              <filter id="geo-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <path d="M2 28 Q100 10 198 28" stroke="rgba(250,204,21,.16)" stroke-width="14" fill="none" stroke-linecap="round"/>
            <path class="geo-eflow" d="M2 28 Q100 10 198 28" stroke="#facc15" stroke-width="4" stroke-dasharray="12 9" fill="none" stroke-linecap="round"/>
            <circle class="geo-edot" r="5.5" fill="#facc15" filter="url(#geo-glow)"/>
            <circle class="geo-edot geo-edot2" r="5.5" fill="#facc15" filter="url(#geo-glow)"/>
          </svg>
          <span class="geo-conn-lbl">電力輸出</span>
        </div>
      </div>

      <!-- ⑤ 電網 -->
      <div class="geo-node">
        <div class="geo-badge-spacer"></div>
        <div class="geo-grid-wrap">
          <span class="geo-halo"></span>
          <img :src="transmissionTower" alt="" class="geo-tower" aria-hidden="true"/>
          <span class="geo-spark geo-sp1" aria-hidden="true">⚡</span>
          <span class="geo-spark geo-sp2" aria-hidden="true">⚡</span>
        </div>
        <p class="geo-lbl">電網</p>
      </div>

    </div>

    <!-- 能量轉換流程摘要 -->
    <div class="geo-summary" aria-label="能量轉換流程">
      <span class="geo-chip geo-chip-red">地熱能</span>
      <span class="geo-sep-arrow">→</span>
      <span class="geo-chip geo-chip-orange">熱能</span>
      <span class="geo-sep-arrow">→</span>
      <span class="geo-chip geo-chip-cyan">動能</span>
      <span class="geo-sep-arrow">→</span>
      <span class="geo-chip geo-chip-gray">機械能</span>
      <span class="geo-sep-arrow">→</span>
      <span class="geo-chip geo-chip-yellow">電能</span>
    </div>

  </article>
</template>

<style scoped>
/* ── Card ──────────────────────────────────────────── */
.geo {
  width: 100%;
  padding: 26px 26px 20px;
  border-radius: 26px;
  background:
    linear-gradient(rgba(192,64,26,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(192,64,26,.04) 1px, transparent 1px),
    linear-gradient(135deg, #fff5f0 0%, #ffffff 50%, #fff8f0 100%);
  background-size: 32px 32px, 32px 32px, auto;
  border: 1px solid rgba(192,64,26,.15);
  box-shadow: 0 22px 52px rgba(15,23,42,.1);
}

/* ── Scene grid (9 columns) ── */
.geo-scene {
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr 1fr 1fr 0.75fr 1.1fr 1.4fr 1fr;
  align-items: center;
  gap: 0;
  min-height: 240px;
}

.geo-node,
.geo-conn {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ── Badges ── */
.geo-badge {
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
.geo-badge-spacer { height: 26px; margin-bottom: 10px; }

.geo-badge-red    { background: #fee2e2; color: #991b1b; border: 1px solid rgba(220,38,38,.22); }
.geo-badge-orange { background: #ffedd5; color: #c2410c; border: 1px solid rgba(249,115,22,.22); }
.geo-badge-amber  { background: #fef3c7; color: #b45309; border: 1px solid rgba(245,158,11,.22); }
.geo-badge-cyan   { background: #cffafe; color: #0891b2; border: 1px solid rgba(6,182,212,.22); }
.geo-badge-gray   { background: #f1f5f9; color: #475569; border: 1px solid rgba(148,163,184,.22); }
.geo-badge-yellow { background: #fef9c3; color: #a16207; border: 1px solid rgba(234,179,8,.22); }

.geo-lbl {
  margin: 10px 0 0;
  font-size: 0.82rem;
  font-weight: 900;
  color: #0f172a;
  line-height: 1;
}
.geo-conn-lbl {
  display: block;
  margin-top: 6px;
  font-size: 0.67rem;
  font-weight: 800;
  color: #94a3b8;
  letter-spacing: 0.3px;
  text-align: center;
  white-space: nowrap;
}

/* ═══ ① 地熱源 ═══════════════════════════════════════ */
.geo-source {
  width: 88px;
  height: 120px;
  border-radius: 14px;
  background: linear-gradient(180deg, #1c1107 0%, #2d1a0a 40%, #4a1a0a 70%, #7c2d12 100%);
  border: 1.5px solid rgba(192,64,26,.35);
  box-shadow: 0 0 0 1px rgba(120,40,10,.2), 0 18px 36px rgba(120,40,10,.28);
  position: relative;
  overflow: hidden;
}

.geo-source-layers {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
}
.geo-layer {
  flex: 1;
  border-bottom: 1px solid rgba(255,255,255,.04);
}
.geo-layer--top { background: rgba(60,30,10,.5); }
.geo-layer--mid { background: rgba(120,50,15,.4); }
.geo-layer--bot { background: rgba(200,80,20,.3); }

.geo-magma-glow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: radial-gradient(ellipse at 50% 100%, rgba(251,113,22,.55) 0%, rgba(220,38,38,.2) 50%, transparent 80%);
  animation: geo-magma-pulse 1.8s ease-in-out infinite alternate;
}

.geo-bubbles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.geo-bubble {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(251,191,36,.9) 0%, rgba(234,88,12,.7) 100%);
}
/* 各氣泡獨立的位置、大小、速度、延遲 — 刻意打亂，不規律 */
.geo-b1 { bottom: 6px;  left: 12px; width: 8px;  height: 8px;  animation: geo-bubble-rise-a 2.1s ease-in infinite; animation-delay: 0s; }
.geo-b2 { bottom: 10px; left: 58px; width: 5px;  height: 5px;  animation: geo-bubble-rise-b 3.3s ease-in infinite; animation-delay: .7s; }
.geo-b3 { bottom: 4px;  left: 34px; width: 9px;  height: 9px;  animation: geo-bubble-rise-a 2.7s ease-in infinite; animation-delay: 1.4s; }
.geo-b4 { bottom: 8px;  left: 72px; width: 6px;  height: 6px;  animation: geo-bubble-rise-c 1.9s ease-in infinite; animation-delay: .3s; }
.geo-b5 { bottom: 5px;  left: 22px; width: 5px;  height: 5px;  animation: geo-bubble-rise-b 2.5s ease-in infinite; animation-delay: 1.8s; }
.geo-b6 { bottom: 12px; left: 50px; width: 7px;  height: 7px;  animation: geo-bubble-rise-c 3.1s ease-in infinite; animation-delay: .9s; }
.geo-b7 { bottom: 6px;  left: 40px; width: 4px;  height: 4px;  animation: geo-bubble-rise-a 2.3s ease-in infinite; animation-delay: 2.2s; }

/* 岩層裂縫 */
.geo-crack {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: 48px;
  height: 32px;
  pointer-events: none;
}
.geo-crack-line {
  position: absolute;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to top, rgba(251,113,22,.9), rgba(251,191,36,.5) 60%, transparent 100%);
  border-radius: 1px;
  animation: geo-crack-glow 1.4s ease-in-out infinite alternate;
}
.geo-crack-line--a { left: 14px; height: 28px; transform: rotate(-8deg); transform-origin: bottom center; }
.geo-crack-line--b { left: 28px; height: 22px; transform: rotate(10deg); transform-origin: bottom center; animation-delay: .5s; }

/* 熱浪波紋（向上散逸） */
.geo-heat-waves {
  position: absolute;
  bottom: 44px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 40px;
  pointer-events: none;
}
.geo-heat-wave {
  position: absolute;
  bottom: 0;
  left: calc(4px + (var(--hwi) - 1) * 14px);
  width: 10px;
  height: 28px;
  border-radius: 999px;
  border: 1.5px solid rgba(251,113,22,.45);
  opacity: 0;
  animation: geo-heat-wave-rise 1.8s ease-out infinite;
  animation-delay: calc((var(--hwi) - 1) * 0.42s);
}

/* ═══ HEAT FLOW CONNECTOR ════════════════════════════ */
.geo-heat-flow-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.geo-heat-flow-svg { width: 100%; height: 40px; overflow: visible; }
.geo-hflow { animation: geo-hdash .85s linear infinite; }

/* ═══ ② 蒸汽分離器 ═══════════════════════════════════ */
.geo-sep-wrap {
  position: relative;
  width: 88px;
}
.geo-sep-body {
  width: 88px;
  height: 110px;
  border-radius: 12px 12px 8px 8px;
  background: linear-gradient(180deg, #1e293b 0%, #334155 60%, #475569 100%);
  border: 1.5px solid rgba(148,163,184,.3);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.07),
    0 18px 36px rgba(15,23,42,.22);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 10px;
}
.geo-sep-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(249,115,22,.18) 0%, transparent 60%);
  pointer-events: none;
  animation: geo-sep-glow-pulse 2s ease-in-out infinite alternate;
}
.geo-sep-inlet-pipe {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 18px;
  height: 14px;
  background: linear-gradient(90deg, #475569 0%, #64748b 50%, #475569 100%);
  border-radius: 3px 3px 0 0;
  border: 1px solid rgba(148,163,184,.3);
  border-bottom: none;
}
.geo-sep-outlet {
  position: absolute;
  right: -21px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: radial-gradient(circle, #a5f3fc 0%, #0891b2 100%);
  border: 3px solid #fff;
  box-shadow: 0 0 0 3px rgba(6,182,212,.3), 0 0 14px rgba(6,182,212,.55);
  animation: geo-outlet-pulse 2s ease-in-out infinite;
  z-index: 3;
  display: block;
}
.geo-sep-label-inner {
  font-size: 0.62rem;
  font-weight: 700;
  color: rgba(255,255,255,.5);
  letter-spacing: 0.5px;
  position: relative;
  z-index: 2;
}
.geo-sep-steam {
  position: absolute;
  top: -18px;
  left: 50%;
  transform: translateX(-50%);
  width: 64px;
  height: 52px;
  pointer-events: none;
  overflow: visible;
}
.geo-steam-wisp {
  position: absolute;
  bottom: 0;
  left: calc(4px + var(--si) * 16px);
  display: block;
  width: 14px;
  height: 36px;
  border-radius: 999px;
  background: linear-gradient(to top, rgba(255,255,255,.55) 0%, rgba(203,213,225,.3) 60%, transparent 100%);
  filter: blur(2.5px);
  opacity: 0;
  animation: geo-steam-rise 1.8s ease-in-out infinite;
  animation-delay: calc(var(--si) * .38s);
}
.geo-steam-puff {
  position: absolute;
  bottom: 10px;
  left: calc(12px + var(--sp) * 22px);
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,.5) 0%, rgba(226,232,240,.2) 60%, transparent 100%);
  filter: blur(3px);
  opacity: 0;
  animation: geo-steam-puff-rise 2.4s ease-out infinite;
  animation-delay: calc(var(--sp) * .9s + .2s);
}

/* ═══ STEAM PIPE ═════════════════════════════════════ */
.geo-steam-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.geo-steam-svg { width: 100%; height: 40px; overflow: visible; }
.geo-sflow { animation: geo-sdash .9s linear infinite; }

/* ═══ ③ 蒸汽渦輪 ═════════════════════════════════════ */
.geo-turbine-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.geo-turbine {
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
.geo-turbine-dot {
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
.geo-turbine-inlet  { left: -8px; }
.geo-turbine-outlet { right: -8px; background: #94a3b8; box-shadow: 0 0 0 3px rgba(148,163,184,.25); }

.geo-rotor {
  position: relative;
  width: 74px;
  height: 74px;
  animation: geo-spin 1.5s linear infinite;
}
.geo-blade {
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
.geo-hub {
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
.geo-t-ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(103,232,249,.35);
  width: 104px;
  height: 104px;
  animation: geo-t-ring-expand 2s ease-out infinite;
  pointer-events: none;
  display: block;
}
.geo-t-ring-2 { animation-delay: 1s; }

/* ═══ SHAFT ══════════════════════════════════════════ */
.geo-shaft-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
}
.geo-shaft-track {
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
.geo-sdot {
  position: absolute;
  top: 50%;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,.88);
  transform: translateY(-50%);
  animation: geo-sdot-move 1.65s linear infinite;
  animation-delay: var(--sd);
  display: block;
}

/* ═══ ④ 發電機 ═══════════════════════════════════════ */
.geo-gen-wrap {
  position: relative;
  width: 118px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.geo-gen-body {
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
.geo-gen-dot {
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
.geo-gen-inlet    { left: -9px; background: #94a3b8; box-shadow: 0 0 0 3px rgba(148,163,184,.25); }
.geo-gen-terminal { right: -9px; background: #facc15; box-shadow: 0 0 0 3px rgba(250,204,21,.25), 0 0 12px rgba(250,204,21,.55); animation: geo-terminal-pulse 1.2s ease-in-out infinite; }

.geo-coils {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 17px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 10px;
}
.geo-coil {
  display: block;
  width: 9px;
  border-radius: 5px;
  height: 62%;
  background: rgba(250,204,21,.32);
  animation: geo-coil-pulse 1.2s ease-in-out infinite;
  animation-delay: var(--cd);
}
.geo-gen-core {
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
.geo-bolt-svg { width: 20px; height: 26px; }
.geo-bolt {
  fill: #facc15;
  filter: drop-shadow(0 0 5px rgba(250,204,21,.7));
  animation: geo-bolt-flash 1.2s ease-in-out infinite;
}
.geo-field-rings {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 17px;
  display: grid;
  place-items: center;
  pointer-events: none;
}
.geo-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(250,204,21,.22);
  animation: geo-ring-expand 1.8s ease-out infinite;
  animation-delay: calc(var(--ri) * .9s);
  display: block;
  width: 48px;
  height: 48px;
}

/* ═══ CABLE ══════════════════════════════════════════ */
.geo-cable-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.geo-cable-svg { width: 100%; height: 56px; overflow: visible; }
.geo-eflow { animation: geo-edash .8s linear infinite; }
.geo-edot {
  offset-path: path('M2 28 Q100 10 198 28');
  animation: geo-edot-move 1.2s linear infinite;
}
.geo-edot2 { animation-delay: .6s; }

/* ═══ ⑤ 電網 ════════════════════════════════════════ */
.geo-grid-wrap {
  position: relative;
  width: 96px;
  height: 136px;
}
.geo-tower { width: 100%; height: 100%; object-fit: contain; position: relative; z-index: 1; }
.geo-halo {
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translateX(-50%);
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(250,204,21,.28), transparent 70%);
  animation: geo-halo-pulse 2s ease-in-out infinite;
  display: block;
}
.geo-spark {
  position: absolute;
  font-size: .85rem;
  z-index: 2;
  animation: geo-spark 2.4s ease-in-out infinite;
}
.geo-sp1 { top: 6%;  left:  4%; animation-delay: 0s; }
.geo-sp2 { top: 12%; right: 4%; animation-delay: 1.2s; }

/* ═══ SUMMARY BAR ════════════════════════════════════ */
.geo-summary {
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
.geo-chip {
  padding: 5px 14px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 900;
}
.geo-sep-arrow { color: #94a3b8; font-size: 1rem; font-weight: 700; }
.geo-chip-red    { background: #fee2e2; color: #991b1b; }
.geo-chip-orange { background: #ffedd5; color: #c2410c; }
.geo-chip-cyan   { background: #cffafe; color: #0891b2; }
.geo-chip-gray   { background: #f1f5f9; color: #475569; }
.geo-chip-yellow { background: #fef9c3; color: #a16207; }

/* ═══ KEYFRAMES ══════════════════════════════════════ */
@keyframes geo-magma-pulse {
  from { opacity: 0.65; }
  to   { opacity: 1; }
}
/* 三條不同路徑，讓氣泡彼此不平行 */
@keyframes geo-bubble-rise-a {
  0%   { transform: translateY(0) translateX(0) scale(1);   opacity: 0; }
  12%  { opacity: .85; }
  80%  { opacity: .5; }
  100% { transform: translateY(-82px) translateX(8px) scale(.55); opacity: 0; }
}
@keyframes geo-bubble-rise-b {
  0%   { transform: translateY(0) translateX(0) scale(1);   opacity: 0; }
  10%  { opacity: .9; }
  75%  { opacity: .45; }
  100% { transform: translateY(-76px) translateX(-10px) scale(.5); opacity: 0; }
}
@keyframes geo-bubble-rise-c {
  0%   { transform: translateY(0) translateX(0) scale(1);   opacity: 0; }
  15%  { opacity: .8; }
  70%  { opacity: .4; }
  100% { transform: translateY(-68px) translateX(4px) scale(.6); opacity: 0; }
}
@keyframes geo-sep-glow-pulse {
  from { opacity: 0.6; }
  to   { opacity: 1; }
}
@keyframes geo-outlet-pulse {
  0%,100% { box-shadow: 0 0 0 3px rgba(6,182,212,.3),  0 0 14px rgba(6,182,212,.45); }
  50%     { box-shadow: 0 0 0 7px rgba(6,182,212,.12), 0 0 22px rgba(6,182,212,.7); }
}
@keyframes geo-steam-rise {
  0% {
    opacity: 0;
    transform: translateY(10px) translateX(0) scaleX(.7);
  }
  15% { opacity: .75; }
  65% { opacity: .5; }
  100% {
    opacity: 0;
    transform: translateY(-38px) translateX(5px) scaleX(1.1);
  }
}
@keyframes geo-steam-puff-rise {
  0%   { opacity: 0;   transform: translateY(4px) scale(.6); }
  20%  { opacity: .65; transform: translateY(-6px) scale(1); }
  80%  { opacity: .3;  transform: translateY(-20px) scale(1.4); }
  100% { opacity: 0;   transform: translateY(-30px) scale(1.6); }
}
@keyframes geo-crack-glow {
  from { opacity: .6; filter: drop-shadow(0 0 3px rgba(251,113,22,.5)); }
  to   { opacity: 1;  filter: drop-shadow(0 0 8px rgba(251,191,36,.9)); }
}
@keyframes geo-heat-wave-rise {
  0%   { opacity: 0;   transform: translateY(0) scaleX(1); }
  20%  { opacity: .55; }
  80%  { opacity: .15; }
  100% { opacity: 0;   transform: translateY(-28px) scaleX(1.5); }
}
@keyframes geo-hdash {
  from { stroke-dashoffset: 36; }
  to   { stroke-dashoffset: 0; }
}
@keyframes geo-sdash {
  from { stroke-dashoffset: 36; }
  to   { stroke-dashoffset: 0; }
}
@keyframes geo-spin { to { transform: rotate(360deg); } }
@keyframes geo-t-ring-expand {
  0%   { transform: scale(1);    opacity: .55; }
  100% { transform: scale(1.38); opacity: 0; }
}
@keyframes geo-sdot-move {
  from { left: -10%; opacity: 0; }
  15%  { opacity: 1; }
  85%  { opacity: 1; }
  to   { left: 110%; opacity: 0; }
}
@keyframes geo-coil-pulse {
  0%,100% { opacity: .28; transform: scaleY(.86); background: rgba(250,204,21,.28); }
  50%     { opacity: 1;   transform: scaleY(1);   background: rgba(250,204,21,.72); }
}
@keyframes geo-bolt-flash {
  0%,100% { opacity: .7;  filter: drop-shadow(0 0 4px rgba(250,204,21,.55)); }
  50%     { opacity: 1;   filter: drop-shadow(0 0 12px rgba(250,204,21,1)); }
}
@keyframes geo-ring-expand {
  0%   { transform: scale(.9);  opacity: .5; }
  70%  { transform: scale(1.8); opacity: 0; }
  100% { transform: scale(1.8); opacity: 0; }
}
@keyframes geo-terminal-pulse {
  0%,100% { box-shadow: 0 0 0 3px rgba(250,204,21,.25), 0 0 12px rgba(250,204,21,.4); }
  50%     { box-shadow: 0 0 0 6px rgba(250,204,21,.12), 0 0 20px rgba(250,204,21,.75); }
}
@keyframes geo-edash {
  from { stroke-dashoffset: 42; }
  to   { stroke-dashoffset: 0; }
}
@keyframes geo-edot-move {
  from { offset-distance: 0%;   opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  to   { offset-distance: 100%; opacity: 0; }
}
@keyframes geo-halo-pulse {
  0%,100% { transform: translateX(-50%) scale(1);    opacity: .6; }
  50%     { transform: translateX(-50%) scale(1.38); opacity: 1; }
}
@keyframes geo-spark {
  0%,100% { opacity: 0; transform: scale(.5) translateY(0); }
  20%,80% { opacity: 1; transform: scale(1)  translateY(-3px); }
  50%     { opacity: 1; transform: scale(1.2) translateY(-7px); }
}

/* ═══ RESPONSIVE ═════════════════════════════════════ */
@media (max-width: 900px) {
  .geo { padding: 16px 14px 14px; }
  .geo-scene {
    grid-template-columns: repeat(9, minmax(100px, 1fr));
    overflow-x: auto;
    padding-bottom: 10px;
  }
  .geo-turbine  { width: 90px; height: 90px; }
  .geo-rotor    { width: 62px; height: 62px; }
  .geo-sep-wrap { width: 74px; }
  .geo-sep-body { width: 74px; height: 96px; }
  .geo-gen-body { width: 104px; height: 80px; }
  .geo-gen-wrap { width: 104px; }
  .geo-grid-wrap { width: 84px; height: 120px; }
}
</style>
