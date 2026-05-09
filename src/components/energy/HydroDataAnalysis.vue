<template>
  <section class="hydro-data-section" ref="sectionRef">

    <!-- 標題區 -->
    <div class="hydro-data-header">
      <h2 class="hydro-data-main-title">水力發電 : 相對穩定，但受地形限制</h2>
      <p class="hydro-data-subtitle">從台灣現況、全球比較、能源特性到抽蓄水力，理解水力發電在 SDG7 中的真正角色。</p>
    </div>

    <!-- 第一區：台灣水力發電現況 -->
    <div class="hydro-data-block">
      <h3 class="hydro-block-title">台灣水力發電現況</h3>
      <div class="hydro-block-grid">

        <!-- A. 再生能源結構甜甜圈圖 -->
        <div class="hydro-card">
          <h4 class="hydro-card-title">台灣再生能源版圖：水力不是主角，但仍是穩定隊友</h4>
          <div class="hydro-chart-wrap">
            <canvas ref="renewableChartRef"></canvas>
          </div>
          <p class="hydro-card-desc">近年台灣再生能源主力逐漸轉向太陽光電與風力，水力發電雖然占比不高，但因技術成熟、發電穩定，仍是再生能源結構中重要的一環。</p>
          <p class="hydro-source">
            資料來源：<a href="https://www.moeaea.gov.tw/ECW/populace/content/Content.aspx?menu_id=14437" target="_blank" rel="noopener noreferrer">經濟部能源署，2024 年再生能源發電結構</a>
          </p>
        </div>

        <!-- B. 水力占比數字顯示 -->
        <div class="hydro-card">
          <h4 class="hydro-card-title">在台灣電力系統中，水力扮演多大的角色？</h4>
          <div class="hydro-pct-display">
            <div class="hydro-pct-block">
              <div class="hydro-pct-sub">占全台總發電量</div>
              <div class="hydro-pct-num">1.46<span class="hydro-pct-unit">%</span></div>
              <div class="hydro-pct-name">慣常水力</div>
              <div class="hydro-pct-kwh">約 4,100 GWh</div>
            </div>
            <div class="hydro-pct-block hydro-pct-block--pump">
              <div class="hydro-pct-sub">占全台總發電量</div>
              <div class="hydro-pct-num">1.07<span class="hydro-pct-unit">%</span></div>
              <div class="hydro-pct-name">抽蓄水力</div>
              <div class="hydro-pct-kwh">約 3,000 GWh</div>
            </div>
          </div>
          <ul class="hydro-pct-bullets">
            <li><strong>慣常水力</strong>：利用河川水位落差直接推動水輪機發電，屬於持續穩定出力的傳統水力。</li>
            <li><strong>抽蓄水力</strong>：以電力把水抽至高處儲能，尖峰時放水發電，可靈活調節電網供需。</li>
          </ul>
          <p class="hydro-card-desc">從總發電比例來看，台灣水力發電占比不高。主要原因不是技術不足，而是台灣河川短急、可開發大型水力場址有限，加上環境保護與土地利用限制，使水力擴張空間受到影響。</p>
          <p class="hydro-source">
            資料來源：<a href="https://rsprc.ntu.edu.tw/web/research/research_in.jsp?lang=tw&rp_id=RP1741944880461" target="_blank" rel="noopener noreferrer">台大風險社會與政策研究中心整理，2024 年台灣發電結構</a>
          </p>
        </div>

      </div>
    </div>

    <!-- 歷年趨勢：兩張折線圖 -->
    <div class="hydro-data-block">
      <h3 class="hydro-block-title">台灣水力發電歷年趨勢（2006–2025）</h3>
      <div class="hydro-card">
        <div class="hydro-trend-pair">
          <div class="hydro-trend-col">
            <h4 class="hydro-trend-subtitle">年發電量（GWh）</h4>
            <div class="hydro-chart-wrap hydro-chart-wrap--trend">
              <canvas ref="trendGwhChartRef"></canvas>
            </div>
          </div>
          <div class="hydro-trend-col">
            <h4 class="hydro-trend-subtitle">慣常水力占再生能源（%）</h4>
            <div class="hydro-chart-wrap hydro-chart-wrap--trend">
              <canvas ref="trendPctChartRef"></canvas>
            </div>
          </div>
        </div>
        <p class="hydro-card-desc">水力的年發電量二十年來大致維持在 6,000–10,000 GWh 之間，整體相對穩定。然而在再生能源結構中，慣常水力的占比已從 2006 年的約 62% 降至 2024 年的約 14%——不是因為水力衰退，而是太陽光電與風力快速擴張稀釋了比例。</p>
        <p class="hydro-source">資料來源：<a href="https://www.taipower.com.tw/media/vtqlx0fc/02-%E6%AD%B7%E5%B9%B4%E6%B7%A8%E7%99%BC%E8%B3%BC%E9%9B%BB%E9%87%8F%2891-114%29.pdf" target="_blank" rel="noopener noreferrer">台灣電力公司，歷年淨發購電量（91–114）</a></p>
      </div>
    </div>

    <!-- 並排：台灣 vs 世界 + 水力優缺點分析 -->
    <div class="hydro-data-block hydro-data-block--bottom">
      <div class="hydro-bottom-col">
        <h3 class="hydro-block-title">台灣 vs 世界</h3>
        <div class="hydro-card">
          <h4 class="hydro-card-title">世界靠水力很多，台灣卻只能靠一點點？</h4>
          <div class="hydro-chart-wrap hydro-chart-wrap--bar-sm">
            <canvas ref="compareChartRef"></canvas>
          </div>
          <p class="hydro-card-desc">水力在全球仍是最重要的再生能源之一，但台灣因地形與河川條件，比例遠低於全球平均。這代表每個地區適合的能源組合不同，而非水力不重要。</p>
          <p class="hydro-source">
            <a href="https://www.iea.org/energy-system/renewables/hydroelectricity" target="_blank" rel="noopener noreferrer">IEA Hydropower，2024</a>；
            <a href="https://rsprc.ntu.edu.tw/web/research/research_in.jsp?lang=tw&rp_id=RP1741944880461" target="_blank" rel="noopener noreferrer">台大風險社會與政策研究中心，2024</a>
          </p>
        </div>
      </div>

      <div class="hydro-bottom-col">
        <h3 class="hydro-block-title">水力的優缺點分析</h3>
        <div class="hydro-card">
          <h4 class="hydro-card-title">水力發電的能力值：穩定，但不容易擴張</h4>
          <p class="hydro-eval-note">以下為特性評估，非正式統計數據。</p>
          <div class="hydro-chart-wrap hydro-chart-wrap--radar">
            <canvas ref="radarChartRef"></canvas>
          </div>
          <p class="hydro-card-desc">水力發電的優勢在於穩定、成熟、低碳，但大型水壩與水庫開發會牽涉土地、生態、河川流量與居民生活，因此不是想蓋就能蓋。對台灣來說，水力更適合扮演穩定輔助與電網調節角色，而不是大規模擴張的主力。</p>
          <p class="hydro-source">註：此圖為依能源特性整理的概念評估，非官方統計數據。</p>
        </div>
      </div>
    </div>

    <!-- 抽蓄水力與未來角色 -->
    <div class="hydro-data-block">
      <h3 class="hydro-block-title">抽蓄水力與未來角色</h3>
      <div class="hydro-card hydro-card--pump">
        <h4 class="hydro-card-title">水力不只發電，還能當電網的水電池</h4>
        <div class="hydro-pump-flow">
          <div class="hydro-pump-step">
            <div class="hydro-pump-icon hydro-pump-icon--low">
              <svg viewBox="0 0 52 52" width="30" height="30" fill="none" aria-hidden="true">
                <circle cx="26" cy="38" r="10" fill="rgba(34,211,238,0.35)" stroke="#22d3ee" stroke-width="2"/>
                <line x1="26" y1="28" x2="26" y2="10" stroke="#22d3ee" stroke-width="2.5" stroke-linecap="round"/>
                <polyline points="18,18 26,10 34,18" stroke="#22d3ee" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
            </div>
            <div class="hydro-pump-step-title">低峰抽水</div>
            <div class="hydro-pump-step-desc">多餘電力把水抽到高處</div>
          </div>
          <div class="hydro-pump-connector" aria-hidden="true">
            <div class="hydro-flow-dot"></div>
            <div class="hydro-flow-dot"></div>
            <div class="hydro-flow-dot"></div>
          </div>
          <div class="hydro-pump-step">
            <div class="hydro-pump-icon hydro-pump-icon--high">
              <svg viewBox="0 0 52 52" width="30" height="30" fill="none" aria-hidden="true">
                <rect x="8" y="12" width="36" height="22" rx="5" fill="rgba(56,189,248,0.35)" stroke="#38bdf8" stroke-width="2"/>
                <path d="M8 24 Q18 20 26 24 Q34 28 44 24" fill="rgba(56,189,248,0.55)" stroke="none"/>
                <line x1="26" y1="34" x2="26" y2="42" stroke="#22d3ee" stroke-width="2" stroke-linecap="round"/>
                <circle cx="26" cy="45" r="3" fill="rgba(34,211,238,0.65)" stroke="#22d3ee" stroke-width="1.5"/>
              </svg>
            </div>
            <div class="hydro-pump-step-title">高處儲能</div>
            <div class="hydro-pump-step-desc">高處水庫儲存位能</div>
          </div>
          <div class="hydro-pump-connector" aria-hidden="true">
            <div class="hydro-flow-dot"></div>
            <div class="hydro-flow-dot"></div>
            <div class="hydro-flow-dot"></div>
          </div>
          <div class="hydro-pump-step">
            <div class="hydro-pump-icon hydro-pump-icon--gen">
              <svg viewBox="0 0 52 52" width="30" height="30" fill="none" aria-hidden="true">
                <circle cx="26" cy="26" r="18" fill="rgba(251,191,36,0.15)" stroke="rgba(251,191,36,0.65)" stroke-width="1.5"/>
                <path d="M28 10 L20 27 H26 L22 42 L34 24 H28 Z" fill="rgba(251,191,36,0.88)" stroke="rgba(251,191,36,1)" stroke-width="0.5"/>
              </svg>
            </div>
            <div class="hydro-pump-step-title">尖峰發電</div>
            <div class="hydro-pump-step-desc">快速發電穩定電網</div>
          </div>
        </div>
        <p class="hydro-card-desc">抽蓄水力在用電低峰時儲存能量，尖峰時快速發電。隨著太陽能與風力占比提高，電力系統更需要這種靈活調節能力。</p>
        <p class="hydro-source">
          <a href="https://www.hydropower.org/publications/2025-world-hydropower-outlook" target="_blank" rel="noopener noreferrer">IHA，2025 World Hydropower Outlook</a>；
          <a href="https://www.iea.org/energy-system/renewables/hydroelectricity" target="_blank" rel="noopener noreferrer">IEA Hydropower</a>
        </p>
      </div>
    </div>

    <!-- 資料來源集中區 -->
    <div class="hydro-data-sources">
      <h4 class="hydro-sources-title">資料來源</h4>
      <ol class="hydro-sources-list">
        <li>
          <a href="https://www.moeaea.gov.tw/ECW/populace/content/Content.aspx?menu_id=14437" target="_blank" rel="noopener noreferrer">
            經濟部能源署，2024 年台灣發電概況與再生能源發電結構
          </a>
        </li>
        <li>
          <a href="https://rsprc.ntu.edu.tw/web/research/research_in.jsp?lang=tw&rp_id=RP1741944880461" target="_blank" rel="noopener noreferrer">
            台大風險社會與政策研究中心，2024 台灣能源情勢回顧
          </a>
        </li>
        <li>
          <a href="https://www.iea.org/energy-system/renewables/hydroelectricity" target="_blank" rel="noopener noreferrer">
            International Energy Agency，Hydropower
          </a>
        </li>
        <li>
          <a href="https://www.hydropower.org/publications/2025-world-hydropower-outlook" target="_blank" rel="noopener noreferrer">
            International Hydropower Association，2025 World Hydropower Outlook
          </a>
        </li>
      </ol>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Chart from 'chart.js/auto'

const sectionRef = ref(null)
const renewableChartRef = ref(null)
const compareChartRef = ref(null)
const radarChartRef = ref(null)
const trendGwhChartRef = ref(null)
const trendPctChartRef = ref(null)

let renewableChart = null
let compareChart = null
let radarChart = null
let trendGwhChart = null
let trendPctChart = null
let observer = null
let chartsInitialized = false

function initCharts() {
  if (chartsInitialized) return
  chartsInitialized = true
  initRenewableChart()
  initCompareChart()
  initRadarChart()
  initTrendGwhChart()
  initTrendPctChart()
}

function initRenewableChart() {
  const ctx = renewableChartRef.value
  if (!ctx) return
  renewableChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['太陽光電', '風力', '慣常水力', '生質能及廢棄物'],
      datasets: [{
        data: [45.1, 31.0, 12.4, 11.4],
        backgroundColor: [
          'rgba(251,191,36,0.82)',
          'rgba(71,130,180,0.82)',
          'rgba(34,211,238,0.92)',
          'rgba(110,231,183,0.82)'
        ],
        borderColor: [
          'rgba(251,191,36,1)',
          'rgba(71,130,180,1)',
          'rgba(34,211,238,1)',
          'rgba(110,231,183,1)'
        ],
        borderWidth: 2,
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1400,
        easing: 'easeOutQuart',
        animateRotate: true,
        animateScale: true
      },
      cutout: '58%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: { size: 12 },
            padding: 14,
            usePointStyle: true,
            pointStyleWidth: 10
          }
        },
        tooltip: {
          callbacks: {
            label: (c) => ` ${c.label}：${c.parsed}%`
          }
        }
      }
    }
  })
}

function initCompareChart() {
  const ctx = compareChartRef.value
  if (!ctx) return
  compareChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['全球水力', '台灣慣常水力'],
      datasets: [{
        label: '占總發電比例',
        data: [14, 1.46],
        backgroundColor: [
          'rgba(56,189,248,0.75)',
          'rgba(34,211,238,0.75)'
        ],
        borderColor: [
          'rgba(56,189,248,1)',
          'rgba(34,211,238,1)'
        ],
        borderWidth: 2,
        borderRadius: 10,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1400,
        easing: 'easeOutQuart'
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 20,
          ticks: {
            callback: (v) => `${v}%`,
            font: { size: 11 },
            color: '#64748b'
          },
          grid: { color: 'rgba(148,163,184,0.15)' },
          border: { color: 'transparent' }
        },
        x: {
          grid: { display: false },
          ticks: {
            font: { size: 12 },
            color: '#374151'
          },
          border: { color: 'transparent' }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (c) => ` 占總發電：${c.parsed.y}%`
          }
        }
      }
    }
  })
}

function initRadarChart() {
  const ctx = radarChartRef.value
  if (!ctx) return
  radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['發電穩定性', '低碳程度', '建設彈性', ['環境影響', '控制難度'], '台灣擴張潛力'],
      datasets: [
        {
          label: '水力發電',
          data: [9, 9, 4, 7, 3],
          backgroundColor: 'rgba(34,211,238,0.22)',
          borderColor: 'rgba(34,211,238,0.9)',
          borderWidth: 2.5,
          pointBackgroundColor: 'rgba(34,211,238,1)',
          pointBorderColor: '#fff',
          pointBorderWidth: 1.5,
          pointRadius: 5
        },
        {
          label: '太陽能',
          data: [5, 8, 8, 4, 8],
          backgroundColor: 'rgba(251,191,36,0.12)',
          borderColor: 'rgba(251,191,36,0.75)',
          borderWidth: 1.5,
          pointBackgroundColor: 'rgba(251,191,36,0.9)',
          pointBorderColor: '#fff',
          pointBorderWidth: 1,
          pointRadius: 3.5
        },
        {
          label: '風力',
          data: [6, 8, 6, 5, 7],
          backgroundColor: 'rgba(99,179,237,0.1)',
          borderColor: 'rgba(99,179,237,0.7)',
          borderWidth: 1.5,
          pointBackgroundColor: 'rgba(99,179,237,0.9)',
          pointBorderColor: '#fff',
          pointBorderWidth: 1,
          pointRadius: 3.5
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1500,
        easing: 'easeOutCubic'
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 10,
          ticks: {
            stepSize: 2,
            font: { size: 10 },
            backdropColor: 'transparent',
            color: 'rgba(100,116,139,0.8)'
          },
          grid: { color: 'rgba(148,163,184,0.2)' },
          angleLines: { color: 'rgba(148,163,184,0.2)' },
          pointLabels: {
            font: { size: 11 },
            color: '#374151'
          }
        }
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: { size: 12 },
            padding: 14,
            usePointStyle: true,
            pointStyleWidth: 10
          }
        },
        tooltip: {
          callbacks: {
            label: (c) => ` ${c.dataset.label}：${c.parsed.r} / 10`
          }
        }
      }
    }
  })
}

function initTrendGwhChart() {
  const ctx = trendGwhChartRef.value
  if (!ctx) return
  const years = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]
  const gwh   = [7970,8322,7742,7019,7216,6865,8572,8575,7403,7470,9819,8746,7803,8714,6144,6620,8830,6925,7140,8277]
  trendGwhChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [{
        label: '水力合計',
        data: gwh,
        borderColor: 'rgba(34,211,238,0.9)',
        backgroundColor: 'rgba(34,211,238,0.1)',
        borderWidth: 2,
        pointRadius: 2.5,
        pointHoverRadius: 5,
        fill: true,
        tension: 0.3
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
          min: 5000, max: 11000,
          ticks: { callback: v => `${(v/1000).toFixed(0)}k`, font: { size: 10 }, color: '#64748b' },
          grid: { color: 'rgba(148,163,184,0.12)' },
          border: { color: 'transparent' }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: c => ` 水力合計：${c.parsed.y.toLocaleString()} GWh` } }
      }
    }
  })
}

function initTrendPctChart() {
  const ctx = trendPctChartRef.value
  if (!ctx) return
  const years  = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]
  const pct    = [61.98,61.56,59.78,54.52,55.19,50.09,58.54,55.40,48.88,47.88,56.34,48.25,38.93,39.26,21.75,21.85,26.71,15.96,13.57,16.22]
  trendPctChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [{
        label: '慣常水力占再生能源',
        data: pct,
        borderColor: 'rgba(251,146,60,0.88)',
        backgroundColor: 'rgba(251,146,60,0.08)',
        borderWidth: 2,
        pointRadius: 2.5,
        pointHoverRadius: 5,
        fill: true,
        tension: 0.3
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
          beginAtZero: true, max: 70,
          ticks: { callback: v => `${v}%`, font: { size: 10 }, color: '#64748b' },
          grid: { color: 'rgba(148,163,184,0.12)' },
          border: { color: 'transparent' }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: c => ` 慣常水力占再生能源：${c.parsed.y}%` } }
      }
    }
  })
}

onMounted(() => {
  setTimeout(() => {
    observer = new IntersectionObserver(
      (entries) => {
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
  compareChart?.destroy()
  radarChart?.destroy()
  trendGwhChart?.destroy()
  trendPctChart?.destroy()
})
</script>

<style scoped>
.hydro-data-section {
  width: 100%;
  padding: 4px 0 48px;
}

/* ── 標題區 ── */
.hydro-data-header {
  text-align: center;
  margin-bottom: 44px;
  padding: 0 8px;
}

.hydro-data-main-title {
  font-size: clamp(1.3rem, 2.6vw, 1.9rem);
  font-weight: 900;
  color: #0c4a6e;
  line-height: 1.25;
  margin-bottom: 14px;
  letter-spacing: -0.3px;
}

.hydro-data-subtitle {
  font-size: clamp(0.88rem, 1.4vw, 1rem);
  color: #475569;
  line-height: 1.85;
  max-width: 620px;
  margin: 0 auto;
}

/* ── 區塊 ── */
.hydro-data-block {
  margin-bottom: 44px;
}

.hydro-block-title {
  font-size: 1.05rem;
  font-weight: 900;
  color: #0369a1;
  margin-bottom: 18px;
  padding-left: 14px;
  border-left: 4px solid #22d3ee;
  line-height: 1.4;
}

.hydro-block-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

/* ── 卡片 ── */
.hydro-card {
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.88);
  border-radius: 22px;
  padding: 24px 22px;
  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.07);
  backdrop-filter: blur(6px);
}


.hydro-card--pump {
  background: linear-gradient(135deg, rgba(224, 247, 255, 0.72), rgba(207, 247, 243, 0.68));
  border-color: rgba(34, 211, 238, 0.28);
}

.hydro-card-title {
  font-size: clamp(0.93rem, 1.6vw, 1.08rem);
  font-weight: 900;
  color: #1e3a5f;
  margin-bottom: 18px;
  line-height: 1.45;
}

.hydro-card-desc {
  color: #4b5563;
  line-height: 1.85;
  font-size: 0.92rem;
  margin-top: 18px;
}

.hydro-source {
  font-size: 0.75rem;
  color: #94a3b8;
  margin-top: 10px;
  line-height: 1.6;
}

.hydro-source a {
  color: #60a5fa;
  text-decoration: none;
}

.hydro-source a:hover {
  text-decoration: underline;
  color: #38bdf8;
}

/* ── 圖表容器 ── */
.hydro-chart-wrap {
  position: relative;
  height: 300px;
  width: 100%;
  max-width: 100%;
}

.hydro-chart-wrap--bar {
  height: 260px;
}

.hydro-chart-wrap--radar {
  height: 360px;
}

/* ── 數字占比顯示（Card 2）── */
.hydro-pct-display {
  display: flex;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(226, 232, 240, 0.65);
  margin: 16px 0 20px;
}

.hydro-pct-block {
  flex: 1;
  text-align: center;
  padding: 28px 16px;
  background: rgba(241, 250, 255, 0.62);
}

.hydro-pct-block--pump {
  background: rgba(236, 254, 255, 0.62);
  border-left: 1px solid rgba(226, 232, 240, 0.65);
}

.hydro-pct-num {
  font-size: 2.4rem;
  font-weight: 900;
  color: #0369a1;
  line-height: 1;
  margin-bottom: 8px;
  letter-spacing: -1px;
}

.hydro-pct-unit {
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0;
}

.hydro-pct-name {
  font-size: 0.9rem;
  font-weight: 700;
  color: #1e3a5f;
  margin-bottom: 3px;
}

.hydro-pct-sub {
  font-size: 0.74rem;
  color: #94a3b8;
  margin-bottom: 6px;
}

.hydro-pct-kwh {
  font-size: 0.76rem;
  color: #0ea5e9;
  font-weight: 600;
  margin-top: 8px;
  letter-spacing: 0.2px;
}

.hydro-pct-bullets {
  list-style: none;
  padding: 0;
  margin: 4px 0 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hydro-pct-bullets li {
  font-size: 0.88rem;
  color: #475569;
  line-height: 1.65;
  padding-left: 16px;
  position: relative;
}

.hydro-pct-bullets li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22d3ee;
}

/* ── 歷年趨勢雙折線圖 ── */
.hydro-trend-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 16px;
}

.hydro-trend-subtitle {
  font-size: 0.88rem;
  font-weight: 700;
  color: #374151;
  margin-bottom: 10px;
}

.hydro-chart-wrap--trend {
  height: 230px;
}

/* ── 底部並排 ── */
.hydro-data-block--bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: start;
}

.hydro-chart-wrap--bar-sm {
  height: 180px;
}

/* ── 數字卡（台灣 vs 世界） ── */
.hydro-compare-numbers {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.hydro-number-card {
  flex: 1;
  min-width: 140px;
  max-width: 220px;
  text-align: center;
  padding: 22px 16px;
  border-radius: 18px;
  background: rgba(56, 189, 248, 0.1);
  border: 1.5px solid rgba(56, 189, 248, 0.28);
}

.hydro-number-card--taiwan {
  background: rgba(34, 211, 238, 0.1);
  border-color: rgba(34, 211, 238, 0.3);
}

.hydro-big-number {
  font-size: 2.2rem;
  font-weight: 900;
  color: #0369a1;
  line-height: 1.1;
  margin-bottom: 8px;
  letter-spacing: -1px;
}

.hydro-number-label {
  font-size: 0.84rem;
  color: #475569;
  line-height: 1.5;
}

.hydro-number-divider {
  font-size: 1.15rem;
  font-weight: 900;
  color: #94a3b8;
  flex-shrink: 0;
}

/* ── 評估說明 ── */
.hydro-eval-note {
  font-size: 0.8rem;
  color: #94a3b8;
  margin-bottom: 14px;
  font-style: italic;
}

/* ── 抽蓄水力流程圖 ── */
.hydro-pump-flow {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  margin: 24px 0 10px;
}

.hydro-pump-step {
  flex: 1;
  min-width: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hydro-pump-icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  flex-shrink: 0;
}

.hydro-pump-icon--low {
  background: radial-gradient(circle at 40% 40%, rgba(34, 211, 238, 0.2), rgba(14, 165, 233, 0.12));
  border: 2px solid rgba(34, 211, 238, 0.45);
  animation: hydro-glow-low 3s ease-in-out infinite;
}

.hydro-pump-icon--high {
  background: radial-gradient(circle at 40% 40%, rgba(56, 189, 248, 0.25), rgba(14, 165, 233, 0.18));
  border: 2px solid rgba(56, 189, 248, 0.55);
  animation: hydro-glow-high 2.5s ease-in-out infinite;
}

.hydro-pump-icon--gen {
  background: radial-gradient(circle at 40% 40%, rgba(251, 191, 36, 0.2), rgba(245, 158, 11, 0.1));
  border: 2px solid rgba(251, 191, 36, 0.45);
  animation: hydro-glow-gen 2s ease-in-out infinite;
}

.hydro-pump-step-title {
  font-size: 0.96rem;
  font-weight: 900;
  color: #1e3a5f;
  margin-bottom: 6px;
}

.hydro-pump-step-desc {
  font-size: 0.81rem;
  color: #4b5563;
  line-height: 1.6;
  max-width: 140px;
}

.hydro-pump-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex-shrink: 0;
  padding: 0 6px;
  margin-top: 26px;
}

.hydro-flow-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(34, 211, 238, 0.65);
}

.hydro-flow-dot:nth-child(1) { animation: hydro-dot-pulse 1.8s ease-in-out 0s infinite; }
.hydro-flow-dot:nth-child(2) { animation: hydro-dot-pulse 1.8s ease-in-out 0.35s infinite; }
.hydro-flow-dot:nth-child(3) { animation: hydro-dot-pulse 1.8s ease-in-out 0.7s infinite; }

/* ── 資料來源集中區 ── */
.hydro-data-sources {
  margin-top: 44px;
  padding: 18px 22px;
  background: rgba(241, 245, 249, 0.55);
  border-radius: 16px;
  border: 1px solid rgba(226, 232, 240, 0.7);
}

.hydro-sources-title {
  font-size: 0.84rem;
  font-weight: 900;
  color: #64748b;
  margin-bottom: 10px;
  letter-spacing: 0.3px;
}

.hydro-sources-list {
  padding-left: 18px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hydro-sources-list li {
  font-size: 0.76rem;
  color: #94a3b8;
  line-height: 1.55;
}

.hydro-sources-list a {
  color: #7dd3fc;
  text-decoration: none;
}

.hydro-sources-list a:hover {
  text-decoration: underline;
  color: #38bdf8;
}

/* ── 動畫 ── */
@keyframes hydro-glow-low {
  0%, 100% { box-shadow: 0 0 8px rgba(34, 211, 238, 0.18); }
  50%       { box-shadow: 0 0 22px rgba(34, 211, 238, 0.52); }
}

@keyframes hydro-glow-high {
  0%, 100% { box-shadow: 0 0 10px rgba(56, 189, 248, 0.22); }
  50%       { box-shadow: 0 0 26px rgba(56, 189, 248, 0.6); }
}

@keyframes hydro-glow-gen {
  0%, 100% { box-shadow: 0 0 8px rgba(251, 191, 36, 0.18); }
  50%       { box-shadow: 0 0 22px rgba(251, 191, 36, 0.55); }
}

@keyframes hydro-dot-pulse {
  0%, 100% { opacity: 0.25; transform: scale(0.75); }
  50%       { opacity: 1;    transform: scale(1.3); }
}

/* ── 響應式 ── */
@media (max-width: 900px) {
  .hydro-block-grid           { grid-template-columns: 1fr; }
  .hydro-trend-pair           { grid-template-columns: 1fr; }
  .hydro-data-block--bottom   { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .hydro-chart-wrap        { height: 260px; }
  .hydro-chart-wrap--radar { height: 300px; }
  .hydro-chart-wrap--bar   { height: 220px; }

  .hydro-pump-flow {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .hydro-pump-connector {
    flex-direction: row;
    margin-top: 0;
    padding: 4px 0;
  }

  .hydro-pump-step-desc {
    max-width: 240px;
  }
}

@media (max-width: 480px) {
  .hydro-card {
    padding: 18px 16px;
    border-radius: 18px;
  }

  .hydro-chart-wrap        { height: 240px; }
  .hydro-chart-wrap--radar { height: 280px; }

  .hydro-compare-numbers {
    flex-direction: column;
    align-items: stretch;
  }

  .hydro-number-card {
    max-width: 100%;
    min-width: 0;
  }

  .hydro-number-divider {
    text-align: center;
  }
}
</style>
