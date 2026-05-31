<script setup>
import transmissionTower from '@/assets/energy/transmission-tower.svg'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const photonLaneRef = ref(null)
const anime = window.anime

let spawnInterval = null
let animInstances = []

function spawnPhoton() {
  const lane = photonLaneRef.value
  if (!lane || !anime) return
  const w = lane.offsetWidth
  const h = lane.offsetHeight
  if (!w) return

  const el = document.createElement('span')
  el.style.cssText = `
    position:absolute;
    left:0;
    top:${8 + Math.random() * (h - 16)}px;
    width:${5 + Math.random() * 4}px;
    height:${5 + Math.random() * 4}px;
    border-radius:50%;
    background:radial-gradient(circle,#fde68a,#fbbf24);
    box-shadow:0 0 7px 2px rgba(251,191,36,.75);
    pointer-events:none;
    display:block;
  `
  lane.appendChild(el)

  const ins = anime({
    targets: el,
    translateX: w,
    opacity: [0, 1, 1, 0],
    easing: 'linear',
    duration: 650 + Math.random() * 450,
    complete: () => { try { el.remove() } catch(e) {} }
  })
  animInstances.push(ins)
}

onMounted(() => {
  setTimeout(() => {
    spawnPhoton()
    spawnInterval = setInterval(spawnPhoton, 320)
  }, 300)
})

onBeforeUnmount(() => {
  clearInterval(spawnInterval)
  animInstances.forEach(ins => { try { ins.pause?.() } catch(e) {} })
  animInstances = []
  if (photonLaneRef.value) photonLaneRef.value.innerHTML = ''
})
</script>

<template>
  <article class="sl" aria-label="太陽能發電原理動畫">
    <div class="sl-scene">

      <!-- ① 太陽 -->
      <div class="sl-node">
        <div class="sl-badge sl-badge-amber">光能</div>
        <div class="sl-sun-wrap">
          <div class="sl-sun-halo"></div>
          <div class="sl-sun">
            <div class="sl-rays">
              <span v-for="i in 8" :key="i" class="sl-ray" :style="`--ri:${i}`"></span>
            </div>
          </div>
        </div>
        <p class="sl-lbl">太陽</p>
      </div>

      <!-- 連接①→② 光子流 -->
      <div class="sl-conn">
        <div class="sl-badge sl-badge-yellow">光子</div>
        <div class="sl-pipe-wrap">
          <div class="sl-photon-track" ref="photonLaneRef"></div>
          <span class="sl-conn-lbl">光子流</span>
        </div>
      </div>

      <!-- ② 太陽能板 -->
      <div class="sl-node">
        <div class="sl-badge sl-badge-green">光電效應</div>
        <div class="sl-panel-wrap">
          <!-- 接收光子的連接點 -->
          <span class="sl-panel-dot sl-panel-inlet"></span>
          <!-- 輸出電流的連接點 -->
          <span class="sl-panel-dot sl-panel-outlet"></span>
          <div class="sl-panel">
            <!-- 電池格 3×4 -->
            <div class="sl-cells">
              <span v-for="n in 12" :key="n" class="sl-cell" :style="`--ci:${n}`"></span>
            </div>
            <!-- 玻璃光澤 -->
            <div class="sl-panel-sheen"></div>
            <!-- 掃光動畫 -->
            <!-- <div class="sl-panel-sweep"></div> -->
          </div>
        </div>
        <p class="sl-lbl">太陽能板</p>
      </div>

      <!-- 連接②→③ 直流電 DC -->
      <div class="sl-conn">
        <div class="sl-badge-spacer"></div>
        <div class="sl-shaft-wrap">
          <div class="sl-shaft-track sl-dc-track">
            <span class="sl-sdot" style="--sd:0s"></span>
            <span class="sl-sdot" style="--sd:.45s"></span>
            <span class="sl-sdot" style="--sd:.9s"></span>
          </div>
          <span class="sl-conn-lbl">直流電 DC</span>
        </div>
      </div>

      <!-- ③ 逆變器 -->
      <div class="sl-node">
        <div class="sl-badge sl-badge-orange">轉換</div>
        <div class="sl-inv-wrap">
          <div class="sl-inv-body">
            <span class="sl-inv-dot sl-inv-inlet"></span>
            <span class="sl-inv-dot sl-inv-outlet"></span>
            <!-- 波形視覺 -->
            <div class="sl-inv-waves">
              <span class="sl-inv-wave" style="--wd:0s"></span>
              <span class="sl-inv-wave" style="--wd:.3s"></span>
              <span class="sl-inv-wave" style="--wd:.6s"></span>
              <span class="sl-inv-wave" style="--wd:.9s"></span>
            </div>
            <div class="sl-inv-core">
              <svg class="sl-inv-symbol" viewBox="0 0 36 24" fill="none" aria-hidden="true">
                <!-- 方波（DC） -->
                <path d="M1 18 L1 8 L9 8 L9 18 L17 18 L17 8" stroke="#f97316" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                <!-- 正弦波（AC） -->
                <path d="M20 13 Q24 4 28 13 Q32 22 36 13" stroke="#fbbf24" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="sl-inv-rings">
              <span class="sl-inv-ring" style="--ri:0"></span>
              <span class="sl-inv-ring" style="--ri:1"></span>
            </div>
          </div>
        </div>
        <p class="sl-lbl">逆變器</p>
      </div>

      <!-- 連接③→④ 交流電輸出 -->
      <div class="sl-conn">
        <div class="sl-badge-spacer"></div>
        <div class="sl-cable-wrap">
          <svg class="sl-cable-svg" viewBox="0 0 200 56" preserveAspectRatio="none" overflow="visible" aria-hidden="true">
            <defs>
              <filter id="sl-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <path d="M2 28 Q100 10 198 28" stroke="rgba(251,191,36,.14)" stroke-width="14" fill="none" stroke-linecap="round"/>
            <path class="sl-eflow" d="M2 28 Q100 10 198 28" stroke="#fbbf24" stroke-width="4" stroke-dasharray="12 9" fill="none" stroke-linecap="round"/>
            <circle class="sl-edot"        r="5.5" fill="#fbbf24" filter="url(#sl-glow)"/>
            <circle class="sl-edot sl-edot2" r="5.5" fill="#fbbf24" filter="url(#sl-glow)"/>
          </svg>
          <span class="sl-conn-lbl">交流電 AC</span>
        </div>
      </div>

      <!-- ④ 電網 -->
      <div class="sl-node">
        <div class="sl-badge-spacer"></div>
        <div class="sl-grid-wrap">
          <span class="sl-halo"></span>
          <img :src="transmissionTower" alt="" class="sl-tower" aria-hidden="true"/>
          <span class="sl-spark sl-sp1" aria-hidden="true">⚡</span>
          <span class="sl-spark sl-sp2" aria-hidden="true">⚡</span>
        </div>
        <p class="sl-lbl">電網</p>
      </div>

    </div>

    <!-- 能量轉換流程摘要 -->
    <div class="sl-summary" aria-label="能量轉換流程">
      <span class="sl-chip sl-chip-amber">光能</span>
      <span class="sl-sep">→</span>
      <span class="sl-chip sl-chip-green">光電效應</span>
      <span class="sl-sep">→</span>
      <span class="sl-chip sl-chip-orange">直流電</span>
      <span class="sl-sep">→</span>
      <span class="sl-chip sl-chip-yellow">交流電</span>
    </div>
  </article>
</template>

<style scoped>
/* ── Card（對齊水力底色風格，改為暖色系） ── */
.sl {
  width: 100%;
  padding: 26px 26px 20px;
  border-radius: 26px;
  background:
    linear-gradient(rgba(251,191,36,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(251,191,36,.04) 1px, transparent 1px),
    linear-gradient(135deg, #fffbeb 0%, #ffffff 55%, #fff7ed 100%);
  background-size: 32px 32px, 32px 32px, auto;
  border: 1px solid rgba(251,191,36,.18);
  box-shadow: 0 22px 52px rgba(15,23,42,.1);
}

/* ── Scene grid（與水力相同的 7 欄） ── */
.sl-scene {
  display: grid;
  grid-template-columns: 1fr 1.6fr 1fr 0.75fr 1.1fr 1.6fr 1fr;
  align-items: center;
  gap: 0;
  min-height: 240px;
}

.sl-node,
.sl-conn {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ── Badge（與水力同結構，換色） ── */
.sl-badge {
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
.sl-badge-spacer { height: 26px; margin-bottom: 10px; }

.sl-badge-amber  { background: #fef3c7; color: #92400e; border: 1px solid rgba(245,158,11,.22); }
.sl-badge-yellow { background: #fef9c3; color: #a16207; border: 1px solid rgba(234,179,8,.22); }
.sl-badge-green  { background: #dcfce7; color: #15803d; border: 1px solid rgba(34,197,94,.22); }
.sl-badge-orange { background: #ffedd5; color: #9a3412; border: 1px solid rgba(249,115,22,.22); }

/* ── Node label ── */
.sl-lbl {
  margin: 10px 0 0;
  font-size: 0.82rem;
  font-weight: 900;
  color: #0f172a;
  line-height: 1;
}

/* ── Connector label ── */
.sl-conn-lbl {
  display: block;
  margin-top: 6px;
  font-size: 0.67rem;
  font-weight: 800;
  color: #94a3b8;
  letter-spacing: 0.3px;
  text-align: center;
  white-space: nowrap;
}

/* ═══ ① 太陽 ═══════════════════════════════════════════ */
.sl-sun-wrap {
  position: relative;
  width: 108px;
  height: 108px;
  display: grid;
  place-items: center;
}
.sl-sun-halo {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(251,191,36,.2) 0%, transparent 68%);
  animation: sl-halo-spin 3s ease-in-out infinite alternate;
}
.sl-sun {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(circle at 38% 36%, #fffde7 0%, #fde047 22%, #fbbf24 55%, #f59e0b 82%, #d97706 100%);
  box-shadow:
    0 0 0 3px rgba(251,191,36,.1),
    0 0 24px 8px rgba(251,191,36,.22),
    0 14px 32px rgba(245,158,11,.2);
  display: grid;
  place-items: center;
  animation: sl-sun-pulse 2.8s ease-in-out infinite;
}
.sl-rays {
  position: absolute;
  inset: -18px;
  animation: sl-sun-rotate 12s linear infinite;
}
.sl-ray {
  position: absolute;
  left: 50%;
  top: 1px;
  width: 5px;
  height: 15px;
  margin-left: -2.5px;
  transform-origin: 50% calc(40px + 17px);
  transform: rotate(calc((var(--ri) - 1) * 45deg));
  border-radius: 3px 3px 0 0;
  background: linear-gradient(180deg, rgba(253,230,138,.9) 0%, rgba(251,191,36,0) 100%);
  display: block;
}

/* 出光點（接光子軌道） */
.sl-outlet {
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: radial-gradient(circle, #fde68a 0%, #fbbf24 100%);
  border: 3px solid #fff;
  box-shadow: 0 0 0 3px rgba(251,191,36,.3), 0 0 12px rgba(251,191,36,.6);
  animation: sl-outlet-pulse 2s ease-in-out infinite;
  z-index: 2;
  display: block;
}

/* ═══ 光子軌道 ═══════════════════════════════════════════ */
.sl-pipe-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sl-photon-track {
  position: relative;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background: rgba(251,191,36,.06);
  overflow: hidden;
}

/* ═══ ② 太陽能板 ═══════════════════════════════════════ */
.sl-panel-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 連接點（仿水力水輪機的連接點） */
.sl-panel-dot {
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
.sl-panel-inlet {
  left: -8px;
  background: #fbbf24;
  box-shadow: 0 0 0 3px rgba(251,191,36,.25), 0 0 10px rgba(251,191,36,.55);
}
.sl-panel-outlet {
  right: -8px;
  background: #f97316;
  box-shadow: 0 0 0 3px rgba(249,115,22,.25);
}

/* 面板本體 */
.sl-panel {
  position: relative;
  width: 96px;
  height: 124px;
  border-radius: 8px;
  background: linear-gradient(160deg, #0d2040 0%, #153060 50%, #0e2448 100%);
  border: 3px solid #2d4a80;
  box-shadow:
    0 0 0 1px rgba(96,165,250,.1),
    0 16px 32px rgba(15,23,42,.28),
    inset 0 1px 0 rgba(255,255,255,.07);
  padding: 6px;
  overflow: hidden;
  transform: perspective(280px) rotateY(-10deg) rotateX(4deg);
  animation: sl-panel-charge 2.4s ease-in-out infinite;
}

.sl-cells {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 3px;
  height: 100%;
}
.sl-cell {
  display: block;
  border-radius: 2px;
  background: linear-gradient(135deg, #1a3e7a, #1e4898);
  border: 1px solid rgba(96,165,250,.18);
  animation: sl-cell-glow 2.2s ease-in-out infinite;
  animation-delay: calc(var(--ci) * 0.15s);
}

/* 玻璃光澤 */
.sl-panel-sheen {
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, rgba(255,255,255,.13) 0%, transparent 45%);
  border-radius: 5px;
  pointer-events: none;
}

/* 玻璃反光效果 */
.sl-panel-sweep {
  position: absolute;
  top: -15%;
  left: -50%;
  width: 28%;
  height: 130%;
  transform: skewX(-6deg);
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(186,224,255,.28) 25%,
    rgba(255,255,255,.86) 50%,
    rgba(186,224,255,.28) 75%,
    transparent 100%
  );
  animation: sl-reflect 3.8s ease-in-out infinite;
  pointer-events: none;
  z-index: 3;
}

/* ═══ DC 傳動（仿水力傳動軸） ═══════════════════════════ */
.sl-shaft-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sl-shaft-track {
  position: relative;
  width: 100%;
  height: 10px;
  border-radius: 999px;
  overflow: hidden;
}
.sl-dc-track {
  background: linear-gradient(90deg, #fed7aa, #f97316, #fed7aa);
}
.sl-sdot {
  position: absolute;
  top: 50%;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,.88);
  transform: translateY(-50%);
  animation: sl-sdot 1.35s linear infinite;
  animation-delay: var(--sd);
  display: block;
}

/* ═══ ③ 逆變器（仿水力發電機） ═══════════════════════════ */
.sl-inv-wrap {
  position: relative;
  width: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sl-inv-body {
  width: 110px;
  height: 90px;
  border-radius: 18px;
  background: linear-gradient(145deg, #f8fafc, #f1f5f9);
  border: 1.5px solid rgba(249,115,22,.22);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.9),
    0 18px 36px rgba(15,23,42,.12);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: visible;
}
.sl-inv-dot {
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
.sl-inv-inlet  { left: -9px; background: #f97316; box-shadow: 0 0 0 3px rgba(249,115,22,.25); }
.sl-inv-outlet { right: -9px; background: #facc15; box-shadow: 0 0 0 3px rgba(250,204,21,.25), 0 0 12px rgba(250,204,21,.55); animation: sl-terminal-pulse 1.2s ease-in-out infinite; }

.sl-inv-waves {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 17px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 10px;
}
.sl-inv-wave {
  display: block;
  width: 9px;
  border-radius: 5px;
  height: 62%;
  background: rgba(249,115,22,.3);
  animation: sl-wave-pulse 1.2s ease-in-out infinite;
  animation-delay: var(--wd);
}
.sl-inv-core {
  position: relative;
  z-index: 2;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid rgba(249,115,22,.25);
  box-shadow: 0 0 18px rgba(249,115,22,.2);
  display: grid;
  place-items: center;
}
.sl-inv-symbol { width: 36px; height: 24px; }
.sl-inv-rings {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 17px;
  display: grid;
  place-items: center;
  pointer-events: none;
}
.sl-inv-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(249,115,22,.2);
  animation: sl-ring-expand 1.8s ease-out infinite;
  animation-delay: calc(var(--ri) * .9s);
  width: 54px;
  height: 54px;
  display: block;
}

/* ═══ AC 電纜（與水力電力輸出相同結構） ═══════════════════ */
.sl-cable-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sl-cable-svg { width: 100%; height: 56px; overflow: visible; }
.sl-eflow { animation: sl-edash .8s linear infinite; }
.sl-edot {
  offset-path: path('M2 28 Q100 10 198 28');
  animation: sl-edot-move 1.2s linear infinite;
}
.sl-edot2 { animation-delay: .6s; }

/* ═══ ④ 電網（與水力完全相同） ═══════════════════════════ */
.sl-grid-wrap {
  position: relative;
  width: 96px;
  height: 136px;
}
.sl-tower { width: 100%; height: 100%; object-fit: contain; position: relative; z-index: 1; }
.sl-halo {
  position: absolute;
  top: 12%; left: 50%;
  transform: translateX(-50%);
  width: 68px; height: 68px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(250,204,21,.28), transparent 70%);
  animation: sl-halo-pulse 2s ease-in-out infinite;
  display: block;
}
.sl-spark { position: absolute; font-size: .85rem; z-index: 2; animation: sl-spark 2.4s ease-in-out infinite; }
.sl-sp1 { top: 6%;  left:  4%; animation-delay: 0s; }
.sl-sp2 { top: 12%; right: 4%; animation-delay: 1.2s; }

/* ═══ 摘要列（與水力完全相同結構） ═══════════════════════ */
.sl-summary {
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
.sl-chip {
  padding: 5px 14px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 900;
}
.sl-sep { color: #94a3b8; font-size: 1rem; font-weight: 700; }
.sl-chip-amber  { background: #fef3c7; color: #92400e; }
.sl-chip-yellow { background: #fef9c3; color: #a16207; }
.sl-chip-green  { background: #dcfce7; color: #15803d; }
.sl-chip-orange { background: #ffedd5; color: #9a3412; }

/* ═══ Keyframes ═══════════════════════════════════════════ */
@keyframes sl-sun-pulse {
  0%,100% { box-shadow: 0 0 0 3px rgba(251,191,36,.08), 0 18px 38px rgba(251,191,36,.28); }
  50%      { box-shadow: 0 0 0 8px rgba(251,191,36,.06), 0 18px 38px rgba(251,191,36,.5); }
}
@keyframes sl-sun-rotate { to { transform: rotate(360deg); } }
@keyframes sl-halo-spin {
  from { transform: scale(1);    opacity: .6; }
  to   { transform: scale(1.22); opacity: 1; }
}
@keyframes sl-outlet-pulse {
  0%,100% { box-shadow: 0 0 0 3px rgba(251,191,36,.3),  0 0 12px rgba(251,191,36,.45); }
  50%      { box-shadow: 0 0 0 7px rgba(251,191,36,.12), 0 0 20px rgba(251,191,36,.7); }
}
@keyframes sl-cell-glow {
  0%,100% { background: linear-gradient(135deg, #1a3e7a, #1e4898); opacity: .72; }
  45%     { background: linear-gradient(135deg, #1d4ed8, #2563eb); opacity: .9; }
  55%     { background: linear-gradient(135deg, #3b82f6, #7dd3fc); opacity: 1;
             box-shadow: 0 0 8px 2px rgba(96,165,250,.7), inset 0 0 5px rgba(255,255,255,.3); }
  65%     { background: linear-gradient(135deg, #1d4ed8, #2563eb); opacity: .9; }
}
@keyframes sl-panel-charge {
  0%,100% { box-shadow: 0 0 0 1px rgba(96,165,250,.12), 0 16px 32px rgba(15,23,42,.28), inset 0 1px 0 rgba(255,255,255,.07); }
  50%     { box-shadow: 0 0 0 3px rgba(59,130,246,.45), 0 16px 32px rgba(15,23,42,.28), 0 0 28px rgba(59,130,246,.28), inset 0 1px 0 rgba(255,255,255,.07); }
}
@keyframes sl-reflect {
  0%, 15%   { left: -50%;  opacity: 0; }
  25%        { opacity: 1; }
  65%        { opacity: 1; }
  80%, 100%  { left: 155%; opacity: 0; }
}
@keyframes sl-sdot {
  from { left: -10%; opacity: 0; }
  15%  { opacity: 1; }
  85%  { opacity: 1; }
  to   { left: 110%; opacity: 0; }
}
@keyframes sl-wave-pulse {
  0%,100% { opacity: .28; transform: scaleY(.86); }
  50%      { opacity: 1;   transform: scaleY(1); }
}
@keyframes sl-terminal-pulse {
  0%,100% { box-shadow: 0 0 0 3px rgba(250,204,21,.25), 0 0 12px rgba(250,204,21,.4); }
  50%      { box-shadow: 0 0 0 6px rgba(250,204,21,.12), 0 0 20px rgba(250,204,21,.75); }
}
@keyframes sl-ring-expand {
  0%   { transform: scale(.9);  opacity: .5; }
  70%  { transform: scale(1.8); opacity: 0; }
  100% { transform: scale(1.8); opacity: 0; }
}
@keyframes sl-edash {
  from { stroke-dashoffset: 42; }
  to   { stroke-dashoffset: 0; }
}
@keyframes sl-edot-move {
  from { offset-distance: 0%;   opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  to   { offset-distance: 100%; opacity: 0; }
}
@keyframes sl-halo-pulse {
  0%,100% { transform: translateX(-50%) scale(1);    opacity: .6; }
  50%      { transform: translateX(-50%) scale(1.38); opacity: 1; }
}
@keyframes sl-spark {
  0%,100% { opacity: 0; transform: scale(.5) translateY(0); }
  20%,80% { opacity: 1; transform: scale(1)  translateY(-3px); }
  50%      { opacity: 1; transform: scale(1.2) translateY(-7px); }
}

/* ═══ RWD ═══════════════════════════════════════════════ */
@media (max-width: 820px) {
  .sl { padding: 16px 14px 14px; }
  .sl-scene {
    grid-template-columns: repeat(7, minmax(104px, 1fr));
    overflow-x: auto;
    padding-bottom: 10px;
  }
  .sl-panel  { width: 82px; height: 108px; }
  .sl-inv-body { width: 96px; height: 80px; }
  .sl-inv-wrap { width: 96px; }
  .sl-grid-wrap { width: 84px; height: 120px; }
}
</style>
