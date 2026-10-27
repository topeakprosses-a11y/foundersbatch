import React, { useState } from 'react';
import {
  TrendingUp,
  Users2,
  BrainCircuit,
  Gift,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
  DollarSign,
  Sparkles,
  Layers,
} from 'lucide-react';

interface EcosystemSectionProps {
  onJoinClick: () => void;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({ onJoinClick }) => {
  const [activeTab, setActiveTab] = useState<'investors' | 'talent' | 'masterminds' | 'perks'>('investors');

  const pillars = [
    {
      id: 'investors',
      title: 'Investor Access & Syndicate',
      badge: 'Capital Stage',
      badgeColor: 'border-amber-500/30 text-amber-300 bg-amber-500/10',
      icon: TrendingUp,
      accentColor: 'from-amber-500/20 via-amber-500/5 to-transparent',
      borderColor: 'hover:border-amber-500/40',
      description:
        'Skip cold inboxes. Present directly to active angel syndicates, venture partners, and scout networks who write $25k - $500k checks.',
      perks: [
        'Weekly Closed-Door Pitch Room & Deck Roasts',
        'Direct warm introductions to 40+ active tech angels',
        'Standardized SAFE note advisory & cap-table sanity checks',
      ],
      metric: '$48M+ Raised',
    },
    {
      id: 'talent',
      title: 'High-Tier Talent & Co-Founders',
      badge: 'Execution Core',
      badgeColor: 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10',
      icon: Users2,
      accentColor: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
      borderColor: 'hover:border-cyan-500/40',
      description:
        'Find your 10x technical co-founder, staff AI engineer, or battle-tested growth operator vetted through real code and product milestones.',
      perks: [
        'Curated roster of vetted senior engineers & designers',
        'Co-founder pairing sprints & trial work sprints',
        'Fractional CTO/CPO advisory from scaleup veterans',
      ],
      metric: '140+ Placements',
    },
    {
      id: 'masterminds',
      title: 'Elite Peer Masterminds',
      badge: 'Accountability',
      badgeColor: 'border-violet-500/30 text-violet-300 bg-violet-500/10',
      icon: BrainCircuit,
      accentColor: 'from-violet-500/20 via-violet-500/5 to-transparent',
      borderColor: 'hover:border-violet-500/40',
      description:
        'High-density peer feedback with zero fluff. Every week, founders run async teardowns of user retention, pricing experiments, and go-to-market channels.',
      perks: [
        'Async weekly sprint check-ins & blocker unsticking',
        'Unfiltered teardowns on real MRR, churn, and conversion',
        'Private founder-only voice stage sessions on Sundays',
      ],
      metric: 'Weekly Sprints',
    },
    {
      id: 'perks',
      title: '$150,000 Founders Perks Vault',
      badge: 'Cost Reduction',
      badgeColor: 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10',
      icon: Gift,
      accentColor: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
      borderColor: 'hover:border-emerald-500/40',
      description:
        'Extend your startup runway instantly. Exclusive founder batch partnerships with AWS, OpenAI, Stripe, Notion, and GitHub.',
      perks: [
        'Up to $100k AWS Activate Cloud Credits',
        '$2,500 OpenAI API build credits',
        'Free Stripe Atlas company incorporation waiver',
      ],
      metric: '$150k / Member',
    },
  ];

  const founders = [
    {
      name: 'Elena Rostova',
      role: 'Founder & CEO, AgenticFlow',
      badge: 'YC W25 Alum',
      quote:
        'Within 48 hours of joining Founder Batch, I met our founding AI engineer and refined our seed deck with feedback that directly closed our lead investor.',
      avatarBg: 'from-violet-600 to-indigo-600',
    },
    {
      name: 'Marcus Chen',
      role: 'Co-founder, CloudPulse',
      badge: '$85k MRR Bootstrapped',
      quote:
        'Most founder communities are noisy spam traps. Founder Batch is the only one where every single conversation is high-signal, technical, and actionable.',
      avatarBg: 'from-cyan-600 to-blue-600',
    },
    {
      name: 'Devin Thorne',
      role: 'Founder, Synthetix Labs',
      badge: 'Raised $2.2M Seed',
      quote:
        'The perks vault alone saved us over $40,000 in GPU cloud compute. The WhatsApp lounge is my daily first tab for quick peer checks.',
      avatarBg: 'from-amber-600 to-yellow-600',
    },
  ];

  return (
    <section id="ecosystem" className="relative py-24 px-4 sm:px-6 lg:px-8 z-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs font-semibold text-violet-300 uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5" />
            The Founders Collective Ecosystem
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Engineered for Velocity. Built for Founders.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A comprehensive infrastructure built to solve the four existential hurdles of every high-growth venture.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`relative group rounded-3xl p-6 sm:p-8 glass-panel border border-white/10 ${pillar.borderColor} transition-all duration-300 hover:shadow-2xl overflow-hidden`}
              >
                {/* Ambient glow accent inside card */}
                <div
                  className={`absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br ${pillar.accentColor} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Badge & Icon Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-slate-200 group-hover:text-cyan-300 transition-colors" />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-xs px-3 py-1 rounded-full border font-semibold ${pillar.badgeColor}`}>
                          {pillar.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400 font-bold">
                          {pillar.metric}
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                      {pillar.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2.5 mb-6">
                      {pillar.perks.map((perk, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <button
                    onClick={onJoinClick}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white group/btn transition-colors pt-2 border-t border-white/10"
                  >
                    <span>Request Access to this Pillar</span>
                    <ArrowRight className="w-3.5 h-3.5 text-violet-400 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Member Testimonials / Spotlight */}
        <div id="masterminds" className="rounded-3xl p-8 sm:p-12 glass-panel border border-white/10 relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 blur-[90px] pointer-events-none" />

          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
              Peer Endorsement
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white">
              Built by Founders, For Founders.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {founders.map((founder, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/5 flex flex-col justify-between hover:border-violet-500/25 transition-all"
              >
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{founder.quote}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-tr ${founder.avatarBg} flex items-center justify-center font-bold text-xs text-white shadow`}
                  >
                    {founder.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{founder.name}</div>
                    <div className="text-[11px] text-slate-400">{founder.role}</div>
                    <div className="text-[10px] text-emerald-400 font-semibold">{founder.badge}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div className="relative rounded-3xl p-8 sm:p-12 text-center bg-gradient-to-r from-violet-950/60 via-slate-950 to-cyan-950/60 border border-violet-500/30 overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.15)]">
          <div className="max-w-2xl mx-auto relative z-10">
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white mb-4">
              Ready to Accelerate Your Venture?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mb-8">
              No subscription fees. No token gates. Join 500+ active founders in our official lounge today.
            </p>
            <button
              onClick={onJoinClick}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-400 text-white font-semibold text-sm sm:text-base shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all hover:scale-105 active:scale-95"
            >
              Claim Your Free Invitation Pass
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
