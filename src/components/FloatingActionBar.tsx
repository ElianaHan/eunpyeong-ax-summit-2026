import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';
import { Calendar, Navigation, Share2, Copy, Check } from 'lucide-react';

interface FloatingActionBarProps {
  lang: Language;
  onCalendarClick: () => void;
  onDirectionsClick: () => void;
  onShareClick: () => void;
  onCopyAddress: () => void;
  copiedAddress: boolean;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({
  lang,
  onCalendarClick,
  onDirectionsClick,
  onShareClick,
  onCopyAddress,
  copiedAddress
}) => {
  const cta = CONTENT[lang].cta;

  return (
    <div
      id="floating-cta-bar"
      className="fixed bottom-0 inset-x-0 z-40 p-3 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent pb-[calc(0.75rem+env(safe-area-inset-bottom))]"
    >
      <div className="max-w-[540px] mx-auto flex items-center gap-2 p-2 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
        {/* Primary CTA 1: Add to Calendar */}
        <button
          id="dock-btn-calendar"
          onClick={onCalendarClick}
          className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
        >
          <Calendar className="w-4 h-4" />
          <span className="truncate">{cta.addToCalendar}</span>
        </button>

        {/* Primary CTA 2: Directions */}
        <button
          id="dock-btn-directions"
          onClick={onDirectionsClick}
          className="flex-1 py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-100 font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-700 active:scale-95 transition-all"
        >
          <Navigation className="w-4 h-4 text-cyan-400" />
          <span className="truncate">{cta.directions}</span>
        </button>

        {/* Secondary CTA: Share */}
        <button
          id="dock-btn-share"
          onClick={onShareClick}
          title={cta.share}
          aria-label={cta.share}
          className="w-11 h-11 rounded-xl bg-slate-800/80 hover:bg-slate-750 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700/80 active:scale-95 transition-all shrink-0"
        >
          <Share2 className="w-4 h-4" />
        </button>

        {/* Secondary CTA: Copy Address */}
        <button
          id="dock-btn-copy-address"
          onClick={onCopyAddress}
          title={cta.copyAddress}
          aria-label={cta.copyAddress}
          className={`w-11 h-11 rounded-xl flex items-center justify-center border active:scale-95 transition-all shrink-0 ${
            copiedAddress
              ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300'
              : 'bg-slate-800/80 hover:bg-slate-750 text-slate-300 hover:text-white border-slate-700/80'
          }`}
        >
          {copiedAddress ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
