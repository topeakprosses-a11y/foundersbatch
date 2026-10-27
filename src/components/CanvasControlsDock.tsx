import React, { useState } from 'react';
import { CanvasSettings } from './CosmicCanvas3D';
import { Sliders, Eye, EyeOff, Sparkles, Orbit, Gauge } from 'lucide-react';

interface CanvasControlsDockProps {
  settings: CanvasSettings;
  onChange: (settings: CanvasSettings) => void;
}

export const CanvasControlsDock: React.FC<CanvasControlsDockProps> = ({
  settings,
  onChange,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className="fixed z-30 transition-transform duration-500 ease-out flex flex-col items-center"
      style={{
        bottom: '20px',
        left: '50%',
        transform: `translateX(-50%) translateY(${isCollapsed ? 'calc(100% - 32px)' : '0'})`,
        maxWidth: 'min(940px, 94vw)',
      }}
    >
      {/* Collapse / Expand Tab Toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="px-4 py-1 rounded-t-xl bg-slate-900/90 backdrop-blur-md border-t border-x border-white/10 text-[11px] font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 shadow-lg shadow-black/40 hover:bg-slate-800 transition-colors cursor-pointer"
        aria-label="Toggle 3D Scene Controls"
      >
        {isCollapsed ? (
          <>
            <Eye className="w-3.5 h-3.5 text-cyan-400" />
            <span>▴ 3D Canvas Controls</span>
          </>
        ) : (
          <>
            <EyeOff className="w-3.5 h-3.5 text-violet-400" />
            <span>▾ Cinema Mode (Hide Dock)</span>
          </>
        )}
      </button>

      {/* Main Glassmorphic Dock */}
      <div className="w-full px-4 sm:px-6 py-3 rounded-2xl bg-[#090d16]/85 backdrop-blur-xl border border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.8)] flex flex-wrap items-center justify-between gap-3 sm:gap-6 text-xs text-slate-300">
        {/* Left: Mode Title */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
          <span className="font-semibold text-white tracking-wide uppercase text-[10px] sm:text-xs">
            3D Particle Mesh
          </span>
        </div>

        {/* Center: Accent Themes */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-[11px] text-slate-400 hidden sm:inline">Theme:</span>
          <button
            onClick={() => onChange({ ...settings, colorTheme: 'cyber' })}
            className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-all ${
              settings.colorTheme === 'cyber'
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
            }`}
          >
            Cyber Cyan
          </button>
          <button
            onClick={() => onChange({ ...settings, colorTheme: 'violet' })}
            className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-all ${
              settings.colorTheme === 'violet'
                ? 'bg-violet-500/20 border-violet-400 text-violet-200 shadow-[0_0_10px_rgba(139,92,246,0.3)]'
                : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
            }`}
          >
            Electric Violet
          </button>
          <button
            onClick={() => onChange({ ...settings, colorTheme: 'gold' })}
            className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-all ${
              settings.colorTheme === 'gold'
                ? 'bg-amber-500/20 border-amber-400 text-amber-200 shadow-[0_0_10px_rgba(245,158,11,0.3)]'
                : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
            }`}
          >
            Neon Gold
          </button>
        </div>

        {/* Right: Rotation Speed Control */}
        <div className="flex items-center gap-2">
          <Gauge className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[11px] text-slate-400 hidden sm:inline">Rotation:</span>
          <button
            onClick={() =>
              onChange({
                ...settings,
                speed: settings.speed === 0.5 ? 1.0 : settings.speed === 1.0 ? 1.8 : 0.5,
              })
            }
            className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-slate-200"
          >
            {settings.speed}x
          </button>
        </div>
      </div>
    </div>
  );
};
