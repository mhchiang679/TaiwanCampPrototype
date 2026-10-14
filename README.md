# 🏕️ TaiwanCamp 台灣露營地圖搜尋平台

基於 **Vite + React + TypeScript + Tailwind CSS + Leaflet** 建構的現代化露營地圖搜尋平台，整合 **Google Places API** 與 **Google Gemini AI 結構化評論提煉**，並支援 **Supabase (PostgreSQL + PostGIS)** 空間定位與地理查詢。

---

## 📂 專案目錄結構 (Architecture)

```plaintext
my-camp-app/
├── index.html                           # Vite HTML 進入點 (載入 Leaflet CSS)
├── package.json                         # 專案依賴管理
├── vite.config.ts                       # Vite 設定檔
├── tsconfig.json                        # TypeScript 編譯設定
├── tailwind.config.js                   # Tailwind CSS 配置
├── .env.example                         # 環境變數設定範例
├── prototype.html                       # 原始單一檔案 Prototype (保留參考)
│
├── src/
│   ├── main.tsx                         # React 應用程式掛載點
│   ├── App.tsx                          # 主應用元件 (狀態管理與全域佈局)
│   ├── index.css                        # 全域樣式與自訂滾動條設定
│   │
│   ├── types/                           # TypeScript 型別定義
│   │   ├── campsite.ts                  # Campsite, CampsiteScores, DistrictSummary, UGC
│   │   └── index.ts
│   │
│   ├── data/                            # 靜態與展示 Mock 資料
│   │   └── taianCampsites.ts            # 苗栗泰安 10 大熱門營地、五峰鄉、仁愛鄉資料
│   │
│   ├── components/                      # 模組化 UI 元件
│   │   ├── Map/
│   │   │   └── CampingMap.tsx           # Leaflet 地圖核心元件 (動態 Marker、Popup、平移)
│   │   ├── Sidebar/
│   │   │   ├── DistrictSummaryCard.tsx  # 行政區 AI 特色卡片 (海拔、雲海特色、路況警示)
│   │   │   ├── SearchBar.tsx            # 營地關鍵字即時搜尋列
│   │   │   ├── TagFilter.tsx            # 快速特色標籤複選過濾器
│   │   │   ├── AdvancedScoreFilter.tsx  # 多維度評分雙向滑桿 (衛浴整潔、抵達難易度)
│   │   │   └── Sidebar.tsx              # 側邊欄整合主元件
│   │   └── Campsite/
│   │       ├── CampsiteCard.tsx         # 營地列表卡片 (三大評分簡報、特色標籤)
│   │       └── DetailModal.tsx          # 營地詳情視窗 (三大維度進度條、AI 摘要、UGC 回饋)
│   │
│   └── services/                        # API 與資料服務層
│       ├── supabaseClient.ts            # Supabase 連線客戶端與環境檢查
│       ├── campsiteService.ts           # fetchCampsitesByDistrict 支援 Supabase 與 Mock 優雅降級
│       └── index.ts
│
├── supabase/
│   └── migrations/
│       └── 20261014_init_campsites.sql  # PostGIS 空間資料庫結構與泰安營地初始 Seed 資料
│
└── scripts/
    └── extract_campsite_reviews.py      # AI ETL 管道 (Google Places -> Gemini Structured Output -> Supabase)
```

---

## 🚀 快速啟動 (Quick Start)

### 1. 安裝相依套件
```bash
npm install
```

### 2. 啟動開發伺服器
```bash
npm run dev
```
瀏覽器將自動開啟 `http://localhost:3000`。
> **提示**：系統具備自動降級防護，即使未設定 Supabase 金鑰，亦可立即以 Mock 模式暢快瀏覽體驗 10 大泰安營地與五峰/仁愛鄉切換。

### 3. 建置生產環境版本
```bash
npm run build
```

---

## 🗄️ 二、資料庫 Schema 與 Supabase 串接 (Database & API)

已在 `supabase/migrations/20261014_init_campsites.sql` 建立包含 PostGIS 空間地理位置的完整 Migration SQL。

### 資料庫表結構：
1. **`campsites`**：營地主表（含經緯度與 PostGIS `location GEOGRAPHY(POINT, 4326)` 空間欄位與自動更新觸發器）
2. **`campsite_scores`**：結構化評分表（1.0 - 5.0 分制：衛浴整潔 `cleanliness`、環境管理 `management`、抵達難易 `road`）
3. **`campsite_tags`**：營地特色標籤表（草地、棧板、雨棚、雲海、高海拔、寵物友善、路況良好等）
4. **`campsite_summaries`**：AI 評論摘要表（儲存由 Gemini 提煉之 3 句關鍵精華摘要）

### 前端 API 連接：
- 位於 `src/services/campsiteService.ts`：
  ```typescript
  fetchCampsitesByDistrict(districtName: string, tags?: string[]): Promise<Campsite[]>
  ```
- 支援依行政區（例如「泰安鄉」）過濾。
- 支援標籤（Tags）複選篩選。
- 未設定 Supabase 時自動無縫回退至本機 Mock 資料。

---

## 🤖 三、AI 評論提取與結構化管道 (LLM Pipeline)

腳本路徑：`scripts/extract_campsite_reviews.py`

此 ETL 管道實現從 Google 評論自動化到資料庫入庫：
1. **[Google Places API]**：依據傳入之 `Place ID` 取得營地電話、地址、評分與最新的 20 則評論文字。
2. **[Gemini API Structured Outputs]**：使用 JSON Schema 強制輸出結構化評分（清潔度、管理、路況）、精選標籤與 3 句繁體中文關鍵重點摘要。
3. **[Supabase PostGIS]**：將結果自動寫入 `campsites`、`campsite_scores`、`campsite_tags`、`campsite_summaries`。

### 執行範例：
```bash
# 預覽測試 (Dry Run 模式，無需金鑰即可驗證解析邏輯)
python scripts/extract_campsite_reviews.py --dry_run

# 正式執行傳入 Google Place ID
python scripts/extract_campsite_reviews.py --place_id <GOOGLE_PLACE_ID>
```

---

## 🧭 四、進階擴充功能 (Feature Highlights)

1. **行政區層級下鑽 (Drill-down)**：
   - 頂部導覽列支援一鍵切換「苗栗縣泰安鄉」、「新竹縣五峰鄉」、「南投縣仁愛鄉」。
   - 切換時側邊欄即刻調取該區域的 **AI 區域特色卡片**，地圖視角自動平移適配。
2. **多維度滑桿篩選 (Advanced Score Filters)**：
   - 側邊欄可展開「衛浴整潔度 ≥ 4.0」、「抵達難易度 ≥ 3.5」雙向滑桿，精準篩選適合新手的優質營地。
3. **露友即時回饋 / UGC 社群共創 (User-Generated Content)**：
   - 營地詳情視窗內建露友回饋專區，露友可即時補充最新路況回報與營區近況，達成 UGC 與 AI 數據雙向互補。
