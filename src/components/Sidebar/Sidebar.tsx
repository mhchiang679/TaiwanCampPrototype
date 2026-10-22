import React from 'react';
import { Tent, X } from 'lucide-react';
import { Campsite, DistrictSummary } from '../../types';
import { DistrictSummaryCard } from './DistrictSummaryCard';
import { SearchBar } from './SearchBar';
import { TagDropdown } from './TagDropdown';
import { AdvancedScoreFilter } from './AdvancedScoreFilter';
import { CampsiteCard } from '../Campsite';


interface SidebarProps {
  districtSummary: DistrictSummary;
  campsites: Campsite[];
  allTags: string[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
  onClearTags: () => void;
  minCleanliness: number;
  onMinCleanlinessChange: (val: number) => void;
  minRoad: number;
  onMinRoadChange: (val: number) => void;
  onResetAdvancedFilters: () => void;
  selectedCampsite: Campsite | null;
  onSelectCampsite: (campsite: Campsite) => void;
  onOpenDetail: (campsite: Campsite) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  districtSummary,
  campsites,
  allTags,
  searchQuery,
  onSearchChange,
  selectedTags,
  onToggleTag,
  onClearTags,
  minCleanliness,
  onMinCleanlinessChange,
  minRoad,
  onMinRoadChange,
  onResetAdvancedFilters,
  selectedCampsite,
  onSelectCampsite,
  onOpenDetail,
}) => {
  return (
    <aside className="w-full md:w-[420px] bg-white flex flex-col border-r border-slate-200 z-10 shadow-lg h-full min-h-0">
      {/* Google Maps 風格搜尋列：搜尋框 + 右側特色標籤按鈕 */}
      <div className="px-3 pt-3 pb-2 bg-white border-b border-slate-100 space-y-2 relative z-20">
        <div className="flex items-center gap-2">
          <SearchBar value={searchQuery} onChange={onSearchChange} />
          <TagDropdown
            availableTags={allTags}
            selectedTags={selectedTags}
            onToggleTag={onToggleTag}
            onClearTags={onClearTags}
            resultCount={campsites.length}
          />
        </div>

        {/* 已選標籤，點擊即可移除 */}
        {selectedTags.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            {selectedTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => onToggleTag(tag)}
                className="text-xs pl-2.5 pr-1.5 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200 hover:bg-sky-100 flex items-center gap-1 transition cursor-pointer"
                aria-label={`移除標籤 ${tag}`}
              >
                <span>{tag}</span>
                <X className="w-3 h-3" />
              </button>
            ))}
            <button
              type="button"
              onClick={onClearTags}
              className="text-xs text-slate-500 hover:text-slate-800 hover:underline px-1 cursor-pointer"
            >
              清除全部
            </button>
          </div>
        )}
      </div>

      {/* 區域特色卡片 (District Feature Summary) */}
      <DistrictSummaryCard summary={districtSummary} />

      {/* 進階評分篩選 */}
      <div className="px-4 py-3 border-b border-slate-200 bg-slate-50/80">
        <AdvancedScoreFilter
          minCleanliness={minCleanliness}
          onMinCleanlinessChange={onMinCleanlinessChange}
          minRoad={minRoad}
          onMinRoadChange={onMinRoadChange}
          onReset={onResetAdvancedFilters}
        />
      </div>

      {/* 營地列表計數 */}
      <div className="px-4 py-2 bg-slate-100/70 border-b border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-medium">
        <span>營地清單 ({campsites.length} 間)</span>
        {(searchQuery || selectedTags.length > 0) && (
          <span className="text-sky-700 bg-sky-100/80 px-2.5 py-0.5 rounded-full text-[10px] font-semibold">
            已套用篩選
          </span>
        )}
      </div>

      {/* 營地列表 */}
      <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-3">
        {campsites.length === 0 ? (
          <div className="text-center text-slate-400 py-12 space-y-2">
            <Tent className="w-10 h-10 mx-auto text-slate-300 stroke-[1.5]" />
            <div className="text-sm font-medium text-slate-600">沒有符合條件的營地</div>
            <div className="text-xs text-slate-400">請嘗試調整搜尋關鍵字或減少標籤條件</div>
          </div>
        ) : (
          campsites.map((camp) => (
            <CampsiteCard
              key={camp.id}
              campsite={camp}
              isSelected={selectedCampsite?.id === camp.id}
              onSelect={onSelectCampsite}
              onOpenDetail={onOpenDetail}
            />
          ))
        )}
      </div>
    </aside>
  );
};
