# Claude Prompt：核能資料分析頁實作

請依照以下需求，新增或修改「核能資料分析」區塊。請沿用目前專案其他能源分析頁的視覺風格、分頁結構與 Chart.js 寫法，不要大改全站樣式，也不要改動與核能無關的能源分析元件。

## 核心定位

核能不是再生能源。核燃料需要開採、濃縮與製造，並不像陽光、風、水循環那樣自然快速補充。  
但核電在運轉時排碳很低、供電穩定，因此常被放進能源轉型、減少化石燃料依賴、供電韌性與能源安全的討論裡。

請注意：

- 不要把核能寫成再生能源。
- 不要過度重複「低碳」這個詞，可以改用「運轉排放低」、「減少化石燃料依賴」、「穩定供電」、「能源安全」、「高治理要求」等說法。
- 整體口吻要客觀、溫和，不要寫成挺核或反核宣傳。
- 所有資料來源連結請放在頁面底部或資料來源集中區。

## 封面介紹文字請改成

```text
核能不是再生能源，卻常被納入能源轉型討論。它能穩定供應大量電力，運轉時排碳很低；但核廢料、安全風險、成本與社會信任，也讓它成為最具爭議的能源之一。
```

短版可用：

```text
核能不是再生能源，卻是能源轉型中繞不開的選項。它能穩定供電、降低化石燃料依賴，但也伴隨核廢料、安全、成本與社會接受度的長期爭議。
```

---

## 分頁架構

請做 4 個分頁，順序如下：

1. 台灣核能現況與公共論述
2. 核能優缺點分析
3. 核能為何被放進能源轉型討論
4. 全球核電占比前五國

---

## Page 1：台灣核能現況與公共論述

### 版面內容

請放：

- 台灣 2010–2024 核能發電量與占比折線圖。
- 2025 核電歸零與 2026 重啟審議時間軸。
- 支持核能與反對核能的論述對照卡。

注意：2025 資料口徑和 2010–2024 不同，請用時間軸或註解呈現，不要硬混進同一張來源一致的圖表。

### 台灣核能發電資料

使用經濟部能源署《2024 能源統計手冊》做 2010–2024，共 15 年，這是同一來源、同一口徑的「全國發電量」資料。

```js
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
```

### 2025 補充資訊

- 台電 2025 年系統發電量不含轉供直供為 2,524.4 億度，核能占比 1.2%。
- 若換算為發電量：約 2,524.4 億度 × 1.2% = 30.29 億度，約 3,029 GWh。
- 這是「台電系統發購電量」口徑，和能源署「全國發電量」口徑不同，請不要直接接在 2010–2024 圖表裡。

### 台灣政策時間軸

請做成簡短 timeline：

- 2025-05-17：核三廠 2 號機運轉執照到期並停機，台灣核電發電占比降為零，完成階段性非核。
- 2026-03-21：總統賴清德表示，核二、核三具備重啟條件，台電準備將重啟計畫送核安會審議。
- 2026-03-27：台電向核安會送出核三廠重啟/換照相關申請文件。

### 支持核能論述

請用溫和語氣寫，不要誇張。可用這段：

```text
支持核能者通常重視供電穩定、減少化石燃料依賴與能源安全。他們認為，台灣用電需求因半導體、AI 與電氣化而增加，在再生能源、儲能與電網尚未完全補足之前，核能可提供穩定電力，也能減少進口天然氣價格波動對電價與供電的壓力。
```

可拆成四點：

- 穩定供電：核電可長時間連續運轉，不受日照與風況影響。
- 減少排放：核電運轉時幾乎不燃燒化石燃料，可降低部分火力發電需求。
- 能源安全：核燃料能量密度高、可儲備時間長，較不受短期燃料船期影響。
- 過渡功能：在再生能源、儲能與電網建設完成前，可作為穩定補充電源。

### 反對核能論述

請用溫和語氣寫，不要誇張。可用這段：

```text
反對核能者通常重視核安風險、核廢料責任與社會治理。他們認為，老舊核電廠延役或重啟需要面對設備老化、耐震與極端事故風險；用過核燃料與最終處置場仍未解決，也可能把長期成本與風險留給下一代。
```

可拆成四點：

- 核廢料：用過核燃料最終處置尚未解決，低放射性廢棄物也有長期社會爭議。
- 安全風險：台灣地震頻繁，老舊機組重啟需要嚴格安全審查與設備更新。
- 成本與時間：重啟、延役、核安升級、燃料採購與除役成本不一定比替代方案低。
- 社會信任：地方居民、原住民族、核廢料場址與事故風險都涉及長期社會溝通。

### Page 1 來源

- 經濟部能源署《2024 能源統計手冊》：https://www.esist.org.tw/attachments/handbook/2024/ebook/2024EnergyStaHandBook.pdf
- 台電｜歷年發購電量占比：https://www.taipower.com.tw/2289/2363/2367/2372/10312/
- 中央社｜核三 2 號機停機：https://www.cna.com.tw/news/afe/202505110024.aspx
- 中央社｜核二、核三具重啟條件：https://www.cna.com.tw/news/afe/202603210102.aspx
- 公視｜賴清德啟動核電重啟程序：https://news.pts.org.tw/article/800046
- 公視｜核三公投正反論述：https://news.pts.org.tw/article/764866

---

## Page 2：核能優缺點分析

### 版面內容

請用左右對照或卡片呈現：

- 優點
- 限制與風險

可在中間或下方做一張「核能定位圖」：穩定供電、排放低、高爭議。

### 優點文案

可用這段：

```text
核能的最大優點是穩定與高能量密度。IEA 指出，核能目前提供全球約 10% 電力，也是水力之後第二大低排放電力來源。核電廠可長時間連續運轉，對需要穩定供電的電力系統有價值。
```

優點項目：

- 運轉排放低：發電過程不燃燒煤、油、氣，生命週期排放也遠低於化石燃料。
- 穩定：可長時間連續發電，補足太陽能與風力的間歇性。
- 高能量密度：少量燃料可產生大量電力。
- 土地需求小：與同發電量的風光相比，地面占用較小。
- 減少空污：若替代燃煤或燃氣，可降低空氣污染物與溫室氣體。

### 缺點與風險文案

可用這段：

```text
核能的爭議核心在風險與治理成本。核電需要極高安全標準，事故雖罕見但後果嚴重；用過核燃料需要長期管理；新建核電常面臨高資本成本、工期延誤與社會接受度問題。
```

風險項目：

- 核廢料：高階核廢料需長期隔離與管理，最終處置場政治與社會難度高。
- 事故風險：重大事故機率低，但後果高，會造成長期環境與社會衝擊。
- 成本與工期：新建核電廠資本成本高，且許多國家有延宕與超支經驗。
- 老舊機組延役：需要審查設備老化、耐震、冷卻、安全系統與燃料貯存。
- 戰爭與安全：烏克蘭札波羅熱核電廠顯示，核設施在戰爭中會成為特殊風險點。

### 可補充的資料句

- Our World in Data 整理指出，核能與現代再生能源在健康風險與排放上都遠優於化石燃料。
- IEA 指出，核能在過去 50 年避免了約 70 Gt CO2 排放。
- IEA 也指出，核能可補充再生能源，提供可調度的低排放電力。

### Page 2 來源

- IEA｜Nuclear Power：https://www.iea.org/energy-system/electricity/nuclear-power
- IEA｜The Path to a New Era for Nuclear Energy：https://www.iea.org/reports/the-path-to-a-new-era-for-nuclear-energy/executive-summary
- Our World in Data｜Safest and cleanest sources of energy：https://ourworldindata.org/safest-sources-of-energy
- Our World in Data｜Nuclear Energy：https://ourworldindata.org/nuclear-energy

---

## Page 3：核能為什麼被放進能源轉型討論

### 版面內容

請做成三層判斷，讓讀者理解「核能不是再生能源，但為何常和綠能、淨零與能源安全一起被討論」。

### 1. 它不是再生能源

```text
核能使用鈾等核燃料，燃料需要開採、濃縮與製造，並不是像陽光、風、水循環那樣可快速自然補充，因此不屬於再生能源。
```

### 2. 它的運轉排放很低

```text
核電在運轉時幾乎不排放二氧化碳，從生命週期來看，碳排也遠低於煤、油、天然氣。因此 IEA、OWID 等國際資料常把核能與再生能源一起放在「減少化石燃料依賴」的討論中。
```

### 3. 它是否算「綠能」取決於定義

```text
如果「綠能」指的是再生能源，核能不算；如果「綠能」指的是能減少化石燃料與空污的電力選項，許多國家與政策討論會把核能納入。歐盟永續金融分類也在特定條件下將核能列入可被視為永續的經濟活動，但仍要求核廢料與安全標準。
```

### 小結

```text
所以核能最準確的定位是：非再生、運轉排放低、穩定供電、高治理要求。
```

### 可做四象限

- 再生能源：太陽能、風力、水力、地熱、生質能
- 非再生但排放低：核能
- 化石燃料搭配減排技術：天然氣搭配 CCUS（仍有爭議）
- 高碳能源：煤、油、未減排天然氣

### Page 3 來源

- IEA｜Nuclear Power：https://www.iea.org/energy-system/electricity/nuclear-power
- Our World in Data｜Nuclear Energy：https://ourworldindata.org/nuclear-energy
- European Commission｜EU taxonomy sustainable activities：https://climate.ec.europa.eu/eu-action/eu-taxonomy-sustainable-activities_en

---

## Page 4：全球核電占比前五國

### 版面內容

這頁不要只做排名，要讓讀者理解哪些國家高度依賴核能，以及它們為何選擇這條路。  
每個國家卡片請包含：

- 2024 核能發電占比
- 核能發電量
- 規劃理由
- 優點
- 潛在危險

### 2024 核能發電占比前五

```js
const topNuclearShareCountries = [
  { country: 'France', zh: '法國', sharePct: 67.3, generationTwh: 364.4 },
  { country: 'Slovakia', zh: '斯洛伐克', sharePct: 60.6, generationTwh: 17.0 },
  { country: 'Ukraine', zh: '烏克蘭', sharePct: 52.0, generationTwh: 49.9 },
  { country: 'Hungary', zh: '匈牙利', sharePct: 47.1, generationTwh: 15.2 },
  { country: 'Bulgaria', zh: '保加利亞', sharePct: 41.6, generationTwh: 15.1 },
]
```

### 法國

- 規劃理由：1970 年代石油危機後大規模發展核電，以降低化石燃料進口依賴。
- 優點：電力系統高度去化石燃料化，核能支撐穩定供電與電力出口。
- 潛在危險：老舊機組維修、集中式電力系統風險、乾旱與冷卻水限制、新建機組成本與工期壓力。

### 斯洛伐克

- 規劃理由：國內大型化石燃料資源有限，核能提供穩定基載與能源自主性。
- 優點：核能占比高，降低進口化石燃料依賴，電力碳排較低。
- 潛在危險：高度依賴少數核電站，燃料供應與老舊機組管理需長期治理。

### 烏克蘭

- 規劃理由：核能長期是烏克蘭電力系統核心，可降低對煤氣燃料依賴。
- 優點：在戰爭與能源基礎設施受攻擊下，核電仍是重要電力支柱。
- 潛在危險：戰爭下核安風險極高，札波羅熱核電廠被占領與外電中斷事件顯示核設施在軍事衝突中非常脆弱。

### 匈牙利

- 規劃理由：Paks 核電廠是匈牙利主要穩定電源，政府也推動 Paks II 新機組。
- 優點：提供接近一半國內電力，支撐穩定供電並減少化石燃料依賴。
- 潛在危險：新建案涉及俄羅斯技術與融資，在歐洲地緣政治與制裁環境下有供應鏈與外交風險。

### 保加利亞

- 規劃理由：Kozloduy 是國內主要大型電源，政府規劃以新核電維持低排放穩定電力。
- 優點：核電提供超過三分之一電力，降低煤電壓力與碳排。
- 潛在危險：大型核電投資成本高、工期長，若成本超支可能壓迫電價與公共財政。

### Page 4 來源

- World Nuclear Association｜Nuclear Generation by Country：https://world-nuclear.org/information-library/facts-and-figures/nuclear-generation-by-country
- RTE France｜French Annual Electricity Review 2024：https://analysesetdonnees.rte-france.com/en/annual-review-2024/keyfindings
- World Nuclear Association｜Nuclear Power in Slovakia：https://world-nuclear.org/information-library/country-profiles/countries-o-s/slovakia
- IAEA｜Ukraine nuclear safety updates：https://www.iaea.org/newscenter/pressreleases/update-267-iaea-director-general-statement-on-situation-in-ukraine
- Paks II｜Paks provided nearly half of domestic electricity in 2024：https://paks2.hu/web/paks-2-en/w/paks-provided-nearly-half-of-domestic-electricity-production-again-in-2024
- Kozloduy NPP：https://kznpp.org/en/about-us/about-knpp-kozloduy

---

## 實作注意事項

- 請使用目前專案既有的 Vue component 風格。
- 若其他能源分析頁使用 Chart.js，這裡也請使用 Chart.js。
- 請建立可維護的資料結構，例如 `taiwanNuclearData`、`supportArguments`、`oppositionArguments`、`nuclearPros`、`nuclearRisks`、`topNuclearShareCountries`。
- 圖表和卡片文字可以依照版面微調，但不要改變事實方向。
- 手機版請讓圖表與卡片垂直排列，避免文字擠壓。
- 所有來源連結請集中在每頁底部或最後的完整資料來源區。
- 不要啟動 dev server。
