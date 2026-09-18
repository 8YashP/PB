import React from 'react';
import { Home, MapPin, Heart, Sparkles, Phone } from 'lucide-react';

export default function ResidenceFooter() {
  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #102544 0%, #06101d 100%)',
        color: '#fcfbfa',
        padding: '70px 20px 40px',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '2px solid var(--champagne-400)',
      }}
    >
      {/* Decorative Champagne Top Border Inset */}
      <div
        style={{
          position: 'absolute',
          top: '6px',
          left: '0',
          right: '0',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--champagne-400), transparent)',
        }}
      />

      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        {/* Sanskrit Mangal Shloka */}
        <div
          style={{
            fontFamily: 'var(--font-serif-body)',
            fontSize: 'clamp(1.1rem, 3vw, 1.45rem)',
            letterSpacing: '0.08em',
            color: 'var(--champagne-300)',
            marginBottom: '30px',
            lineHeight: 1.8,
          }}
        >
          <p>मंगलम् भगवान विष्णुः, मंगलम् गरुडध्वजः।</p>
          <p>मंगलम् पुण्डरीकाक्षः, मंगलाय तनो हरिः॥</p>
        </div>

        <div className="ornate-divider" style={{ maxWidth: '300px' }}>
          <span className="ornate-divider-center">🪷</span>
        </div>

        {/* Monogram - Anti-clipping */}
        <div
          className="font-script pearl-shimmer-text"
          style={{
            fontSize: 'clamp(2.6rem, 6vw, 4.2rem)',
            margin: '10px auto 20px',
            lineHeight: 1.42,
            paddingTop: '8px',
            paddingBottom: '8px',
            paddingLeft: '10px',
            paddingRight: '32px',
            overflow: 'visible',
            display: 'inline-block',
          }}
        >
          Pankaj & Bhagyashree
        </div>

        {/* Residence & Sender Info Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            textAlign: 'left',
            margin: '40px 0',
          }}
        >
          {/* Residence Card */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(203, 180, 147, 0.3)',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <Home size={20} color="var(--champagne-400)" />
              <h4 className="font-royal-title" style={{ fontSize: '1rem', color: '#eae2d5', letterSpacing: '0.1em' }}>
                Residence
              </h4>
            </div>
            <p style={{ fontWeight: 700, color: '#fff', fontSize: '1.05rem', marginBottom: '6px' }}>
              Mahesh Dhingra
            </p>
            <p style={{ color: '#c5d1e0', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Aditya Residency, 202, A Block, Samadhiya Colony, Taraganj, Lashkar, Gwalior (M.P.)
            </p>
          </div>

          {/* Invitation From Card */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(203, 180, 147, 0.3)',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <Heart size={20} color="var(--champagne-400)" />
              <h4 className="font-royal-title" style={{ fontSize: '1rem', color: '#eae2d5', letterSpacing: '0.1em' }}>
                Warm Regards From
              </h4>
            </div>
            <p style={{ fontWeight: 700, color: '#fff', fontSize: '1.05rem', marginBottom: '6px' }}>
              Dhingra Family
            </p>
            <p style={{ color: '#c5d1e0', fontSize: '0.95rem', lineHeight: 1.6 }}>
              P4E - Classes, 12, MLB Colony, Padav, Lashkar, Gwalior (M.P.)
            </p>
            <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--champagne-300)' }}>
              <Phone size={14} />
              <span style={{ fontSize: '0.85rem' }}>+91 90391 98313, +91 77738 09688</span>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(203, 180, 147, 0.2)', paddingTop: '24px' }}>
          <p style={{ fontSize: '0.9rem', color: '#c5d1e0', letterSpacing: '0.08em' }}>
            Two Souls • One Journey • Forever Ours
          </p>
          <p style={{ fontSize: '0.8rem', color: '#889bb3', marginTop: '6px' }}>
            Crafted with deep love and prayers for Pankaj & Bhagyashree's lifelong happiness.
          </p>
        </div>
      </div>
    </footer>
  );
}
