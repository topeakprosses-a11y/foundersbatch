import React, { useState } from 'react';
import {
  X,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Copy,
  ExternalLink,
  Users,
  Sparkles,
  Zap,
  ArrowRight,
} from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: 'founder' | 'freelancer' | 'investor';
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  initialRole = 'founder',
}) => {
  const [role, setRole] = useState<'founder' | 'freelancer' | 'investor'>(initialRole);
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState<'details' | 'success'>('details');

  React.useEffect(() => {
    if (initialRole) {
      setRole(initialRole);
    }
  }, [initialRole]);

  if (!isOpen) return null;

  const inviteLink = 'https://chat.whatsapp.com/founderbatch-collective-alpha';

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleEnterLounge = () => {
    // In preview environment, avoid window.open/alert as per runtime constraints
    // We provide direct seamless simulation & link copying
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg rounded-3xl bg-[#090d16] border border-violet-500/30 p-6 sm:p-8 shadow-[0_0_60px_rgba(139,92,246,0.25)] text-left z-10">
        {/* Subtle top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent blur-sm" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'details' ? (
          <>
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-xl text-white">
                    Founder Batch Lounge
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold border border-emerald-500/30">
                    Invite Active
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Private invite-only WhatsApp channel for verified builders.
                </p>
              </div>
            </div>

            {/* Quick Role Selection */}
            <div className="my-5">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Select Your Primary Profile
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setRole('founder')}
                  className={`py-2.5 px-2 rounded-xl text-xs font-medium border text-center transition-all ${
                    role === 'founder'
                      ? 'bg-violet-600/30 border-violet-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.2)]'
                      : 'bg-slate-900 border-white/10 text-slate-400 hover:border-white/20'
                  }`}
                >
                  🚀 Startup Founder
                </button>
                <button
                  type="button"
                  onClick={() => setRole('freelancer')}
                  className={`py-2.5 px-2 rounded-xl text-xs font-medium border text-center transition-all ${
                    role === 'freelancer'
                      ? 'bg-cyan-600/30 border-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                      : 'bg-slate-900 border-white/10 text-slate-400 hover:border-white/20'
                  }`}
                >
                  ⚡ High-Tier Dev/UX
                </button>
                <button
                  type="button"
                  onClick={() => setRole('investor')}
                  className={`py-2.5 px-2 rounded-xl text-xs font-medium border text-center transition-all ${
                    role === 'investor'
                      ? 'bg-amber-600/30 border-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                      : 'bg-slate-900 border-white/10 text-slate-400 hover:border-white/20'
                  }`}
                >
                  💎 Angel / Scout
                </button>
              </div>
            </div>

            {/* What to expect inside */}
            <div className="space-y-2.5 p-3.5 rounded-2xl bg-slate-950/70 border border-white/5 mb-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Zero sales pitches or spam — 100% moderated peer execution</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Direct deck teardowns & introductions to active angels</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Access to $150K in cloud credits (AWS, OpenAI, Notion, Stripe)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleEnterLounge}
                className="w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enter Official WhatsApp Lounge</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                <div className="flex-1 px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-[11px] text-slate-400 font-mono truncate">
                  {inviteLink}
                </div>
                <button
                  onClick={handleCopy}
                  className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-medium transition-colors flex items-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 text-emerald-400">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h4 className="text-2xl font-display font-bold text-white mb-2">
              Welcome to Founder Batch!
            </h4>
            <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6">
              Your member invitation pass is ready. Tap below or copy the private link to join the active lounge group.
            </p>

            <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/20 mb-6 text-left">
              <div className="text-[11px] font-semibold uppercase text-emerald-400 tracking-wider mb-1">
                Lounge Etiquette Rule
              </div>
              <p className="text-xs text-slate-400">
                Please introduce yourself within 24 hours with your venture name, current MRR or stage, and one thing you need help with.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={inviteLink}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open in WhatsApp</span>
              </a>
              <button
                onClick={() => setStep('details')}
                className="text-xs text-slate-400 hover:text-slate-200 underline"
              >
                Back to invitation settings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
