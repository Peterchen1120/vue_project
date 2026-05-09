<template>
  <main class="quiz-page">
    <section class="quiz-card">
      <template v-if="!isFinished">
        <p class="quiz-progress">題目 {{ questionIndex + 1 }} / {{ totalQuestions }}</p>

        <h1 class="quiz-question">
          {{ currentQuestion?.q }}
        </h1>

        <div class="options-grid">
          <button
            v-for="(option, index) in currentQuestion?.options"
            :key="`${questionIndex}-${index}`"
            class="option-btn"
            :class="getOptionClass(index)"
            :disabled="hasAnswered"
            @click="selectAnswer(index)"
          >
            {{ option }}
          </button>
        </div>

        <p class="feedback" :class="feedbackClass">
          {{ feedbackText }}
        </p>

        <button
          v-if="hasAnswered"
          class="next-btn"
          type="button"
          @click="nextQuestion"
        >
          {{ isLastQuestion ? '查看結果' : '下一題' }}
        </button>
      </template>

      <template v-else>
        <div class="result-content">
          <p class="result-eyebrow">測驗完成</p>
          <h1>你的得分是</h1>
          <p class="final-score">
            <span>{{ score }}</span> / 100
          </p>

          <div class="result-actions">
            <button class="restart-btn" type="button" @click="restartQuiz">
              再次挑戰
            </button>
            <RouterLink class="home-link" to="/">
              回首頁
            </RouterLink>
          </div>
        </div>
      </template>
    </section>
  </main>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { questionBank } from '../data/questions'

const totalQuestions = 10
const currentQuizData = ref([])
const questionIndex = ref(0)
const score = ref(0)
const selectedIndex = ref(null)
const hasAnswered = ref(false)
const isFinished = ref(false)

const currentQuestion = computed(() => currentQuizData.value[questionIndex.value])

const isLastQuestion = computed(() => questionIndex.value === totalQuestions - 1)

const isCorrect = computed(() => {
  if (!hasAnswered.value || !currentQuestion.value) return false
  return selectedIndex.value === currentQuestion.value.a
})

const feedbackText = computed(() => {
  if (!hasAnswered.value) return ''
  return isCorrect.value ? '✅ 太棒了！答對了' : '❌ 答錯了！'
})

const feedbackClass = computed(() => {
  if (!hasAnswered.value) return ''
  return isCorrect.value ? 'correct-feedback' : 'wrong-feedback'
})

function shuffleQuestions() {
  return [...questionBank].sort(() => Math.random() - 0.5)
}

function startQuiz() {
  currentQuizData.value = shuffleQuestions().slice(0, totalQuestions)
  questionIndex.value = 0
  score.value = 0
  selectedIndex.value = null
  hasAnswered.value = false
  isFinished.value = false
}

function selectAnswer(index) {
  if (hasAnswered.value || !currentQuestion.value) return

  selectedIndex.value = index
  hasAnswered.value = true

  if (index === currentQuestion.value.a) {
    score.value += 10
  }
}

function nextQuestion() {
  if (!hasAnswered.value) return

  if (isLastQuestion.value) {
    finishQuiz()
    return
  }

  questionIndex.value += 1
  selectedIndex.value = null
  hasAnswered.value = false
}

function finishQuiz() {
  isFinished.value = true
}

function restartQuiz() {
  startQuiz()
}

function getOptionClass(index) {
  if (!hasAnswered.value || !currentQuestion.value) return ''

  if (index === currentQuestion.value.a) return 'correct'
  if (index === selectedIndex.value) return 'wrong'
  return ''
}

onMounted(() => {
  startQuiz()
})
</script>

<style scoped>
.quiz-page {
  min-height: 72vh;
  padding: 80px 20px;
  background:
    radial-gradient(circle at top left, rgba(224, 242, 254, 0.86), transparent 30%),
    radial-gradient(circle at 88% 14%, rgba(250, 204, 21, 0.2), transparent 24%),
    linear-gradient(180deg, #f8fffb 0%, #eefdf7 100%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.quiz-card {
  width: min(680px, 100%);
  min-height: 520px;
  background: var(--color-surface);
  border-radius: 24px;
  padding: 42px;
  text-align: center;
  box-shadow: var(--shadow-soft);
  border: 1px solid rgba(14, 165, 233, 0.14);
  backdrop-filter: blur(14px);
}

.quiz-progress {
  color: var(--color-primary-2);
  font-weight: 800;
  margin-bottom: 16px;
  font-size: 1.05rem;
}

.quiz-question {
  min-height: 96px;
  margin-bottom: 30px;
  color: var(--color-text);
  font-size: 1.45rem;
  line-height: 1.6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 15px;
}

.option-btn {
  min-height: 72px;
  background-color: rgba(255, 255, 255, 0.82);
  border: 2px solid rgba(14, 165, 233, 0.12);
  padding: 16px;
  border-radius: 14px;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  font-weight: 600;
  color: var(--color-text);
}

.option-btn:hover:not(:disabled) {
  background-color: #f0fdfa;
  border-color: var(--color-primary-2);
  transform: translateY(-2px);
}

.option-btn:disabled {
  cursor: default;
}

.option-btn.correct {
  background-color: #d4edda;
  border-color: #28a745;
  color: #155724;
}

.option-btn.wrong {
  background-color: #f8d7da;
  border-color: #dc3545;
  color: #721c24;
}

.feedback {
  min-height: 1.5em;
  margin-top: 25px;
  font-weight: 800;
  font-size: 1.1rem;
}

.correct-feedback {
  color: #28a745;
}

.wrong-feedback {
  color: #dc3545;
}

.next-btn,
.restart-btn,
.home-link {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 48px;
  border: none;
  border-radius: 30px;
  padding: 14px 36px;
  cursor: pointer;
  font-weight: 800;
  font-size: 1rem;
  text-decoration: none;
}

.next-btn {
  margin-top: 24px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-2));
  color: #ffffff;
  box-shadow: 0 10px 22px rgba(2, 132, 199, 0.22);
}

.result-content {
  min-height: 430px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.result-eyebrow {
  color: var(--color-primary-2);
  font-weight: 900;
  margin-bottom: 14px;
}

.result-content h1 {
  color: var(--color-primary);
  margin-bottom: 18px;
  font-size: 2rem;
}

.final-score {
  margin-bottom: 40px;
  color: var(--color-text);
  font-size: 1.3rem;
}

.final-score span {
  color: var(--color-accent-2);
  font-size: 3rem;
  font-weight: 900;
}

.result-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.restart-btn {
  background: linear-gradient(135deg, var(--color-accent), var(--color-accent-2));
  color: #3f2d00;
}

.home-link {
  background-color: rgba(224, 242, 254, 0.9);
  color: var(--color-primary);
}

@media (max-width: 640px) {
  .quiz-page {
    padding: 56px 16px;
  }

  .quiz-card {
    padding: 30px 20px;
  }

  .quiz-question {
    font-size: 1.2rem;
  }

  .options-grid {
    grid-template-columns: 1fr;
  }

  .next-btn,
  .restart-btn,
  .home-link {
    width: 100%;
  }
}
</style>
