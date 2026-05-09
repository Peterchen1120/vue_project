import waterImg from '@/assets/water.jpg'
import sunImg from '@/assets/sun.png'

export const energyTypes = {
  hydro: {
    id: 'hydro',
    label: 'RENEWABLE ENERGY SERIES',
    title: '水力發電：源源不絕的純淨能量',
    description:
      '水力發電是利用水位落差或水流動能推動渦輪機，再帶動發電機產生電力。它具有低碳、穩定、可調度等特色，是目前全球重要的再生能源之一。',
    image: waterImg,
    themeColor: '#2f6f91',
    gradient: 'linear-gradient(135deg, #dff4ff, #f7fbff)',
    accentGradient: 'linear-gradient(135deg, #4ba3c7, #245f7a)',
    activeTextColor: '#ffffff',
    features: [
      { title: '低碳排放', text: '發電過程不燃燒任何燃料，幾乎零直接碳排。全生命週期碳排放約 4–10 g CO₂/kWh，比燃煤低約 100 倍，是目前最成熟的低碳發電技術之一。' },
      { title: '穩定供電', text: '水庫可儲水調節，依需求靈活控制發電量，幾秒內即可快速啟動應對尖峰用電，不像太陽能或風力受天氣影響，能全天候穩定出力。' }
    ],
    factTagline: '一座蓋於 1909 年的電廠，到現在還在運轉',
    fact: '烏來的粗坑電廠在西元1909年(明治42年)竣工發電，是台灣最古老的水力發電廠。為什麼可以這麼長壽? 因為水力發電機組運轉原理單純，利用水位落差配合水輪發電機，將水的位能轉為水輪機的機械能，再推動發電機產出電力；發電機在低溫與常溫的環境下運作，設備材料相對較沒有熱疲勞問題。',
    principle: {
      label: 'Hydropower',
      title: '水力發電：從水位落差到電磁感應',
      subtitle: '水不是直接變成電，而是透過水輪機與發電機完成一連串能量轉換。',
      principleText:
        '高處的水具有位能，水流向低處時轉換成動能，推動水輪機旋轉。水輪機再帶動發電機轉子，使磁場與線圈產生相對運動，透過電磁感應產生電流。最後，電力會經由變壓與輸電系統送入電網。',
      steps: [
        { title: '水位落差', description: '高處水源具有位能，是水力發電的起點。' },
        { title: '水流加速', description: '水沿著水道或壓力管線流動，位能轉換成動能。' },
        { title: '推動水輪機', description: '高速水流推動水輪機葉片旋轉，形成機械能。' },
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
  },

  solar: {
    id: 'solar',
    label: 'RENEWABLE ENERGY SERIES',
    title: '太陽能發電：把陽光轉成電力',
    description:
      '太陽能發電透過太陽能板將光能轉換成電能。它適合設置在屋頂、空地與大型太陽能電廠，是近年成長最快的再生能源之一。',
    image: sunImg,
    themeColor: '#b7791f',
    gradient: 'linear-gradient(135deg, #fff7d6, #fffaf0)',
    accentGradient: 'linear-gradient(135deg, #ffe08a, #f9b233)',
    activeTextColor: '#5a3b00',
    features: [
      { title: '乾淨能源', text: '發電時不產生空氣污染，適合分散式能源應用。' },
      { title: '建置彈性', text: '可設置於屋頂、農地、停車棚與大型電廠。' }
    ],
    fact: '太陽能受天氣與日照影響，因此常搭配儲能系統提升穩定性。',
    principle: null
  }
}
