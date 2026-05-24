<template>
  <section class="bio" ref="sectionRef">

    <div class="bio-header">
      <h2 class="bio-main-title">生質能發電：廢棄物轉能源，穩定基載的另一面</h2>
      <p class="bio-subtitle">從台灣生質能現況、歷年趨勢、燃料來源結構，到效益與限制，理解生質能在能源轉型中獨特而務實的角色。</p>
    </div>

    <div class="bio-tabs" role="tablist" aria-label="生質能分析分頁">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="bio-tab"
        :class="{ 'bio-tab--active': activeTab === tab.id }"
        role="tab"
        :aria-selected="activeTab === tab.id"
        @click="activeTab = tab.id"
      >{{ tab.label }}</button>
    </div>

    <!-- ────────────────────────────────────── Tab 1: 發電現況 -->
    <div v-show="activeTab === 'status'" class="bio-panel">
      <div class="bio-block">
        <h3 class="bio-block-title">台灣生質能發電現況</h3>
        <div class="bio-grid-2">

          <div class="bio-card">
            <h4 class="bio-card-title">再生能源版圖中，生質能扮演什麼角色？</h4>
            <div class="bio-chart-wrap">
              <canvas ref="renewableChartRef"></canvas>
            </div>
            <p class="bio-card-desc">2025 年台灣再生能源發電量中，生質能僅占 {{ biomassData.status.renewableShare }}%，是占比最小的類別之一。相比太陽光電（{{ biomassData.status.solarShare }}%）或風力發電（{{ biomassData.status.windShare }}%），生質能規模較小，但它具備 24 小時穩定供電的特性，在能源組合中扮演著其他再生能源無法替代的基載角色。</p>
            <p class="bio-source">
              資料來源：
              <a href="https://data.gov.tw/dataset/160060" target="_blank" rel="noopener noreferrer">經濟部能源署，再生能源發電量月資料</a>
            </p>
          </div>

          <div class="bio-card">
            <h4 class="bio-card-title">在台灣能源系統中，生質能提供了什麼？</h4>
            <div class="bio-pct-display">
              <div class="bio-pct-block">
                <div class="bio-pct-sub">占再生能源發電量（2025）</div>
                <div class="bio-pct-num">{{ biomassData.status.renewableShare }}<span class="bio-pct-unit">%</span></div>
                <div class="bio-pct-name">生質能</div>
                <div class="bio-pct-note">穩定基載，不受天氣影響</div>
              </div>
              <div class="bio-pct-block bio-pct-block--b">
                <div class="bio-pct-sub">2025 年發電量</div>
                <div class="bio-pct-num">{{ biomassData.status.generationGwh }}<span class="bio-pct-unit-sm"> GWh</span></div>
                <div class="bio-pct-name">生質能</div>
                <div class="bio-pct-note">約 2.69 億度穩定綠電</div>
              </div>
            </div>
            <ul class="bio-bullets">
              <li><strong>穩定基載電力</strong>：不受日照或風速影響，可全天候、全年不間斷供電，是少數不需儲能即可提供基載的再生能源。</li>
              <li><strong>資源循環效益</strong>：農業廢棄物、禽畜廢棄物轉為能源，兼具廢棄物處理功能，形成物質循環利用鏈。</li>
            </ul>
            <p class="bio-card-desc">生質能雖占比小，但其穩定可調度特性使它在全天候供電上有獨特貢獻。台灣的生質能主要來自農業廢棄物、禽畜廢棄物產生的沼氣，以及部分進口木質生質燃料。</p>
            <p class="bio-source">
              資料來源：
              <a href="https://data.gov.tw/dataset/160060" target="_blank" rel="noopener noreferrer">經濟部能源署，再生能源發電量月資料</a>；
              <a href="https://data.gov.tw/dataset/160061" target="_blank" rel="noopener noreferrer">經濟部能源署，再生能源裝（設）置容量月資料</a>
            </p>
          </div>

        </div>
      </div>
    </div>

    <!-- ────────────────────────────────────── Tab 2: 歷年趨勢 -->
    <div v-show="activeTab === 'trend'" class="bio-panel">
      <div class="bio-block">
        <h3 class="bio-block-title">台灣生質能發電歷年趨勢（2007–2025）</h3>
        <div class="bio-card">
          <div class="bio-trend-pair">
            <div class="bio-trend-col">
              <h4 class="bio-trend-subtitle">年發電量（GWh）</h4>
              <div class="bio-chart-wrap bio-chart-wrap--trend">
                <canvas ref="trendGwhChartRef"></canvas>
              </div>
            </div>
            <div class="bio-trend-col">
              <h4 class="bio-trend-subtitle">生質能占再生能源比例（%）</h4>
              <div class="bio-chart-wrap bio-chart-wrap--trend">
                <canvas ref="trendPctChartRef"></canvas>
              </div>
            </div>
          </div>
          <p class="bio-card-desc">台灣生質能發電量長期維持在相對有限的規模，並未如太陽光電或風力般快速擴張。由於其他再生能源快速成長，生質能在再生能源中的占比已從 {{ biomassData.trend.years[0] }} 年約 {{ biomassData.trend.renewableSharePct[0] }}% 下降至 {{ biomassData.trend.years[biomassData.trend.years.length - 1] }} 年的 {{ biomassData.trend.renewableSharePct[biomassData.trend.renewableSharePct.length - 1] }}%。這反映的不是生質能裝置量衰退，而是其他再生能源成長速度更快的結果。</p>
          <p class="bio-source">
            資料來源：
            <a href="https://data.gov.tw/dataset/160060" target="_blank" rel="noopener noreferrer">經濟部能源署，再生能源發電量月資料；年度數值依月資料加總整理</a>
          </p>
        </div>
      </div>
    </div>

    <!-- ────────────────────────────────────── Tab 3: 燃料來源 -->
    <div v-show="activeTab === 'origin'" class="bio-panel">
      <div class="bio-block bio-block--bottom">

        <div class="bio-bottom-col">
          <h3 class="bio-block-title">固態生質能</h3>
          <div class="bio-card">
            <h4 class="bio-card-title">農業廢棄物與木質燃料：直接燃燒發電</h4>
            <p class="bio-card-desc" style="margin-top:0">以固態有機物作為燃料，在鍋爐中燃燒產生蒸汽推動渦輪機發電。台灣固態生質能主要來自農業廢棄物與進口木質燃料。</p>
            <div class="bio-pros-cons">
              <div class="bio-trait-card bio-trait-card--solid">
                <div class="bio-trait-head">
                  <span class="bio-trait-tag bio-trait-tag--solid">農業廢棄物</span>
                </div>
                <div class="bio-trait-title">農業秸稈與木屑</div>
                <p class="bio-trait-desc">稻草、甘蔗渣等農業副產物，以及木屑、枝幹廢料，減少農業廢棄物量的同時提供燃料。</p>
              </div>
              <div class="bio-trait-card bio-trait-card--import">
                <div class="bio-trait-head">
                  <span class="bio-trait-tag bio-trait-tag--import">進口燃料</span>
                </div>
                <div class="bio-trait-title">木質顆粒（Wood Pellets）</div>
                <p class="bio-trait-desc">進口木質顆粒可與燃煤混燒降低碳強度，但需確保原料產地森林受到永續管理。</p>
              </div>
            </div>
            <div class="bio-conclusion-box">
              <span class="bio-conclusion-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/>
                  <line x1="8" y1="5" x2="8" y2="9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                  <circle cx="8" cy="11.5" r="0.8" fill="currentColor"/>
                </svg>
              </span>
              固態生質能理論上屬「碳中性」，但燃燒仍有碳排，需配合永續燃料來源認證方能成立。
            </div>
            <p class="bio-source">
              資料來源：
              <a href="https://data.gov.tw/dataset/160060" target="_blank" rel="noopener noreferrer">經濟部能源署，再生能源發電量月資料</a>；
              <a href="https://data.gov.tw/dataset/160061" target="_blank" rel="noopener noreferrer">經濟部能源署，再生能源裝（設）置容量月資料</a>
            </p>
          </div>
        </div>

        <div class="bio-bottom-col">
          <h3 class="bio-block-title">氣態生質能（沼氣）</h3>
          <div class="bio-card">
            <h4 class="bio-card-title">廢棄物產沼氣：廢棄物處理與發電的雙重效益</h4>
            <p class="bio-card-desc" style="margin-top:0">有機廢棄物厭氧分解產生甲烷（沼氣），收集後燃燒發電。沼氣不是「多燒一種燃料」，而是把本來就會排放的甲烷轉為電力，同時減少溫室氣體直接逸散。</p>
            <div class="bio-pros-cons">
              <div class="bio-trait-card bio-trait-card--gas">
                <div class="bio-trait-head">
                  <span class="bio-trait-tag bio-trait-tag--gas">禽畜廢棄物</span>
                </div>
                <div class="bio-trait-title">畜牧業有機廢水沼氣</div>
                <p class="bio-trait-desc">豬、雞糞等畜牧廢水厭氧處理產生沼氣，台灣禽畜密集的農業區是主要來源之一。</p>
              </div>
              <div class="bio-trait-card bio-trait-card--gas2">
                <div class="bio-trait-head">
                  <span class="bio-trait-tag bio-trait-tag--gas2">掩埋 / 污水</span>
                </div>
                <div class="bio-trait-title">掩埋場與污水廠沼氣</div>
                <p class="bio-trait-desc">垃圾掩埋場有機物分解甲烷，及污水廠消化池沼氣，收集後均可用於發電。</p>
              </div>
            </div>
            <div class="bio-cycle-mini">
              <span class="bio-cycle-item">有機廢棄物</span>
              <span class="bio-cycle-arr">→</span>
              <span class="bio-cycle-item">厭氧消化</span>
              <span class="bio-cycle-arr">→</span>
              <span class="bio-cycle-item">沼氣發電</span>
              <span class="bio-cycle-arr">→</span>
              <span class="bio-cycle-item">沼渣回田</span>
            </div>
            <p class="bio-source">
              資料來源：
              <a href="https://data.gov.tw/dataset/160060" target="_blank" rel="noopener noreferrer">經濟部能源署，再生能源發電量月資料</a>；
              <a href="https://data.gov.tw/dataset/160061" target="_blank" rel="noopener noreferrer">經濟部能源署，再生能源裝（設）置容量月資料</a>
            </p>
          </div>
        </div>

      </div>
    </div>

    <!-- ────────────────────────────────────── Tab 4: 效益與限制 -->
    <div v-show="activeTab === 'tradeoff'" class="bio-panel">
      <div class="bio-block bio-block--bottom">

        <div class="bio-bottom-col">
          <h3 class="bio-block-title">生質能的效益</h3>
          <div class="bio-card">
            <h4 class="bio-card-title">穩定電力與資源循環：生質能獨特的貢獻</h4>
            <div class="bio-pros-cons">

              <div class="bio-trait-card bio-trait-card--pro">
                <div class="bio-trait-head">
                  <span class="bio-trait-tag bio-trait-tag--pro">效益</span>
                  <div class="bio-trait-icon-wrap bio-icon--stable">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 9 L7 13 L15 5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div class="bio-trait-title">穩定可調度的基載電力</div>
                <p class="bio-trait-desc">不受日照或風速影響，可全天候穩定供電，彌補太陽能與風電的間歇性，是少數不需搭配儲能即可提供基載的再生能源。</p>
              </div>

              <div class="bio-trait-card bio-trait-card--pro">
                <div class="bio-trait-head">
                  <span class="bio-trait-tag bio-trait-tag--pro">效益</span>
                  <div class="bio-trait-icon-wrap bio-icon--cycle">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M15 8C14.2 4.6 11 2 7 2c-2.6 0-4.8 1.4-6 3.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
                      <path d="M3 10C3.8 13.4 7 16 11 16c2.6 0 4.8-1.4 6-3.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
                      <path d="M1 5.5 L1 10 L5 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M17 12.5 L17 8 L13 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div class="bio-trait-title">廢棄物再利用與循環經濟</div>
                <p class="bio-trait-desc">農業廢棄物、禽畜廢棄物轉為電力，兼具廢棄物處理功能；沼渣回農田，形成完整物質循環，符合循環經濟概念。</p>
              </div>

            </div>
            <p class="bio-card-desc">生質能在台灣能源轉型中扮演「補位者」的角色：提供其他再生能源無法給予的穩定基載電力，並在特定應用（如沼氣）中真正實現循環經濟。</p>
            <p class="bio-source">
              資料來源：
              <a href="https://www.moeaea.gov.tw/" target="_blank" rel="noopener noreferrer">經濟部能源署，再生能源政策說明</a>
            </p>
          </div>
        </div>

        <div class="bio-bottom-col">
          <h3 class="bio-block-title">生質能的限制</h3>
          <div class="bio-card">
            <h4 class="bio-card-title">不可忽視的燃料來源、碳排與永續性問題</h4>
            <div class="bio-pros-cons">

              <div class="bio-trait-card bio-trait-card--lim">
                <div class="bio-trait-head">
                  <span class="bio-trait-tag bio-trait-tag--lim">限制</span>
                  <div class="bio-trait-icon-wrap bio-icon--supply">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="7.5" stroke="currentColor" stroke-width="1.6"/>
                      <path d="M9 5 L9 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                      <circle cx="9" cy="13" r="1.1" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <div class="bio-trait-title">需穩定且永續的燃料來源</div>
                <p class="bio-trait-desc">農業廢棄物分散、採集成本高，可能制約大規模擴張；進口木質顆粒需確保產地永續管理，否則侵蝕碳中性優勢。</p>
              </div>

              <div class="bio-trait-card bio-trait-card--lim">
                <div class="bio-trait-head">
                  <span class="bio-trait-tag bio-trait-tag--lim">限制</span>
                  <div class="bio-trait-icon-wrap bio-icon--carbon">
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                      <path d="M4.5 12C2.5 12 1 10.4 1 8.5c0-1.7 1.2-3.1 2.8-3.4C4.2 2.8 6.4 1 9 1a6 6 0 0 1 5.7 4c1.8.3 3.3 1.8 3.3 3.7 0 2-1.6 3.3-3.5 3.3H4.5z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <div class="bio-trait-title">固態燃燒仍有碳排與空污</div>
                <p class="bio-trait-desc">固態生質能燃燒即使理論上「碳中性」，實際仍有碳排；在空氣品質敏感地區，顆粒物與氮氧化物排放也不可忽視。</p>
              </div>

            </div>
            <div class="bio-final-quote">
              生質能的發展潛力，<br>不在於大幅擴張，<br>而在於精準結合農業廢棄物管理，<br>讓每一度電都更具資源意義。
            </div>
            <p class="bio-source">
              資料來源：
              <a href="https://www.moenv.gov.tw/" target="_blank" rel="noopener noreferrer">環境部，台灣溫室氣體排放統計</a>；
              <a href="https://www.moeaea.gov.tw/" target="_blank" rel="noopener noreferrer">經濟部能源署，再生能源政策說明</a>
            </p>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import Chart from 'chart.js/auto'

const sectionRef = ref(null)
const activeTab  = ref('status')

const tabs = [
  { id: 'status',   label: '發電現況' },
  { id: 'trend',    label: '歷年趨勢' },
  { id: 'origin',   label: '燃料來源' },
  { id: 'tradeoff', label: '效益與限制' },
]

const biomassData = {
  status: {
    year: 2025,
    renewableShare: 0.71,
    generationGwh: 269.299,
    installedCapacityMw: 84.389,
    solarShare: 42.25,
    windShare: 32.27,
  },
  renewableMix: {
    labels: ['太陽光電', '風力發電', '慣常水力', '廢棄物發電', '生質能發電', '地熱發電'],
    values: [15975.107, 12202.451, 5499.157, 3841.879, 269.299, 25.843],
    shares: [42.25, 32.27, 14.54, 10.16, 0.71, 0.07],
    backgroundColor: [
      'rgba(251,191,36,0.78)',
      'rgba(56,189,248,0.78)',
      'rgba(96,165,250,0.78)',
      'rgba(148,163,184,0.75)',
      'rgba(34,197,94,0.92)',
      'rgba(251,146,60,0.75)',
    ],
    borderColor: [
      'rgba(251,191,36,1)',
      'rgba(56,189,248,1)',
      'rgba(96,165,250,1)',
      'rgba(148,163,184,1)',
      'rgba(34,197,94,1)',
      'rgba(251,146,60,1)',
    ],
  },
  trend: {
    years: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
    generationGwh: [302.267, 272.489, 229.35, 270.038, 236.091, 242.07, 228.481, 252.467, 248.991, 208.056, 191.585, 191.649, 176.521, 211.754, 201.707, 164.296, 244.181, 237.716, 269.299],
    renewableSharePct: [3.63, 3.3, 2.94, 3.13, 2.63, 2.27, 2.1, 2.54, 2.38, 1.63, 1.55, 1.52, 1.16, 1.38, 1.13, 0.68, 0.89, 0.7, 0.71],
  },
  sourceTrend: {
    years: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
    solidGwh: [246.865, 226.997, 187.521, 234.679, 209.739, 218.577, 205.35, 231.913, 227.42, 185.762, 169.45, 166.44, 151.434, 141.366, 153.172, 118.278, 171.338, 173.77, 206.59],
    gaseousGwh: [55.402, 45.491, 41.829, 35.359, 26.352, 23.493, 23.131, 20.554, 21.571, 22.294, 22.135, 25.209, 25.087, 70.388, 48.535, 46.018, 72.842, 63.946, 62.708],
  },
  composition2025: {
    labels: ['固態生質能', '氣態生質能／沼氣'],
    generationGwh: [206.59, 62.708],
    generationSharePct: [76.71, 23.29],
    installedCapacityMw: [61.452, 22.937],
    installedCapacitySharePct: [72.82, 27.18],
  },
  biomassVsWaste2025: {
    labels: ['生質能', '廢棄物發電'],
    generationGwh: [269.299, 3841.879],
    renewableSharePct: [0.71, 10.16],
    combinedGenerationGwh: 4111.178,
    combinedRenewableSharePct: 10.87,
  },
}

const renewableChartRef = ref(null)
const trendGwhChartRef  = ref(null)
const trendPctChartRef  = ref(null)

const formatNumber = (value, digits = 3) =>
  Number(value).toLocaleString('zh-TW', {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits
  })

let renewableChart = null
let trendGwhChart  = null
let trendPctChart  = null
let observer       = null
let chartsInitialized = false

function initCharts() {
  if (chartsInitialized) return
  chartsInitialized = true
  initRenewableChart()
  initTrendGwhChart()
  initTrendPctChart()
}

function initRenewableChart() {
  const ctx = renewableChartRef.value
  if (!ctx) return
  renewableChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: biomassData.renewableMix.labels,
      datasets: [{
        data: biomassData.renewableMix.values,
        backgroundColor: biomassData.renewableMix.backgroundColor,
        borderColor: biomassData.renewableMix.borderColor,
        borderWidth: 2,
        hoverOffset: 8,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1400, easing: 'easeOutQuart', animateRotate: true, animateScale: true },
      cutout: '58%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: { font: { size: 12 }, padding: 14, usePointStyle: true, pointStyleWidth: 10 }
        },
        tooltip: {
          callbacks: {
            label: c => {
              const share = biomassData.renewableMix.shares[c.dataIndex]
              return ` ${c.label}：${formatNumber(c.parsed)} GWh（${share}%）`
            }
          }
        }
      }
    }
  })
}

function initTrendGwhChart() {
  const ctx = trendGwhChartRef.value
  if (!ctx) return
  trendGwhChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: biomassData.trend.years,
      datasets: [{
        label: '生質能',
        data: biomassData.trend.generationGwh,
        borderColor: 'rgba(34,197,94,0.9)',
        backgroundColor: 'rgba(34,197,94,0.1)',
        borderWidth: 2,
        pointRadius: 3,
        pointHoverRadius: 5,
        fill: true,
        tension: 0.35
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1400, easing: 'easeOutQuart' },
      interaction: { mode: 'index', intersect: false },
      scales: {
        x: {
          ticks: { font: { size: 11 }, color: '#64748b' },
          grid: { color: 'rgba(148,163,184,0.1)' },
          border: { color: 'transparent' }
        },
        y: {
          min: 140, max: 330,
          ticks: { callback: v => `${v}`, font: { size: 10 }, color: '#64748b' },
          grid: { color: 'rgba(148,163,184,0.12)' },
          border: { color: 'transparent' }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: c => ` 生質能：${formatNumber(c.parsed.y)} GWh` } }
      }
    }
  })
}

function initTrendPctChart() {
  const ctx = trendPctChartRef.value
  if (!ctx) return
  trendPctChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: biomassData.trend.years,
      datasets: [{
        label: '生質能占再生能源',
        data: biomassData.trend.renewableSharePct,
        borderColor: 'rgba(22,163,74,0.9)',
        backgroundColor: 'rgba(22,163,74,0.08)',
        borderWidth: 2,
        pointRadius: 3,
        pointHoverRadius: 5,
        fill: true,
        tension: 0.35
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1400, easing: 'easeOutQuart' },
      interaction: { mode: 'index', intersect: false },
      scales: {
        x: {
          ticks: { font: { size: 11 }, color: '#64748b' },
          grid: { color: 'rgba(148,163,184,0.1)' },
          border: { color: 'transparent' }
        },
        y: {
          beginAtZero: true, max: 4,
          ticks: { callback: v => `${v}%`, font: { size: 10 }, color: '#64748b' },
          grid: { color: 'rgba(148,163,184,0.12)' },
          border: { color: 'transparent' }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: c => ` 占再生能源：${c.parsed.y}%` } }
      }
    }
  })
}

watch(activeTab, () => {
  nextTick(() => {
    [renewableChart, trendGwhChart, trendPctChart]
      .forEach(c => c?.resize())
  })
})

onMounted(() => {
  setTimeout(() => {
    observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          initCharts()
          observer?.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    if (sectionRef.value) observer.observe(sectionRef.value)
  }, 50)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  renewableChart?.destroy()
  trendGwhChart?.destroy()
  trendPctChart?.destroy()
})
</script>

<style scoped>
/* ═══ 整體 ═══════════════════════════════════════════════ */
.bio {
  width: 100%;
  padding: 8px 0 52px;
}

/* ── 標題區 ── */
.bio-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 0 8px;
}

.bio-main-title {
  font-size: clamp(1.3rem, 2.6vw, 1.9rem);
  font-weight: 900;
  color: #14532d;
  line-height: 1.25;
  margin-bottom: 14px;
  letter-spacing: -0.3px;
}

.bio-subtitle {
  font-size: clamp(0.88rem, 1.4vw, 1rem);
  color: #475569;
  line-height: 1.85;
  max-width: 620px;
  margin: 0 auto;
}

/* ═══ Tab 導覽 ═══════════════════════════════════════════ */
.bio-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 36px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 18px;
  backdrop-filter: blur(4px);
}

.bio-tab {
  flex: 1;
  min-width: 100px;
  padding: 14px 20px;
  border: none;
  border-radius: 12px;
  background: transparent;
  color: #14532d;
  font-size: 0.9rem;
  font-weight: 800;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.18s ease;
  white-space: nowrap;
}

.bio-tab:hover:not(.bio-tab--active) {
  background: rgba(34, 197, 94, 0.12);
  transform: translateY(-1px);
}

.bio-tab--active {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: #052e16;
  box-shadow: 0 6px 18px rgba(34, 197, 94, 0.28);
}

/* ═══ 面板 ═══════════════════════════════════════════════ */
.bio-panel {
  min-height: 200px;
}

/* ── 區塊 ── */
.bio-block {
  margin-bottom: 44px;
}

.bio-block-title {
  font-size: 1.05rem;
  font-weight: 900;
  color: #15803d;
  margin-bottom: 20px;
  padding-left: 14px;
  border-left: 4px solid #22c55e;
  line-height: 1.4;
}

.bio-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
}

/* ── 卡片 ── */
.bio-card {
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.88);
  border-radius: 22px;
  padding: 26px 24px;
  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.07);
  backdrop-filter: blur(6px);
}

.bio-card-title {
  font-size: clamp(0.93rem, 1.6vw, 1.08rem);
  font-weight: 900;
  color: #1e3a5f;
  margin-bottom: 18px;
  line-height: 1.45;
}

.bio-card-desc {
  color: #4b5563;
  line-height: 1.85;
  font-size: 0.92rem;
  margin-top: 18px;
}

.bio-source {
  font-size: 0.75rem;
  color: #94a3b8;
  margin-top: 12px;
  line-height: 1.65;
}

.bio-source a {
  color: #16a34a;
  text-decoration: none;
}

.bio-source a:hover {
  text-decoration: underline;
  color: #15803d;
}

/* ── 圖表容器 ── */
.bio-chart-wrap {
  position: relative;
  height: 300px;
  width: 100%;
}

.bio-chart-wrap--trend {
  height: 230px;
}

/* ═══ 數字占比顯示 ═══════════════════════════════════════ */
.bio-pct-display {
  display: flex;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(226, 232, 240, 0.65);
  margin: 16px 0 20px;
}

.bio-pct-block {
  flex: 1;
  text-align: center;
  padding: 28px 16px;
  background: rgba(240, 253, 244, 0.5);
}

.bio-pct-block--b {
  background: rgba(220, 252, 231, 0.45);
  border-left: 1px solid rgba(226, 232, 240, 0.65);
}

.bio-pct-num {
  font-size: 2.4rem;
  font-weight: 900;
  color: #15803d;
  line-height: 1;
  margin-bottom: 8px;
  letter-spacing: -1px;
}

.bio-pct-unit {
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0;
}

.bio-pct-unit-sm {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0;
}

.bio-pct-name {
  font-size: 0.9rem;
  font-weight: 700;
  color: #1e3a5f;
  margin-bottom: 3px;
}

.bio-pct-sub {
  font-size: 0.74rem;
  color: #94a3b8;
  margin-bottom: 6px;
}

.bio-pct-note {
  font-size: 0.76rem;
  color: #16a34a;
  font-weight: 600;
  margin-top: 8px;
}

/* ── 項目列表 ── */
.bio-bullets {
  list-style: none;
  padding: 0;
  margin: 4px 0 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.bio-bullets li {
  font-size: 0.88rem;
  color: #475569;
  line-height: 1.65;
  padding-left: 16px;
  position: relative;
}

.bio-bullets li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
}

/* ═══ 歷年趨勢 ════════════════════════════════════════════ */
.bio-trend-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 16px;
}

.bio-trend-subtitle {
  font-size: 0.88rem;
  font-weight: 700;
  color: #374151;
  margin-bottom: 10px;
}

/* ═══ 雙欄佈局 ════════════════════════════════════════════ */
.bio-block--bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  align-items: start;
}

/* ═══ 特性卡片系統 ════════════════════════════════════════ */
.bio-pros-cons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 0 0 16px;
}

.bio-trait-card {
  border-radius: 16px;
  padding: 16px 16px 18px;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.bio-trait-card:hover {
  transform: translateY(-2px);
}

/* 固態生質能 */
.bio-trait-card--solid {
  background: linear-gradient(145deg, rgba(240,253,244,.85), rgba(220,252,231,.75));
  border: 1px solid rgba(34,197,94,.25);
  box-shadow: 0 3px 12px rgba(34,197,94,.1);
}

/* 進口燃料 */
.bio-trait-card--import {
  background: linear-gradient(145deg, rgba(254,249,195,.75), rgba(253,230,138,.55));
  border: 1px solid rgba(234,179,8,.2);
  box-shadow: 0 3px 12px rgba(234,179,8,.09);
}

/* 沼氣（禽畜）*/
.bio-trait-card--gas {
  background: linear-gradient(145deg, rgba(204,251,241,.85), rgba(153,246,228,.65));
  border: 1px solid rgba(20,184,166,.22);
  box-shadow: 0 3px 12px rgba(20,184,166,.1);
}

/* 沼氣（掩埋/污水）*/
.bio-trait-card--gas2 {
  background: linear-gradient(145deg, rgba(219,234,254,.8), rgba(191,219,254,.6));
  border: 1px solid rgba(59,130,246,.2);
  box-shadow: 0 3px 12px rgba(59,130,246,.09);
}

/* 效益 */
.bio-trait-card--pro {
  background: linear-gradient(145deg, rgba(240,253,244,.85), rgba(220,252,231,.75));
  border: 1px solid rgba(34,197,94,.25);
  box-shadow: 0 3px 12px rgba(34,197,94,.1);
}

/* 限制 */
.bio-trait-card--lim {
  background: linear-gradient(145deg, rgba(255,237,213,.85), rgba(254,215,170,.65));
  border: 1px solid rgba(249,115,22,.2);
  box-shadow: 0 3px 12px rgba(249,115,22,.09);
}

.bio-trait-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.bio-trait-tag {
  display: inline-flex;
  align-items: center;
  height: 22px;
  padding: 0 9px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 900;
  white-space: nowrap;
  letter-spacing: 0.3px;
}

.bio-trait-tag--solid  { background: rgba(240,253,244,1); color: #14532d; border: 1px solid rgba(34,197,94,.32); }
.bio-trait-tag--import { background: rgba(254,249,195,1); color: #78350f; border: 1px solid rgba(234,179,8,.3); }
.bio-trait-tag--gas    { background: rgba(204,251,241,1); color: #134e4a; border: 1px solid rgba(20,184,166,.3); }
.bio-trait-tag--gas2   { background: rgba(219,234,254,1); color: #1d4ed8; border: 1px solid rgba(59,130,246,.28); }
.bio-trait-tag--pro    { background: rgba(240,253,244,1); color: #14532d; border: 1px solid rgba(34,197,94,.32); }
.bio-trait-tag--lim    { background: rgba(255,237,213,1); color: #9a3412; border: 1px solid rgba(249,115,22,.3); }

.bio-trait-icon-wrap {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.bio-icon--stable { background: rgba(34,197,94,.18);  color: #16a34a; }
.bio-icon--cycle  { background: rgba(34,197,94,.18);  color: #16a34a; }
.bio-icon--supply { background: rgba(249,115,22,.14); color: #ea580c; }
.bio-icon--carbon { background: rgba(249,115,22,.14); color: #ea580c; }

.bio-trait-title {
  font-size: 0.94rem;
  font-weight: 900;
  color: #1e3a5f;
  margin-bottom: 7px;
  letter-spacing: -0.1px;
}

.bio-trait-desc {
  font-size: 0.82rem;
  color: #4b5563;
  line-height: 1.7;
  margin: 0;
}

/* ═══ 結論框 ════════════════════════════════════════════= */
.bio-conclusion-box {
  margin-top: 16px;
  padding: 14px 16px 14px 20px;
  border-radius: 12px;
  background: rgba(240, 253, 244, 0.85);
  border-left: 4px solid #22c55e;
  font-size: 0.88rem;
  font-weight: 700;
  color: #14532d;
  line-height: 1.7;
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.bio-conclusion-icon {
  flex-shrink: 0;
  margin-top: 1px;
  color: #16a34a;
}

/* ═══ 循環流程（迷你版） ════════════════════════════════= */
.bio-cycle-mini {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin: 12px 0 16px;
  padding: 14px 16px;
  background: rgba(240,253,244,0.65);
  border: 1px solid rgba(34,197,94,0.18);
  border-radius: 12px;
}

.bio-cycle-item {
  font-size: 0.82rem;
  font-weight: 700;
  color: #14532d;
  padding: 4px 10px;
  background: rgba(255,255,255,0.75);
  border-radius: 999px;
  border: 1px solid rgba(34,197,94,0.22);
}

.bio-cycle-arr {
  font-size: 0.9rem;
  color: #22c55e;
  font-weight: 900;
}

/* ═══ 最終引言框 ══════════════════════════════════════════ */
.bio-final-quote {
  position: relative;
  padding: 26px 28px 24px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(240,253,244,0.95), rgba(187,247,208,0.82) 50%, rgba(220,252,231,0.95));
  border: 1.5px solid rgba(34,197,94,.42);
  box-shadow: 0 10px 32px rgba(34,197,94,.15), 0 2px 8px rgba(15,23,42,.05);
  font-size: 1rem;
  font-weight: 800;
  color: #14532d;
  line-height: 1.9;
  text-align: center;
  overflow: hidden;
  margin-bottom: 16px;
}

.bio-final-quote::before {
  content: '\201C';
  position: absolute;
  top: -14px;
  left: 16px;
  font-size: 5.5rem;
  font-family: Georgia, 'Times New Roman', serif;
  color: rgba(34, 197, 94, 0.18);
  line-height: 1;
  pointer-events: none;
}

.bio-final-quote::after {
  content: '\201D';
  position: absolute;
  bottom: -40px;
  right: 16px;
  font-size: 5.5rem;
  font-family: Georgia, 'Times New Roman', serif;
  color: rgba(34, 197, 94, 0.18);
  line-height: 1;
  pointer-events: none;
}

/* ═══ 響應式 ══════════════════════════════════════════════ */
@media (max-width: 900px) {
  .bio-grid-2        { grid-template-columns: 1fr; }
  .bio-trend-pair    { grid-template-columns: 1fr; }
  .bio-block--bottom { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .bio-chart-wrap { height: 260px; }
  .bio-pros-cons  { grid-template-columns: 1fr; }
  .bio-tabs  { gap: 6px; padding: 5px; }
  .bio-tab   { font-size: 0.82rem; padding: 11px 12px; }
}

@media (max-width: 480px) {
  .bio-card       { padding: 18px 16px; border-radius: 18px; }
  .bio-chart-wrap { height: 240px; }
}
</style>
