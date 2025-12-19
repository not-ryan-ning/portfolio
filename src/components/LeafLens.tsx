'use client';

import { useState, useEffect, useRef } from 'react';

export default function LeafLens() {
  const [leafPosition, setLeafPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isInZone, setIsInZone] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [bounds, setBounds] = useState({ maxX: 0, minX: 0, maxY: 0, minY: 0 });
  const [initialized, setInitialized] = useState(false);
  const leafRef = useRef<HTMLDivElement>(null);
  const zoneRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Calculate boundaries and initial position based on hero section
    const heroSection = document.querySelector('.grid-section') as HTMLElement;
    if (heroSection && zoneRef.current && !initialized) {
      heroRef.current = heroSection;
      const heroRect = heroSection.getBoundingClientRect();
      const zoneRect = zoneRef.current.getBoundingClientRect();
      
      // Position leaf to the left of the dotted zone
      const leafX = zoneRect.left - heroRect.left - 80; // 80px to the left of zone
      const leafY = zoneRect.top - heroRect.top;
      
      setLeafPosition({ x: leafX, y: leafY });
      
      setBounds({
        minX: 0,
        maxX: heroRect.width - 60,
        minY: 0,
        maxY: heroRect.height - 60,
      });
      
      setInitialized(true);
    }
  }, [initialized]);

  const checkIfInZone = (x: number, y: number) => {
    if (!zoneRef.current || !heroRef.current) return false;
    const zone = zoneRef.current.getBoundingClientRect();
    const hero = heroRef.current.getBoundingClientRect();
    
    // Convert absolute coordinates to relative
    const relX = x + hero.left;
    const relY = y + hero.top;
    
    return (
      relX >= zone.left &&
      relX <= zone.right &&
      relY >= zone.top &&
      relY <= zone.bottom
    );
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!leafRef.current || !heroRef.current) return;
    const leafRect = leafRef.current.getBoundingClientRect();
    const heroRect = heroRef.current.getBoundingClientRect();
    
    // Calculate offset relative to hero section
    const offsetX = e.clientX - leafRect.left;
    const offsetY = e.clientY - leafRect.top;
    
    setDragOffset({
      x: offsetX,
      y: offsetY,
    });
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

      if (isDragging && heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        
        // Calculate position relative to hero section
        const relativeX = e.clientX - heroRect.left - dragOffset.x;
        const relativeY = e.clientY - heroRect.top - dragOffset.y;
        
        const newX = Math.max(bounds.minX, Math.min(relativeX, bounds.maxX));
        const newY = Math.max(bounds.minY, Math.min(relativeY, bounds.maxY));
        
        setLeafPosition({ x: newX, y: newY });
        
        // Check if leaf center is in zone
        const leafCenterX = newX + 30;
        const leafCenterY = newY + 30;
        setIsInZone(checkIfInZone(leafCenterX, leafCenterY));
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset, bounds]);

  return (
    <>
      {/* Dotted Zone with CTA - positioned away from sticky note */}
      <div 
        ref={zoneRef}
        className="flex flex-col items-center"
        style={{
          position: 'absolute',
          bottom: '8rem',
          right: '6rem',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: '60px',
            height: '60px',
            border: '2px dashed rgba(0, 0, 0, 0.15)',
            borderRadius: '8px',
          }}
        />
        <p className="text-[10px] text-gray-400 text-center mt-2 whitespace-nowrap">
          drag leaf here →
        </p>
      </div>

      {/* Draggable Leaf Sticker - bounded to hero, below nav */}
      <div
        ref={leafRef}
        onMouseDown={handleMouseDown}
        style={{
          position: 'absolute',
          left: `${leafPosition.x}px`,
          top: `${leafPosition.y}px`,
          width: '60px',
          height: '60px',
          cursor: isDragging ? 'grabbing' : 'grab',
          zIndex: 10,
          transition: isDragging ? 'none' : 'transform 0.2s ease',
        }}
        className="leaf-sticker"
      >
        <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
          <path
            d="M30 10C30 10 20 15 15 25C10 35 15 45 25 48C35 51 45 45 48 35C51 25 45 15 35 12C32 11 30 10 30 10Z"
            fill="#22c55e"
            stroke="#16a34a"
            strokeWidth="2"
          />
          <path
            d="M30 10C30 10 25 20 25 30C25 35 27 40 30 42"
            stroke="#16a34a"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Circular Lens - shows vines when in zone (bigger) */}
      {isInZone && (
        <div
          className="vine-lens"
          style={{
            position: 'fixed',
            left: `${cursorPosition.x - 200}px`,
            top: `${cursorPosition.y - 200}px`,
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 50,
            border: '3px solid rgba(34, 197, 94, 0.5)',
            boxShadow: '0 0 30px rgba(34, 197, 94, 0.3), inset 0 0 20px rgba(34, 197, 94, 0.1)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '100vw',
              height: '100vh',
              left: `${-cursorPosition.x + 200}px`,
              top: `${-cursorPosition.y + 200}px`,
            }}
          >
            <div className="vine-left" style={{ opacity: 1 }} />
            <div className="vine-right" style={{ opacity: 1 }} />
          </div>
        </div>
      )}
    </>
  );
}

