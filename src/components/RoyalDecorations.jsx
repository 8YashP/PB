import React from 'react';

// Ornate Corner Filigree (Used for card corners)
export function CornerFiligree({ style }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width="44"
      height="44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', pointerEvents: 'none', ...style }}
    >
      <path
        d="M5 5 H40 C20 5 5 20 5 40 V5 Z"
        fill="url(#goldGradFiligree)"
      />
      <path
        d="M8 8 C15 25 25 35 45 40 C32 45 18 38 12 28 C8 22 8 14 8 8 Z"
        fill="url(#goldGradFiligree)"
        opacity="0.8"
      />
      <circle cx="12" cy="12" r="3" fill="#faebba" />
      <path
        d="M2 2 H60 M2 2 V60"
        stroke="url(#goldGradFiligree)"
        strokeWidth="1.5"
      />
      <defs>
        <linearGradient id="goldGradFiligree" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5f0e8" />
          <stop offset="50%" stopColor="#cbb493" />
          <stop offset="100%" stopColor="#937347" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Auspicious Royal Elephant with raised trunk & golden saddle (Matching the image)
export function RoyalElephant({ flip = false, width = 110, height = 90, style }) {
  return (
    <svg
      viewBox="0 0 160 130"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: flip ? 'scaleX(-1)' : 'none',
        display: 'inline-block',
        filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.15))',
        ...style,
      }}
    >
      <defs>
        <linearGradient id="goldElephant" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fcfbfa" />
          <stop offset="35%" stopColor="#eae2d5" />
          <stop offset="70%" stopColor="#cbb493" />
          <stop offset="100%" stopColor="#937347" />
        </linearGradient>
        <linearGradient id="velvetHowdah" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1d4375" />
          <stop offset="100%" stopColor="#0c1d35" />
        </linearGradient>
      </defs>

      {/* Body Silhouette */}
      <path
        d="M130 35 C135 25 142 12 150 10 C154 8 156 12 154 18 C150 30 144 48 138 60 C136 65 138 72 142 80 C145 86 142 92 136 94 C132 95 128 92 126 86 C124 80 120 75 116 75 C108 75 105 85 103 105 C102 115 102 124 95 125 C88 126 86 118 87 105 C88 95 85 92 80 92 C75 92 72 95 71 105 C70 118 68 126 60 125 C54 124 53 115 54 102 C55 90 52 82 45 82 C38 82 34 92 33 105 C32 118 30 125 24 125 C18 125 17 116 18 102 C20 85 18 72 14 62 C10 52 14 42 22 36 C34 26 55 24 75 25 C92 26 115 28 130 35 Z"
        fill="url(#goldElephant)"
        stroke="#73552d"
        strokeWidth="1.5"
      />

      {/* Royal Headress / Mukut */}
      <path
        d="M124 25 C128 15 135 15 138 24 C140 28 136 34 130 36 C126 34 122 30 124 25 Z"
        fill="url(#velvetHowdah)"
        stroke="url(#goldElephant)"
        strokeWidth="1.2"
      />
      <circle cx="131" cy="24" r="2.5" fill="#fff" />

      {/* Royal Tusk */}
      <path
        d="M138 64 C144 65 148 58 150 50 C146 54 142 56 137 57 Z"
        fill="#ffffff"
        stroke="#cbb493"
        strokeWidth="1"
      />

      {/* Auspicious Eye */}
      <circle cx="122" cy="40" r="2" fill="#0a182d" />
      <path d="M120 37 Q124 35 126 38" stroke="#73552d" strokeWidth="1" />

      {/* Ear with Royal Gold Trim */}
      <path
        d="M112 36 C118 36 122 42 120 54 C118 64 110 70 102 68 C96 66 94 58 96 48 C98 40 104 36 112 36 Z"
        fill="url(#goldElephant)"
        stroke="#73552d"
        strokeWidth="1.5"
      />
      <path
        d="M108 44 C112 44 114 48 113 54 C112 59 107 62 103 60"
        stroke="#193963"
        strokeWidth="1.5"
      />

      {/* Royal Saddle / Jhul (Velvet with Gold Pearls) */}
      <path
        d="M52 42 Q75 36 98 42 L94 76 Q75 84 54 76 Z"
        fill="url(#velvetHowdah)"
        stroke="url(#goldElephant)"
        strokeWidth="2"
      />
      {/* Gold embroidery pattern on saddle */}
      <circle cx="75" cy="58" r="8" fill="url(#goldElephant)" opacity="0.9" />
      <circle cx="75" cy="58" r="4" fill="#193963" />
      <path d="M60 48 L90 48 M60 70 L90 70" stroke="url(#goldElephant)" strokeWidth="1.5" strokeDasharray="3 2" />

      {/* Hanging Gold Bells & Pearls */}
      <circle cx="56" cy="80" r="2" fill="url(#goldElephant)" />
      <circle cx="65" cy="82" r="2" fill="url(#goldElephant)" />
      <circle cx="75" cy="83" r="2.5" fill="url(#goldElephant)" />
      <circle cx="85" cy="82" r="2" fill="url(#goldElephant)" />
      <circle cx="92" cy="80" r="2" fill="url(#goldElephant)" />

      {/* Royal Tail */}
      <path d="M14 62 C10 70 8 82 12 90" stroke="#7a570d" strokeWidth="1.5" />
    </svg>
  );
}

// Cascading Marigold and Jasmine Hanging Garlands (Toran)
export function HangingGarlands() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '65px',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 10,
      }}
    >
      <svg
        viewBox="0 0 1200 65"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%' }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="marigoldGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffa012" />
            <stop offset="50%" stopColor="#ff7a00" />
            <stop offset="100%" stopColor="#d85200" />
          </linearGradient>
          <linearGradient id="jasmineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#faf2d9" />
          </linearGradient>
          <linearGradient id="leafGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3d7042" />
            <stop offset="100%" stopColor="#1e4222" />
          </linearGradient>
        </defs>

        {/* Hanging rope curves */}
        {[0, 200, 400, 600, 800, 1000].map((offset, i) => (
          <g key={i} transform={`translate(${offset}, 0)`}>
            {/* Swag string */}
            <path
              d="M0 0 Q100 48 200 0"
              stroke="#b58d34"
              strokeWidth="2.5"
              fill="none"
            />
            {/* Hanging Mango Leaves */}
            <path d="M20 10 C18 24 22 28 20 36 C18 28 14 24 20 10 Z" fill="url(#leafGrad)" />
            <path d="M60 22 C58 36 62 42 60 48 C58 42 54 36 60 22 Z" fill="url(#leafGrad)" />
            <path d="M100 25 C98 42 102 48 100 56 C98 48 94 42 100 25 Z" fill="url(#leafGrad)" />
            <path d="M140 22 C138 36 142 42 140 48 C138 42 134 36 140 22 Z" fill="url(#leafGrad)" />
            <path d="M180 10 C178 24 182 28 180 36 C178 28 174 24 180 10 Z" fill="url(#leafGrad)" />

            {/* Marigold Blooms on string */}
            {[20, 45, 70, 100, 130, 155, 180].map((x, j) => {
              const y = 2 + Math.sin((x / 200) * Math.PI) * 24;
              return (
                <g key={j} transform={`translate(${x}, ${y})`}>
                  <circle cx="0" cy="0" r="7" fill="url(#marigoldGrad)" />
                  <circle cx="0" cy="0" r="4.5" fill="#ffca28" />
                  <circle cx="0" cy="0" r="2" fill="#fff" />
                </g>
              );
            })}

            {/* Hanging Jasmine Drop at center */}
            <g transform="translate(100, 24)">
              <circle cx="0" cy="8" r="4" fill="url(#jasmineGrad)" stroke="#c59929" strokeWidth="0.8" />
              <circle cx="0" cy="18" r="4.5" fill="url(#marigoldGrad)" />
              <circle cx="0" cy="28" r="5" fill="#e88b99" />
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}

// Royal Mandap Pavilion Motif
export function RoyalMandap({ width = 70, height = 50 }) {
  return (
    <svg
      viewBox="0 0 100 70"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldMandap" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fcfbfa" />
          <stop offset="50%" stopColor="#cbb493" />
          <stop offset="100%" stopColor="#937347" />
        </linearGradient>
      </defs>
      {/* Dome */}
      <path
        d="M25 24 Q50 2 75 24 Z"
        fill="url(#goldMandap)"
        stroke="#102544"
        strokeWidth="1.5"
      />
      {/* Kalash on Top */}
      <circle cx="50" cy="5" r="3" fill="#f5f0e8" />
      <path d="M50 0 L50 4" stroke="#cbb493" strokeWidth="2" />
      {/* Pillars */}
      <rect x="26" y="24" width="5" height="38" fill="url(#goldMandap)" />
      <rect x="42" y="24" width="4" height="38" fill="url(#goldMandap)" />
      <rect x="54" y="24" width="4" height="38" fill="url(#goldMandap)" />
      <rect x="69" y="24" width="5" height="38" fill="url(#goldMandap)" />
      {/* Floral Toran under dome */}
      <path d="M25 26 Q50 32 75 26" stroke="#193963" strokeWidth="2" />
      {/* Base */}
      <rect x="18" y="62" width="64" height="6" rx="2" fill="url(#goldMandap)" />
    </svg>
  );
}
