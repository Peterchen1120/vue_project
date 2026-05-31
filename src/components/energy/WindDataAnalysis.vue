<template>
  <section class="wind-data-section" ref="sectionRef">

    <!-- 標題區 -->
    <div class="wind-data-header">
      <h2 class="wind-data-main-title">風力發電：離岸崛起，海洋議題浮現</h2>
      <p class="wind-data-subtitle">從台灣風力發電現況、歷年趨勢，到離岸風電的崛起與環境社會課題，理解風電在能源轉型中的真實樣貌。</p>
    </div>

    <!-- 分頁切換 -->
    <div class="wind-tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="wind-tab-btn"
        :class="{ active: activeTab === tab.id }"
        @click="switchTab(tab.id)"
      >
        <span class="wind-tab-num">{{ tab.num }}</span>
        <span class="wind-tab-label">{{ tab.label }}</span>
      </button>
    </div>

    <!-- ══ Tab 01：台灣風力發電現況 ══ -->
    <div v-show="activeTab === 'status'" class="wind-tab-content">
      <div class="wind-block-title-bar">
        <h3 class="wind-block-title">台灣風力發電現況</h3>
      </div>
      <div class="wind-block-grid">

        <!-- 圓環圖 -->
        <div class="wind-card">
          <h4 class="wind-card-title">台灣再生能源版圖：風力已成為第二大來源</h4>
          <div class="wind-chart-wrap">
            <canvas ref="renewableChartRef"></canvas>
          </div>
          <p class="wind-card-desc">2025 年台灣再生能源發電量中，太陽光電居首（42.25%），風力發電已成為第二大來源（32.27%），占比約為三成，是能源轉型中不可忽視的主力之一。</p>
          <p class="wind-source">
            資料來源：<a href="https://www.taipower.com.tw/2289/2363/2380/2383/10556/normalPost" target="_blank" rel="noopener noreferrer">台灣電力公司｜再生能源發展概況（資料截至 2025 年，更新日期 2026-03-05）</a>
          </p>
        </div>

        <!-- 數字資訊卡 -->
        <div class="wind-card">
          <h4 class="wind-card-title">在台灣電力系統中，風力發電的角色</h4>

          <div class="wind-stat-grid">
            <div class="wind-stat-card wind-stat-card--primary">
              <div class="wind-stat-sub">風力占再生能源發電量</div>
              <div class="wind-stat-num">32.27<span class="wind-stat-unit">%</span></div>
              <div class="wind-stat-name">台灣第二大再生能源</div>
            </div>
            <div class="wind-stat-card">
              <div class="wind-stat-sub">2025 年風力發電量</div>
              <div class="wind-stat-num wind-stat-num--md">12,202<span class="wind-stat-unit">.451 GWh</span></div>
              <div class="wind-stat-name">約 122.0 億度綠電</div>
            </div>
            <div class="wind-stat-card">
              <div class="wind-stat-sub">2025 年底裝置容量</div>
              <div class="wind-stat-num wind-stat-num--md">4,517<span class="wind-stat-unit"> MW</span></div>
              <div class="wind-stat-name">陸域與離岸風電合計</div>
            </div>
          </div>

          <p class="wind-card-desc">2025 年台灣風力發電量約 122.0 億度，占再生能源發電量約 32.27%，已成為僅次於太陽光電的重要再生能源來源。台灣風力發電近年的增加，與離岸風場陸續投入運轉密切相關，也使風電成為能源轉型中不可忽視的主力之一。</p>
          <p class="wind-source">
            資料來源：<a href="https://www.taipower.com.tw/2289/2363/2380/2383/10556/normalPost" target="_blank" rel="noopener noreferrer">台灣電力公司｜再生能源發展概況（2026-03-05）</a>
          </p>
        </div>

      </div>
    </div>

    <!-- ══ Tab 02：歷年趨勢 ══ -->
    <div v-show="activeTab === 'trend'" class="wind-tab-content">
      <div class="wind-block-title-bar">
        <h3 class="wind-block-title">台灣風力發電歷年趨勢（2006–2025）</h3>
      </div>
      <div class="wind-card">
        <div class="wind-trend-pair">
          <div class="wind-trend-col">
            <h4 class="wind-trend-subtitle">風力發電年發電量（GWh）</h4>
            <div class="wind-chart-wrap wind-chart-wrap--trend">
              <canvas ref="trendGwhChartRef"></canvas>
            </div>
          </div>
          <div class="wind-trend-col">
            <h4 class="wind-trend-subtitle">風力占再生能源發電量比例（%）</h4>
            <div class="wind-chart-wrap wind-chart-wrap--trend">
              <canvas ref="trendPctChartRef"></canvas>
            </div>
          </div>
        </div>
        <p class="wind-card-desc">近 20 年資料顯示，台灣風力發電量由 2006 年的 276.1 GWh，增加至 2025 年的 12,202.451 GWh，約成長 44 倍。風力占再生能源發電量的比例，也由 2006 年的 3.57% 提升至 2025 年的 32.27%。2011 年前後陸域風電已具規模，但 2023 年後的快速上升，主要由離岸風電商轉帶動。</p>
        <p class="wind-source">
          資料來源（2006–2024）：<a href="https://www.esist.org.tw/attachments/handbook/2024/ebook/2024EnergyStaHandBook.pdf" target="_blank" rel="noopener noreferrer">經濟部能源署｜2024 能源統計手冊：再生能源發電量（數量／占比）</a>；
          2025 年：<a href="https://www.taipower.com.tw/2289/2363/2380/2383/10556/normalPost" target="_blank" rel="noopener noreferrer">台灣電力公司｜再生能源發展概況</a>
        </p>
      </div>
    </div>

    <!-- ══ Tab 03：離岸崛起 ══ -->
    <div v-show="activeTab === 'offshore'" class="wind-tab-content">
      <div class="wind-block-title-bar">
        <h3 class="wind-block-title">台灣風電重心轉向離岸</h3>
      </div>
      <div class="wind-block-grid">

        <!-- 堆疊長條圖 -->
        <div class="wind-card">
          <h4 class="wind-card-title">風力發電成長從哪裡來？陸域與離岸發電量比較</h4>
          <div class="wind-chart-wrap wind-chart-wrap--bar">
            <canvas ref="stackedBarChartRef"></canvas>
          </div>
          <p class="wind-card-desc">從資料可以清楚看到：2023 年起，離岸風電已成為主體，而非附加角色。2024 年離岸風電占全部風力發電量約 81.94%，台灣風電實質上已是以離岸為主的體系。</p>
          <p class="wind-source">
            資料來源：<a href="https://www.ly.gov.tw/Pages/Detail.aspx?nodeid=56084&pid=253282" target="_blank" rel="noopener noreferrer">立法院預算中心（原始資料：經濟部能源署能源統計月報）</a>
          </p>
        </div>

        <!-- 重點數字卡 -->
        <div class="wind-card">
          <h4 class="wind-card-title">離岸風電：從輔助到主體</h4>

          <div class="wind-offshore-stats">
            <div class="wind-offshore-stat wind-offshore-stat--highlight">
              <div class="wind-offshore-badge">2024 年</div>
              <div class="wind-offshore-num">81.94<span class="wind-offshore-unit">%</span></div>
              <div class="wind-offshore-desc">離岸占全部風力發電量<br>台灣風電已以離岸為主</div>
            </div>

            <div class="wind-offshore-compare">
              <div class="wind-compare-row">
                <div class="wind-compare-label">離岸發電量（2020 → 2024）</div>
                <div class="wind-compare-values">
                  <span class="wind-compare-from">516 GWh</span>
                  <span class="wind-compare-arrow">→</span>
                  <span class="wind-compare-to">8,611 GWh</span>
                </div>
                <div class="wind-compare-note">成長約 16.7 倍</div>
              </div>
              <div class="wind-compare-divider"></div>
              <div class="wind-compare-row">
                <div class="wind-compare-label">陸域發電量（2020 → 2024）</div>
                <div class="wind-compare-values">
                  <span class="wind-compare-from wind-compare-from--muted">1,793 GWh</span>
                  <span class="wind-compare-arrow">→</span>
                  <span class="wind-compare-to wind-compare-to--muted">1,898 GWh</span>
                </div>
                <div class="wind-compare-note wind-compare-note--muted">變化相對有限</div>
              </div>
            </div>
          </div>

          <p class="wind-card-desc">從 2020 到 2024 年，台灣陸域風力發電量僅由 1,793 GWh 增加至 1,898 GWh；同一期間，離岸風力發電量卻由 516 GWh 大幅成長至 8,611 GWh。因此，討論台灣風力發電的發展價值與環境代價時，應將焦點放在離岸風電，而非只停留在一般陸上風車的印象。</p>
          <p class="wind-source">
            資料來源：<a href="https://www.ly.gov.tw/Pages/Detail.aspx?nodeid=56084&pid=253282" target="_blank" rel="noopener noreferrer">立法院預算中心（原始資料：經濟部能源署能源統計月報）</a>
          </p>
        </div>

      </div>
    </div>

    <!-- ══ Tab 04：發展挑戰 ══ -->
    <div v-show="activeTab === 'challenge'" class="wind-tab-content">
      <div class="wind-block-title-bar">
        <h3 class="wind-block-title">離岸風電的環境與社會課題</h3>
      </div>

      <p class="wind-challenge-lead">
        離岸風電在運轉發電時不需燃燒燃料，但風場施工與海域使用仍需要面對生態保育與社會協調問題。
      </p>

      <div class="wind-challenge-grid">

        <!-- 議題卡 01：水下噪音 -->
        <div class="wind-issue-card wind-issue-card--noise">
          <div class="wind-issue-header">
            <div class="wind-issue-icon">
              <svg viewBox="0 0 48 48" width="28" height="28" fill="none" aria-hidden="true">
                <circle cx="24" cy="24" r="10" fill="rgba(6,182,212,.22)" stroke="#06b6d4" stroke-width="2"/>
                <circle cx="24" cy="24" r="17" fill="none" stroke="rgba(6,182,212,.38)" stroke-width="1.5" stroke-dasharray="4 3"/>
                <circle cx="24" cy="24" r="23" fill="none" stroke="rgba(6,182,212,.18)" stroke-width="1" stroke-dasharray="4 4"/>
                <line x1="24" y1="14" x2="24" y2="6" stroke="#0891b2" stroke-width="2" stroke-linecap="round"/>
                <path d="M20 10 L24 6 L28 10" fill="none" stroke="#0891b2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h4 class="wind-issue-title">水下噪音與鯨豚生態</h4>
          </div>
          <p class="wind-issue-text">離岸風機基礎施工時，海床打樁會產生水下噪音，可能干擾依賴聲音活動與溝通的鯨豚。台灣西部海域鄰近中華白海豚重要棲息環境，因此施工過程必須搭配噪音控制、聲學監測與鯨豚觀察。</p>

          <div class="wind-reg-table">
            <div class="wind-reg-title">官方環評管制規範</div>
            <div class="wind-reg-row">
              <span class="wind-reg-key">噪音監測位置</span>
              <span class="wind-reg-val">距打樁位置 <strong>750 m</strong></span>
            </div>
            <div class="wind-reg-row">
              <span class="wind-reg-key">聲曝值限制</span>
              <span class="wind-reg-val">95% 監測數據不超過 <strong>160 dB</strong></span>
            </div>
            <div class="wind-reg-row">
              <span class="wind-reg-key">警戒應變值</span>
              <span class="wind-reg-val">單次事件達 <strong>158 dB</strong> 時採取應變</span>
            </div>
            <div class="wind-reg-row">
              <span class="wind-reg-key">鯨豚警戒區</span>
              <span class="wind-reg-val">風機中心 <strong>750 m</strong> 範圍內</span>
            </div>
            <div class="wind-reg-row">
              <span class="wind-reg-key">鯨豚進入警戒區</span>
              <span class="wind-reg-val">停止打樁，待鯨豚離開 30 分鐘後再緩啟動</span>
            </div>
          </div>

          <p class="wind-source">
            資料來源：<a href="https://enews.moenv.gov.tw/DisplayFile.aspx?FileID=BFF911C2EEFD887F" target="_blank" rel="noopener noreferrer">環境部｜風力發電離岸系統開發行為環境影響評估審查事項檢核表（113 年 3 月版）</a>
          </p>
        </div>

        <!-- 議題卡 02：白海豚保育 -->
        <div class="wind-issue-card wind-issue-card--dolphin">
          <div class="wind-issue-header">
            <div class="wind-issue-icon">
              <svg viewBox="0 0 48 48" width="28" height="28" fill="none" aria-hidden="true">
                <path d="M8 28 Q16 14 28 18 Q36 22 40 16 Q38 26 30 30 Q22 34 12 32 Z" fill="rgba(6,182,212,.22)" stroke="#06b6d4" stroke-width="1.8" stroke-linejoin="round"/>
                <circle cx="14" cy="26" r="2.5" fill="#0891b2"/>
                <path d="M36 18 Q40 12 44 14" fill="none" stroke="#0891b2" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
            </div>
            <h4 class="wind-issue-title">中華白海豚與海洋生態保育</h4>
          </div>
          <p class="wind-issue-text">台灣離岸風電開發需特別注意中華白海豚等海洋生物。開發規劃應避開重要棲息環境；施工期間則需透過水下聲學監測、海上目視調查與氣泡簾幕等噪音防制措施，降低對鯨豚活動的干擾。</p>

          <div class="wind-reg-table">
            <div class="wind-reg-title">主要保育措施</div>
            <div class="wind-reg-row">
              <span class="wind-reg-key">選址避讓</span>
              <span class="wind-reg-val">開發場址應避開中華白海豚重要棲息環境</span>
            </div>
            <div class="wind-reg-row">
              <span class="wind-reg-key">水下聲學監測</span>
              <span class="wind-reg-val">施工全程進行水下聲學即時監測</span>
            </div>
            <div class="wind-reg-row">
              <span class="wind-reg-key">海上目視調查</span>
              <span class="wind-reg-val">人員在施工區附近進行鯨豚出沒目視觀察</span>
            </div>
            <div class="wind-reg-row">
              <span class="wind-reg-key">氣泡簾幕</span>
              <span class="wind-reg-val">打樁前施放氣泡簾幕，減少水下噪音傳播範圍</span>
            </div>
            <div class="wind-reg-row">
              <span class="wind-reg-key">停工應變</span>
              <span class="wind-reg-val">白海豚進入警戒區時立即停止打樁作業</span>
            </div>
          </div>

          <p class="wind-source">
            資料來源：<a href="https://www.moeaea.gov.tw/ECW/populace/news/News.aspx?kind=9&menu_id=4360&news_id=16369" target="_blank" rel="noopener noreferrer">經濟部能源署｜離岸風電與環境生態並重：落實白海豚保育措施</a>；
            <a href="https://enews.moenv.gov.tw/DisplayFile.aspx?FileID=BFF911C2EEFD887F" target="_blank" rel="noopener noreferrer">環境部環評審查事項檢核表</a>
          </p>
        </div>

        <!-- 議題卡 03：鳥類保育 -->
        <div class="wind-issue-card wind-issue-card--bird">
          <div class="wind-issue-header">
            <div class="wind-issue-icon">
              <svg viewBox="0 0 48 48" width="28" height="28" fill="none" aria-hidden="true">
                <path d="M10 30 Q18 18 28 20 Q34 22 38 16" fill="none" stroke="#0891b2" stroke-width="2" stroke-linecap="round"/>
                <path d="M28 20 Q32 14 40 12 Q36 20 32 22 Z" fill="rgba(6,182,212,.3)" stroke="#06b6d4" stroke-width="1.5" stroke-linejoin="round"/>
                <circle cx="38" cy="13" r="2.5" fill="#0891b2"/>
              </svg>
            </div>
            <h4 class="wind-issue-title">鳥類與遷徙路徑</h4>
          </div>
          <p class="wind-issue-text">海上風場也可能與鳥類活動路徑重疊。環評檢核要求風機與葉片之間保留一定距離，並要求開發單位提出環境監測資料與必要時的風機降轉或停機機制，以降低對鳥類活動的影響。</p>

          <div class="wind-reg-table">
            <div class="wind-reg-title">環評規範（鳥類保護）</div>
            <div class="wind-reg-row">
              <span class="wind-reg-key">風機間距</span>
              <span class="wind-reg-val">大於 <strong>700 公尺</strong></span>
            </div>
            <div class="wind-reg-row">
              <span class="wind-reg-key">葉片及葉片間距</span>
              <span class="wind-reg-val">大於 <strong>400 公尺</strong></span>
            </div>
            <div class="wind-reg-row">
              <span class="wind-reg-key">風場間鳥類廊道</span>
              <span class="wind-reg-val">同集團風場至少 <strong>2 公里</strong></span>
            </div>
            <div class="wind-reg-row">
              <span class="wind-reg-key">後續監測</span>
              <span class="wind-reg-val">提出鳥類監測與可行降轉／停機機制</span>
            </div>
          </div>

          <p class="wind-source">
            資料來源：<a href="https://enews.moenv.gov.tw/DisplayFile.aspx?FileID=BFF911C2EEFD887F" target="_blank" rel="noopener noreferrer">環境部｜風力發電離岸系統開發行為環境影響評估審查事項檢核表（113 年 3 月版）</a>
          </p>
        </div>

        <!-- 議題卡 04：漁業與海域使用 -->
        <div class="wind-issue-card wind-issue-card--fishing">
          <div class="wind-issue-header">
            <div class="wind-issue-icon">
              <svg viewBox="0 0 48 48" width="28" height="28" fill="none" aria-hidden="true">
                <path d="M6 36 Q14 28 24 30 Q34 32 42 24" fill="none" stroke="#0891b2" stroke-width="2" stroke-linecap="round"/>
                <rect x="16" y="14" width="18" height="12" rx="4" fill="rgba(6,182,212,.2)" stroke="#06b6d4" stroke-width="1.8"/>
                <line x1="25" y1="26" x2="25" y2="34" stroke="#0891b2" stroke-width="2" stroke-linecap="round"/>
                <line x1="19" y1="32" x2="31" y2="32" stroke="#0891b2" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <h4 class="wind-issue-title">漁業權益與海域使用</h4>
          </div>
          <p class="wind-issue-text">離岸風場使用的海域，原本可能也是漁民作業與船隻航行的空間。當風電開發涉及漁業權變更、撤銷或停止時，開發商需依法與相關權利人協調補償。因此，離岸風電不只是發電技術問題，也涉及海域使用與地方生計的協調。</p>

          <div class="wind-sea-roles">
            <div class="wind-sea-role">
              <div class="wind-sea-dot wind-sea-dot--green"></div>
              <span>綠電開發</span>
            </div>
            <div class="wind-sea-role">
              <div class="wind-sea-dot wind-sea-dot--blue"></div>
              <span>漁業活動</span>
            </div>
            <div class="wind-sea-role">
              <div class="wind-sea-dot wind-sea-dot--teal"></div>
              <span>海洋生態</span>
            </div>
            <div class="wind-sea-role">
              <div class="wind-sea-dot wind-sea-dot--slate"></div>
              <span>航行安全</span>
            </div>
          </div>

          <p class="wind-issue-text" style="margin-top:14px">這四種角色在同一片海域中共存，離岸風電開發需要在它們之間取得平衡，而非單純以發電效益決定海域使用。</p>

          <p class="wind-source">
            資料來源：<a href="https://www.fa.gov.tw/view.php?id=470&theme=FisheriesAct_RULE" target="_blank" rel="noopener noreferrer">農業部漁業署｜離岸式風力發電廠漁業補償基準</a>
          </p>
        </div>

      </div>

      <!-- 總結 -->
      <div class="wind-challenge-conclusion">
        <p>台灣風力發電的成長核心已是離岸風電。它能提供大量低碳電力，並讓再生能源來源更加多元；但海上風場的開發，也必須面對水下噪音、鯨豚與鳥類保育、漁業權益與海域使用等課題。真正永續的離岸風電，不只是完成風機建設與併網，更需要在能源需求與海洋環境之間取得平衡。</p>
      </div>
    </div>

    <!-- 資料來源集中區 -->
    <div class="wind-data-sources">
      <h4 class="wind-sources-title">完整資料來源</h4>
      <ol class="wind-sources-list">
        <li>
          <a href="https://www.taipower.com.tw/2289/2363/2380/2383/10556/normalPost" target="_blank" rel="noopener noreferrer">
            台灣電力公司｜再生能源發展概況（2025 年再生能源發電量、風力發電量、裝置容量，更新日期 2026-03-05）
          </a>
        </li>
        <li>
          <a href="https://www.esist.org.tw/attachments/handbook/2024/ebook/2024EnergyStaHandBook.pdf" target="_blank" rel="noopener noreferrer">
            經濟部能源署｜2024 能源統計手冊（2006–2024 年再生能源發電量、風力發電量與風力占再生能源發電量比例）
          </a>
        </li>
        <li>
          <a href="https://www.ly.gov.tw/Pages/Detail.aspx?nodeid=56084&pid=253282" target="_blank" rel="noopener noreferrer">
            立法院預算中心｜我國推動能源轉型及穩定供電相關計畫執行概況之探討（2020–2024 年陸域／離岸風電裝置容量與發電量；原始資料來源：經濟部能源署能源統計月報）
          </a>
        </li>
        <li>
          <a href="https://enews.moenv.gov.tw/DisplayFile.aspx?FileID=BFF911C2EEFD887F" target="_blank" rel="noopener noreferrer">
            環境部｜風力發電離岸系統開發行為環境影響評估審查事項檢核表（113 年 3 月版）——水下噪音標準、鯨豚警戒區、施工監測、鳥類保育要求
          </a>
        </li>
        <li>
          <a href="https://www.moeaea.gov.tw/ECW/populace/news/News.aspx?kind=9&menu_id=4360&news_id=16369" target="_blank" rel="noopener noreferrer">
            經濟部能源署｜離岸風電與環境生態並重：落實白海豚保育措施
          </a>
        </li>
        <li>
          <a href="https://www.fa.gov.tw/view.php?id=470&theme=FisheriesAct_RULE" target="_blank" rel="noopener noreferrer">
            農業部漁業署｜離岸式風力發電廠漁業補償基準
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
const trendGwhChartRef = ref(null)
const trendPctChartRef = ref(null)
const stackedBarChartRef = ref(null)

let renewableChart = null
let trendGwhChart = null
let trendPctChart = null
let stackedBarChart = null
let observer = null
let chartsInitialized = false

const activeTab = ref('status')

const tabs = [
  { id: 'status',    num: '01', label: '發電現況' },
  { id: 'trend',     num: '02', label: '歷年趨勢' },
  { id: 'offshore',  num: '03', label: '離岸崛起' },
  { id: 'challenge', num: '04', label: '發展挑戰' },
]

function switchTab(id) {
  activeTab.value = id
  setTimeout(() => {
    renewableChart?.resize()
    trendGwhChart?.resize()
    trendPctChart?.resize()
    stackedBarChart?.resize()
  }, 30)
}

function initCharts() {
  if (chartsInitialized) return
  chartsInitialized = true
  initRenewableChart()
  initTrendGwhChart()
  initTrendPctChart()
  initStackedBarChart()
}

function initRenewableChart() {
  const ctx = renewableChartRef.value
  if (!ctx) return
  renewableChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['太陽光電', '風力發電', '慣常水力', '廢棄物', '生質能', '地熱'],
      datasets: [{
        data: [42.25, 32.27, 14.54, 10.16, 0.71, 0.07],
        backgroundColor: [
          'rgba(251,191,36,0.82)',
          'rgba(6,182,212,0.9)',
          'rgba(56,189,248,0.75)',
          'rgba(148,163,184,0.72)',
          'rgba(110,231,183,0.72)',
          'rgba(251,146,60,0.72)',
        ],
        borderColor: [
          'rgba(251,191,36,1)',
          'rgba(6,182,212,1)',
          'rgba(56,189,248,1)',
          'rgba(148,163,184,1)',
          'rgba(110,231,183,1)',
          'rgba(251,146,60,1)',
        ],
        borderWidth: [1, 3, 1, 1, 1, 1],
        hoverOffset: 10,
        offset: [0, 8, 0, 0, 0, 0],
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
          labels: { font: { size: 11 }, padding: 12, usePointStyle: true, pointStyleWidth: 10 }
        },
        tooltip: {
          callbacks: { label: (c) => ` ${c.label}：${c.parsed}%` }
        }
      }
    }
  })
}

function initTrendGwhChart() {
  const ctx = trendGwhChartRef.value
  if (!ctx) return
  const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
  const gwh   = [276.1, 439.5, 588.3, 786.6, 1026.3, 1492.7, 1413.5, 1640.0, 1500.5, 1525.2, 1457.1, 1722.5, 1709.5, 1892.2, 2308.9, 2270.8, 3577.5, 6238.3, 10509.8, 12202.451]
  trendGwhChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [{
        label: '風力發電量',
        data: gwh,
        borderColor: 'rgba(6,182,212,0.9)',
        backgroundColor: 'rgba(6,182,212,0.12)',
        borderWidth: 2.5,
        pointRadius: 3,
        pointHoverRadius: 7,
        pointBackgroundColor: 'rgba(6,182,212,1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
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
          ticks: { autoSkip: true, maxTicksLimit: 8, maxRotation: 0, font: { size: 11 }, color: '#64748b' },
          grid: { color: 'rgba(148,163,184,0.1)' },
          border: { color: 'transparent' }
        },
        y: {
          beginAtZero: true,
          ticks: { callback: v => `${(v/1000).toFixed(0)}k`, font: { size: 10 }, color: '#64748b' },
          grid: { color: 'rgba(148,163,184,0.12)' },
          border: { color: 'transparent' }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: c => ` 風力發電量：${c.parsed.y.toLocaleString()} GWh` } }
      }
    }
  })
}

function initTrendPctChart() {
  const ctx = trendPctChartRef.value
  if (!ctx) return
  const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
  const pct   = [3.57, 5.28, 7.12, 10.07, 11.88, 16.61, 13.26, 15.10, 15.12, 14.56, 11.44, 13.93, 13.51, 12.39, 15.20, 12.95, 14.98, 23.11, 30.99, 32.27]
  trendPctChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [{
        label: '風力占再生能源',
        data: pct,
        borderColor: 'rgba(8,145,178,0.9)',
        backgroundColor: 'rgba(8,145,178,0.1)',
        borderWidth: 2.5,
        pointRadius: 3,
        pointHoverRadius: 7,
        pointBackgroundColor: 'rgba(8,145,178,1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
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
          ticks: { autoSkip: true, maxTicksLimit: 8, maxRotation: 0, font: { size: 11 }, color: '#64748b' },
          grid: { color: 'rgba(148,163,184,0.1)' },
          border: { color: 'transparent' }
        },
        y: {
          beginAtZero: true, max: 40,
          ticks: { callback: v => `${v}%`, font: { size: 10 }, color: '#64748b' },
          grid: { color: 'rgba(148,163,184,0.12)' },
          border: { color: 'transparent' }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: c => ` 風力占再生能源：${c.parsed.y}%` } }
      }
    }
  })
}

function initStackedBarChart() {
  const ctx = stackedBarChartRef.value
  if (!ctx) return
  const years    = [2020, 2021, 2022, 2023, 2024]
  const onshore  = [1793, 1701, 2083, 1741, 1898]
  const offshore = [516,  569,  1495, 4497, 8611]
  stackedBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [
        {
          label: '離岸風電',
          data: offshore,
          backgroundColor: 'rgba(6,182,212,0.85)',
          borderColor: 'rgba(6,182,212,1)',
          borderWidth: 1,
          borderRadius: { bottomLeft: 8, bottomRight: 8, topLeft: 0, topRight: 0 },
          borderSkipped: false,
        },
        {
          label: '陸域風電',
          data: onshore,
          backgroundColor: 'rgba(148,163,184,0.55)',
          borderColor: 'rgba(148,163,184,0.8)',
          borderWidth: 1,
          borderRadius: { topLeft: 8, topRight: 8, bottomLeft: 0, bottomRight: 0 },
          borderSkipped: false,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1400, easing: 'easeOutQuart' },
      interaction: { mode: 'index', intersect: false },
      scales: {
        x: {
          stacked: true,
          ticks: { font: { size: 11 }, color: '#64748b' },
          grid: { display: false },
          border: { color: 'transparent' }
        },
        y: {
          stacked: true,
          beginAtZero: true,
          ticks: { callback: v => `${(v/1000).toFixed(0)}k`, font: { size: 10 }, color: '#64748b' },
          grid: { color: 'rgba(148,163,184,0.12)' },
          border: { color: 'transparent' }
        }
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: { font: { size: 12 }, padding: 16, usePointStyle: true, pointStyleWidth: 10 }
        },
        tooltip: {
          callbacks: {
            label: c => ` ${c.dataset.label}：${c.parsed.y.toLocaleString()} GWh`
          }
        }
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
  trendGwhChart?.destroy()
  trendPctChart?.destroy()
  stackedBarChart?.destroy()
})
</script>

<style scoped>
.wind-data-section {
  width: 100%;
  padding: 4px 0 48px;
}

/* ── 標題區 ── */
.wind-data-header {
  text-align: center;
  margin-bottom: 36px;
  padding: 0 8px;
}

.wind-data-main-title {
  font-size: clamp(1.3rem, 2.6vw, 1.9rem);
  font-weight: 900;
  color: #0c4a6e;
  line-height: 1.25;
  margin-bottom: 14px;
  letter-spacing: -0.3px;
}

.wind-data-subtitle {
  font-size: clamp(0.88rem, 1.4vw, 1rem);
  color: #475569;
  line-height: 1.85;
  max-width: 620px;
  margin: 0 auto;
}

/* ── 分頁切換 ── */
.wind-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 32px;
  padding: 6px;
  background: rgba(255,255,255,0.65);
  border: 1px solid rgba(6,182,212,0.2);
  border-radius: 18px;
  backdrop-filter: blur(4px);
}

.wind-tab-btn {
  flex: 1;
  min-width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 13px 16px;
  border-radius: 12px;
  border: none;
  background: transparent;
  color: #0c4a6e;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.18s ease;
  font-weight: 800;
  white-space: nowrap;
}

.wind-tab-btn:hover:not(.active) {
  background: rgba(6,182,212,0.1);
  transform: translateY(-1px);
}

.wind-tab-btn.active {
  background: linear-gradient(135deg, #0891b2, #0e7490);
  color: #fff;
  box-shadow: 0 6px 18px rgba(8,145,178,0.3);
}

.wind-tab-num {
  font-size: 0.68rem;
  opacity: 0.65;
  font-weight: 900;
  letter-spacing: 0.5px;
}

.wind-tab-label {
  font-size: 0.9rem;
}

/* ── Tab 內容區 ── */
.wind-tab-content {
  animation: wind-tab-in 0.28s ease;
  padding: 0 2px;
}

@keyframes wind-tab-in {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── 區塊標題列 ── */
.wind-block-title-bar {
  margin-top: 8px;
  margin-bottom: 20px;
}

.wind-block-title {
  font-size: 1.05rem;
  font-weight: 900;
  color: #0369a1;
  padding-left: 14px;
  border-left: 4px solid #06b6d4;
  line-height: 1.4;
}

/* ── 雙欄格 ── */
.wind-block-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: start;
}

/* ── 卡片 ── */
.wind-card {
  background: rgba(255,255,255,0.72);
  border: 1px solid rgba(255,255,255,0.88);
  border-radius: 22px;
  padding: 26px 24px;
  box-shadow: 0 8px 28px rgba(15,23,42,0.07);
  backdrop-filter: blur(6px);
}

.wind-card-title {
  font-size: clamp(0.92rem, 1.5vw, 1.06rem);
  font-weight: 900;
  color: #1e3a5f;
  margin-bottom: 18px;
  line-height: 1.45;
}

.wind-card-desc {
  color: #4b5563;
  line-height: 1.85;
  font-size: 0.92rem;
  margin-top: 18px;
}

.wind-source {
  font-size: 0.74rem;
  color: #94a3b8;
  margin-top: 10px;
  line-height: 1.6;
}

.wind-source a {
  color: #60a5fa;
  text-decoration: none;
}
.wind-source a:hover {
  text-decoration: underline;
  color: #38bdf8;
}

/* ── 圖表容器 ── */
.wind-chart-wrap {
  position: relative;
  height: 300px;
  width: 100%;
}

.wind-chart-wrap--trend {
  height: 220px;
}

.wind-chart-wrap--bar {
  height: 320px;
}

/* ── 數字統計卡（Tab01） ── */
.wind-stat-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 16px 0 20px;
}

.wind-stat-card {
  padding: 18px 20px;
  border-radius: 16px;
  background: rgba(241,250,255,0.65);
  border: 1px solid rgba(6,182,212,0.18);
}

.wind-stat-card--primary {
  background: linear-gradient(135deg, rgba(6,182,212,0.12), rgba(8,145,178,0.08));
  border-color: rgba(6,182,212,0.35);
}

.wind-stat-sub {
  font-size: 0.74rem;
  color: #94a3b8;
  margin-bottom: 4px;
}

.wind-stat-num {
  font-size: 2.4rem;
  font-weight: 900;
  color: #0369a1;
  line-height: 1;
  margin-bottom: 6px;
  letter-spacing: -1px;
}

.wind-stat-num--md {
  font-size: 1.6rem;
  letter-spacing: -0.5px;
}

.wind-stat-unit {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0;
}

.wind-stat-name {
  font-size: 0.84rem;
  font-weight: 700;
  color: #1e3a5f;
}

/* ── 歷年趨勢雙欄 ── */
.wind-trend-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 16px;
}

.wind-trend-subtitle {
  font-size: 0.88rem;
  font-weight: 700;
  color: #374151;
  margin-bottom: 10px;
}

/* ── 離岸崛起：重點統計區 ── */
.wind-offshore-stats {
  margin: 16px 0 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.wind-offshore-stat--highlight {
  text-align: center;
  padding: 24px 20px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(6,182,212,0.14), rgba(14,116,144,0.1));
  border: 2px solid rgba(6,182,212,0.35);
}

.wind-offshore-badge {
  display: inline-block;
  padding: 3px 12px;
  border-radius: 999px;
  background: rgba(6,182,212,0.18);
  color: #0891b2;
  font-size: 0.75rem;
  font-weight: 900;
  margin-bottom: 10px;
}

.wind-offshore-num {
  font-size: 3rem;
  font-weight: 900;
  color: #0369a1;
  line-height: 1;
  margin-bottom: 10px;
  letter-spacing: -2px;
}

.wind-offshore-unit {
  font-size: 1.5rem;
  letter-spacing: 0;
}

.wind-offshore-desc {
  font-size: 0.88rem;
  color: #374151;
  line-height: 1.6;
}

.wind-offshore-compare {
  border-radius: 16px;
  background: rgba(248,250,252,0.8);
  border: 1px solid rgba(226,232,240,0.7);
  overflow: hidden;
}

.wind-compare-row {
  padding: 14px 18px;
}

.wind-compare-label {
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 600;
  margin-bottom: 6px;
}

.wind-compare-values {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.wind-compare-from {
  font-size: 1rem;
  font-weight: 700;
  color: #94a3b8;
}

.wind-compare-arrow {
  color: #06b6d4;
  font-weight: 900;
  font-size: 1.1rem;
}

.wind-compare-to {
  font-size: 1.1rem;
  font-weight: 900;
  color: #0891b2;
}

.wind-compare-to--muted { color: #64748b; }
.wind-compare-from--muted { color: #cbd5e1; }

.wind-compare-note {
  font-size: 0.76rem;
  color: #06b6d4;
  font-weight: 700;
}

.wind-compare-note--muted {
  color: #94a3b8;
}

.wind-compare-divider {
  height: 1px;
  background: rgba(226,232,240,0.8);
  margin: 0;
}

/* ── 發展挑戰：導語 ── */
.wind-challenge-lead {
  font-size: 1rem;
  color: #1e3a5f;
  line-height: 1.85;
  margin-bottom: 28px;
  padding: 18px 22px;
  background: rgba(6,182,212,0.06);
  border-left: 4px solid #06b6d4;
  border-radius: 0 16px 16px 0;
  font-weight: 500;
}

/* ── 議題卡格 ── */
.wind-challenge-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 28px;
  align-items: start;
}

.wind-issue-card {
  background: rgba(255,255,255,0.75);
  border: 1px solid rgba(255,255,255,0.88);
  border-radius: 22px;
  padding: 24px 22px;
  box-shadow: 0 8px 24px rgba(15,23,42,0.07);
}

.wind-issue-card--noise  { border-top: 3px solid #06b6d4; }
.wind-issue-card--dolphin { border-top: 3px solid #0891b2; }
.wind-issue-card--bird   { border-top: 3px solid #38bdf8; }
.wind-issue-card--fishing { border-top: 3px solid #7dd3fc; }

.wind-issue-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.wind-issue-icon {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(6,182,212,0.1);
  border: 1px solid rgba(6,182,212,0.22);
  display: grid;
  place-items: center;
}

.wind-issue-title {
  font-size: 1rem;
  font-weight: 900;
  color: #1e3a5f;
  line-height: 1.35;
}

.wind-issue-text {
  font-size: 0.88rem;
  color: #4b5563;
  line-height: 1.75;
  margin-bottom: 12px;
}

/* 規範表格 */
.wind-reg-table {
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(6,182,212,0.18);
  margin-bottom: 10px;
}

.wind-reg-title {
  background: rgba(6,182,212,0.1);
  color: #0891b2;
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.4px;
  padding: 8px 14px;
}

.wind-reg-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 7px 14px;
  border-top: 1px solid rgba(6,182,212,0.1);
  font-size: 0.82rem;
}

.wind-reg-key {
  flex: 0 0 120px;
  color: #64748b;
  font-weight: 600;
  line-height: 1.5;
}

.wind-reg-val {
  flex: 1;
  color: #1e3a5f;
  line-height: 1.5;
}

/* 標籤組 */
.wind-tag-group {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 10px 0 12px;
}

.wind-tag {
  padding: 5px 14px;
  border-radius: 999px;
  background: rgba(6,182,212,0.1);
  border: 1px solid rgba(6,182,212,0.28);
  color: #0891b2;
  font-size: 0.8rem;
  font-weight: 700;
}

/* 海域角色 */
.wind-sea-roles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 14px 0;
}

.wind-sea-role {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 12px;
  background: rgba(248,250,252,0.8);
  border: 1px solid rgba(226,232,240,0.7);
  font-size: 0.86rem;
  font-weight: 700;
  color: #374151;
}

.wind-sea-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.wind-sea-dot--green  { background: #22c55e; }
.wind-sea-dot--blue   { background: #3b82f6; }
.wind-sea-dot--teal   { background: #06b6d4; }
.wind-sea-dot--slate  { background: #94a3b8; }

/* 挑戰總結 */
.wind-challenge-conclusion {
  padding: 22px 26px;
  background: linear-gradient(135deg, rgba(6,182,212,0.07), rgba(14,116,144,0.05));
  border: 1px solid rgba(6,182,212,0.22);
  border-radius: 18px;
  margin-top: 8px;
}

.wind-challenge-conclusion p {
  font-size: 0.95rem;
  color: #1e3a5f;
  line-height: 1.9;
  font-weight: 500;
}

/* ── 資料來源集中區 ── */
.wind-data-sources {
  margin-top: 44px;
  padding: 18px 22px;
  background: rgba(241,245,249,0.55);
  border-radius: 16px;
  border: 1px solid rgba(226,232,240,0.7);
}

.wind-sources-title {
  font-size: 0.84rem;
  font-weight: 900;
  color: #64748b;
  margin-bottom: 10px;
  letter-spacing: 0.3px;
}

.wind-sources-list {
  padding-left: 18px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.wind-sources-list li {
  font-size: 0.76rem;
  color: #94a3b8;
  line-height: 1.55;
}

.wind-sources-list a {
  color: #7dd3fc;
  text-decoration: none;
}

.wind-sources-list a:hover {
  text-decoration: underline;
  color: #38bdf8;
}

/* ── 響應式 ── */
@media (max-width: 900px) {
  .wind-block-grid      { grid-template-columns: 1fr; }
  .wind-trend-pair      { grid-template-columns: 1fr; }
  .wind-challenge-grid  { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .wind-tabs { gap: 5px; padding: 5px; }
  .wind-tab-btn { padding: 10px 10px; font-size: 0.82rem; min-width: 70px; }
  .wind-chart-wrap { height: 260px; }
  .wind-chart-wrap--bar { height: 280px; }
  .wind-chart-wrap--trend { height: 200px; }
  .wind-sea-roles { grid-template-columns: 1fr; }
  .wind-reg-key { flex: 0 0 100px; }
}
</style>
