/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { CONTENT } from './data/content';
import { NetworkCanvas } from './components/NetworkCanvas';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { InvitationSection } from './components/InvitationSection';
import { EventDetailsSection } from './components/EventDetailsSection';
import { DirectionsSection } from './components/DirectionsSection';
import { CalendarModal } from './components/CalendarModal';
import { ShareModal } from './components/ShareModal';
import { FloatingActionBar } from './components/FloatingActionBar';
import { Footer } from './components/Footer';
import { Check, Sparkles } from 'lucide-react';

export default function App() {
  // Initialize language from localStorage (default: 'ko')
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('eunpyeong_summit_lang');
      return saved === 'en' ? 'en' : 'ko';
    } catch {
      return 'ko';
    }
  });

  // Modal States
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);

  // Update localStorage and HTML lang attribute on change
  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('eunpyeong_summit_lang', newLang);
      document.documentElement.lang = newLang;
    } catch {
      // Ignore storage errors
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleCopyAddress = async () => {
    const fullAddress = `${CONTENT[lang].address} (${CONTENT[lang].addressDetail})`;
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(fullAddress);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = fullAddress;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedAddress(true);
      showToast(CONTENT[lang].directions.addressCopySuccess);
      setTimeout(() => setCopiedAddress(false), 2500);
    } catch (err) {
      console.error(err);
    }
  };

  const scrollToDirections = () => {
    const el = document.getElementById('directions-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex justify-center font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Outer ambient glow framing for large screens */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden hidden md:block">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      {/* Main Mobile App Container (520px - 580px width constraint) */}
      <div className="w-full max-w-[580px] min-h-screen bg-slate-950 relative shadow-2xl border-x border-slate-900 flex flex-col">
        {/* Subtle AI Neural Network Canvas for Hero */}
        <div className="relative">
          <NetworkCanvas className="h-[92vh]" />
          
          {/* Sticky Header with Language Switcher */}
          <Header
            lang={lang}
            onLanguageChange={handleLanguageChange}
            onShareClick={() => setIsShareModalOpen(true)}
          />

          {/* Hero Section */}
          <HeroSection
            lang={lang}
            onDirectionsClick={scrollToDirections}
            onCalendarClick={() => setIsCalendarModalOpen(true)}
          />
        </div>

        {/* Invitation Message Section */}
        <InvitationSection lang={lang} />

        {/* Event Details & Schedule Section */}
        <EventDetailsSection
          lang={lang}
          onCalendarClick={() => setIsCalendarModalOpen(true)}
          onDirectionsClick={scrollToDirections}
        />

        {/* Directions & Navigation Maps Section */}
        <DirectionsSection
          lang={lang}
          onCopyAddress={handleCopyAddress}
          copiedAddress={copiedAddress}
        />

        {/* Footer */}
        <Footer lang={lang} />

        {/* Floating Bottom Quick Action Bar */}
        <FloatingActionBar
          lang={lang}
          onCalendarClick={() => setIsCalendarModalOpen(true)}
          onDirectionsClick={scrollToDirections}
          onShareClick={() => setIsShareModalOpen(true)}
          onCopyAddress={handleCopyAddress}
          copiedAddress={copiedAddress}
        />

        {/* Modals */}
        <CalendarModal
          isOpen={isCalendarModalOpen}
          onClose={() => setIsCalendarModalOpen(false)}
          lang={lang}
        />

        <ShareModal
          isOpen={isShareModalOpen}
          onClose={() => setIsShareModalOpen(false)}
          lang={lang}
        />

        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-slate-800/95 border border-cyan-500/40 text-cyan-200 text-xs font-semibold shadow-2xl backdrop-blur-md flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <Check className="w-3.5 h-3.5 text-cyan-400" />
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
}
