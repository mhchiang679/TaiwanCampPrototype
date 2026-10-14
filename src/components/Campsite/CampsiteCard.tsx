import React from 'react';
import { Star, MapPin, ChevronRight, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { Campsite } from '../../types';

interface CampsiteCardProps {
  campsite: Campsite;
  isSelected?: boolean;
  onSelect: (campsite: Campsite) => void;
  onOpenDetail: (campsite: Campsite) => void;
}

export const CampsiteCard: React.FC<CampsiteCardProps> = ({
  campsite,
  isSelected,
  onSelect,
  onOpenDetail,
}) => {
  const coverImage =
    campsite.images?.[0] ||
    'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80';
  const totalPhotos = (campsite.images?.length || 0) + (campsite.siteMapUrl ? 1 : 0);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    campsite.name + ' ' + campsite.address
  )}`;

  return (
    <div
      onClick={() => onSelect(campsite)}
      className={`group bg-white rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden space-y-2.5 pb-3 ${
        isSelected
          ? 'border-sky-500 ring-2 ring-sky-500/25 shadow-md bg-sky-50/20'
          : 'border-slate-200 hover:border-sky-300 hover:shadow-md'
      }`}
    >
      {/* 營區相片封面 */}
      <div className="relative h-32 w-full overflow-hidden bg-slate-100">
        <img
          src={coverImage}
          alt={campsite.name}
          loading="lazy"
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* 浮動評分標籤 */}
        <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-white/20 shadow-xs">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{campsite.googleRating.toFixed(1)}</span>
        </div>

        {/* 照片數量標記 */}
        {totalPhotos > 0 && (
          <div className="absolute bottom-2 right-2.5 bg-black/60 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 border border-white/15">
            <ImageIcon className="w-3 h-3" />
            <span>{totalPhotos} 張相片</span>
          </div>
        )}

        {/* 鄉鎮小標籤 */}
        {campsite.district && (
          <div className="absolute bottom-2 left-2.5 bg-sky-950/80 backdrop-blur-md text-sky-100 text-[10px] font-medium px-2.5 py-0.5 rounded-full border border-sky-400/30">
            {campsite.city || ''} {campsite.district}
          </div>
        )}
      </div>

      <div className="px-3.5 space-y-2.5">
        <div className="flex justify-between items-start gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-slate-900 text-base group-hover:text-sky-700 transition truncate">
              {campsite.name}
            </h3>
            <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-1 truncate">
              <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <span className="truncate">{campsite.address}</span>
            </div>
          </div>
        </div>

        {/* 三大維度分數簡報 */}
        <div className="grid grid-cols-3 gap-1 bg-slate-50/80 p-2 rounded-xl text-center text-[11px] border border-slate-100">
          <div>
            <span className="text-slate-400 block text-[10px] mb-0.5">衛浴整潔</span>
            <span className="font-bold text-sky-700">{campsite.scores.cleanliness.toFixed(1)}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] mb-0.5">環境管理</span>
            <span className="font-bold text-blue-700">{campsite.scores.management.toFixed(1)}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] mb-0.5">抵達難易</span>
            <span className="font-bold text-amber-700">{campsite.scores.road.toFixed(1)}</span>
          </div>
        </div>

        {/* 標籤清單 */}
        <div className="flex flex-wrap gap-1">
          {campsite.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="bg-slate-100 text-slate-600 text-[10px] px-2.5 py-0.5 rounded-full border border-slate-200"
            >
              {tag}
            </span>
          ))}
          {campsite.tags.length > 4 && (
            <span className="text-slate-400 text-[10px] px-1 py-0.5">
              +{campsite.tags.length - 4}
            </span>
          )}
        </div>

        {/* AI 評論重點摘要預覽 */}
        {campsite.summaries && campsite.summaries[0] && (
          <div className="bg-sky-50/70 border border-sky-100/90 rounded-xl p-2.5 text-[11px] text-sky-950 leading-relaxed flex items-start gap-1.5">
            <span className="text-[10px] bg-sky-200/90 text-sky-900 font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">
              AI 摘要
            </span>
            <span className="line-clamp-2 text-slate-700 font-normal">{campsite.summaries[0]}</span>
          </div>
        )}

        {/* 底部按鈕：Google 地圖連結 + 詳情彈窗 */}
        <div className="flex items-center justify-between pt-1 border-t border-slate-100">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-xs text-sky-700 hover:text-sky-900 bg-sky-50 hover:bg-sky-100 border border-sky-200/80 px-2.5 py-1 rounded-full font-medium transition cursor-pointer"
            title="在 Google 地圖開啟並導航"
          >
            <ExternalLink className="w-3 h-3 text-sky-600" />
            <span>Google 地圖</span>
          </a>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetail(campsite);
            }}
            className="text-xs text-sky-700 font-semibold hover:text-sky-900 hover:underline flex items-center gap-0.5 cursor-pointer"
          >
            <span>相片與詳情</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
