import waterImg from '@/assets/water.jpg'
import sunImg from '@/assets/sun.png'
// TODO: 請替換成正式圖片
const windImg    = sunImg
const biomassImg = waterImg
const geoImg     = waterImg
const nuclearImg = sunImg

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

  wind: {
    id: 'wind',
    label: 'RENEWABLE ENERGY SERIES',
    title: '風力發電：捕捉風的動能',
    description:
      '風力發電透過風力推動葉片旋轉，帶動發電機產生電力。分為陸域與離岸兩種型態，台灣近年積極發展離岸風電，充分利用台灣海峽豐沛且穩定的強風資源。',
    image: windImg,
    themeColor: '#2563a8',
    gradient: 'linear-gradient(135deg, #eef6ff, #f8fcff)',
    accentGradient: 'linear-gradient(135deg, #7eb8f5, #2563a8)',
    activeTextColor: '#ffffff',
    features: [
      {
        title: '低碳排放',
        text: '運轉過程不燃燒任何燃料，生命週期碳排放量與太陽能相近，約為 7–15 g CO₂/kWh，是燃煤的百分之一以下，屬於相當成熟的清潔能源技術。'
      },
      {
        title: '離岸風電優勢',
        text: '台灣海峽被評為全球風力資源最豐富的海域之一，離岸風速穩定且強勁，能大幅提升年發電時數，彌補陸域風電受地形限制的不足。'
      }
    ],
    factTagline: '台灣海峽，全球最強的天然風廊之一',
    fact: '台灣海峽平均風速超過每秒 10 公尺，年滿發時數可達 3,000 小時以上，遠高於全球平均的 2,000 小時。這得益於季風與地形共同作用，使台灣成為全球離岸風電開發最具潛力的地區之一。',
    principle: {
      label: 'Wind Power',
      title: '風力發電：讓風推動葉片，再把轉動變成電',
      subtitle: '風吹動渦輪機的葉片旋轉，帶動發電機的轉子，透過電磁感應產生電流，送入電網供使用。',
      principleText:
        '自然風吹向風力渦輪機，推動三片大型葉片旋轉。葉片的旋轉動能透過傳動軸傳入機艙內的發電機，使轉子相對於定子快速轉動，透過電磁感應產生交流電。電力經升壓變壓器後，送入輸電系統。整個過程不需燃燒任何燃料，也不排放溫室氣體。',
      steps: [
        { title: '自然風吹來', description: '自然風攜帶動能，風速越高、空氣密度越大，可擷取的能量就越多。' },
        { title: '葉片旋轉', description: '風力推動三片大型葉片，葉片的翼型設計使升力大於阻力，帶動整個轉子持續轉動。' },
        { title: '傳動軸傳力', description: '葉片的機械能透過傳動軸（可搭配增速齒輪箱）傳入機艙，提升轉速以達到發電機的工作轉速。' },
        { title: '電磁感應發電', description: '發電機內的轉子旋轉，使磁場與定子線圈產生相對運動，透過電磁感應原理產生交流電（AC）。' },
        { title: '升壓輸入電網', description: '產生的電力經變壓器升壓後，透過海底電纜或陸域輸電線路送入電網供用戶使用。' }
      ],
      keyPoints: [
        '無燃燒、無碳排',
        '台灣離岸風速豐富',
        '受風速與天氣影響',
        '需搭配儲能或其他基載電力'
      ],
      energyFlow: ['風能', '動能', '機械能', '電能'],
      animationType: 'wind'
    }
  },

  biomass: {
    id: 'biomass',
    label: 'RENEWABLE ENERGY SERIES',
    title: '生質能發電：讓廢棄物成為能源',
    description:
      '生質能發電利用農業廢棄物、木材、都市垃圾等有機物質燃燒或轉換為電力。它能同時解決廢棄物處理問題，並提供不受天氣影響的穩定基載電力。',
    image: biomassImg,
    themeColor: '#1f7a46',
    gradient: 'linear-gradient(135deg, #eef8ec, #f7fef5)',
    accentGradient: 'linear-gradient(135deg, #52c47a, #1f7a46)',
    activeTextColor: '#ffffff',
    features: [
      {
        title: '廢棄物再利用',
        text: '農業秸稈、禽畜廢棄物、都市垃圾焚化等廢棄物皆可作為燃料，在發電的同時減少廢棄物量，實現資源循環利用。'
      },
      {
        title: '可調度基載電力',
        text: '不受日照或風速影響，可依需求全天候穩定供電，作為太陽能與風力的互補電源，提高整體電網的穩定性。'
      }
    ],
    factTagline: '垃圾也能發電，台灣的焚化爐同時是電廠',
    fact: '台灣目前有 24 座垃圾焚化廠兼具發電功能，每年可處理數百萬噸的都市垃圾，並回收可觀的電力。這種「廢棄物轉能源」模式，讓台灣的垃圾清運率與資源再生率長期名列全球前茅。',
    principle: {
      label: 'Biomass Power',
      title: '生質能發電：讓有機物燃燒，再把熱變成電',
      subtitle: '有機廢棄物在鍋爐中燃燒產生高溫蒸汽，蒸汽推動渦輪機旋轉，再帶動發電機產生電力。',
      principleText:
        '農業廢棄物、木材、都市垃圾等生質燃料在鍋爐中燃燒，釋放出大量熱能，加熱鍋爐內的水產生高壓蒸汽。高壓蒸汽沿蒸汽管道高速噴向蒸汽渦輪機，推動渦輪葉片旋轉，形成機械能。渦輪機再帶動發電機轉子，透過電磁感應產生電流，最終升壓送入電網。',
      steps: [
        { title: '生質燃料投入', description: '農業廢棄物、木屑、都市垃圾等有機物作為燃料，其中儲存著來自太陽能的化學能。' },
        { title: '燃燒產生熱能', description: '燃料在燃燒爐中與氧氣反應，釋放熱能，加熱鍋爐中的水，使其沸騰產生高壓蒸汽。' },
        { title: '蒸汽傳輸動能', description: '高壓蒸汽沿管道高速流向渦輪機，蒸汽攜帶的熱能轉換為流動的動能。' },
        { title: '渦輪機旋轉', description: '高速蒸汽衝擊渦輪葉片，推動渦輪快速旋轉，將蒸汽的動能轉換為機械能。' },
        { title: '發電機轉換電能', description: '渦輪帶動發電機轉子旋轉，磁場與線圈間的相對運動透過電磁感應產生交流電，升壓後送入電網。' }
      ],
      keyPoints: [
        '可利用有機廢棄物',
        '穩定可調度基載電力',
        '燃燒仍會產生碳排',
        '燃料來源需永續管理'
      ],
      energyFlow: ['化學能', '熱能', '動能', '機械能', '電能'],
      animationType: 'biomass'
    }
  },

  geo: {
    id: 'geo',
    label: 'RENEWABLE ENERGY SERIES',
    title: '地熱發電：挖掘大地的熱能',
    description:
      '地熱發電利用地殼深處的高溫蒸汽或熱水推動渦輪機發電。台灣位於環太平洋火環帶，地熱資源潛力龐大，目前開發仍屬初期，但未來擴展空間相當可觀。',
    image: geoImg,
    themeColor: '#c0401a',
    gradient: 'linear-gradient(135deg, #fff0ec, #fff8f6)',
    accentGradient: 'linear-gradient(135deg, #f07a52, #c0401a)',
    activeTextColor: '#ffffff',
    features: [
      {
        title: '全天候穩定',
        text: '地熱資源不受日照或風速影響，可 24 小時全年穩定發電，是少數能作為基載電力的再生能源，對平衡電網供需幫助極大。'
      },
      {
        title: '土地占用低',
        text: '相較於大型太陽能或風力場址，地熱電廠地面建築面積小，對地表生態與景觀的影響相對有限，較易融入既有環境。'
      }
    ],
    factTagline: '台灣地底下藏著不輸冰島的地熱潛力',
    fact: '台灣位於歐亞板塊與菲律賓海板塊的碰撞帶上，地熱梯度高，宜蘭清水、大屯山等地的地熱資源溫度可達攝氏 200 度以上。若全面開發潛在地熱資源，估計可提供台灣目前用電量的數個百分比，且幾乎不排放溫室氣體。',
    principle: null
  },

  nuclear: {
    id: 'nuclear',
    label: 'ENERGY SERIES',
    title: '核能發電：高效、低碳，但爭議未止',
    description:
      '核能利用鈾等核燃料的核分裂反應釋放熱能，加熱水蒸氣推動渦輪機發電。它的碳排放量極低、發電效率高，但安全管理與核廢料處置是長期必須面對的挑戰。',
    image: nuclearImg,
    themeColor: '#6428b4',
    gradient: 'linear-gradient(135deg, #f8f0ff, #fdf8ff)',
    accentGradient: 'linear-gradient(135deg, #b07de8, #6428b4)',
    activeTextColor: '#ffffff',
    features: [
      {
        title: '高效低碳',
        text: '核能發電的生命週期碳排放約 12 g CO₂/kWh，與陸域風電相當，遠低於天然氣與燃煤。極高的能量密度讓少量燃料即可產生龐大電量，也使核廢料體積相對有限。'
      },
      {
        title: '穩定基載電力',
        text: '不受天候影響，可 24 小時全年穩定發電，容量因數通常超過 90%，是支撐現代電網穩定運行最可靠的能源選項之一。'
      }
    ],
    factTagline: '核能的碳排放量，其實跟風電差不多',
    fact: '根據聯合國政府間氣候變遷專門委員會（IPCC）的評估，核能發電的生命週期碳排放中位數約為每度電 12 克 CO₂，與陸域風電（11 g）幾乎相同，遠低於天然氣（490 g）與燃煤（820 g）。這讓核能成為在氣候科學領域普遍被認可的低碳電力來源之一。',
    principle: null
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
    fact: '台灣 2024 年太陽光電裝置容量突破 17 GW，已成為再生能源的最大主力，占再生能源發電量約 45%。',
    principle: {
      label: 'Solar Power',
      title: '太陽能發電：把光子變成電子',
      subtitle: '太陽光打在太陽能板上，板內的矽晶片吸收光能後產生電流，再轉換成日常用電送入電網。',
      principleText:
        '太陽光照射到太陽能板，板內的矽晶片會吸收光能並釋放出電子，產生直流電。這股電流再送入逆變器，轉換成家庭與電網使用的交流電，最後升壓輸送給用戶。整個過程沒有燃燒、沒有噪音，完全靠光來發電。',
      steps: [
        { title: '接收太陽光', description: '太陽光中的光子照射到太陽能板，提供後續轉換為電能所需的能量。' },
        { title: '光電效應', description: '光子被太陽能電池中的矽半導體吸收後，電子獲得能量，從原本受束縛的狀態變成可移動的電子。' },
        { title: '形成直流電', description: '太陽能電池內部的電場引導這些電子朝固定方向移動，並經由外部電路形成直流電（DC）。' },
        { title: '轉換交流電', description: '逆變器將太陽能板產生的直流電轉換為家庭電器與電網可使用的交流電（AC）。' },
        { title: '輸送與使用', description: '交流電可供建築設備使用；多餘的電力則能經由配電系統輸送至電網。' }
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
}
