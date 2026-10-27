import React, { useState } from 'react';
import { ArrowRight, Sparkles, MessageSquare, Shield, Users, Radio, Zap } from 'lucide-react';
import { PortalType, PortalJoinModal } from './PortalJoinModal';

interface CommunityPortalsProps {
  onOpenPortal?: (type: PortalType) => void;
}

export const CommunityPortals: React.FC<CommunityPortalsProps> = () => {
  const [selectedPortal, setSelectedPortal] = useState<PortalType | null>(null);

  const portals = [
    {
      type: 'whatsapp' as PortalType,
      title: 'WhatsApp Lounge',
      badge: 'High Frequency',
      badgeClass: 'text-emerald-300 bg-emerald-950/60 border-emerald-500/40',
      description: 'For instant founder chatter, daily leads & fast answers.',
      actionButton: 'Launch WhatsApp',
      activeMembers: '500+ Online Now',
      buttonBg: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/25',
      glowBorder: 'hover:border-emerald-500/50',
      accentGlow: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      channelHighlights: [
        '⚡ Instant responses to technical blockers',
        '💼 Direct client contracts & co-founder matching',
        '🎙️ Weekly founder voice note discussions',
      ],
      iconSvg: (
        <svg className="w-8 h-8 fill-emerald-400" viewBox="0 0 24 24">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z" />
        </svg>
      ),
    },
    {
      type: 'discord' as PortalType,
      title: 'Discord Server',
      badge: 'Deep Architecture',
      badgeClass: 'text-indigo-300 bg-indigo-950/60 border-indigo-500/40',
      description: 'For deep technical discussions, voice lounges & project feedback.',
      actionButton: 'Enter Discord',
      activeMembers: '1,200+ Members',
      buttonBg: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/25',
      glowBorder: 'hover:border-indigo-500/50',
      accentGlow: 'from-indigo-500/20 via-purple-500/10 to-transparent',
      channelHighlights: [
        '🛠️ Dedicated channels (#tech-stack, #code-roast)',
        '🎧 24/7 Virtual Coworking & Screen Share rooms',
        '📊 Stage events with venture-backed CTOs',
      ],
      iconSvg: (
        <svg className="w-8 h-8 fill-indigo-400" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028z" />
        </svg>
      ),
    },
    {
      type: 'telegram' as PortalType,
      title: 'Telegram Channel',
      badge: 'Funding & Intel',
      badgeClass: 'text-cyan-300 bg-cyan-950/60 border-cyan-500/40',
      description: 'For high-priority funding updates, announcements & elite digests.',
      actionButton: 'Subscribe Telegram',
      activeMembers: '3,800+ Subscribers',
      buttonBg: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/25',
      glowBorder: 'hover:border-cyan-500/50',
      accentGlow: 'from-cyan-500/20 via-sky-500/10 to-transparent',
      channelHighlights: [
        '🚀 Angel checks, pitch deadlines & scout briefs',
        '💎 Weekly teardown of breakthrough tech products',
        '📢 High-priority community announcements',
      ],
      iconSvg: (
        <svg className="w-8 h-8 fill-cyan-400" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="portals" className="relative py-24 px-4 sm:px-6 lg:px-8 z-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs font-bold text-violet-300 uppercase tracking-widest mb-4">
            <Radio className="w-3.5 h-3.5 text-cyan-400" />
            Seamless Ecosystem Access
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Choose Your Community Portal
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Select the platform that matches your workflow. All portals are synchronized, spam-free, and 100% free forever.
          </p>
        </div>

        {/* 3 Distinct Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {portals.map((portal) => (
            <div
              key={portal.type}
              className={`relative rounded-3xl p-7 sm:p-8 glass-panel border border-white/10 ${portal.glowBorder} transition-all duration-300 hover:shadow-2xl flex flex-col justify-between group overflow-hidden`}
            >
              {/* Corner ambient glow */}
              <div
                className={`absolute -top-24 -right-24 w-60 h-60 rounded-full bg-gradient-to-br ${portal.accentGlow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Header: Platform Icon + Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {portal.iconSvg}
                  </div>
                  <span
                    className={`text-xs px-3 py-1 rounded-full border font-bold uppercase tracking-wider ${portal.badgeClass}`}
                  >
                    {portal.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {portal.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {portal.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5 mb-8">
                  {portal.channelHighlights.map((hl, i) => (
                    <div key={i} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="text-slate-400">•</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button & Active Ticker */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                    <span>{portal.activeMembers}</span>
                  </span>
                  <span className="font-semibold text-slate-300">Invite Active</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedPortal(portal.type)}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white ${portal.buttonBg} shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer`}
                >
                  <span>{portal.actionButton}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sleek Modal Popup with Direct Link & Quick Guidelines */}
      <PortalJoinModal
        portalType={selectedPortal}
        isOpen={Boolean(selectedPortal)}
        onClose={() => setSelectedPortal(null)}
      />
    </section>
  );
};
