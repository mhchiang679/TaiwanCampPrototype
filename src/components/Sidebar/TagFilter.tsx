import React, { useState } from 'react';
import { TAG_CATEGORIES } from '../../data/taianCampsites';

interface TagFilterProps {
  availableTags: string[];
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
  onClearTags?: () => void;
}

export const TagFilter: React.FC<TagFilterProps> = ({
  availableTags,
  selectedTags,
  onToggleTag,
  onClearTags,
}) => {
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('全部');

  const categories = [
    { name: '全部', tags: availableTags },
    ...TAG_CATEGORIES.map((c) => ({ name: c.category, tags: c.tags })),
  ];

  const currentTags =
    activeCategoryTab === '全部'
      ? availableTags
      : categories.find((c) => c.name === activeCategoryTab)?.tags || availableTags;

  return (
    <div className="space-y-2">
      {/* 標題列與清除按鈕 */}
      <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
        <span className="flex items-center gap-1">
          <span>特色標籤</span>
          <span className="text-[10px] text-slate-400 font-normal">(4大維度分類)</span>
        </span>
        {selectedTags.length > 0 && onClearTags && (
          <button
            type="button"
            onClick={onClearTags}
            className="text-sky-700 hover:text-sky-900 text-[11px] font-medium hover:underline cursor-pointer"
          >
            重置標籤 ({selectedTags.length})
          </button>
        )}
      </div>

      {/* 分類切換頁籤 (Category Tabs) */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 text-[11px] custom-scrollbar">
        {categories.map((cat) => {
          const isTabActive = activeCategoryTab === cat.name;
          const countSelectedInCat = cat.tags.filter((t) => selectedTags.includes(t)).length;
          return (
            <button
              key={cat.name}
              type="button"
              onClick={() => setActiveCategoryTab(cat.name)}
              className={`px-3 py-1 rounded-full transition font-medium whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                isTabActive
                  ? 'bg-sky-100 text-sky-950 font-bold border border-sky-300 shadow-2xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>{cat.name}</span>
              {countSelectedInCat > 0 && (
                <span className="w-4 h-4 rounded-full bg-sky-600 text-white text-[9px] flex items-center justify-center font-bold">
                  {countSelectedInCat}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* 標籤按鈕群 */}
      <div className="flex flex-wrap gap-1.5 pt-0.5">
        {currentTags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              type="button"
              onClick={() => onToggleTag(tag)}
              className={`text-xs px-3 py-1 rounded-full border transition font-medium cursor-pointer ${
                isSelected
                  ? 'bg-sky-600 text-white border-sky-600 shadow-2xs ring-1 ring-sky-500'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-sky-50 hover:border-sky-300 hover:text-sky-800'
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
};
