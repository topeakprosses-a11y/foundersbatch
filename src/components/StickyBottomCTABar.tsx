import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, X, Sparkles, ShieldCheck } from 'lucide-react';

interface StickyBottomCTABarProps {
  onJoinClick: () => void;
}

export const StickyBottomCTABar: React.FC<StickyBottomCTABarProps> = ({ onJoinClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 420px
      if (window.scrollY > 420 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 420) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div
      className="fixed z-35 transition-all duration-500 ease-out animate-in fade-in slide-in-from-bottom-5"
      style={{
        bottom: '84px', // Sits cleanly above the bottom dock
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: 'min(780px, 94vw)',
        width: '100%',
      }}
    >
      <div className="relative rounded-2xl p-3 sm:px-6 sm:py-3.5 bg-[#070b15]/90 backdrop-blur-xl border border-violet-500/30 shadow-[0_10px_40px_rgba(0,0,0,0.8)] shadow-violet-500/10 flex items-center justify-between gap-3 sm:gap-6 overflow-hidden">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-violet-600/15 via-cyan-500/15 to-transparent blur-md" />

        {/* Left: Community Status Message */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-300 flex-shrink-0">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                Where Ambition Meets Execution
              </span>
              <span className="hidden md:inline-flex px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                100% Free
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              500+ verified founders, top engineers, and angel investors online.
            </p>
          </div>
        </div>

        {/* Right: Fast Join CTA Button & Dismiss */}
        <div className="relative z-10 flex items-center gap-2 flex-shrink-0">
          <button
            onClick={onJoinClick}
            className="relative group px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-400 shadow-lg shadow-violet-500/30 transition-all duration-300 flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span className="whitespace-nowrap">Join Founder Batch Now</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => setIsDismissed(true)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
