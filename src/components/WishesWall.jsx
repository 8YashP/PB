import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Send, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { triggerBlessingShower } from './PetalCanvas';

export default function WishesWall() {
  const initialWishes = [

  ];

  const [wishes, setWishes] = useState(() => {
    try {
      const saved = localStorage.getItem('pb_wedding_wishes');
      return saved ? JSON.parse(saved) : initialWishes;
    } catch (e) {
      return initialWishes;
    }
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    relation: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('pb_wedding_wishes', JSON.stringify(wishes));
    } catch (e) {
      console.error(e);
    }
  }, [wishes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    const newWish = {
      name: formData.name.trim(),
      relation: formData.relation.trim() || 'Well Wisher',
      message: formData.message.trim(),
      date: 'Just now',
    };

    setWishes([newWish, ...wishes]);
    setFormData({ name: '', relation: '', message: '' });
    setSubmitted(true);
    triggerBlessingShower();

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  // Only show first 4 unless expanded
  const visibleWishes = isExpanded ? wishes : wishes.slice(0, 4);

  return (
    <section style={{ padding: '40px 16px 60px', maxWidth: '860px', margin: '0 auto', width: '100%' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <p
          className="font-royal-title"
          style={{
            color: 'var(--champagne-600)',
            letterSpacing: '0.25em',
            fontSize: '0.95rem',
            textTransform: 'uppercase',
            fontWeight: 800,
            marginBottom: '8px',
            lineHeight: 1.4,
            paddingTop: '4px',
          }}
        >
          Love & Good Wishes
        </p>
        <h2
          className="font-serif text-sapphire"
          style={{
            fontSize: 'clamp(2.2rem, 5.5vw, 3.4rem)',
            fontWeight: 700,
            lineHeight: 1.3,
          }}
        >
          Blessings & Guestbook
        </h2>
        <div className="ornate-divider">
          <span className="ornate-divider-center">🪷 • 卐 • 🪷</span>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-serif-body)',
            fontSize: 'clamp(1.1rem, 3.5vw, 1.25rem)',
            color: '#556880',
            maxWidth: '680px',
            margin: '0 auto',
            fontStyle: 'italic',
            lineHeight: 1.6,
          }}
        >
          Leave your warm wishes and blessings for Pankaj & Bhagyashree as they begin their sacred voyage of together forever.
        </p>
      </div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="royal-card"
        style={{
          marginBottom: '32px',
          background: 'linear-gradient(150deg, #ffffff 0%, #fbf9f4 100%)',
          border: '1.5px solid var(--champagne-400)',
        }}
      >
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '14px',
            }}
          >
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--royal-800)',
                  marginBottom: '6px',
                  letterSpacing: '0.04em',
                }}
              >
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh & Family"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: '1.5px solid var(--champagne-400)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  outline: 'none',
                  background: '#fff',
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--royal-800)',
                  marginBottom: '6px',
                  letterSpacing: '0.04em',
                }}
              >
                Relation / From
              </label>
              <input
                type="text"
                placeholder="e.g. Friends / Relatives / Gwalior"
                value={formData.relation}
                onChange={(e) => setFormData({ ...formData, relation: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: '1.5px solid var(--champagne-400)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  outline: 'none',
                  background: '#fff',
                }}
              />
            </div>
          </div>

          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--royal-800)',
                marginBottom: '6px',
                letterSpacing: '0.04em',
              }}
            >
              Your Warm Blessing / Message *
            </label>
            <textarea
              required
              rows={3}
              placeholder="Write your heartfelt wishes for Pankaj & Bhagyashree..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '12px',
                border: '1.5px solid var(--champagne-400)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                outline: 'none',
                background: '#fff',
                resize: 'vertical',
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <button type="submit" className="btn-sapphire" style={{ padding: '12px 28px', width: 'auto' }}>
              <Send size={16} />
              <span>Send Your Blessings</span>
            </button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--royal-700)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                }}
              >
                <span>🌸 Thank you for your divine blessings! 🌸</span>
              </motion.div>
            )}
          </div>
        </form>
      </motion.div>

      {/* Wishes Section Header */}
      <div style={{ marginBottom: '16px' }}>
        <span
          className="font-royal-title text-sapphire"
          style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '0.08em' }}
        >
          Recent Blessings ({wishes.length})
        </span>
      </div>

      {/* Wishes Display Wall (Shows first 4 or all when expanded) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <AnimatePresence>
          {visibleWishes.map((wish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="royal-card"
              style={{
                padding: '18px 20px',
                borderLeft: '5px solid var(--royal-600)',
                background: '#fff',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '8px',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <span
                    className="font-royal-title text-sapphire"
                    style={{ fontSize: '1.15rem', fontWeight: 800 }}
                  >
                    {wish.name}
                  </span>
                  {wish.relation && (
                    <span
                      style={{
                        fontSize: '0.75rem',
                        background: 'rgba(203, 180, 147, 0.25)',
                        color: 'var(--royal-800)',
                        padding: '2px 10px',
                        borderRadius: '9999px',
                        fontWeight: 700,
                      }}
                    >
                      {wish.relation}
                    </span>
                  )}
                </div>

                <span style={{ fontSize: '0.8rem', color: '#889bb3', fontStyle: 'italic' }}>
                  {wish.date}
                </span>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-serif-body)',
                  fontSize: '1.15rem',
                  lineHeight: 1.55,
                  color: '#2a3b4f',
                  fontStyle: 'italic',
                }}
              >
                "{wish.message}"
              </p>
            </motion.div>
          ))}
        </AnimatePresence>

        {wishes.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '26px',
              background: 'rgba(255, 255, 255, 0.7)',
              borderRadius: '16px',
              border: '1.5px dashed var(--champagne-400)',
              color: '#556880',
              fontStyle: 'italic',
            }}
          >
            🌸 Be the first to shower Pankaj & Bhagyashree with your blessings! 🌸
          </div>
        )}
      </div>

      {/* Expansion Button: Only visible when there are > 4 blessings */}
      {wishes.length > 4 && (
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="btn-sapphire"
            style={{ padding: '12px 28px', fontSize: '0.95rem' }}
          >
            {isExpanded ? (
              <>
                <ChevronUp size={18} />
                <span>Show Less (First 4)</span>
              </>
            ) : (
              <>
                <ChevronDown size={18} />
                <span>View All Blessings ({wishes.length}) 🌸</span>
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
