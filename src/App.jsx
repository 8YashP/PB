import React, { useState } from 'react';
import { MailOpen } from 'lucide-react';
import EnvelopeModal from './components/EnvelopeModal';
import PetalCanvas from './components/PetalCanvas';
import HeroSection from './components/HeroSection';
import EventsSection from './components/EventsSection';
import FamilySection from './components/FamilySection';
import ResidenceFooter from './components/ResidenceFooter';
import MusicPlayer from './components/MusicPlayer';
import { HangingGarlands, RoyalElephant } from './components/RoyalDecorations';

export default function App() {
  const [showEnvelope, setShowEnvelope] = useState(true);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      {/* Traditional Marigold & Jasmine Hanging Garlands (Toran) at top */}
      <HangingGarlands />

      {/* Decorative Royal Elephants Watermark on Large Screens */}
      <div className="side-elephant-left">
        <RoyalElephant width={260} height={210} flip={false} />
      </div>
      <div className="side-elephant-right">
        <RoyalElephant width={260} height={210} flip={true} />
      </div>

      {/* Falling Flower Petals Canvas */}
      <PetalCanvas />

      {/* Royal Wax Seal Opening Experience */}
      <EnvelopeModal
        isOpen={showEnvelope}
        onOpen={() => setShowEnvelope(false)}
      />

      {/* Persistent Floating Controls */}
      <MusicPlayer />


      {/* Royal Top Navigation Bar */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 20px',
          background: 'rgba(248, 246, 242, 0.94)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1.5px solid rgba(203, 180, 147, 0.35)',
          position: 'sticky',
          top: 0,
          zIndex: 40,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.3rem' }}>🪷</span>
          <span
            className="font-script royal-shimmer-text"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.1rem)',
              lineHeight: 1.4,
              paddingTop: '6px',
              paddingBottom: '4px',
              paddingLeft: '6px',
              paddingRight: '24px',
              overflow: 'visible',
              display: 'inline-block',
            }}
          >
            Pankaj & Bhagyashree
          </span>
        </div>

        <button
          onClick={() => setShowEnvelope(true)}
          style={{
            background: 'var(--grad-royal)',
            border: '1.5px solid var(--champagne-400)',
            color: '#fcfbfa',
            padding: '8px 18px',
            borderRadius: '9999px',
            fontSize: '0.85rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 14px rgba(10, 24, 45, 0.25)',
            transition: 'all 0.2s ease',
          }}
        >
          <MailOpen size={15} color="#eae2d5" />
          <span>Royal Envelope</span>
        </button>
      </nav>

      {/* Main Wedding Sections */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <HeroSection />

        <div className="ornate-divider" style={{ maxWidth: '600px', margin: '40px auto' }}>
          <span className="ornate-divider-center">🪷 • 卐 • 🪷</span>
        </div>

        <EventsSection />

        <div className="ornate-divider" style={{ maxWidth: '600px', margin: '40px auto' }}>
          <span className="ornate-divider-center">🪷 • 卐 • 🪷</span>
        </div>

        <FamilySection />


      </main>

      {/* Auspicious Residence & Footer */}
      <ResidenceFooter />
    </div>
  );
}
