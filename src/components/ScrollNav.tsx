"use client";

import { useState, useEffect } from "react";

export default function ScrollNav() {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    // Observe the name in hero section
    const heroName = document.querySelector(".hero-name");

    if (!heroName) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show name in nav when hero name scrolls past the nav bar (64px from top)
        setShowName(!entry.isIntersecting);
      },
      {
        rootMargin: "-64px 0px 0px 0px", // Trigger when name goes under 64px nav bar
        threshold: 0,
      }
    );

    observer.observe(heroName);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-0 z-50 h-16 flex items-center justify-center">
      <nav className="nav-glass w-full h-full flex items-center justify-between px-6 md:px-12 border-l border-r border-b border-border">
        {/* Name - appears on scroll */}
        <div
          className={`text-xl font-semibold transition-opacity duration-300 ${
            showName ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          Ryan Ning
        </div>

        {/* Nav Links - always centered */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
          <a
            href="#"
            className="label-text text-md font-medium hover:opacity-70 transition-opacity"
          >
            HOME
          </a>
          <a
            href="#work"
            className="label-text font-medium hover:opacity-70 transition-opacity"
          >
            WORK
          </a>
          <a
            href="#contact"
            className="label-text font-medium hover:opacity-70 transition-opacity"
          >
            CONTACT
          </a>
        </div>

        {/* Spacer for symmetry */}
        <div className="w-[100px]"></div>
      </nav>
    </div>
  );
}
