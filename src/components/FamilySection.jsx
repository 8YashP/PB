import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Star, Sparkles } from 'lucide-react';
import { CornerFiligree } from './RoyalDecorations';

export default function FamilySection() {
  const [activeTab, setActiveTab] = useState('dhingra'); // 'dhingra' or 'gurbani'

  const dhingraFamily = {
    title: "Groom's Royal Family",
    familyName: 'Dhingra Family',
    parents: [
      { role: 'Father', name: 'Shri Mahesh Dhingra', relation: 'Loving Father' },
      { role: 'Mother', name: 'Smt. Vinita Dhingra', relation: 'Loving Mother' },
    ],
    grandparents: [
      { role: 'Paternal Grandparents', name: 'Late Smt. Leela & Late Shri Khiyal Das Dhingra' },
    ],
  };

  const gurbaniFamily = {
    title: "Bride's Royal Family",
    familyName: 'Gurbani Family',
    parents: [
      { role: 'Father', name: 'Shri Harish Gurbani', relation: 'Loving Father' },
      { role: 'Mother', name: 'Smt. Usha Gurbani', relation: 'Loving Mother' },
    ],
    grandparents: [
      { role: 'Maternal & Paternal Grandparents', name: 'Smt. Parvati & Shri Vasant Gurbani' },
    ],
  };

  const sweetAngels = ['Garv', 'Kanak', 'Avyaan', 'Kanishk'];

  const awaitingGuests = [
    'Smt. Jyoti & Shri Prakash Pehalajani',
    'Smt. Neetu & Late Shri Kanhaiya Lal Taneja',
    'Smt. Geet & Shri Pankaj Thawani',
    'Smt. Kajal & Shri Pradeep Sharma',
  ];

  const withBestCompliment = [
    'Smt. Deepa & Late Shri Harish Dhingra',
    'Smt. Late Vinita & Shri Deepak Hirani',
    'Jagrati Dhingra',
    '&',
    'Maternal All Goplani Family',
  ];

  return (
    <section style={{ padding: '40px 16px 60px', maxWidth: '860px', margin: '0 auto', width: '100%' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
          Cherished Lineage & Kin
        </p>
        <h2
          className="font-serif text-sapphire"
          style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 3.4rem)',
            fontWeight: 700,
            lineHeight: 1.3,
          }}
        >
          Our Beloved Family
        </h2>
        <div className="ornate-divider">
          <span className="ornate-divider-center">🪷 • 卐 • 🪷</span>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-serif-body)',
            fontSize: '1.25rem',
            color: '#52667d',
            maxWidth: '680px',
            margin: '0 auto',
            fontStyle: 'italic',
            lineHeight: 1.5,
          }}
        >
          "With the heavenly blessings of our elders and the warm affection of our family and loved ones."
        </p>
      </div>

      {/* Family Toggle Tabs */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '14px',
          marginBottom: '36px',
        }}
      >
        <button
          onClick={() => setActiveTab('dhingra')}
          style={{
            padding: '12px 28px',
            borderRadius: '9999px',
            fontFamily: 'var(--font-serif-title)',
            letterSpacing: '0.08em',
            fontSize: '0.95rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            background: activeTab === 'dhingra' ? 'var(--grad-royal)' : '#fff',
            color: activeTab === 'dhingra' ? '#fcfbfa' : 'var(--royal-800)',
            border: `2px solid ${activeTab === 'dhingra' ? 'var(--champagne-400)' : 'rgba(203, 180, 147, 0.45)'}`,
            boxShadow: activeTab === 'dhingra' ? '0 8px 25px rgba(10, 24, 45, 0.25)' : 'none',
          }}
        >
          Dhingra Family (Groom)
        </button>
        <button
          onClick={() => setActiveTab('gurbani')}
          style={{
            padding: '12px 28px',
            borderRadius: '9999px',
            fontFamily: 'var(--font-serif-title)',
            letterSpacing: '0.08em',
            fontSize: '0.95rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            background: activeTab === 'gurbani' ? 'var(--grad-royal)' : '#fff',
            color: activeTab === 'gurbani' ? '#fcfbfa' : 'var(--royal-800)',
            border: `2px solid ${activeTab === 'gurbani' ? 'var(--champagne-400)' : 'rgba(203, 180, 147, 0.45)'}`,
            boxShadow: activeTab === 'gurbani' ? '0 8px 25px rgba(10, 24, 45, 0.25)' : 'none',
          }}
        >
          Gurbani Family (Bride)
        </button>
      </div>

      {/* Main Family Cards Display */}
      {activeTab === 'dhingra' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
        >
          {/* Parents Card */}
          <div className="royal-card" style={{ textAlign: 'center', position: 'relative' }}>
            <CornerFiligree style={{ top: '10px', left: '10px' }} />
            <CornerFiligree style={{ top: '10px', right: '10px', transform: 'scaleX(-1)' }} />

            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--grad-champagne)',
                color: '#0a182d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                boxShadow: '0 6px 16px rgba(203, 180, 147, 0.3)',
              }}
            >
              <Users size={30} />
            </div>

            <p
              className="font-royal-title"
              style={{
                color: 'var(--champagne-600)',
                letterSpacing: '0.18em',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                fontWeight: 800,
                marginBottom: '6px',
                lineHeight: 1.4,
                paddingTop: '2px',
              }}
            >
              Host & Proud Parents
            </p>

            <h3
              className="font-serif text-sapphire"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '6px', lineHeight: 1.3 }}
            >
              Smt. Vinita & Shri Mahesh Dhingra
            </h3>

            <p style={{ color: '#556880', fontStyle: 'italic', fontSize: '1.05rem', marginBottom: '16px', lineHeight: 1.4 }}>
              Requesting the honor of your gracious presence at the wedding ceremony of our beloved son Pankaj
            </p>

            <div className="ornate-divider" style={{ maxWidth: '280px' }}>
              <span>🪷</span>
            </div>

            <p style={{ color: '#7a8c9e', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              With Eternal Blessings of Paternal Grandparents
            </p>
            <p
              className="font-serif"
              style={{
                fontSize: '1.25rem',
                color: 'var(--royal-800)',
                fontWeight: 600,
                marginTop: '4px',
                lineHeight: 1.4,
              }}
            >
              Late Smt. Leela & Late Shri Khiyal Das Dhingra
            </p>
          </div>
        </motion.div>
      )}

      {activeTab === 'gurbani' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
        >
          {/* Bride Parents Card */}
          <div className="royal-card" style={{ textAlign: 'center', position: 'relative' }}>
            <CornerFiligree style={{ top: '10px', left: '10px' }} />
            <CornerFiligree style={{ top: '10px', right: '10px', transform: 'scaleX(-1)' }} />

            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--grad-champagne)',
                color: '#0a182d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                boxShadow: '0 6px 16px rgba(203, 180, 147, 0.3)',
              }}
            >
              <Users size={30} />
            </div>

            <p
              className="font-royal-title"
              style={{
                color: 'var(--champagne-600)',
                letterSpacing: '0.18em',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                fontWeight: 800,
                marginBottom: '6px',
                lineHeight: 1.4,
                paddingTop: '2px',
              }}
            >
              Loving Parents of the Bride
            </p>

            <h3
              className="font-serif text-sapphire"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '6px', lineHeight: 1.3 }}
            >
              Smt. Usha & Shri Harish Gurbani
            </h3>

            <p style={{ color: '#556880', fontStyle: 'italic', fontSize: '1.05rem', marginBottom: '16px', lineHeight: 1.4 }}>
              Blessing our darling daughter Bhagyashree as she embarks on her new sacred voyage
            </p>

            <div className="ornate-divider" style={{ maxWidth: '280px' }}>
              <span>🪷</span>
            </div>

            <p style={{ color: '#7a8c9e', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              Beloved Grand daughter of
            </p>
            <p
              className="font-serif"
              style={{
                fontSize: '1.25rem',
                color: 'var(--royal-800)',
                fontWeight: 600,
                marginTop: '4px',
                lineHeight: 1.4,
              }}
            >
              Smt. Parvati & Shri Vasant Gurbani
            </p>
          </div>
        </motion.div>
      )}

      {/* Sweet Request (Little Angels) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          marginTop: '36px',
          background: 'linear-gradient(135deg, #f7f4ec 0%, #f1ebd9 100%)',
          border: '1.5px dashed var(--champagne-400)',
          borderRadius: '20px',
          padding: '26px 20px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--royal-800)',
            marginBottom: '8px',
          }}
        >
          <Sparkles size={18} color="var(--champagne-600)" />
          <span
            className="font-royal-title"
            style={{
              fontSize: '0.9rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              fontWeight: 800,
              lineHeight: 1.4,
            }}
          >
            Sweet Request
          </span>
          <Sparkles size={18} color="var(--champagne-600)" />
        </div>

        <p style={{ fontStyle: 'italic', color: '#556880', fontSize: '1.05rem', marginBottom: '16px', lineHeight: 1.4 }}>
          "Mere Chachu/Mama & Chachi/Mami ki Shaadi mein Zaroor Aana!" 🌸
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          {sweetAngels.map((name, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                padding: '8px 20px',
                borderRadius: '9999px',
                border: '1px solid var(--champagne-400)',
                color: 'var(--royal-900)',
                fontWeight: 700,
                fontSize: '1rem',
                boxShadow: '0 4px 10px rgba(10, 24, 45, 0.08)',
              }}
            >
              ⭐ {name}
            </div>
          ))}
        </div>
      </motion.div>

      {/* =========================================================
          SIDE-BY-SIDE: Awaiting To Welcome You & With Best Compliments From
          ========================================================= */}
      <div
        style={{
          marginTop: '36px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {/* Card 1: Awaiting To Welcome You */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="royal-card"
          style={{
            textAlign: 'center',
            padding: '28px 20px',
            background: 'linear-gradient(150deg, #ffffff 0%, #fbf9f4 100%)',
            position: 'relative',
          }}
        >
          <CornerFiligree style={{ top: '8px', left: '8px' }} />
          <CornerFiligree style={{ top: '8px', right: '8px', transform: 'scaleX(-1)' }} />

          <p
            className="font-royal-title"
            style={{
              fontSize: '0.95rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--champagne-600)',
              fontWeight: 800,
              marginBottom: '18px',
              lineHeight: 1.4,
              paddingTop: '2px',
            }}
          >
            Awaiting To Welcome You
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              color: 'var(--royal-800)',
              fontSize: '1.05rem',
              fontFamily: 'var(--font-serif-body)',
              fontWeight: 600,
              lineHeight: 1.4,
            }}
          >
            {awaitingGuests.map((guest, idx) => (
              <div key={idx} style={{ padding: '2px 0' }}>
                {guest}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 2: With Best Compliments From */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="royal-card"
          style={{
            textAlign: 'center',
            padding: '28px 20px',
            background: 'linear-gradient(150deg, #ffffff 0%, #fbf9f4 100%)',
            position: 'relative',
          }}
        >
          <CornerFiligree style={{ top: '8px', left: '8px' }} />
          <CornerFiligree style={{ top: '8px', right: '8px', transform: 'scaleX(-1)' }} />

          <p
            className="font-royal-title"
            style={{
              fontSize: '0.95rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--champagne-600)',
              fontWeight: 800,
              marginBottom: '18px',
              lineHeight: 1.4,
              paddingTop: '2px',
            }}
          >
            With Best Compliments From
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              color: 'var(--royal-800)',
              fontSize: '1.05rem',
              fontFamily: 'var(--font-serif-body)',
              fontWeight: 600,
              lineHeight: 1.4,
            }}
          >
            {withBestCompliment.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: item === '&' ? '0' : '2px 0',
                  color: item === '&' ? 'var(--champagne-600)' : 'var(--royal-800)',
                  fontWeight: item === '&' ? 800 : 600,
                  fontSize: item === '&' ? '1.2rem' : '1.05rem',
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
