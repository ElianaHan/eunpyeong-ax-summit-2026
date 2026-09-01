import React from 'react';
import { Language } from '../types';
import { CONTENT, CALENDAR_DATA } from '../data/content';
import { Calendar, X, Download, ExternalLink, Sparkles, Check } from 'lucide-react';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  if (!isOpen) return null;

  const content = CONTENT[lang].calendarModal;

  // Google Calendar URL generator
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(
      lang === 'ko'
        ? '은평 AX Summit 2026 - 가톨릭대학교 은평성모병원'
        : 'Eunpyeong AX Summit 2026 - Eunpyeong St. Mary\'s Hospital'
    );
    const details = encodeURIComponent(
      lang === 'ko'
        ? '가톨릭대학교 은평성모병원 주최 「은평 AX Summit 2026」 모바일 공식 초대장\n일시: 2026년 9월 29일(화) 14:00\n장소: 가톨릭대학교 은평성모병원 G층 대강당\n키워드: AI, AX, Smart Hospital, Healthcare Innovation'
        : 'Eunpyeong AX Summit 2026\nDate & Time: September 29, 2026 (Tue), 2:00 PM\nVenue: Auditorium, G Floor, Eunpyeong St. Mary\'s Hospital\nTheme: AI Transformation in Healthcare'
    );
    const location = encodeURIComponent(
      '가톨릭대학교 은평성모병원 G층 대강당 (1021 Tongil-ro, Eunpyeong-gu, Seoul)'
    );
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${CALENDAR_DATA.startDate}/${CALENDAR_DATA.endDate}&details=${details}&location=${location}`;
  };

  // Download .ics File for Apple Calendar, Outlook, Mobile Native
  const handleDownloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Eunpyeong AX Summit 2026//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `SUMMARY:${CALENDAR_DATA.title}`,
      `DESCRIPTION:${CALENDAR_DATA.description}`,
      `LOCATION:${CALENDAR_DATA.location}`,
      `DTSTART:${CALENDAR_DATA.startDate}`,
      `DTEND:${CALENDAR_DATA.endDate}`,
      'STATUS:CONFIRMED',
      'SEQUENCE:0',
      'BEGIN:VALARM',
      'TRIGGER:-PT24H',
      'ACTION:DISPLAY',
      'DESCRIPTION:Reminder: Eunpyeong AX Summit 2026 Tomorrow',
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Eunpyeong_AX_Summit_2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-sm rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl space-y-6 text-white"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          id="calendar-modal-close"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title & Description */}
        <div className="space-y-2 pr-8">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <Calendar className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            {content.title}
          </h3>
          <p className="text-xs text-slate-400">
            {content.desc}
          </p>
        </div>

        {/* Event Preview Info Box */}
        <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-1">
          <span className="text-[10px] font-semibold uppercase text-cyan-400 tracking-wider">
            {lang === 'ko' ? '일정 정보' : 'Event Info'}
          </span>
          <p className="text-xs font-semibold text-slate-200">
            {content.eventDetails}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          {/* Google Calendar */}
          <a
            id="btn-add-google-calendar"
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs flex items-center justify-between shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center font-bold text-xs">
                G
              </span>
              <span>{content.google}</span>
            </div>
            <ExternalLink className="w-4 h-4 opacity-75" />
          </a>

          {/* Apple / Outlook / Generic ICS */}
          <button
            id="btn-download-ics"
            onClick={() => {
              handleDownloadIcs();
              onClose();
            }}
            className="w-full py-3.5 px-4 rounded-2xl bg-slate-800 hover:bg-slate-750 text-slate-200 font-semibold text-xs flex items-center justify-between border border-slate-700 transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-2.5">
              <Download className="w-4 h-4 text-cyan-400" />
              <span>{content.apple}</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">.ics</span>
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-full text-center text-xs text-slate-400 hover:text-slate-200 py-1"
        >
          {content.close}
        </button>
      </div>
    </div>
  );
};
