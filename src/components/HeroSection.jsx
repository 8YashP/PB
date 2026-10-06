import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { RoyalElephant, CornerFiligree, RoyalMandap } from './RoyalDecorations';

export default function HeroSection() {
  // Target: Sunday, December 6, 2026, 19:00:00 IST (+05:30)
  const targetDate = new Date('2026-12-06T19:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const handleAddToCalendar = () => {
    const title = encodeURIComponent('Wedding: Pankaj & Bhagyashree');
    const details = encodeURIComponent(
      'Royal Wedding of Pankaj Dhingra & Bhagyashree Gurbani at RESHAM TARA RESORT - PARIJAT, Gwalior (M.P.). Barat starts at 5:00 PM, Varmala at 7:00 PM.'
    );
    const location = encodeURIComponent('RESHAM TARA RESORT - PARIJAT, City Centre, Gwalior, Madhya Pradesh');
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261206T113000Z/20261206T200000Z&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section
      style={{
        position: 'relative',
        padding: '24px 12px 40px',
        textAlign: 'center',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* Auspicious Shloka Banner */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="shloka-banner"
        style={{ maxWidth: '780px', margin: '0 auto 24px' }}
      >
        <div className="shloka-banner-inner">
          <span className="shloka-wing-left">"Jai Baba Ki Jai"</span>
          <div className="shloka-center">
            <span className="shloka-ganesh">卐 !! Om Shri Ganeshay Namah !! 卐</span>
            <span className="shloka-sachidanand">"Jai Sachidanand"</span>
          </div>
          <span className="shloka-wing-right">"Jai Baba Ki Jai"</span>
        </div>
      </motion.div>

      {/* Royal Top Title with Mandap & Elephants */}
      <div style={{ marginBottom: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'inline-flex' }}>
            <RoyalElephant width={52} height={42} flip={false} />
          </div>
          <div>
            <p
              className="font-royal-title"
              style={{
                fontSize: 'clamp(0.85rem, 2.8vw, 1.2rem)',
                color: 'var(--gold-700)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                fontWeight: 800,
              }}
            >
              A Beautiful Beginning
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '2px 0' }}>
              <RoyalMandap width={50} height={34} />
            </div>
          </div>
          <div style={{ display: 'inline-flex' }}>
            <RoyalElephant width={52} height={42} flip={true} />
          </div>
        </div>
      </div>

      {/* Couple Names */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1
          className="font-script royal-shimmer-text"
          style={{
            fontSize: 'clamp(3.1rem, 10vw, 5.8rem)',
            lineHeight: 1.42,
            paddingTop: '10px',
            paddingBottom: '8px',
            paddingLeft: '12px',
            paddingRight: '36px',
            margin: '0 auto 8px',
            overflow: 'visible',
            display: 'inline-block',
          }}
        >
          Pankaj & Bhagyashree
        </h1>

        <p
          className="font-serif text-sapphire"
          style={{
            fontSize: 'clamp(1.15rem, 3.8vw, 1.55rem)',
            fontStyle: 'italic',
            letterSpacing: '0.06em',
            marginBottom: '26px',
            fontWeight: 600,
            color: '#4a5d73',
          }}
        >
          Two Souls • One Journey • Forever Ours
        </p>
      </motion.div>

      {/* =========================================================
          COUPLE PORTRAIT - BIG & PROMINENT
          ========================================================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hero-portrait-container"
      >
        <div className="hero-portrait-card">
          <CornerFiligree style={{ top: '8px', left: '8px' }} />
          <CornerFiligree style={{ top: '8px', right: '8px', transform: 'scaleX(-1)' }} />
          <CornerFiligree style={{ bottom: '8px', left: '8px', transform: 'scaleY(-1)' }} />
          <CornerFiligree style={{ bottom: '8px', right: '8px', transform: 'scale(-1, -1)' }} />

          <img
            src="/couple.png"
            alt="Pankaj and Bhagyashree Royal Wedding Portrait"
            loading="eager"
          />
        </div>
      </motion.div>

      {/* Date & Venue Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ margin: '18px 0 28px' }}
      >
        <h2
          className="font-royal-title text-sapphire"
          style={{
            fontSize: 'clamp(1.5rem, 4.5vw, 2.4rem)',
            fontWeight: 800,
            marginBottom: '6px',
            lineHeight: 1.35,
            paddingTop: '4px',
          }}
        >
          Sunday, 6th December 2026
        </h2>
        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.1rem, 3.2vw, 1.35rem)',
            color: '#556880',
            fontWeight: 600,
            lineHeight: 1.4,
          }}
        >
          RESHAM TARA RESORT - PARIJAT • Gwalior (M.P.)
        </p>
      </motion.div>

      {/* Live Countdown Timer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={{
          maxWidth: '680px',
          margin: '0 auto 30px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '14px',
            color: 'var(--royal-800)',
            fontWeight: 700,
            letterSpacing: '0.12em',
            fontSize: 'clamp(0.85rem, 2.5vw, 0.98rem)',
            textTransform: 'uppercase',
          }}
        >
          <Clock size={16} color="var(--champagne-600)" />
          <span>Counting Down to the Auspicious Union</span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '8px',
          }}
        >
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: 'linear-gradient(145deg, #ffffff 0%, #f7f4ec 100%)',
                border: '1.5px solid var(--champagne-400)',
                borderRadius: '14px',
                padding: '14px 4px',
                boxShadow: '0 6px 16px rgba(10, 24, 45, 0.08), 0 0 10px rgba(203, 180, 147, 0.2)',
              }}
            >
              <div
                className="font-royal-title text-sapphire"
                style={{
                  fontSize: 'clamp(1.5rem, 5.5vw, 2.6rem)',
                  fontWeight: 'bold',
                  lineHeight: 1.2,
                  marginBottom: '4px',
                  paddingTop: '2px',
                }}
              >
                {String(item.value).padStart(2, '0')}
              </div>
              <div
                style={{
                  fontSize: 'clamp(0.65rem, 2vw, 0.78rem)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--champagne-600)',
                  fontWeight: 700,
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Add To Calendar Button */}
      <button
        onClick={handleAddToCalendar}
        className="btn-sapphire"
        style={{ maxWidth: '340px', width: '100%', margin: '0 auto' }}
      >
        <Calendar size={18} />
        <span>Save Wedding Date to Calendar</span>
      </button>
    </section>
  );
}
