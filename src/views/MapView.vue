<template>
  <main class="map-page">
    <section class="map-hero">
      <p class="eyebrow">ENERGY MAGIC ISLAND</p>
      <h1>探索能源魔法島</h1>
      <p class="description">
        點擊島嶼，認識不同能源的原理、特色與應用。
      </p>
    </section>

    <section class="map-section">
      <EnergyMap :active-key="selectedType" @select-energy="openModal" />
    </section>

    <!--
    舊版按鈕區（已由地圖互動取代，保留備用）
    <section class="map-placeholder">
      <div class="map-card">
        <h2>探索地圖區</h2>
        <p>
          目前先用按鈕模擬地圖上的發電裝置，之後可以換成 AI 生成的島嶼地圖與互動物件。
        </p>
        <div class="energy-buttons">
          <button class="energy-btn hydro-btn"    @click="openModal('hydro')">💧 水力發電</button>
          <button class="energy-btn solar-btn"    @click="openModal('solar')">☀️ 太陽能發電</button>
          <button class="energy-btn wind-btn"     @click="openModal('wind')">🌬 風力發電</button>
          <button class="energy-btn biomass-btn"  @click="openModal('biomass')">🌿 生質能發電</button>
          <button class="energy-btn geo-btn"      @click="openModal('geo')">🌋 地熱發電</button>
          <button class="energy-btn nuclear-btn"  @click="openModal('nuclear')">⚛️ 核能發電</button>
        </div>
      </div>
    </section>
    -->

    <Transition name="modal-float">
      <EnergyModal
        v-if="selectedEnergy"
        :energy="selectedEnergy"
        @close="closeModal"
      />
    </Transition>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import EnergyModal from '../components/EnergyModal.vue'
import EnergyMap   from '../components/EnergyMap.vue'
import { energyTypes } from '../data/energyTypes'

const selectedType = ref(null)

const selectedEnergy = computed(() => {
  if (!selectedType.value) return null
  return energyTypes[selectedType.value]
})

function openModal(type) {
  selectedType.value = type
}

function closeModal() {
  selectedType.value = null
}
</script>

<style scoped>
.map-page {
  width: 100%;
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(224, 242, 254, 0.86), transparent 34%),
    radial-gradient(circle at 88% 18%, rgba(250, 204, 21, 0.18), transparent 24%),
    linear-gradient(180deg, #f8fffb 0%, #eefdf7 100%);
  padding: 24px 24px 60px;
}

.map-hero {
  text-align: center;
  margin-bottom: 24px;
}

.eyebrow {
  color: var(--color-primary-2);
  font-weight: 800;
  letter-spacing: 3px;
  margin-bottom: 12px;
}

.map-hero h1 {
  font-size: 3rem;
  color: var(--color-primary);
  margin-bottom: 16px;
  font-weight: 900;
}

.description {
  max-width: 680px;
  margin: 0 auto;
  color: var(--color-muted);
  font-size: 1.05rem;
  line-height: 1.8;
}

.map-section {
  width: min(1100px, 100%);
  margin: 0 auto;
}

/* ── 舊版按鈕樣式（保留，已被註解） ── */
.map-placeholder { display: flex; justify-content: center; }
.map-card {
  width: min(1000px, 100%);
  min-height: 480px;
  border-radius: 32px;
  padding: 48px;
  background:
    linear-gradient(135deg, rgba(255,255,255,0.86), rgba(240,253,250,0.86)),
    radial-gradient(circle at 20% 30%, rgba(14,165,233,0.16), transparent 28%);
  box-shadow: var(--shadow-soft);
  border: 1px solid rgba(14,165,233,0.14);
  backdrop-filter: blur(14px);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
}
.map-card h2 { font-size: 2rem; color: var(--color-primary); font-weight: 900; }
.map-card p  { max-width: 620px; color: var(--color-muted); line-height: 1.8; }
.energy-buttons { display: flex; flex-wrap: wrap; justify-content: center; gap: 24px; margin-top: 20px; }
.energy-btn { border: none; padding: 16px 36px; border-radius: 999px; font-size: 1.05rem; font-weight: 900; cursor: pointer; color: white; transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease; }
.energy-btn:hover { transform: translateY(-6px) scale(1.06); filter: brightness(1.08); }
.energy-btn:active { transform: translateY(-2px) scale(0.98); }
.hydro-btn    { background: linear-gradient(to right, #0ea5e9, #0369a1); box-shadow: 0 10px 24px rgba(2,132,199,0.26); }
.solar-btn    { background: linear-gradient(135deg, var(--color-accent), var(--color-accent-2)); color: #3f2d00; box-shadow: 0 10px 24px rgba(245,158,11,0.28); }
.wind-btn     { background: linear-gradient(135deg, #7eb8f5, #2563a8); box-shadow: 0 10px 24px rgba(37,99,168,0.26); }
.biomass-btn  { background: linear-gradient(135deg, #52c47a, #1f7a46); box-shadow: 0 10px 24px rgba(31,122,70,0.26); }
.geo-btn      { background: linear-gradient(135deg, #f07a52, #c0401a); box-shadow: 0 10px 24px rgba(192,64,26,0.26); }
.nuclear-btn  { background: linear-gradient(135deg, #b07de8, #6428b4); box-shadow: 0 10px 24px rgba(100,40,180,0.26); }

@media (max-width: 768px) {
  .map-page   { padding: 56px 16px; }
  .map-hero h1 { font-size: 2.2rem; }
}
</style>
