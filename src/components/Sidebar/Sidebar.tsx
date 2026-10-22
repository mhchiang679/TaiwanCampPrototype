import React from 'react';
import { Tent, X } from 'lucide-react';
import { Campsite } from '../../types';
import { SearchBar } from './SearchBar';
import { TagDropdown } from './TagDropdown';
import { AdvancedScoreFilter } from './AdvancedScoreFilter';
import { CampsiteCard } from '../Campsite';


interface SidebarProps {
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
  // 只有輸入關鍵字或勾選標籤後才顯示推薦營區
  const hasActiveSearch = searchQuery.trim().length > 0 || selectedTags.length > 0;

  return (
    <aside
      className={`absolute top-0 left-0 z-10 w-full md:w-[420px] flex flex-col min-h-0 ${
        hasActiveSearch
          ? 'bottom-0 bg-white border-r border-slate-200 shadow-lg'
          : 'pointer-events-none'
      }`}
    >
      {/* Google Maps 風格搜尋列：搜尋框 + 右側特色標籤按鈕（未搜尋時直接浮在地圖上） */}
      <div
        className={`px-3 pt-3 pb-2 space-y-2 relative z-20 pointer-events-auto ${
          hasActiveSearch ? 'bg-white border-b border-slate-100' : ''
        }`}
      >
        <div className="flex items-center gap-2">
          <SearchBar value={searchQuery} onChange={onSearchChange} />
          <TagDropdown
            availableTags={allTags}
            selectedTags={selectedTags}
            onToggleTag={onToggleTag}
            onClearTags={onClearTags}
            resultCount={campsites.length}
            extraFilters={
              <AdvancedScoreFilter
                minCleanliness={minCleanliness}
                onMinCleanlinessChange={onMinCleanlinessChange}
                minRoad={minRoad}
                onMinRoadChange={onMinRoadChange}
                onReset={onResetAdvancedFilters}
              />
            }
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

      {hasActiveSearch ? (
        <>
          {/* 營地列表計數 */}
          <div className="px-4 py-2 bg-slate-50 border-b border-slate-200/60 text-xs text-slate-500 font-medium">
            推薦營區 ({campsites.length} 間)
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
        </>
      ) : null}
    </aside>
  );
};
