'use client';

import { useState } from 'react';

export default function VineToggle() {
  const [showVines, setShowVines] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setShowVines(!showVines)}
        className="fixed bottom-20 right-8 z-40 w-12 h-12 rounded-full simple-glass flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Toggle vines"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className={`transition-colors ${showVines ? 'text-green-600' : 'text-gray-600'}`}
        >
          <path
            d="M10 2C10 2 8 4 8 7C8 9 9 10 10 10C10 10 12 10 12 13C12 16 10 18 10 18M10 10C10 10 12 8 14 8C16 8 18 10 18 10M10 10C10 10 8 12 6 12C4 12 2 10 2 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Vines - scroll with page */}
      {showVines && (
        <>
          <div className="vine-left" />
          <div className="vine-right" />
        </>
      )}
    </>
  );
}

