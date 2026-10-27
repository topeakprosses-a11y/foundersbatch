import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { MessageCircle, Shield, ArrowUp, X, Lock, CheckCircle2, FileText } from 'lucide-react';

interface FooterProps {
  onJoinClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onJoinClick }) => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 border-t border-white/10 bg-[#02050c]/95 backdrop-blur-2xl pt-16 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <BrandLogo size="md" showTagline={true} />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              The elite, 100% free collective connecting startup founders with high-tier talent, investor access, and instant peer support. Built by founders, for founders.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <Shield className="w-4 h-4" />
                Verified Community
              </span>
              <span>•</span>
              <span className="text-slate-300">Zero Membership Fees</span>
              <span>•</span>
              <span className="text-slate-300">0% Deal Cuts</span>
            </div>

            {/* Social Links Group (Instagram, LinkedIn, X/Twitter) */}
            <div className="flex items-center gap-3 mt-3">
              {/* Instagram */}
              <a
                href="https://instagram.com/founderbatch"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Founder Batch on Instagram"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-500/50 flex items-center justify-center text-slate-300 hover:text-pink-400 transition-all hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/founderbatch"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Founder Batch on LinkedIn"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 flex items-center justify-center text-slate-300 hover:text-blue-400 transition-all hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/founderbatch"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Founder Batch on X"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all hover:scale-105"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Ecosystem Portals */}
          <div className="flex flex-col gap-3 text-xs">
            <span className="font-display font-bold text-white uppercase tracking-wider text-xs">
              Community Portals
            </span>
            <a href="#portals" className="text-slate-400 hover:text-emerald-300 transition-colors">
              WhatsApp Lounge
            </a>
            <a href="#portals" className="text-slate-400 hover:text-indigo-300 transition-colors">
              Discord Server
            </a>
            <a href="#portals" className="text-slate-400 hover:text-cyan-300 transition-colors">
              Telegram Dispatch
            </a>
            <a href="#pillars" className="text-slate-400 hover:text-amber-300 transition-colors">
              Instant Peer Network
            </a>
          </div>

          {/* Column 3: Resources & Guidelines */}
          <div className="flex flex-col gap-3 text-xs">
            <span className="font-display font-bold text-white uppercase tracking-wider text-xs">
              Governance & Policies
            </span>
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="text-left text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="text-left text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Code of Conduct
            </button>
            <a href="#faq" className="text-slate-400 hover:text-white transition-colors">
              Frequently Asked Questions
            </a>
            <button
              onClick={onJoinClick}
              className="text-left text-violet-400 hover:text-violet-300 font-semibold transition-colors cursor-pointer"
            >
              Join WhatsApp Lounge →
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} FOUNDER BATCH — The Founders Collective. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-slate-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setShowPrivacyModal(false)}
          />
          <div className="relative w-full max-w-lg rounded-3xl bg-[#090e1b] border border-white/10 p-6 sm:p-8 shadow-2xl text-left z-10 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  Founder Batch Privacy Policy & Terms
                </h3>
                <p className="text-xs text-slate-400">Last updated: October 2026</p>
              </div>
            </div>

            <div className="space-y-4 text-xs text-slate-300 leading-relaxed pt-3 border-t border-white/10">
              <p>
                <strong>1. Zero Data Monetization:</strong> Founder Batch does not sell, rent, or trade member information to third-party advertisers, recruiters, or data brokers.
              </p>
              <p>
                <strong>2. Pitch Deck & IP Confidentiality:</strong> Materials shared in closed-door investor or roast channels remain the proprietary intellectual property of the founder.
              </p>
              <p>
                <strong>3. Anti-Spam Zero Tolerance:</strong> Any member caught scraping contacts or sending unsolicited promotional DMs is permanently blacklisted.
              </p>
              <p>
                <strong>4. Contractual Independence:</strong> Freelancers and founders contract directly with zero commission cuts taken by the collective.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Close Privacy Policy
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
