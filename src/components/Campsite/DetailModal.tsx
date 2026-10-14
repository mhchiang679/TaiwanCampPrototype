import React, { useEffect, useState } from 'react';
import {
  X,
  Star,
  MapPin,
  Phone,
  Sparkles,
  BarChart2,
  MessageSquareText,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Map as MapIcon,
} from 'lucide-react';
import { Campsite } from '../../types';

interface DetailModalProps {
  campsite: Campsite | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ campsite, isOpen, onClose }) => {
  const [communityNotes, setCommunityNotes] = useState<{ text: string; date: string }[]>([
    { text: '2026/10 最新路況已完成邊坡整修，標準小轎車很好開！', date: '2026/10' },
  ]);
  const [newNote, setNewNote] = useState<string>('');
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  // Reset active photo index when campsite changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [campsite?.id]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    setCommunityNotes((prev) => [
      ...prev,
      { text: newNote.trim(), date: '剛剛' },
    ]);
    setNewNote('');
  };

  if (!isOpen || !campsite) return null;

  const { cleanliness, management, road } = campsite.scores;

  // Build photo collection
  const photoItems: { url: string; label: string; isMap?: boolean }[] = [];
  if (campsite.images && campsite.images.length > 0) {
    const labels = ['✨ 營區風光', '⛺ 營位實景', '🌿 生態體驗'];
    campsite.images.forEach((url, idx) => {
      photoItems.push({
        url,
        label: labels[idx % labels.length] || `相片 ${idx + 1}`,
      });
    });
  } else {
    photoItems.push({
      url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80',
      label: '✨ 營區風光',
    });
  }

  if (campsite.siteMapUrl) {
    photoItems.push({
      url: campsite.siteMapUrl,
      label: '🗺️ 營位導覽配置圖',
      isMap: true,
    });
  }

  const currentPhoto = photoItems[activeImageIndex] || photoItems[0];

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : photoItems.length - 1));
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev < photoItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <div
      className="fixed inset-0 bg-black/75 backdrop-blur-xs z-[99999] flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden flex flex-col max-h-[92vh] border border-slate-100 relative z-[100000]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal 頂部 Header */}
        <div className="p-4 md:p-5 bg-gradient-to-r from-emerald-800 to-emerald-900 text-white flex justify-between items-start">
          <div className="space-y-1 pr-3">
            <h3 className="text-xl font-bold tracking-wide">{campsite.name}</h3>
            <p className="text-xs text-emerald-200 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{campsite.address}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-emerald-700/50 transition cursor-pointer"
            aria-label="關閉"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 互動式相片藝廊 / 營位配置圖輪播展示 */}
        <div className="relative bg-slate-900">
          <div className="relative h-52 sm:h-56 w-full overflow-hidden flex items-center justify-center">
            <img
              src={currentPhoto.url}
              alt={currentPhoto.label}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

            {/* 標籤徽章 */}
            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-lg border border-white/20 flex items-center gap-1.5 shadow-xs">
              {currentPhoto.isMap ? <MapIcon className="w-3.5 h-3.5 text-amber-400" /> : <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />}
              <span>{currentPhoto.label}</span>
            </div>

            {/* 頁碼指示 */}
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs px-2 py-0.5 rounded-md border border-white/20">
              {activeImageIndex + 1} / {photoItems.length}
            </div>

            {/* 左右切換箭頭 */}
            {photoItems.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevPhoto}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition border border-white/20 cursor-pointer"
                  aria-label="上一張相片"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextPhoto}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition border border-white/20 cursor-pointer"
                  aria-label="下一張相片"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* 底部相片縮圖導覽條 */}
          {photoItems.length > 1 && (
            <div className="p-2 bg-slate-950 flex gap-1.5 overflow-x-auto custom-scrollbar">
              {photoItems.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative flex-shrink-0 w-16 h-11 rounded-md overflow-hidden border-2 transition cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-emerald-500 ring-2 ring-emerald-500/50 scale-105'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={item.url} alt={item.label} className="w-full h-full object-cover" />
                  {item.isMap && (
                    <span className="absolute inset-0 bg-amber-950/70 text-[9px] text-amber-200 flex items-center justify-center font-bold">
                      配置圖
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Modal 內容區 */}
        <div className="p-5 overflow-y-auto space-y-4 text-sm divide-y divide-slate-100 custom-scrollbar">
          {/* 聯絡電話 & Google 評分 */}
          <div className="flex items-center justify-between bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
            <div>
              <div className="text-xs text-slate-500 font-medium">Google 商家評分</div>
              <div className="text-lg font-bold text-amber-500 flex items-center gap-1.5 mt-0.5">
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                <span>{campsite.googleRating.toFixed(1)}</span>
                <span className="text-xs text-slate-400 font-normal">
                  ({campsite.reviewsCount} 則評論)
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-500 font-medium">營地電話</div>
              <div className="font-semibold text-slate-800 flex items-center justify-end gap-1 mt-0.5">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <a
                  href={`tel:${campsite.phone}`}
                  className="hover:text-emerald-700 hover:underline"
                >
                  {campsite.phone}
                </a>
              </div>
            </div>
          </div>

          {/* 三大關鍵評分指標 */}
          <div className="pt-4">
            <h4 className="font-bold text-slate-800 mb-2.5 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <BarChart2 className="w-4 h-4 text-emerald-600" />
              <span>AI 結構化評分指標 (1.0 - 5.0 分)</span>
            </h4>
            <div className="space-y-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              {/* 衛浴整潔 */}
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
                  <span>衛浴整潔度</span>
                  <span className="font-bold text-emerald-700">{cleanliness.toFixed(1)} / 5.0</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-500 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${(cleanliness / 5) * 100}%` }}
                  />
                </div>
              </div>

              {/* 環境管理 */}
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
                  <span>環境管理 & 靜音表現</span>
                  <span className="font-bold text-blue-700">{management.toFixed(1)} / 5.0</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${(management / 5) * 100}%` }}
                  />
                </div>
              </div>

              {/* 抵達難易度 */}
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
                  <span>抵達難易度 (越高越好走)</span>
                  <span className="font-bold text-amber-700">{road.toFixed(1)} / 5.0</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-500 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${(road / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 設施與特色標籤 */}
          <div className="pt-4">
            <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>營地特色標籤</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {campsite.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full border border-emerald-200 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* AI 評論重點摘要 */}
          <div className="pt-4">
            <h4 className="font-bold text-slate-800 mb-2.5 flex items-center justify-between text-xs uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <MessageSquareText className="w-4 h-4 text-emerald-600" />
                <span>Google 評論 AI 重點提煉 (3大關鍵)</span>
              </span>
              <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-medium">AI 精選</span>
            </h4>
            <div className="space-y-2">
              {campsite.summaries && campsite.summaries.length > 0 ? (
                campsite.summaries.map((summary, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 bg-emerald-50/70 p-3 rounded-xl border border-emerald-100 text-xs text-slate-700 leading-relaxed shadow-2xs"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="flex-1">{summary}</span>
                  </div>
                ))
              ) : (
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500 text-center">
                  暫無評論摘要資料
                </div>
              )}
            </div>
          </div>

          {/* 露友即時補充 / UGC 回饋專區 */}
          <div className="pt-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-slate-800 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <span className="text-emerald-600">💬</span>
                <span>露友即時回饋 (UGC 社群共創)</span>
              </h4>
              <span className="text-[10px] text-slate-400">雙向補充最新路況與營地近況</span>
            </div>

            {/* 社群補充標籤與留言列表 */}
            <div className="space-y-2 mb-3">
              {communityNotes.map((note, index) => (
                <div
                  key={index}
                  className="bg-slate-50 border border-slate-200/80 p-2.5 rounded-lg flex items-start justify-between text-xs"
                >
                  <div className="space-y-0.5">
                    <span className="inline-block bg-emerald-100 text-emerald-800 text-[10px] px-1.5 py-0.5 rounded font-medium mr-1.5">
                      露友補充
                    </span>
                    <span className="text-slate-700">{note.text}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 flex-shrink-0 ml-2">{note.date}</span>
                </div>
              ))}
            </div>

            {/* 新增補充輸入框 */}
            <form onSubmit={handleAddNote} className="flex gap-2">
              <input
                type="text"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="例如：2026/10 最新路況已修繕，底盤低也很好開..."
                className="flex-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-medium cursor-pointer transition shadow-2xs whitespace-nowrap"
              >
                送出補充
              </button>
            </form>
          </div>
        </div>

        {/* Modal 底部按鈕 */}
        <div className="p-3.5 bg-slate-100 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-700 text-white rounded-lg text-xs font-medium hover:bg-slate-800 transition cursor-pointer"
          >
            關閉視窗
          </button>
        </div>
      </div>
    </div>
  );
};
