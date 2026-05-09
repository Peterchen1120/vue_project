<template>
  <article class="energy-step-card">
    <div class="energy-step-header">
      <div class="energy-step-index">{{ stepNumber }}</div>
      <h4 class="energy-step-title">{{ step.title }}</h4>
    </div>
    <p class="energy-step-description">{{ step.description }}</p>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  step: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const stepNumber = computed(() => String(props.index + 1).padStart(2, '0'))
</script>

<style scoped>
.energy-step-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 16px 16px 20px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 10px 26px rgba(15, 23, 42, 0.06);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.energy-step-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 34px rgba(15, 23, 42, 0.1);
  border-color: rgba(2, 132, 199, 0.22);
}

.energy-step-index {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  flex: 0 0 42px;
  display: grid;
  place-items: center;
  color: #ffffff;
  font-size: 0.86rem;
  font-weight: 900;
  background: linear-gradient(135deg, #0f766e, #0284c7);
  box-shadow: 0 10px 20px rgba(2, 132, 199, 0.2);
}

.energy-step-header {
  display: flex;
  align-items: center;
  gap: 14px;
}

.energy-step-title {
  margin: 0;
  color: #0f172a;
  font-size: 1rem;
  font-weight: 900;
}

.energy-step-description {
  margin: 0;
  color: #475569;
  font-size: 0.92rem;
  line-height: 1.75;
}
</style>
