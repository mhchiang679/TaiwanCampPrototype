import { Campsite, DistrictSummary } from '../types';

export const districtSummaries: Record<string, DistrictSummary> = {
  '全部地區': {
    districtName: '全部地區',
    city: '全台灣',
    title: '全台灣露營熱門特色總覽 (100 筆精選)',
    badge: 'AI 台灣露營指南',
    description: '收錄全台灣北中南東 100 大指標熱門營地！涵蓋高海拔雲海、高山避暑、親水溪流、天然溫泉、櫻花季與美學免裝備豪華露營。支援 AI 多維度評分篩選（衛浴、管理、路況），幫您精準找到最理想的露營目的地！',
    highlightPoints: ['100 大營地精選', '全台指標熱點', 'AI 多維度評分'],
    warningRoad: '山區路況多變，出發前建議查閱即時路況與氣象預報'
  },
  '泰安鄉': {
    districtName: '泰安鄉',
    city: '苗栗縣',
    title: '泰安鄉露營特色懶人包',
    badge: 'AI 評論總結',
    description: '海拔約 600m - 1,200m，以壯麗雲海、夜景與高海拔避暑聞名。多數營地衛浴清潔度佳，但最後 3-5 公里產業道路較窄陡、會車較不易，建議新手白天下山/上山。',
    highlightPoints: ['壯麗雲海', '夜景', '高海拔避暑'],
    warningRoad: '最後 3-5 公里產業道路較窄陡、會車較不易'
  },
  '尖石鄉': {
    districtName: '尖石鄉',
    city: '新竹縣',
    title: '尖石鄉露營特色懶人包',
    badge: 'AI 評論總結',
    description: '新竹露營第一重鎮！海拔涵蓋 400m 至 1500m 以上，擁有壯麗宇老梯田、神木巨木群與新竹百萬夜景。四季皆有不同景致，春季賞櫻、秋賞甜柿。',
    highlightPoints: ['宇老梯田', '百萬夜景', '司馬庫斯神木'],
    warningRoad: '竹60線後段彎道較多，前往後山部落需注意油門與會車'
  },
  '五峰鄉': {
    districtName: '五峰鄉',
    city: '新竹縣',
    title: '五峰鄉露營特色懶人包',
    badge: 'AI 評論總結',
    description: '海拔約 800m - 1,500m，以壯闊日出、杉木林高聳林相及泰雅原民部落風情著稱。路況主要為南清公路，雙線平穩好開，僅深入各部落支線需留意會車。',
    highlightPoints: ['巨木森林系', '雲海日出', '泰雅文化'],
    warningRoad: '部分高海拔營位支線彎度較大，建議減速慢行'
  },
  '仁愛鄉': {
    districtName: '仁愛鄉',
    city: '南投縣',
    title: '仁愛鄉 (清境/武界/奧萬大) 露營懶人包',
    badge: 'AI 評論總結',
    description: '海拔約 1,000m - 2,300m，坐擁中央山脈百岳雄姿、清境歐風農場、武界雲瀑日出與奧萬大楓紅。四季涼爽宜人，是全台頂級高海拔避暑露營首選。',
    highlightPoints: ['百岳壯景', '武界雲瀑', '四季涼爽避暑'],
    warningRoad: '台14甲線連假車流較多，建議避開尖峰時段出發'
  },
  '南庄鄉': {
    districtName: '南庄鄉',
    city: '苗栗縣',
    title: '南庄鄉露營特色懶人包',
    badge: 'AI 評論總結',
    description: '苗栗經典慢活勝地，結合蓬萊溪護魚步道、杉木林秘境與南庄老街美食。海拔適中氣候宜人，溪流清澈戲水消暑首選。',
    highlightPoints: ['護魚步道', '清澈溪流', '杉木森林'],
    warningRoad: '苗21線路面平緩，進出南庄老街注意假日車潮'
  },
  '卓蘭鎮': {
    districtName: '卓蘭鎮',
    city: '苗栗縣',
    title: '卓蘭鎮 (水果之鄉/奢華露營) 懶人包',
    badge: 'AI 評論總結',
    description: '全台灣頂級美學免裝備豪華露營集中地！地處西坪高台，氣候溫和，盛產葡萄、水梨與柑橘，結合私廚料理與露天風呂享受極致。',
    highlightPoints: ['奢華Glamping', '免搭帳私廚', '水果採摘'],
    warningRoad: '西坪高台道路平坦筆直，各型車輛皆可輕鬆抵達'
  },
  '魚池鄉': {
    districtName: '魚池鄉',
    city: '南投縣',
    title: '魚池鄉 (日月潭環湖) 露營懶人包',
    badge: 'AI 評論總結',
    description: '倚傍全台最大天然湖泊日月潭，晨曦薄霧倒映湖面如詩如畫。營區多配備SUP立槳、獨木舟體驗與環湖自行車道，觀光補給極度便利。',
    highlightPoints: ['湖景第一排', 'SUP立槳', '環潭自行車'],
    warningRoad: '環潭公路路面平整品質優良，依速限行駛即可'
  },
  '和平區': {
    districtName: '和平區',
    city: '台中市',
    title: '台中和平區 (武陵/福壽山/大雪山) 懶人包',
    badge: 'AI 評論總結',
    description: '全台海拔最高露營聚落！擁有全台最高的福壽山（2574m）與武陵農場櫻花露營區。春櫻、夏果、秋楓、冬雪，四季皆是全台露友嚮往聖地。',
    highlightPoints: ['最高海拔2574m', '武陵櫻花', '宇宙級銀河星空'],
    warningRoad: '中高海拔長途駕駛，請檢查車輛水箱剎車並備妥高山保暖裝備'
  },
  '復興區': {
    districtName: '復興區',
    city: '桃園市',
    title: '桃園復興區 (拉拉山水蜜桃/角板山) 懶人包',
    badge: 'AI 評論總結',
    description: '北台灣高海拔露營第一線！海拔1200m-1600m，夏季水蜜桃飄香避暑勝地，春季巴陵滿山粉紅櫻花綻放，北橫山景磅礡秀麗。',
    highlightPoints: ['拉拉山水蜜桃', '富士櫻花海', '壯闊雪山視野'],
    warningRoad: '北橫公路轉巴陵產業道路彎多，注意日間行車安全'
  },
  '南澳鄉': {
    districtName: '南澳鄉',
    city: '宜蘭縣',
    title: '宜蘭大同/南澳 (森林/溪流/海景) 懶人包',
    badge: 'AI 評論總結',
    description: '依山傍海的東台灣露營天堂！包含知名那山那谷溪流漂流、粉鳥林海灣日出露營與鳩之澤天然溫泉，體驗多樣豐富無比愜意。',
    highlightPoints: ['南澳溪漂流', '太平洋日出', '鳩之澤溫泉'],
    warningRoad: '蘇花改通車後路況極為平順，下交流道即可輕鬆入營'
  },
  '梅山鄉': {
    districtName: '梅山鄉',
    city: '嘉義縣',
    title: '嘉義阿里山/梅山 (茶園/琉璃光) 懶人包',
    badge: 'AI 評論總結',
    description: '置身於阿里山與梅山千公頃翠綠茶園中，秋冬夜晚著名的七彩「琉璃光」與象山雲瀑令人震撼，漫步竹林與茶香之間洗滌心靈。',
    highlightPoints: ['頂石棹琉璃光', '高山烏龍茶園', '臥虎藏龍綠色竹林'],
    warningRoad: '阿里山公路路況良好，行經山區注意午後起霧放慢速度'
  }
};

export const taianDistrictSummary: DistrictSummary = districtSummaries['泰安鄉'];

export const taiwanCampsites: Campsite[] = [
  {
    "id": 1,
    "name": "鑽石林露營區",
    "lat": 24.4378,
    "lng": 120.9412,
    "phone": "0910-282-690",
    "address": "苗栗縣泰安鄉錦水村村6鄰",
    "googleRating": 4.4,
    "reviewsCount": 680,
    "tags": [
      "草地營位",
      "木棧板",
      "雨棚區",
      "壯麗雲海",
      "高海拔避暑",
      "寵物友善"
    ],
    "scores": {
      "cleanliness": 4.3,
      "management": 4.2,
      "road": 3.0
    },
    "summaries": [
      "高海拔視角極佳，秋冬季節極容易看到壯觀雲海與落日晚霞。",
      "營位區分多，碎石、草地、雨棚區皆有，設施齊全。",
      "最後一段產業道路較窄，會車需稍加留意建議白天上山。"
    ],
    "district": "泰安鄉",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 2,
    "name": "烏嘎彥露營區",
    "lat": 24.4395,
    "lng": 120.9388,
    "phone": "0925-000-609",
    "address": "苗栗縣泰安鄉高熊垣136號",
    "googleRating": 4.5,
    "reviewsCount": 820,
    "tags": [
      "草地營位",
      "壯麗雲海",
      "高海拔避暑",
      "森林系",
      "百萬夜景"
    ],
    "scores": {
      "cleanliness": 4.5,
      "management": 4.4,
      "road": 2.8
    },
    "summaries": [
      "鄰近著名烏嘎彥竹林隧道，景致宛如日本嵐山，拍照極美。",
      "頂層營位視野無限好，夕陽、雲海與夜景非常震撼。",
      "產業道路坡度較大，新手駕駛建議提早於白天抵達以策安全。"
    ],
    "district": "泰安鄉",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 3,
    "name": "泰安覓境露營區",
    "lat": 24.4532,
    "lng": 120.9631,
    "phone": "0955-810-825",
    "address": "苗栗縣泰安鄉錦水村圓墩39-1號",
    "googleRating": 4.7,
    "reviewsCount": 310,
    "tags": [
      "草地營位",
      "木棧板",
      "森林系",
      "路況良好",
      "五星衛浴"
    ],
    "scores": {
      "cleanliness": 4.9,
      "management": 4.8,
      "road": 4.5
    },
    "summaries": [
      "離溫泉區很近，沿途道路平緩，完全不需要走險峻山路！",
      "營區樹木充沛，夏天遮陽效果極佳，營主維護非常用心。",
      "衛浴乾淨如飯店，水壓穩定且熱水充足大推。"
    ],
    "district": "泰安鄉",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 4,
    "name": "耀婆山露營區",
    "lat": 24.4421,
    "lng": 120.9455,
    "phone": "0910-065-802",
    "address": "苗栗縣泰安鄉錦水村",
    "googleRating": 4.6,
    "reviewsCount": 420,
    "tags": [
      "草地營位",
      "壯麗雲海",
      "高海拔避暑",
      "寵物友善",
      "百萬夜景"
    ],
    "scores": {
      "cleanliness": 4.6,
      "management": 4.5,
      "road": 3.2
    },
    "summaries": [
      "正對耀婆山山頭，地勢雄偉，山景氣勢磅礡。",
      "草皮保養極好，厚實踩起來舒服，孩子活動安心。",
      "營主晚上會主動提醒大家降低音量，夜間安靜度極佳。"
    ],
    "district": "泰安鄉",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 5,
    "name": "土牧驛健康農莊露營區",
    "lat": 24.4682,
    "lng": 120.978,
    "phone": "0905-630-811",
    "address": "苗栗縣泰安鄉八卦村4鄰",
    "googleRating": 4.6,
    "reviewsCount": 550,
    "tags": [
      "草地營位",
      "溪流戲水",
      "路況良好",
      "寵物友善"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.6,
      "road": 4.2
    },
    "summaries": [
      "緊鄰清澈八卦溪，夏天小朋友可以安全玩水觀察生態。",
      "腹地極大，草皮寬廣平坦，活動空間充足。",
      "道路平緩好開，車輛可直接駛至營位旁上下裝備極為便利。"
    ],
    "district": "泰安鄉",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 6,
    "name": "放牛吃草露營區",
    "lat": 24.4361,
    "lng": 120.9392,
    "phone": "0980-008-000",
    "address": "苗栗縣泰安鄉錦水村",
    "googleRating": 4.5,
    "reviewsCount": 290,
    "tags": [
      "草地營位",
      "壯麗雲海",
      "百萬夜景",
      "高海拔避暑",
      "小包區/安靜"
    ],
    "scores": {
      "cleanliness": 4.4,
      "management": 4.6,
      "road": 3.0
    },
    "summaries": [
      "梯田式營位設計，視野不會被前排帳篷擋住，視野開闊。",
      "夜晚能直接遠眺苗栗市區夜景與繁星，氣氛浪漫。",
      "營主熱情好客，會協助引導停車與安排營位。"
    ],
    "district": "泰安鄉",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 7,
    "name": "洗水山露營區",
    "lat": 24.429,
    "lng": 120.9335,
    "phone": "0928-000-123",
    "address": "苗栗縣泰安鄉清安村",
    "googleRating": 4.3,
    "reviewsCount": 240,
    "tags": [
      "草地營位",
      "壯麗雲海",
      "高海拔避暑",
      "森林系",
      "花季/採果"
    ],
    "scores": {
      "cleanliness": 4.2,
      "management": 4.3,
      "road": 2.5
    },
    "summaries": [
      "海拔將近 1000 公尺，春天有滿山櫻花開，風景美不勝收。",
      "雲海經常在清晨滿溢到腳邊，很有身處仙境的氛圍。",
      "最後一公里山路較為狹陡，建議使用低速檔小心慢行。"
    ],
    "district": "泰安鄉",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 8,
    "name": "泰安拿六露營區",
    "lat": 24.441,
    "lng": 120.948,
    "phone": "0932-668-232",
    "address": "苗栗縣泰安鄉錦水村",
    "googleRating": 4.7,
    "reviewsCount": 180,
    "tags": [
      "木棧板",
      "草地營位",
      "壯麗雲海",
      "小包區/安靜"
    ],
    "scores": {
      "cleanliness": 4.8,
      "management": 4.9,
      "road": 3.3
    },
    "summaries": [
      "營主管理嚴格，夜間十點準時提醒熄燈放低音量，睡眠品質佳。",
      "大型木棧板平整且保養良好，環境乾淨幾乎無小黑蚊。",
      "小包區設定適合家庭或好友包區聚會，不受打擾。"
    ],
    "district": "泰安鄉",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 9,
    "name": "賽夏黃金溫泉露營區",
    "lat": 24.4611,
    "lng": 120.9698,
    "phone": "0937-005-520",
    "address": "苗栗縣泰安鄉錦水村",
    "googleRating": 4.4,
    "reviewsCount": 390,
    "tags": [
      "雨棚區",
      "草地營位",
      "天然溫泉",
      "路況良好"
    ],
    "scores": {
      "cleanliness": 4.2,
      "management": 4.1,
      "road": 4.3
    },
    "summaries": [
      "營區內附設天然溫泉湯池，露營同時還能泡湯徹底放鬆。",
      "挑高雨棚區空間寬敞，下雨天露營完全不受天候干擾。",
      "緊鄰苗62線主要道路，雙向全線柏油好開無負擔。"
    ],
    "district": "泰安鄉",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 10,
    "name": "瑪達法寶露營區",
    "lat": 24.448,
    "lng": 120.952,
    "phone": "0912-883-350",
    "address": "苗栗縣泰安鄉清安村大坪部落",
    "googleRating": 4.5,
    "reviewsCount": 210,
    "tags": [
      "草地營位",
      "雨棚區",
      "螢火蟲生態",
      "原民部落文化",
      "寵物友善"
    ],
    "scores": {
      "cleanliness": 4.5,
      "management": 4.5,
      "road": 3.5
    },
    "summaries": [
      "每年4至5月營區周邊螢火蟲成群飛舞，夜間生態導覽精彩。",
      "綠油油大草皮踩踏舒適，維護得相當用心。",
      "營主原住民親切熱情，常主動分享泰雅文化小故事。"
    ],
    "district": "泰安鄉",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 11,
    "name": "司馬限山情露營區",
    "lat": 24.4289,
    "lng": 120.9582,
    "phone": "0933-577-909",
    "address": "苗栗縣泰安鄉中興村5鄰司馬限1-38號",
    "googleRating": 4.8,
    "reviewsCount": 512,
    "tags": [
      "草地營位",
      "壯麗雲海",
      "高海拔避暑",
      "百萬夜景",
      "星空銀河"
    ],
    "scores": {
      "cleanliness": 4.8,
      "management": 4.7,
      "road": 3.1
    },
    "summaries": [
      "坐落於司馬限山稜線，坐擁雲海第一排景致與壯麗落日。",
      "衛浴熱水充足水壓強，營主打掃勤快維持極度整潔。",
      "最後3公里產業道路較窄會車需慢行，建議天黑前入營。"
    ],
    "district": "泰安鄉",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1517824806704-9040b037703b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 12,
    "name": "司馬限雲端露營區",
    "lat": 24.431,
    "lng": 120.9605,
    "phone": "0978-453-730",
    "address": "苗栗縣泰安鄉中興村司馬限部落",
    "googleRating": 4.7,
    "reviewsCount": 430,
    "tags": [
      "草地營位",
      "壯麗雲海",
      "高海拔避暑",
      "星空銀河",
      "花季/採果"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.8,
      "road": 3.0
    },
    "summaries": [
      "海拔約1200公尺，常常帳篷拉開門就是翻騰的雲海奇景。",
      "營主親切細心，晚上會巡視營區維護露友靜音休息品質。",
      "路況坡度較顯著，建議自駕露友注意行車檔位。"
    ],
    "district": "泰安鄉",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 13,
    "name": "友泰溫泉露營區",
    "lat": 24.4625,
    "lng": 120.9715,
    "phone": "03-794-1868",
    "address": "苗栗縣泰安鄉錦水村6鄰圓墩46-2號",
    "googleRating": 4.4,
    "reviewsCount": 380,
    "tags": [
      "天然溫泉",
      "雨棚區",
      "木棧板",
      "路況良好"
    ],
    "scores": {
      "cleanliness": 4.4,
      "management": 4.3,
      "road": 4.6
    },
    "summaries": [
      "結合泰安著名碳酸氫鈉溫泉，露營兼泡美人湯極度舒壓。",
      "雨棚遮蔽面積大，設備齊全適合親子家庭輕鬆露營。",
      "沿苗62線全線雙向通暢，完全沒有難開山路。"
    ],
    "district": "泰安鄉",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 14,
    "name": "逸世界露營區",
    "lat": 24.4345,
    "lng": 120.936,
    "phone": "0980-903-750",
    "address": "苗栗縣泰安鄉大興村高熊垣5鄰",
    "googleRating": 4.5,
    "reviewsCount": 610,
    "tags": [
      "草地營位",
      "木棧板",
      "高海拔避暑",
      "壯麗雲海",
      "百萬夜景"
    ],
    "scores": {
      "cleanliness": 4.6,
      "management": 4.5,
      "road": 3.2
    },
    "summaries": [
      "分區規劃完善，高階視野區可遠眺苗栗平原璀璨百萬夜景。",
      "冰箱、吹風機、飲水機等公用設備完善齊全。",
      "大興村產業道路彎道較多，進出請減速慢行。"
    ],
    "district": "泰安鄉",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 15,
    "name": "高熊卡露營區",
    "lat": 24.438,
    "lng": 120.935,
    "phone": "0921-930-812",
    "address": "苗栗縣泰安鄉大興村4鄰高熊垣61號",
    "googleRating": 4.6,
    "reviewsCount": 340,
    "tags": [
      "草地營位",
      "百萬夜景",
      "寵物友善",
      "親子推薦"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.6,
      "road": 3.3
    },
    "summaries": [
      "草皮柔軟茂密，營主嚴格控管帳數不超收，活動空間極大。",
      "衛浴男女分開且乾濕分離，熱水水溫非常穩定。",
      "建議從大湖方向依營區指示牌進入，山路相對好走。"
    ],
    "district": "泰安鄉",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 16,
    "name": "鹿過南庄露營區",
    "lat": 24.595,
    "lng": 121.002,
    "phone": "0988-511-738",
    "address": "苗栗縣南庄鄉南江村東江100號",
    "googleRating": 4.8,
    "reviewsCount": 420,
    "tags": [
      "草地營位",
      "溪流戲水",
      "寵物友善",
      "路況良好",
      "免裝備豪華露營"
    ],
    "scores": {
      "cleanliness": 4.9,
      "management": 4.8,
      "road": 4.5
    },
    "summaries": [
      "近南庄老街，旁邊有清涼小溪流，夏天戲水避暑首選。",
      "五星級乾濕分離衛浴，附洗沐用品與免治馬桶超貼心。",
      "南庄主要外環道直達，路況平順無任何會車困擾。"
    ],
    "district": "南庄鄉",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1587547131116-a0655a526190?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 17,
    "name": "南庄星語軒露營區",
    "lat": 24.605,
    "lng": 121.015,
    "phone": "0937-123-888",
    "address": "苗栗縣南庄鄉東河村10鄰",
    "googleRating": 4.5,
    "reviewsCount": 260,
    "tags": [
      "草地營位",
      "森林系",
      "百萬夜景",
      "螢火蟲生態",
      "寵物友善"
    ],
    "scores": {
      "cleanliness": 4.5,
      "management": 4.4,
      "road": 3.8
    },
    "summaries": [
      "被向天湖山系森林環抱，空氣芬芳負離子滿滿。",
      "春夏夜晚螢火蟲數量極多，是自然生態教育的好地方。",
      "苗21線路面平坦，僅入營最後小坡道稍斜需留意。"
    ],
    "district": "南庄鄉",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 18,
    "name": "松濤意境露營區",
    "lat": 24.618,
    "lng": 120.985,
    "phone": "03-782-3788",
    "address": "苗栗縣南庄鄉田美村15鄰三灣32-4號",
    "googleRating": 4.6,
    "reviewsCount": 590,
    "tags": [
      "森林系",
      "木棧板",
      "路況良好"
    ],
    "scores": {
      "cleanliness": 4.6,
      "management": 4.5,
      "road": 4.3
    },
    "summaries": [
      "全區在高聳的五葉松與杉木林下，宛如置身北歐森林童話世界。",
      "夏天完全不曬且陣陣微風，木棧板保養極佳。",
      "近三灣南庄公路，柏油路面良好連新手都能輕鬆直達。"
    ],
    "district": "南庄鄉",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 19,
    "name": "慢生活露營區",
    "lat": 24.572,
    "lng": 120.998,
    "phone": "0963-880-123",
    "address": "苗栗縣南庄鄉蓬萊村紅毛館",
    "googleRating": 4.7,
    "reviewsCount": 310,
    "tags": [
      "草地營位",
      "溪流戲水",
      "螢火蟲生態",
      "小包區/安靜"
    ],
    "scores": {
      "cleanliness": 4.8,
      "management": 4.7,
      "road": 4.0
    },
    "summaries": [
      "鄰近蓬萊溪護魚步道，營地寧靜清幽，很有放鬆慢活感。",
      "衛浴設備齊全乾淨無異味，營主管理溫馨用心。",
      "主要為縣道124線直達，無險坡或難開產業道路。"
    ],
    "district": "南庄鄉",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 20,
    "name": "卓蘭自然圈農場 (LoFi Land)",
    "lat": 24.321,
    "lng": 120.825,
    "phone": "0928-692-097",
    "address": "苗栗縣卓蘭鎮西坪36-20號",
    "googleRating": 4.7,
    "reviewsCount": 1420,
    "tags": [
      "免裝備豪華露營",
      "天然溫泉",
      "草地營位",
      "路況良好",
      "五星衛浴"
    ],
    "scores": {
      "cleanliness": 4.9,
      "management": 4.8,
      "road": 4.8
    },
    "summaries": [
      "全包式野營奢華美學體驗，獨立私廚BBQ與半露天熱泉池享受。",
      "免搭帳懶人露營頂級之選，設施乾淨美觀極具設計質感。",
      "卓蘭西坪高地平順好開，一般房車轎車暢行無阻。"
    ],
    "district": "卓蘭鎮",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533873984035-25970ab07461?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 21,
    "name": "橘舍三食露營區",
    "lat": 24.328,
    "lng": 120.831,
    "phone": "0967-020-008",
    "address": "苗栗縣卓蘭鎮西坪43-15號",
    "googleRating": 4.6,
    "reviewsCount": 890,
    "tags": [
      "免裝備豪華露營",
      "草地營位",
      "天然溫泉",
      "路況良好",
      "森林系"
    ],
    "scores": {
      "cleanliness": 4.8,
      "management": 4.7,
      "road": 4.8
    },
    "summaries": [
      "昔日柑橘果園改建，有柴燒檜木桶風呂與季節果園採果活動。",
      "神殿帳內部裝潢典雅舒適，餐飲提供主廚私房料理。",
      "路況絕佳，離國道四號下交流道不用半小時即可抵達。"
    ],
    "district": "卓蘭鎮",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 22,
    "name": "岩川森林民宿露營區",
    "lat": 24.512,
    "lng": 120.912,
    "phone": "04-2581-6349",
    "address": "苗栗縣卓蘭鎮景山里白布帆62號",
    "googleRating": 4.5,
    "reviewsCount": 470,
    "tags": [
      "溪流戲水",
      "螢火蟲生態",
      "草地營位",
      "親子推薦"
    ],
    "scores": {
      "cleanliness": 4.5,
      "management": 4.6,
      "road": 4.0
    },
    "summaries": [
      "螢火蟲保育聖地，初夏時漫山遍野綠光閃爍極為壯觀。",
      "營區緊鄰平緩溪流，孩子抓蝦戲水安全樂趣多。",
      "道路為雙向柏油路，會車輕鬆容易。"
    ],
    "district": "卓蘭鎮",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 23,
    "name": "苗栗大湖湖畔花時間露營區",
    "lat": 24.412,
    "lng": 120.885,
    "phone": "03-799-6796",
    "address": "苗栗縣大湖鄉義和村淋漓坪126號",
    "googleRating": 4.6,
    "reviewsCount": 630,
    "tags": [
      "天然溫泉",
      "溪流戲水",
      "木棧板",
      "森林系",
      "路況良好"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.6,
      "road": 4.4
    },
    "summaries": [
      "坐落湖畔清幽謐靜，附設純天然源頭溫泉風呂大受好評。",
      "環境綠意盎然，環湖步道散步極為舒適愜意。",
      "近台3線主要幹線，路況良好無任何險坡。"
    ],
    "district": "大湖鄉",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 24,
    "name": "忘憂小築休閒露營區",
    "lat": 24.432,
    "lng": 120.898,
    "phone": "0923-987-654",
    "address": "苗栗縣大湖鄉武榮村5鄰",
    "googleRating": 4.5,
    "reviewsCount": 280,
    "tags": [
      "草地營位",
      "壯麗雲海",
      "高海拔避暑",
      "百萬夜景",
      "小包區/安靜"
    ],
    "scores": {
      "cleanliness": 4.6,
      "management": 4.5,
      "road": 3.4
    },
    "summaries": [
      "海拔約800公尺，居高臨下可俯瞰大湖草莓園區與晨曦雲海。",
      "草地厚實柔軟，營位之間保留寬敞間距不壓迫。",
      "最後一段上坡稍微陡峭，小心會車慢行即可。"
    ],
    "district": "大湖鄉",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 25,
    "name": "雲海的故鄉露營區",
    "lat": 24.522,
    "lng": 120.941,
    "phone": "0910-668-112",
    "address": "苗栗縣獅潭鄉新豐村7鄰",
    "googleRating": 4.7,
    "reviewsCount": 350,
    "tags": [
      "草地營位",
      "壯麗雲海",
      "高海拔避暑",
      "百萬夜景",
      "森林系"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.7,
      "road": 3.6
    },
    "summaries": [
      "鄰近獅潭仙山，常年雲霧繚繞，秋冬季經常出現翻騰大雲海。",
      "營區整潔乾淨，營主用心維護草皮與環境靜音。",
      "沿台3線轉入仙山產業道路，部分路段較窄需減速。"
    ],
    "district": "獅潭鄉",
    "city": "苗栗縣",
    "images": [
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 26,
    "name": "翡翠園露營區",
    "lat": 24.589,
    "lng": 121.122,
    "phone": "0988-123-456",
    "address": "新竹縣五峰鄉竹林村羅山部落",
    "googleRating": 4.7,
    "reviewsCount": 460,
    "tags": [
      "草地營位",
      "壯麗雲海",
      "高海拔避暑",
      "百萬夜景",
      "花季/採果"
    ],
    "scores": {
      "cleanliness": 4.8,
      "management": 4.7,
      "road": 3.8
    },
    "summaries": [
      "視野遼闊正對五指山絕景，夜晚可俯瞰新竹市璀璨百萬夜景。",
      "衛浴熱水24小時供應水壓充足，環境維持極為乾淨。",
      "羅山林道沿途路面良好，僅最後500公尺進營區需放慢車速。"
    ],
    "district": "五峰鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 27,
    "name": "愛上喜翁露營區",
    "lat": 24.582,
    "lng": 121.118,
    "phone": "0963-735-483",
    "address": "新竹縣五峰鄉忠興段93號",
    "googleRating": 4.6,
    "reviewsCount": 380,
    "tags": [
      "免裝備豪華露營",
      "草地營位",
      "高海拔避暑",
      "壯麗雲海",
      "寵物友善"
    ],
    "scores": {
      "cleanliness": 4.9,
      "management": 4.8,
      "road": 4.0
    },
    "summaries": [
      "提供頂級神殿帳與豪華免搭帳體驗，餐食精緻份量足。",
      "園區櫻花樹與杉木環繞，宛如隱身雲霧仙境中的秘境莊園。",
      "抵達道路平順寬敞，一般小轎車皆能順暢直達。"
    ],
    "district": "五峰鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 28,
    "name": "仙境露營區",
    "lat": 24.576,
    "lng": 121.115,
    "phone": "0933-221-554",
    "address": "新竹縣五峰鄉花園村天湖部落",
    "googleRating": 4.5,
    "reviewsCount": 310,
    "tags": [
      "草地營位",
      "壯麗雲海",
      "高海拔避暑",
      "百萬夜景",
      "星空銀河"
    ],
    "scores": {
      "cleanliness": 4.5,
      "management": 4.5,
      "road": 3.6
    },
    "summaries": [
      "海拔約1050公尺，午後經常起大霧如夢似幻，名副其實仙境。",
      "夜間無光害銀河清晰可見，夜景璀璨迷人。",
      "天湖產業道路稍窄，會車處需提前互相禮讓。"
    ],
    "district": "五峰鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 29,
    "name": "天湖露營區",
    "lat": 24.573,
    "lng": 121.112,
    "phone": "0932-938-168",
    "address": "新竹縣五峰鄉花園村天湖9鄰",
    "googleRating": 4.6,
    "reviewsCount": 540,
    "tags": [
      "草地營位",
      "木棧板",
      "高海拔避暑",
      "壯麗雲海",
      "寵物友善"
    ],
    "scores": {
      "cleanliness": 4.6,
      "management": 4.6,
      "road": 3.7
    },
    "summaries": [
      "天湖部落名營地，地勢高聳遼闊，雲海翻滾氣勢驚人。",
      "草皮柔軟紮實，營位規劃方正，適合家庭團露。",
      "路面多為水泥鋪裝，一般休旅車開起來很輕鬆。"
    ],
    "district": "五峰鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 30,
    "name": "花石樵露營區",
    "lat": 24.568,
    "lng": 121.108,
    "phone": "0910-188-752",
    "address": "新竹縣五峰鄉花園村10鄰",
    "googleRating": 4.7,
    "reviewsCount": 220,
    "tags": [
      "草地營位",
      "小包區/安靜",
      "壯麗雲海",
      "高海拔避暑"
    ],
    "scores": {
      "cleanliness": 4.8,
      "management": 4.9,
      "road": 3.5
    },
    "summaries": [
      "營主經營用心，全營地嚴禁夜間喧嘩，靜音品質一流。",
      "營位面對開闊山谷，秋冬早晚雲海形成機率極高。",
      "入營最後一段產業道路坡陡路窄，駕駛宜謹慎小心。"
    ],
    "district": "五峰鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 31,
    "name": "賽夏有機農場露營區",
    "lat": 24.561,
    "lng": 121.099,
    "phone": "0911-629-239",
    "address": "新竹縣五峰鄉竹林村杉木林段",
    "googleRating": 4.6,
    "reviewsCount": 490,
    "tags": [
      "森林系",
      "壯麗雲海",
      "高海拔避暑",
      "花季/採果",
      "草地營位"
    ],
    "scores": {
      "cleanliness": 4.6,
      "management": 4.7,
      "road": 3.4
    },
    "summaries": [
      "穿梭在杉木林蔭間，天然芬多精充盈，令人身心無比舒暢。",
      "營主熱情分享自家無毒有機蔬菜與部落在地故事。",
      "山路彎道較多，建議白天上山並保持低速。"
    ],
    "district": "五峰鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 32,
    "name": "白蘭部落鳥嘴山露營區",
    "lat": 24.551,
    "lng": 121.085,
    "phone": "0911-252-840",
    "address": "新竹縣五峰鄉桃山村白蘭部落",
    "googleRating": 4.5,
    "reviewsCount": 670,
    "tags": [
      "高海拔避暑",
      "壯麗雲海",
      "森林系",
      "草地營位",
      "花季/採果"
    ],
    "scores": {
      "cleanliness": 4.4,
      "management": 4.5,
      "road": 3.2
    },
    "summaries": [
      "海拔近1400公尺，直接位在鳥嘴山登山口，登山客最愛營地。",
      "春季有粉嫩櫻花環繞，秋冬季節雲瀑景觀令人嘆為觀止。",
      "白蘭部落山路路幅較小，建議避開假日下午下山人潮。"
    ],
    "district": "五峰鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 33,
    "name": "尤力露營區",
    "lat": 24.554,
    "lng": 121.091,
    "phone": "0937-156-550",
    "address": "新竹縣五峰鄉桃山村白蘭307號",
    "googleRating": 4.6,
    "reviewsCount": 380,
    "tags": [
      "森林系",
      "草地營位",
      "壯麗雲海",
      "小包區/安靜",
      "寵物友善"
    ],
    "scores": {
      "cleanliness": 4.6,
      "management": 4.7,
      "road": 3.3
    },
    "summaries": [
      "營位隱身於高聳杉林之中，營區靜謐有如隱世秘境。",
      "營主夫婦親切，衛浴打掃得非常乾淨且熱水充足。",
      "產業道路坡度稍大，一般自用車放慢檔位皆能順暢進出。"
    ],
    "district": "五峰鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 34,
    "name": "樂哈山露營區",
    "lat": 24.557,
    "lng": 121.096,
    "phone": "0928-405-077",
    "address": "新竹縣五峰鄉桃山村18鄰白蘭311-4號",
    "googleRating": 4.7,
    "reviewsCount": 610,
    "tags": [
      "草地營位",
      "原民部落文化",
      "高海拔避暑",
      "壯麗雲海",
      "星空銀河"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.8,
      "road": 3.4
    },
    "summaries": [
      "泰雅族曾奶奶的故事導覽引人入勝，文化底蘊豐富。",
      "高海拔觀景台可俯瞰整個白蘭山谷雲霧變幻。",
      "南清公路轉白蘭產業道路路線清晰，依指標行駛即可。"
    ],
    "district": "五峰鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 35,
    "name": "浮雲杉林露營區",
    "lat": 24.56,
    "lng": 121.093,
    "phone": "0932-119-007",
    "address": "新竹縣五峰鄉桃山村白蘭部落298之3號",
    "googleRating": 4.6,
    "reviewsCount": 430,
    "tags": [
      "森林系",
      "木棧板",
      "高海拔避暑",
      "小包區/安靜"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.6,
      "road": 3.3
    },
    "summaries": [
      "露在筆直的柳杉林下，早晨陽光穿透薄霧形成絕美耶穌光。",
      "木棧板尺寸充裕，排水良好下雨天也不擔心積水。",
      "山路會車空間較少，行經彎道務必提早按鳴喇叭。"
    ],
    "district": "五峰鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 36,
    "name": "望月小築露營區",
    "lat": 24.563,
    "lng": 121.089,
    "phone": "0912-345-789",
    "address": "新竹縣五峰鄉桃山村白蘭部落",
    "googleRating": 4.5,
    "reviewsCount": 290,
    "tags": [
      "草地營位",
      "壯麗雲海",
      "百萬夜景",
      "小包區/安靜"
    ],
    "scores": {
      "cleanliness": 4.5,
      "management": 4.6,
      "road": 3.4
    },
    "summaries": [
      "精巧小巧的營區，非常適合親友包場獨享幽靜夜空。",
      "夜間無光害，望月賞星無拘無束。",
      "路面皆已水泥化，底盤正常車輛皆可輕鬆進出。"
    ],
    "district": "五峰鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 37,
    "name": "巴卡的天空露營區",
    "lat": 24.566,
    "lng": 121.083,
    "phone": "0980-635-610",
    "address": "新竹縣五峰鄉桃山村白蘭310號",
    "googleRating": 4.8,
    "reviewsCount": 350,
    "tags": [
      "草地營位",
      "高海拔避暑",
      "壯麗雲海",
      "五星衛浴",
      "寵物友善"
    ],
    "scores": {
      "cleanliness": 4.9,
      "management": 4.8,
      "road": 3.5
    },
    "summaries": [
      "頂級高海拔衛浴規格，吹風機、置物櫃乾淨如新。",
      "草皮厚實如地毯，視野正迎山嵐晨霧氣質絕佳。",
      "沿途指標清楚，唯最後一段山坡略斜注意油門控制。"
    ],
    "district": "五峰鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 38,
    "name": "遇見嵨繞露營區",
    "lat": 24.662,
    "lng": 121.268,
    "phone": "0905-190-895",
    "address": "新竹縣尖石鄉玉峰村宇老1鄰9號",
    "googleRating": 4.8,
    "reviewsCount": 780,
    "tags": [
      "草地營位",
      "壯麗雲海",
      "高海拔避暑",
      "星空銀河"
    ],
    "scores": {
      "cleanliness": 4.8,
      "management": 4.7,
      "road": 3.6
    },
    "summaries": [
      "層層梯田營位景觀極為開闊，可將玉峰山谷壯觀雲海盡收眼底。",
      "營主經營用心管理嚴格，夜間安靜度極高睡眠超安穩。",
      "經過宇老鞍部後路幅稍減，但全線柏油好走。"
    ],
    "district": "尖石鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 39,
    "name": "司馬庫斯部落露營區",
    "lat": 24.578,
    "lng": 121.332,
    "phone": "03-584-7688",
    "address": "新竹縣尖石鄉玉峰村14鄰司馬庫斯2號",
    "googleRating": 4.6,
    "reviewsCount": 1150,
    "tags": [
      "高海拔避暑",
      "森林系",
      "原民部落文化",
      "星空銀河"
    ],
    "scores": {
      "cleanliness": 4.3,
      "management": 4.6,
      "road": 2.2
    },
    "summaries": [
      "上帝的部落司馬庫斯，千年紅檜巨木林立，台灣一生必訪之地。",
      "營地簡約原始，沉浸於最純粹自然與璀璨星空銀河。",
      "司馬庫斯產業道路實施單向通行管制，車況差者務必謹慎。"
    ],
    "district": "尖石鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517824806704-9040b037703b?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 40,
    "name": "鎮西堡野馬農園露營區",
    "lat": 24.582,
    "lng": 121.315,
    "phone": "0939-278-822",
    "address": "新竹縣尖石鄉秀巒村鎮西堡部落",
    "googleRating": 4.7,
    "reviewsCount": 510,
    "tags": [
      "高海拔避暑",
      "森林系",
      "壯麗雲海",
      "花季/採果",
      "草地營位"
    ],
    "scores": {
      "cleanliness": 4.6,
      "management": 4.7,
      "road": 2.6
    },
    "summaries": [
      "緊鄰鎮西堡神木群，清晨空氣清冽甘甜如仙境。",
      "夏天水蜜桃產季香甜誘人，營主親切樸實好客。",
      "自秀巒檢查哨至鎮西堡山路路況較顛簸，慢行安全第一。"
    ],
    "district": "尖石鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 41,
    "name": "尖石相思園景觀露營區",
    "lat": 24.715,
    "lng": 121.215,
    "phone": "0928-597-356",
    "address": "新竹縣尖石鄉錦屏村2鄰吹上39-1號",
    "googleRating": 4.5,
    "reviewsCount": 420,
    "tags": [
      "草地營位",
      "百萬夜景",
      "壯麗雲海",
      "高海拔避暑",
      "寵物友善"
    ],
    "scores": {
      "cleanliness": 4.5,
      "management": 4.5,
      "road": 3.7
    },
    "summaries": [
      "居高臨下俯瞰內灣油羅溪谷與竹北夜景，視野完全無遮蔽。",
      "草皮平整寬廣，設有兒童溜滑梯沙坑等遊樂設施。",
      "沿竹60線轉入支線，道路維護狀況良好。"
    ],
    "district": "尖石鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 42,
    "name": "數碼天空景觀露營區",
    "lat": 24.685,
    "lng": 121.245,
    "phone": "03-584-2888",
    "address": "新竹縣尖石鄉新樂村10鄰煤源145之1號",
    "googleRating": 4.4,
    "reviewsCount": 870,
    "tags": [
      "高海拔避暑",
      "壯麗雲海",
      "免裝備豪華露營",
      "百萬夜景",
      "森林系"
    ],
    "scores": {
      "cleanliness": 4.5,
      "management": 4.4,
      "road": 3.2
    },
    "summaries": [
      "海拔1200公尺，坐擁360度環繞山景與數碼天空景觀餐廳。",
      "秋冬落羽松轉紅極具異國風情，雲霧景致瞬息萬變。",
      "上山最後兩公里坡度相當大，行車需控制好油門。"
    ],
    "district": "尖石鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 43,
    "name": "尖石之星一館露營區",
    "lat": 24.721,
    "lng": 121.228,
    "phone": "0922-300-880",
    "address": "新竹縣尖石鄉義興村馬胎部落",
    "googleRating": 4.5,
    "reviewsCount": 380,
    "tags": [
      "木棧板",
      "草地營位",
      "百萬夜景",
      "高海拔避暑",
      "路況良好"
    ],
    "scores": {
      "cleanliness": 4.6,
      "management": 4.5,
      "road": 4.0
    },
    "summaries": [
      "距離內灣老街僅20分鐘車程，夜晚百萬夜景近在咫尺。",
      "衛浴設備齊全，空間寬裕不擁擠。",
      "馬胎古道路況新鋪柏油路面，上下山安全好開。"
    ],
    "district": "尖石鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 44,
    "name": "清心忘憂露營區",
    "lat": 24.675,
    "lng": 121.238,
    "phone": "0920-562-111",
    "address": "新竹縣尖石鄉義興村7鄰馬胎部落",
    "googleRating": 4.6,
    "reviewsCount": 490,
    "tags": [
      "草地營位",
      "壯麗雲海",
      "百萬夜景",
      "免裝備豪華露營",
      "寵物友善"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.6,
      "road": 3.8
    },
    "summaries": [
      "被群山環繞的世外桃源，早晨雲霧繚繞真能忘卻煩憂。",
      "提供免搭帳印地安帳篷租借，新手露營無門檻。",
      "路程短且路況佳，是新手入坑露營的極佳首選地。"
    ],
    "district": "尖石鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533873984035-25970ab07461?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 45,
    "name": "綠野仙境露營區",
    "lat": 24.708,
    "lng": 121.218,
    "phone": "0981-678-999",
    "address": "新竹縣尖石鄉新樂村",
    "googleRating": 4.7,
    "reviewsCount": 320,
    "tags": [
      "草地營位",
      "溪流戲水",
      "親子推薦"
    ],
    "scores": {
      "cleanliness": 4.8,
      "management": 4.7,
      "road": 4.2
    },
    "summaries": [
      "大片平坦厚實草皮，有兒童戲水池與滑步車大草原。",
      "營主維護非常用心，洗手台有專屬遮陽傘與照明燈。",
      "路面寬闊平緩，車行順暢毫無壓力。"
    ],
    "district": "尖石鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 46,
    "name": "函館露營區 (百萬夜景)",
    "lat": 24.698,
    "lng": 121.229,
    "phone": "0919-366-465",
    "address": "新竹縣尖石鄉義興村9鄰馬胎部落",
    "googleRating": 4.6,
    "reviewsCount": 940,
    "tags": [
      "百萬夜景",
      "草地營位",
      "壯麗雲海",
      "高海拔避暑",
      "星空銀河"
    ],
    "scores": {
      "cleanliness": 4.5,
      "management": 4.6,
      "road": 3.5
    },
    "summaries": [
      "號稱新竹函館！夜晚能直接飽覽關西、竹東到新竹海岸線夜景。",
      "視野角度開闊震撼，是攝影同好必拍夜景打卡點。",
      "最後一段上坡略陡，會車時請互相多加包容減速。"
    ],
    "district": "尖石鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 47,
    "name": "泰崗部落露營區",
    "lat": 24.622,
    "lng": 121.298,
    "phone": "0911-889-770",
    "address": "新竹縣尖石鄉秀巒村泰崗部落",
    "googleRating": 4.7,
    "reviewsCount": 260,
    "tags": [
      "草地營位",
      "高海拔避暑",
      "壯麗雲海",
      "原民部落文化",
      "天然溫泉"
    ],
    "scores": {
      "cleanliness": 4.6,
      "management": 4.7,
      "road": 2.8
    },
    "summaries": [
      "靠近泰崗野溪溫泉，清幽純樸深具原住民聚落風味。",
      "營主招待非常熱情，高山星空銀河無光害清晰度極高。",
      "竹60線後段彎道起伏多，注意煞車溫度與車速。"
    ],
    "district": "尖石鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 48,
    "name": "宇老鞍部星空露營區",
    "lat": 24.658,
    "lng": 121.272,
    "phone": "0935-778-990",
    "address": "新竹縣尖石鄉玉峰村宇老",
    "googleRating": 4.5,
    "reviewsCount": 310,
    "tags": [
      "高海拔避暑",
      "壯麗雲海",
      "星空銀河",
      "草地營位"
    ],
    "scores": {
      "cleanliness": 4.5,
      "management": 4.5,
      "road": 3.6
    },
    "summaries": [
      "海拔1450公尺的宇老分水嶺，夏天晚上僅17度極致涼爽。",
      "視野貫穿前後山脈，常常有雲瀑傾瀉而下的壯美風景。",
      "緊鄰竹60線主道路旁，進出非常便捷無困難支線。"
    ],
    "district": "尖石鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 49,
    "name": "馬告的家露營區",
    "lat": 24.712,
    "lng": 121.225,
    "phone": "0933-789-012",
    "address": "新竹縣尖石鄉義興村馬胎",
    "googleRating": 4.6,
    "reviewsCount": 280,
    "tags": [
      "草地營位",
      "雨棚區",
      "原民部落文化",
      "寵物友善"
    ],
    "scores": {
      "cleanliness": 4.6,
      "management": 4.7,
      "road": 4.0
    },
    "summaries": [
      "特色馬告風味烤肉香氣逼人，營主親切待客如家人。",
      "雨棚寬敞抗風擋雨，設備齊全新手無煩惱。",
      "距內灣近，路況良好無任何險要斷崖。"
    ],
    "district": "尖石鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 50,
    "name": "魔法莊園露營區",
    "lat": 24.73,
    "lng": 121.205,
    "phone": "0910-667-889",
    "address": "新竹縣尖石鄉新樂村水田部落",
    "googleRating": 4.6,
    "reviewsCount": 420,
    "tags": [
      "草地營位",
      "森林系",
      "親子推薦",
      "溪流戲水"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.7,
      "road": 4.1
    },
    "summaries": [
      "水田林道旁綠意昂然，有兒童戲水沙坑與綠意步道。",
      "營區整潔明亮，水槽充足且皆備有夜間感應照明。",
      "雙向車道寬敞好行駛，適合全家大小週末度假。"
    ],
    "district": "尖石鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 51,
    "name": "八五山甜柿森林露營區",
    "lat": 24.701,
    "lng": 121.258,
    "phone": "0978-095-080",
    "address": "新竹縣尖石鄉新樂村8鄰210號",
    "googleRating": 4.7,
    "reviewsCount": 650,
    "tags": [
      "草地營位",
      "高海拔避暑",
      "花季/採果",
      "壯麗雲海"
    ],
    "scores": {
      "cleanliness": 4.8,
      "management": 4.8,
      "road": 3.7
    },
    "summaries": [
      "春季整山粉紅櫻花綻放，秋季甜柿採摘香甜美味好玩。",
      "衛浴設備齊全，營位依山勢分層，保有獨立安靜感。",
      "沿著煤源道路直上，路面鋪設完整好走。"
    ],
    "district": "尖石鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 52,
    "name": "尖石夢田露營區",
    "lat": 24.718,
    "lng": 121.212,
    "phone": "0928-890-123",
    "address": "新竹縣尖石鄉義興村7鄰",
    "googleRating": 4.5,
    "reviewsCount": 360,
    "tags": [
      "草地營位",
      "百萬夜景",
      "寵物友善"
    ],
    "scores": {
      "cleanliness": 4.6,
      "management": 4.5,
      "road": 3.9
    },
    "summaries": [
      "廣大開闊的大草皮，毛小孩與孩子奔跑嬉戲超盡興。",
      "夜晚能遠眺竹北城市萬家燈火，微風徐徐舒適極了。",
      "路程指標清楚易辨識，路況普遍平緩安全。"
    ],
    "district": "尖石鄉",
    "city": "新竹縣",
    "images": [
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 53,
    "name": "清境翠峰露營區",
    "lat": 24.102,
    "lng": 121.189,
    "phone": "0919-668-899",
    "address": "南投縣仁愛鄉仁和路224號",
    "googleRating": 4.6,
    "reviewsCount": 520,
    "tags": [
      "草地營位",
      "高海拔避暑",
      "百萬夜景",
      "星空銀河",
      "路況良好"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.6,
      "road": 4.6
    },
    "summaries": [
      "海拔高達2300公尺，夏天均溫僅18度，避暑絕佳勝地。",
      "完全無光害，深夜抬頭即可看見銀河與百萬繁星。",
      "緊鄰台14甲線合歡山景觀公路，全線柏油好開無死角。"
    ],
    "district": "仁愛鄉",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1517824806704-9040b037703b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 54,
    "name": "武界星高寮露營區",
    "lat": 23.921,
    "lng": 121.054,
    "phone": "0932-956-789",
    "address": "南投縣仁愛鄉法治村武界部落",
    "googleRating": 4.8,
    "reviewsCount": 340,
    "tags": [
      "草地營位",
      "壯麗雲海",
      "高海拔避暑",
      "溪流戲水"
    ],
    "scores": {
      "cleanliness": 4.8,
      "management": 4.7,
      "road": 3.4
    },
    "summaries": [
      "被譽為武界雲瀑第一排，清晨日出與雲瀑翻湧極其壯麗。",
      "營位草皮厚實，營主待客熱情親切有如家人。",
      "投71線經過新闢隧道後大幅改善，進部落後依指標減速。"
    ],
    "district": "仁愛鄉",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 55,
    "name": "武界雲頂露營區",
    "lat": 23.928,
    "lng": 121.059,
    "phone": "0912-345-671",
    "address": "南投縣仁愛鄉法治村茶園路",
    "googleRating": 4.7,
    "reviewsCount": 410,
    "tags": [
      "草地營位",
      "壯麗雲海",
      "花季/採果"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.7,
      "road": 3.3
    },
    "summaries": [
      "坐落在武界高山茶園頂端，俯瞰整個濁水溪河谷與部落全貌。",
      "清晨薄霧在茶樹間流淌，日出金光照耀下如仙境一般。",
      "茶園支線坡度較大，一般車輛切換低速檔可順利抵達。"
    ],
    "district": "仁愛鄉",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 56,
    "name": "青青草原客棧露營區",
    "lat": 24.058,
    "lng": 121.162,
    "phone": "04-9280-1001",
    "address": "南投縣仁愛鄉大同村仁和路179-5號",
    "googleRating": 4.5,
    "reviewsCount": 680,
    "tags": [
      "高海拔避暑",
      "草地營位",
      "星空銀河",
      "路況良好",
      "湖海景第一排"
    ],
    "scores": {
      "cleanliness": 4.6,
      "management": 4.5,
      "road": 4.7
    },
    "summaries": [
      "步行即可抵達青青草原與綿羊秀，地理位置無懈可擊。",
      "高海拔空氣清爽，可眺望合歡奇萊群峰壯闊雪景與山稜。",
      "台14甲線大馬路直達，任何車種皆能輕鬆抵達。"
    ],
    "district": "仁愛鄉",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 57,
    "name": "清境天池露營區",
    "lat": 24.068,
    "lng": 121.171,
    "phone": "0988-345-123",
    "address": "南投縣仁愛鄉大同村博望巷",
    "googleRating": 4.6,
    "reviewsCount": 390,
    "tags": [
      "木棧板",
      "高海拔避暑",
      "壯麗雲海",
      "花季/採果",
      "寵物友善"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.6,
      "road": 4.4
    },
    "summaries": [
      "位在博望新村上方，遠離主要遊客喧鬧，氣氛靜謐高雅。",
      "木棧板尺寸超大，衛浴24小時水壓強熱水滾燙。",
      "路況極佳，鄰近滇緬特色料理餐廳用餐便利。"
    ],
    "district": "仁愛鄉",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 58,
    "name": "奧萬大森林露營區",
    "lat": 23.985,
    "lng": 121.178,
    "phone": "04-9297-4511",
    "address": "南投縣仁愛鄉親愛村大安路153號",
    "googleRating": 4.7,
    "reviewsCount": 850,
    "tags": [
      "森林系",
      "花季/採果",
      "溪流戲水",
      "螢火蟲生態",
      "高海拔避暑"
    ],
    "scores": {
      "cleanliness": 4.8,
      "management": 4.8,
      "road": 4.2
    },
    "summaries": [
      "全台賞楓第一名勝！秋日整片山谷染成璀璨的金黃火紅。",
      "林務局國家森林遊樂區維護，設施乾淨安全規範極高。",
      "投83線沿途山光明媚，全線雙向柏油通行無礙。"
    ],
    "district": "仁愛鄉",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 59,
    "name": "武界毛毛蟲山林露營區",
    "lat": 23.918,
    "lng": 121.049,
    "phone": "0921-708-255",
    "address": "南投縣仁愛鄉法治村武界",
    "googleRating": 4.6,
    "reviewsCount": 290,
    "tags": [
      "草地營位",
      "壯麗雲海",
      "溪流戲水",
      "原民部落文化"
    ],
    "scores": {
      "cleanliness": 4.6,
      "management": 4.7,
      "road": 3.5
    },
    "summaries": [
      "營主親自帶隊導覽一線天與摩摩納爾瀑布，行程豐富精彩。",
      "綠地環境維護整潔，晚上大家圍著營火聊天氣氛融洽。",
      "進出部落前請確認行車路線，依照營區指引平順抵達。"
    ],
    "district": "仁愛鄉",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 60,
    "name": "廬山星月溫泉露營區",
    "lat": 24.025,
    "lng": 121.192,
    "phone": "0910-578-990",
    "address": "南投縣仁愛鄉精英村榮華巷",
    "googleRating": 4.5,
    "reviewsCount": 380,
    "tags": [
      "天然溫泉",
      "草地營位",
      "星空銀河",
      "高海拔避暑"
    ],
    "scores": {
      "cleanliness": 4.5,
      "management": 4.5,
      "road": 3.8
    },
    "summaries": [
      "引進純正精英溫泉天然水質，享受夜空星光下泡湯極樂。",
      "營位間距適當，微風吹拂下格外幽靜怡人。",
      "台14線轉進精英部落路面維護良好，小心會車即可。"
    ],
    "district": "仁愛鄉",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 61,
    "name": "清境花石頭露營區",
    "lat": 24.085,
    "lng": 121.182,
    "phone": "0933-456-789",
    "address": "南投縣仁愛鄉仁和路218號",
    "googleRating": 4.6,
    "reviewsCount": 310,
    "tags": [
      "木棧板",
      "高海拔避暑",
      "壯麗雲海"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.6,
      "road": 4.5
    },
    "summaries": [
      "海拔近2000公尺，避開清境主要塞車路段，環境優美開闊。",
      "木棧板大且附設專屬洗滌台，熱水溫度水壓十分穩定。",
      "鄰近台14甲線，交通便利補給方便。"
    ],
    "district": "仁愛鄉",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 62,
    "name": "靜觀部落高山露營區",
    "lat": 24.125,
    "lng": 121.218,
    "phone": "0912-887-654",
    "address": "南投縣仁愛鄉合作村靜觀部落",
    "googleRating": 4.7,
    "reviewsCount": 240,
    "tags": [
      "高海拔避暑",
      "原民部落文化",
      "星空銀河",
      "森林系"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.8,
      "road": 3.2
    },
    "summaries": [
      "台灣最深山的賽德克族靜觀部落，壯闊奇萊北峰就在眼前！",
      "遠離世俗塵囂，真正無光害的深邃星空讓人感動落淚。",
      "後段部落道路狹窄多彎，需由經驗豐富露友駕駛。"
    ],
    "district": "仁愛鄉",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 63,
    "name": "帖比倫瀑布營地",
    "lat": 24.148,
    "lng": 121.235,
    "phone": "0910-654-321",
    "address": "南投縣仁愛鄉發祥村紅香部落",
    "googleRating": 4.8,
    "reviewsCount": 370,
    "tags": [
      "溪流戲水",
      "森林系",
      "高海拔避暑",
      "原民部落文化"
    ],
    "scores": {
      "cleanliness": 4.6,
      "management": 4.7,
      "road": 2.5
    },
    "summaries": [
      "鄰近被譽為神之領域的帖比倫峽谷瀑布，湛藍水色驚為天人。",
      "原始山林風貌完整保留，是野營愛好者的夢幻天堂。",
      "紅香支線山路較為險峻多坑洞，建議高底盤車輛前往。"
    ],
    "district": "仁愛鄉",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 64,
    "name": "霧社高峰茶園露營區",
    "lat": 24.015,
    "lng": 121.145,
    "phone": "0921-334-556",
    "address": "南投縣仁愛鄉大同村高峰巷",
    "googleRating": 4.6,
    "reviewsCount": 420,
    "tags": [
      "草地營位",
      "壯麗雲海",
      "花季/採果",
      "湖海景第一排"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.6,
      "road": 3.8
    },
    "summaries": [
      "能俯瞰整座萬大水庫碧湖美景，翠綠湖面與高山相映成趣。",
      "茶香四溢，營主親切招待現泡頂級高山烏龍茶。",
      "從霧社市區轉入產業道路路程短，車況輕鬆平順。"
    ],
    "district": "仁愛鄉",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 65,
    "name": "合歡仙境露營區",
    "lat": 24.095,
    "lng": 121.185,
    "phone": "0980-123-999",
    "address": "南投縣仁愛鄉仁和路",
    "googleRating": 4.5,
    "reviewsCount": 330,
    "tags": [
      "高海拔避暑",
      "星空銀河",
      "草地營位",
      "壯麗雲海"
    ],
    "scores": {
      "cleanliness": 4.5,
      "management": 4.5,
      "road": 4.5
    },
    "summaries": [
      "合歡山登山前哨站，登合歡主峰、東峰與石門山首選營地。",
      "清晨欣賞壯麗雲海日出，夜晚看銀河倒瀉美不勝收。",
      "位於合歡山公路旁，交通極其便利無困難路段。"
    ],
    "district": "仁愛鄉",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1517824806704-9040b037703b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 66,
    "name": "互助國小旁梅園露營區",
    "lat": 24.081,
    "lng": 120.985,
    "phone": "0937-223-456",
    "address": "南投縣仁愛鄉互助村中華路",
    "googleRating": 4.5,
    "reviewsCount": 260,
    "tags": [
      "草地營位",
      "花季/採果",
      "路況良好",
      "原民部落文化"
    ],
    "scores": {
      "cleanliness": 4.6,
      "management": 4.5,
      "road": 4.4
    },
    "summaries": [
      "冬末春初整片老梅樹白花似雪，暗香浮動賞梅露營極為風雅。",
      "地處低海拔氣溫溫和不寒冷，非常適合長輩小孩同行。",
      "投80線平坦開闊好開，會車安全無虞。"
    ],
    "district": "仁愛鄉",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 67,
    "name": "日月潭畢瓦客露營區 (Biwak)",
    "lat": 23.865,
    "lng": 120.912,
    "phone": "0982-830-890",
    "address": "南投縣魚池鄉水社村中山路361-3號",
    "googleRating": 4.6,
    "reviewsCount": 1650,
    "tags": [
      "溪流戲水",
      "免裝備豪華露營",
      "路況良好",
      "湖海景第一排"
    ],
    "scores": {
      "cleanliness": 4.8,
      "management": 4.7,
      "road": 4.9
    },
    "summaries": [
      "日月潭湖畔第一排，直接在營區租借SUP立槳享受日出仙境！",
      "提供網美水管屋與風格露營帳，設備新穎乾淨。",
      "日月潭環湖公路旁，路況全線極佳任何車種均可輕鬆前來。"
    ],
    "district": "魚池鄉",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1587547131116-a0655a526190?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 68,
    "name": "磐石營地 (日月潭第一排)",
    "lat": 23.858,
    "lng": 120.925,
    "phone": "04-9285-6123",
    "address": "南投縣魚池鄉日月村中正路",
    "googleRating": 4.5,
    "reviewsCount": 540,
    "tags": [
      "湖海景第一排",
      "草地營位",
      "路況良好",
      "溪流戲水"
    ],
    "scores": {
      "cleanliness": 4.5,
      "management": 4.4,
      "road": 4.8
    },
    "summaries": [
      "打開帳篷正對日月潭伊達邵湖光山色，晨霧倒影絕美難忘。",
      "周邊有便利商店與伊達邵老街，美食補給超方便。",
      "環潭公路旁直達，路面平坦寬敞毫無難度。"
    ],
    "district": "魚池鄉",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 69,
    "name": "拂水山莊松樹露營區",
    "lat": 23.895,
    "lng": 120.952,
    "phone": "0921-006-035",
    "address": "南投縣魚池鄉五城村蓮華池",
    "googleRating": 4.7,
    "reviewsCount": 820,
    "tags": [
      "森林系",
      "免裝備豪華露營",
      "草地營位",
      "路況良好"
    ],
    "scores": {
      "cleanliness": 4.8,
      "management": 4.7,
      "road": 4.5
    },
    "summaries": [
      "擁有兩百棵樹齡數十載的五葉松老樹，綠樹成蔭極致優美。",
      "神殿帳內配置冷氣彈簧床，適合想體驗大自然又怕熱的露友。",
      "離埔里市區車程僅15分鐘，全線雙向柏油好走。"
    ],
    "district": "魚池鄉",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 70,
    "name": "山思雲想免裝備露營區",
    "lat": 23.758,
    "lng": 120.785,
    "phone": "0933-408-666",
    "address": "南投縣竹山鎮大鞍里田子巷38-35號",
    "googleRating": 4.8,
    "reviewsCount": 980,
    "tags": [
      "免裝備豪華露營",
      "森林系",
      "壯麗雲海"
    ],
    "scores": {
      "cleanliness": 4.9,
      "management": 4.9,
      "road": 3.7
    },
    "summaries": [
      "全包式美學露營，提供職人手作體驗與精緻在地無菜單料理。",
      "漫步在百甲孟宗竹林間，空氣清幽如武俠世界。",
      "大鞍山路路況平順，唯山區午後偶有濃霧需開霧燈慢行。"
    ],
    "district": "竹山鎮",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1587547131116-a0655a526190?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 71,
    "name": "埔里江山樂活休閒農場",
    "lat": 23.955,
    "lng": 120.932,
    "phone": "04-9291-1558",
    "address": "南投縣埔里鎮桃米里水上巷36號",
    "googleRating": 4.6,
    "reviewsCount": 460,
    "tags": [
      "草地營位",
      "溪流戲水",
      "螢火蟲生態",
      "親子推薦",
      "路況良好"
    ],
    "scores": {
      "cleanliness": 4.6,
      "management": 4.6,
      "road": 4.4
    },
    "summaries": [
      "坐落桃米生態村，天然湧泉山泉水戲水池夏日最受孩子喜愛。",
      "夜間青蛙生態導覽寓教於樂，衛浴充足整齊。",
      "桃米巷道平順寬敞，任何車輛進出方便。"
    ],
    "district": "埔里鎮",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 72,
    "name": "桃米坑紙教堂青蛙露營區",
    "lat": 23.942,
    "lng": 120.928,
    "phone": "0911-345-678",
    "address": "南投縣埔里鎮桃米巷52-12號",
    "googleRating": 4.5,
    "reviewsCount": 380,
    "tags": [
      "草地營位",
      "螢火蟲生態",
      "親子推薦",
      "路況良好"
    ],
    "scores": {
      "cleanliness": 4.5,
      "management": 4.5,
      "road": 4.7
    },
    "summaries": [
      "步行可達紙教堂與桃米親水公園，地理位置極佳。",
      "營區生態豐富，常能見到稀有樹蛙與美麗蝴蝶。",
      "全線雙線道好開，新手露營零壓力。"
    ],
    "district": "埔里鎮",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 73,
    "name": "國姓黃金森林露營區",
    "lat": 24.088,
    "lng": 120.895,
    "phone": "0931-226-677",
    "address": "南投縣國姓鄉長豐村東三巷86號",
    "googleRating": 4.7,
    "reviewsCount": 580,
    "tags": [
      "草地營位",
      "溪流戲水",
      "花季/採果",
      "路況良好",
      "寵物友善"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.7,
      "road": 4.3
    },
    "summaries": [
      "秋冬滿山黃金楓葉閃閃發亮，營區有如金色童話仙境。",
      "溪邊可捉溪蝦抓小魚，草坪鬆軟乾淨無狗便。",
      "國道六號下國姓交流道很快抵達，全線路面優良。"
    ],
    "district": "國姓鄉",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 74,
    "name": "國姓仙徠果園露營區",
    "lat": 24.055,
    "lng": 120.875,
    "phone": "0932-556-789",
    "address": "南投縣國姓鄉福龜村",
    "googleRating": 4.5,
    "reviewsCount": 320,
    "tags": [
      "草地營位",
      "花季/採果",
      "路況良好"
    ],
    "scores": {
      "cleanliness": 4.5,
      "management": 4.5,
      "road": 4.5
    },
    "summaries": [
      "露營結合採果樂，冬春季節還能體驗現摘香甜草莓。",
      "營主親切樸實，營地小巧幽靜十分放鬆。",
      "國六交流道旁路況非常容易抵達。"
    ],
    "district": "國姓鄉",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 75,
    "name": "鹿谷麒麟潭湖畔露營區",
    "lat": 23.752,
    "lng": 120.778,
    "phone": "04-9275-5678",
    "address": "南投縣鹿谷鄉永隆村堀邊巷",
    "googleRating": 4.6,
    "reviewsCount": 610,
    "tags": [
      "溪流戲水",
      "草地營位",
      "花季/採果",
      "湖海景第一排",
      "路況良好"
    ],
    "scores": {
      "cleanliness": 4.6,
      "management": 4.6,
      "road": 4.4
    },
    "summaries": [
      "依傍寧靜麒麟潭，環湖步道清晨霧氣飄渺宛若水墨畫卷。",
      "衛浴設備齊全水溫穩定，鄰近凍頂烏龍茶茶園散步極美。",
      "縣道151線往溪頭方向順暢好開無險阻。"
    ],
    "district": "鹿谷鄉",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 76,
    "name": "杉林溪溪頭森林露營區",
    "lat": 23.675,
    "lng": 120.795,
    "phone": "04-9261-1217",
    "address": "南投縣竹山鎮大鞍里溪山路6號",
    "googleRating": 4.7,
    "reviewsCount": 890,
    "tags": [
      "森林系",
      "高海拔避暑",
      "花季/採果"
    ],
    "scores": {
      "cleanliness": 4.8,
      "management": 4.7,
      "road": 4.2
    },
    "summaries": [
      "海拔1600公尺，盛夏均溫僅20度，天然冷氣避暑神仙級營地。",
      "漫步在柳杉與扁柏森林步道，享受滿滿純淨芬多精。",
      "杉林溪公路路面維護優良，僅十二生肖彎道多需放慢速度。"
    ],
    "district": "竹山鎮",
    "city": "南投縣",
    "images": [
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 77,
    "name": "武陵農場高山露營區",
    "lat": 24.358,
    "lng": 121.312,
    "phone": "04-2590-1470",
    "address": "台中市和平區武陵路3-1號",
    "googleRating": 4.7,
    "reviewsCount": 3850,
    "tags": [
      "高海拔避暑",
      "花季/採果",
      "木棧板",
      "免裝備豪華露營",
      "星空銀河",
      "溪流戲水"
    ],
    "scores": {
      "cleanliness": 4.6,
      "management": 4.8,
      "road": 3.8
    },
    "summaries": [
      "全台灣最經典高山露營區！二月粉紅佳人櫻花盛開美哭全場。",
      "高山陽光露營木屋、景觀木棧板設備完善，熱水淋浴充足。",
      "宜蘭台7甲線或梨山方向前往，櫻花季需提早預約通行證。"
    ],
    "district": "和平區",
    "city": "台中市",
    "images": [
      "https://images.unsplash.com/photo-1517824806704-9040b037703b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533873984035-25970ab07461?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 78,
    "name": "福壽山農場露營區 (全台最高海拔2574m)",
    "lat": 24.248,
    "lng": 121.248,
    "phone": "04-2598-9202",
    "address": "台中市和平區福壽路29號",
    "googleRating": 4.8,
    "reviewsCount": 2690,
    "tags": [
      "高海拔避暑",
      "星空銀河",
      "木棧板",
      "花季/採果",
      "湖海景第一排"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.8,
      "road": 3.6
    },
    "summaries": [
      "海拔2574公尺！全台灣最高露營區，坐擁藍天、靜池與宇宙級銀河。",
      "初夏滿地金黃貓耳葉菊綻放，秋季蜜蘋果香甜多汁名揚全台。",
      "中高海拔長途行駛，出發前務必檢修車況並備妥保暖衣物。"
    ],
    "district": "和平區",
    "city": "台中市",
    "images": [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 79,
    "name": "谷關松鶴部落松露露營區",
    "lat": 24.168,
    "lng": 120.975,
    "phone": "0912-334-880",
    "address": "台中市和平區博愛里東關路一段松鶴三巷",
    "googleRating": 4.6,
    "reviewsCount": 420,
    "tags": [
      "草地營位",
      "森林系",
      "原民部落文化",
      "溪流戲水",
      "路況良好"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.6,
      "road": 4.4
    },
    "summaries": [
      "被蒼勁高聳的百年五葉松圍繞，沉浸在松香撲鼻的林蔭微風中。",
      "衛浴設備齊全乾淨，營主泰雅族人親切誠懇。",
      "中橫公路台8線直達松鶴部落，道路平坦雙向寬敞。"
    ],
    "district": "和平區",
    "city": "台中市",
    "images": [
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 80,
    "name": "裡冷部落熊谷露營區",
    "lat": 24.162,
    "lng": 120.955,
    "phone": "0982-123-556",
    "address": "台中市和平區博愛里東關路一段裡冷巷",
    "googleRating": 4.7,
    "reviewsCount": 510,
    "tags": [
      "草地營位",
      "溪流戲水",
      "螢火蟲生態",
      "路況良好"
    ],
    "scores": {
      "cleanliness": 4.8,
      "management": 4.7,
      "road": 4.3
    },
    "summaries": [
      "裡冷溪水質清澈見底，營地保留極大草皮空間讓孩子放電奔跑。",
      "衛浴定期清掃極為潔淨，熱水強勁不忽冷忽熱。",
      "從谷關主要省道轉入裡冷橋路況順暢好走。"
    ],
    "district": "和平區",
    "city": "台中市",
    "images": [
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 81,
    "name": "谷關大道院山林營地",
    "lat": 24.185,
    "lng": 120.942,
    "phone": "04-2594-3555",
    "address": "台中市和平區東關路一段",
    "googleRating": 4.5,
    "reviewsCount": 350,
    "tags": [
      "草地營位",
      "小包區/安靜",
      "路況良好",
      "森林系"
    ],
    "scores": {
      "cleanliness": 4.5,
      "management": 4.6,
      "road": 4.5
    },
    "summaries": [
      "依山而建環境肅穆寧靜，為登白毛山與谷關七雄的最佳落腳處。",
      "園區綠樹成蔭鳥語花香，身心非常平靜放鬆。",
      "台8線大馬路轉入即抵達，全線大巴都可平穩通行。"
    ],
    "district": "和平區",
    "city": "台中市",
    "images": [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 82,
    "name": "新社小路露營區",
    "lat": 24.235,
    "lng": 120.815,
    "phone": "0932-658-222",
    "address": "台中市新社區崑山里食水嵙6-2號",
    "googleRating": 4.8,
    "reviewsCount": 1180,
    "tags": [
      "五星衛浴",
      "親子推薦",
      "螢火蟲生態",
      "草地營位"
    ],
    "scores": {
      "cleanliness": 4.9,
      "management": 4.9,
      "road": 4.4
    },
    "summaries": [
      "台灣親子露營指標營地！專業滑草場與豐富夜間青蛙導覽深受孩子喜愛。",
      "衛浴設備堪稱五星級飯店水準，乾濕分離並提供吹風機與嬰兒澡盆。",
      "新社中興嶺平緩山路，路面完整清晰安全無虞。"
    ],
    "district": "新社區",
    "city": "台中市",
    "images": [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 83,
    "name": "新社森之王子露營區",
    "lat": 24.242,
    "lng": 120.822,
    "phone": "04-2582-1658",
    "address": "台中市新社區永源村水井一街",
    "googleRating": 4.6,
    "reviewsCount": 540,
    "tags": [
      "草地營位",
      "百萬夜景",
      "免裝備豪華露營",
      "路況良好"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.6,
      "road": 4.5
    },
    "summaries": [
      "270度俯瞰台中市區繁華百萬夜景，景緻壯觀迷人。",
      "附設景觀餐廳提供下午茶與精緻晚餐，免料理輕鬆露營。",
      "道路平整無困難陡坡，新手自駕極具信心。"
    ],
    "district": "新社區",
    "city": "台中市",
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533873984035-25970ab07461?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 84,
    "name": "大雪山出雲山騰雲露營區",
    "lat": 24.262,
    "lng": 120.915,
    "phone": "0937-224-558",
    "address": "台中市和平區大雪山林道13K處",
    "googleRating": 4.7,
    "reviewsCount": 420,
    "tags": [
      "高海拔避暑",
      "壯麗雲海",
      "森林系",
      "草地營位",
      "百萬夜景"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.8,
      "road": 3.8
    },
    "summaries": [
      "坐落大雪山林道半山腰，午後雲瀑奔流落日晚霞染紅天際極震撼。",
      "營主經營嚴謹態度親善，草皮維護得有如高爾夫球場。",
      "大雪山林道沿線路況寬敞，唯注意山區野生動物穿梭減速。"
    ],
    "district": "和平區",
    "city": "台中市",
    "images": [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 85,
    "name": "拉拉山雲頂露營區",
    "lat": 24.718,
    "lng": 121.412,
    "phone": "0910-234-567",
    "address": "桃園市復興區華陵村巴陵",
    "googleRating": 4.7,
    "reviewsCount": 530,
    "tags": [
      "高海拔避暑",
      "壯麗雲海",
      "花季/採果",
      "草地營位"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.7,
      "road": 3.4
    },
    "summaries": [
      "海拔約1500公尺，正對拉拉山壯麗山谷，常常身處雲海之上。",
      "夏季水蜜桃鮮甜多汁，春季整片櫻花浪漫綻放。",
      "北橫公路轉巴陵產業道路多彎，建議提早出發避開午後雷陣雨。"
    ],
    "district": "復興區",
    "city": "桃園市",
    "images": [
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 86,
    "name": "俠雲山莊櫻花露營區",
    "lat": 24.712,
    "lng": 121.418,
    "phone": "0937-123-999",
    "address": "桃園市復興區華陵村中心路143-6號",
    "googleRating": 4.8,
    "reviewsCount": 610,
    "tags": [
      "花季/採果",
      "高海拔避暑",
      "壯麗雲海",
      "草地營位",
      "百萬夜景"
    ],
    "scores": {
      "cleanliness": 4.8,
      "management": 4.8,
      "road": 3.2
    },
    "summaries": [
      "二月中旬滿山富士櫻與昭和櫻盛開，粉紅花海美景如日本名所。",
      "營區整潔度無可挑剔，視野寬闊落日餘暉令人屏息。",
      "中心路部分會車彎道路幅偏窄，注意按鳴喇叭慢速通行。"
    ],
    "district": "復興區",
    "city": "桃園市",
    "images": [
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 87,
    "name": "恩愛農場露營區",
    "lat": 24.708,
    "lng": 121.425,
    "phone": "03-391-2335",
    "address": "桃園市復興區華陵村中心路143-1號",
    "googleRating": 4.6,
    "reviewsCount": 1820,
    "tags": [
      "花季/採果",
      "高海拔避暑",
      "免裝備豪華露營",
      "壯麗雲海"
    ],
    "scores": {
      "cleanliness": 4.6,
      "management": 4.6,
      "road": 3.0
    },
    "summaries": [
      "全台賞櫻最負盛名農場！櫻花樹下紮營宛如童話夢境般浪漫。",
      "附設景觀餐廳無菜單料理美味可口，遠眺雪山山脈雄姿。",
      "櫻花季車流管制人潮眾多，行車宜多加耐心。"
    ],
    "district": "復興區",
    "city": "桃園市",
    "images": [
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 88,
    "name": "谷點咖啡部落露營區",
    "lat": 24.735,
    "lng": 121.385,
    "phone": "03-382-2415",
    "address": "桃園市復興區羅浮村合風7鄰",
    "googleRating": 4.5,
    "reviewsCount": 420,
    "tags": [
      "草地營位",
      "免裝備豪華露營",
      "溪流戲水",
      "路況良好"
    ],
    "scores": {
      "cleanliness": 4.6,
      "management": 4.6,
      "road": 4.3
    },
    "summaries": [
      "座落羅馬公路旁，營主自烘手沖咖啡香濃醇郁讓人一喝上癮。",
      "環境綠草如茵維護整齊，空間自在舒服。",
      "羅馬公路全線風景優美平順，重機與自駕露友極度熱門路線。"
    ],
    "district": "復興區",
    "city": "桃園市",
    "images": [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1587547131116-a0655a526190?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 89,
    "name": "瑞士農莊露營區",
    "lat": 24.695,
    "lng": 121.405,
    "phone": "0912-345-001",
    "address": "桃園市復興區華陵村上巴陵",
    "googleRating": 4.6,
    "reviewsCount": 350,
    "tags": [
      "草地營位",
      "高海拔避暑",
      "壯麗雲海",
      "星空銀河"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.6,
      "road": 3.3
    },
    "summaries": [
      "上巴陵居高臨下視野絕佳，夜晚繁星如鑽石般璀璨耀眼。",
      "衛浴設備齊全，水壓充足熱水洗起來舒服暢快。",
      "山路轉彎處請多留意對向來車，建議白天下山。"
    ],
    "district": "復興區",
    "city": "桃園市",
    "images": [
      "https://images.unsplash.com/photo-1517824806704-9040b037703b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 90,
    "name": "爺亨溫泉露營區",
    "lat": 24.672,
    "lng": 121.398,
    "phone": "0937-889-123",
    "address": "桃園市復興區三光村爺亨部落",
    "googleRating": 4.5,
    "reviewsCount": 390,
    "tags": [
      "天然溫泉",
      "百萬夜景",
      "溪流戲水",
      "原民部落文化"
    ],
    "scores": {
      "cleanliness": 4.5,
      "management": 4.5,
      "road": 3.7
    },
    "summaries": [
      "重現日治時期爺亨野溪溫泉盛名，露營夜間露天溫泉泡湯超幸福。",
      "壯觀的爺亨梯田梯次分明，大漢溪水奔流在腳下。",
      "下切溪谷道路略斜，保持慢速駕駛即可安全抵達。"
    ],
    "district": "復興區",
    "city": "桃園市",
    "images": [
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 91,
    "name": "太平山鳩之澤旁山林營地",
    "lat": 24.558,
    "lng": 121.505,
    "phone": "03-980-9619",
    "address": "宜蘭縣大同鄉太平村鳩之澤",
    "googleRating": 4.7,
    "reviewsCount": 890,
    "tags": [
      "森林系",
      "天然溫泉",
      "高海拔避暑"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.8,
      "road": 4.2
    },
    "summaries": [
      "緊鄰鳩之澤溫泉，享受藍色寶石般的碳酸溫泉與天然地熱煮蛋樂。",
      "巨木森林圍繞負離子爆表，清晨被悅耳鳥鳴聲喚醒。",
      "太平山公路平整雙向寬敞，任何車輛皆能安穩直達。"
    ],
    "district": "大同鄉",
    "city": "宜蘭縣",
    "images": [
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 92,
    "name": "宜蘭南澳那山那谷露營區",
    "lat": 24.452,
    "lng": 121.735,
    "phone": "0978-088-593",
    "address": "宜蘭縣南澳鄉金洋村金洋路2號",
    "googleRating": 4.8,
    "reviewsCount": 2450,
    "tags": [
      "草地營位",
      "溪流戲水",
      "免裝備豪華露營",
      "五星衛浴",
      "寵物友善",
      "路況良好"
    ],
    "scores": {
      "cleanliness": 4.9,
      "management": 4.9,
      "road": 4.6
    },
    "summaries": [
      "全台知名度最高頂級營地！南澳溪天然漂流探險刺激又安全。",
      "草皮像地毯般完美，乾濕分離五星級衛浴，免搭帳露營車質感超凡。",
      "蘇花改通車後台北出發僅需90分鐘，路況平順毫無山路負擔。"
    ],
    "district": "南澳鄉",
    "city": "宜蘭縣",
    "images": [
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533873984035-25970ab07461?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 93,
    "name": "東澳粉鳥林海灣露營區",
    "lat": 24.498,
    "lng": 121.845,
    "phone": "0988-776-543",
    "address": "宜蘭縣南澳鄉東澳村粉鳥林漁港旁",
    "googleRating": 4.6,
    "reviewsCount": 670,
    "tags": [
      "湖海景第一排",
      "溪流戲水",
      "草地營位",
      "壯麗雲海"
    ],
    "scores": {
      "cleanliness": 4.6,
      "management": 4.6,
      "road": 4.7
    },
    "summaries": [
      "走路3分鐘直達粉鳥林秘境海灘，早晨拉開帳篷欣賞壯麗太平洋日出！",
      "夜間伴隨規律海浪波濤聲入睡，身心徹底放鬆。",
      "東澳省道旁直達，道路平坦好開停車便利。"
    ],
    "district": "南澳鄉",
    "city": "宜蘭縣",
    "images": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 94,
    "name": "礁溪鳳梨屋水上莊園",
    "lat": 24.785,
    "lng": 121.685,
    "phone": "0979-625-789",
    "address": "宜蘭縣員山鄉中華村隘界路42-9號",
    "googleRating": 4.7,
    "reviewsCount": 1780,
    "tags": [
      "免裝備豪華露營",
      "溪流戲水",
      "五星衛浴"
    ],
    "scores": {
      "cleanliness": 4.9,
      "management": 4.8,
      "road": 4.7
    },
    "summaries": [
      "奢華水上露墅與蓮花帳篷，落羽松水上景觀步道極具歐洲莊園風采。",
      "山泉湧泉清澈見底，附設鱘龍魚美味私廚料理與露天戲水池。",
      "員山省道旁開闢平整專屬車道，各型車輛暢行無阻。"
    ],
    "district": "員山鄉",
    "city": "宜蘭縣",
    "images": [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1587547131116-a0655a526190?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 95,
    "name": "大同鄉松蘿谷露營區",
    "lat": 24.645,
    "lng": 121.565,
    "phone": "0912-889-001",
    "address": "宜蘭縣大同鄉松羅村",
    "googleRating": 4.6,
    "reviewsCount": 380,
    "tags": [
      "草地營位",
      "森林系",
      "溪流戲水",
      "路況良好"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.6,
      "road": 4.5
    },
    "summaries": [
      "緊鄰松羅國家步道，綠意盎然蕨類生態充沛，溪水沁涼消暑。",
      "營位間距寬闊舒適，衛浴乾淨且提供吹風機等備品。",
      "台7線主要省道旁，交通極其流暢便利。"
    ],
    "district": "大同鄉",
    "city": "宜蘭縣",
    "images": [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 96,
    "name": "玉蘭茶園景觀露營區",
    "lat": 24.662,
    "lng": 121.585,
    "phone": "03-980-1870",
    "address": "宜蘭縣大同鄉松羅村玉蘭80號",
    "googleRating": 4.5,
    "reviewsCount": 620,
    "tags": [
      "花季/採果",
      "百萬夜景",
      "木棧板",
      "草地營位",
      "壯麗雲海"
    ],
    "scores": {
      "cleanliness": 4.5,
      "management": 4.5,
      "road": 4.0
    },
    "summaries": [
      "身處大片翠綠玉蘭茶園之中，居高遠眺整座蘭陽平原與蘭陽溪壯景。",
      "夜晚可看見宜蘭平原燈火通明，品茗現泡茶葉極度享受。",
      "產業道路坡度平緩，順著茶園指標直行即可輕鬆登頂。"
    ],
    "district": "大同鄉",
    "city": "宜蘭縣",
    "images": [
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 97,
    "name": "阿里山頂石棹遇見茶園露營區",
    "lat": 23.485,
    "lng": 120.698,
    "phone": "0910-888-662",
    "address": "嘉義縣竹崎鄉中和村頂石棹",
    "googleRating": 4.8,
    "reviewsCount": 640,
    "tags": [
      "花季/採果",
      "百萬夜景",
      "壯麗雲海",
      "高海拔避暑",
      "木棧板"
    ],
    "scores": {
      "cleanliness": 4.9,
      "management": 4.8,
      "road": 4.1
    },
    "summaries": [
      "頂石棹琉璃光最知名拍攝點！秋冬夜晚雲霧穿透路燈形成夢幻七彩琉璃光。",
      "被廣袤的高山烏龍茶園包圍，視野面對夕陽西下令人心醉。",
      "阿里山公路台18線路況極佳，轉頂石棹步道路面良好好開。"
    ],
    "district": "竹崎鄉",
    "city": "嘉義縣",
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 98,
    "name": "隙頂象山雲海露營區",
    "lat": 23.435,
    "lng": 120.665,
    "phone": "0933-712-345",
    "address": "嘉義縣番路鄉公田村隙頂",
    "googleRating": 4.7,
    "reviewsCount": 510,
    "tags": [
      "壯麗雲海",
      "草地營位",
      "高海拔避暑"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.7,
      "road": 4.3
    },
    "summaries": [
      "正對隙頂象山巨岩地標，二延平步道雲海與落日壯景一覽無遺。",
      "營區環境維護得非常整潔，清晨常有滾滾雲海溢滿山谷。",
      "台18線阿里山公路旁轉進即達，車行安全無險阻。"
    ],
    "district": "番路鄉",
    "city": "嘉義縣",
    "images": [
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 99,
    "name": "梅山太和樟樹湖茶香露營區",
    "lat": 23.535,
    "lng": 120.725,
    "phone": "0921-654-987",
    "address": "嘉義縣梅山鄉太和村樟樹湖",
    "googleRating": 4.6,
    "reviewsCount": 320,
    "tags": [
      "花季/採果",
      "高海拔避暑",
      "壯麗雲海",
      "星空銀河"
    ],
    "scores": {
      "cleanliness": 4.7,
      "management": 4.6,
      "road": 3.6
    },
    "summaries": [
      "隱身在樟樹湖老茶區，春季有盛名櫻花王綻放，景致高雅脫俗。",
      "四面環抱青翠茶山，空氣中飄散淡淡茶香極致療癒。",
      "經奮起湖進入梅山山區路況尚佳，需注意山區晨霧減速。"
    ],
    "district": "梅山鄉",
    "city": "嘉義縣",
    "images": [
      "https://images.unsplash.com/photo-1517824806704-9040b037703b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
  },
  {
    "id": 100,
    "name": "瑞里綠色隧道竹林露營區",
    "lat": 23.548,
    "lng": 120.675,
    "phone": "05-250-1558",
    "address": "嘉義縣梅山鄉瑞里村幼葉林",
    "googleRating": 4.7,
    "reviewsCount": 490,
    "tags": [
      "森林系",
      "螢火蟲生態",
      "草地營位",
      "花季/採果",
      "高海拔避暑"
    ],
    "scores": {
      "cleanliness": 4.8,
      "management": 4.7,
      "road": 3.8
    },
    "summaries": [
      "宛如電影《臥虎藏龍》的綠色竹林隧道旁，四月更有浪漫紫藤花盛開。",
      "春夏夜晚螢火蟲如繁星點點，環境清幽雅緻生態極佳。",
      "嘉166縣道全線修繕良好，山路雖多彎但路面寬整。"
    ],
    "district": "梅山鄉",
    "city": "嘉義縣",
    "images": [
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80"
    ],
    "siteMapUrl": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
  }
];

// Backwards-compatible export
export const taianCampsites: Campsite[] = taiwanCampsites;

export const AVAILABLE_TAGS = [
  "五星衛浴",
  "免裝備豪華露營",
  "原民部落文化",
  "壯麗雲海",
  "天然溫泉",
  "寵物友善",
  "小包區/安靜",
  "星空銀河",
  "木棧板",
  "森林系",
  "湖海景第一排",
  "溪流戲水",
  "百萬夜景",
  "花季/採果",
  "草地營位",
  "螢火蟲生態",
  "親子推薦",
  "路況良好",
  "雨棚區",
  "高海拔避暑"
];

export interface TagCategory {
  category: string;
  tags: string[];
}

export const TAG_CATEGORIES: TagCategory[] = [
  {
    category: '🏕️ 營位型式',
    tags: ['草地營位', '木棧板', '雨棚區', '免裝備豪華露營']
  },
  {
    category: '🌄 自然景觀',
    tags: ['壯麗雲海', '百萬夜景', '高海拔避暑', '森林系', '湖海景第一排', '星空銀河']
  },
  {
    category: '💦 休閒體驗',
    tags: ['溪流戲水', '天然溫泉', '螢火蟲生態', '花季/採果']
  },
  {
    category: '✨ 營區特色',
    tags: ['寵物友善', '親子推薦', '五星衛浴', '路況良好', '小包區/安靜', '原民部落文化']
  }
];
