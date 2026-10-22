import React, { useEffect, useRef, useState } from 'react';
import { Tags, ChevronDown, X } from 'lucide-react';
import { TagFilter } from './TagFilter';

interface TagDropdownProps {
  availableTags: string[];
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
  onClearTags: () => void;
  resultCount: number;
  /** 額外放在面板內的篩選器（例如 AI 評分滑桿） */
  extraFilters?: React.ReactNode;
}

/**
 * Google Maps 風格的「特色標籤」下拉按鈕。
 * 平常收合，點擊後展開標籤面板；面板會延伸覆蓋到地圖上方。
 */
export const TagDropdown: React.FC<TagDropdownProps> = ({
  availableTags,
  selectedTags,
  onToggleTag,
  onClearTags,
  resultCount,
  extraFilters,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 點擊面板外部或按 Esc 時關閉
  useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const hasSelection = selectedTags.length > 0;

  return (
    <div ref={containerRef} className="relative flex-shrink-0">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className={`h-11 pl-3.5 pr-3 rounded-full border flex items-center gap-1.5 text-sm font-medium shadow-md transition cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 ${
          isOpen || hasSelection
            ? 'bg-sky-600 text-white border-sky-600 hover:bg-sky-700'
            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
        }`}
      >
        <Tags className="w-4 h-4" />
        <span>特色標籤</span>
        {hasSelection && (
          <span className="min-w-5 h-5 px-1 rounded-full bg-white text-sky-700 text-[11px] font-bold flex items-center justify-center">
            {selectedTags.length}
          </span>
        )}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-label="特色標籤篩選"
          className="absolute top-full mt-2 right-0 md:right-auto md:left-0 w-[min(92vw,420px)] bg-white rounded-2xl border border-slate-200 shadow-2xl z-50 flex flex-col max-h-[70vh]"
        >
          <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-slate-100">
            <span className="text-sm font-bold text-slate-800">選擇特色標籤</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              aria-label="關閉"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="px-4 py-3 overflow-y-auto custom-scrollbar space-y-3">
            <TagFilter
              availableTags={availableTags}
              selectedTags={selectedTags}
              onToggleTag={onToggleTag}
              onClearTags={onClearTags}
            />
            {extraFilters}
          </div>

          <div className="px-4 py-3 border-t border-slate-100 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClearTags}
              disabled={!hasSelection}
              className="text-sm text-slate-600 hover:text-slate-900 disabled:text-slate-300 disabled:cursor-not-allowed cursor-pointer"
            >
              全部清除
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-full bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold shadow-sm transition cursor-pointer"
            >
              顯示 {resultCount} 個營地
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
