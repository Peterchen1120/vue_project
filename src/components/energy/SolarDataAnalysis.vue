<template>
  <section class="sol" ref="sectionRef">

    <!-- 標題區 -->
    <div class="sol-header">
      <h2 class="sol-main-title">太陽能發電：快速崛起，但條件不可忽視</h2>
      <p class="sol-subtitle">從台灣現況、歷年趨勢、發展條件，到太陽能板的生命週期代價，理解太陽光電在 SDG7 中的真正角色。</p>
    </div>

    <!-- Tab 導覽 -->
    <div class="sol-tabs" role="tablist" aria-label="太陽能分析分頁">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="sol-tab"
        :class="{ 'sol-tab--active': activeTab === tab.id }"
        role="tab"
        :aria-selected="activeTab === tab.id"
        @click="activeTab = tab.id"
      >{{ tab.label }}</button>
    </div>

    <!-- ────────────────────────────────────── Tab 1: 發電現況 -->
    <div v-show="activeTab === 'status'" class="sol-panel">
      <div class="sol-block">
        <h3 class="sol-block-title">台灣太陽光電發電現況</h3>
        <div class="sol-grid-2">

          <!-- 圓環圖 -->
          <div class="sol-card">
            <h4 class="sol-card-title">台灣再生能源版圖：太陽光電已成為主力</h4>
            <div class="sol-chart-wrap">
              <canvas ref="renewableChartRef"></canvas>
            </div>
            <p class="sol-card-desc">近年台灣再生能源結構快速改變，太陽光電已成為再生能源發電中最重要的來源之一。它具備建置速度快、部署彈性高的優勢，因此成為台灣能源轉型的重要推進力量。</p>
            <p class="sol-source">
              資料來源：
              <a href="https://www.moeaea.gov.tw/ECW/populace/content/Content.aspx?menu_id=14437" target="_blank" rel="noopener noreferrer">經濟部能源署，發電概況</a>；
              <a href="https://www.taipower.com.tw/2289/2363/2380/2383/simpleList" target="_blank" rel="noopener noreferrer">台灣電力公司，再生能源發電概況</a>
            </p>
          </div>

          <!-- 數字卡 -->
          <div class="sol-card">
            <h4 class="sol-card-title">在台灣能源轉型中，太陽能扮演多大的角色？</h4>
            <div class="sol-pct-display">
              <div class="sol-pct-block">
                <div class="sol-pct-sub">占再生能源發電量（2025）</div>
                <div class="sol-pct-num">42.25<span class="sol-pct-unit">%</span></div>
                <div class="sol-pct-name">太陽光電</div>
                <div class="sol-pct-note">台灣最大再生能源電力來源</div>
              </div>
              <div class="sol-pct-block sol-pct-block--b">
                <div class="sol-pct-sub">占全國總發電量（2025）</div>
                <div class="sol-pct-num">5.53<span class="sol-pct-unit">%</span></div>
                <div class="sol-pct-name">太陽光電</div>
                <div class="sol-pct-note">已是總體電力的重要組成</div>
              </div>
            </div>
            <ul class="sol-bullets">
              <li><strong>太陽光電</strong>：利用太陽能電池將光能轉換為電能，可設置於屋頂、停車棚或適當地面空間。</li>
              <li><strong>發展優勢</strong>：相較於大型水壩或大型風場，太陽光電較容易分散設置並快速擴充容量。</li>
            </ul>
            <p class="sol-card-desc">太陽光電的快速成長，使它成為台灣增加綠電的重要方式。然而，裝置規模持續擴大後，土地使用、供電波動與未來廢棄模組回收等問題也必須同步處理。</p>
            <p class="sol-source">
              資料來源：
              <a href="https://energy.moenv.gov.tw/energy/electricity-generation-mix/2408.html" target="_blank" rel="noopener noreferrer">環境部能源資訊平台，電力結構</a>；
              <a href="https://www.moeaea.gov.tw/ECW/populace/content/Content.aspx?menu_id=14437" target="_blank" rel="noopener noreferrer">經濟部能源署，發電概況</a>
            </p>
          </div>

        </div>
      </div>
    </div>

    <!-- ────────────────────────────────────── Tab 2: 歷年趨勢 -->
    <div v-show="activeTab === 'trend'" class="sol-panel">
      <div class="sol-block">
        <h3 class="sol-block-title">台灣太陽光電歷年趨勢（2006–2025）</h3>
        <div class="sol-card">
          <div class="sol-trend-pair">
            <div class="sol-trend-col">
              <h4 class="sol-trend-subtitle">年發電量（GWh）</h4>
              <div class="sol-chart-wrap sol-chart-wrap--trend">
                <canvas ref="trendGwhRef"></canvas>
              </div>
            </div>
            <div class="sol-trend-col">
              <h4 class="sol-trend-subtitle">太陽光電占再生能源比例（%）</h4>
              <div class="sol-chart-wrap sol-chart-wrap--trend">
                <canvas ref="trendPctRef"></canvas>
              </div>
            </div>
          </div>
          <p class="sol-card-desc">台灣太陽光電在近二十年間快速成長，從早期規模極小的補充型能源，逐步成為再生能源發電的主要來源。發電量與占比的提升，反映太陽能具有快速擴張的優勢；但隨著裝置容量增加，日照波動、土地使用與報廢模組處理也成為不可忽視的課題。</p>
          <p class="sol-source">
            資料來源：
            <a href="https://www.esist.org.tw/" target="_blank" rel="noopener noreferrer">經濟部能源署，能源統計專區</a>；
            <a href="https://www.esist.org.tw/attachments/handbook/2024/ebook/2024EnergyStaHandBook.pdf" target="_blank" rel="noopener noreferrer">經濟部能源署，2024 能源統計手冊</a>
          </p>
        </div>
      </div>
    </div>

    <!-- ────────────────────────────────────── Tab 3: 發展條件 -->
    <div v-show="activeTab === 'condition'" class="sol-panel">
      <div class="sol-block sol-block--bottom">

        <div class="sol-bottom-col">
          <h3 class="sol-block-title">台灣太陽能發展定位</h3>
          <div class="sol-card">
            <h4 class="sol-card-title">快速擴張的綠電來源，但不是全天候電力</h4>
            <div class="sol-chart-wrap sol-chart-wrap--bar-sm">
              <canvas ref="mixBarRef"></canvas>
            </div>
            <p class="sol-card-desc">太陽能可分散設置、建置速度快，是台灣近年擴大再生能源的重要選擇。然而，太陽能發電會隨日照、天候與時間變化，白天產生的大量電力並不能直接取代夜間與陰雨時段的供電需求。</p>
            <p class="sol-source">
              資料來源：
              <a href="https://www.moeaea.gov.tw/ECW/populace/content/Content.aspx?menu_id=14437" target="_blank" rel="noopener noreferrer">經濟部能源署，發電概況</a>
            </p>
          </div>
        </div>

        <div class="sol-bottom-col">
          <h3 class="sol-block-title">太陽能在台灣的優勢與限制</h3>
          <div class="sol-card">
            <h4 class="sol-card-title">四個面向，理解太陽光電在台灣的真實處境</h4>
            <div class="sol-pros-cons">
              <div class="sol-trait-card sol-trait-card--pro">
                <div class="sol-trait-tag sol-trait-tag--pro">優勢</div>
                <div class="sol-trait-icon">☀️</div>
                <div class="sol-trait-title">快速建置</div>
                <p class="sol-trait-desc">太陽能設備模組化程度高，可設置於屋頂、停車棚與適當地面空間，較容易快速增加發電容量。</p>
              </div>
              <div class="sol-trait-card sol-trait-card--lim">
                <div class="sol-trait-tag sol-trait-tag--lim">限制</div>
                <div class="sol-trait-icon">🌥️</div>
                <div class="sol-trait-title">發電間歇性</div>
                <p class="sol-trait-desc">太陽能受到日夜、雲層與降雨影響，無法全天穩定供電，因此需要儲能與電網調度配合。</p>
              </div>
              <div class="sol-trait-card sol-trait-card--tw">
                <div class="sol-trait-tag sol-trait-tag--tw">台灣挑戰</div>
                <div class="sol-trait-icon">🏝️</div>
                <div class="sol-trait-title">土地使用壓力</div>
                <p class="sol-trait-desc">台灣土地面積有限，大型地面型光電可能與農業、養殖、景觀或生態保護產生空間競爭。</p>
              </div>
              <div class="sol-trait-card sol-trait-card--tw">
                <div class="sol-trait-tag sol-trait-tag--tw">台灣挑戰</div>
                <div class="sol-trait-icon">🌀</div>
                <div class="sol-trait-title">颱風與災害風險</div>
                <p class="sol-trait-desc">台灣颱風與豪雨頻繁，光電設施必須考量耐風、排水、防災設計，以及受損後的清理與回收。</p>
              </div>
            </div>
            <p class="sol-card-desc">太陽能的優勢在於部署彈性與快速擴張，但台灣土地有限、天候變化明顯且颱風頻繁，因此太陽光電更適合作為能源組合中的重要主力之一，而非單獨承擔所有供電需求。</p>
            <p class="sol-source">
              資料來源：
              <a href="https://pvis.moenv.gov.tw/" target="_blank" rel="noopener noreferrer">環境部，廢太陽光電板回收服務管理資訊系統</a>
            </p>
          </div>
        </div>

      </div>
    </div>

    <!-- ────────────────────────────────────── Tab 4: 環境代價 -->
    <div v-show="activeTab === 'lifecycle'" class="sol-panel">
      <div class="sol-block">
        <h3 class="sol-block-title">太陽能板的生命週期代價</h3>
        <div class="sol-card">
          <h4 class="sol-card-title">發電時低污染，不代表從製造到報廢都沒有環境成本。</h4>

          <!-- 生命週期流程 -->
          <div class="sol-lifecycle">
            <div class="sol-lc-step sol-lc-step--mfg">
              <div class="sol-lc-num">01</div>
              <div class="sol-lc-icon">⚙️</div>
              <div class="sol-lc-title">原料與製造</div>
              <p class="sol-lc-desc">矽晶材料、玻璃與鋁框的加工仍需要能源與資源投入。</p>
            </div>
            <div class="sol-lc-arrow" aria-hidden="true">→</div>
            <div class="sol-lc-step sol-lc-step--gen">
              <div class="sol-lc-num">02</div>
              <div class="sol-lc-icon">☀️</div>
              <div class="sol-lc-title">安裝與發電</div>
              <p class="sol-lc-desc">運轉時不需燃燒燃料，直接空氣污染與碳排相對低。</p>
            </div>
            <div class="sol-lc-arrow" aria-hidden="true">→</div>
            <div class="sol-lc-step sol-lc-step--dmg">
              <div class="sol-lc-num">03</div>
              <div class="sol-lc-icon">🌀</div>
              <div class="sol-lc-title">災害受損</div>
              <p class="sol-lc-desc">颱風與豪雨可能造成模組破裂、散落，增加清理與監測需求。</p>
            </div>
            <div class="sol-lc-arrow" aria-hidden="true">→</div>
            <div class="sol-lc-step sol-lc-step--rec">
              <div class="sol-lc-num">04</div>
              <div class="sol-lc-icon">♻️</div>
              <div class="sol-lc-title">報廢回收</div>
              <p class="sol-lc-desc">模組汰役後需要拆解與資源化處理，否則可能形成廢棄物管理壓力。</p>
            </div>
          </div>

          <!-- 下半部左右分欄 -->
          <div class="sol-lc-bottom">
            <div class="sol-lc-left">
              <h4 class="sol-lc-sub-title">太陽能真的完全零污染嗎？</h4>
              <p class="sol-card-desc" style="margin-top:0">太陽能板在發電過程中不需燃燒燃料，因此具備低碳與低空氣污染的優勢。然而，從原料取得、模組製造，到設備受損或使用年限結束後的拆解回收，仍然涉及能源消耗、材料使用與廢棄物處理問題。</p>
              <div class="sol-conclusion-box">
                太陽能的環境代價，主要集中在製造前端與報廢後端，而不是日常發電階段。
              </div>
            </div>
            <div class="sol-lc-right">
              <h4 class="sol-lc-sub-title">對台灣而言，問題更不能拖到未來</h4>
              <ul class="sol-lc-bullets">
                <li>裝置容量快速增加，代表未來將有大量模組陸續進入汰役期。</li>
                <li>颱風與豪雨可能讓部分模組提前受損，增加回收與清運需求。</li>
                <li>若缺乏完善的回收制度，今天的綠能建設可能成為未來的廢棄物管理壓力。</li>
              </ul>
              <div class="sol-final-quote">
                真正永續的太陽能，不只要能發電，也要能被妥善回收。
              </div>
            </div>
          </div>

          <p class="sol-source">
            資料來源：
            <a href="https://pvis.moenv.gov.tw/pvis/info/Plan" target="_blank" rel="noopener noreferrer">環境部資源循環署，廢太陽光電板回收處理說明</a>；
            <a href="https://pvis.moenv.gov.tw/pvis/NewsItem?id=12" target="_blank" rel="noopener noreferrer">經濟部能源署，太陽光電模組回收機制說明</a>
          </p>
        </div>
      </div>
    </div>


  </section>
</template>

<script setup>
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import Chart from 'chart.js/auto'

// ── 各分析畫面資料來源 ──────────────────────────────────
const solarAnalysisPages = [
  {
    id: 'status',
    title: '台灣太陽光電發電現況',
    sources: [
      { label: '經濟部能源署，發電概況', url: 'https://www.moeaea.gov.tw/ECW/populace/content/Content.aspx?menu_id=14437' },
      { label: '台灣電力公司，再生能源發電概況', url: 'https://www.taipower.com.tw/2289/2363/2380/2383/simpleList' },
      { label: '環境部能源資訊平台，電力結構', url: 'https://energy.moenv.gov.tw/energy/electricity-generation-mix/2408.html' }
    ]
  },
  {
    id: 'trend',
    title: '台灣太陽光電歷年趨勢',
    sources: [
      { label: '經濟部能源署，能源統計專區', url: 'https://www.esist.org.tw/' },
      { label: '經濟部能源署，2024 能源統計手冊', url: 'https://www.esist.org.tw/attachments/handbook/2024/ebook/2024EnergyStaHandBook.pdf' }
    ]
  },
  {
    id: 'condition',
    title: '太陽能在台灣的發展條件',
    sources: [
      { label: '經濟部能源署，發電概況', url: 'https://www.moeaea.gov.tw/ECW/populace/content/Content.aspx?menu_id=14437' },
      { label: '環境部，廢太陽光電板回收服務管理資訊系統', url: 'https://pvis.moenv.gov.tw/' }
    ]
  },
  {
    id: 'lifecycle',
    title: '太陽能板的生命週期代價',
    sources: [
      { label: '環境部資源循環署，廢太陽光電板回收處理說明', url: 'https://pvis.moenv.gov.tw/pvis/info/Plan' },
      { label: '經濟部能源署，太陽光電模組回收機制說明', url: 'https://pvis.moenv.gov.tw/pvis/NewsItem?id=12' }
    ]
  }
]

const sectionRef = ref(null)
const activeTab  = ref('status')

const tabs = [
  { id: 'status',    label: '發電現況' },
  { id: 'trend',     label: '歷年趨勢' },
  { id: 'condition', label: '發展條件' },
  { id: 'lifecycle', label: '環境代價' },
]

// ── Canvas refs ──
const renewableChartRef = ref(null)
const trendGwhRef       = ref(null)
const trendPctRef       = ref(null)
const mixBarRef         = ref(null)

// ── Chart instances ──
let renewableChart = null
let trendGwhChart  = null
let trendPctChart  = null
let mixBarChart    = null
let observer       = null
let chartsInitialized = false

// ── 資料 ──
const YEARS     = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]
const SOLAR_GWH = [1.5,2.2,4.5,9.1,21.7,61.6,159.9,321.1,528.8,850.3,1109.0,1667.5,2703.7,4017.0,6074.7,7970.2,10675.3,12909.7,15295.9,15975.1]
const SOLAR_PCT = [0.02,0.03,0.05,0.12,0.25,0.69,1.50,2.96,5.33,8.11,8.71,13.48,21.37,26.31,40.00,45.46,44.70,47.82,45.10,42.25]

function initCharts() {
  if (chartsInitialized) return
  chartsInitialized = true
  initRenewableChart()
  initTrendGwhChart()
  initTrendPctChart()
  initMixBarChart()
}

function initRenewableChart() {
  const ctx = renewableChartRef.value
  if (!ctx) return
  renewableChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['太陽光電', '風力', '慣常水力', '廢棄物', '生質能', '地熱'],
      datasets: [{
        data: [42.25, 32.27, 14.54, 10.16, 0.71, 0.07],
        backgroundColor: [
          'rgba(251,203,67,0.88)',
          'rgba(71,130,180,0.82)',
          'rgba(34,211,238,0.82)',
          'rgba(110,231,183,0.78)',
          'rgba(167,243,208,0.78)',
          'rgba(209,250,229,0.78)'
        ],
        borderColor: [
          'rgba(251,191,36,1)',
          'rgba(71,130,180,1)',
          'rgba(34,211,238,1)',
          'rgba(110,231,183,1)',
          'rgba(167,243,208,1)',
          'rgba(209,250,229,1)'
        ],
        borderWidth: 2,
        hoverOffset: 8
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
        tooltip: { callbacks: { label: c => ` ${c.label}：${c.parsed}%` } }
      }
    }
  })
}

function initTrendGwhChart() {
  const ctx = trendGwhRef.value
  if (!ctx) return
  trendGwhChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: YEARS,
      datasets: [{
        label: '太陽光電',
        data: SOLAR_GWH,
        borderColor: 'rgba(251,191,36,0.9)',
        backgroundColor: 'rgba(251,191,36,0.1)',
        borderWidth: 2,
        pointRadius: 2.5,
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
          ticks: { font: { size: 10 }, color: '#64748b', maxRotation: 45, autoSkip: true, maxTicksLimit: 10 },
          grid: { color: 'rgba(148,163,184,0.1)' },
          border: { color: 'transparent' }
        },
        y: {
          beginAtZero: true,
          ticks: { callback: v => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v, font: { size: 10 }, color: '#64748b' },
          grid: { color: 'rgba(148,163,184,0.12)' },
          border: { color: 'transparent' }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: c => ` 太陽光電：${c.parsed.y.toLocaleString()} GWh` } }
      }
    }
  })
}

function initTrendPctChart() {
  const ctx = trendPctRef.value
  if (!ctx) return
  trendPctChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: YEARS,
      datasets: [{
        label: '太陽光電占再生能源',
        data: SOLAR_PCT,
        borderColor: 'rgba(249,115,22,0.9)',
        backgroundColor: 'rgba(249,115,22,0.08)',
        borderWidth: 2,
        pointRadius: 2.5,
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
          ticks: { font: { size: 10 }, color: '#64748b', maxRotation: 45, autoSkip: true, maxTicksLimit: 10 },
          grid: { color: 'rgba(148,163,184,0.1)' },
          border: { color: 'transparent' }
        },
        y: {
          beginAtZero: true, max: 55,
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

function initMixBarChart() {
  const ctx = mixBarRef.value
  if (!ctx) return
  mixBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['太陽光電', '風力', '慣常水力', '廢棄物', '生質能', '地熱'],
      datasets: [{
        label: '占再生能源發電量',
        data: [42.25, 32.27, 14.54, 10.16, 0.71, 0.07],
        backgroundColor: [
          'rgba(251,203,67,0.85)',
          'rgba(71,130,180,0.75)',
          'rgba(34,211,238,0.75)',
          'rgba(110,231,183,0.72)',
          'rgba(167,243,208,0.72)',
          'rgba(209,250,229,0.72)'
        ],
        borderColor: [
          'rgba(251,191,36,1)',
          'rgba(71,130,180,1)',
          'rgba(34,211,238,1)',
          'rgba(110,231,183,1)',
          'rgba(167,243,208,1)',
          'rgba(209,250,229,1)'
        ],
        borderWidth: 1.5,
        borderRadius: 6,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1400, easing: 'easeOutQuart' },
      scales: {
        y: {
          beginAtZero: true, max: 50,
          ticks: { callback: v => `${v}%`, font: { size: 10 }, color: '#64748b' },
          grid: { color: 'rgba(148,163,184,0.12)' },
          border: { color: 'transparent' }
        },
        x: {
          grid: { display: false },
          ticks: { font: { size: 11 }, color: '#374151', maxRotation: 30 },
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

// Tab 切換後 resize，避免從 v-show 隱藏恢復時尺寸跑版
watch(activeTab, () => {
  nextTick(() => {
    [renewableChart, trendGwhChart, trendPctChart, mixBarChart]
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
  mixBarChart?.destroy()
})
</script>

<style scoped>
/* ═══ 整體 ═══════════════════════════════════════════════ */
.sol {
  width: 100%;
  padding: 8px 0 52px;
}

/* ── 標題區 ── */
.sol-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 0 8px;
}

.sol-main-title {
  font-size: clamp(1.3rem, 2.6vw, 1.9rem);
  font-weight: 900;
  color: #78350f;
  line-height: 1.25;
  margin-bottom: 14px;
  letter-spacing: -0.3px;
}

.sol-subtitle {
  font-size: clamp(0.88rem, 1.4vw, 1rem);
  color: #475569;
  line-height: 1.85;
  max-width: 620px;
  margin: 0 auto;
}

/* ═══ Tab 導覽 ═══════════════════════════════════════════ */
.sol-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 36px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid rgba(251, 191, 36, 0.2);
  border-radius: 18px;
  backdrop-filter: blur(4px);
}

.sol-tab {
  flex: 1;
  min-width: 100px;
  padding: 14px 20px;
  border: none;
  border-radius: 12px;
  background: transparent;
  color: #78350f;
  font-size: 0.9rem;
  font-weight: 800;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.18s ease;
  white-space: nowrap;
}

.sol-tab:hover:not(.sol-tab--active) {
  background: rgba(251, 191, 36, 0.12);
  transform: translateY(-1px);
}

.sol-tab--active {
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  color: #431407;
  box-shadow: 0 6px 18px rgba(245, 158, 11, 0.28);
}

/* ═══ 面板 ═══════════════════════════════════════════════ */
.sol-panel {
  min-height: 200px;
}

/* ── 區塊 ── */
.sol-block {
  margin-bottom: 44px;
}

.sol-block-title {
  font-size: 1.05rem;
  font-weight: 900;
  color: #92400e;
  margin-bottom: 20px;
  padding-left: 14px;
  border-left: 4px solid #fbbf24;
  line-height: 1.4;
}

.sol-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
}

/* ── 卡片 ── */
.sol-card {
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.88);
  border-radius: 22px;
  padding: 26px 24px;
  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.07);
  backdrop-filter: blur(6px);
}

.sol-card-title {
  font-size: clamp(0.93rem, 1.6vw, 1.08rem);
  font-weight: 900;
  color: #1e3a5f;
  margin-bottom: 18px;
  line-height: 1.45;
}

.sol-card-desc {
  color: #4b5563;
  line-height: 1.85;
  font-size: 0.92rem;
  margin-top: 18px;
}

.sol-source {
  font-size: 0.75rem;
  color: #94a3b8;
  margin-top: 12px;
  line-height: 1.65;
}

.sol-source a {
  color: #d97706;
  text-decoration: none;
}

.sol-source a:hover {
  text-decoration: underline;
  color: #b45309;
}

/* ── 圖表容器 ── */
.sol-chart-wrap {
  position: relative;
  height: 300px;
  width: 100%;
}

.sol-chart-wrap--trend {
  height: 230px;
}

.sol-chart-wrap--bar-sm {
  height: 220px;
}

/* ═══ 數字占比顯示 ═══════════════════════════════════════ */
.sol-pct-display {
  display: flex;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(226, 232, 240, 0.65);
  margin: 16px 0 20px;
}

.sol-pct-block {
  flex: 1;
  text-align: center;
  padding: 28px 16px;
  background: rgba(254, 243, 199, 0.45);
}

.sol-pct-block--b {
  background: rgba(255, 237, 213, 0.45);
  border-left: 1px solid rgba(226, 232, 240, 0.65);
}

.sol-pct-num {
  font-size: 2.4rem;
  font-weight: 900;
  color: #b45309;
  line-height: 1;
  margin-bottom: 8px;
  letter-spacing: -1px;
}

.sol-pct-unit {
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0;
}

.sol-pct-name {
  font-size: 0.9rem;
  font-weight: 700;
  color: #1e3a5f;
  margin-bottom: 3px;
}

.sol-pct-sub {
  font-size: 0.74rem;
  color: #94a3b8;
  margin-bottom: 6px;
}

.sol-pct-note {
  font-size: 0.76rem;
  color: #d97706;
  font-weight: 600;
  margin-top: 8px;
}

.sol-bullets {
  list-style: none;
  padding: 0;
  margin: 4px 0 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sol-bullets li {
  font-size: 0.88rem;
  color: #475569;
  line-height: 1.65;
  padding-left: 16px;
  position: relative;
}

.sol-bullets li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #fbbf24;
}

/* ═══ 歷年趨勢 ════════════════════════════════════════════ */
.sol-trend-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 16px;
}

.sol-trend-subtitle {
  font-size: 0.88rem;
  font-weight: 700;
  color: #374151;
  margin-bottom: 10px;
}

/* ═══ 發展條件 ════════════════════════════════════════════ */
.sol-block--bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  align-items: start;
}

.sol-pros-cons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 0 0 16px;
}

.sol-trait-card {
  border-radius: 14px;
  padding: 16px 14px;
}

.sol-trait-card--pro {
  background: rgba(254, 243, 199, 0.65);
  border: 1px solid rgba(251, 191, 36, 0.28);
}

.sol-trait-card--lim {
  background: rgba(255, 237, 213, 0.65);
  border: 1px solid rgba(249, 115, 22, 0.22);
}

.sol-trait-card--tw {
  background: rgba(241, 245, 249, 0.65);
  border: 1px solid rgba(148, 163, 184, 0.25);
}

.sol-trait-tag {
  display: inline-flex;
  align-items: center;
  height: 22px;
  padding: 0 8px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 900;
  margin-bottom: 8px;
  white-space: nowrap;
}

.sol-trait-tag--pro { background: #fef3c7; color: #92400e; }
.sol-trait-tag--lim { background: #ffedd5; color: #9a3412; }
.sol-trait-tag--tw  { background: #f1f5f9; color: #475569; }

.sol-trait-icon {
  font-size: 1.4rem;
  margin-bottom: 6px;
  display: block;
}

.sol-trait-title {
  font-size: 0.92rem;
  font-weight: 900;
  color: #1e3a5f;
  margin-bottom: 6px;
}

.sol-trait-desc {
  font-size: 0.82rem;
  color: #4b5563;
  line-height: 1.65;
  margin: 0;
}

/* ═══ 環境代價：生命週期 ══════════════════════════════════ */
.sol-lifecycle {
  display: flex;
  align-items: stretch;
  gap: 4px;
  margin: 24px 0 20px;
  overflow-x: auto;
  padding-bottom: 4px;
}

.sol-lc-step {
  flex: 1;
  min-width: 130px;
  padding: 18px 14px;
  border-radius: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sol-lc-step--mfg { background: rgba(255, 237, 213, 0.72); border: 1px solid rgba(249,115,22,0.2); }
.sol-lc-step--gen { background: rgba(254, 249, 195, 0.72); border: 1px solid rgba(234,179,8,0.2); }
.sol-lc-step--dmg { background: rgba(241, 245, 249, 0.72); border: 1px solid rgba(148,163,184,0.25); }
.sol-lc-step--rec { background: rgba(255, 237, 213, 0.55); border: 1px solid rgba(249,115,22,0.16); }

.sol-lc-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  font-size: 1.1rem;
  color: #cbd5e1;
  flex-shrink: 0;
  align-self: center;
}

.sol-lc-num {
  font-size: 0.7rem;
  font-weight: 900;
  color: #94a3b8;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.sol-lc-icon {
  font-size: 1.6rem;
  margin-bottom: 8px;
  line-height: 1;
}

.sol-lc-title {
  font-size: 0.9rem;
  font-weight: 900;
  color: #1e3a5f;
  margin-bottom: 8px;
}

.sol-lc-desc {
  font-size: 0.8rem;
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
}

.sol-lc-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 22px;
  padding-top: 22px;
  border-top: 1px solid rgba(15, 23, 42, 0.07);
}

.sol-lc-sub-title {
  font-size: 0.96rem;
  font-weight: 900;
  color: #1e3a5f;
  margin-bottom: 12px;
}

.sol-conclusion-box {
  margin-top: 16px;
  padding: 14px 18px;
  border-radius: 12px;
  background: rgba(254, 243, 199, 0.75);
  border-left: 4px solid #fbbf24;
  font-size: 0.9rem;
  font-weight: 700;
  color: #92400e;
  line-height: 1.65;
}

.sol-lc-bullets {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sol-lc-bullets li {
  font-size: 0.88rem;
  color: #475569;
  line-height: 1.65;
  padding-left: 16px;
  position: relative;
}

.sol-lc-bullets li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #f59e0b;
}

.sol-final-quote {
  padding: 14px 18px;
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.04);
  border: 1px solid rgba(15, 23, 42, 0.08);
  font-size: 0.88rem;
  font-weight: 700;
  color: #374151;
  line-height: 1.7;
  text-align: center;
  font-style: italic;
}

/* ═══ 資料來源 ════════════════════════════════════════════ */
.sol-sources {
  margin-top: 44px;
  padding: 18px 22px;
  background: rgba(241, 245, 249, 0.55);
  border-radius: 16px;
  border: 1px solid rgba(226, 232, 240, 0.7);
}

.sol-sources-title {
  font-size: 0.84rem;
  font-weight: 900;
  color: #64748b;
  margin-bottom: 10px;
  letter-spacing: 0.3px;
}

.sol-sources-list {
  padding-left: 18px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.sol-sources-list li {
  font-size: 0.76rem;
  color: #94a3b8;
  line-height: 1.55;
}

.sol-sources-list a {
  color: #d97706;
  text-decoration: none;
}

.sol-sources-list a:hover {
  text-decoration: underline;
  color: #b45309;
}

/* ═══ 響應式 ══════════════════════════════════════════════ */
@media (max-width: 900px) {
  .sol-grid-2         { grid-template-columns: 1fr; }
  .sol-trend-pair     { grid-template-columns: 1fr; }
  .sol-block--bottom  { grid-template-columns: 1fr; }
  .sol-lc-bottom      { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .sol-chart-wrap         { height: 260px; }
  .sol-chart-wrap--bar-sm { height: 200px; }

  .sol-lifecycle {
    flex-direction: column;
    align-items: stretch;
  }

  .sol-lc-arrow {
    transform: rotate(90deg);
    align-self: center;
    padding: 2px 0;
  }

  .sol-pros-cons { grid-template-columns: 1fr; }

  .sol-tabs  { gap: 6px; padding: 5px; }
  .sol-tab   { font-size: 0.82rem; padding: 11px 12px; }
}

@media (max-width: 480px) {
  .sol-card       { padding: 18px 16px; border-radius: 18px; }
  .sol-chart-wrap { height: 240px; }
}
</style>
