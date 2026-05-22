export const energyPrinciples = {
  hydro: {
    label: 'Hydropower',
    title: '水力發電：從水位落差到電磁感應',
    subtitle: '水不是直接變成電，而是透過水輪機與發電機完成一連串能量轉換。',
    principleText:
      '高處的水具有位能，水流向低處時轉換成動能，推動水輪機旋轉。水輪機再帶動發電機轉子，使磁場與線圈產生相對運動，透過電磁感應產生電流。最後，電力會經由變壓與輸電系統送入電網。',
    steps: [
      {
        title: '水位落差',
        description: '高處水源具有位能，是水力發電的起點。'
      },
      {
        title: '水流加速',
        description: '水沿著水道或壓力管線流動，位能轉換成動能。'
      },
      {
        title: '推動水輪機',
        description: '高速水流推動水輪機葉片旋轉，形成機械能。'
      },
      {
        title: '發電機轉換',
        description:
          '水輪機帶動發電機轉子旋轉，使磁場與線圈產生相對運動，透過電磁感應產生電流。'
      },
      {
        title: '輸送電力',
        description: '產生的電力經變壓器升壓後，送入輸電系統供使用者用電。'
      }
    ],
    keyPoints: [
      '低碳排放',
      '可快速調度',
      '受地形與水資源限制',
      '發電量受降雨與水庫蓄水影響'
    ],
    energyFlow: ['位能', '動能', '機械能', '電能'],
    animationType: 'hydro'
  },
  solar: {
    label: 'Solar Power',
    title: '太陽能發電：把光子變成電子',
    subtitle: '陽光不是直接變成電，而是透過光電效應在半導體中激發電子，再經轉換後送入電網。',
    principleText:
      '太陽能電池由半導體材料（通常是矽）製成。當光子打到電池表面，能量足夠的光子會激發電子離開原子，形成電子-電洞對。在 p-n 接面內建電場的作用下，電子被推向一端，形成直流電（DC）。直流電再經過逆變器（Inverter）轉換為交流電（AC），最後升壓送入電網或直接供用戶使用。',
    steps: [
      { title: '光子照射', description: '太陽光子打到太陽能電池表面，帶來光能。' },
      { title: '光電效應', description: '能量足夠的光子激發半導體中的電子，形成電子-電洞對。' },
      { title: '產生直流電', description: 'p-n 接面內建電場推動電子定向流動，形成直流電（DC）。' },
      { title: '逆變器轉換', description: '逆變器將直流電轉換為電網使用的交流電（AC）。' },
      { title: '輸送電力',  description: '交流電經變壓器升壓後，送入輸電系統供使用者用電。' }
    ],
    keyPoints: [
      '取之不盡的光源',
      '無噪音、無廢氣',
      '受日照時間與天氣影響',
      '需搭配儲能系統提升穩定性'
    ],
    energyFlow: ['光能', '光電效應', '直流電', '交流電'],
    animationType: 'solar'
  }
}
