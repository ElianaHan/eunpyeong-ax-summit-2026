import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';
import { Phone, MapPin, Building, Globe, ShieldCheck } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const footer = CONTENT[lang].footer;

  return (
    <footer
      id="invitation-footer"
      className="relative pt-10 pb-28 px-5 bg-slate-950 border-t border-slate-900 text-slate-400 text-xs"
    >
      <div className="max-w-[540px] mx-auto space-y-6 text-center">
        {/* Hospital Logo & Title */}
        <div className="flex flex-col items-center justify-center space-y-1.5">
          <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
            <Building className="w-4 h-4" />
          </div>
          <p className="text-sm font-bold text-slate-200">
            {footer.hospital}
          </p>
          <p className="text-[11px] text-cyan-400 font-medium">
            {footer.dept}
          </p>
        </div>

        {/* Info list */}
        <div className="space-y-1.5 text-slate-400 text-[11px]">
          <p className="flex items-center justify-center gap-1">
            <MapPin className="w-3 h-3 text-slate-500" />
            <span>{footer.address}</span>
          </p>
          <p className="flex items-center justify-center gap-1">
            <Phone className="w-3 h-3 text-slate-500" />
            <span>{footer.inquiry}</span>
          </p>
        </div>

        {/* Verified Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>가톨릭대학교 은평성모병원 공식 행사 안내 시스템</span>
        </div>

        {/* Copyright */}
        <p className="text-[10px] text-slate-600 font-mono pt-2">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
};
