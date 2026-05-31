<template>
  <section class="geo" ref="sectionRef">

    <div class="geo-header">
      <h2 class="geo-main-title">地熱發電資料分析：穩定但難開採的深層能源</h2>
      <p class="geo-subtitle">從台灣現況、全球趨勢、國際案例，到開發難點，理解地熱為什麼是「有潛力但還沒長大」的能源選項。</p>
    </div>

    <div class="geo-tabs" role="tablist" aria-label="地熱能分析分頁">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="geo-tab"
        :class="{ 'geo-tab--active': activeTab === tab.id }"
        role="tab"
        :aria-selected="activeTab === tab.id"
        @click="switchTab(tab.id)"
      >{{ tab.label }}</button>
    </div>

    <!-- ─────────────────────────── Tab 1: 台灣現況 -->
    <div v-show="activeTab === 'taiwan'" class="geo-panel">

      <div class="geo-block">
        <h3 class="geo-block-title">台灣地熱發電現況</h3>
        <div class="geo-grid-2">

          <div class="geo-card">
            <h4 class="geo-card-title">年發電量趨勢（GWh）</h4>
            <div class="geo-chart-wrap">
              <canvas ref="taiwanChartRef"></canvas>
            </div>
            <p class="geo-card-desc">台灣地熱發電目前仍屬非常小規模。近十年資料顯示，2016–2018 年幾乎沒有地熱發電量，2019 年後才逐步出現紀錄；2022 年起，年發電量約落在 23–27 GWh。2025 年地熱發電量為 25.843 GWh，僅占再生能源發電量約 0.068%，顯示台灣雖有地熱潛力，但尚未進入規模化開發階段。</p>
            <p class="geo-source">資料來源：<a href="https://www.esist.org.tw/attachments/handbook/2024/ebook/2024EnergyStaHandBook.pdf" target="_blank">經濟部能源署《2024 能源統計手冊》</a>、<a href="https://www.taipower.com.tw/2289/2363/2380/2383/10556/normalPost" target="_blank">台電｜再生能源發展概況</a></p>
          </div>

          <div class="geo-card">
            <h4 class="geo-card-title">現況快覽</h4>
            <div class="geo-stat-grid">
              <div class="geo-stat-block">
                <div class="geo-stat-label">裝置容量（2025）</div>
                <div class="geo-stat-num">7<span class="geo-stat-unit">MW</span></div>
                <div class="geo-stat-note">台電 2025 年公布</div>
              </div>
              <div class="geo-stat-block geo-stat-block--b">
                <div class="geo-stat-label">占再生能源比例（2025）</div>
                <div class="geo-stat-num">0.068<span class="geo-stat-unit">%</span></div>
                <div class="geo-stat-note">台電 2025 年公布</div>
              </div>
              <div class="geo-stat-block geo-stat-block--c">
                <div class="geo-stat-label">政府 2030 目標</div>
                <div class="geo-stat-num">200<span class="geo-stat-unit">MW</span></div>
                <div class="geo-stat-note">經濟部能源署政策目標</div>
              </div>
              <div class="geo-stat-block geo-stat-block--d">
                <div class="geo-stat-label">主要運作電廠</div>
                <div class="geo-stat-num geo-stat-num--sm">清水地熱</div>
                <div class="geo-stat-note">宜蘭・閃蒸式</div>
              </div>
            </div>
            <p class="geo-final-note">台灣有潛力，但尚未規模化——這是目前最準確的定位。</p>
          </div>

        </div>
      </div>

      <div class="geo-block">
        <h3 class="geo-block-title">為什麼台灣地熱沒有大規模發展？</h3>
        <div class="geo-reason-grid">
          <div v-for="reason in whyNotScaled" :key="reason.title" class="geo-reason-card">
            <div class="geo-reason-icon">{{ reason.icon }}</div>
            <div class="geo-reason-body">
              <div class="geo-reason-title">{{ reason.title }}</div>
              <p class="geo-reason-desc">{{ reason.desc }}</p>
            </div>
          </div>
        </div>
        <p class="geo-source">資料來源：<a href="https://www.moeaea.gov.tw/ECW/populace/QuestionAnswer/QuestionAnswer.aspx?kind=14&menu_id=22035" target="_blank">經濟部能源署｜地熱 FAQ</a>、<a href="https://www.esist.org.tw/attachments/handbook/2024/ebook/2024EnergyStaHandBook.pdf" target="_blank">《2024 能源統計手冊》</a></p>
      </div>

    </div>

    <!-- ─────────────────────────── Tab 2: 全球歷年趨勢 -->
    <div v-show="activeTab === 'global'" class="geo-panel">

      <div class="geo-block">
        <h3 class="geo-block-title">全球地熱裝置容量歷年趨勢（2005–2024）</h3>
        <div class="geo-card">
          <div class="geo-chart-wrap geo-chart-wrap--tall">
            <canvas ref="globalCapChartRef"></canvas>
          </div>
          <p class="geo-card-desc">全球地熱裝置容量在 2005–2024 年間由約 8.6 GW 增至約 15.4 GW，20 年間約增加 80%。這個成長速度遠慢於太陽能與風力，但地熱的價值不在快速鋪設，而在於可提供穩定、可調度的低碳電力。IRENA 指出，地熱可全年高容量因數運轉，能在太陽能與風力占比提高時提供電力系統所需的穩定性。</p>
          <p class="geo-source">資料來源：<a href="https://ourworldindata.org/grapher/installed-geothermal-capacity" target="_blank">OWID / IRENA｜全球地熱裝置容量</a>、<a href="https://www.irena.org/Energy-Transition/Technology/Geothermal-energy" target="_blank">IRENA Geothermal energy</a></p>
        </div>
      </div>

      <div class="geo-block">
        <h3 class="geo-block-title">地熱在全球再生能源中的位置</h3>
        <div class="geo-insight-grid">
          <div v-for="item in globalInsights" :key="item.title" class="geo-insight-card" :class="`geo-insight-card--${item.type}`">

            <!-- 頭：icon + 標題 -->
            <div class="geo-insight-head">
              <div class="geo-insight-icon">
                <!-- 比例小：三欄對比圖 -->
                <svg v-if="item.type === 'neutral'" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3"  y="26" width="8" height="6"  rx="2" fill="#ef4444"/>
                  <rect x="14" y="16" width="8" height="16" rx="2" fill="#94a3b8"/>
                  <rect x="25" y="6"  width="8" height="26" rx="2" fill="#64748b"/>
                  <line x1="1" y1="33" x2="35" y2="33" stroke="#cbd5e1" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                <!-- 成長慢：烏龜 emoji -->
                <span v-else-if="item.type === 'slow'" class="geo-insight-icon-emoji">🐢</span>
                <!-- 穩定：均勻柱狀信號 -->
                <svg v-else viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3"  y="10" width="6" height="22" rx="2" fill="#22c55e"/>
                  <rect x="12" y="10" width="6" height="22" rx="2" fill="#22c55e"/>
                  <rect x="21" y="10" width="6" height="22" rx="2" fill="#22c55e"/>
                  <rect x="30" y="10" width="6" height="22" rx="2" fill="#22c55e"/>
                  <line x1="1" y1="33" x2="35" y2="33" stroke="#86efac" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="geo-insight-title">{{ item.title }}</div>
            </div>

            <!-- 鍵數字 -->
            <div class="geo-insight-stat">
              <span class="geo-insight-stat-val">{{ item.stat.value }}</span><span class="geo-insight-stat-unit">{{ item.stat.unit }}</span>
              <div class="geo-insight-stat-label">{{ item.stat.label }}</div>
            </div>

            <!-- 橫條圖 -->
            <div class="geo-insight-hbars">
              <div v-for="bar in item.vis" :key="bar.label" class="geo-insight-hbar-row">
                <div class="geo-insight-hbar-lbl">{{ bar.label }}</div>
                <div class="geo-insight-hbar-track">
                  <div class="geo-insight-hbar-fill" :style="{ width: bar.pct + '%', background: bar.color }"></div>
                </div>
                <div class="geo-insight-hbar-val">{{ bar.val }}</div>
              </div>
            </div>

            <p class="geo-insight-desc">{{ item.desc }}</p>

          </div>
        </div>
      </div>

    </div>

    <!-- ─────────────────────────── Tab 3: 國外案例 -->
    <div v-show="activeTab === 'cases'" class="geo-panel">

      <div class="geo-block">
        <h3 class="geo-block-title">哪些國家地熱發展得好？</h3>
        <p class="geo-section-lead">地熱能否規模化，取決於地質條件、政策環境、資金支持與電力需求的交叉作用。以下六個國家展示了不同的發展路徑，各有值得借鑑之處。</p>

        <div class="geo-country-grid">
          <div v-for="c in countryCases" :key="c.country" class="geo-country-card">

            <!-- 卡片頭：國名 + 標籤 + 數據視覺化 -->
            <div class="geo-country-head" :style="{ background: c.accentBg }">
              <div class="geo-country-title-row">
                <div class="geo-country-cname">{{ c.country }}</div>
                <span class="geo-country-badge" :style="{ background: c.badgeBg, color: c.badgeColor }">{{ c.tag }}</span>
              </div>
              <div class="geo-country-vis">
                <div class="geo-vis-big-num" :style="{ color: c.accentColor }">
                  {{ c.vis.value }}<span class="geo-vis-big-unit">{{ c.vis.unit }}</span>
                </div>
                <div class="geo-vis-bar-track">
                  <div class="geo-vis-bar-fill" :style="{ width: c.vis.barPct + '%', background: c.accentColor }"></div>
                </div>
                <div class="geo-vis-bar-label">{{ c.vis.label }}</div>
              </div>
            </div>

            <!-- 卡片內文 -->
            <div class="geo-country-body">
              <div class="geo-country-fact">
                <span class="geo-fact-lbl">發展特色</span>
                <p class="geo-fact-txt">{{ c.feature }}</p>
              </div>
              <div class="geo-country-fact">
                <span class="geo-fact-lbl">為何適合</span>
                <p class="geo-fact-txt">{{ c.why }}</p>
              </div>
              <div class="geo-country-fact geo-country-fact--learn">
                <span class="geo-fact-lbl geo-fact-lbl--learn">可學習之處</span>
                <p class="geo-fact-txt">{{ c.lesson }}</p>
              </div>
            </div>

          </div>
        </div>

        <p class="geo-source geo-source--center">資料來源：<a href="https://www.ren21.net/gsr-2025/technologies/geothermal/" target="_blank">REN21 GSR 2025 Geothermal</a>、<a href="https://www.irena.org/Energy-Transition/Technology/Geothermal-energy" target="_blank">IRENA Geothermal energy</a></p>
      </div>

    </div>

    <!-- ─────────────────────────── Tab 4: 為何地熱難開發 -->
    <div v-show="activeTab === 'hard'" class="geo-panel">

      <div class="geo-block">
        <h3 class="geo-block-title">地熱開發流程：每一關都可能卡住</h3>
        <div class="geo-flow-wrap">
          <div class="geo-flow">
            <template v-for="(step, i) in devFlow" :key="step.label">
              <div class="geo-flow-step" :class="{ 'geo-flow-step--risk': step.risk }">
                <div class="geo-flow-num">{{ i + 1 }}</div>
                <div class="geo-flow-icon">{{ step.icon }}</div>
                <div class="geo-flow-label">{{ step.label }}</div>
                <div v-if="step.riskNote" class="geo-flow-risk-note">{{ step.riskNote }}</div>
                <div v-if="step.risk" class="geo-flow-risk-badge">高風險</div>
              </div>
              <div v-if="i < devFlow.length - 1" class="geo-flow-arrow">→</div>
            </template>
          </div>
          <p class="geo-flow-note">地熱開發的風險集中在前期。地表調查只能提供間接線索，真正決定案場能否成立的關鍵，通常要等到試鑽後才能確認。這使地熱和太陽能、風力不同：太陽能與風力的資源條件可在地表較容易量測，地熱則必須先投入昂貴鑽井，才知道地下熱源、流體與滲透性是否足以支撐商轉。一旦成功建廠，後續運轉穩定且低碳，是地熱作為基載能源的核心優勢。</p>
        </div>
      </div>

      <div class="geo-block">
        <h3 class="geo-block-title">四大核心挑戰</h3>
        <div class="geo-challenge-cols">
          <div v-for="ch in challengeCards" :key="ch.title" class="geo-challenge-card">

            <!-- 頭：圖示 + 標籤 + 標題 -->
            <div class="geo-challenge-top" :style="{ background: ch.headerBg }">
              <div class="geo-challenge-top-row">
                <div class="geo-challenge-icon-wrap">{{ ch.icon }}</div>
                <div class="geo-challenge-tag" :style="{ color: ch.tagColor }">{{ ch.tag }}</div>
              </div>
              <div class="geo-challenge-title">{{ ch.title }}</div>
            </div>

            <!-- 數據視覺區 -->
            <div class="geo-challenge-vis" :style="{ background: ch.visBg }">
              <div class="geo-challenge-vis-metric">
                <span class="geo-challenge-vis-val" :style="{ color: ch.tagColor }">{{ ch.metric.value }}</span>
                <span class="geo-challenge-vis-unit" :style="{ color: ch.tagColor }">{{ ch.metric.unit }}</span>
              </div>
              <div class="geo-challenge-vis-mlabel">{{ ch.metric.label }}</div>

              <!-- 風險等級點（Card 1）-->
              <div v-if="ch.vis.type === 'risk'" class="geo-vis-risk">
                <div v-for="n in 5" :key="n" class="geo-vis-risk-dot"
                  :style="{ background: n <= ch.vis.level ? ch.tagColor : 'rgba(148,163,184,.2)' }"></div>
                <span class="geo-vis-risk-text" :style="{ color: ch.tagColor }">{{ ch.vis.label }}</span>
              </div>

              <!-- 時間軸（Card 2）-->
              <div v-if="ch.vis.type === 'timeline'" class="geo-vis-timeline">
                <div v-for="seg in ch.vis.segs" :key="seg.label" class="geo-vis-tl-seg"
                  :style="{ flex: seg.weight, background: seg.bg }">
                  <span :style="{ color: seg.color }">{{ seg.label }}</span>
                </div>
              </div>

              <!-- 條件組合（Card 3）-->
              <div v-if="ch.vis.type === 'conditions'" class="geo-vis-conditions">
                <template v-for="(cond, i) in ch.vis.items" :key="cond.label">
                  <div class="geo-vis-cond-chip">
                    <span class="geo-vis-cond-icon">{{ cond.icon }}</span>
                    <span class="geo-vis-cond-label">{{ cond.label }}</span>
                  </div>
                  <span v-if="i < ch.vis.items.length - 1" class="geo-vis-cond-op">+</span>
                </template>
                <span class="geo-vis-cond-op geo-vis-cond-op--eq">→</span>
                <div class="geo-vis-cond-chip geo-vis-cond-chip--result">✅ 可發電</div>
              </div>

              <!-- 影響類型圖（Card 4）-->
              <div v-if="ch.vis.type === 'impacts'" class="geo-vis-impacts">
                <div v-for="imp in ch.vis.items" :key="imp.label" class="geo-vis-impact-chip">
                  <span class="geo-vis-impact-icon">{{ imp.icon }}</span>
                  <span class="geo-vis-impact-label">{{ imp.label }}</span>
                </div>
              </div>
            </div>

            <!-- 文字內容區 -->
            <div class="geo-challenge-body">
              <p class="geo-challenge-desc">{{ ch.desc }}</p>
              <div class="geo-challenge-divider"></div>
              <div class="geo-challenge-points-label">具體影響</div>
              <ul class="geo-challenge-list">
                <li v-for="point in ch.points" :key="point">{{ point }}</li>
              </ul>
              <div class="geo-challenge-tw">
                <span class="geo-challenge-tw-label">台灣情境</span>
                {{ ch.taiwan }}
              </div>
            </div>

          </div>
        </div>
        <p class="geo-final-note">地熱開發的根本挑戰是：必須在不確定的地下世界投入確定的資金。政策設計、風險分擔機制與探勘技術的進步，才是打開規模化的鑰匙。</p>
        <p class="geo-source">資料來源：<a href="https://www.iea.org/reports/the-future-of-geothermal-energy/executive-summary" target="_blank">IEA｜The Future of Geothermal Energy</a>、<a href="https://www.irena.org/Energy-Transition/Technology/Geothermal-energy" target="_blank">IRENA Geothermal energy</a>、<a href="https://www.moeaea.gov.tw/ECW/populace/QuestionAnswer/QuestionAnswer.aspx?kind=14&menu_id=22035" target="_blank">經濟部能源署｜地熱 FAQ</a></p>
      </div>

    </div>

  </section>
</template>

<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue'
import Chart from 'chart.js/auto'

const sectionRef = ref(null)
const activeTab  = ref('taiwan')

const tabs = [
  { id: 'taiwan', label: '台灣現況' },
  { id: 'global', label: '全球歷年趨勢' },
  { id: 'cases',  label: '國外案例' },
  { id: 'hard',   label: '為何難開發' },
]

/* ── 台灣現況資料（來源：經濟部能源署《2024 能源統計手冊》、台電再生能源發展概況） ── */
const taiwanGeothermalData = {
  years: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
  generationGwh: [0, 0, 0.0, 0.8, 1.9, 9.1, 25.0, 23.2, 26.7, 25.843],
}

/* ── 為什麼沒有大規模發展 ── */
const whyNotScaled = [
  {
    icon: '🔩',
    title: '探勘與鑽井成本高',
    desc: '地熱要先投入地質調查、地球物理探測與試鑽，且試鑽失敗成本難以回收。台灣地質複雜，深部鑽探技術與設備多依賴進口，進一步墊高前期費用。',
  },
  {
    icon: '❓',
    title: '地下資源不確定性高',
    desc: '鑽井前難以完全確認溫度、流量、壓力與流體化學條件。這種不確定性讓私人投資者卻步，也使金融機構難以評估風險、提供合理融資。',
  },
  {
    icon: '📍',
    title: '適合開發的地點有限',
    desc: '台灣有地熱潛力，但高溫資源、土地使用、保護區、原住民族傳統領域與電網接點，會共同限制實際可開發的場址範圍。',
  },
  {
    icon: '⏳',
    title: '開發時程長',
    desc: '地熱從探勘、試鑽、資源評估到商轉，通常比太陽能與風電更慢，資金需長期積壓、回收期較長，對民間投資者構成顯著的時間成本壓力。',
  },
  {
    icon: '🏛',
    title: '制度與風險分擔仍需整合',
    desc: '能源署目前已有地熱探勘獎勵制度，每案上限新台幣 1 億元（以探勘費用 50% 為上限），是政府嘗試降低前期風險的具體措施，但整體制度框架仍在建構中。',
  },
]

/* ── 全球趨勢資料（來源：OWID / IRENA 全球地熱裝置容量） ── */
const globalGeothermalCapacityData = {
  years: [
    2005, 2006, 2007, 2008, 2009,
    2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019,
    2020, 2021, 2022, 2023, 2024
  ],
  capacityGw: [
    8.556, 8.759, 9.013, 9.319, 9.754,
    9.915, 10.058, 10.518, 10.786, 11.244,
    11.843, 12.169, 12.754, 13.196, 13.824,
    14.165, 14.451, 14.696, 15.092, 15.412
  ],
}

const globalInsights = [
  {
    type: 'neutral', icon: '📊',
    title: '不是最大宗的再生能源',
    stat: { value: '15.4', unit: 'GW', label: '2024 全球地熱裝置容量' },
    vis: [
      { label: '地熱',   pct: 1.3,  val: '15.4 GW', color: '#ef4444' },
      { label: '風電',   pct: 75,   val: '900+ GW',  color: '#94a3b8' },
      { label: '太陽能', pct: 100,  val: '1.2+ TW',  color: '#64748b' },
    ],
    desc: '地熱在全球再生能源版圖中規模最小，但 IRENA 指出其作為穩定可調度電源的角色是太陽能與風電無法替代的。',
  },
  {
    type: 'slow', icon: '🐢',
    title: '成長速度比太陽能、風力慢',
    stat: { value: '×1.8', unit: '', label: '2005–2024 地熱裝置容量成長倍數' },
    vis: [
      { label: '地熱',   pct: 2,    val: '×1.8',  color: '#ef4444' },
      { label: '風電',   pct: 15,   val: '×30',   color: '#f97316' },
      { label: '太陽能', pct: 100,  val: '×200+', color: '#64748b' },
    ],
    desc: '地熱成長受地質條件硬性限制——你不能把地熱板鋪在屋頂上。這是它和太陽能、風電最根本的差異。',
  },
  {
    type: 'strength', icon: '⚡',
    title: '穩定基載的獨特優勢',
    stat: { value: '80–95', unit: '%', label: '地熱電廠容量因數（全年可輸出電力比例）' },
    vis: [
      { label: '地熱',   pct: 87, val: '80–95%', color: '#ef4444' },
      { label: '風電',   pct: 37, val: '30–45%', color: '#94a3b8' },
      { label: '太陽能', pct: 20, val: '15–25%', color: '#64748b' },
    ],
    desc: '容量因數是「電廠實際發電量 ÷ 滿載發電量」的比值。地熱不受天氣影響，是少數可全天候調度、可替代燃煤基載的低碳電源。',
  },
]

/* ── 國外案例 ── */
const countryCases = [
  {
    country: '美國', tag: '產業成熟',
    accentBg: 'linear-gradient(135deg, rgba(219,234,254,.9), rgba(191,219,254,.7))',
    accentColor: '#1d4ed8',
    badgeBg: 'rgba(147,197,253,1)', badgeColor: '#1e3a8a',
    vis: { value: '2.7', unit: 'GW', barPct: 90, label: '2024 淨可運轉容量（全球最大）' },
    feature: '加州 The Geysers 全球最大地熱田，產業鏈完整、技術成熟，但老地熱田面臨蒸汽衰退壓力。',
    why: '西岸板塊邊界活躍，高溫地熱廣泛分布，電力市場健全，私人投資環境完善。',
    lesson: '從政府補貼主導走向市場化的過渡路徑，以及如何設計讓私人資本願意承擔前期探勘風險的政策工具。',
  },
  {
    country: '印尼', tag: '潛力龐大',
    accentBg: 'linear-gradient(135deg, rgba(255,237,213,.9), rgba(254,215,170,.7))',
    accentColor: '#9a3412',
    badgeBg: 'rgba(253,186,116,1)', badgeColor: '#7c2d12',
    vis: { value: '2.6', unit: 'GW', barPct: 87, label: '2024 裝置容量（資源潛力逾 29 GW）' },
    feature: '全球地熱資源最豐富的國家，火山帶橫跨三大島，但實際開發量仍不到潛力的 10%。',
    why: '火環帶核心國，地熱蘊藏量驚人，全國電力需求龐大且持續增長。',
    lesson: '資源潛力龐大不代表能快速開發——行政程序、探勘資料、融資機制與基礎設施都會制約開發速度。',
  },
  {
    country: '菲律賓', tag: '發展成熟',
    accentBg: 'linear-gradient(135deg, rgba(240,253,244,.9), rgba(220,252,231,.7))',
    accentColor: '#166534',
    badgeBg: 'rgba(134,239,172,1)', badgeColor: '#14532d',
    vis: { value: '9', unit: '%', barPct: 9, label: '2023 地熱占全國電力供應比例' },
    feature: '裝置容量全球前三，地熱作為島嶼電力系統的長期穩定基載，但老廠面臨蒸汽供應衰退。',
    why: '同處火環帶，島國結構需要穩定基載，政策開放引資時間早，累積數十年運維經驗。',
    lesson: '地熱電廠需要持續的資源管理與再投資，不是建好後就可以放著不管的能源設施。',
  },
  {
    country: '肯亞', tag: '成功典範',
    accentBg: 'linear-gradient(135deg, rgba(254,249,195,.9), rgba(253,230,138,.7))',
    accentColor: '#92400e',
    badgeBg: 'rgba(252,211,77,1)', badgeColor: '#78350f',
    vis: { value: '~1', unit: 'GW', barPct: 33, label: '非洲最大地熱裝置容量' },
    feature: 'Olkaria 地熱田是非洲最大，由國家電力公司 KenGen 主導，成功從示範走向規模化。',
    why: '東非大裂谷提供優異地熱條件，強烈的能源獨立需求提供政治驅動力。',
    lesson: '國家主導＋世界銀行、AfDB 多邊融資的公私合作模式，以及政府先承擔探勘風險、再引入私人資本的分段策略。',
  },
  {
    country: '冰島', tag: '供熱領先',
    accentBg: 'linear-gradient(135deg, rgba(245,243,255,.9), rgba(221,214,254,.7))',
    accentColor: '#6d28d9',
    badgeBg: 'rgba(196,181,253,1)', badgeColor: '#4c1d95',
    vis: { value: '97.4', unit: '%', barPct: 97, label: '地熱供暖佔比（REN21 2023）' },
    feature: '地熱大規模用於供暖，首都雷克雅維克幾乎完全告別化石燃料供熱，是全球直接利用地熱的最佳典範。',
    why: '中洋脊與熱點交叉，地熱資源極旺；人口少，需求可控，基礎設施整合效率高。',
    lesson: '地熱不一定要發電——直接供熱的能量轉換效率更高、成本更低。台灣豐富的溫泉資源，值得認真思考非發電利用的可能性。',
  },
  {
    country: '紐西蘭', tag: '整合治理',
    accentBg: 'linear-gradient(135deg, rgba(236,254,255,.9), rgba(207,250,254,.7))',
    accentColor: '#0e7490',
    badgeBg: 'rgba(103,232,249,1)', badgeColor: '#164e63',
    vis: { value: '17.8', unit: '%', barPct: 18, label: '2023 地熱占全國電力比例（容量因數 85%）' },
    feature: 'Tauhara 等新案場採大型二元循環與碳回注設計，2024 年新增 225 MW，占全球新增一半以上。',
    why: '北島火山帶資源豐富，電力市場開放競爭，同時強調生態監測與毛利族協商治理。',
    lesson: '如何在地熱開發過程中與原住民族文化、土地權利和生態保育共存——對台灣東部地熱開發有極高參考價值。',
  },
]

/* ── 開發流程 ── */
const devFlow = [
  { icon: '🔍', label: '探勘', risk: false, riskNote: '地球物理調查' },
  { icon: '🪛', label: '試鑽', risk: true,  riskNote: '失敗成本最高' },
  { icon: '📊', label: '評估資源', risk: true, riskNote: '品質不確定' },
  { icon: '⛏️', label: '生產井', risk: false, riskNote: '大量資本投入' },
  { icon: '🏭', label: '電廠建置', risk: false, riskNote: '工程期 2–4 年' },
  { icon: '⚡', label: '商轉', risk: false, riskNote: '穩定低成本' },
]

/* ── 四大挑戰 ── */
const challengeCards = [
  {
    icon: '🔭',
    headerBg: 'linear-gradient(135deg, rgba(254,226,226,.8), rgba(252,165,165,.4))',
    visBg: 'rgba(254,242,242,.7)',
    tag: '探勘風險', tagColor: '#b91c1c',
    title: '地下資源難以確認',
    metric: { value: '數千萬', unit: '起', label: '每口試探井造價（深度 2–3 km）' },
    vis: { type: 'risk', level: 4, label: '失敗損失無法回收' },
    desc: '試探井鑽下去若溫度、流量或透水性任一不符，投入資金幾乎全損——換來的只是「此地不適合」的答案。這種不確定性讓銀行難以評估，使地熱融資利率遠高於其他再生能源。',
    points: [
      '一口試探井成本動輒數千萬至億元新台幣，失敗幾乎全損',
      '地球物理探測只能給出推測，唯有鑽井才能驗證',
      '高不確定性讓融資困難——銀行傾向拒貸或要求政府擔保',
    ],
    taiwan: '台灣地質複雜、斷層密布，即使場址有地熱徵兆，試鑽成果仍難預測。能源署設立探勘補貼（每案最高 1 億元、探勘費 50% 上限），正是試圖打破這個死結：讓民間敢進來試。',
  },
  {
    icon: '💰',
    headerBg: 'linear-gradient(135deg, rgba(255,237,213,.8), rgba(253,186,116,.4))',
    visBg: 'rgba(255,247,237,.7)',
    tag: '成本障礙', tagColor: '#9a3412',
    title: '前期投入高、回收慢',
    metric: { value: '8–12', unit: '年', label: '從探勘到商轉的平均週期' },
    vis: {
      type: 'timeline',
      segs: [
        { label: '探勘', weight: 1,   bg: 'rgba(253,186,116,.55)', color: '#92400e' },
        { label: '試鑽·評估', weight: 1.5, bg: 'rgba(251,146,60,.65)', color: '#7c2d12' },
        { label: '建廠', weight: 1.5, bg: 'rgba(234,88,12,.7)',    color: '#fff' },
        { label: '商轉收益 ▶', weight: 2,   bg: 'rgba(134,239,172,.6)', color: '#14532d' },
      ],
    },
    desc: '每個開發階段都必須先投入巨額資金，才能等到收益——而且任何一關失敗，前面的錢都難以回收。IEA 指出這種成本結構讓地熱幾乎無法以標準商業融資取得資金。',
    points: [
      '鑽井費用可占整體開發成本的 40–60%，失敗時幾乎全損',
      '資金在 8–12 年無收益期間長期積壓，回收期漫長',
      '沒有政策電價保障，獨立開發商幾乎無法完成融資',
    ],
    taiwan: '台灣地熱鑽井設備與技術大多仰賴進口，案場規模又小，無法形成供應鏈規模效益，整體開發成本比條件相近的火山帶國家明顯更高。',
  },
  {
    icon: '🌍',
    headerBg: 'linear-gradient(135deg, rgba(219,234,254,.8), rgba(147,197,253,.4))',
    visBg: 'rgba(239,246,255,.7)',
    tag: '地質限制', tagColor: '#1d4ed8',
    title: '不是每個地方都適合',
    metric: { value: '>150', unit: '°C', label: '高溫地熱發電所需地下溫度門檻' },
    vis: {
      type: 'conditions',
      items: [
        { icon: '🔥', label: '熱源' },
        { icon: '💧', label: '流體' },
        { icon: '🪨', label: '透水性' },
      ],
    },
    desc: '這三個條件必須同時具備，且集中在同一地點、同一深度。這種組合在全球只出現在板塊邊界、火山帶等少數地質環境，台灣可行場址比想像中更少。',
    points: [
      '台灣高溫地熱集中在宜蘭、花東裂谷帶及大屯山火山群',
      '大屯山溫度最高，但國家公園法規與鄰近首都使開發門檻最高',
      '中低溫地熱（100–150°C）需昂貴的二元循環系統，經濟性較差',
    ],
    taiwan: '目前唯一商轉的清水地熱電廠位於宜蘭，裝置容量 7 MW。未來潛力較大的場址，多數又與原住民族傳統領域或保護區高度重疊，地理與法律限制交疊。',
  },
  {
    icon: '⚠️',
    headerBg: 'linear-gradient(135deg, rgba(245,243,255,.8), rgba(196,181,253,.4))',
    visBg: 'rgba(250,249,255,.7)',
    tag: '環境與社會', tagColor: '#5b21b6',
    title: '環境與社區的複雜挑戰',
    metric: { value: 'M 5.4', unit: '', label: '2017 韓浦項 EGS 案場誘發地震規模' },
    vis: {
      type: 'impacts',
      items: [
        { icon: '🌀', label: '誘發地震' },
        { icon: '☁️', label: 'H₂S 毒氣' },
        { icon: '⬇️', label: '地面沉降' },
        { icon: '🗣️', label: '社區衝突' },
      ],
    },
    desc: '地熱雖屬低碳，但深度鑽孔與高壓注水會對環境造成真實影響。台灣潛力場址多與原住民族傳統領域、溫泉產業重疊，社會溝通往往比工程技術更難克服。',
    points: [
      '高壓注水（EGS 必要步驟）可能誘發感應地震；韓浦項案引發 M 5.4 地震',
      '硫化氫（H₂S）具毒性，必須配備廢氣處理系統',
      '地下流體長期抽取可能造成地面沉降，影響土地結構與水源',
    ],
    taiwan: '台灣原住民族基本法要求開發行為在傳統領域須完成部落諮商同意程序，時程不確定、結果無法保證，對需要長期規劃的地熱開發案影響極大。',
  },
]

/* ── Chart refs ── */
const taiwanChartRef    = ref(null)
const globalCapChartRef = ref(null)

let taiwanChart    = null
let globalCapChart = null
let observer       = null
let chartsInit     = false

function initCharts() {
  if (chartsInit) return
  chartsInit = true
  nextTick(() => {
    initTaiwanChart()
    initGlobalCapChart()
  })
}

function initTaiwanChart() {
  const ctx = taiwanChartRef.value
  if (!ctx) return
  taiwanChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: taiwanGeothermalData.years,
      datasets: [{
        label: '地熱發電量（GWh）',
        data: taiwanGeothermalData.generationGwh,
        backgroundColor: 'rgba(220,38,38,0.08)',
        borderColor: 'rgba(220,38,38,0.85)',
        borderWidth: 2.5,
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: true,
        tension: 0.35,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1200, easing: 'easeOutQuart' },
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: c => ` ${c.parsed.y} GWh` } }
      },
      scales: {
        x: { ticks: { font: { size: 11 }, color: '#64748b' }, grid: { display: false }, border: { color: 'transparent' } },
        y: {
          beginAtZero: true, max: 35,
          ticks: { callback: v => `${v}`, font: { size: 10 }, color: '#64748b' },
          grid: { color: 'rgba(148,163,184,0.12)' },
          border: { color: 'transparent' },
        }
      }
    }
  })
}

function initGlobalCapChart() {
  const ctx = globalCapChartRef.value
  if (!ctx) return
  globalCapChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: globalGeothermalCapacityData.years,
      datasets: [{
        label: '全球地熱裝置容量（GW）',
        data: globalGeothermalCapacityData.capacityGw,
        borderColor: 'rgba(192,64,26,0.9)',
        backgroundColor: 'rgba(192,64,26,0.08)',
        borderWidth: 2.5,
        pointRadius: 3,
        pointHoverRadius: 5,
        fill: true,
        tension: 0.3,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1400, easing: 'easeOutQuart' },
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: c => ` ${c.parsed.y} GW` } }
      },
      scales: {
        x: { ticks: { font: { size: 11 }, color: '#64748b' }, grid: { color: 'rgba(148,163,184,0.08)' }, border: { color: 'transparent' } },
        y: {
          min: 7, max: 17,
          ticks: { callback: v => `${v} GW`, font: { size: 10 }, color: '#64748b' },
          grid: { color: 'rgba(148,163,184,0.12)' },
          border: { color: 'transparent' },
        }
      }
    }
  })
}

function switchTab(id) {
  activeTab.value = id
  nextTick(() => {
    taiwanChart?.resize()
    globalCapChart?.resize()
  })
}

onMounted(() => {
  setTimeout(() => {
    observer = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) { initCharts(); observer?.disconnect() } },
      { threshold: 0.05 }
    )
    if (sectionRef.value) observer.observe(sectionRef.value)
  }, 50)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  taiwanChart?.destroy()
  globalCapChart?.destroy()
})
</script>

<style scoped>
/* ═══ 整體 ════════════════════════════════════════════════ */
.geo { width: 100%; padding: 8px 0 52px; }

.geo-header { text-align: center; margin-bottom: 40px; padding: 0 8px; }
.geo-main-title {
  font-size: clamp(1.3rem, 2.6vw, 1.9rem);
  font-weight: 900;
  color: #7f1d1d;
  line-height: 1.25;
  margin-bottom: 14px;
  letter-spacing: -0.3px;
}
.geo-subtitle {
  font-size: clamp(0.88rem, 1.4vw, 1rem);
  color: #475569;
  line-height: 1.85;
  max-width: 620px;
  margin: 0 auto;
}

/* ═══ Tabs ════════════════════════════════════════════════ */
.geo-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 36px;
  padding: 6px;
  background: rgba(255,255,255,.65);
  border: 1px solid rgba(220,38,38,.2);
  border-radius: 18px;
  backdrop-filter: blur(4px);
}
.geo-tab {
  flex: 1;
  min-width: 100px;
  padding: 14px 20px;
  border: none;
  border-radius: 12px;
  background: transparent;
  color: #7f1d1d;
  font-size: 0.9rem;
  font-weight: 800;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.18s;
  white-space: nowrap;
}
.geo-tab:hover:not(.geo-tab--active) { background: rgba(220,38,38,.1); transform: translateY(-1px); }
.geo-tab--active {
  background: linear-gradient(135deg, #ef4444, #c0401a);
  color: #fff;
  box-shadow: 0 6px 18px rgba(220,38,38,.28);
}

/* ═══ 通用版面 ════════════════════════════════════════════ */
.geo-panel { min-height: 200px; }
.geo-block { margin-bottom: 44px; }
.geo-block-title {
  font-size: 1.05rem;
  font-weight: 900;
  color: #b91c1c;
  margin-bottom: 20px;
  padding-left: 14px;
  border-left: 4px solid #ef4444;
  line-height: 1.4;
}
.geo-section-lead {
  color: #475569;
  font-size: 0.93rem;
  line-height: 1.8;
  margin-bottom: 22px;
}
.geo-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }

.geo-card {
  background: rgba(255,255,255,.72);
  border: 1px solid rgba(255,255,255,.88);
  border-radius: 22px;
  padding: 26px 24px;
  box-shadow: 0 8px 28px rgba(15,23,42,.07);
  backdrop-filter: blur(6px);
}
.geo-card-title {
  font-size: clamp(0.93rem, 1.6vw, 1.05rem);
  font-weight: 900;
  color: #1e3a5f;
  margin-bottom: 18px;
  line-height: 1.45;
}
.geo-card-desc { color: #4b5563; line-height: 1.85; font-size: 0.92rem; margin-top: 16px; }

.geo-chart-wrap { position: relative; height: 280px; width: 100%; }
.geo-chart-wrap--tall { height: 320px; }

.geo-source { font-size: 0.75rem; color: #94a3b8; margin-top: 12px; line-height: 1.65; }
.geo-source a { color: #dc2626; text-decoration: none; }
.geo-source a:hover { text-decoration: underline; }
.geo-source--center { text-align: center; margin-top: 20px; }

.geo-final-note {
  margin: 16px 0 0;
  padding: 10px 14px;
  border-left: 3px solid #ef4444;
  font-size: 0.88rem;
  font-weight: 700;
  color: #7f1d1d;
  line-height: 1.75;
  background: rgba(255,245,244,.6);
  border-radius: 0 8px 8px 0;
}

/* ═══ Tab1：數字統計格 ════════════════════════════════════ */
.geo-stat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 16px 0 18px;
}
.geo-stat-block {
  border-radius: 14px;
  padding: 18px 14px;
  text-align: center;
  background: rgba(254,215,215,.75);
  border: 1px solid rgba(220,38,38,.28);
}
.geo-stat-block--b { background: rgba(252,181,181,.7);  border-color: rgba(220,38,38,.32); }
.geo-stat-block--c { background: rgba(167,243,208,.65); border-color: rgba(16,185,129,.32); }
.geo-stat-block--d { background: rgba(186,220,255,.7);  border-color: rgba(59,130,246,.32); }

.geo-stat-label { font-size: 0.72rem; color: #475569; margin-bottom: 6px; font-weight: 700; }
.geo-stat-num {
  font-size: 2rem;
  font-weight: 900;
  color: #b91c1c;
  line-height: 1;
  margin-bottom: 5px;
  letter-spacing: -1px;
}
.geo-stat-num--sm { font-size: 1rem; letter-spacing: 0; }
.geo-stat-unit { font-size: 1rem; font-weight: 700; letter-spacing: 0; }
.geo-stat-note { font-size: 0.7rem; color: #64748b; }

/* ═══ Tab1：五大原因 ══════════════════════════════════════ */
.geo-reason-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.geo-reason-card {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  background: rgba(255,255,255,.72);
  border: 1px solid rgba(220,38,38,.12);
  border-radius: 18px;
  padding: 18px 16px;
  box-shadow: 0 4px 16px rgba(15,23,42,.06);
  transition: transform 0.18s;
}
.geo-reason-card:hover { transform: translateY(-2px); }
.geo-reason-icon { font-size: 1.5rem; flex-shrink: 0; line-height: 1; margin-top: 2px; }
.geo-reason-title { font-size: 0.9rem; font-weight: 900; color: #b91c1c; margin-bottom: 6px; }
.geo-reason-desc { font-size: 0.81rem; color: #4b5563; line-height: 1.65; margin: 0; }

/* ═══ Tab2：洞察卡片 ══════════════════════════════════════ */
.geo-insight-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.geo-insight-card {
  border-radius: 18px;
  padding: 20px 18px;
  transition: transform 0.18s;
}
.geo-insight-card:hover { transform: translateY(-2px); }
.geo-insight-card--neutral  { background: rgba(241,245,249,.85); border: 1px solid rgba(148,163,184,.25); }
.geo-insight-card--slow     { background: rgba(255,237,213,.8);  border: 1px solid rgba(249,115,22,.22); }
.geo-insight-card--strength { background: rgba(240,253,244,.85); border: 1px solid rgba(34,197,94,.25); }

.geo-insight-head { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 14px; }
.geo-insight-icon { width: 38px; height: 38px; flex-shrink: 0; margin-top: 1px; display: flex; align-items: center; justify-content: center; }
.geo-insight-icon svg { width: 100%; height: 100%; }
.geo-insight-icon-emoji { font-size: 1.9rem; line-height: 1; }
.geo-insight-title { font-size: 0.95rem; font-weight: 900; color: #0f172a; line-height: 1.35; }

.geo-insight-stat {
  margin-bottom: 14px;
  padding: 10px 14px;
  background: rgba(255,255,255,.55);
  border-radius: 10px;
}
.geo-insight-stat-val {
  font-size: 1.8rem;
  font-weight: 900;
  color: #b91c1c;
  letter-spacing: -1px;
  line-height: 1;
}
.geo-insight-stat-unit {
  font-size: 1rem;
  font-weight: 700;
  color: #b91c1c;
  margin-left: 2px;
}
.geo-insight-stat-label {
  font-size: 0.67rem;
  color: #64748b;
  font-weight: 600;
  margin-top: 3px;
  line-height: 1.4;
}

.geo-insight-hbars {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 14px;
}
.geo-insight-hbar-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.geo-insight-hbar-lbl {
  font-size: 0.75rem;
  font-weight: 700;
  color: #475569;
  width: 46px;
  flex-shrink: 0;
  text-align: right;
}
.geo-insight-hbar-track {
  flex: 1;
  height: 11px;
  background: rgba(0,0,0,.09);
  border-radius: 99px;
  overflow: hidden;
}
.geo-insight-hbar-fill {
  height: 100%;
  border-radius: 99px;
  min-width: 4px;
}
.geo-insight-hbar-val {
  font-size: 0.73rem;
  font-weight: 800;
  color: #1e293b;
  width: 58px;
  flex-shrink: 0;
}

.geo-insight-desc { font-size: 0.82rem; color: #4b5563; line-height: 1.72; margin: 0; }

/* ═══ Tab3：國外案例卡片格 ════════════════════════════════ */
.geo-country-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.geo-country-card {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(15,23,42,.08);
  border: 1px solid rgba(255,255,255,.9);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}
.geo-country-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(15,23,42,.13); }

.geo-country-head {
  padding: 22px 20px 18px;
}
.geo-country-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.geo-country-cname {
  font-size: 1.4rem;
  font-weight: 900;
  color: #0f172a;
  line-height: 1;
}
.geo-country-badge {
  display: inline-flex;
  align-items: center;
  height: 20px;
  padding: 0 9px;
  border-radius: 999px;
  font-size: 0.66rem;
  font-weight: 900;
  flex-shrink: 0;
}

.geo-country-vis { /* 數據視覺區 */ }
.geo-vis-big-num {
  font-size: 2.4rem;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -2px;
  margin-bottom: 10px;
}
.geo-vis-big-unit {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0;
  margin-left: 2px;
}
.geo-vis-bar-track {
  height: 7px;
  border-radius: 999px;
  background: rgba(0,0,0,.1);
  overflow: hidden;
  margin-bottom: 6px;
}
.geo-vis-bar-fill {
  height: 100%;
  border-radius: 999px;
  opacity: 0.8;
}
.geo-vis-bar-label {
  font-size: 0.67rem;
  font-weight: 700;
  color: rgba(15,23,42,.45);
  line-height: 1.4;
}

.geo-country-body {
  padding: 16px 18px 18px;
  background: rgba(255,255,255,.85);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 11px;
}
.geo-country-fact { /* 每個事實區 */ }
.geo-country-fact--learn {
  margin-top: auto;
  padding: 9px 11px;
  background: rgba(255,245,244,.7);
  border-left: 3px solid #ef4444;
  border-radius: 0 8px 8px 0;
}
.geo-fact-lbl {
  display: block;
  font-size: 0.62rem;
  font-weight: 900;
  color: #94a3b8;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 4px;
}
.geo-fact-lbl--learn { color: #dc2626; }
.geo-fact-txt {
  font-size: 0.79rem;
  color: #374151;
  line-height: 1.65;
  margin: 0;
}

/* ═══ Tab4：開發流程 ══════════════════════════════════════ */
.geo-flow-wrap {
  background: rgba(255,255,255,.72);
  border: 1px solid rgba(255,255,255,.88);
  border-radius: 22px;
  padding: 26px 24px;
  box-shadow: 0 8px 28px rgba(15,23,42,.07);
}
.geo-flow {
  display: flex;
  align-items: center;
  gap: 6px;
  overflow-x: auto;
  padding-top: 14px;
  padding-bottom: 4px;
}
.geo-flow-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  min-width: 88px;
  flex: 1;
  padding: 14px 10px 12px;
  border-radius: 14px;
  background: rgba(241,245,249,.8);
  border: 1px solid rgba(148,163,184,.2);
  position: relative;
  transition: transform 0.18s;
}
.geo-flow-step:hover { transform: translateY(-2px); }
.geo-flow-step--risk {
  background: rgba(254,226,226,.7);
  border-color: rgba(220,38,38,.22);
}
.geo-flow-num {
  width: 22px; height: 22px;
  border-radius: 50%;
  background: #e2e8f0;
  color: #475569;
  font-size: 0.72rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.geo-flow-step--risk .geo-flow-num { background: rgba(220,38,38,.2); color: #b91c1c; }
.geo-flow-icon { font-size: 1.45rem; }
.geo-flow-label { font-size: 0.88rem; font-weight: 900; color: #1e3a5f; text-align: center; }
.geo-flow-risk-note {
  font-size: 0.72rem;
  color: #94a3b8;
  text-align: center;
  line-height: 1.3;
}
.geo-flow-step--risk .geo-flow-risk-note { color: #dc2626; }
.geo-flow-risk-badge {
  position: absolute;
  top: -9px;
  left: 50%;
  transform: translateX(-50%);
  height: 18px;
  padding: 0 7px;
  background: #ef4444;
  color: #fff;
  font-size: 0.6rem;
  font-weight: 900;
  border-radius: 999px;
  display: flex;
  align-items: center;
  white-space: nowrap;
}
.geo-flow-arrow {
  font-size: 1rem;
  color: #cbd5e1;
  flex-shrink: 0;
  font-weight: 700;
}
.geo-flow-note {
  margin-top: 18px;
  font-size: 0.92rem;
  color: #475569;
  line-height: 1.8;
  padding-top: 16px;
  border-top: 1px solid rgba(148,163,184,.15);
}

/* ═══ Tab4：挑戰卡片（四欄橫排） ════════════════════════ */
.geo-challenge-cols {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
.geo-challenge-card {
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 18px rgba(15,23,42,.07);
  border: 1px solid rgba(255,255,255,.88);
  transition: transform 0.18s, box-shadow 0.18s;
  display: flex;
  flex-direction: column;
}
.geo-challenge-card:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(15,23,42,.11); }

.geo-challenge-top {
  padding: 16px 16px 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.geo-challenge-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.geo-challenge-icon-wrap { font-size: 1.6rem; }
.geo-challenge-tag {
  font-size: 0.75rem;
  font-weight: 900;
  background: rgba(255,255,255,.6);
  padding: 3px 10px;
  border-radius: 999px;
}

.geo-challenge-body {
  padding: 14px 16px 16px;
  background: rgba(255,255,255,.82);
  flex: 1;
  display: flex;
  flex-direction: column;
}
.geo-challenge-title {
  font-size: 1.05rem;
  font-weight: 900;
  color: #0f172a;
  line-height: 1.35;
}
.geo-challenge-desc {
  font-size: 0.84rem;
  color: #4b5563;
  line-height: 1.75;
  margin: 0;
}
.geo-challenge-divider {
  height: 1px;
  background: rgba(148,163,184,.15);
  margin: 13px 0;
}
.geo-challenge-points-label {
  font-size: 0.68rem;
  font-weight: 900;
  color: #94a3b8;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 7px;
}
.geo-challenge-list {
  list-style: none;
  padding: 0;
  margin: 0 0 12px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  flex: 1;
}
.geo-challenge-list li {
  font-size: 0.83rem;
  color: #64748b;
  line-height: 1.6;
  padding-left: 14px;
  position: relative;
}
.geo-challenge-list li::before {
  content: '';
  position: absolute;
  left: 0; top: 8px;
  width: 5px; height: 5px;
  border-radius: 50%;
  background: #ef4444;
}
.geo-challenge-tw {
  padding: 9px 11px;
  background: rgba(255,245,244,.8);
  border-left: 3px solid #ef4444;
  border-radius: 0 6px 6px 0;
  font-size: 0.82rem;
  color: #7f1d1d;
  line-height: 1.65;
  margin-top: auto;
}
.geo-challenge-tw-label {
  display: block;
  font-weight: 900;
  font-size: 0.68rem;
  color: #dc2626;
  margin-bottom: 3px;
  letter-spacing: 0.3px;
}

/* ═══ Tab4：挑戰卡片數據視覺區 ══════════════════════════ */
.geo-challenge-vis {
  padding: 14px 16px 12px;
  border-bottom: 1px solid rgba(148,163,184,.12);
}
.geo-challenge-vis-metric {
  display: flex;
  align-items: baseline;
  gap: 3px;
  margin-bottom: 2px;
}
.geo-challenge-vis-val {
  font-size: 1.55rem;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.5px;
}
.geo-challenge-vis-unit {
  font-size: 0.88rem;
  font-weight: 700;
}
.geo-challenge-vis-mlabel {
  font-size: 0.66rem;
  color: #94a3b8;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 1.35;
}

/* 風險等級點 */
.geo-vis-risk {
  display: flex;
  align-items: center;
  gap: 5px;
}
.geo-vis-risk-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
.geo-vis-risk-text {
  font-size: 0.68rem;
  font-weight: 700;
  margin-left: 4px;
}

/* 時間軸 */
.geo-vis-timeline {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  height: 28px;
  gap: 1px;
}
.geo-vis-tl-seg {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  font-weight: 800;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  padding: 0 4px;
}

/* 條件組合 */
.geo-vis-conditions {
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
}
.geo-vis-cond-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background: rgba(255,255,255,.7);
  border: 1px solid rgba(148,163,184,.2);
  font-size: 0.7rem;
  font-weight: 700;
  color: #1e3a5f;
}
.geo-vis-cond-icon { font-size: 0.9rem; }
.geo-vis-cond-label { }
.geo-vis-cond-op {
  font-size: 0.85rem;
  font-weight: 900;
  color: #94a3b8;
}
.geo-vis-cond-op--eq { color: #1d4ed8; }
.geo-vis-cond-chip--result {
  background: rgba(240,253,244,.9);
  border-color: rgba(34,197,94,.3);
  color: #14532d;
}

/* 影響類型圖 */
.geo-vis-impacts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
}
.geo-vis-impact-chip {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 8px;
  border-radius: 8px;
  background: rgba(255,255,255,.65);
  border: 1px solid rgba(148,163,184,.18);
}
.geo-vis-impact-icon { font-size: 0.95rem; }
.geo-vis-impact-label { font-size: 0.68rem; font-weight: 700; color: #374151; }

/* ═══ RWD ══════════════════════════════════════════════ */
@media (max-width: 1100px) {
  .geo-challenge-cols { grid-template-columns: repeat(2, 1fr); }
  .geo-country-grid   { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 1024px) {
  .geo-reason-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 900px) {
  .geo-grid-2       { grid-template-columns: 1fr; }
  .geo-insight-grid { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .geo-tabs { gap: 6px; padding: 5px; }
  .geo-tab  { font-size: 0.82rem; padding: 11px 12px; }
  .geo-chart-wrap { height: 240px; }
  .geo-chart-wrap--tall { height: 280px; }
  .geo-challenge-cols { grid-template-columns: 1fr; }
  .geo-country-grid   { grid-template-columns: 1fr; }
}
@media (max-width: 540px) {
  .geo-reason-grid { grid-template-columns: 1fr; }
  .geo-stat-grid   { grid-template-columns: 1fr 1fr; }
  .geo-card        { padding: 18px 16px; border-radius: 18px; }
}
</style>
