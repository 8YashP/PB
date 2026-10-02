import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X } from 'lucide-react';
import { weddingAudio } from '../utils/audioSynth';
import { triggerBlessingShower } from './PetalCanvas';

export default function EnvelopeModal({ isOpen, onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  // CRITICAL FIX: Whenever modal opens, reset isOpening to false so the card is never invisible
  useEffect(() => {
    if (isOpen) {
      setIsOpening(false);
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpening(true);
    triggerBlessingShower();
    weddingAudio.play();

    setTimeout(() => {
      setIsOpening(false);
      onOpen();
    }, 900);
  };

  const handleClose = (e) => {
    if (e) e.stopPropagation();
    setIsOpening(false);
    onOpen();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.08 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle at center, rgba(14, 34, 63, 0.96) 0%, rgba(6, 15, 29, 0.99) 100%)',
          backdropFilter: 'blur(10px)',
          padding: '20px',
        }}
        onClick={handleClose}
      >
        {/* Top-Right Dismiss / Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.12)',
            border: '1.5px solid var(--champagne-400)',
            color: '#fcfbfa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 110,
            transition: 'all 0.25s ease',
          }}
          title="Close Invitation"
          aria-label="Close Invitation"
        >
          <X size={22} color="#fcfbfa" />
        </button>

        {/* Envelope Container */}
        <motion.div
          initial={{ scale: 0.85, y: 30 }}
          animate={isOpening ? { y: -50, opacity: 0, scale: 0.9 } : { scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            maxWidth: '520px',
            position: 'relative',
            borderRadius: '24px',
            background: 'linear-gradient(145deg, #fcfbfa 0%, #f5f0e8 100%)',
            border: '2px solid var(--champagne-400)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(203, 180, 147, 0.35)',
            padding: '36px 28px',
            textAlign: 'center',
            cursor: 'pointer',
            overflow: 'visible',
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleOpen();
          }}
        >
          {/* Ornate Champagne Border Inset */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              right: '12px',
              bottom: '12px',
              border: '1px dashed var(--champagne-400)',
              borderRadius: '16px',
              pointerEvents: 'none',
            }}
          />

          {/* Top Invocations */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontFamily: 'var(--font-serif-body)',
                fontSize: '0.95rem',
                color: 'var(--royal-800)',
                fontWeight: '600',
                letterSpacing: '0.08em',
                marginBottom: '10px',
                padding: '0 10px',
              }}
            >
              <span>"Jai Baba Ki Jai"</span>
              <span style={{ color: 'var(--champagne-600)' }}>卐</span>
              <span>"Jai Baba Ki Jai"</span>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-serif-body)',
                fontSize: '1.05rem',
                color: 'var(--royal-800)',
                letterSpacing: '0.14em',
                fontWeight: '700',
                margin: '8px 0 16px',
                lineHeight: 1.4,
              }}
            >
              !! Om Shri Ganeshay Namah !!
            </p>

            <div className="ornate-divider" style={{ margin: '14px auto' }}>
              <span className="ornate-divider-center">🪷</span>
            </div>

            <h3
              className="font-royal-title"
              style={{
                fontSize: '1.2rem',
                color: 'var(--royal-900)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '8px',
                fontWeight: 800,
                lineHeight: 1.35,
                paddingTop: '2px',
              }}
            >
              Wedding Invitation
            </h3>

            {/* Couple Names - Anti-Clipping */}
            <h1
              className="font-script royal-shimmer-text"
              style={{
                fontSize: 'clamp(2.6rem, 8vw, 3.6rem)',
                lineHeight: 1.42,
                paddingTop: '8px',
                paddingBottom: '8px',
                paddingLeft: '10px',
                paddingRight: '30px',
                margin: '8px 0 6px',
                overflow: 'visible',
                display: 'inline-block',
              }}
            >
              Pankaj & Bhagyashree
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-serif-body)',
                fontSize: '1.15rem',
                color: '#556880',
                letterSpacing: '0.08em',
                fontStyle: 'italic',
                marginBottom: '28px',
                lineHeight: 1.4,
              }}
            >
              Sunday, 6th December 2026 • Gwalior
            </p>

            {/* Central Royal Wax Seal Button (Royal Sapphire & Champagne Pearl) */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '120px',
                height: '120px',
                margin: '0 auto 24px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, #1d4375 0%, #102544 60%, #06101d 100%)',
                border: '3px solid var(--champagne-400)',
                boxShadow: '0 10px 25px rgba(10, 24, 45, 0.6), 0 0 20px rgba(203, 180, 147, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif-title)',
                  fontSize: '1.75rem',
                  fontWeight: 'bold',
                  color: '#fcfbfa',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  textShadow: '0 2px 6px rgba(0,0,0,0.5)',
                }}
              >
                <span>P</span>
                <Heart size={16} fill="#fcfbfa" color="#fcfbfa" />
                <span>B</span>
              </div>
              <span
                style={{
                  fontSize: '0.62rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--champagne-400)',
                  marginTop: '2px',
                  fontWeight: 800,
                }}
              >
                ROYAL SEAL
              </span>
            </motion.div>

            {/* Pulsing Open Button */}
            <motion.button
              className="btn-sapphire"
              animate={{
                scale: [1, 1.04, 1],
                boxShadow: [
                  '0 6px 20px rgba(10, 24, 45, 0.35)',
                  '0 10px 30px rgba(203, 180, 147, 0.5)',
                  '0 6px 20px rgba(10, 24, 45, 0.35)',
                ],
              }}
              transition={{ repeat: Infinity, duration: 2.2 }}
              style={{ padding: '14px 32px', fontSize: '1.05rem' }}
            >
              <Sparkles size={18} />
              <span>Tap to Open Invitation</span>
            </motion.button>

            <p
              style={{
                fontSize: '0.8rem',
                color: '#65778c',
                letterSpacing: '0.04em',
                marginTop: '16px',
              }}
            >
              🎵 Turn up volume for auspicious wedding melody
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
