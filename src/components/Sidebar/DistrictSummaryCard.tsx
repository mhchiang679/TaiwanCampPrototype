import React from 'react';
import { Mountain, Sparkles, AlertTriangle } from 'lucide-react';
import { DistrictSummary } from '../../types';

interface DistrictSummaryCardProps {
  summary: DistrictSummary;
}

export const DistrictSummaryCard: React.FC<DistrictSummaryCardProps> = ({ summary }) => {
  return (
    <div className="p-4 bg-gradient-to-br from-sky-50/90 via-sky-50/60 to-blue-50/40 border-b border-sky-100/90 transition">
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-bold text-sky-950 flex items-center gap-2 text-sm md:text-base tracking-tight">
          <Mountain className="w-5 h-5 text-sky-600 flex-shrink-0" />
          <span>{summary.title}</span>
        </h2>
        <span className="text-[11px] text-sky-800 font-semibold bg-sky-100/80 border border-sky-200/80 px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">
          <Sparkles className="w-3 h-3 text-sky-600" />
          {summary.badge}
        </span>
      </div>
      <p className="text-xs text-slate-700 leading-relaxed font-normal">
        {summary.description}
      </p>
      {summary.warningRoad && (
        <div className="mt-2.5 flex items-start gap-1.5 bg-amber-50/90 border border-amber-200/80 p-2.5 rounded-2xl text-[11px] text-amber-900 leading-snug">
          <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <span>
            <strong>路況提醒：</strong>{summary.warningRoad}，建議新手提早於白天抵達。
          </span>
        </div>
      )}
    </div>
  );
};
