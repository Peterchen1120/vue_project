<template>
  <div>
    <section class="hero-section">

      <!-- ===== Hero 主視覺：7 + 標題 + 描述 + 連結 ===== -->
      <div class="sdg7-hero-content">
        <div class="sdg7-goal-number">7</div>
        <div class="sdg7-goal-copy">
          <h1>可負擔的<br>永續能源</h1>
          <p>確保所有的人都可取得負擔的起、可靠的、永續的，以及現代的能源</p>
          <div class="sdg7-hero-actions">
            <a href="#white-section">
              <svg class="sdg7-action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="8,10 12,14 16,10"/>
              </svg>
              Goal 7 in Action
            </a>
            <a href="#targets-section">
              <svg class="sdg7-action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="8,10 12,14 16,10"/>
              </svg>
              Explore the Targets
            </a>
          </div>
        </div>
      </div>

      <!-- ===== 裝飾元素：上方燈泡（含光線射線，自繪） ===== -->
      <div class="hero-deco deco-bulb-left">
        <div class="bulb-wire"></div>
        <svg viewBox="0 0 100 130" fill="white" width="58" height="75">
          <!-- 燈座 -->
          <rect x="42" y="0"  width="16" height="4" rx="1"/>
          <rect x="42" y="6"  width="16" height="3"/>
          <rect x="42" y="11" width="16" height="3"/>
          <!-- 頸部 -->
          <path d="M42,16 L36,30 L64,30 L58,16 Z"/>
          <!-- 玻璃球 -->
          <circle cx="50" cy="68" r="32"/>
          <!-- 光線射線（圍繞玻璃球） -->
          <g stroke="white" stroke-width="3" stroke-linecap="round" fill="none">
            <line x1="3"   y1="55"  x2="13"  y2="58"/>
            <line x1="0"   y1="70"  x2="10"  y2="70"/>
            <line x1="3"   y1="85"  x2="13"  y2="82"/>
            <line x1="22"  y1="105" x2="29"  y2="98"/>
            <line x1="50"  y1="112" x2="50"  y2="103"/>
            <line x1="78"  y1="105" x2="71"  y2="98"/>
            <line x1="100" y1="85"  x2="90"  y2="82"/>
            <line x1="100" y1="70"  x2="90"  y2="70"/>
            <line x1="100" y1="55"  x2="90"  y2="58"/>
          </g>
        </svg>
      </div>

      <div class="hero-deco deco-bulb-right">
        <div class="bulb-wire"></div>
        <svg viewBox="0 0 100 130" fill="white" width="58" height="75">
          <rect x="42" y="0"  width="16" height="4" rx="1"/>
          <rect x="42" y="6"  width="16" height="3"/>
          <rect x="42" y="11" width="16" height="3"/>
          <path d="M42,16 L36,30 L64,30 L58,16 Z"/>
          <circle cx="50" cy="68" r="32"/>
          <g stroke="white" stroke-width="3" stroke-linecap="round" fill="none">
            <line x1="3"   y1="55"  x2="13"  y2="58"/>
            <line x1="0"   y1="70"  x2="10"  y2="70"/>
            <line x1="3"   y1="85"  x2="13"  y2="82"/>
            <line x1="22"  y1="105" x2="29"  y2="98"/>
            <line x1="50"  y1="112" x2="50"  y2="103"/>
            <line x1="78"  y1="105" x2="71"  y2="98"/>
            <line x1="100" y1="85"  x2="90"  y2="82"/>
            <line x1="100" y1="70"  x2="90"  y2="70"/>
            <line x1="100" y1="55"  x2="90"  y2="58"/>
          </g>
        </svg>
      </div>

      <!-- ===== 裝飾元素：左下太陽 ===== -->
      <div class="hero-deco deco-sun">
        <svg viewBox="0 0 256 256" fill="white" width="115" height="115">
          <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/>
        </svg>
      </div>

      <!-- ===== 裝飾元素：左下中建築 ===== -->
      <div class="hero-deco deco-building">
        <svg viewBox="0 0 100 160" fill="white" width="80" height="128">
          <polygon points="50,5 95,45 5,45"/>
          <rect x="8" y="45" width="84" height="115"/>
          <rect x="16" y="55"  width="18" height="18" fill="#FCC30B"/>
          <rect x="41" y="55"  width="18" height="18" fill="#FCC30B"/>
          <rect x="66" y="55"  width="18" height="18" fill="#FCC30B"/>
          <rect x="16" y="80"  width="18" height="18" fill="#FCC30B"/>
          <rect x="41" y="80"  width="18" height="18" fill="#FCC30B"/>
          <rect x="66" y="80"  width="18" height="18" fill="#FCC30B"/>
          <rect x="16" y="105" width="18" height="18" fill="#FCC30B"/>
          <rect x="41" y="105" width="18" height="18" fill="#FCC30B"/>
          <rect x="66" y="105" width="18" height="18" fill="#FCC30B"/>
        </svg>
      </div>

      <!-- ===== 裝飾元素：右下風力發電機（葉片獨立旋轉） ===== -->
      <div class="hero-deco deco-turbines">
        <!-- 小風機 -->
        <svg viewBox="0 0 160 240" fill="white" width="88" height="132">
          <path d="M77,98 L72,240 L88,240 L83,98Z"/>
          <g transform="translate(80,90)">
            <g class="turbine-blades small-blades">
              <!-- r="78" invisible circle forces symmetric fill-box → center = (0,0) = hub -->
              <circle r="78" fill="none" stroke="none"/>
              <path d="M0,0 Q-7,-28 -5,-60 Q-2,-76 0,-78 Q2,-76 5,-60 Q7,-28 0,0Z"/>
              <path d="M0,0 Q-7,-28 -5,-60 Q-2,-76 0,-78 Q2,-76 5,-60 Q7,-28 0,0Z" transform="rotate(120)"/>
              <path d="M0,0 Q-7,-28 -5,-60 Q-2,-76 0,-78 Q2,-76 5,-60 Q7,-28 0,0Z" transform="rotate(240)"/>
            </g>
            <circle r="10"/>
          </g>
        </svg>
        <!-- 大風機 -->
        <svg viewBox="0 0 160 240" fill="white" width="128" height="192">
          <path d="M77,98 L72,240 L88,240 L83,98Z"/>
          <g transform="translate(80,90)">
            <g class="turbine-blades big-blades">
              <circle r="78" fill="none" stroke="none"/>
              <path d="M0,0 Q-7,-28 -5,-60 Q-2,-76 0,-78 Q2,-76 5,-60 Q7,-28 0,0Z"/>
              <path d="M0,0 Q-7,-28 -5,-60 Q-2,-76 0,-78 Q2,-76 5,-60 Q7,-28 0,0Z" transform="rotate(120)"/>
              <path d="M0,0 Q-7,-28 -5,-60 Q-2,-76 0,-78 Q2,-76 5,-60 Q7,-28 0,0Z" transform="rotate(240)"/>
            </g>
            <circle r="10"/>
          </g>
        </svg>
      </div>

    </section>

    <!-- ===== 下方目標說明區（不更動） ===== -->
    <section class="section-content" id="white-section">
      <h2 class="section-title">目標</h2>
      <p class="goal-description">確保所有的人都可取得負擔的起、可靠的、永續的，以及現代的能源。</p>
      <h2 class="section-title" id="targets-section">細項指標</h2>
      <div class="targets-grid">
        <div class="target-card">
          <div class="target-img-box">
            <img src="https://globalgoalscms.co.uk/wp-content/uploads/2021/09/globalgoals_16f414a2-c981-4811-95bf-39c9fc274d3d_goal_7.1_rgb_ng.svg" alt="普遍獲得現代能源">
          </div>
          <div class="target-info">
            <h3>7.1 普遍獲得現代能源</h3>
            <p>在西元2030年前，確保所有的人都可取得負擔的起、可靠的，以及現代的能源服務。</p>
          </div>
        </div>
        <div class="target-card">
          <div class="target-img-box">
            <img src="https://globalgoalscms.co.uk/wp-content/uploads/2021/09/globalgoals_c171e4a5-0457-4580-8e02-1dcacbc6c60e_goal_7.2_rgb_ng.svg" alt="提高全球可再生能源比例">
          </div>
          <div class="target-info">
            <h3>7.2 提高全球可再生能源比例</h3>
            <p>在西元2030年以前，大幅提高全球再生能源的共享。</p>
          </div>
        </div>
        <div class="target-card">
          <div class="target-img-box">
            <img src="https://globalgoalscms.co.uk/wp-content/uploads/2021/09/globalgoals_4aeaebc2-353b-48e3-ac0a-dcff1fd81d38_goal_7.3_rgb_ng.svg" alt="能源效率提高一倍">
          </div>
          <div class="target-info">
            <h3>7.3能源效率提高一倍</h3>
            <p>在西元2030年以前，將全球能源效率的改善度提高一倍。</p>
          </div>
        </div>
        <div class="target-card">
          <div class="target-img-box">
            <img src="https://globalgoalscms.co.uk/wp-content/uploads/2021/09/globalgoals_246b5509-1090-43ee-84d8-cfe3487ec90b_goal_7.a_rgb_ng.svg" alt="促進獲得乾淨能源方面的研究、科技和投資">
          </div>
          <div class="target-info">
            <h3>7.A 促進獲得乾淨能源方面的研究、科技和投資</h3>
            <p>在西元2030年以前，改善國際合作，以提高乾淨能源與科技的取得管道，包括再生能源、能源效率、更先進及更乾淨的石化燃料科技，並促進能源基礎建設與乾淨能源科技的投資。</p>
          </div>
        </div>
        <div class="target-card">
          <div class="target-img-box">
            <img src="https://globalgoalscms.co.uk/wp-content/uploads/2021/09/globalgoals_daae5e74-2456-4d77-9e79-fa5c3fa78d23_goal_7.b_rgb_ng.svg" alt="擴大和升級對開發中國家的能源服務">
          </div>
          <div class="target-info">
            <h3>7.B 擴大和升級對開發中國家的能源服務</h3>
            <p>在西元2030年以前，擴大基礎建設並改善科技，以為所有開發中國家提供現代及永續的能源服務，尤其是LDCs與SIDS。</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* =========================================
   Hero Section
   ========================================= */
.hero-section {
  position: relative;
  overflow: hidden;
  height: 92vh;
  min-height: 640px;
  background-color: #FCC30B;
  display: flex;
  flex-direction: column;
}

/* =========================================
   Hero 主內容
   ========================================= */
.sdg7-hero-content {
  position: relative;
  z-index: 4;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(16px, 2.5vw, 40px);
  padding: 0 6vw;
}

.sdg7-goal-number {
  font-size: clamp(8rem, 18vw, 20rem);
  font-weight: 900;
  color: white;
  line-height: 0.85;
  letter-spacing: -0.04em;
  flex-shrink: 0;
  align-self: flex-start;
  margin-top: 27.5vh;
  opacity: 0;
  animation: sdg7-fade-up 0.9s ease-out 0.2s forwards;
}

.sdg7-goal-copy {
  max-width: 640px;
  padding-top: clamp(0.4rem, 1vw, 1rem);
}

.sdg7-goal-copy h1 {
  font-size: clamp(2.4rem, 5vw, 4.8rem);
  font-weight: 900;
  color: #111;
  line-height: 1.05;
  margin: 0;
  letter-spacing: -0.01em;
  opacity: 0;
  animation: sdg7-fade-up 0.9s ease-out 0.35s forwards;
}

.sdg7-goal-copy p {
  font-size: clamp(0.95rem, 1.05vw, 1.1rem);
  font-weight: 700;
  color: #111;
  line-height: 1.5;
  margin: 22px 0 26px;
  max-width: 32em;
  opacity: 0;
  animation: sdg7-fade-up 0.9s ease-out 0.5s forwards;
}

.sdg7-hero-actions {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  opacity: 0;
  animation: sdg7-fade-up 0.9s ease-out 0.65s forwards;
}

.sdg7-hero-actions a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #111;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.sdg7-hero-actions a:hover {
  opacity: 0.65;
}

.sdg7-action-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}

/* =========================================
   裝飾元素
   ========================================= */
.hero-deco {
  position: absolute;
  pointer-events: none;
  z-index: 1;
}

.bulb-wire {
  width: 2px;
  height: 50px;
  background: white;
  margin: 0 auto;
}

.deco-bulb-left  { top: 0; left: 9%; }
.deco-bulb-right { top: 0; right: 7%; }
.deco-sun        { bottom: 8%; left: 3%; }
.deco-building   { bottom: 4%; left: 14%; }
.deco-turbines   {
  bottom: 0;
  right: 2%;
  display: flex;
  align-items: flex-end;
  gap: 0;
}

/* =========================================
   動畫
   ========================================= */
@keyframes sdg7-fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* 太陽微微發光 */
.deco-sun {
  animation: sdg7-sun-pulse 3.2s ease-in-out infinite alternate;
}

@keyframes sdg7-sun-pulse {
  from { transform: scale(1);    opacity: 0.9; }
  to   { transform: scale(1.06); opacity: 1;   }
}

/* 建築輕微浮動 */
.deco-building {
  animation: sdg7-float-y 5.5s ease-in-out infinite alternate;
}

@keyframes sdg7-float-y {
  from { transform: translateY(0); }
  to   { transform: translateY(-4px); }
}

/* 風機葉片動畫
   transform-box: view-box + transform-origin: 80px 90px = hub 中心（viewBox 座標）
   入場（sdg7-blade-intro）結束後無縫接上持續旋轉（sdg7-spin-blades）
   中間不夾 CSS-transformed 父層，避免 transform-origin 座標系被干擾而產生公轉效果 */
.turbine-blades {
  transform-box: fill-box;
  transform-origin: 50% 50%;
}

/* 小風機：入場 0.3s 後開始，1.2s 完畢後接旋轉 */
.small-blades {
  animation:
    sdg7-blade-intro 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both,
    sdg7-spin-blades 4.5s linear 1.2s infinite;
}

/* 大風機：入場 0.8s 後開始，1.7s 完畢後接旋轉（stagger） */
.big-blades {
  animation:
    sdg7-blade-intro 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.8s both,
    sdg7-spin-blades 7.5s linear 1.7s infinite;
}

@keyframes sdg7-blade-intro {
  from { opacity: 0; transform: scale(0.35) rotate(-35deg); }
  to   { opacity: 1; transform: scale(1)    rotate(0deg);   }
}

@keyframes sdg7-spin-blades {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* =========================================
   RWD
   ========================================= */
@media (max-width: 900px) {
  .hero-section {
    height: auto;
    min-height: 88vh;
  }

  .sdg7-hero-content {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 4px;
    padding: 60px 6vw;
  }

  .sdg7-goal-number {
    font-size: clamp(7rem, 22vw, 14rem);
  }

  .sdg7-goal-copy h1 {
    font-size: clamp(2.2rem, 7vw, 3.6rem);
  }

  .sdg7-goal-copy p {
    font-size: 1rem;
    margin: 16px 0 20px;
  }

  .deco-bulb-left,
  .deco-bulb-right,
  .deco-sun,
  .deco-building,
  .deco-turbines {
    opacity: 0.7;
  }

  .deco-sun svg     { width: 88px;  height: 88px; }
  .deco-building svg{ width: 60px;  height: 96px; }
  .deco-bulb-left svg, .deco-bulb-right svg { width: 48px; height: 62px; }
  .deco-turbines svg:first-child { width: 64px; height: 96px; }
  .deco-turbines svg:last-child  { width: 96px; height: 144px; }
}

@media (max-width: 600px) {
  .hero-section {
    height: auto;
    min-height: 760px;
  }

  .sdg7-hero-content {
    padding: 50px 24px;
  }

  .sdg7-goal-number {
    font-size: clamp(5rem, 28vw, 8rem);
  }

  .sdg7-goal-copy h1 {
    font-size: clamp(1.7rem, 8vw, 2.4rem);
  }

  .sdg7-goal-copy p {
    font-size: 0.92rem;
    margin: 12px 0 18px;
  }

  .sdg7-hero-actions {
    flex-direction: column;
    gap: 12px;
  }

  .deco-bulb-left  { left: 4%; }
  .deco-bulb-right { right: 2%; }
  .deco-bulb-left svg,
  .deco-bulb-right svg { width: 40px; height: 52px; }
  .bulb-wire { height: 32px; }

  .deco-sun     { bottom: 4%; left: 2%; }
  .deco-sun svg { width: 64px; height: 64px; }

  .deco-building     { display: none; }

  .deco-turbines     { right: 1%; bottom: 0; }
  .deco-turbines svg:first-child { width: 50px; height: 75px; }
  .deco-turbines svg:last-child  { width: 72px; height: 108px; }
}

/* =========================================
   下方目標說明區（保留原樣）
   ========================================= */
.section-content {
  background-color: white;
  padding: 80px 40px;
  text-align: center;
}

.section-title {
  font-size: 2.2rem;
  color: #111;
  margin-bottom: 30px;
}

.goal-description {
  font-size: 1.4rem;
  max-width: 900px;
  margin: 0 auto 80px;
  line-height: 1.8;
  color: #333;
}

.targets-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
}

.target-card {
  display: flex;
  align-items: flex-start;
  gap: 25px;
  padding: 24px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.07);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.target-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 32px rgba(15, 23, 42, 0.12);
}

.target-img-box {
  width: 140px;
  flex-shrink: 0;
}

.target-img-box img {
  width: 100%;
  height: auto;
}

.target-info h3 {
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 10px;
  font-weight: 800;
}

.target-info p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}
</style>
