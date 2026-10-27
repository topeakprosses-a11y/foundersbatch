import React from 'react';
import {
  MessageCircle,
  Compass,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Users,
  Briefcase,
  Zap,
  CheckCircle2,
  Lock,
} from 'lucide-react';

interface HeroSectionProps {
  onJoinClick: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onJoinClick, onExploreClick }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center z-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Top Animated Badge */}
        <div className="relative group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-violet-500/30 shadow-[0_0_20px_rgba(139,92,246,0.2)] mb-8 transition-transform hover:scale-105 cursor-pointer"
             onClick={onJoinClick}
        >
          {/* Subtle animated border gradient */}
          <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-violet-500 via-cyan-400 to-amber-400 opacity-40 blur-[2px] group-hover:opacity-80 transition-opacity" />
          
          <div className="relative z-10 flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold">
              ⚡
            </span>
            <span className="bg-gradient-to-r from-violet-200 via-slate-100 to-cyan-200 bg-clip-text text-transparent">
              100% Free Invite-Only Community for Founders & Freelancers
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
          Where Ambition{' '}
          <span className="relative whitespace-nowrap">
            <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent glow-text-violet">
              Meets Execution.
            </span>
            {/* Subtle underline accent */}
            <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-cyan-400 to-amber-400 rounded-full opacity-60" />
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-normal">
          The elite collective connecting startup founders with high-tier talent, investor access, and instant peer support.
        </p>

        {/* CTA Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md sm:max-w-none mb-10">
          {/* Primary CTA: "Join WhatsApp Lounge" (Glowing gradient button with hover aura) */}
          <button
            onClick={onJoinClick}
            className="relative group w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold text-base text-white transition-all duration-300 active:scale-98 shadow-[0_0_35px_rgba(139,92,246,0.35)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] cursor-pointer"
          >
            {/* Hover aura glow expansion */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 opacity-70 group-hover:opacity-100 blur-lg transition duration-500 group-hover:duration-200" />
            
            {/* Button Surface */}
            <div className="relative flex items-center justify-center gap-3 px-2 py-0.5 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 group-hover:from-violet-500 group-hover:via-indigo-500 group-hover:to-cyan-400">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                <MessageCircle className="w-5 h-5 text-emerald-300 fill-emerald-300/25" />
              </div>
              <span className="tracking-wide">Join WhatsApp Lounge</span>
              <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Secondary CTA: "Explore Ecosystem" (Glassmorphism outline button) */}
          <button
            onClick={onExploreClick}
            className="relative group w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold text-base text-slate-200 glass-panel border border-white/15 hover:border-violet-400/50 hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] active:scale-98 cursor-pointer flex items-center justify-center gap-2.5"
          >
            <Compass className="w-5 h-5 text-violet-400 group-hover:rotate-45 transition-transform duration-300" />
            <span>Explore Ecosystem</span>
          </button>
        </div>

        {/* Live Counter Pill & Trust Badge */}
        <div className="flex flex-col sm:flex-row items-center gap-4 p-2 sm:pr-4 rounded-2xl sm:rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 shadow-lg">
          {/* Required Live Counter Pill */}
          <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-950/90 border border-emerald-500/30 text-sm font-medium text-slate-100 shadow-[0_0_15px_rgba(16,185,129,0.18)]">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
            <span className="font-bold text-emerald-300">500+</span>
            <span className="text-slate-300">Active Members Online</span>
          </div>

          {/* Vetted Members Avatar Stack */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-500 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-white shadow">
                YC
              </div>
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-500 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-white shadow">
                AI
              </div>
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-500 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-white shadow">
                $1M
              </div>
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-white shadow">
                VC
              </div>
            </div>
            <span className="hidden sm:inline font-medium text-slate-300">
              Vetted Founders, AI Builders & Angels
            </span>
          </div>
        </div>

        {/* Live Ecosystem Metric Ticker */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full mt-14 text-left">
          <div className="glass-panel p-4 rounded-xl border border-white/5 hover:border-violet-500/30 transition-all">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-1">
              <TrendingUp className="w-3.5 h-3.5 text-violet-400" />
              <span>Collective Raised</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold font-display text-white">
              $48,500,000+
            </div>
            <div className="text-[11px] text-violet-300/80 mt-0.5">Pre-seed to Series A</div>
          </div>

          <div className="glass-panel p-4 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-1">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              <span>Vetted Founders</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold font-display text-white">
              1,240+
            </div>
            <div className="text-[11px] text-cyan-300/80 mt-0.5">San Francisco, London, SG</div>
          </div>

          <div className="glass-panel p-4 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-1">
              <Briefcase className="w-3.5 h-3.5 text-amber-400" />
              <span>Angel & VC Deals</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold font-display text-white">
              89 Warm Intros
            </div>
            <div className="text-[11px] text-amber-300/80 mt-0.5">Direct partner reviews</div>
          </div>

          <div className="glass-panel p-4 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-all">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-1">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>Membership Cost</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold font-display text-emerald-400">
              $0 / 100% Free
            </div>
            <div className="text-[11px] text-emerald-300/80 mt-0.5">Zero equity, pure value</div>
          </div>
        </div>
      </div>
    </section>
  );
};
