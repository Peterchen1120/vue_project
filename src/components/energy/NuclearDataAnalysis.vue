<template>
  <section class="nuc" ref="sectionRef">

    <div class="nuc-header">
      <h2 class="nuc-main-title">核能資料分析：穩定供電，但爭議未止</h2>
      <p class="nuc-subtitle">核能不是再生能源，卻是能源轉型中繞不開的選項。它能穩定供電、降低化石燃料依賴，但也伴隨核廢料、安全、成本與社會接受度的長期爭議。</p>
    </div>

    <div class="nuc-tabs" role="tablist" aria-label="核能分析分頁">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="nuc-tab"
        :class="{ 'nuc-tab--active': activeTab === tab.id }"
        role="tab"
        :aria-selected="activeTab === tab.id"
        @click="switchTab(tab.id)"
      >{{ tab.label }}</button>
    </div>

    <!-- ─────────────────────────── Tab 1：台灣核能現況 -->
    <div v-show="activeTab === 'taiwan'" class="nuc-panel">

      <div class="nuc-block">
        <h3 class="nuc-block-title">台灣核能發電量與占比（2010–2024）</h3>
        <div class="nuc-grid-2">

          <div class="nuc-card">
            <h4 class="nuc-card-title">年發電量與電力占比趨勢</h4>
            <div class="nuc-chart-wrap">
              <canvas ref="taiwanChartRef"></canvas>
            </div>
            <p class="nuc-card-desc">台灣核能發電量自 2010 年約 4.2 萬 GWh（占比 16.85%）持續下滑，2024 年降至 1.2 萬 GWh（占比 4.21%）。這段期間三座核電廠陸續除役或停機，加上再生能源快速成長，核能占比逐年縮小。2025 年 5 月，核三廠 2 號機執照到期停機，台灣進入階段性核電歸零。</p>
            <p class="nuc-source">資料來源：<a href="https://www.esist.org.tw/attachments/handbook/2024/ebook/2024EnergyStaHandBook.pdf" target="_blank">經濟部能源署《2024 能源統計手冊》</a>、<a href="https://www.taipower.com.tw/2289/2363/2367/2372/10312/" target="_blank">台電｜歷年發購電量占比</a></p>
          </div>

          <div class="nuc-card">
            <h4 class="nuc-card-title">現況快覽</h4>
            <div class="nuc-stat-grid">
              <div class="nuc-stat-block">
                <div class="nuc-stat-label">2010 年電力占比</div>
                <div class="nuc-stat-num">16.85<span class="nuc-stat-unit">%</span></div>
                <div class="nuc-stat-note">三座核電廠全力運轉</div>
              </div>
              <div class="nuc-stat-block nuc-stat-block--b">
                <div class="nuc-stat-label">2024 年電力占比</div>
                <div class="nuc-stat-num">4.21<span class="nuc-stat-unit">%</span></div>
                <div class="nuc-stat-note">核三廠 1 號機仍在運轉</div>
              </div>
              <div class="nuc-stat-block nuc-stat-block--c">
                <div class="nuc-stat-label">2025 核電占比</div>
                <div class="nuc-stat-num">1.2<span class="nuc-stat-unit">%</span></div>
                <div class="nuc-stat-note">台電系統口徑，全年約 3,029 GWh</div>
              </div>
              <div class="nuc-stat-block nuc-stat-block--d">
                <div class="nuc-stat-label">2026-03 最新動態</div>
                <div class="nuc-stat-num nuc-stat-num--sm">重啟審議</div>
                <div class="nuc-stat-note">台電送件核安會</div>
              </div>
            </div>
            <p class="nuc-final-note">台灣核電已完成一次階段性退出，但重啟討論在 2026 年重新開啟。</p>
          </div>

        </div>
      </div>

      <!-- 政策時間軸 -->
      <div class="nuc-block">
        <h3 class="nuc-block-title">2025–2026 政策關鍵時間軸</h3>
        <div class="nuc-timeline">
          <div v-for="evt in policyTimeline" :key="evt.date" class="nuc-timeline-item">
            <div class="nuc-timeline-dot"></div>
            <div class="nuc-timeline-content">
              <div class="nuc-timeline-date">{{ evt.date }}</div>
              <div class="nuc-timeline-title">{{ evt.title }}</div>
              <p class="nuc-timeline-desc">{{ evt.desc }}</p>
            </div>
          </div>
        </div>
        <p class="nuc-source">資料來源：<a href="https://www.cna.com.tw/news/afe/202505110024.aspx" target="_blank">中央社｜核三 2 號機停機</a>、<a href="https://www.cna.com.tw/news/afe/202603210102.aspx" target="_blank">中央社｜核二核三具重啟條件</a>、<a href="https://news.pts.org.tw/article/800046" target="_blank">公視｜核電重啟程序</a></p>
      </div>

      <!-- 支持／反對論述對照 -->
      <div class="nuc-block">
        <h3 class="nuc-block-title">台灣核能公共論述：支持與反對的觀點對照</h3>
        <p class="nuc-section-lead">以下以議題為軸，並排呈現支持與反對觀點，均客觀整理，不代表本頁立場。</p>

        <!-- 欄位標題列 -->
        <div class="nuc-pair-header">
          <div class="nuc-pair-header-side nuc-pair-header-side--pro">
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="13" fill="rgba(100,40,180,.18)" stroke="#6428b4" stroke-width="2"/><path d="M10 17l4 4 8-9" stroke="#6428b4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            支持核能的理由
          </div>
          <div class="nuc-pair-header-center">議題</div>
          <div class="nuc-pair-header-side nuc-pair-header-side--con">
            反對核能的顧慮
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="13" fill="rgba(220,38,38,.15)" stroke="#dc2626" stroke-width="2"/><path d="M11 11l10 10M21 11l-10 10" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/></svg>
          </div>
        </div>

        <!-- 配對列 -->
        <div class="nuc-pair-rows">
          <div v-for="pair in debatePairs" :key="pair.topic" class="nuc-pair-row">

            <div class="nuc-pair-side nuc-pair-side--pro">
              <div class="nuc-pair-icon-wrap nuc-pair-icon-wrap--pro">{{ pair.pro.icon }}</div>
              <div class="nuc-pair-content">
                <div class="nuc-pair-title nuc-pair-title--pro">{{ pair.pro.title }}</div>
                <p class="nuc-pair-desc">{{ pair.pro.desc }}</p>
              </div>
            </div>

            <div class="nuc-pair-center">
              <div class="nuc-pair-topic-badge">{{ pair.topic }}</div>
            </div>

            <div class="nuc-pair-side nuc-pair-side--con">
              <div class="nuc-pair-icon-wrap nuc-pair-icon-wrap--con">{{ pair.con.icon }}</div>
              <div class="nuc-pair-content">
                <div class="nuc-pair-title nuc-pair-title--con">{{ pair.con.title }}</div>
                <p class="nuc-pair-desc">{{ pair.con.desc }}</p>
              </div>
            </div>

          </div>
        </div>

        <p class="nuc-source">資料來源：<a href="https://news.pts.org.tw/article/764866" target="_blank">公視｜核三公投正反論述</a></p>
      </div>

    </div>

    <!-- ─────────────────────────── Tab 2：優缺點分析 -->
    <div v-show="activeTab === 'proscons'" class="nuc-panel">

      <div class="nuc-block">
        <div class="nuc-pc-split">
          <!-- 優點欄 -->
          <div class="nuc-pc-col nuc-pc-col--pro">
            <div class="nuc-pc-col-header">
              <span class="nuc-pc-col-icon">✅</span>
              <h3 class="nuc-pc-col-title">核能優點</h3>
            </div>
            <p class="nuc-pc-col-lead">穩定供電、低運轉碳排與高能量密度，是核能在能源轉型討論中佔有一席之地的核心原因。</p>
            <div class="nuc-pc-list">
              <div v-for="pro in nuclearPros" :key="pro.title" class="nuc-pc-item nuc-pc-item--pro">
                <div class="nuc-pc-item-icon">{{ pro.icon }}</div>
                <div class="nuc-pc-item-body">
                  <div class="nuc-pc-item-title">{{ pro.title }}</div>
                  <p class="nuc-pc-item-desc">{{ pro.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 風險欄 -->
          <div class="nuc-pc-col nuc-pc-col--risk">
            <div class="nuc-pc-col-header">
              <span class="nuc-pc-col-icon">⚠️</span>
              <h3 class="nuc-pc-col-title">限制與風險</h3>
            </div>
            <p class="nuc-pc-col-lead">高治理成本、長期廢料管理與事故風險，使核能在各國政策中仍是高度爭議的選項。</p>
            <div class="nuc-pc-list">
              <div v-for="risk in nuclearRisks" :key="risk.title" class="nuc-pc-item nuc-pc-item--risk">
                <div class="nuc-pc-item-icon">{{ risk.icon }}</div>
                <div class="nuc-pc-item-body">
                  <div class="nuc-pc-item-title">{{ risk.title }}</div>
                  <p class="nuc-pc-item-desc">{{ risk.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 補充數據 -->
      <div class="nuc-block">
        <h3 class="nuc-block-title">國際機構的數據佐證</h3>
        <div class="nuc-data-cards">
          <div v-for="d in dataPoints" :key="d.label" class="nuc-data-card">
            <div class="nuc-data-val">{{ d.value }}</div>
            <div class="nuc-data-label">{{ d.label }}</div>
            <div class="nuc-data-note">{{ d.note }}</div>
          </div>
        </div>
        <p class="nuc-source">資料來源：<a href="https://www.iea.org/energy-system/electricity/nuclear-power" target="_blank">IEA｜Nuclear Power</a>、<a href="https://ourworldindata.org/safest-sources-of-energy" target="_blank">Our World in Data｜Safest energy sources</a>、<a href="https://ourworldindata.org/nuclear-energy" target="_blank">Our World in Data｜Nuclear Energy</a>、<a href="https://www.iea.org/reports/the-path-to-a-new-era-for-nuclear-energy/executive-summary" target="_blank">IEA｜Path to a New Era for Nuclear</a></p>
      </div>

    </div>

    <!-- ─────────────────────────── Tab 3：能源轉型定位 -->
    <div v-show="activeTab === 'transition'" class="nuc-panel">

      <div class="nuc-block">
        <h3 class="nuc-block-title">核能為什麼被放進能源轉型討論？</h3>
        <p class="nuc-section-lead">核能不是再生能源，但常和綠能、淨零與能源安全一起出現。以下三層說明幫助你理解這個看似矛盾的現象。</p>

        <div class="nuc-layer-cards">
          <div v-for="(layer, i) in transitionLayers" :key="layer.title" class="nuc-layer-card">
            <div class="nuc-layer-num">{{ i + 1 }}</div>
            <div class="nuc-layer-body">
              <div class="nuc-layer-title">{{ layer.title }}</div>
              <p class="nuc-layer-desc">{{ layer.desc }}</p>
            </div>
          </div>
        </div>

        <div class="nuc-summary-box">
          <div class="nuc-summary-label">最準確的定位</div>
          <div class="nuc-summary-text">非再生、運轉排放低、穩定供電、高治理要求</div>
        </div>
      </div>

      <!-- 每度電碳排比較 -->
      <div class="nuc-block">
        <h3 class="nuc-block-title">各能源每度電生命週期碳排放量（g CO₂eq / kWh）</h3>
        <p class="nuc-section-lead">以下數據為 IPCC 生命週期中位數估算，涵蓋建造、燃料開採、運轉至除役的全程排放。</p>

        <!-- 長條圖 -->
        <div class="nuc-bar-chart">
          <div v-for="et in energyTypeRows" :key="et.name" class="nuc-bar-row">
            <div class="nuc-bar-label">
              <span class="nuc-bar-icon">{{ et.icon }}</span>
              <span class="nuc-bar-name">{{ et.name }}</span>
            </div>
            <div class="nuc-bar-track">
              <div class="nuc-bar-fill" :style="{ width: (et.gco2 / 820 * 100) + '%', background: et.barColor }"></div>
            </div>
            <span class="nuc-bar-val">{{ et.gco2 }}</span>
          </div>
          <div class="nuc-bar-axis-label">g CO₂eq / kWh</div>
        </div>

        <!-- 能源說明 -->
        <div class="nuc-etype-desc-grid">
          <div
            v-for="et in energyTypeRows"
            :key="'desc-'+et.name"
            class="nuc-etype-desc-card"
            :class="et.highlight ? 'nuc-etype-desc-card--highlight' : ''"
          >
            <div class="nuc-etype-desc-head">
              <span class="nuc-etype-desc-icon">{{ et.icon }}</span>
              <span class="nuc-etype-desc-name">{{ et.name }}</span>
              <span class="nuc-etype-desc-badge" :style="{ background: et.renewBg, color: et.renewColor }">{{ et.renewShort }}</span>
            </div>
            <p class="nuc-etype-desc-text">{{ et.note }}</p>
          </div>
        </div>

        <p class="nuc-source">資料來源：<a href="https://www.ipcc.ch/report/ar6-wg3/" target="_blank">IPCC AR6 WGIII（2022）</a>、<a href="https://ourworldindata.org/safest-sources-of-energy" target="_blank">Our World in Data｜Carbon intensity of electricity</a>、<a href="https://www.iea.org/energy-system/electricity/nuclear-power" target="_blank">IEA｜Nuclear Power</a></p>
      </div>

    </div>

    <!-- ─────────────────────────── Tab 4：全球前五國 -->
    <div v-show="activeTab === 'global'" class="nuc-panel">

      <div class="nuc-block">
        <h3 class="nuc-block-title">2024 年全球核電占比前五國</h3>
        <p class="nuc-section-lead">這些國家高度依賴核能，各有不同的歷史背景與政策邏輯。了解他們的選擇，有助於理解核能在不同地緣政治與能源安全脈絡下的角色。</p>

        <div class="nuc-country-grid">
          <div v-for="c in topNuclearShareCountries" :key="c.country" class="nuc-country-card">

            <div class="nuc-country-head" :style="{ background: c.accentBg }">
              <div class="nuc-country-title-row">
                <div class="nuc-country-cname">{{ c.zh }}</div>
                <span class="nuc-country-badge" :style="{ background: c.badgeBg, color: c.badgeColor }">{{ c.tag }}</span>
              </div>
              <div class="nuc-country-vis">
                <div class="nuc-vis-big-num" :style="{ color: c.accentColor }">
                  {{ c.sharePct }}<span class="nuc-vis-big-unit">%</span>
                </div>
                <div class="nuc-vis-bar-track">
                  <div class="nuc-vis-bar-fill" :style="{ width: c.sharePct + '%', background: c.accentColor }"></div>
                </div>
                <div class="nuc-vis-bar-label">核能占總發電量比例（2024）</div>
              </div>
            </div>

            <div class="nuc-country-body">
              <div class="nuc-country-fact">
                <span class="nuc-fact-lbl">發電量</span>
                <p class="nuc-fact-txt">{{ c.generationTwh }} TWh（2024 年）</p>
              </div>
              <div class="nuc-country-fact">
                <span class="nuc-fact-lbl">選擇核能的理由</span>
                <p class="nuc-fact-txt">{{ c.reason }}</p>
              </div>
              <div class="nuc-country-fact">
                <span class="nuc-fact-lbl">優點</span>
                <p class="nuc-fact-txt">{{ c.advantage }}</p>
              </div>
              <div class="nuc-country-fact nuc-country-fact--risk">
                <span class="nuc-fact-lbl nuc-fact-lbl--risk">潛在危險</span>
                <p class="nuc-fact-txt">{{ c.risk }}</p>
              </div>
            </div>

          </div>
        </div>

        <p class="nuc-source nuc-source--center">資料來源：<a href="https://world-nuclear.org/information-library/facts-and-figures/nuclear-generation-by-country" target="_blank">World Nuclear Association｜Nuclear Generation by Country</a>、<a href="https://analysesetdonnees.rte-france.com/en/annual-review-2024/keyfindings" target="_blank">RTE France｜Annual Electricity Review 2024</a>、<a href="https://world-nuclear.org/information-library/country-profiles/countries-o-s/slovakia" target="_blank">WNA｜Slovakia</a>、<a href="https://www.iaea.org/newscenter/pressreleases/update-267-iaea-director-general-statement-on-situation-in-ukraine" target="_blank">IAEA｜Ukraine Nuclear Safety</a>、<a href="https://paks2.hu/web/paks-2-en/w/paks-provided-nearly-half-of-domestic-electricity-production-again-in-2024" target="_blank">Paks II｜Hungary 2024</a>、<a href="https://kznpp.org/en/about-us/about-knpp-kozloduy" target="_blank">Kozloduy NPP</a></p>
      </div>

    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import Chart from 'chart.js/auto'

/* ── 分頁 ── */
const tabs = [
  { id: 'taiwan',     label: '台灣核能現況與公共論述' },
  { id: 'proscons',   label: '核能優缺點分析' },
  { id: 'transition', label: '核能與能源轉型' },
  { id: 'global',     label: '全球核電占比前五國' },
]
const activeTab = ref('taiwan')

/* ── 台灣核能發電資料（來源：經濟部能源署《2024 能源統計手冊》） ── */
const taiwanNuclearData = {
  years: [
    2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019,
    2020, 2021, 2022, 2023, 2024
  ],
  generationGwh: [
    41628.7, 42116.5, 40421.7, 41639.4, 42389.0,
    36471.1, 31661.4, 22445.5, 27678.3, 32323.4,
    31440.2, 27787.9, 23754.8, 17802.0, 12180.3
  ],
  sharePct: [
    16.85, 16.70, 16.14, 16.50, 16.31,
    14.13, 11.99, 8.31, 10.05, 11.79,
    11.23, 9.55, 8.24, 6.30, 4.21
  ],
}

/* ── 政策時間軸 ── */
const policyTimeline = [
  {
    date: '2025-05-17',
    title: '核三廠 2 號機停機，台灣核電占比歸零',
    desc: '核三廠 2 號機運轉執照到期並依法停機，台灣完成階段性非核家園目標。此後台灣電力系統不再有核電供應。',
  },
  {
    date: '2026-03-21',
    title: '總統賴清德宣告核二、核三具備重啟條件',
    desc: '賴清德總統表示，核二廠與核三廠在技術上具備重啟條件，台電將準備把重啟計畫送交核能安全委員會（核安會）審議，啟動重啟討論的正式程序。',
  },
  {
    date: '2026-03-27',
    title: '台電向核安會送出核三廠重啟相關申請文件',
    desc: '台電向核安會提交核三廠重啟及換照相關申請文件，進入正式審查程序。後續是否通過審議、何時重啟，仍待核安會決定。',
  },
]

/* ── 論述配對（議題為軸） ── */
const debatePairs = [
  {
    topic: '供電穩定',
    pro: {
      icon: '⚡',
      title: '穩定供電',
      desc: '核電可長時間連續運轉，不受日照與風況影響，是少數能全天候提供穩定基載電力的選項，對用電高峰特別有價值。',
    },
    con: {
      icon: '⚠️',
      title: '安全風險',
      desc: '台灣地震頻繁，老舊機組重啟需要嚴格安全審查與設備更新，確保耐震標準符合現行要求；一旦出事，代價難以估量。',
    },
  },
  {
    topic: '環境影響',
    pro: {
      icon: '🌿',
      title: '降低化石燃料排放',
      desc: '核電運轉時幾乎不燃燒化石燃料，生命週期碳排與風電相近，可替代部分燃煤或燃氣發電，降低溫室氣體與空氣污染。',
    },
    con: {
      icon: '☢️',
      title: '核廢料責任',
      desc: '用過核燃料的最終地質處置至今無國家完全解決，低放射性廢棄物也長期面臨選址爭議，責任可能延伸數萬年。',
    },
  },
  {
    topic: '能源安全',
    pro: {
      icon: '🔒',
      title: '能源自主韌性',
      desc: '核燃料能量密度極高，且可儲備時間長，較不受即時燃料船期波動影響，有助降低台灣對進口天然氣的短期依賴。',
    },
    con: {
      icon: '🌐',
      title: '社會信任與治理',
      desc: '地方居民、原住民族、核廢料場址周邊社區與事故風險，都涉及需要長期溝通與累積的社會信任，無法迴避。',
    },
  },
  {
    topic: '能源轉型',
    pro: {
      icon: '🔄',
      title: '過渡期橋接功能',
      desc: '在再生能源、儲能與電網建設尚未全面完成前，核電可作為穩定補充電源，降低電力系統在轉型期的供需落差。',
    },
    con: {
      icon: '💸',
      title: '成本與時間壓力',
      desc: '重啟、延役、核安升級、燃料採購與最終除役的總成本難以預估，且工期不確定，未必比持續擴大再生能源更具競爭力。',
    },
  },
]

/* ── 核能優點 ── */
const nuclearPros = [
  {
    icon: '⚡',
    title: '運轉排放低',
    desc: '發電過程不燃燒煤、油、天然氣，生命週期碳排也遠低於化石燃料，IPCC 評估中位數約每度電 12 克 CO₂，與陸域風電（11 g）相近。',
  },
  {
    icon: '📅',
    title: '穩定可調度',
    desc: '核電廠可長時間連續發電，不受天氣影響，能補足太陽能與風力的間歇性，在電力系統中承擔穩定基載角色。',
  },
  {
    icon: '🔋',
    title: '高能量密度',
    desc: '少量鈾燃料可產生大量電力。核燃料可儲備，有助於減少對即時燃料進口的依賴，提升能源安全韌性。',
  },
  {
    icon: '🌿',
    title: '土地需求小',
    desc: '與同發電量的太陽能或風電場相比，核電廠地面占用面積較小，在土地資源有限的地區較易佈署。',
  },
  {
    icon: '💨',
    title: '減少空污',
    desc: '若替代燃煤或燃氣發電，核能可降低 PM2.5、氮氧化物與硫氧化物等空氣污染物，改善周邊空氣品質。',
  },
]

/* ── 核能風險 ── */
const nuclearRisks = [
  {
    icon: '☢️',
    title: '核廢料管理',
    desc: '高階核廢料（用過燃料棒）需長期隔離管理，最終地質處置場的選址牽涉高度政治難度與社會溝通挑戰，目前全球無國家完全解決。',
  },
  {
    icon: '⚠️',
    title: '事故風險',
    desc: '車諾比（1986）與福島（2011）顯示，重大核事故雖然機率極低，但一旦發生，環境與社會衝擊可能持續數十年，撤離、污染與信任崩潰的代價極高。',
  },
  {
    icon: '💸',
    title: '成本與工期',
    desc: '新建核電廠資本成本極高，歐美多個新建案（如芬蘭奧基洛托、英國欣克利角）均有嚴重超支與延宕，資本回收期長，財務風險大。',
  },
  {
    icon: '🏚️',
    title: '老舊機組延役',
    desc: '延役或重啟老舊機組需全面審查設備老化、耐震標準、冷卻系統、安全邏輯與核燃料貯存；審查深度與速度往往成為政治與技術的拉鋸。',
  },
  {
    icon: '🌐',
    title: '戰爭與地緣政治',
    desc: '烏克蘭札波羅熱核電廠遭軍事占領，顯示核設施在軍事衝突中具有特殊且難以管控的安全風險，成為 21 世紀新型核安挑戰。',
  },
]

/* ── 數據佐證 ── */
const dataPoints = [
  { value: '~10%', label: '全球電力中核能占比', note: 'IEA 2024 數據' },
  { value: '70 Gt', label: '核能在過去 50 年避免的 CO₂ 排放量', note: 'IEA 估算' },
  { value: '12 g', label: '每度電核能生命週期碳排（中位數）', note: 'IPCC，CO₂eq/kWh' },
  { value: '第 2', label: '僅次於水力的低排放電力規模', note: 'IEA 評估' },
]

/* ── 能源轉型三層說明 ── */
const transitionLayers = [
  {
    title: '核能不是再生能源',
    desc: '核能使用鈾等核燃料，燃料需要開採、濃縮與製造，並不是像陽光、風、水循環那樣可快速自然補充，因此在定義上不屬於再生能源（Renewable Energy）。',
  },
  {
    title: '但它的運轉排放很低',
    desc: '核電在運轉時幾乎不排放二氧化碳，從生命週期來看，碳排也遠低於煤、油、天然氣。因此 IEA、OWID 等國際資料常把核能與再生能源一起放在「減少化石燃料依賴」的討論中。',
  },
  {
    title: '是否算「綠能」取決於定義',
    desc: '若「綠能」指再生能源，核能不算；若「綠能」指能減少化石燃料與空污的電力選項，部分國家與政策討論會將核能納入。歐盟永續金融分類也在特定條件下（核廢料管理與安全標準）將核能列入可被視為永續的經濟活動。',
  },
]

/* ── 四象限資料 ── */

/* ── 能源碳排對照（IPCC AR6 生命週期中位數） ── */
const energyTypeRows = [
  { icon: '💨', name: '風力（陸域）', renewShort: '再生', renewBg: 'rgba(34,197,94,.15)', renewColor: '#15803d', gco2: 11,  barColor: '#22c55e', note: '生命週期碳排最低；間歇性需搭配儲能或基載' },
  { icon: '⚛',  name: '核能',         renewShort: '非再生', renewBg: 'rgba(139,92,246,.15)', renewColor: '#6d28d9', gco2: 12,  barColor: '#8b5cf6', note: '運轉幾乎零排放；鈾燃料無法自然補充', highlight: true },
  { icon: '💧', name: '水力',          renewShort: '再生', renewBg: 'rgba(34,197,94,.15)', renewColor: '#15803d', gco2: 24,  barColor: '#34d399', note: '大型水庫蓄水後甲烷分解可能提高實際排放' },
  { icon: '🌱', name: '地熱',          renewShort: '再生', renewBg: 'rgba(34,197,94,.15)', renewColor: '#15803d', gco2: 38,  barColor: '#4ade80', note: '穩定基載；火山地熱區域可能釋出天然 CO₂' },
  { icon: '☀️', name: '太陽能（屋頂）',renewShort: '再生', renewBg: 'rgba(34,197,94,.15)', renewColor: '#15803d', gco2: 41,  barColor: '#86efac', note: '製造矽晶太陽能板需消耗較多能源' },
  { icon: '☀️', name: '太陽能（地面）',renewShort: '再生', renewBg: 'rgba(34,197,94,.15)', renewColor: '#15803d', gco2: 48,  barColor: '#86efac', note: '大型電廠效率較高，但占地面積廣' },
  { icon: '🌿', name: '生質能',        renewShort: '再生', renewBg: 'rgba(251,191,36,.2)', renewColor: '#92400e', gco2: 230, barColor: '#fbbf24', note: '燃燒直接排放 CO₂；低碳前提是植物碳吸收能完全抵銷' },
  { icon: '🔥', name: '天然氣',        renewShort: '非再生', renewBg: 'rgba(220,38,38,.1)', renewColor: '#991b1b', gco2: 490, barColor: '#f97316', note: '碳排約燃煤 60%，但甲烷洩漏會大幅拉高實際暖化效應' },
  { icon: '🛢️', name: '燃油',          renewShort: '非再生', renewBg: 'rgba(220,38,38,.1)', renewColor: '#991b1b', gco2: 650, barColor: '#ef4444', note: '主要用於交通；發電應用逐年下降' },
  { icon: '⛏️', name: '燃煤',          renewShort: '非再生', renewBg: 'rgba(220,38,38,.1)', renewColor: '#991b1b', gco2: 820, barColor: '#dc2626', note: '碳排最高；另有大量 PM2.5、SO₂、NOₓ 等空污' },
]

/* ── 全球前五國 ── */
const topNuclearShareCountries = [
  {
    country: 'France', zh: '法國',
    sharePct: 67.3, generationTwh: 364.4,
    tag: '重度依賴',
    accentBg: 'linear-gradient(135deg, rgba(219,234,254,.9), rgba(191,219,254,.7))',
    accentColor: '#1d4ed8',
    badgeBg: 'rgba(147,197,253,1)', badgeColor: '#1e3a8a',
    reason: '1970 年代石油危機後大規模發展核電，以降低化石燃料進口依賴，形成目前全球最高比例的核電依存度。',
    advantage: '電力系統高度去化石燃料化，核能支撐穩定供電與電力出口，電力碳排強度在歐洲名列前茅的低位。',
    risk: '老舊機組集中維修、乾旱導致冷卻水溫度限制、新建機組（如弗拉芒維勒）嚴重超支延誤，集中式電力系統面臨脆弱性。',
  },
  {
    country: 'Slovakia', zh: '斯洛伐克',
    sharePct: 60.6, generationTwh: 17.0,
    tag: '能源自主',
    accentBg: 'linear-gradient(135deg, rgba(220,252,231,.9), rgba(187,247,208,.6))',
    accentColor: '#15803d',
    badgeBg: 'rgba(134,239,172,1)', badgeColor: '#14532d',
    reason: '國內大型化石燃料資源有限，核能提供穩定基載電力與能源自主性，降低對進口天然氣的依賴。',
    advantage: '核能占比高，使電力系統碳排相對較低，並減少進口能源帶來的外匯支出與供應鏈風險。',
    risk: '高度依賴少數核電站，燃料供應與老舊機組的長期維護需要持續治理投入，任一機組故障都可能影響整體供電穩定。',
  },
  {
    country: 'Ukraine', zh: '烏克蘭',
    sharePct: 52.0, generationTwh: 49.9,
    tag: '戰時核安',
    accentBg: 'linear-gradient(135deg, rgba(255,247,237,.95), rgba(254,215,170,.6))',
    accentColor: '#c2410c',
    badgeBg: 'rgba(253,186,116,1)', badgeColor: '#7c2d12',
    reason: '核能長期是烏克蘭電力系統的主力，有助於降低對煤氣等化石燃料的依賴，維持電力系統的相對自主性。',
    advantage: '即使在戰爭中大量能源基礎設施遭受攻擊，核電廠仍持續提供重要電力，是維持社會基本電力供應的關鍵支柱。',
    risk: '札波羅熱核電廠在戰爭中被占領、外部電源多次中斷，顯示核設施在軍事衝突中面臨難以管控的極端安全風險。',
  },
  {
    country: 'Hungary', zh: '匈牙利',
    sharePct: 47.1, generationTwh: 15.2,
    tag: '地緣依賴',
    accentBg: 'linear-gradient(135deg, rgba(245,243,255,.9), rgba(221,214,254,.6))',
    accentColor: '#6d28d9',
    badgeBg: 'rgba(196,181,253,1)', badgeColor: '#3b0764',
    reason: 'Paks 核電廠是匈牙利主要穩定電源，政府同時推動 Paks II 新機組，以延續核電在電力結構中的主力地位。',
    advantage: '核電提供接近一半國內用電，支撐穩定供電並減少化石燃料依賴，電力碳排相對歐洲鄰國偏低。',
    risk: 'Paks II 涉及俄羅斯技術（Rosatom）與融資，在歐洲制裁俄羅斯的地緣政治背景下，面臨供應鏈、外交與技術依賴的複合風險。',
  },
  {
    country: 'Bulgaria', zh: '保加利亞',
    sharePct: 41.6, generationTwh: 15.1,
    tag: '轉型過渡',
    accentBg: 'linear-gradient(135deg, rgba(240,253,244,.95), rgba(220,252,231,.6))',
    accentColor: '#16a34a',
    badgeBg: 'rgba(134,239,172,1)', badgeColor: '#14532d',
    reason: 'Kozloduy 核電廠是國內主要大型電源，政府規劃以新核電機組維持低排放穩定電力，作為去煤轉型的橋梁。',
    advantage: '核電提供超過四成電力，降低燃煤壓力與碳排，有助於在不減損供電穩定的前提下推進能源轉型。',
    risk: '大型核電新建投資成本高、工期長，若出現成本超支，可能對電價與公共財政帶來長期壓力，影響其他能源轉型預算。',
  },
]

/* ── Chart refs ── */
const sectionRef     = ref(null)
const taiwanChartRef = ref(null)
let   taiwanChart    = null
let   observer       = null
let   chartsInit     = false

function initCharts() {
  if (chartsInit) return
  chartsInit = true
  nextTick(() => { initTaiwanChart() })
}

function initTaiwanChart() {
  const ctx = taiwanChartRef.value
  if (!ctx) return
  taiwanChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: taiwanNuclearData.years,
      datasets: [
        {
          label: '核能發電量（GWh）',
          data: taiwanNuclearData.generationGwh,
          backgroundColor: 'rgba(100,40,180,0.08)',
          borderColor: 'rgba(100,40,180,0.85)',
          borderWidth: 2.5,
          pointRadius: 4,
          pointHoverRadius: 6,
          fill: true,
          tension: 0.3,
          yAxisID: 'yGwh',
        },
        {
          label: '核能占比（%）',
          data: taiwanNuclearData.sharePct,
          borderColor: 'rgba(220,38,38,0.8)',
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderDash: [5, 3],
          pointRadius: 3,
          pointHoverRadius: 5,
          fill: false,
          tension: 0.3,
          yAxisID: 'yPct',
        },
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1200, easing: 'easeOutQuart' },
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: { font: { size: 11 }, color: '#475569', boxWidth: 20 },
        },
        tooltip: {
          callbacks: {
            label: c => c.datasetIndex === 0
              ? ` ${c.parsed.y.toLocaleString()} GWh`
              : ` ${c.parsed.y}%`
          }
        }
      },
      scales: {
        x: {
          ticks: { font: { size: 10 }, color: '#64748b' },
          grid: { display: false },
          border: { color: 'transparent' },
        },
        yGwh: {
          type: 'linear',
          position: 'left',
          beginAtZero: true,
          max: 50000,
          ticks: { callback: v => `${(v/1000).toFixed(0)}k`, font: { size: 10 }, color: '#6428b4' },
          grid: { color: 'rgba(148,163,184,0.12)' },
          border: { color: 'transparent' },
          title: { display: true, text: 'GWh', color: '#6428b4', font: { size: 10 } },
        },
        yPct: {
          type: 'linear',
          position: 'right',
          min: 0, max: 22,
          ticks: { callback: v => `${v}%`, font: { size: 10 }, color: '#dc2626' },
          grid: { drawOnChartArea: false },
          border: { color: 'transparent' },
          title: { display: true, text: '占比 %', color: '#dc2626', font: { size: 10 } },
        },
      }
    }
  })
}

function switchTab(id) {
  activeTab.value = id
  nextTick(() => { taiwanChart?.resize() })
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
})
</script>

<style scoped>
/* ═══ 整體 ════════════════════════════════════════════════ */
.nuc { width: 100%; padding: 8px 0 52px; }

.nuc-header { text-align: center; margin-bottom: 40px; padding: 0 8px; }
.nuc-main-title {
  font-size: clamp(1.3rem, 2.6vw, 1.9rem);
  font-weight: 900;
  color: #3b0764;
  line-height: 1.25;
  margin-bottom: 14px;
  letter-spacing: -0.3px;
}
.nuc-subtitle {
  font-size: clamp(0.88rem, 1.4vw, 1rem);
  color: #475569;
  line-height: 1.85;
  max-width: 640px;
  margin: 0 auto;
}

/* ═══ Tabs ════════════════════════════════════════════════ */
.nuc-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 36px;
  padding: 6px;
  background: rgba(255,255,255,.65);
  border: 1px solid rgba(100,40,180,.22);
  border-radius: 18px;
  backdrop-filter: blur(4px);
}
.nuc-tab {
  flex: 1;
  min-width: 120px;
  padding: 13px 16px;
  border: none;
  border-radius: 12px;
  background: transparent;
  color: #4c1d95;
  font-size: 0.88rem;
  font-weight: 800;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.18s;
  white-space: nowrap;
}
.nuc-tab:hover:not(.nuc-tab--active) { background: rgba(100,40,180,.1); transform: translateY(-1px); }
.nuc-tab--active {
  background: linear-gradient(135deg, #7c3aed, #6428b4);
  color: #fff;
  box-shadow: 0 6px 18px rgba(100,40,180,.28);
}

/* ═══ 通用版面 ════════════════════════════════════════════ */
.nuc-panel { min-height: 200px; }
.nuc-block { margin-bottom: 44px; }
.nuc-block-title {
  font-size: 1.05rem;
  font-weight: 900;
  color: #5b21b6;
  margin-bottom: 20px;
  padding-left: 14px;
  border-left: 4px solid #7c3aed;
  line-height: 1.4;
}
.nuc-section-lead {
  color: #475569;
  font-size: 0.93rem;
  line-height: 1.8;
  margin-bottom: 22px;
}
.nuc-source {
  font-size: 0.76rem;
  color: #94a3b8;
  margin-top: 16px;
  line-height: 1.65;
}
.nuc-source a { color: #7c3aed; text-decoration: none; }
.nuc-source a:hover { text-decoration: underline; }
.nuc-source--center { text-align: center; }

/* ═══ Tab 1：Layout ════════════════════════════════════════ */
.nuc-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.nuc-card {
  background: rgba(255,255,255,.82);
  border: 1px solid rgba(100,40,180,.14);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 4px 18px rgba(15,23,42,.06);
}
.nuc-card-title {
  font-size: 0.95rem;
  font-weight: 800;
  color: #3b0764;
  margin-bottom: 16px;
}
.nuc-chart-wrap {
  width: 100%;
  height: 240px;
  margin-bottom: 16px;
  position: relative;
}
.nuc-card-desc {
  font-size: 0.83rem;
  color: #475569;
  line-height: 1.75;
  margin: 0 0 8px;
}

/* 數字卡 */
.nuc-stat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 16px;
}
.nuc-stat-block {
  background: rgba(233,213,255,.7);
  border: 1px solid rgba(100,40,180,.22);
  border-radius: 14px;
  padding: 14px 12px 12px;
}
.nuc-stat-block--b { background: rgba(253,186,116,.55); border-color: rgba(194,65,12,.28); }
.nuc-stat-block--c { background: rgba(196,181,253,.55); border-color: rgba(109,40,217,.28); }
.nuc-stat-block--d { background: rgba(167,243,208,.55); border-color: rgba(16,185,129,.28); }
.nuc-stat-label { font-size: 0.72rem; font-weight: 700; color: #475569; margin-bottom: 4px; line-height: 1.35; }
.nuc-stat-num { font-size: 1.55rem; font-weight: 900; color: #3b0764; line-height: 1.1; }
.nuc-stat-num--sm { font-size: 1.05rem; }
.nuc-stat-unit { font-size: 0.85rem; font-weight: 700; color: #5b21b6; margin-left: 2px; }
.nuc-stat-note { font-size: 0.68rem; color: #64748b; margin-top: 4px; line-height: 1.35; }
.nuc-final-note {
  font-size: 0.82rem;
  color: #4c1d95;
  font-weight: 700;
  background: rgba(233,213,255,.45);
  border-radius: 10px;
  padding: 10px 14px;
  margin: 0;
  line-height: 1.6;
}

/* ── 時間軸 ──────────────────────────────────── */
.nuc-timeline {
  position: relative;
  padding-left: 32px;
  border-left: 2px solid rgba(100,40,180,.25);
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.nuc-timeline-item { position: relative; }
.nuc-timeline-dot {
  position: absolute;
  left: -39px;
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7c3aed, #6428b4);
  border: 2px solid #fff;
  box-shadow: 0 0 0 3px rgba(100,40,180,.2);
}
.nuc-timeline-date {
  font-size: 0.75rem;
  font-weight: 800;
  color: #7c3aed;
  letter-spacing: 0.3px;
  margin-bottom: 4px;
}
.nuc-timeline-title {
  font-size: 0.97rem;
  font-weight: 900;
  color: #1e1b4b;
  margin-bottom: 6px;
  line-height: 1.4;
}
.nuc-timeline-desc {
  font-size: 0.83rem;
  color: #475569;
  line-height: 1.75;
  margin: 0;
}

/* ── 論述配對對照 ─────────────────────────────── */
.nuc-pair-header {
  display: grid;
  grid-template-columns: 1fr 80px 1fr;
  gap: 0;
  margin-bottom: 10px;
  padding: 0 4px;
}
.nuc-pair-header-side {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 0.85rem;
  font-weight: 900;
  padding: 10px 16px;
  border-radius: 12px 12px 0 0;
}
.nuc-pair-header-side--pro {
  background: rgba(109,40,217,.12);
  color: #4c1d95;
  border: 1px solid rgba(109,40,217,.18);
  border-bottom: none;
}
.nuc-pair-header-side--con {
  background: rgba(220,38,38,.1);
  color: #991b1b;
  border: 1px solid rgba(220,38,38,.18);
  border-bottom: none;
  justify-content: flex-end;
}
.nuc-pair-header-center {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.72rem;
  font-weight: 800;
  color: #94a3b8;
  letter-spacing: 0.5px;
}

.nuc-pair-rows {
  display: flex;
  flex-direction: column;
  gap: 0;
  border-radius: 0 0 16px 16px;
  overflow: hidden;
}
.nuc-pair-row {
  display: grid;
  grid-template-columns: 1fr 80px 1fr;
  align-items: stretch;
  border-bottom: 1px solid rgba(148,163,184,.12);
}
.nuc-pair-row:last-child { border-bottom: none; }
.nuc-pair-row:nth-child(odd) .nuc-pair-side--pro   { background: rgba(237,233,254,.55); }
.nuc-pair-row:nth-child(odd) .nuc-pair-side--con   { background: rgba(254,242,242,.65); }
.nuc-pair-row:nth-child(even) .nuc-pair-side--pro  { background: rgba(233,213,255,.4); }
.nuc-pair-row:nth-child(even) .nuc-pair-side--con  { background: rgba(255,228,228,.5); }

.nuc-pair-side {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 20px 18px;
  border: 1px solid transparent;
}
.nuc-pair-side--pro {
  border-left: 1px solid rgba(109,40,217,.15);
  border-right: none;
}
.nuc-pair-side--con {
  border-right: 1px solid rgba(220,38,38,.15);
  border-left: none;
}

.nuc-pair-icon-wrap {
  font-size: 1.4rem;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 1;
}
.nuc-pair-icon-wrap--pro { background: rgba(109,40,217,.12); }
.nuc-pair-icon-wrap--con { background: rgba(220,38,38,.1); }

.nuc-pair-content { flex: 1; }
.nuc-pair-title {
  font-size: 0.92rem;
  font-weight: 900;
  margin-bottom: 5px;
  line-height: 1.3;
}
.nuc-pair-title--pro { color: #4c1d95; }
.nuc-pair-title--con { color: #991b1b; }
.nuc-pair-desc {
  font-size: 0.81rem;
  color: #4b5563;
  line-height: 1.75;
  margin: 0;
}

.nuc-pair-center {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 4px;
  background: rgba(248,250,252,.85);
  border-top: 1px solid rgba(148,163,184,.12);
  border-bottom: 1px solid rgba(148,163,184,.12);
}
.nuc-pair-topic-badge {
  font-size: 0.68rem;
  font-weight: 800;
  color: #64748b;
  background: rgba(226,232,240,.8);
  border: 1px solid rgba(148,163,184,.3);
  border-radius: 99px;
  padding: 4px 8px;
  text-align: center;
  white-space: nowrap;
  writing-mode: initial;
}

/* ═══ Tab 2：優缺點 ════════════════════════════════════════ */
.nuc-pc-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: start;
}
.nuc-pc-col {
  border-radius: 20px;
  padding: 24px;
}
.nuc-pc-col--pro {
  background: rgba(240,253,244,.8);
  border: 1px solid rgba(21,128,61,.15);
}
.nuc-pc-col--risk {
  background: rgba(254,242,242,.8);
  border: 1px solid rgba(220,38,38,.15);
}
.nuc-pc-col-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}
.nuc-pc-col-icon { font-size: 1.3rem; }
.nuc-pc-col-title {
  font-size: 1.05rem;
  font-weight: 900;
  color: #1e1b4b;
  margin: 0;
}
.nuc-pc-col--risk .nuc-pc-col-title { color: #7f1d1d; }
.nuc-pc-col-lead {
  font-size: 0.82rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0,0,0,.07);
}
.nuc-pc-list { display: flex; flex-direction: column; gap: 14px; }
.nuc-pc-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.nuc-pc-item-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
  margin-top: 1px;
}
.nuc-pc-item-body { flex: 1; }
.nuc-pc-item-title {
  font-size: 0.88rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 3px;
}
.nuc-pc-item--risk .nuc-pc-item-title { color: #7f1d1d; }
.nuc-pc-item-desc { font-size: 0.78rem; color: #4b5563; line-height: 1.7; margin: 0; }

/* 數據卡 */
.nuc-data-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-bottom: 14px;
}
.nuc-data-card {
  background: rgba(237,233,254,.7);
  border: 1px solid rgba(100,40,180,.18);
  border-radius: 16px;
  padding: 18px 14px;
  text-align: center;
}
.nuc-data-val {
  font-size: 1.8rem;
  font-weight: 900;
  color: #4c1d95;
  line-height: 1.1;
  margin-bottom: 6px;
}
.nuc-data-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: #1e1b4b;
  line-height: 1.4;
  margin-bottom: 6px;
}
.nuc-data-note {
  font-size: 0.7rem;
  color: #6d28d9;
  font-style: italic;
}

/* ═══ Tab 3：能源轉型 ══════════════════════════════════════ */
.nuc-layer-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}
.nuc-layer-card {
  display: flex;
  gap: 18px;
  align-items: flex-start;
  background: rgba(255,255,255,.8);
  border: 1px solid rgba(100,40,180,.15);
  border-radius: 18px;
  padding: 22px 24px;
  box-shadow: 0 3px 14px rgba(15,23,42,.05);
}
.nuc-layer-num {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7c3aed, #6428b4);
  color: #fff;
  font-size: 1rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.nuc-layer-body { flex: 1; }
.nuc-layer-title { font-size: 1.05rem; font-weight: 900; color: #1e1b4b; margin-bottom: 8px; }
.nuc-layer-desc { font-size: 0.92rem; color: #475569; line-height: 1.8; margin: 0; }

.nuc-summary-box {
  background: linear-gradient(135deg, rgba(109,40,217,.12), rgba(100,40,180,.08));
  border: 1.5px solid rgba(109,40,217,.3);
  border-radius: 16px;
  padding: 20px 24px;
  text-align: center;
}
.nuc-summary-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: #6d28d9;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}
.nuc-summary-text {
  font-size: 1.1rem;
  font-weight: 900;
  color: #3b0764;
  line-height: 1.4;
}

/* 長條圖 */
.nuc-bar-chart {
  background: rgba(248,250,252,.9);
  border: 1px solid rgba(15,23,42,.07);
  border-radius: 16px;
  padding: 20px 24px 14px;
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.nuc-bar-row {
  display: grid;
  grid-template-columns: 160px 1fr 52px;
  align-items: center;
  gap: 12px;
}
.nuc-bar-label {
  display: flex;
  align-items: center;
  gap: 8px;
}
.nuc-bar-icon { font-size: 1.1rem; flex-shrink: 0; }
.nuc-bar-name { font-size: 0.92rem; font-weight: 700; color: #1e293b; }
.nuc-bar-track {
  height: 12px;
  background: rgba(15,23,42,.06);
  border-radius: 6px;
  overflow: hidden;
}
.nuc-bar-fill {
  height: 100%;
  border-radius: 6px;
  transition: width 0.7s ease;
  min-width: 4px;
}
.nuc-bar-val {
  font-size: 0.85rem;
  font-weight: 800;
  color: #374151;
  text-align: right;
}
.nuc-bar-axis-label {
  text-align: right;
  font-size: 0.75rem;
  color: #94a3b8;
  margin-top: 2px;
}

/* 能源說明卡片 */
.nuc-etype-desc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 12px;
  margin-bottom: 14px;
}
.nuc-etype-desc-card {
  background: #fff;
  border: 1px solid rgba(15,23,42,.08);
  border-radius: 14px;
  padding: 16px 18px;
}
.nuc-etype-desc-card--highlight {
  background: rgba(237,233,254,.4);
  border-color: rgba(139,92,246,.2);
}
.nuc-etype-desc-head {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}
.nuc-etype-desc-icon { font-size: 1.1rem; }
.nuc-etype-desc-name { font-size: 0.95rem; font-weight: 800; color: #1e293b; }
.nuc-etype-desc-badge {
  font-size: 0.72rem;
  font-weight: 700;
  padding: 2px 9px;
  border-radius: 20px;
  white-space: nowrap;
}
.nuc-etype-desc-text {
  font-size: 0.85rem;
  color: #4b5563;
  line-height: 1.7;
  margin: 0;
}

/* ═══ Tab 4：全球前五 ══════════════════════════════════════ */
.nuc-country-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.nuc-country-card {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(15,23,42,.08);
  border: 1px solid rgba(255,255,255,.9);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}
.nuc-country-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(15,23,42,.13); }
.nuc-country-head { padding: 22px 20px 18px; }
.nuc-country-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.nuc-country-cname {
  font-size: 1.4rem;
  font-weight: 900;
  color: #1e1b4b;
}
.nuc-country-badge {
  font-size: 0.72rem;
  font-weight: 800;
  padding: 3px 10px;
  border-radius: 99px;
  white-space: nowrap;
}
.nuc-country-vis { }
.nuc-vis-big-num {
  font-size: 2.2rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 10px;
}
.nuc-vis-big-unit {
  font-size: 1rem;
  font-weight: 700;
  margin-left: 2px;
}
.nuc-vis-bar-track {
  height: 8px;
  background: rgba(0,0,0,.1);
  border-radius: 99px;
  overflow: hidden;
  margin-bottom: 6px;
}
.nuc-vis-bar-fill {
  height: 100%;
  border-radius: 99px;
}
.nuc-vis-bar-label {
  font-size: 0.69rem;
  color: rgba(15,23,42,.55);
  font-weight: 600;
}
.nuc-country-body {
  padding: 18px 20px 20px;
  background: rgba(255,255,255,.92);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.nuc-country-fact { display: flex; flex-direction: column; gap: 3px; }
.nuc-fact-lbl {
  font-size: 0.7rem;
  font-weight: 800;
  color: #6d28d9;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}
.nuc-fact-lbl--risk { color: #dc2626; }
.nuc-fact-txt { font-size: 0.82rem; color: #374151; line-height: 1.7; margin: 0; }
.nuc-country-fact--risk .nuc-fact-txt { color: #7f1d1d; }

/* ═══ 響應式 ════════════════════════════════════════════════ */
@media (max-width: 1100px) {
  .nuc-country-grid { grid-template-columns: repeat(2, 1fr); }
  .nuc-data-cards { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .nuc-grid-2 { grid-template-columns: 1fr; }
  .nuc-pair-header { grid-template-columns: 1fr 60px 1fr; }
  .nuc-pair-row { grid-template-columns: 1fr 60px 1fr; }
  .nuc-pair-side { padding: 14px 12px; gap: 8px; }
  .nuc-pair-icon-wrap { width: 28px; height: 28px; font-size: 1.1rem; }
  .nuc-pair-topic-badge { font-size: 0.62rem; padding: 3px 5px; }
  .nuc-country-grid { grid-template-columns: 1fr; }
  .nuc-data-cards { grid-template-columns: repeat(2, 1fr); }
  .nuc-pc-split { grid-template-columns: 1fr; }
  .nuc-tabs { gap: 6px; }
  .nuc-tab { min-width: 80px; padding: 11px 10px; font-size: 0.82rem; }
}
</style>
