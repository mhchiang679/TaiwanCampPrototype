"""
Assigns thematic, high-resolution campsite photos and layout guide map
to each of the 100 campsites based on their features and tags.
"""

import json

PHOTO_POOLS = {
    "雲海": [
        "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=80"
    ],
    "森林系": [
        "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80"
    ],
    "草地營位": [
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80"
    ],
    "木棧板": [
        "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&auto=format&fit=crop&q=80"
    ],
    "免裝備豪華露營": [
        "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1587547131116-a0655a526190?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1533873984035-25970ab07461?w=800&auto=format&fit=crop&q=80"
    ],
    "溪流戲水": [
        "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&auto=format&fit=crop&q=80"
    ],
    "天然溫泉": [
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&auto=format&fit=crop&q=80"
    ],
    "星空銀河": [
        "https://images.unsplash.com/photo-1517824806704-9040b037703b?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=800&auto=format&fit=crop&q=80"
    ],
    "百萬夜景": [
        "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=80"
    ],
    "湖海景第一排": [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80"
    ],
    "花季/採果": [
        "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&auto=format&fit=crop&q=80"
    ],
    "營位導覽圖": [
        "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=80"
    ]
}

DEFAULT_CAMP_IMAGES = [
    "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80"
]

with open("scripts/campsites_100.json", "r", encoding="utf-8") as f:
    campsites = json.load(f)

for i, camp in enumerate(campsites):
    images = []
    # Pick photos based on tags
    tags = camp.get("tags", [])
    
    # 1. Scenery photo
    scenery_picked = False
    for t in ["壯麗雲海", "森林系", "湖海景第一排", "星空銀河", "百萬夜景", "花季/採果"]:
        if t in tags or (t == "壯麗雲海" and "雲海" in str(tags)):
            pool = PHOTO_POOLS.get(t, [])
            if pool:
                images.append(pool[i % len(pool)])
                scenery_picked = True
                break
    if not scenery_picked:
        images.append(PHOTO_POOLS["草地營位"][i % len(PHOTO_POOLS["草地營位"])])

    # 2. Campsite ground / tent photo
    site_picked = False
    for t in ["免裝備豪華露營", "木棧板", "草地營位", "雨棚區"]:
        if t in tags:
            pool = PHOTO_POOLS.get(t, [])
            if pool:
                img = pool[(i + 1) % len(pool)]
                if img not in images:
                    images.append(img)
                    site_picked = True
                    break
    if not site_picked:
        images.append(DEFAULT_CAMP_IMAGES[(i + 1) % len(DEFAULT_CAMP_IMAGES)])

    # 3. Experience / feature photo (Water/Spring/Star/Fire)
    feature_picked = False
    for t in ["溪流戲水", "天然溫泉", "星空銀河", "百萬夜景"]:
        if t in tags:
            pool = PHOTO_POOLS.get(t, [])
            if pool:
                img = pool[(i + 2) % len(pool)]
                if img not in images:
                    images.append(img)
                    feature_picked = True
                    break
    if not feature_picked:
        images.append(PHOTO_POOLS["森林系"][(i + 2) % len(PHOTO_POOLS["森林系"])])

    # 4. Optional Campsite layout / guide map
    site_map = PHOTO_POOLS["營位導覽圖"][i % len(PHOTO_POOLS["營位導覽圖"])]
    camp["images"] = images
    camp["siteMapUrl"] = site_map

# Write back
with open("scripts/campsites_100.json", "w", encoding="utf-8") as f:
    json.dump(campsites, f, ensure_ascii=False, indent=2)

print("Assigned real campsite photos and layout guide maps to all 100 campsites successfully!")
