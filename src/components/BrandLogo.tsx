import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  // Sizing definitions
  const markSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-16 h-16' : 'w-10 h-10';
  const titleSize = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-2xl' : 'text-base';
  const taglineSize = size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-[11px]' : 'text-[9px]';

  return (
    <div className={`flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* Geometric FB Monogram Emblem */}
      <div className={`relative ${markSize} flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 via-black to-slate-950 border border-white/10 group-hover:border-violet-500/40 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.15)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]`}>
        {/* Subtle ambient glow behind emblem */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-violet-600/20 via-cyan-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity blur-[4px]" />
        
        {/* Crisp Geometric FB SVG recreated directly matching the official identity */}
        <svg
          viewBox="0 0 100 100"
          className="relative z-10 w-[78%] h-[78%] fill-current text-white transform -skew-x-[6deg] transition-transform duration-300 group-hover:scale-105"
        >
          {/* F left angled vertical pillar */}
          <path
            d="M 22 84 L 38 20 L 52 20 L 36 84 Z"
            fill="currentColor"
          />
          {/* F top bar */}
          <path
            d="M 38 20 L 76 20 L 71 33 L 34 33 Z"
            fill="currentColor"
          />
          {/* B upper loop & horizontal connector */}
          <path
            d="M 46 44 L 70 44 C 77 44 82 48 80 54 C 78 59 73 62 65 62 L 42 62 Z"
            fill="currentColor"
          />
          {/* B lower loop */}
          <path
            d="M 42 64 L 66 64 C 76 64 82 69 79 77 C 76 83 69 85 58 85 L 35 85 Z"
            fill="currentColor"
          />
          {/* Inner negative cutouts for the B letters */}
          <path
            d="M 52 50 L 66 50 C 69 50 71 52 70 55 C 69 57 66 57 63 57 L 50 57 Z"
            fill="#030712"
          />
          <path
            d="M 48 70 L 62 70 C 66 70 69 72 68 76 C 67 79 64 79 60 79 L 46 79 Z"
            fill="#030712"
          />
        </svg>
      </div>

      {/* Typography stack: FOUNDER BATCH + THE FOUNDERS COLLECTIVE */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5">
          <span className={`font-display font-extrabold tracking-[0.22em] text-white uppercase ${titleSize} transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-violet-200 group-hover:to-cyan-200`}>
            FOUNDER BATCH
          </span>
        </div>

        {showTagline && (
          <div className="flex items-center gap-2 mt-0.5">
            <span className="h-[1px] w-3 sm:w-4 bg-gradient-to-r from-transparent to-slate-500" />
            <span className={`font-sans tracking-[0.28em] font-semibold text-slate-400 uppercase ${taglineSize} whitespace-nowrap`}>
              THE FOUNDERS COLLECTIVE
            </span>
            <span className="h-[1px] w-3 sm:w-4 bg-gradient-to-l from-transparent to-slate-500" />
          </div>
        )}
      </div>
    </div>
  );
};
