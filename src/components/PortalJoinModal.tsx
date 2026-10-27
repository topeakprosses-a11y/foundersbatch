import React, { useState } from 'react';
import { X, Copy, ExternalLink, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export type PortalType = 'whatsapp' | 'discord' | 'telegram';

export interface PortalConfig {
  type: PortalType;
  title: string;
  badge: string;
  actionText: string;
  link: string;
  accentColor: string;
  glowColor: string;
  gradientClass: string;
  tagline: string;
}

export const PORTAL_CONFIGS: Record<PortalType, PortalConfig> = {
  whatsapp: {
    type: 'whatsapp',
    title: 'WhatsApp Founder Lounge',
    badge: 'Real-Time Chat',
    actionText: 'Launch WhatsApp',
    link: 'https://chat.whatsapp.com/founderbatch-collective-alpha',
    accentColor: '#25D366',
    glowColor: 'rgba(37, 211, 102, 0.4)',
    gradientClass: 'from-emerald-600 via-teal-600 to-green-600',
    tagline: 'For instant founder chatter, daily leads & fast answers.',
  },
  discord: {
    type: 'discord',
    title: 'Discord Community Server',
    badge: 'Deep Tech & Voice',
    actionText: 'Enter Discord Server',
    link: 'https://discord.gg/founderbatch',
    accentColor: '#5865F2',
    glowColor: 'rgba(88, 101, 242, 0.4)',
    gradientClass: 'from-indigo-600 via-blue-600 to-violet-600',
    tagline: 'For deep technical discussions, voice lounges & project feedback.',
  },
  telegram: {
    type: 'telegram',
    title: 'Telegram Dispatch Channel',
    badge: 'Deals & Digests',
    actionText: 'Subscribe on Telegram',
    link: 'https://t.me/founderbatch_dispatch',
    accentColor: '#229ED9',
    glowColor: 'rgba(34, 158, 217, 0.4)',
    gradientClass: 'from-cyan-600 via-sky-600 to-blue-600',
    tagline: 'For high-priority funding updates, announcements & elite digests.',
  },
};

interface PortalJoinModalProps {
  portalType: PortalType | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PortalJoinModal: React.FC<PortalJoinModalProps> = ({
  portalType,
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [hasAgreed, setHasAgreed] = useState(true);

  if (!isOpen || !portalType) return null;

  const config = PORTAL_CONFIGS[portalType];

  const handleCopy = () => {
    navigator.clipboard.writeText(config.link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg rounded-3xl bg-[#080d1a] border border-white/10 p-6 sm:p-8 shadow-[0_0_60px_rgba(0,0,0,0.8)] text-left z-10 overflow-hidden">
        {/* Dynamic ambient header light glow matching platform accent */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-32 blur-3xl opacity-40 pointer-events-none"
          style={{ backgroundColor: config.accentColor }}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-5 relative z-10">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg text-white"
            style={{ backgroundColor: `${config.accentColor}25`, border: `1px solid ${config.accentColor}50` }}
          >
            {portalType === 'whatsapp' && (
              <svg className="w-6 h-6 fill-emerald-400" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z" />
              </svg>
            )}
            {portalType === 'discord' && (
              <svg className="w-6 h-6 fill-indigo-400" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028z" />
              </svg>
            )}
            {portalType === 'telegram' && (
              <svg className="w-6 h-6 fill-sky-400" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display font-bold text-lg text-white">
                {config.title}
              </h3>
              <span
                className="px-2.5 py-0.5 rounded-full text-[10px] font-bold border tracking-wider uppercase"
                style={{
                  color: config.accentColor,
                  borderColor: `${config.accentColor}40`,
                  backgroundColor: `${config.accentColor}15`,
                }}
              >
                {config.badge}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">{config.tagline}</p>
          </div>
        </div>

        {/* Community Guidelines Box */}
        <div className="my-5 p-4 rounded-2xl bg-slate-950/80 border border-white/5 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-200">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Community Guidelines & Code of Conduct</span>
          </div>

          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span><strong>Zero Unsolicited Sales DMs:</strong> Any automated outreach or cold sales pitching results in an instant permanent ban.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span><strong>Give Before You Ask:</strong> Share honest feedback on pitch decks, review code, or introduce vetted contacts.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span><strong>Confidentiality First:</strong> Unreleased venture pitch decks, financial metrics, and hiring memos remain strictly private.</span>
            </div>
          </div>

          <label className="flex items-center gap-2 pt-2 border-t border-white/5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={hasAgreed}
              onChange={(e) => setHasAgreed(e.target.checked)}
              className="rounded border-white/20 text-violet-500 focus:ring-0 bg-slate-900"
            />
            <span className="text-[11px] text-slate-400">
              I agree to abide by the Founder Batch guidelines and maintain high signal standards.
            </span>
          </label>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <a
            href={config.link}
            target="_blank"
            rel="noreferrer"
            className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r ${config.gradientClass} shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.01] active:scale-[0.99]`}
            style={{
              boxShadow: `0 0 25px ${config.glowColor}`,
            }}
          >
            <span>{config.actionText}</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <div className="flex items-center gap-2">
            <div className="flex-1 px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-[11px] text-slate-400 font-mono truncate">
              {config.link}
            </div>
            <button
              onClick={handleCopy}
              className="px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? 'Copied' : 'Copy Link'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
