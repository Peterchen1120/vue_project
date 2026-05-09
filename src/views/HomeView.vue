<template>
  <main>
    <section class="hero">
      <div class="hero-container">
        <div class="hero-copy">
          <p class="hero-label">SDG 7 Clean Energy</p>
          <h1 class="main-title">Energy Pulse｜能源脈動</h1>
          <p class="hero-subtitle">看見能源如何流動，理解未來如何發電。</p>
          <p class="hero-description">
            從太陽、水流與風開始，探索潔淨能源如何影響我們的生活。
          </p>

          <div class="cta-card">
            <div class="cta-text">
              以互動地圖與測驗快速掌握潔淨能源重點。
            </div>

            <div class="cta-buttons">
              <RouterLink class="btn-explore" to="/map">
                開始探索
              </RouterLink>

              <RouterLink class="btn-quiz" to="/quiz">
                進入測驗
              </RouterLink>
            </div>
          </div>
        </div>

        <div class="energy-visual" aria-hidden="true">
          <div class="orbit orbit-one"></div>
          <div class="orbit orbit-two"></div>
          <div class="energy-core"></div>
          <div class="energy-node node-sun">☀ 太陽</div>
          <div class="energy-node node-water">💧 水流</div>
          <div class="energy-node node-wind">🌬 風力</div>
          <div class="energy-node node-power">⚡ 電力</div>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <!-- 你原本用戶真心話內容搬來這裡 -->
       <h2>島民留言</h2>

      <div class="carousel-container">
        <button class="arrow left-arrow" @click="prevTestimonial">
          &#10094;
        </button>

        <div class="testimonial-slider">
          <Transition :name="`testimonial-slide-${slideDirection}`">
            <div class="testimonial-content" :key="currentIndex">
              <img
                :src="currentTestimonial.avatar"
                :alt="currentTestimonial.name"
                class="avatar"
              />

              <div class="text-content">
                <p>{{ currentTestimonial.content }}</p>
                <strong>{{ currentTestimonial.name }}</strong>
              </div>
            </div>
          </Transition>
          </div>

        <button class="arrow right-arrow" @click="nextTestimonial">
          &#10095;
        </button>
      </div>

      <div class="carousel-dots">
        <div
          v-for="(_, index) in testimonials"
          :key="index"
          class="dot"
          :class="{ active: index === currentIndex }"
          @click="setTestimonial(index)"
        ></div>
      </div>
    </section>

    <section class="pre-footer-banner">
      <!-- 你原本 30,000,000+ 人那塊搬來這裡 -->
        <h2><span>30,000,000+ 人</span>的教學平台</h2>
        <p>Energy Pulse 是全亞洲最受歡迎的教平學台</p>
    </section>
  </main>
</template>

<script setup>
    import { computed, ref } from 'vue'
    import { RouterLink } from 'vue-router'

    const testimonials = [
    {
        avatar: 'https://images.icon-icons.com/3708/PNG/512/man_person_people_avatar_icon_230017.png',
        content:
        '老實說，比起看影片，我真的更喜歡這種網頁式的呈現方式。最推的一點是它的排版。以前看一些教學網站，字縮在一起真的會看到眼花，但這個網站的資訊密度抓得蠻剛好的，還有許多圖表，對我這種喜歡快速掃過、抓重點的人來說，效率快超多。大推能源魔法島。',
        name: '中央大學 / 王同學'
    },
    {
        avatar: 'https://images.icon-icons.com/3708/PNG/512/man_person_people_avatar_icon_230017.png',
        content:
        '我覺得這個網站比單純看文字教材更有趣，尤其是用互動的方式介紹能源議題，讓 SDG 7 變得比較好理解。',
        name: '中央大學 / 李同學'
    },
    {
        avatar: 'https://images.icon-icons.com/3708/PNG/512/man_person_people_avatar_icon_230017.png',
        content:
        '以前看到永續能源會覺得很遙遠，但這個網站用很簡單的方式整理重點，讓我比較知道再生能源和生活的關係。',
        name: '中央大學 / 陳同學'
    },
    {
        avatar: 'https://images.icon-icons.com/3708/PNG/512/man_person_people_avatar_icon_230017.png',
        content:
        '測驗功能蠻有趣的，答題過程也不會太死板，比較像在闖關。',
        name: '中央大學 / 林同學'
    },
    {
        avatar: 'https://images.icon-icons.com/3708/PNG/512/man_person_people_avatar_icon_230017.png',
        content:
        '整體視覺很清楚，綠色系也很符合能源和永續的主題。對學生來說，這種介面比較願意繼續看下去。',
        name: '中央大學 / 張同學'
    },
    {
        avatar: 'https://images.icon-icons.com/3708/PNG/512/man_person_people_avatar_icon_230017.png',
        content:
        '我喜歡它把資料來源和學習內容分開整理，查資料的時候比較不會混亂。',
        name: '中央大學 / 黃同學'
    },
    {
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS5idYMHWXkEgg4bRlSJud_0VG8orrc78Obg&s',
        content:
        '我覺得這個網站最好的地方在於它的互動性。它不只是乾巴巴的文字，它有互動地圖、互動式小測驗，寫完馬上就能對答案，這種即時回饋真的會讓人比較有動力。',
        name: '中央大學 / 賴同學'
    },
    {
        avatar: 'https://cdn-icons-png.freepik.com/512/6813/6813438.png',
        content:
        '最推的一點是它的島嶼導覽，每一座島代表一種能源，點擊後會彈出浮動視窗介紹。互動測驗題目感覺是隨機挑選的，很有新鮮感，點完之後可以馬上知道答案。',
        name: '中央大學 / 田同學'
    }
    ]

    const currentIndex = ref(0)
    const slideDirection = ref('next')

    const currentTestimonial = computed(() => {
    return testimonials[currentIndex.value]
    })

    function nextTestimonial() {
    slideDirection.value = 'next'
    currentIndex.value = (currentIndex.value + 1) % testimonials.length
    }

    function prevTestimonial() {
    slideDirection.value = 'prev'
    currentIndex.value =
        (currentIndex.value - 1 + testimonials.length) % testimonials.length
    }

    function setTestimonial(index) {
    if (index === currentIndex.value) return
    slideDirection.value = index > currentIndex.value ? 'next' : 'prev'
    currentIndex.value = index
    }
</script>

<style scoped>
/* 把 hero、cta-card、btn-explore、testimonials、pre-footer-banner 相關 CSS 搬來這裡 */
/* Hero Section */
.hero {
  min-height: 520px;
  padding: 64px 24px 72px;
  background:
    radial-gradient(circle at 18% 20%, rgba(14, 165, 233, 0.18), transparent 28%),
    radial-gradient(circle at 82% 24%, rgba(250, 204, 21, 0.2), transparent 22%),
    linear-gradient(135deg, #f8fffb 0%, #e0f2fe 48%, #eefdf7 100%);
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
}

.hero-container {
  width: min(1120px, 100%);
  min-height: 430px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 48px;
}

.hero-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero-label {
  display: inline-flex;
  align-items: center;
  margin-bottom: 18px;
  padding: 7px 14px;
  border-radius: 999px;
  background: #fef9c3;
  border: 1px solid rgba(245, 158, 11, 0.24);
  color: #854d0e;
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 1.4px;
}

.main-title {
  text-align: left;
  color: var(--color-text);
  font-size: clamp(2.6rem, 6vw, 4.35rem);
  line-height: 1.05;
  letter-spacing: 0;
  margin-bottom: 18px;
  text-shadow: 0 2px 18px rgba(14, 165, 233, 0.16);
}

.hero-subtitle {
  color: var(--color-primary);
  font-size: clamp(1.25rem, 2vw, 1.55rem);
  font-weight: 900;
  line-height: 1.5;
  margin-bottom: 12px;
}

.hero-description {
  max-width: 540px;
  color: var(--color-muted);
  font-size: 1.05rem;
  line-height: 1.9;
  margin-bottom: 28px;
}

.cta-card {
  background: rgba(255, 255, 255, 0.92);
  width: min(560px, 100%);
  padding: 24px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.1);
  border: 1px solid rgba(15, 23, 42, 0.08);
}

.cta-text {
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--color-text);
  line-height: 1.5;
}

.cta-buttons {
  display: flex;
  gap: 15px;
  flex-shrink: 0;
}

.btn-explore,
.btn-quiz {
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;
}

.btn-explore {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-2));
  color: white;
  box-shadow: 0 10px 22px rgba(2, 132, 199, 0.22);
}

.btn-explore:hover {
  transform: translateY(-3px);
  background: linear-gradient(135deg, #14b8a6, #0ea5e9);
  box-shadow: 0 16px 28px rgba(2, 132, 199, 0.28);
}

.btn-quiz {
  background: linear-gradient(135deg, var(--color-accent), var(--color-accent-2));
  color: #3f2d00;
  box-shadow: 0 10px 22px rgba(245, 158, 11, 0.22);
}

.btn-quiz:hover {
  transform: translateY(-3px);
  background: linear-gradient(135deg, #fde68a, #f59e0b);
  box-shadow: 0 16px 28px rgba(245, 158, 11, 0.28);
}

.energy-visual {
  position: relative;
  min-height: 380px;
  border-radius: 32px;
  overflow: hidden;
  background:
    linear-gradient(rgba(15, 118, 110, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15, 118, 110, 0.08) 1px, transparent 1px),
    radial-gradient(circle at 50% 48%, rgba(14, 165, 233, 0.28), transparent 34%),
    rgba(255, 255, 255, 0.9);
  background-size: 34px 34px, 34px 34px, auto, auto;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.12);
}

.energy-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 138px;
  height: 138px;
  border-radius: 50%;
  background:
    radial-gradient(circle at 35% 30%, #fef08a, transparent 24%),
    radial-gradient(circle, #22d3ee 0%, #0f766e 58%, #0f172a 100%);
  box-shadow:
    0 0 34px rgba(14, 165, 233, 0.38),
    0 0 70px rgba(15, 118, 110, 0.28);
  transform: translate(-50%, -50%);
}

.orbit {
  position: absolute;
  left: 50%;
  top: 50%;
  border: 1px solid rgba(2, 132, 199, 0.24);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.orbit-one {
  width: 270px;
  height: 270px;
}

.orbit-two {
  width: 360px;
  height: 210px;
  transform: translate(-50%, -50%) rotate(-18deg);
}

.energy-node {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 13px;
  border-radius: 999px;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.11);
  color: var(--color-text);
  font-size: 0.95rem;
  font-weight: 900;
}

.node-sun {
  right: 18%;
  top: 18%;
}

.node-water {
  left: 12%;
  top: 38%;
}

.node-wind {
  right: 12%;
  bottom: 28%;
}

.node-power {
  left: 24%;
  bottom: 14%;
}

/* Testimonials */
.testimonials {
  background: #f8fafc;
  padding: 80px 20px;
  text-align: center;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
}

.testimonials h2 {
  font-size: 1.8rem;
  color: var(--color-text);
  margin-bottom: 50px;
  font-weight: bold;
}

.carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  gap: 40px;
}

.arrow {
  background: none;
  border: none;
  font-size: 3rem;
  color: rgba(2, 132, 199, 0.32);
  cursor: pointer;
  transition: color 0.3s;
  padding: 0 10px;
}

.arrow:hover {
  color: var(--color-primary-2);
}

.testimonial-slider {
  position: relative;
  width: min(800px, 100%);
  height: 240px;
  overflow: hidden;
  flex: 1 1 800px;
}

.testimonial-content {
  display: flex;
  align-items: center;
  text-align: left;
  gap: 40px;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  padding: 8px 0;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #2da1d7;
  flex-shrink: 0;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 0;
}

.text-content p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text);
  max-height: 150px;
  overflow-y: auto;
  padding-right: 8px;
}

.text-content strong {
  font-size: 1.1rem;
  color: var(--color-primary);
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 40px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(2, 132, 199, 0.24);
  cursor: pointer;
}

.dot.active {
  background-color: var(--color-primary-2);
}

.testimonial-slide-next-enter-active,
.testimonial-slide-next-leave-active,
.testimonial-slide-prev-enter-active,
.testimonial-slide-prev-leave-active {
  transition:
    transform 0.42s ease,
    opacity 0.42s ease;
}

.testimonial-slide-next-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.testimonial-slide-next-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.testimonial-slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.testimonial-slide-prev-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

/* Footer 上方的宣傳文字區塊 */
.pre-footer-banner {
  background: #ffffff;
  padding: 60px 20px;
  text-align: center;
  border-top: 1px solid rgba(15, 23, 42, 0.08);
}

.pre-footer-banner h2 {
  font-size: 1.8rem;
  color: var(--color-primary);
  margin-bottom: 15px;
}

.pre-footer-banner h2 span {
  font-weight: 900;
}

.pre-footer-banner p {
  font-size: 1.1rem;
  color: var(--color-muted);
}

/* Home 頁 RWD */
@media (max-width: 768px) {
  .hero {
    padding: 48px 18px 56px;
  }

  .hero-container {
    min-height: auto;
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .main-title {
    font-size: 2.5rem;
  }

  .cta-card {
    flex-direction: column;
    align-items: stretch;
    gap: 24px;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .energy-visual {
    min-height: 320px;
  }

  .testimonial-content {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .carousel-container {
    gap: 12px;
  }

  .testimonial-slider {
    height: 390px;
  }

  .text-content p {
    max-height: 150px;
  }
}
</style>
