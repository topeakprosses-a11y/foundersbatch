import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Sparkles, MessageCircle, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onJoinClick: () => void;
  onExploreClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick, onExploreClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
          isScrolled
            ? 'bg-[#030712]/80 backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] shadow-violet-500/5'
            : 'bg-[#030712]/40 backdrop-blur-sm border border-white/5'
        }`}
      >
        {/* Left: Recreated Official Brand Logo */}
        <BrandLogo size="md" showTagline={true} />

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <a
            href="#portals"
            className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
          >
            Portals
          </a>
          <a
            href="#pillars"
            className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
          >
            Pillars
          </a>
          <button
            onClick={onExploreClick}
            className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
          >
            Ecosystem
          </button>
          <a
            href="#faq"
            className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
          >
            FAQ
          </a>
        </nav>

        {/* Right Action Stack */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Live Online Counter Pill (Clean, static green indicator as per skill instructions) */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-xs font-medium text-slate-200 shadow-[0_0_12px_rgba(16,185,129,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="font-semibold text-emerald-300">500+</span>
            <span className="text-slate-400">Active Online</span>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={onJoinClick}
            className="relative group overflow-hidden px-4 py-2 rounded-xl font-medium text-xs sm:text-sm text-white transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 group-hover:from-violet-500 group-hover:via-indigo-500 group-hover:to-cyan-400 transition-colors" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4 text-emerald-300 fill-emerald-300/20" />
              <span>Join Lounge</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={onJoinClick}
            className="p-2 rounded-lg bg-violet-600/20 text-violet-300 border border-violet-500/30"
            aria-label="Join Lounge"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-2 p-4 rounded-2xl bg-[#030712]/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-3">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-semibold text-emerald-300">500+</span>
              <span className="text-slate-400">Active</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-violet-300">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Founders</span>
            </div>
          </div>

          <div className="flex flex-col gap-1 py-1">
            <a
              href="#portals"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-white/5"
            >
              Choose Community Portal
            </a>
            <a
              href="#pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-white/5"
            >
              Core 3D Pillars
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onExploreClick();
              }}
              className="text-left px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-white/5 cursor-pointer"
            >
              Ecosystem Overview
            </button>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-white/5"
            >
              Frequently Asked Questions
            </a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onJoinClick();
            }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Join WhatsApp Lounge</span>
          </button>
        </div>
      )}
    </header>
  );
};
