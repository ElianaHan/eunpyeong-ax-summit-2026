import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { CONTENT, CALENDAR_DATA } from '../data/content';
import { Calendar, MapPin, Sparkles, ChevronDown, Clock, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  lang: Language;
  onDirectionsClick: () => void;
  onCalendarClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onDirectionsClick,
  onCalendarClick
}) => {
  const content = CONTENT[lang];

  // Countdown calculation
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const target = CALENDAR_DATA.eventDate.getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPassed: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] flex flex-col justify-between pt-6 pb-10 px-5 text-white overflow-hidden"
    >
      {/* Background Decorative Tech Grid & Subtle Circuit Lines */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Top Tag & Hospital Crest text */}
      <div className="relative z-10 space-y-3 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 shadow-lg shadow-cyan-500/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[11px] font-semibold tracking-wider text-cyan-300 uppercase">
            {content.heroBadge}
          </span>
        </div>

        <p className="text-xs sm:text-sm font-medium text-slate-400 tracking-wide">
          {content.hospitalName}
        </p>
      </div>

      {/* Main Title & Summit Typography */}
      <div className="relative z-10 text-center my-auto py-6 space-y-5">
        {/* Main Event Title with AX Gradient Highlight */}
        <div className="space-y-1">
          <p className="text-base sm:text-lg font-bold tracking-tight text-slate-300 font-sans">
            {lang === 'ko' ? '가톨릭대학교 은평성모병원' : 'The Catholic University of Korea'}
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
            <span className="block font-sans">
              {lang === 'ko' ? '은평 ' : 'Eunpyeong '}
              <span className="inline-block relative">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                  AX
                </span>
              </span>
              {' '}Summit 2026
            </span>
          </h1>
          {lang === 'ko' ? (
            <p className="text-sm font-medium text-cyan-400/90 tracking-wider">
              Eunpyeong AX Summit 2026
            </p>
          ) : (
            <p className="text-sm font-medium text-cyan-400/90 tracking-wider">
              은평 AX Summit 2026
            </p>
          )}
        </div>

        {/* Tagline / Subtitle */}
        <div className="max-w-xs mx-auto">
          <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-3" />
          <p className="text-xs sm:text-sm font-normal text-slate-300 leading-relaxed">
            {content.tagline}
          </p>
          <p className="text-[11px] text-slate-400 font-light mt-0.5">
            {content.subTagline}
          </p>
        </div>

        {/* Key Event Details Card (Hero Central) */}
        <div className="max-w-md mx-auto mt-6 p-4 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 shadow-xl backdrop-blur-xl space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-cyan-400 shadow-inner">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase text-cyan-400 tracking-wider">
                  {lang === 'ko' ? '일시 · DATE & TIME' : 'DATE & TIME'}
                </p>
                <p className="text-sm font-bold text-white tracking-tight">
                  2026. 9. 29. TUE <span className="text-cyan-300 font-mono">14:00</span>
                </p>
              </div>
            </div>
            <button
              onClick={onCalendarClick}
              className="text-xs px-2.5 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-cyan-300 border border-cyan-500/30 font-medium transition-colors"
            >
              {lang === 'ko' ? '+ 캘린더' : '+ Calendar'}
            </button>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-inner">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase text-indigo-400 tracking-wider">
                  {lang === 'ko' ? '장소 · VENUE' : 'VENUE'}
                </p>
                <p className="text-sm font-bold text-white tracking-tight">
                  {lang === 'ko' ? '가톨릭대학교 은평성모병원 G층 대강당' : 'Auditorium, G Floor, Eunpyeong St. Mary\'s'}
                </p>
              </div>
            </div>
            <button
              onClick={onDirectionsClick}
              className="text-xs px-2.5 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 font-medium transition-colors"
            >
              {lang === 'ko' ? '지도보기' : 'Map'}
            </button>
          </div>
        </div>

        {/* Dynamic D-Day & Countdown Bar */}
        <div className="max-w-xs mx-auto pt-2">
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-mono text-slate-300">
              {timeLeft.isPassed ? (
                content.countdown.dDayPassed
              ) : (
                <>
                  <span className="text-cyan-400 font-bold">D-{timeLeft.days}</span>
                  <span className="mx-1.5 opacity-40">|</span>
                  <span>
                    {timeLeft.days}{content.countdown.days} {timeLeft.hours}{content.countdown.hours} {timeLeft.minutes}{content.countdown.minutes}
                  </span>
                </>
              )}
            </span>
          </div>
        </div>

        {/* Keywords Pill Cluster */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2 max-w-md mx-auto">
          {content.keywords.map((kw, idx) => (
            <span
              key={idx}
              className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-900/60 border border-slate-800 text-slate-300 font-medium"
            >
              #{kw}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-1 mt-2">
        <span className="text-[10px] font-medium text-slate-500 tracking-widest uppercase">
          {lang === 'ko' ? '초대장 확인하기' : 'Scroll to Explore'}
        </span>
        <div className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 animate-bounce">
          <ChevronDown className="w-3.5 h-3.5" />
        </div>
      </div>
    </section>
  );
};
