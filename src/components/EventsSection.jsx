import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation, Copy, Check, Sparkles } from 'lucide-react';
import { CornerFiligree, RoyalElephant, RoyalMandap } from './RoyalDecorations';

export default function EventsSection() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyAddress = (address, index) => {
    navigator.clipboard.writeText(address);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const openGoogleMaps = (query) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank');
  };

  const addToCalendar = (title, startIso, endIso, details, location) => {
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${startIso}/${endIso}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    window.open(url, '_blank');
  };

  return (
    <section
      style={{
        padding: '50px 16px 70px',
        maxWidth: '1050px',
        margin: '0 auto',
        width: '100%',
        position: 'relative',
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p
          className="font-royal-title"
          style={{
            color: 'var(--champagne-600)',
            letterSpacing: '0.28em',
            fontSize: '0.95rem',
            textTransform: 'uppercase',
            fontWeight: 800,
            marginBottom: '6px',
            lineHeight: 1.4,
            paddingTop: '4px',
          }}
        >
          शुभ विवाह कार्यक्रम
        </p>
        <h2
          className="font-script royal-shimmer-text"
          style={{
            fontSize: 'clamp(3rem, 7vw, 4.6rem)',
            lineHeight: 1.45,
            paddingTop: '8px',
            paddingBottom: '4px',
            margin: '0 auto',
            overflow: 'visible',
            display: 'inline-block',
          }}
        >
          Wedding Itinerary
        </h2>
        <div className="ornate-divider" style={{ margin: '14px auto 18px' }}>
          <span className="ornate-divider-center">🪷 • 卐 • 🪷</span>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-serif-body)',
            fontSize: 'clamp(1.15rem, 3vw, 1.35rem)',
            color: '#4f6176',
            fontStyle: 'italic',
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: 1.5,
          }}
        >
          "Two sacred days filled with divine prayers, royal festivities, and eternal love."
        </p>
      </div>

      {/* =========================================================
          THE UNBOXED SHAHI PATRIKA (ROYAL PALACE ITINERARY)
          Sapphire & Champagne Pearl theme.
          Zero boxy rectangular containers! Flowing, graceful proclamation.
          ========================================================= */}
      <div
        style={{
          position: 'relative',
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.98) 0%, rgba(248, 246, 242, 0.96) 100%)',
          borderRadius: '36px',
          border: '2px solid var(--champagne-400)',
          boxShadow:
            '0 0 0 4px #0e223f, 0 0 0 7px #eae2d5, 0 25px 60px rgba(10, 24, 45, 0.16), 0 0 40px rgba(203, 180, 147, 0.3)',
          padding: '44px 20px',
          overflow: 'visible',
        }}
      >
        {/* Ornate Corner Filigrees on the Royal Scroll */}
        <CornerFiligree style={{ top: '14px', left: '14px', width: '52px', height: '52px' }} />
        <CornerFiligree style={{ top: '14px', right: '14px', width: '52px', height: '52px', transform: 'scaleX(-1)' }} />
        <CornerFiligree style={{ bottom: '14px', left: '14px', width: '52px', height: '52px', transform: 'scaleY(-1)' }} />
        <CornerFiligree style={{ bottom: '14px', right: '14px', width: '52px', height: '52px', transform: 'scale(-1, -1)' }} />

        {/* Top Auspicious Inscription */}
        <div style={{ textAlign: 'center', marginBottom: '36px', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
            <RoyalElephant width={54} height={42} flip={false} />
            <div style={{ textAlign: 'center' }}>
              <RoyalMandap width={56} height={40} />
              <p
                style={{
                  fontFamily: 'var(--font-serif-body)',
                  color: 'var(--royal-800)',
                  fontSize: '1.15rem',
                  letterSpacing: '0.14em',
                  fontWeight: 700,
                  marginTop: '4px',
                  lineHeight: 1.4,
                }}
              >
                ॥ श्री गणेशाय नमः ॥
              </p>
            </div>
            <RoyalElephant width={54} height={42} flip={true} />
          </div>
        </div>

        {/* =========================================================
            PROGRAMME 1: SATURDAY, 5TH DECEMBER 2026
            Jai Baba Mandali Satsang
            ========================================================= */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '820px',
            margin: '0 auto 42px',
            textAlign: 'center',
          }}
        >
          {/* Day & Event Title */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--royal-800)',
              background: 'rgba(203, 180, 147, 0.22)',
              padding: '7px 22px',
              borderRadius: '9999px',
              fontSize: '0.88rem',
              fontWeight: 800,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: '14px',
              border: '1.5px solid rgba(203, 180, 147, 0.55)',
              lineHeight: 1.4,
            }}
          >
            <span>🕉️</span>
            <span>Saturday, 5th December 2026</span>
            <span>🕉️</span>
          </div>

          <h3
            className="font-royal-title text-sapphire"
            style={{
              fontSize: 'clamp(1.9rem, 4.8vw, 2.7rem)',
              lineHeight: 1.38,
              paddingTop: '6px',
              paddingBottom: '4px',
              fontWeight: 800,
              marginBottom: '4px',
            }}
          >
            Jai Baba Mandali Satsang
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-serif-body)',
              fontSize: '1.25rem',
              color: '#556880',
              fontStyle: 'italic',
              marginBottom: '16px',
              lineHeight: 1.4,
            }}
          >
            Spiritual Devotion, Divine Bhajans & Auspicious Blessings
          </p>

          {/* Time Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, #fcfbfa 0%, #eae2d5 50%, #cbb493 100%)',
              color: '#0a182d',
              padding: '9px 24px',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '1.05rem',
              border: '1px solid #ffffff',
              boxShadow: '0 4px 15px rgba(203, 180, 147, 0.35)',
              marginBottom: '16px',
              lineHeight: 1.3,
            }}
          >
            <Clock size={17} color="#0a182d" />
            <span>6:00 PM Onwards</span>
          </div>

          {/* Venue Info */}
          <div style={{ margin: '10px 0 20px' }}>
            <p
              className="font-royal-title"
              style={{
                fontSize: '1.35rem',
                color: 'var(--royal-800)',
                fontWeight: 800,
                marginBottom: '4px',
                lineHeight: 1.4,
                paddingTop: '4px',
              }}
            >
              📍 Aditya Residency
            </p>
            <p style={{ color: '#4a5d73', fontSize: '1.05rem', lineHeight: 1.5 }}>
              Samadhiya Colony, Taraganj, Gwalior, Madhya Pradesh
            </p>
          </div>

          {/* Action Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px',
            }}
          >
            <button
              onClick={() => openGoogleMaps('Aditya Residency, Samadhiya Colony, Taraganj, Gwalior')}
              className="btn-gold"
              style={{ padding: '10px 22px', fontSize: '0.9rem' }}
            >
              <Navigation size={16} />
              <span>Open on Google Maps</span>
            </button>

            <button
              onClick={() =>
                copyAddress('Aditya Residency, Samadhiya Colony, Taraganj, Gwalior, Madhya Pradesh', 1)
              }
              className="btn-outline-gold"
              style={{
                padding: '10px 18px',
                fontSize: '0.9rem',
              }}
            >
              {copiedIndex === 1 ? <Check size={16} color="green" /> : <Copy size={16} />}
              <span>{copiedIndex === 1 ? 'Address Copied!' : 'Copy Address'}</span>
            </button>

            <button
              onClick={() =>
                addToCalendar(
                  'Jai Baba Mandali Satsang - Pankaj & Bhagyashree Wedding',
                  '20261205T123000Z',
                  '20261205T163000Z',
                  'Auspicious Jai Baba Mandali Satsang for Pankaj and Bhagyashree wedding celebrations at Aditya Residency, Gwalior.',
                  'Aditya Residency, Samadhiya Colony, Taraganj, Gwalior'
                )
              }
              className="btn-outline-gold"
              style={{
                padding: '10px 18px',
                fontSize: '0.9rem',
              }}
            >
              <Calendar size={16} />
              <span>Add to Calendar</span>
            </button>
          </div>
        </div>

        {/* Auspicious Divider between Satsang and Wedding */}
        <div
          style={{
            maxWidth: '650px',
            margin: '32px auto 40px',
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              height: '1.5px',
              background: 'linear-gradient(90deg, transparent, var(--champagne-400), var(--royal-700), var(--champagne-400), transparent)',
              marginBottom: '14px',
            }}
          />
          <span
            style={{
              background: 'linear-gradient(135deg, #0e223f 0%, #193963 100%)',
              padding: '8px 24px',
              borderRadius: '9999px',
              border: '1.5px solid var(--champagne-400)',
              color: '#fcfbfa',
              fontFamily: 'var(--font-serif-title)',
              fontSize: '0.9rem',
              fontWeight: 800,
              letterSpacing: '0.16em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 15px rgba(10, 24, 45, 0.25)',
              lineHeight: 1.4,
              overflow: 'visible',
            }}
          >
            <span>🪷</span>
            <span>THE MAIN WEDDING CELEBRATION</span>
            <span>🪷</span>
          </span>
        </div>

        {/* =========================================================
            PROGRAMME 2: SUNDAY, 6TH DECEMBER 2026
            Varmala & Wedding Ceremony (SPECIAL ROYAL HIGHLIGHT)
            ========================================================= */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '860px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          {/* Day 2 Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--grad-royal)',
              color: '#eae2d5',
              padding: '8px 26px',
              borderRadius: '9999px',
              fontSize: '0.92rem',
              fontWeight: 800,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: '16px',
              border: '1.5px solid var(--champagne-400)',
              boxShadow: '0 6px 18px rgba(10, 24, 45, 0.3)',
              lineHeight: 1.4,
            }}
          >
            <span>👑</span>
            <span>Sunday, 6th December 2026</span>
            <span>👑</span>
          </div>

          {/* Graceful Ceremony Title - NO CLIPPING! */}
          <div style={{ margin: '4px 0 10px', overflow: 'visible' }}>
            <p
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: 'clamp(1.8rem, 4.5vw, 2.5rem)',
                color: 'var(--champagne-600)',
                lineHeight: 1.45,
                margin: '0 auto',
                paddingTop: '6px',
                display: 'block',
                overflow: 'visible',
              }}
            >
              The Auspicious
            </p>
            <h3
              className="font-royal-title text-sapphire"
              style={{
                fontSize: 'clamp(1.4rem, 4.2vw, 2.45rem)',
                fontWeight: 900,
                letterSpacing: '0.04em',
                lineHeight: 1.35,
                paddingTop: '6px',
                paddingBottom: '6px',
                margin: '0 auto',
                overflow: 'visible',
                textWrap: 'balance',
              }}
            >
              Varmala & Wedding Ceremony
            </h3>
          </div>

          <p
            className="font-serif"
            style={{
              fontSize: 'clamp(1.15rem, 3.2vw, 1.45rem)',
              fontStyle: 'italic',
              fontWeight: 600,
              color: '#52667d',
              letterSpacing: '0.04em',
              marginBottom: '32px',
              lineHeight: 1.4,
            }}
          >
            Two Souls • Sacred Pheras • One Eternal Bond
          </p>

          {/* =========================================================
              BARAAT & VARMALA CHRONOLOGY: 100% UNBOXED ROYAL PATHWAY!
              Zero rectangular bars/boxes!
              Clean, flowing, organic shahi decree with circular medallions.
              ========================================================= */}
          <div
            style={{
              maxWidth: '650px',
              margin: '0 auto 34px',
              position: 'relative',
              padding: '10px 0',
            }}
          >
            {/* Event Item 1: Royal Baraat (5:00 PM) - UNBOXED */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {/* Circular Medallion */}
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #193963 0%, #0e223f 100%)',
                  border: '3px solid var(--champagne-400)',
                  boxShadow: '0 6px 20px rgba(10, 24, 45, 0.35), 0 0 15px rgba(203, 180, 147, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  color: '#faebba',
                  marginBottom: '12px',
                }}
              >
                🎺
              </div>

              {/* Tag / Category */}
              <span
                style={{
                  fontSize: '0.82rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: 'var(--champagne-600)',
                  fontWeight: 800,
                  marginBottom: '4px',
                  lineHeight: 1.4,
                }}
              >
                Royal Baraat Procession
              </span>

              {/* Proclamation - Clean Unclipped Royal Serif */}
              <h4
                className="font-royal-title text-sapphire"
                style={{
                  fontSize: 'clamp(1.35rem, 4vw, 1.85rem)',
                  fontWeight: 900,
                  lineHeight: 1.35,
                  paddingTop: '4px',
                  marginBottom: '6px',
                }}
              >
                The Barat Will Start From Hotel Sun Valley at 5:00 PM
              </h4>

              <p
                style={{
                  fontFamily: 'var(--font-serif-body)',
                  fontSize: '1.1rem',
                  color: '#5d7188',
                  fontStyle: 'italic',
                  maxWidth: '460px',
                  lineHeight: 1.4,
                }}
              >
                With joyful dhol beats, dancing kin, and majestic royal festivities
              </p>
            </div>

            {/* Dedicated Royal Transition (strictly between Event 1 and Event 2, NEVER overlapping text) */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '22px 0 26px',
              }}
            >
              {/* Top vertical hairline */}
              <div
                style={{
                  width: '1.5px',
                  height: '24px',
                  background: 'linear-gradient(180deg, transparent, var(--champagne-400))',
                }}
              />

              {/* Central Auspicious Royal Seal Node */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  margin: '4px 0',
                }}
              >
                <div style={{ height: '1px', width: '45px', background: 'linear-gradient(90deg, transparent, var(--champagne-400))' }} />
                <div
                  style={{
                    background: '#ffffff',
                    border: '1.5px solid var(--champagne-400)',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                    color: 'var(--champagne-600)',
                    boxShadow: '0 2px 8px rgba(203, 180, 147, 0.35)',
                  }}
                >
                  ✦
                </div>
                <div style={{ height: '1px', width: '45px', background: 'linear-gradient(90deg, var(--champagne-400), transparent)' }} />
              </div>

              {/* Bottom vertical hairline */}
              <div
                style={{
                  width: '1.5px',
                  height: '24px',
                  background: 'linear-gradient(180deg, var(--champagne-400), transparent)',
                }}
              />
            </div>

            {/* Event Item 2: Varmala Ceremony (7:00 PM) - UNBOXED */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {/* Circular Medallion */}
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #fcfbfa 0%, #eae2d5 50%, #cbb493 100%)',
                  border: '3px solid #102544',
                  boxShadow: '0 6px 20px rgba(10, 24, 45, 0.2), 0 0 15px rgba(203, 180, 147, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.75rem',
                  marginBottom: '12px',
                }}
              >
                🪷
              </div>

              {/* Tag / Category */}
              {/* <span
                style={{
                  fontSize: '0.82rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: 'var(--champagne-600)',
                  fontWeight: 800,
                  marginBottom: '4px',
                }}
              >
                Sacred Varmala & Pheras
              </span> */}

              {/* Proclamation - Clean Unclipped Royal Serif */}
              <h4
                className="font-royal-title text-sapphire"
                style={{
                  fontSize: 'clamp(1.35rem, 4vw, 1.85rem)',
                  fontWeight: 900,
                  lineHeight: 1.4,
                  paddingTop: '4px',
                  marginBottom: '6px',
                }}
              >
                Sacred Varmala & Pheras
                <br />
                <span style={{ whiteSpace: 'nowrap' }}>7:00 PM Onwards</span>
              </h4>

              <p
                style={{
                  fontFamily: 'var(--font-serif-body)',
                  fontSize: '1.1rem',
                  color: '#5d7188',
                  fontStyle: 'italic',
                  maxWidth: '460px',
                  lineHeight: 1.4,
                }}
              >
                Under the sacred mandap, the divine garland exchange followed by royal feast
              </p>
            </div>
          </div>

          {/* Wedding Venue Highlight */}
          <div style={{ margin: '28px 0 26px' }}>
            <p
              style={{
                fontSize: '0.85rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--champagne-600)',
                fontWeight: 800,
                marginBottom: '6px',
              }}
            >
              Wedding Destination
            </p>
            <h4
              className="font-royal-title text-sapphire"
              style={{
                fontSize: 'clamp(1.5rem, 4.5vw, 2.2rem)',
                fontWeight: 900,
                lineHeight: 1.35,
                paddingTop: '4px',
                marginBottom: '8px',
                letterSpacing: '0.04em',
              }}
            >
              Resham Tara Resort - Parijat
            </h4>
            <p style={{ color: '#4a5d73', fontSize: '1.05rem', lineHeight: 1.5, maxWidth: '580px', margin: '0 auto' }}>
              Near Sun Valley, Behind New Collectorate, City Centre, Gwalior (M.P.)
            </p>
          </div>

          {/* Action Buttons for Wedding Venue */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px',
            }}
          >
            <button
              onClick={() =>
                openGoogleMaps('Resham Tara Resort Parijat, Near Sun Valley, Behind New Collectorate, Gwalior')
              }
              className="btn-sapphire"
              style={{ padding: '11px 24px', fontSize: '0.92rem' }}
            >
              <Navigation size={16} />
              <span>Get Directions to Wedding Venue</span>
            </button>

            <button
              onClick={() =>
                copyAddress(
                  'Resham Tara Resort - Parijat, Near Sun Valley, Behind New Collectorate, City Centre, Gwalior (M.P.)',
                  2
                )
              }
              className="btn-outline-gold"
              style={{
                padding: '11px 20px',
                fontSize: '0.92rem',
              }}
            >
              {copiedIndex === 2 ? <Check size={16} color="green" /> : <Copy size={16} />}
              <span>{copiedIndex === 2 ? 'Venue Copied!' : 'Copy Venue Address'}</span>
            </button>

            <button
              onClick={() =>
                addToCalendar(
                  'Pankaj & Bhagyashree Wedding Ceremony',
                  '20261206T113000Z',
                  '20261206T200000Z',
                  'Royal Wedding of Pankaj Dhingra and Bhagyashree Gurbani at Resham Tara Resort - Parijat, Gwalior. Barat starts at 5:00 PM, Varmala at 7:00 PM.',
                  'Resham Tara Resort - Parijat, Near Sun Valley, Behind New Collectorate, City Centre, Gwalior (M.P.)'
                )
              }
              className="btn-outline-gold"
              style={{
                padding: '11px 20px',
                fontSize: '0.92rem',
              }}
            >
              <Calendar size={16} />
              <span>Save Wedding to Calendar</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
