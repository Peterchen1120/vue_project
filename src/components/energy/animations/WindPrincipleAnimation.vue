<script setup>
import transmissionTower from '@/assets/energy/transmission-tower.svg'
</script>

<template>
  <article class="wnd" aria-label="風力發電原理動畫">

    <div class="wnd-scene">

      <!-- ① 自然風 -->
      <div class="wnd-node">
        <div class="wnd-badge wnd-badge-sky">風能</div>
        <div class="wnd-wind-src">
          <span v-for="i in 5" :key="i" class="wnd-streak" :style="`--wi:${i}`"></span>
        </div>
        <p class="wnd-lbl">自然風</p>
      </div>

      <!-- 連接①→② 風力衝擊 -->
      <div class="wnd-conn">
        <div class="wnd-badge wnd-badge-blue">動能</div>
        <div class="wnd-flow-wrap">
          <svg class="wnd-flow-svg" viewBox="0 0 200 40" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <marker id="wnd-arr" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto" markerUnits="userSpaceOnUse">
                <path d="M2 2L7 5L2 8" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </marker>
            </defs>
            <rect x="0" y="10" width="200" height="20" rx="10" fill="rgba(186,230,253,.18)"/>
            <rect x="4" y="12.5" width="192" height="3" rx="1.5" fill="rgba(255,255,255,.48)"/>
            <path class="wnd-wflow" d="M14 20 L186 20"
              stroke="#38bdf8" stroke-width="5" stroke-dasharray="10 8"
              stroke-linecap="round" fill="none" marker-end="url(#wnd-arr)"/>
          </svg>
          <span class="wnd-conn-lbl">風力衝擊</span>
        </div>
      </div>

      <!-- ② 風力渦輪機 -->
      <div class="wnd-node">
        <div class="wnd-badge wnd-badge-indigo">機械能</div>
        <div class="wnd-turbine-wrap">
          <div class="wnd-turbine">
            <div class="wnd-tower-base"></div>
            <span class="wnd-turbine-dot wnd-turbine-inlet"></span>
            <div class="wnd-streamlines" aria-hidden="true">
              <span class="wnd-sl" style="--si:1;--sy:-38px;--sw:52px"></span>
              <span class="wnd-sl" style="--si:2;--sy:-18px;--sw:38px"></span>
              <span class="wnd-sl" style="--si:3;--sy:  2px;--sw:60px"></span>
              <span class="wnd-sl" style="--si:4;--sy: 22px;--sw:44px"></span>
              <span class="wnd-sl" style="--si:5;--sy: 42px;--sw:34px"></span>
            </div>
            <div class="wnd-rotor">
              <span v-for="n in 3" :key="n" class="wnd-blade" :style="`--r:${(n-1)*120}deg`"></span>
              <span class="wnd-hub"></span>
            </div>
          </div>
        </div>
        <p class="wnd-lbl">風力渦輪機</p>
      </div>

      <!-- 連接②→③ 傳動軸 -->
      <div class="wnd-conn">
        <div class="wnd-badge-spacer"></div>
        <div class="wnd-shaft-wrap">
          <div class="wnd-shaft-row">
            <span class="wnd-shaft-cap wnd-shaft-cap-left"></span>
            <div class="wnd-shaft-track">
              <span class="wnd-sdot" style="--sd:0s"></span>
              <span class="wnd-sdot" style="--sd:.55s"></span>
              <span class="wnd-sdot" style="--sd:1.1s"></span>
            </div>
            <span class="wnd-shaft-cap wnd-shaft-cap-right"></span>
          </div>
          <span class="wnd-conn-lbl">傳動軸</span>
        </div>
      </div>

      <!-- ③ 發電機 -->
      <div class="wnd-node">
        <div class="wnd-badge wnd-badge-yellow">電能</div>
        <div class="wnd-gen-wrap">
          <div class="wnd-gen-body">
            <span class="wnd-gen-dot wnd-gen-terminal"></span>
            <div class="wnd-coils" aria-hidden="true">
              <span class="wnd-coil" style="--cd:0s"></span>
              <span class="wnd-coil" style="--cd:.3s"></span>
              <span class="wnd-coil" style="--cd:.6s"></span>
              <span class="wnd-coil" style="--cd:.9s"></span>
            </div>
            <div class="wnd-gen-core">
              <svg viewBox="0 0 20 28" class="wnd-bolt-svg" aria-hidden="true">
                <path class="wnd-bolt" d="M13 0 L4 15H11L8 28L20 12H13Z"/>
              </svg>
            </div>
            <div class="wnd-field-rings" aria-hidden="true">
              <span class="wnd-ring" style="--ri:0"></span>
              <span class="wnd-ring" style="--ri:1"></span>
            </div>
          </div>
        </div>
        <p class="wnd-lbl">發電機</p>
      </div>

      <!-- 連接③→④ 電力輸出 -->
      <div class="wnd-conn">
        <div class="wnd-badge-spacer"></div>
        <div class="wnd-cable-wrap">
          <svg class="wnd-cable-svg" viewBox="0 0 200 56" preserveAspectRatio="none" overflow="visible" aria-hidden="true">
            <defs>
              <filter id="wnd-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <path d="M2 28 Q100 10 198 28" stroke="rgba(250,204,21,.16)" stroke-width="14" fill="none" stroke-linecap="round"/>
            <path class="wnd-eflow" d="M2 28 Q100 10 198 28" stroke="#facc15" stroke-width="4" stroke-dasharray="12 9" fill="none" stroke-linecap="round"/>
            <circle class="wnd-edot" r="5.5" fill="#facc15" filter="url(#wnd-glow)"/>
            <circle class="wnd-edot wnd-edot2" r="5.5" fill="#facc15" filter="url(#wnd-glow)"/>
          </svg>
          <span class="wnd-conn-lbl">電力輸出</span>
        </div>
      </div>

      <!-- ④ 電網 -->
      <div class="wnd-node">
        <div class="wnd-badge-spacer"></div>
        <div class="wnd-grid-wrap">
          <span class="wnd-halo"></span>
          <img :src="transmissionTower" alt="" class="wnd-tower" aria-hidden="true"/>
          <span class="wnd-spark wnd-sp1" aria-hidden="true">⚡</span>
          <span class="wnd-spark wnd-sp2" aria-hidden="true">⚡</span>
        </div>
        <p class="wnd-lbl">電網</p>
      </div>

    </div>

    <!-- 能量轉換流程摘要 -->
    <div class="wnd-summary" aria-label="能量轉換流程">
      <span class="wnd-chip wnd-chip-sky">風能</span>
      <span class="wnd-sep">→</span>
      <span class="wnd-chip wnd-chip-blue">動能</span>
      <span class="wnd-sep">→</span>
      <span class="wnd-chip wnd-chip-indigo">機械能</span>
      <span class="wnd-sep">→</span>
      <span class="wnd-chip wnd-chip-yellow">電能</span>
    </div>

  </article>
</template>

<style scoped>
/* ── Card ──────────────────────────────────────────── */
.wnd {
  width: 100%;
  padding: 26px 26px 20px;
  border-radius: 26px;
  background:
    linear-gradient(rgba(37,99,168,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(37,99,168,.04) 1px, transparent 1px),
    linear-gradient(135deg, #eff6ff 0%, #ffffff 55%, #f0f9ff 100%);
  background-size: 32px 32px, 32px 32px, auto;
  border: 1px solid rgba(37,99,168,.15);
  box-shadow: 0 22px 52px rgba(15,23,42,.1);
}

/* ── Scene grid ──────────────────────────────────── */
.wnd-scene {
  display: grid;
  grid-template-columns: 1fr 1.6fr 1fr 0.75fr 1.1fr 1.6fr 1fr;
  align-items: center;
  gap: 0;
  min-height: 240px;
}

.wnd-node,
.wnd-conn {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ── Badges ─────────────────────────────────────── */
.wnd-badge {
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
.wnd-badge-spacer { height: 26px; margin-bottom: 10px; }

.wnd-badge-sky    { background: #e0f2fe; color: #0369a1; border: 1px solid rgba(14,165,233,.22); }
.wnd-badge-blue   { background: #dbeafe; color: #1d4ed8; border: 1px solid rgba(59,130,246,.22); }
.wnd-badge-indigo { background: #e0e7ff; color: #3730a3; border: 1px solid rgba(99,102,241,.22); }
.wnd-badge-yellow { background: #fef9c3; color: #a16207; border: 1px solid rgba(234,179,8,.22); }

.wnd-lbl {
  margin: 10px 0 0;
  font-size: 0.82rem;
  font-weight: 900;
  color: #0f172a;
  line-height: 1;
}
.wnd-conn-lbl {
  display: block;
  margin-top: 6px;
  font-size: 0.67rem;
  font-weight: 800;
  color: #94a3b8;
  letter-spacing: 0.3px;
  text-align: center;
  white-space: nowrap;
}

/* ═══ ① WIND SOURCE ═════════════════════════════════ */
.wnd-wind-src {
  width: 96px;
  height: 132px;
  border-radius: 14px;
  background: linear-gradient(160deg, #eff6ff 0%, #bfdbfe 60%, #93c5fd 100%);
  border: 1.5px solid rgba(37,99,168,.22);
  box-shadow: 0 0 0 1px rgba(37,99,168,.1), 0 18px 36px rgba(37,99,168,.18);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 14px;
  gap: 11px;
  overflow: hidden;
  position: relative;
}

.wnd-streak {
  display: block;
  height: 3.5px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,.9) 40%, rgba(147,197,253,.9) 70%, transparent 100%);
  width: calc(38% + calc(var(--wi) - 1) * 10%);
  animation: wnd-streak 1.6s ease-in-out infinite;
  animation-delay: calc((var(--wi) - 1) * 0.32s);
}

/* ═══ WIND FLOW CONNECTOR ═══════════════════════════ */
.wnd-flow-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wnd-flow-svg {
  width: 100%;
  height: 40px;
  overflow: visible;
}
.wnd-wflow { animation: wnd-wdash .85s linear infinite; }

/* ═══ ② WIND TURBINE ════════════════════════════════ */
.wnd-turbine-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 44px 0;  /* 對稱 padding，讓 hub 落在 node 中線附近 */
}

/* 機艙只作為定位容器，不顯示圓圈外框 */
.wnd-turbine {
  position: relative;
  width: 68px;
  height: 68px;
  display: grid;
  place-items: center;
  overflow: visible;
}

.wnd-turbine-dot {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #38bdf8;
  border: 2.5px solid #fff;
  box-shadow: 0 0 0 2px rgba(56,189,248,.22);
  z-index: 5;
  display: block;
}
.wnd-turbine-inlet  { left:  -54px; }
.wnd-turbine-outlet { right: -54px; background: #94a3b8; box-shadow: 0 0 0 2px rgba(148,163,184,.22); }

/* 旋轉容器比機艙大很多，葉片伸出圓圈外才像真實風車
   用 margin 而非 transform 置中，避免 animation 覆蓋 translate */
.wnd-rotor {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 148px;
  height: 148px;
  margin-left: -74px;
  margin-top: -74px;
  z-index: 2;   /* 葉片在小點前面 */
  animation: wnd-spin 2.8s linear infinite;
}

/* 3 葉片：細長錐形，根部寬、尖端窄，顯著伸出機艙外 */
.wnd-blade {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 66px;
  margin-left: -7px;   /* 偏移讓葉片有迎風側寬度 */
  margin-top: -66px;
  transform-origin: 7px 100%;
  transform: rotate(var(--r));
  clip-path: polygon(28% 0%, 100% 4%, 100% 100%, 0% 100%);
  background: linear-gradient(175deg, #f0f9ff 0%, #93c5fd 30%, #3b82f6 72%, #1e40af 100%);
  box-shadow: 1px 2px 10px rgba(37,99,168,.28);
  display: block;
}

.wnd-hub {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: radial-gradient(circle, #fff 0%, #94a3b8 100%);
  border: 3px solid #e2e8f0;
  z-index: 2;
  display: block;
}
.wnd-streamlines {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}
.wnd-sl {
  position: absolute;
  left: -80px;
  top: calc(50% + var(--sy));
  width: var(--sw);
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent 0%, rgba(147,197,253,.7) 40%, rgba(96,165,250,.5) 70%, transparent 100%);
  animation: wnd-sl-flow 1.8s ease-in-out infinite;
  animation-delay: calc((var(--si) - 1) * 0.36s);
  display: block;
}

/* 塔柱：放在 .wnd-turbine 內部，相對 turbine 定位，溢出範圍在 wrap padding 內，不碰標籤 */
.wnd-tower-base {
  position: absolute;
  top: 43px;       /* hub bottom（hub center 34px + hub radius 9px） */
  left: 50%;
  transform: translateX(-50%);
  width: 22px;
  height: 66px;    /* 43+66=109px；wrap padding-bottom(44) 確保不碰 label */
  background: linear-gradient(180deg, #b8c4d0 0%, #64748b 100%);
  clip-path: polygon(28% 0%, 72% 0%, 100% 100%, 0% 100%);
  z-index: 0;
}

/* ═══ SHAFT CONNECTOR ═══════════════════════════════ */
.wnd-shaft-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
}
.wnd-shaft-row {
  align-self: flex-start;
  width: calc(100% + 18px);
  display: flex;
  align-items: center;
}
.wnd-shaft-cap {
  border-radius: 50%;
  background: #94a3b8;
  border: 2.5px solid #fff;
  box-shadow: 0 0 0 2px rgba(148,163,184,.22);
  flex-shrink: 0;
  display: block;
}
.wnd-shaft-cap-left {
  width: 13px;
  height: 13px;
}
.wnd-shaft-cap-right {
  width: 16px;
  height: 16px;
  border: 3px solid #fff;
  box-shadow: 0 0 0 3px rgba(148,163,184,.25);
  z-index: 4;
}
.wnd-shaft-track {
  position: relative;
  flex: 1;
  height: 12px;
  border-radius: 999px;
  background: linear-gradient(90deg, #cbd5e1 0%, #94a3b8 46%, #cbd5e1 100%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.52),
    0 5px 12px rgba(15,23,42,.1);
  overflow: hidden;
}
.wnd-sdot {
  position: absolute;
  top: 2px;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,.88);
  animation: wnd-sdot 1.65s linear infinite;
  animation-delay: var(--sd);
  display: block;
}

/* ═══ ③ GENERATOR ════════════════════════════════════ */
.wnd-gen-wrap {
  position: relative;
  width: 118px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wnd-gen-body {
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
.wnd-gen-dot {
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
.wnd-gen-inlet {
  left: -9px;
  background: #94a3b8;
  box-shadow: 0 0 0 3px rgba(148,163,184,.25);
}
.wnd-gen-terminal {
  right: -9px;
  background: #facc15;
  box-shadow: 0 0 0 3px rgba(250,204,21,.25), 0 0 12px rgba(250,204,21,.55);
  animation: wnd-terminal-pulse 1.2s ease-in-out infinite;
}
.wnd-coils {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 17px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 10px;
}
.wnd-coil {
  display: block;
  width: 9px;
  border-radius: 5px;
  height: 62%;
  background: rgba(250,204,21,.32);
  animation: wnd-coil-pulse 1.2s ease-in-out infinite;
  animation-delay: var(--cd);
}
.wnd-gen-core {
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
.wnd-bolt-svg { width: 20px; height: 26px; }
.wnd-bolt {
  fill: #facc15;
  filter: drop-shadow(0 0 5px rgba(250,204,21,.7));
  animation: wnd-bolt-flash 1.2s ease-in-out infinite;
}
.wnd-field-rings {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 17px;
  display: grid;
  place-items: center;
  pointer-events: none;
}
.wnd-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(250,204,21,.22);
  animation: wnd-ring-expand 1.8s ease-out infinite;
  animation-delay: calc(var(--ri) * .9s);
  display: block;
  width: 48px;
  height: 48px;
}

/* ═══ POWER CABLE ════════════════════════════════════ */
.wnd-cable-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wnd-cable-svg { width: 100%; height: 56px; overflow: visible; }
.wnd-eflow { animation: wnd-edash .8s linear infinite; }
.wnd-edot {
  offset-path: path('M2 28 Q100 10 198 28');
  animation: wnd-edot-move 1.2s linear infinite;
}
.wnd-edot2 { animation-delay: .6s; }

/* ═══ ④ GRID ═════════════════════════════════════════ */
.wnd-grid-wrap {
  position: relative;
  width: 96px;
  height: 136px;
}
.wnd-tower { width: 100%; height: 100%; object-fit: contain; position: relative; z-index: 1; }
.wnd-halo {
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translateX(-50%);
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(250,204,21,.28), transparent 70%);
  animation: wnd-halo-pulse 2s ease-in-out infinite;
  display: block;
}
.wnd-spark {
  position: absolute;
  font-size: .85rem;
  z-index: 2;
  animation: wnd-spark 2.4s ease-in-out infinite;
}
.wnd-sp1 { top: 6%;  left:  4%; animation-delay: 0s; }
.wnd-sp2 { top: 12%; right: 4%; animation-delay: 1.2s; }

/* ═══ SUMMARY BAR ════════════════════════════════════ */
.wnd-summary {
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
.wnd-chip {
  padding: 5px 14px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 900;
}
.wnd-sep { color: #94a3b8; font-size: 1rem; font-weight: 700; }
.wnd-chip-sky    { background: #e0f2fe; color: #0369a1; }
.wnd-chip-blue   { background: #dbeafe; color: #1d4ed8; }
.wnd-chip-indigo { background: #e0e7ff; color: #3730a3; }
.wnd-chip-yellow { background: #fef9c3; color: #a16207; }

/* ═══ KEYFRAMES ══════════════════════════════════════ */
@keyframes wnd-streak {
  0%   { transform: translateX(-120%); opacity: 0; }
  18%  { opacity: 1; }
  80%  { opacity: .85; }
  100% { transform: translateX(220%); opacity: 0; }
}
@keyframes wnd-wdash {
  from { stroke-dashoffset: 36; }
  to   { stroke-dashoffset: 0; }
}
@keyframes wnd-spin { to { transform: rotate(360deg); } }
@keyframes wnd-sl-flow {
  0%   { transform: translateX(0);    opacity: 0; }
  15%  { opacity: 1; }
  80%  { opacity: .6; }
  100% { transform: translateX(220px); opacity: 0; }
}
@keyframes wnd-sdot {
  from { left: -10%; opacity: 0; }
  15%  { opacity: 1; }
  85%  { opacity: 1; }
  to   { left: 110%; opacity: 0; }
}
@keyframes wnd-coil-pulse {
  0%,100% { opacity: .28; transform: scaleY(.86); background: rgba(250,204,21,.28); }
  50%     { opacity: 1;   transform: scaleY(1);   background: rgba(250,204,21,.72); }
}
@keyframes wnd-bolt-flash {
  0%,100% { opacity: .7;  filter: drop-shadow(0 0 4px rgba(250,204,21,.55)); }
  50%     { opacity: 1;   filter: drop-shadow(0 0 12px rgba(250,204,21,1)); }
}
@keyframes wnd-ring-expand {
  0%   { transform: scale(.9);  opacity: .5; }
  70%  { transform: scale(1.8); opacity: 0; }
  100% { transform: scale(1.8); opacity: 0; }
}
@keyframes wnd-terminal-pulse {
  0%,100% { box-shadow: 0 0 0 3px rgba(250,204,21,.25), 0 0 12px rgba(250,204,21,.4); }
  50%     { box-shadow: 0 0 0 6px rgba(250,204,21,.12), 0 0 20px rgba(250,204,21,.75); }
}
@keyframes wnd-edash {
  from { stroke-dashoffset: 42; }
  to   { stroke-dashoffset: 0; }
}
@keyframes wnd-edot-move {
  from { offset-distance: 0%;   opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  to   { offset-distance: 100%; opacity: 0; }
}
@keyframes wnd-halo-pulse {
  0%,100% { transform: translateX(-50%) scale(1);    opacity: .6; }
  50%     { transform: translateX(-50%) scale(1.38); opacity: 1; }
}
@keyframes wnd-spark {
  0%,100% { opacity: 0; transform: scale(.5) translateY(0); }
  20%,80% { opacity: 1; transform: scale(1)  translateY(-3px); }
  50%     { opacity: 1; transform: scale(1.2) translateY(-7px); }
}

/* ═══ RESPONSIVE ═════════════════════════════════════ */
@media (max-width: 820px) {
  .wnd { padding: 16px 14px 14px; }
  .wnd-scene {
    grid-template-columns: repeat(7, minmax(108px, 1fr));
    overflow-x: auto;
    padding-bottom: 10px;
  }
  .wnd-turbine { width: 56px; height: 56px; }
  .wnd-rotor   { width: 120px; height: 120px; margin-left: -60px; margin-top: -60px; }
  .wnd-wind-src { width: 82px; height: 112px; }
  .wnd-gen-body { width: 104px; height: 80px; }
  .wnd-gen-wrap { width: 104px; }
  .wnd-grid-wrap { width: 84px; height: 120px; }
}
</style>
