import React, { useState, useEffect, useMemo } from 'react';
import { MapPin, Database, Sparkles, ChevronDown } from 'lucide-react';
import { Campsite } from './types';
import { districtSummaries, AVAILABLE_TAGS } from './data/taianCampsites';
import { fetchCampsitesByDistrict, isSupabaseConfigured } from './services';
import { Sidebar } from './components/Sidebar';
import { CampingMap } from './components/Map';
import { DetailModal } from './components/Campsite';
import { SplashScreen, MountainLogo } from './components/Splash';

const DISTRICT_LIST = [
  { name: '全部地區', city: '全台灣' },
  { name: '泰安鄉', city: '苗栗縣' },
  { name: '尖石鄉', city: '新竹縣' },
  { name: '五峰鄉', city: '新竹縣' },
  { name: '仁愛鄉', city: '南投縣' },
  { name: '南庄鄉', city: '苗栗縣' },
  { name: '卓蘭鎮', city: '苗栗縣' },
  { name: '魚池鄉', city: '南投縣' },
  { name: '和平區', city: '台中市' },
  { name: '復興區', city: '桃園市' },
  { name: '南澳鄉', city: '宜蘭縣' },
  { name: '梅山鄉', city: '嘉義縣' },
];

export const App: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>('全部地區');
  const [allCampsites, setAllCampsites] = useState<Campsite[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [minCleanliness, setMinCleanliness] = useState<number>(1.0);
  const [minRoad, setMinRoad] = useState<number>(1.0);
  const [selectedCampsite, setSelectedCampsite] = useState<Campsite | null>(null);
  const [detailModalCampsite, setDetailModalCampsite] = useState<Campsite | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showSplash, setShowSplash] = useState<boolean>(true);

  const supabaseActive = isSupabaseConfigured();
  const currentSummary = districtSummaries[selectedDistrict] || districtSummaries['泰安鄉'];

  // Load campsite data from service when selectedDistrict changes
  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCampsitesByDistrict(selectedDistrict, []);
        if (isMounted) {
          setAllCampsites(data);
          setSelectedCampsite(null);
        }
      } catch (err) {
        console.error('Failed to load campsites:', err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };
    loadData();
    return () => {
      isMounted = false;
    };
  }, [selectedDistrict]);

  // Filter campsites based on searchQuery, selectedTags, and Advanced score sliders
  const filteredCampsites = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return allCampsites.filter((camp) => {
      const matchSearch =
        !query ||
        camp.name.toLowerCase().includes(query) ||
        camp.address.toLowerCase().includes(query);

      const matchTags =
        selectedTags.length === 0 ||
        selectedTags.every((t) => camp.tags.includes(t));

      const matchCleanliness = camp.scores.cleanliness >= minCleanliness;
      const matchRoad = camp.scores.road >= minRoad;

      return matchSearch && matchTags && matchCleanliness && matchRoad;
    });
  }, [allCampsites, searchQuery, selectedTags, minCleanliness, minRoad]);

  // Toggle tag selection
  const handleToggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleClearTags = () => {
    setSelectedTags([]);
  };

  const handleResetAdvancedFilters = () => {
    setMinCleanliness(1.0);
    setMinRoad(1.0);
  };

  // Open modal
  const handleOpenDetail = (camp: Campsite) => {
    setDetailModalCampsite(camp);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-sky-50/20 font-sans text-slate-800">
      {/* 頂部導覽列 Header */}
      <header className="bg-gradient-to-r from-sky-600 via-sky-700 to-blue-700 text-white px-4 md:px-6 py-3 flex items-center justify-between shadow-md z-20 h-[70px] flex-shrink-0">
        <div className="flex items-center space-x-3">
          <MountainLogo className="w-10 h-10 flex-shrink-0 drop-shadow" />
          <div>
            <h1 className="text-lg md:text-xl font-bold tracking-wide flex items-center gap-2">
              TaiwanCamp 地圖搜尋
              <span className="text-[11px] bg-white/20 border border-white/30 px-2.5 py-0.5 rounded-full font-medium text-white shadow-2xs">
                全台 100 筆精選
              </span>
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-3">
          {/* Data source badge */}
          <div
            className={`hidden sm:flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border backdrop-blur-xs ${
              supabaseActive
                ? 'bg-white/20 text-white border-white/30'
                : 'bg-black/20 text-sky-100 border-white/15'
            }`}
            title={supabaseActive ? '已連線 Supabase PostGIS 資料庫' : '目前使用 Local Mock Data (未連線 Supabase)'}
          >
            <Database className="w-3.5 h-3.5 text-sky-200" />
            <span>{supabaseActive ? 'Supabase 資料庫' : 'Local Mock 模式'}</span>
          </div>

          {/* District selector (下鑽切換) */}
          <div className="relative inline-flex items-center">
            <span className="text-xs md:text-sm bg-white/15 border border-white/25 pl-3.5 pr-2.5 py-1.5 rounded-full text-white flex items-center gap-1.5 shadow-sm backdrop-blur-xs hover:bg-white/20 transition">
              <MapPin className="w-3.5 h-3.5 text-sky-200 flex-shrink-0" />
              <span className="font-medium">{currentSummary.city} ➔</span>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer pr-4 appearance-none"
              >
                {DISTRICT_LIST.map((d) => (
                  <option key={d.name} value={d.name} className="text-slate-800 bg-white">
                    {d.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 pointer-events-none -ml-4" />
            </span>
          </div>
        </div>
      </header>

      {/* 主要內容區：全幅地圖 + 浮動搜尋列 / 搜尋後展開的結果面板 */}
      <div className="flex flex-1 overflow-hidden relative">
        {isLoading ? (
          <div className="absolute inset-0 z-30 bg-white/80 backdrop-blur-xs flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-sky-800">
              <Sparkles className="w-8 h-8 animate-spin text-sky-600" />
              <p className="text-sm font-semibold">載入營地資料中...</p>
            </div>
          </div>
        ) : null}

        {/* 側邊欄 */}
        <Sidebar
          campsites={filteredCampsites}
          allTags={AVAILABLE_TAGS}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedTags={selectedTags}
          onToggleTag={handleToggleTag}
          onClearTags={handleClearTags}
          minCleanliness={minCleanliness}
          onMinCleanlinessChange={setMinCleanliness}
          minRoad={minRoad}
          onMinRoadChange={setMinRoad}
          onResetAdvancedFilters={handleResetAdvancedFilters}
          selectedCampsite={selectedCampsite}
          onSelectCampsite={setSelectedCampsite}
          onOpenDetail={handleOpenDetail}
        />

        {/* 右側 Leaflet 地圖視圖 */}
        <main className="absolute inset-0 isolate z-0">
          <CampingMap
            campsites={filteredCampsites}
            selectedCampsite={selectedCampsite}
            onOpenDetail={handleOpenDetail}
            leftPanelOpen={searchQuery.trim().length > 0 || selectedTags.length > 0}
          />
        </main>
      </div>

      {/* 營地詳細資訊 Modal */}
      <DetailModal
        campsite={detailModalCampsite}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* 進站動畫 */}
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
    </div>
  );
};

export default App;
