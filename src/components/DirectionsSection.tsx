import React, { useState } from 'react';
import { Language, MapService } from '../types';
import { CONTENT, MAP_SERVICES } from '../data/content';
import {
  MapPin,
  Navigation,
  Train,
  Bus,
  Car,
  Copy,
  Check,
  ExternalLink,
  Compass,
  Building2
} from 'lucide-react';

interface DirectionsSectionProps {
  lang: Language;
  onCopyAddress: () => void;
  copiedAddress: boolean;
}

export const DirectionsSection: React.FC<DirectionsSectionProps> = ({
  lang,
  onCopyAddress,
  copiedAddress
}) => {
  const directions = CONTENT[lang].directions;
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleMapClick = (service: MapService) => {
    // Attempt mobile app scheme if on mobile, with fallback to web URL
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile && service.appUrl && service.id !== 'google') {
      const start = Date.now();
      window.location.href = service.appUrl;
      setTimeout(() => {
        if (Date.now() - start < 1500) {
          window.open(service.webUrl, '_blank', 'noopener,noreferrer');
        }
      }, 1000);
    } else {
      window.open(service.webUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="directions-section"
      className="relative py-14 px-5 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div className="max-w-[540px] mx-auto space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide">
            <Compass className="w-3.5 h-3.5" />
            <span>{directions.subtitle}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {directions.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            {directions.hospitalName} · {directions.hallName}
          </p>
        </div>

        {/* Visual Map / Venue Card */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
          {/* Stylized Futuristic Map Canvas / Graphic */}
          <div className="relative h-48 sm:h-56 bg-slate-900 overflow-hidden flex items-center justify-center p-4">
            {/* Map Grid Background Pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle, #38bdf8 1px, transparent 1px)`,
                backgroundSize: '24px 24px'
              }}
            />
            {/* Road network visual lines */}
            <svg className="absolute inset-0 w-full h-full stroke-slate-700/60" strokeWidth="2" fill="none">
              <path d="M-50 80 Q 150 70 300 120 T 650 90" />
              <path d="M120 -20 L 140 250" strokeDasharray="4 4" className="stroke-cyan-500/40" />
              <path d="M280 -20 L 290 250" />
              <path d="M-20 180 Q 200 190 600 160" />
            </svg>

            {/* Pulsing Hospital Pin Marker */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Radar pulse ripples */}
              <div className="absolute w-28 h-28 -top-7 rounded-full bg-cyan-500/10 animate-ping" />
              <div className="absolute w-16 h-16 -top-1 rounded-full bg-blue-500/20" />

              {/* Pin Badge */}
              <div className="relative z-20 px-3.5 py-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-xl shadow-cyan-500/30 flex items-center gap-2 border border-white/20">
                <Building2 className="w-4 h-4 text-white" />
                <div className="text-left">
                  <p className="text-xs font-bold leading-none">
                    {lang === 'ko' ? '은평성모병원 G층 대강당' : 'Eunpyeong St. Mary\'s'}
                  </p>
                  <p className="text-[9px] text-cyan-100 font-mono mt-0.5">
                    AX Summit 2026
                  </p>
                </div>
              </div>
              <div className="w-2 h-2 bg-white rotate-45 -mt-1 shadow-md" />
            </div>

            {/* Subway Marker Badge */}
            <div className="absolute bottom-3 left-4 px-2 py-1 rounded-lg bg-slate-900/90 border border-slate-700 text-[10px] font-medium text-orange-400 flex items-center gap-1">
              <span className="w-3.5 h-3.5 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-[8px]">
                3
              </span>
              <span>{lang === 'ko' ? '구파발역 3번출구 500m' : 'Gupabal Stn Exit 3'}</span>
            </div>
          </div>

          {/* Address & Copy Action Bar */}
          <div className="p-4 sm:p-5 bg-slate-900/90 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <span className="text-[11px] font-semibold uppercase text-cyan-400">
                {directions.addressTitle}
              </span>
              <p className="text-sm font-semibold text-white">
                {CONTENT[lang].address}
              </p>
              <p className="text-xs text-slate-400">
                {CONTENT[lang].addressDetail}
              </p>
            </div>

            <button
              id="copy-address-btn"
              onClick={onCopyAddress}
              className={`w-full sm:w-auto px-4 py-2.5 rounded-xl font-medium text-xs flex items-center justify-center gap-2 transition-all active:scale-95 shrink-0 ${
                copiedAddress
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
              }`}
            >
              {copiedAddress ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>{lang === 'ko' ? '복사 완료' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{lang === 'ko' ? '주소 복사' : 'Copy Address'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Map Service App Buttons (Item 8 requirement) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
              {lang === 'ko' ? '지도 앱으로 바로 안내받기' : 'Navigation & Map Services'}
            </span>
            <span className="text-[10px] text-slate-500">
              {lang === 'ko' ? '실제 길안내 연동' : 'Live Navigation'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {MAP_SERVICES.map((map) => (
              <button
                key={map.id}
                id={`map-btn-${map.id}`}
                onClick={() => handleMapClick(map)}
                className="group relative p-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 flex flex-col items-center justify-center gap-2 transition-all hover:bg-slate-850 active:scale-95 shadow-md"
              >
                {/* Brand Logo/Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shadow-md transition-transform group-hover:scale-105"
                  style={{ backgroundColor: map.color, color: map.textColor }}
                >
                  {map.id === 'naver' && 'N'}
                  {map.id === 'kakao' && 'K'}
                  {map.id === 'tmap' && 'T'}
                  {map.id === 'google' && 'G'}
                </div>

                <div className="text-center">
                  <span className="text-xs font-bold text-white block">
                    {map.name}
                  </span>
                  <span className="text-[10px] text-slate-400 flex items-center justify-center gap-0.5 mt-0.5">
                    {lang === 'ko' ? '길찾기' : 'Route'}
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </span>
                </div>
              </button>
            ))}
          </div>

          <p className="text-[11px] text-center text-slate-500">
            {directions.mapBtnGuide}
          </p>
        </div>

        {/* Public Transport & Parking Guide Tabs */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
          <div className="flex border-b border-slate-800 pb-3 gap-2">
            {directions.transports.map((t, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex-1 py-2 px-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  activeTab === idx
                    ? 'bg-blue-600/20 text-cyan-300 border border-cyan-500/30 font-bold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {idx === 0 && <Train className="w-3.5 h-3.5" />}
                {idx === 1 && <Bus className="w-3.5 h-3.5" />}
                {idx === 2 && <Car className="w-3.5 h-3.5" />}
                <span className="truncate">{t.title}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="space-y-2 pt-1">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              {directions.transports[activeTab].desc}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed pl-3.5 border-l border-slate-800">
              {directions.transports[activeTab].detail}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
