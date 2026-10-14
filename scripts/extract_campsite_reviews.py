"""
Taiwan Camp Discovery - AI Review Extraction & ETL Pipeline
============================================================
Pipeline flow:
[Google Places API] -> Fetch 20+ Reviews -> [Gemini API (Structured Outputs)] -> Upsert into Supabase
"""

import os
import sys
import json
import argparse
import urllib.request
import urllib.parse
from typing import Dict, Any, List

# Try importing supabase or dotenv if available, else handle gracefully
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

GOOGLE_MAPS_API_KEY = os.getenv("GOOGLE_MAPS_API_KEY", "")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
SUPABASE_URL = os.getenv("SUPABASE_URL", "")
SUPABASE_SERVICE_ROLE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY", "")

# Structured Output Schema for Gemini
CAMPSITE_EXTRACTION_SCHEMA = {
    "type": "object",
    "properties": {
        "scores": {
            "type": "object",
            "properties": {
                "cleanliness": {
                    "type": "number",
                    "description": "衛浴與環境整潔度評分 (1.0 - 5.0)"
                },
                "management": {
                    "type": "number",
                    "description": "營主管理、夜間靜音品質與營區設施維護評分 (1.0 - 5.0)"
                },
                "road": {
                    "type": "number",
                    "description": "抵達難易度評分，越高代表路況越平順好開，越低代表路窄陡峭險峻 (1.0 - 5.0)"
                }
            },
            "required": ["cleanliness", "management", "road"]
        },
        "tags": {
            "type": "array",
            "items": {"type": "string"},
            "description": "特色標籤清單，例如：草地, 棧板, 雨棚, 雲海, 高海拔, 寵物友善, 路況良好, 夜景, 櫻花季, 親水溪邊, 螢火蟲, 免裝備露營 等"
        },
        "summaries": {
            "type": "array",
            "items": {"type": "string"},
            "description": "3 句繁體中文關鍵重點摘要（包含特色亮點、設施評價與交通路況叮嚀）"
        }
    },
    "required": ["scores", "tags", "summaries"]
}


def fetch_google_place_details(place_id: str, api_key: str) -> Dict[str, Any]:
    """Fetch details and recent reviews for a place from Google Places API."""
    if not api_key:
        print("[Warning] GOOGLE_MAPS_API_KEY not found. Returning mock place details.")
        return get_mock_place_data(place_id)

    url = (
        f"https://maps.googleapis.com/maps/api/place/details/json?"
        f"place_id={place_id}&fields=name,formatted_address,formatted_phone_number,"
        f"geometry,rating,user_ratings_total,reviews&language=zh-TW&key={api_key}"
    )

    req = urllib.request.Request(url, headers={"User-Agent": "TaiwanCampPipeline/1.0"})
    with urllib.request.urlopen(req) as response:
        result = json.loads(response.read().decode("utf-8"))

    if result.get("status") != "OK":
        raise RuntimeError(f"Google Places API Error: {result.get('status')} - {result.get('error_message')}")

    return result["result"]


def analyze_reviews_with_gemini(campsite_name: str, reviews: List[str], api_key: str) -> Dict[str, Any]:
    """Analyze reviews using Gemini API with Structured Outputs (JSON Schema)."""
    if not api_key:
        print("[Warning] GEMINI_API_KEY not set. Returning sample AI extraction.")
        return get_mock_ai_output(campsite_name)

    # Use Gemini REST API with responseSchema
    endpoint = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"

    combined_reviews = "\n---\n".join(reviews[:20])

    prompt = f"""
你是一位專業的台灣露營達人與旅遊數據分析專家。
請仔細閱讀以下「{campsite_name}」的 Google 商家真實評論，提取結構化資訊：

評論內容如下：
{combined_reviews}

請嚴格依照 JSON Schema 格式輸出分析結果：
1. scores:
   - cleanliness (1.0~5.0): 衛浴乾淨度、熱水水壓穩定度
   - management (1.0~5.0): 營主服務熱忱、夜間靜音管制落實度
   - road (1.0~5.0): 最後數公里產業道路難易度（5.0為轎車柏油路平緩直達，1.0為極陡會車極困難）
2. tags: 提取最符合營地特徵的標籤（如：草地、棧板、雨棚、雲海、高海拔、寵物友善、夜景、路況良好等）
3. summaries: 繁體中文 3 句關鍵摘要（1. 景觀與營位特色 2. 衛浴管理評價 3. 路況與新手行車叮嚀）
"""

    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "responseMimeType": "application/json",
            "responseSchema": CAMPSITE_EXTRACTION_SCHEMA,
            "temperature": 0.2
        }
    }

    req = urllib.request.Request(
        endpoint,
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"}
    )

    with urllib.request.urlopen(req) as response:
        res_data = json.loads(response.read().decode("utf-8"))

    raw_json_str = res_data["candidates"][0]["content"]["parts"][0]["text"]
    return json.loads(raw_json_str)


def save_to_supabase(campsite_data: Dict[str, Any], ai_output: Dict[str, Any], dry_run: bool = False):
    """Write campsite details, scores, tags, and summaries into Supabase tables."""
    if dry_run or not SUPABASE_URL or not SUPABASE_SERVICE_ROLE_KEY:
        print("\n--- [Dry Run / Output Preview] ---")
        print("Campsite Record:")
        print(json.dumps(campsite_data, indent=2, ensure_ascii=False))
        print("\nAI Extraction Record:")
        print(json.dumps(ai_output, indent=2, ensure_ascii=False))
        print("----------------------------------")
        print("[Info] Set SUPABASE_URL & SUPABASE_SERVICE_ROLE_KEY to write directly to DB.")
        return

    headers = {
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": f"Bearer {SUPABASE_SERVICE_ROLE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=representation"
    }

    # 1. Upsert campsite master record
    camp_payload = {
        "name": campsite_data["name"],
        "lat": campsite_data["lat"],
        "lng": campsite_data["lng"],
        "address": campsite_data["address"],
        "phone": campsite_data["phone"],
        "google_rating": campsite_data["google_rating"],
        "reviews_count": campsite_data["reviews_count"]
    }

    req = urllib.request.Request(
        f"{SUPABASE_URL}/rest/v1/campsites",
        data=json.dumps(camp_payload).encode("utf-8"),
        headers=headers,
        method="POST"
    )
    with urllib.request.urlopen(req) as resp:
        inserted_camps = json.loads(resp.read().decode("utf-8"))
        campsite_id = inserted_camps[0]["id"]
        print(f"[Success] Inserted campsite id={campsite_id}")

    # 2. Insert Scores
    scores_payload = {
        "campsite_id": campsite_id,
        "cleanliness": ai_output["scores"]["cleanliness"],
        "management": ai_output["scores"]["management"],
        "road": ai_output["scores"]["road"]
    }
    req_score = urllib.request.Request(
        f"{SUPABASE_URL}/rest/v1/campsite_scores",
        data=json.dumps(scores_payload).encode("utf-8"),
        headers=headers,
        method="POST"
    )
    urllib.request.urlopen(req_score)

    # 3. Insert Tags
    tags_payload = [{"campsite_id": campsite_id, "tag_name": tag} for tag in ai_output["tags"]]
    req_tags = urllib.request.Request(
        f"{SUPABASE_URL}/rest/v1/campsite_tags",
        data=json.dumps(tags_payload).encode("utf-8"),
        headers=headers,
        method="POST"
    )
    urllib.request.urlopen(req_tags)

    # 4. Insert Summaries
    summaries_payload = [{"campsite_id": campsite_id, "summary_text": s} for s in ai_output["summaries"]]
    req_sum = urllib.request.Request(
        f"{SUPABASE_URL}/rest/v1/campsite_summaries",
        data=json.dumps(summaries_payload).encode("utf-8"),
        headers=headers,
        method="POST"
    )
    urllib.request.urlopen(req_sum)

    print(f"[Done] All records successfully synced to Supabase for campsite: {campsite_data['name']} (id={campsite_id})")


def get_mock_place_data(place_id: str) -> Dict[str, Any]:
    """Fallback sample data for testing when API keys are not yet configured."""
    return {
        "name": "司馬限山情露營區",
        "formatted_address": "苗栗縣泰安鄉中興村5鄰司馬限1-38號",
        "formatted_phone_number": "0933-577-909",
        "geometry": {"location": {"lat": 24.4289, "lng": 120.9582}},
        "rating": 4.6,
        "user_ratings_total": 512,
        "reviews": [
            {"text": "雲海第一排景觀無敵！海拔約1200公尺，晚上滿天星斗，風景美到讓人不想下山。"},
            {"text": "衛浴熱水很熱很充足，環境打掃得一塵不染，營主非常客氣有禮貌。"},
            {"text": "最後三公里產業道路坡度很大，有些彎道不好會車，建議新手天黑前抵達比較安全。"},
            {"text": "草皮保養很紮實，赤腳踩起來很舒服。有提供冷藏冷凍冰箱與吹風機。"},
            {"text": "十點後大家都很安靜，非常推薦喜歡高品質露營的朋友。"}
        ]
    }


def get_mock_ai_output(campsite_name: str) -> Dict[str, Any]:
    """Fallback sample AI output for testing."""
    return {
        "scores": {
            "cleanliness": 4.8,
            "management": 4.7,
            "road": 3.1
        },
        "tags": ["草地", "雲海", "高海拔", "夜景", "星空滿天", "衛浴高檔"],
        "summaries": [
            f"座落於高海拔稜線，擁有雲海第一排無敵景緻與璀璨夜景星空。",
            "營區衛浴乾淨如新且熱水充足穩定，營主用心維護安靜品質。",
            "最後 3 公里山路坡度較陡峭且會車不易，建議露友白天提早上山。"
        ]
    }


def main():
    parser = argparse.ArgumentParser(description="Google Places & Gemini Review Extraction Pipeline")
    parser.add_argument("--place_id", type=str, default="ChIJ_example_taian_camp", help="Google Place ID")
    parser.add_argument("--dry_run", action="store_true", help="Preview output without writing to database")
    args = parser.parse_args()

    print(f"=== Starting ETL Pipeline for Place ID: {args.place_id} ===")

    # Step 1: Fetch Google Place Details
    place_details = fetch_google_place_details(args.place_id, GOOGLE_MAPS_API_KEY)
    campsite_info = {
        "name": place_details.get("name", "未知營地"),
        "lat": place_details.get("geometry", {}).get("location", {}).get("lat", 0.0),
        "lng": place_details.get("geometry", {}).get("location", {}).get("lng", 0.0),
        "address": place_details.get("formatted_address", ""),
        "phone": place_details.get("formatted_phone_number", ""),
        "google_rating": place_details.get("rating", 4.5),
        "reviews_count": place_details.get("user_ratings_total", 0),
    }
    review_texts = [r.get("text", "") for r in place_details.get("reviews", []) if r.get("text")]
    print(f"[Step 1] Fetched info for: {campsite_info['name']} ({len(review_texts)} reviews)")

    # Step 2: AI Review Structuring via Gemini API
    print("[Step 2] Processing reviews with Gemini Structured Outputs...")
    ai_output = analyze_reviews_with_gemini(campsite_info["name"], review_texts, GEMINI_API_KEY)
    print(f"[Step 2] Scores: {ai_output['scores']}")
    print(f"[Step 2] Tags: {ai_output['tags']}")

    # Step 3: Write to Supabase Database
    print("[Step 3] Upserting to Supabase...")
    save_to_supabase(campsite_info, ai_output, dry_run=args.dry_run)
    print("=== Pipeline Complete ===")


if __name__ == "__main__":
    main()
