"""
Builds src/data/taianCampsites.ts and supabase/migrations/20261014_init_campsites.sql
using the complete 100 campsites dataset.
"""

import json

with open("scripts/campsites_100.json", "r", encoding="utf-8") as f:
    campsites = json.load(f)

# Extract unique tags across all 100 campsites
all_tags_set = set()
for c in campsites:
    for t in c["tags"]:
        all_tags_set.add(t)

all_tags_sorted = sorted(list(all_tags_set))

# 1. Generate src/data/taianCampsites.ts
ts_content = """import { Campsite, DistrictSummary } from '../types';

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

export const taiwanCampsites: Campsite[] = """ + json.dumps(campsites, ensure_ascii=False, indent=2) + """;

// Backwards-compatible export
export const taianCampsites: Campsite[] = taiwanCampsites;

export const AVAILABLE_TAGS = """ + json.dumps(all_tags_sorted, ensure_ascii=False, indent=2) + """;

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
"""

with open("src/data/taianCampsites.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Generated src/data/taianCampsites.ts successfully with 100 campsites!")

# 2. Generate supabase/migrations/20261014_init_campsites.sql
sql_lines = [
    "-- ========================================================",
    "-- Taiwan Camp Discovery Platform - Supabase Database Migration",
    "-- Table Schemas with PostGIS Spatial Support (100 Campsites Seed)",
    "-- ========================================================",
    "",
    "-- 1. 啟用 PostGIS 擴充模組",
    "CREATE EXTENSION IF NOT EXISTS postgis;",
    "",
    "-- 2. 營地主表",
    "CREATE TABLE IF NOT EXISTS campsites (",
    "    id SERIAL PRIMARY KEY,",
    "    name VARCHAR(255) NOT NULL,",
    "    lat DOUBLE PRECISION NOT NULL,",
    "    lng DOUBLE PRECISION NOT NULL,",
    "    address TEXT,",
    "    phone VARCHAR(50),",
    "    google_rating NUMERIC(2, 1),",
    "    reviews_count INT DEFAULT 0,",
    "    location GEOGRAPHY(POINT, 4326),",
    "    created_at TIMESTAMPTZ DEFAULT NOW(),",
    "    updated_at TIMESTAMPTZ DEFAULT NOW()",
    ");",
    "",
    "-- 自動更新 location 欄位 Trigger",
    "CREATE OR REPLACE FUNCTION set_campsite_location()",
    "RETURNS TRIGGER AS $$",
    "BEGIN",
    "    NEW.location := ST_SetSRID(ST_MakePoint(NEW.lng, NEW.lat), 4326)::geography;",
    "    RETURN NEW;",
    "END;",
    "$$ LANGUAGE plpgsql;",
    "",
    "DROP TRIGGER IF EXISTS trigger_set_campsite_location ON campsites;",
    "CREATE TRIGGER trigger_set_campsite_location",
    "BEFORE INSERT OR UPDATE OF lat, lng ON campsites",
    "FOR EACH ROW",
    "EXECUTE FUNCTION set_campsite_location();",
    "",
    "-- 3. 評分表",
    "CREATE TABLE IF NOT EXISTS campsite_scores (",
    "    campsite_id INT REFERENCES campsites(id) ON DELETE CASCADE,",
    "    cleanliness NUMERIC(2, 1) CHECK (cleanliness >= 1.0 AND cleanliness <= 5.0),",
    "    management NUMERIC(2, 1) CHECK (management >= 1.0 AND management <= 5.0),",
    "    road NUMERIC(2, 1) CHECK (road >= 1.0 AND road <= 5.0),",
    "    PRIMARY KEY (campsite_id)",
    ");",
    "",
    "-- 4. 標籤表",
    "CREATE TABLE IF NOT EXISTS campsite_tags (",
    "    id SERIAL PRIMARY KEY,",
    "    campsite_id INT REFERENCES campsites(id) ON DELETE CASCADE,",
    "    tag_name VARCHAR(50) NOT NULL",
    ");",
    "",
    "-- 5. 摘要表",
    "CREATE TABLE IF NOT EXISTS campsite_summaries (",
    "    id SERIAL PRIMARY KEY,",
    "    campsite_id INT REFERENCES campsites(id) ON DELETE CASCADE,",
    "    summary_text TEXT NOT NULL",
    ");",
    "",
    "-- 6. 索引",
    "CREATE INDEX IF NOT EXISTS idx_campsites_location ON campsites USING GIST(location);",
    "CREATE INDEX IF NOT EXISTS idx_campsite_tags_name ON campsite_tags(tag_name);",
    "CREATE INDEX IF NOT EXISTS idx_campsite_tags_campsite_id ON campsite_tags(campsite_id);",
    "CREATE INDEX IF NOT EXISTS idx_campsite_summaries_campsite_id ON campsite_summaries(campsite_id);",
    "",
    "-- 7. RLS 權限",
    "ALTER TABLE campsites ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE campsite_scores ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE campsite_tags ENABLE ROW LEVEL SECURITY;",
    "ALTER TABLE campsite_summaries ENABLE ROW LEVEL SECURITY;",
    "",
    "CREATE POLICY \"Allow public read access for campsites\" ON campsites FOR SELECT USING (true);",
    "CREATE POLICY \"Allow public read access for scores\" ON campsite_scores FOR SELECT USING (true);",
    "CREATE POLICY \"Allow public read access for tags\" ON campsite_tags FOR SELECT USING (true);",
    "CREATE POLICY \"Allow public read access for summaries\" ON campsite_summaries FOR SELECT USING (true);",
    "",
    "-- ========================================================",
    "-- 8. 匯入 100 筆全台指標熱門營地 Seed Data",
    "-- ========================================================"
]

# Insert campsites
camps_sql = "INSERT INTO campsites (id, name, lat, lng, phone, address, google_rating, reviews_count) VALUES\n"
camp_rows = []
for c in campsites:
    row = f"({c['id']}, '{c['name']}', {c['lat']}, {c['lng']}, '{c['phone']}', '{c['address']}', {c['googleRating']}, {c['reviewsCount']})"
    camp_rows.append(row)
camps_sql += ",\n".join(camp_rows) + "\nON CONFLICT (id) DO NOTHING;\n"
sql_lines.append(camps_sql)

# Insert scores
scores_sql = "INSERT INTO campsite_scores (campsite_id, cleanliness, management, road) VALUES\n"
score_rows = []
for c in campsites:
    row = f"({c['id']}, {c['scores']['cleanliness']}, {c['scores']['management']}, {c['scores']['road']})"
    score_rows.append(row)
scores_sql += ",\n".join(score_rows) + "\nON CONFLICT (campsite_id) DO NOTHING;\n"
sql_lines.append(scores_sql)

# Insert tags
tag_rows = []
for c in campsites:
    for t in c['tags']:
        tag_rows.append(f"({c['id']}, '{t}')")
tags_sql = "INSERT INTO campsite_tags (campsite_id, tag_name) VALUES\n" + ",\n".join(tag_rows) + ";\n"
sql_lines.append(tags_sql)

# Insert summaries
summary_rows = []
for c in campsites:
    for s in c['summaries']:
        escaped_s = s.replace("'", "''")
        summary_rows.append(f"({c['id']}, '{escaped_s}')")
sum_sql = "INSERT INTO campsite_summaries (campsite_id, summary_text) VALUES\n" + ",\n".join(summary_rows) + ";\n"
sql_lines.append(sum_sql)

with open("supabase/migrations/20261014_init_campsites.sql", "w", encoding="utf-8") as f:
    f.write("\n".join(sql_lines))

print("Generated supabase/migrations/20261014_init_campsites.sql successfully with 100 campsites!")
