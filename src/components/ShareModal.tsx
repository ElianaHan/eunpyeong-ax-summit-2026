import React, { useState } from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';
import { Share2, Copy, Check, X, QrCode, MessageSquare } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  if (!isOpen) return null;

  const content = CONTENT[lang].shareModal;
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://eunpyeong-ax-summit.kr';

  const shareText = lang === 'ko'
    ? '「은평 AX Summit 2026」 모바일 공식 초대장\n2026.09.29(화) 14:00 · 가톨릭대학교 은평성모병원 G층 대강당'
    : 'Eunpyeong AX Summit 2026 Official Digital Invitation\nSept 29, 2026 (Tue) 14:00 · Auditorium, G Floor, Eunpyeong St. Mary\'s Hospital';

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(currentUrl);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = currentUrl;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '은평 AX Summit 2026 | Eunpyeong AX Summit 2026',
          text: shareText,
          url: currentUrl
        });
        onClose();
      } catch (err) {
        // User cancelled or share not supported
      }
    } else {
      handleCopyLink();
    }
  };

  // QR Code URL via standard clean QR service
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(currentUrl)}&bgcolor=0f172a&color=38bdf8`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-sm rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl space-y-5 text-white"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          id="share-modal-close"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title & Description */}
        <div className="space-y-1.5 pr-8">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
            <Share2 className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            {content.title}
          </h3>
          <p className="text-xs text-slate-400">
            {content.desc}
          </p>
        </div>

        {/* QR Code Preview Box */}
        <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 flex flex-col items-center justify-center space-y-2">
          <div className="w-36 h-36 bg-slate-900 rounded-xl p-2 border border-slate-800 flex items-center justify-center">
            <img
              src={qrCodeUrl}
              alt="Invitation QR Code"
              className="w-full h-full object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-[11px] text-slate-400 text-center">
            {lang === 'ko' ? '카메라로 QR코드를 스캔하여 바로 접속' : 'Scan QR code with camera to open invitation'}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          {/* Native Share button */}
          <button
            id="btn-native-share"
            onClick={handleNativeShare}
            className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{content.nativeShare}</span>
          </button>

          {/* Copy Link */}
          <button
            id="btn-copy-link-modal"
            onClick={handleCopyLink}
            className={`w-full py-3 px-4 rounded-2xl font-semibold text-xs flex items-center justify-center gap-2 border transition-all active:scale-[0.98] ${
              copied
                ? 'bg-emerald-600/30 border-emerald-500/50 text-emerald-300'
                : 'bg-slate-800 hover:bg-slate-750 text-slate-200 border-slate-700'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>{content.copied}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-cyan-400" />
                <span>{content.copyLink}</span>
              </>
            )}
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
