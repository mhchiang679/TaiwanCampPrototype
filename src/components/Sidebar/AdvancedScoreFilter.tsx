import React, { useState } from 'react';
import { SlidersHorizontal, ChevronDown, ChevronUp, RotateCcw } from 'lucide-react';

interface AdvancedScoreFilterProps {
  minCleanliness: number;
  onMinCleanlinessChange: (value: number) => void;
  minRoad: number;
  onMinRoadChange: (value: number) => void;
  onReset: () => void;
}

export const AdvancedScoreFilter: React.FC<AdvancedScoreFilterProps> = ({
  minCleanliness,
  onMinCleanlinessChange,
  minRoad,
  onMinRoadChange,
  onReset,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const hasFilter = minCleanliness > 1.0 || minRoad > 1.0;

  return (
    <div className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white shadow-2xs">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3.5 py-2.5 text-xs font-semibold text-slate-700 bg-sky-50/40 hover:bg-sky-50/80 flex items-center justify-between transition cursor-pointer"
      >
        <div className="flex items-center gap-1.5">
          <SlidersHorizontal className="w-3.5 h-3.5 text-sky-600" />
          <span>多維度滑桿篩選 (AI 評分)</span>
          {hasFilter && (
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          )}
        </div>
        <div className="flex items-center gap-1 text-slate-400">
          {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </div>
      </button>

      {isOpen && (
        <div className="p-3.5 space-y-3.5 bg-white border-t border-slate-100 text-xs">
          {/* 衛浴整潔滑桿 */}
          <div>
            <div className="flex justify-between items-center mb-1 text-slate-600">
              <span>衛浴整潔度門檻</span>
              <span className="font-bold text-sky-700">
                ≥ {minCleanliness.toFixed(1)} 分
              </span>
            </div>
            <input
              type="range"
              min="1.0"
              max="5.0"
              step="0.1"
              value={minCleanliness}
              onChange={(e) => onMinCleanlinessChange(parseFloat(e.target.value))}
              className="w-full accent-sky-600 cursor-pointer h-2 bg-slate-200 rounded-full"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
              <span>不拘 (1.0)</span>
              <span>要求高標 (4.5)</span>
            </div>
          </div>

          {/* 路況難易滑桿 */}
          <div>
            <div className="flex justify-between items-center mb-1 text-slate-600">
              <span>抵達難易度門檻 (越高越好走)</span>
              <span className="font-bold text-amber-700">
                ≥ {minRoad.toFixed(1)} 分
              </span>
            </div>
            <input
              type="range"
              min="1.0"
              max="5.0"
              step="0.1"
              value={minRoad}
              onChange={(e) => onMinRoadChange(parseFloat(e.target.value))}
              className="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 rounded-full"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
              <span>不拘 (1.0)</span>
              <span>新手好開 (4.0)</span>
            </div>
          </div>

          {hasFilter && (
            <div className="flex justify-end pt-1">
              <button
                type="button"
                onClick={onReset}
                className="text-[11px] text-slate-500 hover:text-sky-700 flex items-center gap-1 cursor-pointer font-medium"
              >
                <RotateCcw className="w-3 h-3" />
                <span>重置滑桿</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
