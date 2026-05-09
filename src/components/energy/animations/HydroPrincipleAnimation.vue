<script setup>
import transmissionTower from '@/assets/energy/transmission-tower.svg'
</script>

<template>
  <article class="hd" aria-label="水力發電原理動畫">

    <div class="hd-scene">

      <!-- ① 水庫 -->
      <div class="hd-node">
        <div class="hd-badge hd-badge-blue">位能</div>
        <div class="hd-dam">
          <div class="hd-reservoir">
            <span class="hd-wave" style="--d:0s"></span>
            <span class="hd-wave" style="--d:.9s"></span>
            <span class="hd-wave" style="--d:1.8s"></span>
            <div class="hd-depth-lines">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div class="hd-wall">
            <span v-for="i in 10" :key="i" class="hd-brick"></span>
            <span class="hd-outlet"></span>
          </div>
        </div>
        <p class="hd-lbl">水庫</p>
      </div>

      <!-- 連接①→② 高壓水道（動能） -->
      <div class="hd-conn">
        <div class="hd-badge hd-badge-cyan">動能</div>
        <div class="hd-pipe-wrap">
          <svg class="hd-pipe-svg" viewBox="0 0 200 40" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <marker id="hd-wa" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto" markerUnits="userSpaceOnUse">
                <path d="M2 2L7 5L2 8" fill="none" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </marker>
            </defs>
            <!-- 膠囊形管道背景 -->
            <rect x="0" y="10" width="200" height="20" rx="10" fill="rgba(100,116,139,.16)"/>
            <!-- 管道光澤線 -->
            <rect x="4" y="12.5" width="192" height="3" rx="1.5" fill="rgba(255,255,255,.58)"/>
            <!-- 水流虛線 -->
            <path
              class="hd-wflow"
              d="M14 20 L186 20"
              stroke="#22d3ee"
              stroke-width="5"
              stroke-dasharray="10 8"
              stroke-linecap="round"
              fill="none"
              marker-end="url(#hd-wa)"
            />
          </svg>
          <span class="hd-conn-lbl">高壓水道</span>
        </div>
      </div>

      <!-- ② 水輪機 -->
      <div class="hd-node">
        <div class="hd-badge hd-badge-green">機械能</div>
        <div class="hd-turbine-wrap">
          <!-- 水射流 -->
          <div class="hd-jets" aria-hidden="true">
            <span class="hd-jet" style="--jd:0s;   --jt:36%"></span>
            <span class="hd-jet" style="--jd:.33s; --jt:50%"></span>
            <span class="hd-jet" style="--jd:.66s; --jt:64%"></span>
          </div>
          <div class="hd-turbine">
            <!-- 連接點：水管→水輪機 -->
            <span class="hd-turbine-dot hd-turbine-inlet"></span>
            <!-- 連接點：水輪機→傳動軸 -->
            <span class="hd-turbine-dot hd-turbine-outlet"></span>
            <div class="hd-rotor">
              <span v-for="n in 6" :key="n" class="hd-blade" :style="`--r:${(n-1)*60}deg`"></span>
              <span class="hd-hub"></span>
            </div>
          </div>
        </div>
        <p class="hd-lbl">水輪機</p>
      </div>

      <!-- 連接②→③ 傳動軸 -->
      <div class="hd-conn">
        <div class="hd-badge-spacer"></div>
        <div class="hd-shaft-wrap">
          <div class="hd-shaft-track">
            <span class="hd-sdot" style="--sd:0s"></span>
            <span class="hd-sdot" style="--sd:.45s"></span>
            <span class="hd-sdot" style="--sd:.9s"></span>
          </div>
          <span class="hd-conn-lbl">傳動軸</span>
        </div>
      </div>

      <!-- ③ 發電機 -->
      <div class="hd-node">
        <div class="hd-badge hd-badge-yellow">電能</div>
        <div class="hd-gen-wrap">
          <div class="hd-gen-body">
            <!-- 連接點：傳動軸→發電機 -->
            <span class="hd-gen-dot hd-gen-inlet"></span>
            <!-- 連接點：發電機→電力線 -->
            <span class="hd-gen-dot hd-gen-terminal"></span>
            <div class="hd-coils" aria-hidden="true">
              <span class="hd-coil" style="--cd:0s"></span>
              <span class="hd-coil" style="--cd:.3s"></span>
              <span class="hd-coil" style="--cd:.6s"></span>
              <span class="hd-coil" style="--cd:.9s"></span>
            </div>
            <div class="hd-gen-core">
              <svg viewBox="0 0 20 28" class="hd-bolt-svg" aria-hidden="true">
                <path class="hd-bolt" d="M13 0 L4 15H11L8 28L20 12H13Z"/>
              </svg>
            </div>
            <div class="hd-field-rings" aria-hidden="true">
              <span class="hd-ring" style="--ri:0"></span>
              <span class="hd-ring" style="--ri:1"></span>
            </div>
          </div>
        </div>
        <p class="hd-lbl">發電機</p>
      </div>

      <!-- 連接③→④ 電力輸出 -->
      <div class="hd-conn">
        <div class="hd-badge-spacer"></div>
        <div class="hd-cable-wrap">
          <svg
            class="hd-cable-svg"
            viewBox="0 0 200 56"
            preserveAspectRatio="none"
            overflow="visible"
            aria-hidden="true"
          >
            <defs>
              <filter id="hd-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <path d="M2 28 Q100 10 198 28" stroke="rgba(250,204,21,.16)" stroke-width="14" fill="none" stroke-linecap="round"/>
            <path class="hd-eflow" d="M2 28 Q100 10 198 28" stroke="#facc15" stroke-width="4" stroke-dasharray="12 9" fill="none" stroke-linecap="round"/>
            <circle class="hd-edot"       r="5.5" fill="#facc15" filter="url(#hd-glow)"/>
            <circle class="hd-edot hd-edot2" r="5.5" fill="#facc15" filter="url(#hd-glow)"/>
          </svg>
          <span class="hd-conn-lbl">電力輸出</span>
        </div>
      </div>

      <!-- ④ 電網 -->
      <div class="hd-node">
        <div class="hd-badge-spacer"></div>
        <div class="hd-grid-wrap">
          <span class="hd-halo"></span>
          <img :src="transmissionTower" alt="" class="hd-tower" aria-hidden="true"/>
          <span class="hd-spark hd-sp1" aria-hidden="true">⚡</span>
          <span class="hd-spark hd-sp2" aria-hidden="true">⚡</span>
        </div>
        <p class="hd-lbl">電網</p>
      </div>

    </div>

    <!-- 能量轉換流程摘要 -->
    <div class="hd-summary" aria-label="能量轉換流程">
      <span class="hd-chip hd-chip-blue">位能</span>
      <span class="hd-sep">→</span>
      <span class="hd-chip hd-chip-cyan">動能</span>
      <span class="hd-sep">→</span>
      <span class="hd-chip hd-chip-green">機械能</span>
      <span class="hd-sep">→</span>
      <span class="hd-chip hd-chip-yellow">電能</span>
    </div>

  </article>
</template>

<style scoped>
/* ── Card ──────────────────────────────────────────── */
.hd {
  width: 100%;
  padding: 26px 26px 20px;
  border-radius: 26px;
  background:
    linear-gradient(rgba(2,132,199,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(2,132,199,.04) 1px, transparent 1px),
    linear-gradient(135deg, #f0f9ff 0%, #ffffff 55%, #f0fdf4 100%);
  background-size: 32px 32px, 32px 32px, auto;
  border: 1px solid rgba(14,165,233,.15);
  box-shadow: 0 22px 52px rgba(15,23,42,.1);
}

/* ── Scene grid：align-items:center 讓所有元素同水平中心 ── */
.hd-scene {
  display: grid;
  grid-template-columns: 1fr 1.6fr 1fr 0.75fr 1.1fr 1.6fr 1fr;
  align-items: center;
  gap: 0;
  min-height: 240px;
}

/* ── Nodes & Connectors ─────────────────────────────── */
.hd-node,
.hd-conn {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ── Energy badge ────────────────────────────────────── */
.hd-badge {
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
.hd-badge-spacer {
  height: 26px;
  margin-bottom: 10px;
}

.hd-badge-blue   { background: #dbeafe; color: #1d4ed8; border: 1px solid rgba(59,130,246,.22); }
.hd-badge-cyan   { background: #cffafe; color: #0891b2; border: 1px solid rgba(6,182,212,.22); }
.hd-badge-green  { background: #dcfce7; color: #15803d; border: 1px solid rgba(34,197,94,.22); }
.hd-badge-yellow { background: #fef9c3; color: #a16207; border: 1px solid rgba(234,179,8,.22); }

/* ── Node label ──────────────────────────────────────── */
.hd-lbl {
  margin: 10px 0 0;
  font-size: 0.82rem;
  font-weight: 900;
  color: #0f172a;
  line-height: 1;
}

/* ── Connector sub-label ─────────────────────────────── */
.hd-conn-lbl {
  display: block;
  margin-top: 6px;
  font-size: 0.67rem;
  font-weight: 800;
  color: #94a3b8;
  letter-spacing: 0.3px;
  text-align: center;
  white-space: nowrap;
}

/* ═══ ① DAM ════════════════════════════════════════════ */
.hd-dam {
  display: flex;
  width: 108px;
  height: 140px;
  border-radius: 14px;
  overflow: visible;          /* outlet dot 需要溢出 */
  box-shadow:
    0 0 0 1px rgba(2,132,199,.18),
    0 18px 36px rgba(2,132,199,.2);
}

/* 水庫內部需要 overflow:hidden 讓波浪裁切 */
.hd-reservoir {
  flex: 1;
  background: linear-gradient(180deg, #7dd3fc 0%, #0ea5e9 45%, #0369a1 100%);
  position: relative;
  overflow: hidden;
  border-radius: 13px 0 0 13px;
}

.hd-wave {
  position: absolute;
  left: -30%;
  top: 0;
  width: 160%;
  height: 22px;
  border-radius: 50%;
  background: rgba(186,230,253,.72);
  animation: hd-wave 2.8s ease-in-out infinite;
  animation-delay: var(--d);
  display: block;
}

.hd-depth-lines {
  position: absolute;
  inset: 28px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.hd-depth-lines span {
  display: block;
  height: 1px;
  border-radius: 1px;
  background: rgba(255,255,255,.18);
}

.hd-wall {
  width: 26px;
  background: linear-gradient(180deg, #94a3b8 0%, #475569 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: visible;
  border-radius: 0 13px 13px 0;
}
.hd-brick {
  flex: 1;
  display: block;
  border-top: 1px solid rgba(255,255,255,.18);
}

/* 出水口：對齊水平管道中心（top:50%） */
.hd-outlet {
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: radial-gradient(circle, #67e8f9 0%, #0891b2 100%);
  border: 3px solid #fff;
  box-shadow: 0 0 0 3px rgba(34,211,238,.3), 0 0 14px rgba(34,211,238,.55);
  animation: hd-outlet-pulse 2s ease-in-out infinite;
  z-index: 2;
  display: block;
}

/* ═══ PENSTOCK PIPE ═════════════════════════════════════ */
.hd-pipe-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hd-pipe-svg {
  width: 100%;
  height: 40px;
  overflow: visible;
}
.hd-wflow {
  animation: hd-wdash .85s linear infinite;
}

/* ═══ ② TURBINE ═════════════════════════════════════════ */
.hd-turbine-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hd-jets {
  position: absolute;
  left: -18px;
  top: 0;
  height: 100%;
  width: 18px;
  pointer-events: none;
}
.hd-jet {
  position: absolute;
  top: var(--jt);
  left: 0;
  width: 15px;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, #22d3ee);
  transform-origin: left center;
  animation: hd-jet 1s ease-out infinite;
  animation-delay: var(--jd);
  display: block;
}

.hd-turbine {
  position: relative;
  width: 112px;
  height: 112px;
  border-radius: 50%;
  background: rgba(255,255,255,.96);
  border: 9px solid rgba(14,165,233,.25);
  box-shadow:
    0 0 0 2px rgba(14,165,233,.08),
    0 18px 38px rgba(2,132,199,.22);
  display: grid;
  place-items: center;
  overflow: visible;
}

/* 點對點連接點（水輪機左側接水管） */
.hd-turbine-dot {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #22d3ee;
  border: 3px solid #fff;
  box-shadow: 0 0 0 3px rgba(34,211,238,.25), 0 0 10px rgba(34,211,238,.5);
  z-index: 3;
  display: block;
}
.hd-turbine-inlet  { left:  -8px; }
.hd-turbine-outlet { right: -8px; background: #94a3b8; box-shadow: 0 0 0 3px rgba(148,163,184,.25); }

.hd-rotor {
  position: relative;
  width: 82px;
  height: 82px;
  animation: hd-spin 1.5s linear infinite;
}
.hd-blade {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 15px;
  height: 36px;
  margin-left: -7.5px;
  margin-top: -36px;
  transform-origin: 50% 100%;
  transform: rotate(var(--r));
  border-radius: 8px 8px 3px 3px;
  background: linear-gradient(180deg, #e0f2fe 0%, #0ea5e9 100%);
  box-shadow: 0 2px 6px rgba(2,132,199,.25);
  display: block;
}
.hd-hub {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: radial-gradient(circle, #fff 0%, #94a3b8 100%);
  border: 3px solid #e2e8f0;
  z-index: 2;
  display: block;
}

/* ═══ SHAFT CONNECTOR ════════════════════════════════════ */
.hd-shaft-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hd-shaft-track {
  position: relative;
  width: 100%;
  height: 10px;
  border-radius: 999px;
  background: linear-gradient(90deg, #cbd5e1, #94a3b8, #cbd5e1);
  overflow: hidden;
}
.hd-sdot {
  position: absolute;
  top: 50%;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,.85);
  transform: translateY(-50%);
  animation: hd-sdot 1.35s linear infinite;
  animation-delay: var(--sd);
  display: block;
}

/* ═══ ③ GENERATOR ════════════════════════════════════════ */
.hd-gen-wrap {
  position: relative;
  width: 118px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hd-gen-body {
  width: 118px;
  height: 90px;
  border-radius: 18px;
  background: linear-gradient(145deg, #f8fafc, #f1f5f9);
  border: 1.5px solid rgba(100,116,139,.2);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.9),
    0 18px 36px rgba(15,23,42,.12);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: visible;
}

/* 點對點連接點 */
.hd-gen-dot {
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
.hd-gen-inlet {
  left: -9px;
  background: #94a3b8;
  box-shadow: 0 0 0 3px rgba(148,163,184,.25);
}
.hd-gen-terminal {
  right: -9px;
  background: #facc15;
  box-shadow: 0 0 0 3px rgba(250,204,21,.25), 0 0 12px rgba(250,204,21,.55);
  animation: hd-terminal-pulse 1.2s ease-in-out infinite;
}

.hd-coils {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 17px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 10px;
}
.hd-coil {
  display: block;
  width: 9px;
  border-radius: 5px;
  height: 62%;
  background: rgba(250,204,21,.32);
  animation: hd-coil-pulse 1.2s ease-in-out infinite;
  animation-delay: var(--cd);
}
.hd-gen-core {
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
.hd-bolt-svg { width: 20px; height: 26px; }
.hd-bolt {
  fill: #facc15;
  filter: drop-shadow(0 0 5px rgba(250,204,21,.7));
  animation: hd-bolt-flash 1.2s ease-in-out infinite;
}
.hd-field-rings {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 17px;
  display: grid;
  place-items: center;
  pointer-events: none;
}
.hd-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(250,204,21,.22);
  animation: hd-ring-expand 1.8s ease-out infinite;
  animation-delay: calc(var(--ri) * .9s);
  display: block;
  width: 48px;
  height: 48px;
}

/* ═══ POWER CABLE ════════════════════════════════════════ */
.hd-cable-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hd-cable-svg {
  width: 100%;
  height: 56px;
  overflow: visible;
}
.hd-eflow {
  animation: hd-edash .8s linear infinite;
}
/* offset-path 座標對應 SVG viewBox 中的路徑 */
.hd-edot {
  offset-path: path('M2 28 Q100 10 198 28');
  animation: hd-edot-move 1.2s linear infinite;
}
.hd-edot2 { animation-delay: .6s; }

/* ═══ ④ GRID / TOWER ═════════════════════════════════════ */
.hd-grid-wrap {
  position: relative;
  width: 96px;
  height: 136px;
}
.hd-tower {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: relative;
  z-index: 1;
}
.hd-halo {
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translateX(-50%);
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(250,204,21,.28), transparent 70%);
  animation: hd-halo-pulse 2s ease-in-out infinite;
  display: block;
}
.hd-spark {
  position: absolute;
  font-size: .85rem;
  z-index: 2;
  animation: hd-spark 2.4s ease-in-out infinite;
}
.hd-sp1 { top: 6%;  left:  4%; animation-delay: 0s; }
.hd-sp2 { top: 12%; right: 4%; animation-delay: 1.2s; }

/* ═══ SUMMARY BAR ════════════════════════════════════════ */
.hd-summary {
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
.hd-chip {
  padding: 5px 14px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 900;
}
.hd-sep { color: #94a3b8; font-size: 1rem; font-weight: 700; }
.hd-chip-blue   { background: #dbeafe; color: #1d4ed8; }
.hd-chip-cyan   { background: #cffafe; color: #0891b2; }
.hd-chip-green  { background: #dcfce7; color: #15803d; }
.hd-chip-yellow { background: #fef9c3; color: #a16207; }

/* ═══ KEYFRAMES ══════════════════════════════════════════ */
@keyframes hd-wave {
  0%,100% { transform: translateY(0)   scaleX(1); }
  50%      { transform: translateY(10px) scaleX(1.06); }
}
@keyframes hd-outlet-pulse {
  0%,100% { box-shadow: 0 0 0 3px rgba(34,211,238,.3),  0 0 14px rgba(34,211,238,.45); }
  50%      { box-shadow: 0 0 0 7px rgba(34,211,238,.12), 0 0 22px rgba(34,211,238,.7); }
}
@keyframes hd-wdash {
  from { stroke-dashoffset: 36; }
  to   { stroke-dashoffset: 0; }
}
@keyframes hd-jet {
  0%   { transform: scaleX(0);   opacity: 0; }
  25%  { transform: scaleX(1);   opacity: 1; }
  75%  { transform: scaleX(1.1); opacity: .8; }
  100% { transform: scaleX(0);   opacity: 0; }
}
@keyframes hd-spin { to { transform: rotate(360deg); } }
@keyframes hd-sdot {
  from { left: -10%; opacity: 0; }
  15%  { opacity: 1; }
  85%  { opacity: 1; }
  to   { left: 110%; opacity: 0; }
}
@keyframes hd-coil-pulse {
  0%,100% { opacity: .28; transform: scaleY(.86); background: rgba(250,204,21,.28); }
  50%      { opacity: 1;   transform: scaleY(1);   background: rgba(250,204,21,.72); }
}
@keyframes hd-bolt-flash {
  0%,100% { opacity: .7;  filter: drop-shadow(0 0 4px rgba(250,204,21,.55)); }
  50%      { opacity: 1;   filter: drop-shadow(0 0 12px rgba(250,204,21,1)); }
}
@keyframes hd-ring-expand {
  0%   { transform: scale(.9);  opacity: .5; }
  70%  { transform: scale(1.8); opacity: 0; }
  100% { transform: scale(1.8); opacity: 0; }
}
@keyframes hd-terminal-pulse {
  0%,100% { box-shadow: 0 0 0 3px rgba(250,204,21,.25), 0 0 12px rgba(250,204,21,.4); }
  50%      { box-shadow: 0 0 0 6px rgba(250,204,21,.12), 0 0 20px rgba(250,204,21,.75); }
}
@keyframes hd-edash {
  from { stroke-dashoffset: 42; }
  to   { stroke-dashoffset: 0; }
}
@keyframes hd-edot-move {
  from { offset-distance: 0%;   opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  to   { offset-distance: 100%; opacity: 0; }
}
@keyframes hd-halo-pulse {
  0%,100% { transform: translateX(-50%) scale(1);    opacity: .6; }
  50%      { transform: translateX(-50%) scale(1.38); opacity: 1; }
}
@keyframes hd-spark {
  0%,100% { opacity: 0; transform: scale(.5) translateY(0); }
  20%,80% { opacity: 1; transform: scale(1)  translateY(-3px); }
  50%      { opacity: 1; transform: scale(1.2) translateY(-7px); }
}

/* ═══ RESPONSIVE ═════════════════════════════════════════ */
@media (max-width: 820px) {
  .hd { padding: 16px 14px 14px; }
  .hd-scene {
    grid-template-columns: repeat(7, minmax(108px, 1fr));
    overflow-x: auto;
    padding-bottom: 10px;
  }
  .hd-turbine { width: 96px; height: 96px; }
  .hd-rotor   { width: 70px; height: 70px; }
  .hd-dam     { width: 94px; height: 122px; }
  .hd-gen-body { width: 104px; height: 80px; }
  .hd-gen-wrap { width: 104px; }
  .hd-grid-wrap { width: 84px; height: 120px; }
}
</style>
