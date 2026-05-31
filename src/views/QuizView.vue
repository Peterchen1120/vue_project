<template>
  <main class="quiz-page">
    <button v-if="!showIntro && !isFinished"
            class="back-btn" type="button" @click="showIntro = true">
      ← 返回
    </button>
    <section class="quiz-card">

      <!-- ── 前導頁面 ── -->
      <template v-if="showIntro">
        <div class="intro-wrap">
          <img :src="windImg" alt="" class="intro-bg-img" aria-hidden="true" />
          <div class="intro-content">
            <p class="intro-eyebrow">ENERGY KNOWLEDGE QUIZ</p>
            <h1 class="intro-title">能源知識大挑戰</h1>
            <p class="intro-desc">
              你對風力、太陽能、水力、地熱、核能了解多少？<br>
              共 <strong>10 題</strong>，每題 10 分，測試你的能源知識。
            </p>
            <ul class="intro-rules">
              <li><span class="rule-icon">📋</span>題目從題庫隨機抽取</li>
              <li><span class="rule-icon">⏱</span>答錯不會扣你網頁設計的分數</li>
              <li><span class="rule-icon">✅</span>作答後立即顯示解答</li>
            </ul>
            <button class="start-btn" type="button" @click="beginQuiz">
              開始測驗
            </button>
          </div>
        </div>
      </template>

      <template v-else-if="!isFinished">
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

        <Transition name="explanation-fade">
          <div v-if="hasAnswered" class="explanation-box">
            <span class="explanation-label">💡 詳解</span>
            <p>{{ currentQuestion?.explanation }}</p>
          </div>
        </Transition>

        <button
          v-if="hasAnswered"
          class="next-btn"
          type="button"
          @click="nextQuestion"
        >
          {{ isLastQuestion ? '查看結果' : '下一題' }}
        </button>
      </template>

      <template v-else-if="isFinished">
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
import windImg from '@/assets/wind.jpg'

const totalQuestions = 10
const showIntro = ref(true)
const currentQuizData = ref([])
const questionIndex = ref(0)
const score = ref(0)
const selectedIndex = ref(null)
const hasAnswered = ref(false)
const isFinished  = ref(false)

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

function beginQuiz() {
  startQuiz()
  showIntro.value = false
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
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function finishQuiz() {
  isFinished.value = true
}

function restartQuiz() {
  showIntro.value = true
}

function getOptionClass(index) {
  if (!hasAnswered.value || !currentQuestion.value) return ''

  if (index === currentQuestion.value.a) return 'correct'
  if (index === selectedIndex.value) return 'wrong'
  return ''
}

onMounted(() => {
  // 題庫預先準備好，但不立即開始計分
  currentQuizData.value = shuffleQuestions().slice(0, totalQuestions)
})
</script>

<style scoped>
.quiz-page {
  position: relative;
  min-height: 72vh;
  padding: 50px 20px 80px;
  background:
    radial-gradient(circle at top left, rgba(224, 242, 254, 0.86), transparent 30%),
    radial-gradient(circle at 88% 14%, rgba(250, 204, 21, 0.2), transparent 24%),
    linear-gradient(180deg, #f8fffb 0%, #eefdf7 100%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.quiz-card {
  position: relative;
  width: min(680px, 100%);
  background: var(--color-surface);
  border-radius: 24px;
  padding: 42px;
  text-align: center;
  box-shadow: var(--shadow-soft);
  border: 1px solid rgba(14, 165, 233, 0.14);
  backdrop-filter: blur(14px);
}

/* ── 返回按鈕 ── */
.back-btn {
  position: absolute;
  top: 28px;
  left: 40px;
  background: linear-gradient(to right, #0ea5e9, #0369a1);
  color: #fff;
  border: none;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(2, 132, 199, 0.16);
  transition: transform 0.2s, box-shadow 0.2s;
}
.back-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 24px rgba(2, 132, 199, 0.26);
}

/* ── 前導頁面 ── */
.intro-wrap {
  position: relative;
  min-height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 18px;
}

.intro-bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.10;
  pointer-events: none;
  border-radius: 18px;
}

.intro-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  padding: 10px 8px;
}

.intro-eyebrow {
  color: var(--color-primary-2);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 3px;
  margin: 0;
}

.intro-title {
  font-size: 2.2rem;
  font-weight: 900;
  color: var(--color-primary);
  margin: 0;
  line-height: 1.2;
}

.intro-desc {
  color: var(--color-muted);
  font-size: 1rem;
  line-height: 1.8;
  max-width: 440px;
  margin: 0;
}

.intro-desc strong {
  color: var(--color-primary);
}

.intro-rules {
  list-style: none;
  padding: 0;
  margin: 4px 0 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
  align-self: flex-start;
}

.intro-rules li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.92rem;
  color: var(--color-muted);
  font-weight: 600;
}

.rule-icon {
  display: inline-block;
  width: 1.4em;
  text-align: center;
  flex-shrink: 0;
}

.start-btn {
  margin-top: 12px;
  padding: 14px 48px;
  border: none;
  border-radius: 30px;
  background: linear-gradient(to right, #0ea5e9, #0369a1);
  color: #fff;
  font-size: 1.05rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(2, 132, 199, 0.28);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.start-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(2, 132, 199, 0.36);
}

.quiz-progress {
  color: var(--color-primary-2);
  font-weight: 800;
  margin-bottom: 16px;
  font-size: 1.05rem;
}

.quiz-question {
  margin-top: 0;
  margin-bottom: 48px;
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
  min-height: 88px;
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

.explanation-box {
  margin-top: 16px;
  padding: 14px 18px;
  border-radius: 14px;
  background: rgba(224, 242, 254, 0.6);
  border-left: 4px solid var(--color-primary-2);
  text-align: left;
}

.explanation-label {
  display: block;
  font-size: 0.78rem;
  font-weight: 900;
  color: var(--color-primary-2);
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}

.explanation-box p {
  font-size: 1rem;
  color: var(--color-text);
  line-height: 1.7;
  margin: 0;
}

.explanation-fade-enter-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.explanation-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.next-btn {
  position: absolute;
  top: 27px;
  right: 20px;
  margin-top: 0;
  padding: 10px 22px;
  min-height: unset;
  font-size: 0.9rem;
  background: #10b981;
  color: #ffffff;
  box-shadow: 0 6px 16px rgba(6, 182, 212, 0.28);
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
