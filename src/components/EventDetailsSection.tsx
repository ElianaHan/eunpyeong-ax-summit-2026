import React, { useState } from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';
import {
  Calendar,
  MapPin,
  Users,
  Building,
  Clock,
  ChevronDown,
  ChevronUp,
  FileText,
  Sparkles,
  Layers
} from 'lucide-react';

interface EventDetailsSectionProps {
  lang: Language;
  onCalendarClick: () => void;
  onDirectionsClick: () => void;
}

export const EventDetailsSection: React.FC<EventDetailsSectionProps> = ({
  lang,
  onCalendarClick,
  onDirectionsClick
}) => {
  const { eventInfo, program } = CONTENT[lang];
  const [showFullProgram, setShowFullProgram] = useState(true);

  return (
    <section
      id="event-info-section"
      className="relative py-14 px-5 bg-slate-950 text-white"
    >
      <div className="max-w-[540px] mx-auto space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wide">
            <Calendar className="w-3.5 h-3.5" />
            <span>{eventInfo.subtitle}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {eventInfo.title}
          </h2>
        </div>

        {/* Info Cards Grid */}
        <div className="space-y-4">
          {/* Card 1: Date & Time */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-850 border border-slate-800 flex items-start gap-4 shadow-lg hover:border-slate-700 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase text-cyan-400 tracking-wider">
                  {eventInfo.dateTimeLabel}
                </span>
                <button
                  onClick={onCalendarClick}
                  className="text-[11px] text-cyan-300 hover:text-cyan-200 font-medium underline underline-offset-2"
                >
                  {lang === 'ko' ? '캘린더 등록' : 'Add to Calendar'}
                </button>
              </div>
              <p className="text-base font-bold text-white tracking-tight">
                {eventInfo.dateTimeValue}
              </p>
              <p className="text-xs text-slate-400">
                {lang === 'ko' ? '13:30부터 등록 및 입장이 가능합니다.' : 'Registration & admission starts from 13:30.'}
              </p>
            </div>
          </div>

          {/* Card 2: Venue */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-850 border border-slate-800 flex items-start gap-4 shadow-lg hover:border-slate-700 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase text-indigo-400 tracking-wider">
                  {eventInfo.venueLabel}
                </span>
                <button
                  onClick={onDirectionsClick}
                  className="text-[11px] text-indigo-300 hover:text-indigo-200 font-medium underline underline-offset-2"
                >
                  {lang === 'ko' ? '오시는 길 안내' : 'View Directions'}
                </button>
              </div>
              <p className="text-base font-bold text-white tracking-tight whitespace-pre-line">
                {eventInfo.venueValue}
              </p>
              <p className="text-xs text-slate-400">
                {eventInfo.venueSub}
              </p>
            </div>
          </div>

          {/* Card 3: Target Audience & Host */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-start gap-3">
              <Users className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-slate-400">
                  {eventInfo.targetLabel}
                </p>
                <p className="text-sm font-medium text-slate-200 mt-0.5">
                  {eventInfo.targetValue}
                </p>
              </div>
            </div>

            <div className="h-px bg-slate-800" />

            <div className="flex items-start gap-3">
              <Building className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-slate-400">
                  {eventInfo.hostLabel}
                </p>
                <p className="text-sm font-semibold text-white mt-0.5">
                  {eventInfo.hostValue}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summit Program Timetable */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">
                {program.title}
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              2026.09.29
            </span>
          </div>

          {/* Program Timeline Items */}
          <div className="space-y-3 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
            {program.items.map((item, idx) => (
              <div
                key={idx}
                className="relative flex items-start gap-3.5 pl-1 group"
              >
                {/* Timeline node */}
                <div className="w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shrink-0 z-10 group-hover:scale-110 group-hover:border-cyan-300 transition-transform">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>

                {/* Content Box */}
                <div className="flex-1 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      {item.time}
                    </span>
                    {item.tag && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-950/70 text-blue-300 border border-blue-800/50 font-medium">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-semibold text-slate-100 leading-snug">
                    {item.title}
                  </h4>
                  {(item.speaker || item.role) && (
                    <p className="text-xs text-slate-400 mt-1">
                      {item.speaker ? `${item.speaker} · ` : ''}{item.role}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/60 text-center">
            <p className="text-[11px] text-slate-400">
              {lang === 'ko'
                ? '※ 원활한 행사 진행을 위해 프로그램 세부 일정은 상황에 따라 일부 조정될 수 있습니다.'
                : '※ Program schedule is subject to minor adjustments for operational excellence.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
