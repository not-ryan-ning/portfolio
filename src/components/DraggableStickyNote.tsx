"use client";

import { useState, useRef, useEffect } from "react";

interface DraggableStickyNoteProps {
  children: React.ReactNode;
}

export default function DraggableStickyNote({
  children,
}: DraggableStickyNoteProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [bounds, setBounds] = useState({ maxX: 0, minX: 0, maxY: 0, minY: 0 });
  const noteRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Calculate boundaries based on hero section
    if (noteRef.current) {
      const heroSection = noteRef.current.closest("section");
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const noteRect = noteRef.current.getBoundingClientRect();

        setBounds({
          minX: -noteRect.left + heroRect.left,
          maxX: heroRect.right - noteRect.right,
          minY: -noteRect.top + heroRect.top,
          maxY: heroRect.bottom - noteRect.bottom,
        });
      }
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = Math.max(
          bounds.minX,
          Math.min(e.clientX - dragStart.x, bounds.maxX)
        );
        const newY = Math.max(
          bounds.minY,
          Math.min(e.clientY - dragStart.y, bounds.maxY)
        );

        setPosition({
          x: newX,
          y: newY,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart, bounds]);

  return (
    <div
      ref={noteRef}
      className="sticky-note"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: isDragging ? "grabbing" : "grab",
        transition: isDragging ? "none" : "transform 0.2s ease",
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
}
