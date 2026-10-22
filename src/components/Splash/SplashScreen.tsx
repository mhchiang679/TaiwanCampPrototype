import React, { useEffect, useMemo, useState } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

const VISIBLE_MS = 3400; // 動畫停留時間
const FADE_MS = 700; // 淡出時間

/** 山形 Logo：山稜線 + 右上角的 AI 星芒 */
export const MountainLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="logo-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#38bdf8" />
        <stop offset="1" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#logo-bg)" />
    {/* 後方山 */}
    <path d="M8 48 L24 26 L32 36 L40 24 L56 48 Z" fill="#e0f2fe" opacity="0.45" />
    {/* 前方主峰 */}
    <path d="M10 50 L28 22 L36 34 L42 28 L54 50 Z" fill="#ffffff" />
    {/* 山頂雪線 */}
    <path d="M24.5 27.5 L28 22 L31.5 27.5 L29 26.5 L28 28 L26.6 26.4 Z" fill="#bae6fd" />
    {/* AI 星芒 */}
    <path
      d="M47 10 L48.6 14.4 L53 16 L48.6 17.6 L47 22 L45.4 17.6 L41 16 L45.4 14.4 Z"
      fill="#fde68a"
    />
  </svg>
);

/** 進站動畫：夜晚山谷露營場景 + Logo + AI 評分 slogan */
export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [isLeaving, setIsLeaving] = useState<boolean>(false);

  // 固定的星星位置（每次載入隨機一次）
  const stars = useMemo(
    () =>
      Array.from({ length: 70 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 55,
        r: Math.random() * 1.3 + 0.4,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 3,
      })),
    []
  );

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setIsLeaving(true), VISIBLE_MS);
    return () => window.clearTimeout(leaveTimer);
  }, []);

  useEffect(() => {
    if (!isLeaving) return;
    const doneTimer = window.setTimeout(onFinish, FADE_MS);
    return () => window.clearTimeout(doneTimer);
  }, [isLeaving, onFinish]);

  const skip = () => setIsLeaving(true);

  return (
    <div
      role="dialog"
      aria-label="TaiwanCamp 歡迎畫面"
      onClick={skip}
      className={`fixed inset-0 z-[2000] overflow-hidden cursor-pointer select-none bg-[#0b1530] transition-opacity ease-out ${
        isLeaving ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      {/* 夜空 + 山谷場景 */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#070d22" />
            <stop offset="0.55" stopColor="#14214a" />
            <stop offset="1" stopColor="#2a2f5e" />
          </linearGradient>
          <radialGradient id="moon-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#fef9c3" stopOpacity="0.55" />
            <stop offset="1" stopColor="#fef9c3" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="fire-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#fb923c" stopOpacity="0.55" />
            <stop offset="1" stopColor="#fb923c" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="tent-light" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fde68a" />
            <stop offset="1" stopColor="#f59e0b" />
          </linearGradient>
        </defs>

        <rect width="1440" height="900" fill="url(#sky)" />

        {/* 星星 */}
        {stars.map((s) => (
          <circle
            key={s.id}
            cx={`${s.x}%`}
            cy={`${s.y}%`}
            r={s.r}
            fill="#ffffff"
            className="splash-star"
            style={{ animationDelay: `${s.delay}s`, animationDuration: `${s.duration}s` }}
          />
        ))}

        {/* 月亮 */}
        <circle cx="1150" cy="170" r="110" fill="url(#moon-glow)" />
        <circle cx="1150" cy="170" r="38" fill="#fef3c7" />
        <circle cx="1166" cy="160" r="34" fill="#14214a" opacity="0.92" />

        {/* 遠山 */}
        <path
          className="splash-rise splash-rise-1"
          d="M0 560 L160 470 L300 530 L470 410 L640 520 L800 430 L980 520 L1150 440 L1300 510 L1440 470 L1440 900 L0 900 Z"
          fill="#1e2a55"
        />
        {/* 中景山 */}
        <path
          className="splash-rise splash-rise-2"
          d="M0 640 L200 540 L360 610 L560 500 L760 620 L940 560 L1120 640 L1300 570 L1440 620 L1440 900 L0 900 Z"
          fill="#152044"
        />
        {/* 前景草地 */}
        <path
          className="splash-rise splash-rise-3"
          d="M0 730 Q360 690 720 720 T1440 710 L1440 900 L0 900 Z"
          fill="#0c1430"
        />

        {/* 營火光暈 */}
        <circle cx="760" cy="760" r="150" fill="url(#fire-glow)" className="splash-glow" />

        {/* 帳篷 1（亮燈） */}
        <g className="splash-rise splash-rise-3">
          <path d="M520 770 L600 660 L680 770 Z" fill="url(#tent-light)" className="splash-tent-light" />
          <path d="M600 660 L612 770 L588 770 Z" fill="#92400e" opacity="0.55" />
          <path d="M600 660 L600 648" stroke="#fde68a" strokeWidth="3" />
        </g>
        {/* 帳篷 2（暗） */}
        <g className="splash-rise splash-rise-3">
          <path d="M900 775 L960 690 L1020 775 Z" fill="#334155" />
          <path d="M960 690 L968 775 L952 775 Z" fill="#1e293b" />
        </g>

        {/* 營火 */}
        <g transform="translate(760 772)">
          <path d="M-22 6 L22 -2 M-22 -2 L22 6" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
          <path className="splash-flame" d="M0 -46 C14 -26 16 -12 10 -2 C6 4 -6 4 -10 -2 C-16 -12 -10 -26 0 -46 Z" fill="#fb923c" />
          <path className="splash-flame splash-flame-inner" d="M0 -28 C7 -18 8 -10 5 -3 C3 0 -3 0 -5 -3 C-8 -10 -6 -18 0 -28 Z" fill="#fde68a" />
        </g>

        {/* 圍著營火的人 */}
        <g fill="#060b1d" className="splash-rise splash-rise-3">
          {/* 左邊坐著的人 */}
          <circle cx="700" cy="742" r="10" />
          <path d="M688 778 Q690 752 700 752 Q712 752 714 778 Z" />
          {/* 右邊抱膝的人 */}
          <circle cx="822" cy="744" r="10" />
          <path d="M810 778 Q808 755 822 754 Q834 755 836 770 L842 778 Z" />
          {/* 站著看星星的人 */}
          <circle cx="1080" cy="712" r="9" />
          <path d="M1072 722 L1088 722 L1086 760 L1083 782 L1077 782 L1074 760 Z" />
          <path d="M1086 726 L1098 704" stroke="#060b1d" strokeWidth="4" strokeLinecap="round" />
        </g>

        {/* 流星 */}
        <line x1="300" y1="120" x2="420" y2="170" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" className="splash-meteor" />
      </svg>

      {/* Logo 與 Slogan */}
      <div className="relative z-10 h-full flex flex-col items-center pt-[16vh] px-6 text-center">
        <div className="splash-pop">
          <MountainLogo className="w-20 h-20 md:w-24 md:h-24 drop-shadow-[0_10px_30px_rgba(56,189,248,0.35)]" />
        </div>
        <h1 className="splash-fade splash-fade-1 mt-5 text-3xl md:text-5xl font-bold text-white tracking-wide">
          TaiwanCamp
        </h1>
        <p className="splash-fade splash-fade-2 mt-4 text-lg md:text-2xl text-sky-100 font-medium [text-wrap:balance]">
          AI 讀懂千則評論，替你評出最好的營地
        </p>
        <p className="splash-fade splash-fade-3 mt-3 text-xs md:text-sm text-sky-300/80 tracking-[0.2em]">
          衛浴 · 管理 · 路況　AI 三維評分
        </p>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          skip();
        }}
        className="absolute z-10 right-4 md:right-6 text-xs text-sky-100/70 hover:text-white border border-white/20 hover:border-white/50 rounded-full px-3 py-1 transition cursor-pointer"
        style={{ bottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))' }}
      >
        略過
      </button>
    </div>
  );
};

export default SplashScreen;
