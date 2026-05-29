<script setup>
import transmissionTower from '@/assets/energy/transmission-tower.svg'

const biomassFireFrames = Array.from(
  { length: 18 },
  (_, index) => `/fire_generated_frames/fire_${String(index).padStart(2, '0')}.png`,
)
</script>

<template>
  <article class="bio" aria-label="生質能發電原理動畫">

    <div class="bio-scene">

      <!-- ① 生質燃料 -->
      <div class="bio-node">
        <div class="bio-badge bio-badge-green">化學能</div>
        <div class="bio-fuel">
          <div class="bio-fuel-leaves">
            <span v-for="i in 4" :key="i" class="bio-leaf" :style="`--li:${i}`"></span>
          </div>
          <div class="bio-fuel-dots">
            <span v-for="i in 6" :key="i" class="bio-fdot" :style="`--fi:${i}`"></span>
          </div>
        </div>
        <p class="bio-lbl">生質燃料</p>
      </div>

      <!-- 連接①→② 燃燒傳輸 -->
      <div class="bio-conn">
        <div class="bio-badge bio-badge-orange">熱能</div>
        <div class="bio-fire-flow-wrap">
          <svg class="bio-fire-flow-svg" viewBox="0 0 200 40" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <marker id="bio-arr" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto" markerUnits="userSpaceOnUse">
                <path d="M2 2L7 5L2 8" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </marker>
            </defs>
            <rect x="0" y="10" width="200" height="20" rx="10" fill="rgba(254,215,170,.28)"/>
            <rect x="4" y="12.5" width="192" height="3" rx="1.5" fill="rgba(255,255,255,.4)"/>
            <path class="bio-fflow" d="M14 20 L186 20"
              stroke="#f97316" stroke-width="5" stroke-dasharray="10 8"
              stroke-linecap="round" fill="none" marker-end="url(#bio-arr)"/>
          </svg>
          <span class="bio-conn-lbl">燃燒供熱</span>
        </div>
      </div>

      <!-- ② 蒸汽鍋爐 -->
      <div class="bio-node">
        <div class="bio-badge bio-badge-amber">熱能</div>
        <div class="bio-boiler-wrap">
          <div class="bio-boiler-body">
            <div class="bio-boiler-glow"></div>
            <div class="bio-boiler-pipe-top"></div>
            <div class="bio-smoke" aria-hidden="true">
              <span class="bio-smoke-wisp" style="--si:0"></span>
              <span class="bio-smoke-wisp" style="--si:1"></span>
              <span class="bio-smoke-wisp" style="--si:2"></span>
            </div>
            <div class="bio-flames" aria-hidden="true">
              <img
                v-for="(frame, index) in biomassFireFrames"
                :key="frame"
                :src="frame"
                alt=""
                class="bio-fire-frame"
                :style="`--frame:${index}`"
                aria-hidden="true"
              />
            </div>
            <div class="bio-fuel-bed" aria-hidden="true">
              <span class="bio-fuel-chip bio-fuel-chip--a"></span>
              <span class="bio-fuel-chip bio-fuel-chip--b"></span>
              <span class="bio-fuel-chip bio-fuel-chip--c"></span>
              <span class="bio-fuel-chip bio-fuel-chip--d"></span>
            </div>
          </div>
        </div>
        <p class="bio-lbl">蒸汽鍋爐</p>
      </div>

      <!-- 連接②→③ 蒸汽管 -->
      <div class="bio-conn">
        <div class="bio-badge bio-badge-cyan">動能</div>
        <div class="bio-steam-wrap">
          <svg class="bio-steam-svg" viewBox="0 0 200 40" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <marker id="bio-sarr" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto" markerUnits="userSpaceOnUse">
                <path d="M2 2L7 5L2 8" fill="none" stroke="#67e8f9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </marker>
            </defs>
            <rect x="0" y="10" width="200" height="20" rx="10" fill="rgba(207,250,254,.32)"/>
            <rect x="4" y="12.5" width="192" height="3" rx="1.5" fill="rgba(255,255,255,.55)"/>
            <path class="bio-sflow" d="M14 20 L186 20"
              stroke="#67e8f9" stroke-width="5" stroke-dasharray="10 8"
              stroke-linecap="round" fill="none" marker-end="url(#bio-sarr)"/>
          </svg>
          <span class="bio-conn-lbl">蒸汽管</span>
        </div>
      </div>

      <!-- ③ 蒸汽渦輪機 -->
      <div class="bio-node">
        <div class="bio-badge bio-badge-gray">機械能</div>
        <div class="bio-turbine-wrap">
          <div class="bio-turbine">
            <span class="bio-turbine-dot bio-turbine-inlet"></span>
            <span class="bio-turbine-dot bio-turbine-outlet"></span>
            <div class="bio-rotor">
              <span v-for="n in 6" :key="n" class="bio-blade" :style="`--r:${(n-1)*60}deg`"></span>
              <span class="bio-hub"></span>
            </div>
          </div>
        </div>
        <p class="bio-lbl">蒸汽渦輪</p>
      </div>

      <!-- 連接③→④ 傳動軸 -->
      <div class="bio-conn">
        <div class="bio-badge-spacer"></div>
        <div class="bio-shaft-wrap">
          <div class="bio-shaft-track">
            <span class="bio-sdot" style="--sd:0s"></span>
            <span class="bio-sdot" style="--sd:.55s"></span>
            <span class="bio-sdot" style="--sd:1.1s"></span>
          </div>
          <span class="bio-conn-lbl">傳動軸</span>
        </div>
      </div>

      <!-- ④ 發電機 -->
      <div class="bio-node">
        <div class="bio-badge bio-badge-yellow">電能</div>
        <div class="bio-gen-wrap">
          <div class="bio-gen-body">
            <span class="bio-gen-dot bio-gen-inlet"></span>
            <span class="bio-gen-dot bio-gen-terminal"></span>
            <div class="bio-coils" aria-hidden="true">
              <span class="bio-coil" style="--cd:0s"></span>
              <span class="bio-coil" style="--cd:.3s"></span>
              <span class="bio-coil" style="--cd:.6s"></span>
              <span class="bio-coil" style="--cd:.9s"></span>
            </div>
            <div class="bio-gen-core">
              <svg viewBox="0 0 20 28" class="bio-bolt-svg" aria-hidden="true">
                <path class="bio-bolt" d="M13 0 L4 15H11L8 28L20 12H13Z"/>
              </svg>
            </div>
            <div class="bio-field-rings" aria-hidden="true">
              <span class="bio-ring" style="--ri:0"></span>
              <span class="bio-ring" style="--ri:1"></span>
            </div>
          </div>
        </div>
        <p class="bio-lbl">發電機</p>
      </div>

      <!-- 連接④→⑤ 電力輸出 -->
      <div class="bio-conn">
        <div class="bio-badge-spacer"></div>
        <div class="bio-cable-wrap">
          <svg class="bio-cable-svg" viewBox="0 0 200 56" preserveAspectRatio="none" overflow="visible" aria-hidden="true">
            <defs>
              <filter id="bio-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <path d="M2 28 Q100 10 198 28" stroke="rgba(250,204,21,.16)" stroke-width="14" fill="none" stroke-linecap="round"/>
            <path class="bio-eflow" d="M2 28 Q100 10 198 28" stroke="#facc15" stroke-width="4" stroke-dasharray="12 9" fill="none" stroke-linecap="round"/>
            <circle class="bio-edot" r="5.5" fill="#facc15" filter="url(#bio-glow)"/>
            <circle class="bio-edot bio-edot2" r="5.5" fill="#facc15" filter="url(#bio-glow)"/>
          </svg>
          <span class="bio-conn-lbl">電力輸出</span>
        </div>
      </div>

      <!-- ⑤ 電網 -->
      <div class="bio-node">
        <div class="bio-badge-spacer"></div>
        <div class="bio-grid-wrap">
          <span class="bio-halo"></span>
          <img :src="transmissionTower" alt="" class="bio-tower" aria-hidden="true"/>
          <span class="bio-spark bio-sp1" aria-hidden="true">⚡</span>
          <span class="bio-spark bio-sp2" aria-hidden="true">⚡</span>
        </div>
        <p class="bio-lbl">電網</p>
      </div>

    </div>

    <!-- 能量轉換流程摘要 -->
    <div class="bio-summary" aria-label="能量轉換流程">
      <span class="bio-chip bio-chip-green">化學能</span>
      <span class="bio-sep">→</span>
      <span class="bio-chip bio-chip-orange">熱能</span>
      <span class="bio-sep">→</span>
      <span class="bio-chip bio-chip-cyan">動能</span>
      <span class="bio-sep">→</span>
      <span class="bio-chip bio-chip-gray">機械能</span>
      <span class="bio-sep">→</span>
      <span class="bio-chip bio-chip-yellow">電能</span>
    </div>

  </article>
</template>

<style scoped>
/* ── Card ──────────────────────────────────────────── */
.bio {
  width: 100%;
  padding: 26px 26px 20px;
  border-radius: 26px;
  background:
    linear-gradient(rgba(31,122,70,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(31,122,70,.04) 1px, transparent 1px),
    linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #fefce8 100%);
  background-size: 32px 32px, 32px 32px, auto;
  border: 1px solid rgba(31,122,70,.15);
  box-shadow: 0 22px 52px rgba(15,23,42,.1);
}

/* ── Scene grid (9 columns: 5 nodes + 4 connectors) ── */
.bio-scene {
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr 1fr 1fr 0.75fr 1.1fr 1.4fr 1fr;
  align-items: center;
  gap: 0;
  min-height: 240px;
}

.bio-node,
.bio-conn {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ── Badges ─────────────────────────────────────── */
.bio-badge {
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
.bio-badge-spacer { height: 26px; margin-bottom: 10px; }

.bio-badge-green  { background: #dcfce7; color: #15803d; border: 1px solid rgba(34,197,94,.22); }
.bio-badge-orange { background: #ffedd5; color: #c2410c; border: 1px solid rgba(249,115,22,.22); }
.bio-badge-amber  { background: #fef3c7; color: #b45309; border: 1px solid rgba(245,158,11,.22); }
.bio-badge-cyan   { background: #cffafe; color: #0891b2; border: 1px solid rgba(6,182,212,.22); }
.bio-badge-gray   { background: #f1f5f9; color: #475569; border: 1px solid rgba(148,163,184,.22); }
.bio-badge-yellow { background: #fef9c3; color: #a16207; border: 1px solid rgba(234,179,8,.22); }

.bio-lbl {
  margin: 10px 0 0;
  font-size: 0.82rem;
  font-weight: 900;
  color: #0f172a;
  line-height: 1;
}
.bio-conn-lbl {
  display: block;
  margin-top: 6px;
  font-size: 0.67rem;
  font-weight: 800;
  color: #94a3b8;
  letter-spacing: 0.3px;
  text-align: center;
  white-space: nowrap;
}

/* ═══ ① FUEL BIN ════════════════════════════════════ */
.bio-fuel {
  width: 88px;
  height: 120px;
  border-radius: 14px;
  background: linear-gradient(160deg, #f0fdf4 0%, #bbf7d0 60%, #86efac 100%);
  border: 1.5px solid rgba(34,197,94,.28);
  box-shadow: 0 0 0 1px rgba(31,122,70,.1), 0 18px 36px rgba(31,122,70,.16);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  position: relative;
  overflow: hidden;
  padding: 10px;
}

.bio-fuel-leaves {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
}

.bio-leaf {
  display: block;
  width: 16px;
  height: 22px;
  border-radius: 50% 0 50% 0;
  background: linear-gradient(135deg, #4ade80 0%, #16a34a 100%);
  box-shadow: 0 1px 4px rgba(31,122,70,.3);
  animation: bio-leaf-sway 2s ease-in-out infinite;
  animation-delay: calc((var(--li) - 1) * 0.5s);
  transform-origin: bottom center;
}

.bio-fuel-dots {
  display: flex;
  gap: 3px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 4px;
}

.bio-fdot {
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: radial-gradient(circle, #a3e635 0%, #65a30d 100%);
  opacity: 0.7;
  animation: bio-fdot-pulse 1.8s ease-in-out infinite;
  animation-delay: calc((var(--fi) - 1) * 0.3s);
}

/* ═══ FIRE FLOW CONNECTOR ═══════════════════════════ */
.bio-fire-flow-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bio-fire-flow-svg { width: 100%; height: 40px; overflow: visible; }
.bio-fflow { animation: bio-fdash .85s linear infinite; }

/* ═══ ② BOILER ══════════════════════════════════════ */
.bio-boiler-wrap {
  position: relative;
  width: 96px;
}

.bio-boiler-body {
  width: 96px;
  height: 116px;
  border-radius: 18px;
  background: linear-gradient(180deg, #1e1712 0%, #2c2016 50%, #3a2a18 100%);
  border: 1.5px solid rgba(180,100,30,.28);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.05),
    inset 0 0 28px rgba(234,88,12,.15),
    0 0 0 1px rgba(0,0,0,.18),
    0 18px 36px rgba(100,40,10,.28);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.bio-boiler-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 90%, rgba(249,115,22,.32) 0%, rgba(251,191,36,.1) 45%, transparent 70%);
  pointer-events: none;
  animation: bio-glow-pulse 0.9s ease-in-out infinite alternate;
}

.bio-boiler-pipe-top {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 26px;
  height: 7px;
  border-radius: 4px 4px 0 0;
  background: rgba(255,255,255,.07);
  border: 1px solid rgba(255,255,255,.1);
  border-bottom: none;
}

/* 出水/蒸汽連接點 — 放在 bio-boiler-wrap 上，不受 overflow:hidden 影響 */
.bio-outlet-dot {
  position: absolute;
  right: -22px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: radial-gradient(circle, #a5f3fc 0%, #0891b2 100%);
  border: 3px solid #fff;
  box-shadow: 0 0 0 3px rgba(6,182,212,.3), 0 0 14px rgba(6,182,212,.55);
  animation: bio-outlet-pulse 2s ease-in-out infinite;
  z-index: 3;
  display: block;
}

/* 火焰 */
.bio-flames {
  position: absolute;
  left: 50%;
  bottom: 21px;
  transform: translateX(-50%);
  z-index: 3;
  width: 56px;
  height: 58px;
  pointer-events: none;
}

.bio-flame {
  display: block;
  /* 尖頂寬底的火焰輪廓 */
  clip-path: polygon(50% 0%, 65% 16%, 86% 44%, 78% 78%, 62% 96%, 50% 100%, 38% 96%, 22% 78%, 14% 44%, 35% 16%);
  transform-origin: bottom center;
  will-change: transform, opacity;
}
.bio-flame--l {
  width: 22px; height: 36px;
  /* 底部亮白黃→頂部暗紅 */
  background: linear-gradient(to top, #fff7ed 0%, #fef08a 18%, #f59e0b 50%, #ea580c 80%, #9a3412 100%);
  animation: bio-flicker-l 0.54s ease-in-out infinite;
}
.bio-flame--c {
  width: 28px; height: 54px;
  background: linear-gradient(to top, #ffffff 0%, #fef9c3 12%, #fbbf24 38%, #f97316 66%, #b91c1c 100%);
  animation: bio-flicker-c 0.41s ease-in-out infinite;
  filter: drop-shadow(0 0 6px rgba(251,191,36,.7));
}
.bio-flame--r {
  width: 20px; height: 32px;
  background: linear-gradient(to top, #fff7ed 0%, #fef08a 18%, #f59e0b 50%, #ea580c 80%, #9a3412 100%);
  animation: bio-flicker-r 0.67s ease-in-out infinite;
}

/* ═══ STEAM PIPE ═════════════════════════════════════  */
.bio-fire-frame {
  display: block;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center bottom;
  opacity: 0;
  filter: drop-shadow(0 0 5px rgba(251,191,36,.65));
  animation: bio-fire-frame-cycle 2.97s steps(1, end) infinite;
  animation-delay: calc(var(--frame) * -165ms);
}

.bio-fuel-bed {
  position: absolute;
  left: 50%;
  bottom: 13px;
  z-index: 2;
  width: 62px;
  height: 17px;
  transform: translateX(-50%);
  border-radius: 999px;
  background: radial-gradient(ellipse at 50% 70%, rgba(245,158,11,.34), rgba(120,53,15,.16) 58%, transparent 72%);
  pointer-events: none;
}

.bio-fuel-chip {
  position: absolute;
  bottom: 4px;
  display: block;
  width: 18px;
  height: 8px;
  border-radius: 5px 3px 5px 3px;
  background: linear-gradient(180deg, #8a4b22, #4a2411);
  border: 1px solid rgba(251,191,36,.18);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.08), 0 0 7px rgba(245,158,11,.18);
}

.bio-fuel-chip--a { left: 7px; transform: rotate(-12deg); }
.bio-fuel-chip--b { left: 20px; width: 22px; transform: rotate(5deg); }
.bio-fuel-chip--c { right: 8px; transform: rotate(14deg); }
.bio-fuel-chip--d { left: 30px; bottom: 9px; width: 14px; opacity: .82; transform: rotate(-7deg); }

.bio-smoke {
  position: absolute;
  left: 50%;
  bottom: 58px;
  z-index: 1;
  width: 54px;
  height: 46px;
  transform: translateX(-50%);
  pointer-events: none;
}

.bio-smoke-wisp {
  position: absolute;
  bottom: 0;
  left: calc(16px + var(--si) * 10px);
  display: block;
  width: 11px;
  height: 28px;
  border-radius: 999px;
  border-left: 2px solid rgba(226,232,240,.18);
  filter: blur(.2px);
  opacity: 0;
  animation: bio-smoke-rise 2.4s ease-in-out infinite;
  animation-delay: calc(var(--si) * .42s);
}

.bio-steam-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bio-steam-svg { width: 100%; height: 40px; overflow: visible; }
.bio-sflow { animation: bio-sdash .9s linear infinite; }

/* ═══ ③ STEAM TURBINE ═══════════════════════════════ */
.bio-turbine-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bio-turbine {
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

.bio-turbine-dot {
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
.bio-turbine-inlet  { left:  -8px; }
.bio-turbine-outlet { right: -8px; background: #94a3b8; box-shadow: 0 0 0 3px rgba(148,163,184,.25); }

.bio-rotor {
  position: relative;
  width: 74px;
  height: 74px;
  animation: bio-spin 1.5s linear infinite;
}
.bio-blade {
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
.bio-hub {
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

/* ═══ SHAFT ══════════════════════════════════════════ */
.bio-shaft-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
}
.bio-shaft-track {
  position: relative;
  width: calc(100% + 20px);
  height: 12px;
  margin-left: -10px;
  margin-right: -10px;
  border-radius: 999px;
  background: linear-gradient(90deg, #cbd5e1 0%, #94a3b8 46%, #cbd5e1 100%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.52),
    0 5px 12px rgba(15,23,42,.1);
  overflow: hidden;
}
.bio-sdot {
  position: absolute;
  top: 50%;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,.88);
  transform: translateY(-50%);
  animation: bio-sdot-move 1.65s linear infinite;
  animation-delay: var(--sd);
  display: block;
}

/* ═══ ④ GENERATOR ════════════════════════════════════ */
.bio-gen-wrap {
  position: relative;
  width: 118px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bio-gen-body {
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
.bio-gen-dot {
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
.bio-gen-inlet {
  left: -9px;
  background: #94a3b8;
  box-shadow: 0 0 0 3px rgba(148,163,184,.25);
}
.bio-gen-terminal {
  right: -9px;
  background: #facc15;
  box-shadow: 0 0 0 3px rgba(250,204,21,.25), 0 0 12px rgba(250,204,21,.55);
  animation: bio-terminal-pulse 1.2s ease-in-out infinite;
}
.bio-coils {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 17px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 10px;
}
.bio-coil {
  display: block;
  width: 9px;
  border-radius: 5px;
  height: 62%;
  background: rgba(250,204,21,.32);
  animation: bio-coil-pulse 1.2s ease-in-out infinite;
  animation-delay: var(--cd);
}
.bio-gen-core {
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
.bio-bolt-svg { width: 20px; height: 26px; }
.bio-bolt {
  fill: #facc15;
  filter: drop-shadow(0 0 5px rgba(250,204,21,.7));
  animation: bio-bolt-flash 1.2s ease-in-out infinite;
}
.bio-field-rings {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 17px;
  display: grid;
  place-items: center;
  pointer-events: none;
}
.bio-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(250,204,21,.22);
  animation: bio-ring-expand 1.8s ease-out infinite;
  animation-delay: calc(var(--ri) * .9s);
  display: block;
  width: 48px;
  height: 48px;
}

/* ═══ CABLE ══════════════════════════════════════════ */
.bio-cable-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bio-cable-svg { width: 100%; height: 56px; overflow: visible; }
.bio-eflow { animation: bio-edash .8s linear infinite; }
.bio-edot {
  offset-path: path('M2 28 Q100 10 198 28');
  animation: bio-edot-move 1.2s linear infinite;
}
.bio-edot2 { animation-delay: .6s; }

/* ═══ ⑤ GRID ═════════════════════════════════════════ */
.bio-grid-wrap {
  position: relative;
  width: 96px;
  height: 136px;
}
.bio-tower { width: 100%; height: 100%; object-fit: contain; position: relative; z-index: 1; }
.bio-halo {
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translateX(-50%);
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(250,204,21,.28), transparent 70%);
  animation: bio-halo-pulse 2s ease-in-out infinite;
  display: block;
}
.bio-spark {
  position: absolute;
  font-size: .85rem;
  z-index: 2;
  animation: bio-spark 2.4s ease-in-out infinite;
}
.bio-sp1 { top: 6%;  left:  4%; animation-delay: 0s; }
.bio-sp2 { top: 12%; right: 4%; animation-delay: 1.2s; }

/* ═══ SUMMARY BAR ════════════════════════════════════ */
.bio-summary {
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
.bio-chip {
  padding: 5px 14px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 900;
}
.bio-sep { color: #94a3b8; font-size: 1rem; font-weight: 700; }
.bio-chip-green  { background: #dcfce7; color: #15803d; }
.bio-chip-orange { background: #ffedd5; color: #c2410c; }
.bio-chip-cyan   { background: #cffafe; color: #0891b2; }
.bio-chip-gray   { background: #f1f5f9; color: #475569; }
.bio-chip-yellow { background: #fef9c3; color: #a16207; }

/* ═══ KEYFRAMES ══════════════════════════════════════ */
@keyframes bio-leaf-sway {
  0%,100% { transform: rotate(-8deg); }
  50%     { transform: rotate(8deg); }
}
@keyframes bio-fdot-pulse {
  0%,100% { opacity: .4; transform: scale(.85); }
  50%     { opacity: .9; transform: scale(1.1); }
}
@keyframes bio-fdash {
  from { stroke-dashoffset: 36; }
  to   { stroke-dashoffset: 0; }
}
@keyframes bio-fire-frame-cycle {
  0%, 5.555% { opacity: 1; }
  5.556%, 100% { opacity: 0; }
}
@keyframes bio-smoke-rise {
  0% {
    opacity: 0;
    transform: translateY(8px) translateX(0) scale(.82) rotate(0deg);
  }
  18% {
    opacity: .34;
  }
  72% {
    opacity: .18;
  }
  100% {
    opacity: 0;
    transform: translateY(-25px) translateX(7px) scale(1.25) rotate(8deg);
  }
}
@keyframes bio-flicker-l {
  0%, 100% { transform: scaleY(1);    opacity: .85; }
  30%      { transform: scaleY(1.16); opacity: .95; }
  62%      { transform: scaleY(0.88); opacity: .72; }
}
@keyframes bio-flicker-c {
  0%, 100% { transform: scaleY(1);    opacity: 1; }
  22%      { transform: scaleY(1.22); opacity: .88; }
  52%      { transform: scaleY(0.84); opacity: .78; }
  80%      { transform: scaleY(1.12); opacity: .95; }
}
@keyframes bio-flicker-r {
  0%, 100% { transform: scaleY(1);    opacity: .8; }
  38%      { transform: scaleY(1.18); opacity: .92; }
  72%      { transform: scaleY(0.86); opacity: .65; }
}
@keyframes bio-glow-pulse {
  from { opacity: 0.7; }
  to   { opacity: 1.0; }
}
@keyframes bio-outlet-pulse {
  0%,100% { box-shadow: 0 0 0 3px rgba(6,182,212,.3),  0 0 14px rgba(6,182,212,.45); }
  50%     { box-shadow: 0 0 0 7px rgba(6,182,212,.12), 0 0 22px rgba(6,182,212,.7); }
}
@keyframes bio-sdash {
  from { stroke-dashoffset: 36; }
  to   { stroke-dashoffset: 0; }
}
@keyframes bio-spin { to { transform: rotate(360deg); } }
@keyframes bio-sdot-move {
  from { left: -10%; opacity: 0; }
  15%  { opacity: 1; }
  85%  { opacity: 1; }
  to   { left: 110%; opacity: 0; }
}
@keyframes bio-coil-pulse {
  0%,100% { opacity: .28; transform: scaleY(.86); background: rgba(250,204,21,.28); }
  50%     { opacity: 1;   transform: scaleY(1);   background: rgba(250,204,21,.72); }
}
@keyframes bio-bolt-flash {
  0%,100% { opacity: .7;  filter: drop-shadow(0 0 4px rgba(250,204,21,.55)); }
  50%     { opacity: 1;   filter: drop-shadow(0 0 12px rgba(250,204,21,1)); }
}
@keyframes bio-ring-expand {
  0%   { transform: scale(.9);  opacity: .5; }
  70%  { transform: scale(1.8); opacity: 0; }
  100% { transform: scale(1.8); opacity: 0; }
}
@keyframes bio-terminal-pulse {
  0%,100% { box-shadow: 0 0 0 3px rgba(250,204,21,.25), 0 0 12px rgba(250,204,21,.4); }
  50%     { box-shadow: 0 0 0 6px rgba(250,204,21,.12), 0 0 20px rgba(250,204,21,.75); }
}
@keyframes bio-edash {
  from { stroke-dashoffset: 42; }
  to   { stroke-dashoffset: 0; }
}
@keyframes bio-edot-move {
  from { offset-distance: 0%;   opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  to   { offset-distance: 100%; opacity: 0; }
}
@keyframes bio-halo-pulse {
  0%,100% { transform: translateX(-50%) scale(1);    opacity: .6; }
  50%     { transform: translateX(-50%) scale(1.38); opacity: 1; }
}
@keyframes bio-spark {
  0%,100% { opacity: 0; transform: scale(.5) translateY(0); }
  20%,80% { opacity: 1; transform: scale(1)  translateY(-3px); }
  50%     { opacity: 1; transform: scale(1.2) translateY(-7px); }
}

/* ═══ RESPONSIVE ═════════════════════════════════════ */
@media (max-width: 900px) {
  .bio { padding: 16px 14px 14px; }
  .bio-scene {
    grid-template-columns: repeat(9, minmax(100px, 1fr));
    overflow-x: auto;
    padding-bottom: 10px;
  }
  .bio-turbine  { width: 90px; height: 90px; }
  .bio-rotor    { width: 62px; height: 62px; }
  .bio-boiler-wrap { width: 82px; }
  .bio-boiler-body { width: 82px; height: 104px; border-radius: 16px; }
  .bio-gen-body { width: 104px; height: 80px; }
  .bio-gen-wrap { width: 104px; }
  .bio-grid-wrap { width: 84px; height: 120px; }
}
</style>
