<template>
  <div class="page">
    <!-- 頂部導覽列 -->
    <header>
      <RouterLink class="logo" to="/">
        Energy Pulse｜能源脈動
      </RouterLink>

      <nav>
        <ul>
          <li v-for="item in navItems" :key="item.text">
            <RouterLink :to="item.to">
              {{ item.text }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <button class="login-btn">登入</button>
    </header>

    <!-- 這裡顯示 HomeView / MapView / QuizView 等頁面 -->
    <RouterView />

    <!-- 右側浮動地圖 Tab -->
    <button class="map-tab" :class="{ open: mapOpen }" @click="mapOpen = !mapOpen" aria-label="開啟範例地圖">
      <span class="map-tab-icon">🗺</span>
      <span class="map-tab-label">範例地圖</span>
    </button>

    <!-- 右側地圖抽屜 -->
    <Transition name="map-drawer">
      <aside v-if="mapOpen" class="map-drawer" role="complementary" aria-label="範例地圖">
        <div class="map-drawer-header">
          <span class="map-drawer-title">🌊 Energy Magic Islands</span>
          <div class="map-drawer-actions">
            <a :href="mapDemoUrl" target="_blank" class="map-open-new" title="在新分頁開啟">↗</a>
            <button class="map-close-btn" @click="mapOpen = false" aria-label="關閉">✕</button>
          </div>
        </div>
        <iframe
          :src="mapDemoUrl"
          class="map-iframe"
          title="Energy Magic Islands Demo"
          loading="lazy"
          referrerpolicy="same-origin"
        ></iframe>
      </aside>
    </Transition>

    <!-- 點擊背景關閉 -->
    <Transition name="overlay-fade">
      <div v-if="mapOpen" class="map-overlay" @click="mapOpen = false"></div>
    </Transition>

    <!-- 頁尾區塊 -->
    <footer id="footer">
      <div class="footer-content">
        <div class="footer-info-group">
          <div class="footer-col">
            <h4>聯絡我們</h4>
            <p><span class="icon">&#9993;</span> zhengweichen898@gmail.com</p>
            <p><span class="icon">&#128222;</span> (03)412-5252</p>
            <br />
            <p>聯繫地址: 桃園市中壢區中大路300號</p>
            <p>服務時間 | 星期一至星期五 9:30 - 12:00 / 13:00 - 17:00</p>
          </div>
        </div>

        <div class="footer-right">
          <h4>相關連結</h4>

          <div class="links-grid">
            <a
              v-for="link in footerLinks"
              :key="link.href"
              :href="link.href"
              target="_blank"
              class="link-item"
            >
              <img :src="link.img" :alt="link.alt" />
            </a>
          </div>

          <div class="copyright">
            © Energy Pulse All Rights Reserved.
          </div>
        </div>
      </div>

      <a href="#" class="back-to-top">︿</a>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const mapOpen = ref(false)
const mapDemoUrl = '/energy-map-demo/index.html'

const navItems = [
  { text: 'SDG 7 介紹', to: '/sdg7' },
  { text: '資料來源', to: '/sources' },
  { text: '進入測驗', to: '/quiz' },
  { text: '關於我們', to: '/about' }
]

const footerLinks = [
  {
    href: 'https://go-moea.tw/#gsc.tab=0',
    img: 'https://www.go-moea.tw/_next/static/media/logo.b91716c7.jpeg',
    alt: '2050淨零排放'
  },
  {
    href: 'https://www.moeaea.gov.tw/ECW/populace/home/Home.aspx',
    img: 'https://ea01.moeaea.gov.tw/a0101/01/2050nzea/wp-content/uploads/2023/09/light_footer_2.png',
    alt: '經濟部能源署'
  },
  {
    href: 'https://www.moenv.gov.tw/',
    img: 'https://ea01.moeaea.gov.tw/a0101/01/2050nzea/wp-content/uploads/2023/09/light_footer_3.png',
    alt: '國家發展委員會'
  },
  {
    href: 'https://www.ndc.gov.tw/',
    img: 'https://ea01.moeaea.gov.tw/a0101/01/2050nzea/wp-content/uploads/2023/05/ndc_4.png',
    alt: '環境部'
  },
  {
    href: 'https://www.iea.org/',
    img: 'https://c2e2.unepccc.org/wp-content/uploads/sites/3/2020/10/iea-logo.png',
    alt: 'IEA'
  }
]
</script>

<style scoped>
  .page {
    width: 100%;
    min-height: 100vh;
  }

  /* 導覽列 */
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    background: rgba(255, 255, 255, 0.96);
    box-shadow: none;
    border-bottom: 1px solid rgba(15, 23, 42, 0.08);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .logo {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--color-primary);
    text-decoration: none;
  }

  nav ul {
    display: flex;
    list-style: none;
    gap: 30px;
  }

  nav a {
    text-decoration: none;
    color: var(--color-muted);
    font-size: 0.95rem;
    font-weight: bold;
    padding-bottom: 5px;
    transition: color 0.3s;
  }

  nav a:hover {
    color: var(--color-primary-2);
  }

  .login-btn {
    background: linear-gradient(135deg, var(--color-primary), var(--color-primary-2));
    color: white;
    border: none;
    padding: 8px 24px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(2, 132, 199, 0.16);
  }

  /* Footer */
  footer {
    background: #0f172a;
    padding: 40px 60px 20px;
    color: #e2e8f0;
    position: relative;
    border-top: 1px solid rgba(15, 23, 42, 0.22);
    box-shadow: 0 -12px 30px rgba(15, 23, 42, 0.08);
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
  }

  .footer-info-group {
    display: flex;
    width: 50%;
  }

  .footer-col {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .footer-col h4 {
    color: #f8fafc;
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  .footer-col p {
    font-size: 0.95rem;
    line-height: 1.6;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .icon {
    font-size: 1.2rem;
  }

  .footer-right {
    display: flex;
    flex-direction: column;
    width: 45%;
  }

  .footer-right h4 {
    margin-bottom: 15px;
    color: #f8fafc;
    font-size: 1.1rem;
  }

  .links-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 30px;
  }

  .link-item {
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border: 1px solid rgba(226, 232, 240, 0.18);
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.2s ease;
    height: 60px;
    width: 180px;
  }

  .link-item:hover {
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);
    transform: translateY(-2px);
    border-color: rgba(250, 204, 21, 0.54);
  }

  .link-item img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 2px;
  }

  .copyright {
    text-align: right;
    font-size: 0.85rem;
    color: #cbd5e1;
    margin-top: auto;
  }

  .back-to-top {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(226, 232, 240, 0.2);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: #e2e8f0;
    cursor: pointer;
    text-decoration: none;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
  }

  /* ── 右側地圖 Tab ───────────────────────────────── */
  .map-tab {
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    z-index: 200;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding: 14px 10px;
    background: linear-gradient(180deg, var(--color-primary), var(--color-primary-2));
    color: #fff;
    border: none;
    border-radius: 14px 0 0 14px;
    cursor: pointer;
    box-shadow: -4px 0 24px rgba(2, 132, 199, 0.28);
    transition: padding 0.25s, box-shadow 0.25s, background 0.25s;
  }
  .map-tab:hover {
    padding-right: 16px;
    box-shadow: -6px 0 32px rgba(2, 132, 199, 0.4);
  }
  .map-tab.open {
    background: linear-gradient(180deg, #0369a1, #0284c7);
  }
  .map-tab-icon { font-size: 1.3rem; line-height: 1; }
  .map-tab-label {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-size: 0.78rem;
    font-weight: 900;
    letter-spacing: 1px;
    white-space: nowrap;
  }

  /* ── 右側抽屜 ───────────────────────────────────── */
  .map-drawer {
    position: fixed;
    top: 0;
    right: 0;
    width: min(520px, 92vw);
    height: 100vh;
    z-index: 300;
    display: flex;
    flex-direction: column;
    background: #fff;
    box-shadow: -8px 0 48px rgba(15, 23, 42, 0.22);
    border-left: 1px solid rgba(14, 165, 233, 0.15);
  }
  .map-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 18px;
    background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
    border-bottom: 1px solid rgba(14, 165, 233, 0.15);
    flex-shrink: 0;
  }
  .map-drawer-title {
    font-size: 0.95rem;
    font-weight: 900;
    color: var(--color-primary);
  }
  .map-drawer-actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .map-open-new {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background: rgba(14, 165, 233, 0.1);
    color: var(--color-primary);
    font-size: 1rem;
    font-weight: 900;
    text-decoration: none;
    transition: background 0.2s;
  }
  .map-open-new:hover { background: rgba(14, 165, 233, 0.2); }
  .map-close-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 8px;
    border: none;
    background: rgba(15, 23, 42, 0.07);
    color: #475569;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background 0.2s;
  }
  .map-close-btn:hover { background: rgba(15, 23, 42, 0.14); }
  .map-iframe {
    flex: 1;
    width: 100%;
    border: none;
    display: block;
  }

  /* 背景遮罩 */
  .map-overlay {
    position: fixed;
    inset: 0;
    z-index: 250;
    background: rgba(15, 23, 42, 0.28);
    backdrop-filter: blur(2px);
  }

  /* ── 動畫 ────────────────────────────────────────── */
  .map-drawer-enter-active,
  .map-drawer-leave-active { transition: transform 0.32s cubic-bezier(0.4, 0, 0.2, 1); }
  .map-drawer-enter-from,
  .map-drawer-leave-to    { transform: translateX(100%); }

  .overlay-fade-enter-active,
  .overlay-fade-leave-active { transition: opacity 0.28s ease; }
  .overlay-fade-enter-from,
  .overlay-fade-leave-to    { opacity: 0; }

  /* App 共用 RWD */
  @media (max-width: 768px) {
    header {
      flex-direction: column;
      gap: 16px;
    }

    nav ul {
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
    }

    .footer-content {
      flex-direction: column;
      gap: 32px;
    }

    .footer-info-group,
    .footer-right {
      width: 100%;
    }

    .copyright {
      text-align: left;
    }
  }
</style>
