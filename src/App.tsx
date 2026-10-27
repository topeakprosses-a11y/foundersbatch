import React, { useState } from 'react';
import { CosmicCanvas3D, CanvasSettings } from './components/CosmicCanvas3D';
import { AmbientGlowCursor } from './components/AmbientGlowCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Phase2CommunityPillars } from './components/Phase2CommunityPillars';
import { CommunityPortals } from './components/CommunityPortals';
import { EcosystemSection } from './components/EcosystemSection';
import { FAQSection } from './components/FAQSection';
import { StickyBottomCTABar } from './components/StickyBottomCTABar';
import { WhatsAppModal } from './components/WhatsAppModal';
import { CanvasControlsDock } from './components/CanvasControlsDock';
import { Footer } from './components/Footer';

export default function App() {
  const [isLoungeModalOpen, setIsLoungeModalOpen] = useState(false);
  const [modalRole, setModalRole] = useState<'founder' | 'freelancer' | 'investor'>('founder');
  const [canvasSettings, setCanvasSettings] = useState<CanvasSettings>({
    mode: 'constellation',
    colorTheme: 'cyber',
    speed: 1.0,
  });

  const handleOpenLounge = (preferredRole?: 'founder' | 'freelancer' | 'investor') => {
    if (preferredRole) {
      setModalRole(preferredRole);
    }
    setIsLoungeModalOpen(true);
  };

  const handleCloseLounge = () => {
    setIsLoungeModalOpen(false);
  };

  const handleScrollToEcosystem = () => {
    const el = document.getElementById('ecosystem');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden selection:bg-violet-500/30 selection:text-violet-200">
      {/* 3D Background Canvas with mouse parallax & scroll response */}
      <CosmicCanvas3D settings={canvasSettings} />

      {/* Ambient cursor glow trail */}
      <AmbientGlowCursor />

      {/* Fixed Navigation Bar with Recreated Official Brand Identity */}
      <Navbar
        onJoinClick={() => handleOpenLounge('founder')}
        onExploreClick={handleScrollToEcosystem}
      />

      {/* Main Content Layout */}
      <main className="relative z-20">
        {/* Phase 1: Hero Section */}
        <HeroSection
          onJoinClick={() => handleOpenLounge('founder')}
          onExploreClick={handleScrollToEcosystem}
        />

        {/* Phase 2: Core Community Pillars (3D Hover-Tilt Cards, Animated Metrics, Live Ticker) */}
        <Phase2CommunityPillars onJoinLounge={handleOpenLounge} />

        {/* Phase 3: Community Access Portals (WhatsApp, Discord, Telegram) */}
        <CommunityPortals />

        {/* Deep Ecosystem Features & Founder Endorsements */}
        <EcosystemSection onJoinClick={() => handleOpenLounge('founder')} />

        {/* Phase 3: Accordion FAQ Section */}
        <FAQSection onJoinClick={() => handleOpenLounge('founder')} />
      </main>

      {/* Phase 3: Cinematic Footer with Social Links & Privacy Policy */}
      <Footer onJoinClick={() => handleOpenLounge('founder')} />

      {/* Phase 3: Floating Sticky Bottom CTA Bar on Scroll */}
      <StickyBottomCTABar onJoinClick={() => handleOpenLounge('founder')} />

      {/* Sleek Ergonomic 3D Scene Controls Dock */}
      <CanvasControlsDock
        settings={canvasSettings}
        onChange={setCanvasSettings}
      />

      {/* WhatsApp Lounge Invitation & Verification Modal */}
      <WhatsAppModal
        isOpen={isLoungeModalOpen}
        onClose={handleCloseLounge}
        initialRole={modalRole}
      />
    </div>
  );
}

