import React, { useRef, useState, useCallback } from 'react';
import { ArrowRight, CheckCircle2, LucideIcon } from 'lucide-react';

export interface CardData {
  id: string;
  category: 'founders' | 'freelancers' | 'both';
  categoryBadge: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  ctaText: string;
  icon: LucideIcon;
  statsBadge: string;
  theme: {
    accentColor: string; // e.g. '#8B5CF6'
    glowBorder: string;  // e.g. 'rgba(139, 92, 246, 0.4)'
    badgeClass: string;
    buttonGradient: string;
    iconBg: string;
  };
}

interface Interactive3DCardProps {
  card: CardData;
  onAction: (category: 'founders' | 'freelancers' | 'both') => void;
}

export const Interactive3DCard: React.FC<Interactive3DCardProps> = ({ card, onAction }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Percentages (0 to 100)
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;
    setMousePos({ x: px, y: py });

    // Tilting calculation: range ~ -12deg to +12deg
    const rX = ((y / rect.height) - 0.5) * -20;
    const rY = ((x / rect.width) - 0.5) * 20;

    setRotateX(rX);
    setRotateY(rY);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setMousePos({ x: 50, y: 50 });
  };

  const IconComponent = card.icon;

  return (
    <div
      className="perspective-1000 w-full h-full select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: isHovered ? 'transform 0.12s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="relative h-full flex flex-col justify-between rounded-3xl p-7 sm:p-8 bg-[#070b14]/90 backdrop-blur-xl border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.6)] transform-style-3d overflow-hidden group cursor-pointer"
        onClick={() => onAction(card.category)}
      >
        {/* Dynamic Border Glow & Spotlight Sheen Following Mouse */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(420px circle at ${mousePos.x}% ${mousePos.y}%, ${card.theme.glowBorder}, transparent 70%)`,
          }}
        />

        {/* Ambient Top Corner Light Sheen */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"
          style={{ backgroundColor: card.theme.accentColor }}
        />

        {/* Subtle grid pattern background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* 3D Content Layer (Popped out on Z-axis) */}
        <div className="relative z-10 flex flex-col h-full justify-between transform-style-3d">
          <div>
            {/* Top Row: Category Badge & Stats Pill */}
            <div className="flex items-center justify-between gap-3 mb-6 translate-z-20">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border shadow-sm ${card.theme.badgeClass}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current shadow-[0_0_6px_currentColor]" />
                {card.categoryBadge}
              </span>

              <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300 font-semibold">
                {card.statsBadge}
              </span>
            </div>

            {/* Icon + Title Block */}
            <div className="flex items-start gap-4 mb-4 translate-z-30">
              <div
                className={`w-14 h-14 rounded-2xl ${card.theme.iconBg} border border-white/10 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <IconComponent className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-200">
                  {card.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">
                  {card.tagline}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal translate-z-10">
              {card.description}
            </p>

            {/* Feature Checklist */}
            <div className="space-y-3 mb-8 translate-z-20">
              {card.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ color: card.theme.accentColor }}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive CTA Button */}
          <div className="pt-4 border-t border-white/10 translate-z-30">
            <button
              type="button"
              className={`w-full py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-bold text-white ${card.theme.buttonGradient} shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_25px_${card.theme.accentColor}80] hover:scale-[1.02] active:scale-[0.98] cursor-pointer`}
            >
              <span>{card.ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
