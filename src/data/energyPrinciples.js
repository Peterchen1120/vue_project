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
  }
}
