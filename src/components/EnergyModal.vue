<template>
  <div class="modal-overlay">
    <article class="energy-modal" :style="{ background: energy.gradient }">
      <button class="close-btn" @click="closeModal">×</button>

      <div class="modal-scroll">
        <div class="modal-layout">

          <div class="modal-left">
            <div class="image-frame">
              <img :src="energy.image" :alt="energy.title" />
            </div>
          </div>

          <div class="modal-right">
            <p class="series-label" :style="{ color: energy.themeColor }">
              {{ energy.label }}
            </p>

            <h2 :style="{ color: energy.themeColor }">
              {{ energy.title }}
            </h2>

            <p class="modal-description">{{ energy.description }}</p>

            <div class="feature-grid">
              <div
                v-for="feature in energy.features"
                :key="feature.title"
                class="feature-card"
              >
                <div class="feature-icon" :style="{ background: energy.accentGradient }"></div>
                <div>
                  <h3>{{ feature.title }}</h3>
                  <p>{{ feature.text }}</p>
                </div>
              </div>
            </div>

            <div class="fact-box" v-if="energy.fact">
              <span>Did you know?</span>
              <p class="fact-tagline">{{ energy.factTagline }}</p>
              <p>{{ energy.fact }}</p>
            </div>

            <div class="modal-actions">
              <button
                class="tab-action"
                :class="{ active: activeInfoTab === 'principle' }"
                :style="activeInfoTab === 'principle'
                  ? { background: energy.accentGradient, color: energy.activeTextColor }
                  : {}"
                @click="activeInfoTab = 'principle'"
              >
                探索運作原理
              </button>
              <button
                class="tab-action"
                :class="{ active: activeInfoTab === 'report' }"
                :style="activeInfoTab === 'report'
                  ? { background: energy.accentGradient, color: energy.activeTextColor }
                  : {}"
                @click="activeInfoTab = 'report'"
              >
                數據分析
              </button>
            </div>
          </div>
        </div>

        <!-- 運作原理區塊 -->
        <template v-if="activeInfoTab === 'principle'">
          <EnergyPrincipleSection
            v-if="energy.principle"
            :principle="energy.principle"
            class="energy-modal-full-section"
          />
          <section v-else class="extra-section energy-modal-full-section">
            <h3>運作原理（即將推出）</h3>
            <p>這種能源類型的詳細運作原理說明正在製作中，敬請期待。</p>
          </section>
        </template>

        <!-- 數據分析區塊 -->
        <template v-if="activeInfoTab === 'report'">
          <HydroDataAnalysis
            v-if="energy.id === 'hydro'"
            class="energy-modal-full-section"
          />
          <section v-else class="extra-section energy-modal-full-section">
            <h3>數據分析（即將推出）</h3>
            <p>這種能源類型的數據分析內容正在製作中，敬請期待。</p>
          </section>
        </template>

      </div>
    </article>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import EnergyPrincipleSection from './energy/EnergyPrincipleSection.vue'
import HydroDataAnalysis from './energy/HydroDataAnalysis.vue'

defineProps({
  energy: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close'])
const activeInfoTab = ref('principle')

function closeModal() {
  emit('close')
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
}

.energy-modal {
  position: relative;
  width: 96vw;
  height: 94vh;
  border-radius: 34px;
  overflow: hidden;
  box-shadow: 0 32px 100px rgba(15, 23, 42, 0.35);
}

.modal-scroll {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.modal-scroll::-webkit-scrollbar { width: 8px; }
.modal-scroll::-webkit-scrollbar-track { background: transparent; }
.modal-scroll::-webkit-scrollbar-thumb {
  background: rgba(31, 41, 55, 0.22);
  border-radius: 999px;
}
.modal-scroll::-webkit-scrollbar-thumb:hover { background: rgba(31, 41, 55, 0.35); }

.close-btn {
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 20;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.92);
  color: #111827;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.16);
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}
.close-btn:hover {
  transform: rotate(90deg) scale(1.08);
  background: #ffffff;
  box-shadow: 0 14px 36px rgba(15, 23, 42, 0.22);
}

.modal-layout {
  display: grid;
  grid-template-columns: 0.58fr 1.42fr;
  min-height: 100%;
}

.modal-left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 100%;
}

.image-frame {
  width: min(530px, 100%);
  height: 75vh;
  max-height: 640px;
  overflow: hidden;
  border-radius: 0 180px 180px 0;
}
.image-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-right {
  padding: 78px 56px 56px 42px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.series-label {
  font-size: 0.8rem;
  letter-spacing: 2px;
  font-weight: 900;
  margin-bottom: 14px;
}

.modal-right h2 {
  font-size: clamp(2.4rem, 3.2vw, 3.4rem);
  line-height: 1.08;
  font-weight: 950;
  margin-bottom: 24px;
  letter-spacing: -1.5px;
}

.modal-description {
  color: #374151;
  font-size: 1rem;
  line-height: 1.9;
  max-width: 620px;
  margin-bottom: 30px;
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-bottom: 28px;
}

.feature-card {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 22px;
  padding: 22px 20px;
  min-height: 132px;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}

.feature-icon {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-top: 5px;
  flex-shrink: 0;
}

.feature-card h3 {
  font-size: 1rem;
  color: #1f2937;
  font-weight: 900;
  margin-bottom: 10px;
}
.feature-card p {
  color: #4b5563;
  font-size: 0.92rem;
  line-height: 1.7;
}

.fact-box {
  width: 100%;
  background: rgba(255, 255, 255, 0.82);
  border-radius: 0 28px 28px 0;
  padding: 20px 24px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  margin-bottom: 28px;
  border-left: 4px solid rgba(180, 120, 40, 0.45);
}
.fact-box span {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 900;
  color: #7c5c2e;
  margin-bottom: 6px;
}
.fact-box .fact-tagline {
  font-size: 1rem;
  font-weight: 900;
  color: #1f2937;
  line-height: 1.4;
  margin-bottom: 12px;
}
.fact-box p {
  color: #4b5563;
  line-height: 1.95;
  font-size: 0.95rem;
}

.modal-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.tab-action {
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 12px;
  padding: 15px 30px;
  min-width: 180px;
  font-size: 0.96rem;
  font-weight: 900;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.82);
  color: #374151;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;
}
.tab-action:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.12);
}
.tab-action.active {
  border-color: transparent;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.18);
}

.extra-section {
  padding: 28px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.7);
}
.extra-section h3 {
  font-size: 1.3rem;
  font-weight: 900;
  margin-bottom: 12px;
  color: #1f2937;
}
.extra-section p {
  color: #4b5563;
  line-height: 1.8;
}

.energy-modal-full-section {
  width: calc(100% - 96px);
  margin: 48px auto 56px;
}

/* Transition */
.modal-float-enter-active,
.modal-float-leave-active { transition: opacity 0.35s ease; }
.modal-float-enter-from,
.modal-float-leave-to { opacity: 0; }
.modal-float-enter-active .energy-modal,
.modal-float-leave-active .energy-modal {
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease;
}
.modal-float-enter-from .energy-modal,
.modal-float-leave-to .energy-modal {
  transform: translateY(90px) scale(0.97);
  opacity: 0;
}
.modal-float-enter-to .energy-modal,
.modal-float-leave-from .energy-modal {
  transform: translateY(0) scale(1);
  opacity: 1;
}

@media (max-width: 900px) {
  .energy-modal { width: 95vw; height: 90vh; }
  .modal-layout { grid-template-columns: 1fr; }
  .modal-left { min-height: auto; }
  .image-frame {
    width: 100%;
    height: 260px;
    border-radius: 0 0 36px 36px;
  }
  .modal-right { padding: 30px 24px 40px; }
  .feature-grid { grid-template-columns: 1fr; }
  .modal-actions { flex-wrap: nowrap; }
  .tab-action {
    flex: 1;
    min-width: 0;
    padding: 14px 16px;
    font-size: 0.95rem;
  }
  .fact-box { max-width: 100%; }
  .energy-modal-full-section { width: calc(100% - 32px); }
}
</style>
