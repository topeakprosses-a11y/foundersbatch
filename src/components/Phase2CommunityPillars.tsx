import React, { useEffect, useState, useRef } from 'react';
import { Interactive3DCard, CardData } from './Interactive3DCard';
import {
  Rocket,
  Briefcase,
  Users,
  TrendingUp,
  DollarSign,
  Shield,
  Zap,
  Flame,
  Radio,
  CheckCircle,
  Clock,
  Sparkles,
} from 'lucide-react';

interface Phase2CommunityPillarsProps {
  onJoinLounge: (preferredRole?: 'founder' | 'freelancer' | 'investor') => void;
}

export const Phase2CommunityPillars: React.FC<Phase2CommunityPillarsProps> = ({
  onJoinLounge,
}) => {
  // Animated numeric progression states
  const [fundingAmount, setFundingAmount] = useState(0);
  const [memberCount, setMemberCount] = useState(0);
  const [freePercentage, setFreePercentage] = useState(0);
  const metricsRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          // Animate numeric progression
          const duration = 2000;
          const startTime = performance.now();

          const animateNumbers = (now: number) => {
            const progress = Math.min(1, (now - startTime) / duration);
            // Ease-out cubic curve
            const ease = 1 - Math.pow(1 - progress, 3);

            setFundingAmount(Number((ease * 2.5).toFixed(1)));
            setMemberCount(Math.floor(ease * 500));
            setFreePercentage(Math.floor(ease * 100));

            if (progress < 1) {
              requestAnimationFrame(animateNumbers);
            } else {
              setFundingAmount(2.5);
              setMemberCount(500);
              setFreePercentage(100);
            }
          };

          requestAnimationFrame(animateNumbers);
        }
      },
      { threshold: 0.15 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Community Pillar Card Data
  const cards: CardData[] = [
    {
      id: 'founders-card',
      category: 'founders',
      categoryBadge: 'For Founders',
      title: 'Get Funded & Scale',
      tagline: 'Capital • Talent • Velocity',
      description:
        'Fast-track your venture with direct pitch reviews, warm introductions to verified seed investors, and on-demand hiring access to pre-screened builders.',
      features: [
        'Pitch feedback & deck teardowns from active angel investors',
        'Direct intro channels to scouts & syndicates ($25k–$500k checks)',
        'Instant hiring access to vetted top-1% tech freelancers',
        '0% placement or platform markup fees',
      ],
      ctaText: 'Enter Founder Track',
      icon: Rocket,
      statsBadge: '$2.5M+ Raised',
      theme: {
        accentColor: '#8B5CF6',
        glowBorder: 'rgba(139, 92, 246, 0.45)',
        badgeClass: 'bg-violet-950/70 border-violet-500/40 text-violet-300',
        buttonGradient:
          'bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 hover:from-violet-500 hover:to-indigo-500 shadow-violet-500/25',
        iconBg: 'bg-gradient-to-tr from-violet-600/30 to-indigo-600/20',
      },
    },
    {
      id: 'freelancers-card',
      category: 'freelancers',
      categoryBadge: 'For Freelancers',
      title: 'High-Ticket Client Leads',
      tagline: 'Zero Fees • Direct Contracts',
      description:
        'Skip crowded freelancer bidding sites. Get direct access to ambitious funded startup founders looking for full-stack engineers, UI/UX architects, and growth leads.',
      features: [
        'Direct access to active startup founders ready to hire',
        '0% platform commission — keep 100% of your earnings',
        'High-ticket retainer agreements & sprint milestone contracts',
        'Fast verification badge & showcase in founder hiring channel',
      ],
      ctaText: 'Join Freelancer Roster',
      icon: Briefcase,
      statsBadge: '0% Platform Fee',
      theme: {
        accentColor: '#06B6D4',
        glowBorder: 'rgba(6, 182, 212, 0.45)',
        badgeClass: 'bg-cyan-950/70 border-cyan-500/40 text-cyan-300',
        buttonGradient:
          'bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 hover:from-cyan-500 hover:to-teal-500 shadow-cyan-500/25',
        iconBg: 'bg-gradient-to-tr from-cyan-600/30 to-teal-600/20',
      },
    },
    {
      id: 'both-card',
      category: 'both',
      categoryBadge: 'For Both',
      title: 'Instant Peer Network',
      tagline: '24/7 Support • Closed-Door AMAs',
      description:
        'A distraction-free lounge where builders solve hard problems in real time. Get prompt stack recommendations, war-room bug fixes, and unfiltered founder feedback.',
      features: [
        'Real-time problem solving in active WhatsApp lounge',
        'Unbiased tech stack recommendations (AI, Cloud, React, Auth)',
        'Weekly founder AMAs with scale-up leaders & serial founders',
        'Exclusive access to private co-founder matching sprints',
      ],
      ctaText: 'Access Peer Lounge',
      icon: Users,
      statsBadge: 'Active 24/7',
      theme: {
        accentColor: '#F59E0B',
        glowBorder: 'rgba(245, 158, 11, 0.45)',
        badgeClass: 'bg-amber-950/70 border-amber-500/40 text-amber-300',
        buttonGradient:
          'bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 hover:from-amber-500 hover:to-orange-500 shadow-amber-500/25',
        iconBg: 'bg-gradient-to-tr from-amber-600/30 to-orange-600/20',
      },
    },
  ];

  // Live Activity Ticker Items
  const tickerItems = [
    {
      id: 1,
      icon: '🔥',
      text: 'Alex (Founder) just hired a UI/UX designer',
      time: '2m ago',
      tag: 'Hire Complete',
      tagColor: 'text-violet-300 bg-violet-950/60 border-violet-500/30',
    },
    {
      id: 2,
      icon: '🚀',
      text: 'Sarah (SaaS Founder) raised seed funding via group intros',
      time: '6m ago',
      tag: '$350k Seed',
      tagColor: 'text-amber-300 bg-amber-950/60 border-amber-500/30',
    },
    {
      id: 3,
      icon: '⚡',
      text: '12 new vetted freelancers joined today',
      time: '14m ago',
      tag: 'New Talent',
      tagColor: 'text-cyan-300 bg-cyan-950/60 border-cyan-500/30',
    },
    {
      id: 4,
      icon: '💼',
      text: 'David (FinTech AI) posted a $14,000 backend contract',
      time: '22m ago',
      tag: 'Direct Contract',
      tagColor: 'text-emerald-300 bg-emerald-950/60 border-emerald-500/30',
    },
    {
      id: 5,
      icon: '🤝',
      text: 'Marcus & Elena closed a technical co-founder partnership',
      time: '35m ago',
      tag: 'Co-Founders',
      tagColor: 'text-violet-300 bg-violet-950/60 border-violet-500/30',
    },
    {
      id: 6,
      icon: '💡',
      text: 'Priya received 16 angel annotations in #deck-roast lounge',
      time: '48m ago',
      tag: 'Pitch Feedback',
      tagColor: 'text-blue-300 bg-blue-950/60 border-blue-500/30',
    },
    {
      id: 7,
      icon: '💎',
      text: 'YC W25 Alum shared private SAFE note template with collective',
      time: '1h ago',
      tag: 'Founder Resource',
      tagColor: 'text-emerald-300 bg-emerald-950/60 border-emerald-500/30',
    },
  ];

  const handleCardClick = (category: 'founders' | 'freelancers' | 'both') => {
    if (category === 'founders') onJoinLounge('founder');
    else if (category === 'freelancers') onJoinLounge('freelancer');
    else onJoinLounge('founder');
  };

  return (
    <section id="pillars" className="relative py-20 px-4 sm:px-6 lg:px-8 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs font-bold text-violet-300 uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Core Community Pillars
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Tailored Acceleration for{' '}
            <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
              Founders & Freelancers
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Hover over the 3D cards below to explore how the collective drives deals, talent matching, and daily execution.
          </p>
        </div>

        {/* 1. INTERACTIVE 3D CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20 items-stretch">
          {cards.map((card) => (
            <Interactive3DCard
              key={card.id}
              card={card}
              onAction={handleCardClick}
            />
          ))}
        </div>

        {/* 2. METRICS & IMPACT SHOWCASE (Live Floating Glass Statistics Counter Bar) */}
        <div
          ref={metricsRef}
          className="relative rounded-3xl p-6 sm:p-10 glass-panel border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl mb-16 overflow-hidden"
        >
          {/* Subtle cosmic glow accents */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Top meta row */}
          <div className="flex flex-col sm:flex-row items-center justify-between pb-6 mb-8 border-b border-white/10 gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Verified Collective Impact
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Real-time platform metrics • Q1 2026</span>
            </div>
          </div>

          {/* The 3 Required Live Animated Metric Counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Metric 1: $2.5M+ in Deal Volume / Funding Facilitated */}
            <div className="pt-4 md:pt-0 md:px-6 flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-violet-950/60 border border-violet-500/30 flex items-center justify-center mb-3 text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <DollarSign className="w-6 h-6 text-violet-400" />
              </div>
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-2 tracking-tight">
                <span className="text-violet-400 font-sans">$</span>
                {fundingAmount.toFixed(1)}
                <span className="text-violet-400 font-sans">M+</span>
              </div>
              <p className="text-sm font-semibold text-slate-200">
                Deal Volume & Funding Facilitated
              </p>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">
                Direct SAFE notes, angel checks, and high-ticket client contracts.
              </p>
            </div>

            {/* Metric 2: 500+ Active Founders & Builders */}
            <div className="pt-6 md:pt-0 md:px-6 flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center mb-3 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-2 tracking-tight">
                {memberCount}
                <span className="text-cyan-400 font-sans">+</span>
              </div>
              <p className="text-sm font-semibold text-slate-200">
                Active Founders & Builders
              </p>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">
                Verified operators from SF, NYC, London, Berlin, and Singapore.
              </p>
            </div>

            {/* Metric 3: 100% Free to Join Forever */}
            <div className="pt-6 md:pt-0 md:px-6 flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-950/60 border border-amber-500/30 flex items-center justify-center mb-3 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                <Shield className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-2 tracking-tight">
                {freePercentage}
                <span className="text-amber-400 font-sans">%</span>
              </div>
              <p className="text-sm font-semibold text-slate-200">
                Free to Join Forever
              </p>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">
                Zero membership fees, zero equity clawbacks, zero platform commission.
              </p>
            </div>
          </div>
        </div>

        {/* 3. LIVE ACTIVITY TICKER (Horizontal glowing ticker) */}
        <div className="relative rounded-2xl bg-[#050811]/90 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden py-3.5 px-4 backdrop-blur-xl">
          {/* Subtle side fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#050811] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#050811] to-transparent z-10" />

          <div className="flex items-center gap-4">
            {/* Ticker Fixed Label */}
            <div className="flex items-center gap-2 pl-2 pr-4 border-r border-white/10 flex-shrink-0 z-20">
              <Radio className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-white hidden sm:inline">
                Live Feed
              </span>
            </div>

            {/* Moving Marquee Container */}
            <div className="overflow-hidden flex-1">
              <div className="animate-marquee flex items-center gap-6 cursor-pointer">
                {/* Duplicated list to create a seamless infinite scroll loop */}
                {[...tickerItems, ...tickerItems].map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    onClick={() => onJoinLounge()}
                    className="flex items-center gap-3 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-violet-500/30 transition-all flex-shrink-0 text-xs text-slate-200 group"
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span className="font-medium group-hover:text-white transition-colors">
                      {item.text}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
