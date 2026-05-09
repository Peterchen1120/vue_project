<template>
  <section class="energy-principle-section">
    <div class="energy-principle-header">
      <p class="energy-principle-label">{{ principle.label }} Principle</p>
      <h3 class="energy-principle-title">{{ principle.title }}</h3>
      <p class="energy-principle-subtitle">{{ principle.subtitle }}</p>
      <p class="energy-principle-text">{{ principle.principleText }}</p>
    </div>

    <div class="energy-principle-animation">
      <component
        :is="animationComponents[principle.animationType]"
        v-if="principle.animationType && animationComponents[principle.animationType]"
      />
    </div>

    <div class="energy-principle-steps">
      <PrincipleStepCard
        v-for="(step, index) in principle.steps"
        :key="step.title"
        :step="step"
        :index="index"
      />
    </div>

    <div class="energy-principle-points">
      <span
        v-for="point in principle.keyPoints"
        :key="point"
        class="energy-principle-point"
      >
        {{ point }}
      </span>
    </div>
  </section>
</template>

<script setup>
import PrincipleStepCard from './PrincipleStepCard.vue'
import HydroPrincipleAnimation from './animations/HydroPrincipleAnimation.vue'

const animationComponents = {
  hydro: HydroPrincipleAnimation
}

defineProps({
  principle: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.energy-principle-section {
  margin-top: 44px;
  padding: 30px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 18px 44px rgba(15, 23, 42, 0.1);
}

.energy-principle-header {
  max-width: 880px;
  margin-bottom: 26px;
}

.energy-principle-label {
  display: inline-flex;
  margin: 0 0 12px;
  padding: 6px 12px;
  border-radius: 999px;
  color: #075985;
  background: #e0f2fe;
  border: 1px solid rgba(2, 132, 199, 0.18);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.energy-principle-title {
  margin: 0 0 10px;
  color: #0f172a;
  font-size: clamp(1.65rem, 2.4vw, 2.2rem);
  line-height: 1.25;
  font-weight: 950;
}

.energy-principle-subtitle {
  margin: 0 0 16px;
  color: #0f766e;
  font-size: 1rem;
  line-height: 1.7;
  font-weight: 800;
}

.energy-principle-text {
  margin: 0;
  color: #475569;
  font-size: 0.96rem;
  line-height: 1.9;
}

.energy-principle-steps {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
  margin-top: 22px;
}

.energy-principle-animation {
  width: 100%;
}

.energy-principle-points {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
  padding-top: 20px;
  border-top: 1px solid rgba(15, 23, 42, 0.08);
}

.energy-principle-point {
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 8px 13px;
  border-radius: 999px;
  color: #0f172a;
  background: #f0fdfa;
  border: 1px solid rgba(15, 118, 110, 0.16);
  font-size: 0.9rem;
  font-weight: 800;
}

@media (max-width: 1180px) {
  .energy-principle-steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .energy-principle-section {
    padding: 18px;
    border-radius: 22px;
  }

  .energy-principle-steps {
    grid-template-columns: 1fr;
  }
}
</style>
