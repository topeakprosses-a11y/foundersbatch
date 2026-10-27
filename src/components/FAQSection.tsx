import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  badge?: string;
}

interface FAQSectionProps {
  onJoinClick: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onJoinClick }) => {
  // Keep first question open by default for immediate engagement
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Is Founder Batch really 100% free?',
      answer:
        'Yes, free for all verified founders and freelancers. There are zero subscription tiers, zero token gates, zero platform cuts on contract work, and no equity taken. We operate as an aligned collective engineered purely to accelerate execution.',
      badge: 'Zero Fees',
    },
    {
      question: 'How do I pitch my startup for funding?',
      answer:
        'Share your pitch deck in our dedicated investor lounge channel. Active angel scouts, syndicate leads, and venture partners review decks weekly and provide constructive teardowns. Qualified startups receive direct warm introductions to seed funds and angel syndicates writing $25k to $500k checks.',
      badge: 'Capital Access',
    },
    {
      question: 'How can freelancers find client work?',
      answer:
        'Founders post daily hiring needs directly in the freelance channels. Because our community bypasses middleman agencies and freelance portals, you negotiate and contract directly with the founder with 0% platform commission.',
      badge: 'High-Ticket Leads',
    },
    {
      question: 'How does member verification and vetting work?',
      answer:
        'Our community moderation council reviews every incoming join request within 24 hours. We verify active projects, GitHub repositories, live products, or track records to ensure a high-signal, spam-free environment.',
      badge: 'Quality Control',
    },
    {
      question: 'How do members claim the $150,000+ cloud perks?',
      answer:
        'Once verified inside our WhatsApp or Discord lounge, you can access our exclusive Founders Perks Vault. Perks include up to $100k in AWS Activate credits, $2,500 OpenAI API credits, Stripe Atlas fee waivers, and Notion for Startups.',
      badge: 'Runway Extension',
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 z-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs font-bold text-violet-300 uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Everything you need to know about joining Founder Batch, pitching, and landing high-ticket clients.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl glass-panel border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-violet-500/50 bg-[#0c1222]/80 shadow-[0_0_25px_rgba(139,92,246,0.15)]'
                    : 'border-white/10 hover:border-white/25 bg-[#070b14]/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer select-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base sm:text-lg font-display font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {faq.question}
                    </span>
                    {faq.badge && (
                      <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400 uppercase font-semibold">
                        {faq.badge}
                      </span>
                    )}
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-slate-300 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-violet-600/20 text-violet-300 border-violet-500/40' : 'group-hover:bg-white/10'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Smooth Expand/Collapse Container via CSS Grid */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out px-6 sm:px-8 ${
                    isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal pt-2 border-t border-white/5">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-violet-950/40 to-slate-950/80 border border-violet-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-white mb-1">
              Have a question not listed here?
            </div>
            <div className="text-xs text-slate-400">
              Our active community mods are available in the WhatsApp & Discord lounges.
            </div>
          </div>

          <button
            onClick={onJoinClick}
            className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md shadow-violet-500/25 flex-shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask in the Lounge</span>
          </button>
        </div>
      </div>
    </section>
  );
};
