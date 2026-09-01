import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';
import { Quote, Sparkles, Building2, CheckCircle2 } from 'lucide-react';

interface InvitationSectionProps {
  lang: Language;
}

export const InvitationSection: React.FC<InvitationSectionProps> = ({ lang }) => {
  const invitation = CONTENT[lang].invitation;

  return (
    <section
      id="invitation-section"
      className="relative py-14 px-5 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div className="max-w-[540px] mx-auto space-y-8">
        {/* Section Header with Tech Accent */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/20 text-cyan-400 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'ko' ? '초대의 말씀' : 'Official Invitation'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {invitation.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            {invitation.subtitle}
          </p>
        </div>

        {/* Invitation Letter Card */}
        <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-xl space-y-6">
          {/* Subtle Corner Ambient Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

          {/* Quote Icon Header */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <Quote className="w-8 h-8 text-cyan-400/40 rotate-180" />
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
              Eunpyeong AX Summit 2026
            </span>
          </div>

          {/* Paragraphs with high legibility */}
          <div className="space-y-5 text-[15px] sm:text-[16px] leading-[1.8] text-slate-200 font-normal">
            {invitation.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="whitespace-pre-line tracking-normal text-slate-200"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Signature & Hospital Seal */}
          <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
            <div className="space-y-0.5">
              <p className="text-sm sm:text-base font-bold text-white tracking-tight whitespace-pre-line">
                {invitation.signature}
              </p>
              <p className="text-xs text-cyan-400 font-medium">
                {lang === 'ko' ? '은평 AX Summit 2026' : 'Eunpyeong AX Summit 2026'}
              </p>
            </div>

            {/* Official Hospital Seal Emblem */}
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-cyan-500/30 flex items-center justify-center p-2 text-cyan-300 shadow-md shadow-cyan-500/10">
              <Building2 className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
