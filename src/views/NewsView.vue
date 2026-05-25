<template>
  <section class="hero-section">
    <h1>能源相關新聞</h1>
    <p>掌握全球最新能源動態</p>
  </section>

  <section class="section-content">
    <div class="news-grid">
      <a
        v-for="news in newsItems"
        :key="news.href"
        class="news-card"
        :href="news.href"
        target="_blank"
      >
        <div class="news-img-container">
          <img :src="news.img" :alt="news.tag" class="news-img" />
        </div>
        <div class="news-body">
          <span class="news-tag">{{ news.tag }}</span>
          <h2 class="news-title">{{ news.title }}</h2>
          <p class="news-desc">{{ news.desc }}</p>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
const newsItems = [
  {
    href: 'https://www.cna.com.tw/news/aopl/202605220048.aspx',
    img: 'https://imgcdn.cna.com.tw/www/WebPhotos/1024/20260513/2000x1125_wmkn_86461595720630_0.jpg',
    tag: '石油危機',
    title: '國際能源署警告：全球油市可能在7-8月進入「紅色警戒區」',
    desc: '國際能源署署長比羅爾警告，全球油市可能在7-8月進入「紅色警戒區」，因為暑期燃油需求高峰、中東油氣供應中斷，且庫存持續下降。目前每天有超過1,400萬桶石油供應線下線，各國釋放戰略石油儲備仍不足以解決危機。',
  },
  {
    href: 'https://technews.tw/2026/05/22/solar-to-dominate-energy-by-2035-but-ai-data-centers-will-keep-fossil-fuels-in-business/',
    img: 'https://img.technews.tw/wp-content/uploads/2025/06/05102810/shutterstock_2480041573-800x450.jpg',
    tag: '能源轉型',
    title: '太陽能將主導2035年全球電力，但AI資料中心將延長化石燃料使用',
    desc: '根據彭博新能源財經報告，太陽能將在十年內成為全球最大電力來源，超越煤炭和天然氣，成本將再下降30%。然而，AI資料中心電力需求激增，預期到2050年仍有逾半的資料中心電力來自天然氣與煤炭。',
  },
  {
    href: 'https://news.pchome.com.tw/science/technice/20260522/index-77942200637391338005.html',
    img: 'https://news.pchome.com.tw/newsdata/science/technice/20260522/77942200637391338005.jpg',
    tag: '綠能里程',
    title: '全球風能和太陽能發電首次超越天然氣，再生能源佔比創新高',
    desc: '英國智庫Ember報告指出，2026年4月全球風能和太陽能發電首度超越天然氣，佔全球電力生成的22%，超過天然氣的20%。中國、歐盟、英國、美國等主要市場再生能源成長率均達8%至35%。',
  },
  {
    href: 'https://tw.news.yahoo.com/%E7%BE%8E%E5%9C%8B%E8%83%BD%E6%BA%90%E9%83%A8%E4%B8%8B%E4%BB%A4-constellation-energy-%E5%BB%B6%E5%BE%8C%E9%97%9C%E9%96%89%E8%B3%93%E5%B7%9E%E7%99%BC%E9%9B%BB%E5%BB%A0%E5%85%A9%E6%A9%9F%E7%B5%84-230051062.html',
    img: 'https://cdn-www.cw.com.tw/article/202209/article-63282d1b201e1.jpg',
    tag: '核能政策',
    title: '美國能源部下令Constellation Energy延後關閉賓州發電廠兩機組',
    desc: '美國能源部長克里斯·萊特下令Constellation Energy公司延後關閉賓州Eddystone發電廠兩座機組，原定5月31日除役的計畫被推遲。此次政府干預反映對夏季尖峰需求期間電網穩定性的高度關注。',
  },
  {
    href: 'https://tw.news.yahoo.com/%E8%8E%AB%E8%BF%AA%E8%A6%81%E6%B1%82%E5%B0%8B%E6%9B%BF%E4%BB%A3%E8%83%BD%E6%BA%90-%E5%BE%B7%E9%87%8C%E8%A9%A6%E8%A1%8C%E6%B0%AB%E8%83%BD%E5%B7%B4%E5%A3%AB-%E5%9C%96-070522375.html',
    img: 'https://s.yimg.com/ny/api/res/1.2/BJ7qgYtv13R7ijNbtcYrzA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcyMA--/https://media.zenfs.com/ko/cna.com.tw/a9c1fc9e3e6c616984bfff0d684c8345',
    tag: '氫能發展',
    title: '莫迪要求尋替代能源，德里試行氫能巴士',
    desc: '印度總理莫迪呼籲尋找替代能源以應對中東衝突導致的全球能源短缺。德里開始試行氫能巴士，旨在減少印度對傳統石油和天然氣的依賴，並降低對進口能源的依存度。',
  },
]
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #fcc30b 0%, #f5a623 60%, #e8922a 100%);
  padding: 90px 20px 70px;
  text-align: center;
}

.hero-section h1 {
  color: #ffffff;
  font-size: 2.6rem;
  font-weight: bold;
  margin: 0;
  letter-spacing: 0.04em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
}

.hero-section p {
  color: rgba(255, 255, 255, 0.85);
  margin-top: 12px;
  font-size: 1rem;
}

.section-content {
  background: #f7f4ef;
  padding: 60px 20px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.news-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(30, 58, 47, 0.07);
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-bottom: 3px solid transparent;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.news-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(30, 58, 47, 0.13);
  border-bottom-color: #1a7b31;
}

.news-img-container {
  width: 100%;
  height: 180px;
  overflow: hidden;
}

.news-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-body {
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
}

.news-tag {
  display: inline-block;
  align-self: flex-start;
  background-color: #e8f5eb;
  color: #1a7b31;
  font-weight: bold;
  font-size: 0.78rem;
  padding: 3px 10px;
  border-radius: 20px;
  letter-spacing: 0.03em;
}

.news-title {
  font-size: 1.1rem;
  color: #1e3a2f;
  font-weight: bold;
  line-height: 1.45;
  margin: 0;
}

.news-desc {
  font-size: 0.88rem;
  color: #5d6b65;
  line-height: 1.7;
  margin: 0;
}
</style>
