import React from 'react';
import { Language } from '../types';
import { Sparkles, Globe2, Share2 } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onShareClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange,
  onShareClick
}) => {
  return (
    <header
      id="top-header"
      className="sticky top-0 z-40 w-full backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 transition-colors duration-300"
    >
      <div className="max-w-[580px] mx-auto px-4 h-16 flex items-center justify-between">
        {/* Hospital Branding Badge */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 p-[1.5px] shadow-sm shadow-cyan-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[6.5px] flex items-center justify-center">
              {/* Medical Cross + AI Node combined mark */}
              <div className="relative flex items-center justify-center">
                <div className="w-4 h-1.5 bg-cyan-400 rounded-sm" />
                <div className="w-1.5 h-4 bg-cyan-400 rounded-sm absolute" />
                <div className="w-1.5 h-1.5 bg-white rounded-full absolute ring-2 ring-indigo-500 animate-pulse" />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-bold tracking-tight text-white leading-tight">
              {lang === 'ko' ? '은평성모병원' : 'Eunpyeong St. Mary\'s'}
            </span>
            <span className="text-[10px] font-medium text-cyan-300/80 tracking-wider uppercase">
              AX Summit 2026
            </span>
          </div>
        </div>

        {/* Action Controls: Share + Language Switcher */}
        <div className="flex items-center gap-2">
          {/* Quick Share Button */}
          <button
            id="header-share-btn"
            onClick={onShareClick}
            aria-label="Share Invitation"
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800 transition-all duration-200 active:scale-95"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Language Switcher Pill */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-full p-0.5 shadow-inner">
            <button
              id="lang-btn-ko"
              onClick={() => onLanguageChange('ko')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                lang === 'ko'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-500/30 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              KR
            </button>
            <span className="text-slate-700 text-xs select-none">|</span>
            <button
              id="lang-btn-en"
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                lang === 'en'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-500/30 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
