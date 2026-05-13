"use client";

import { useEffect, useState } from "react";

export const ArrowFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`
        fixed bottom-8 right-6 z-50
        transition-all duration-300 ease-out
        ${isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Voltar ao topo"
        className={`
          relative flex items-center justify-center
          w-12 h-12 lg:w-14 lg:h-14
          bg-main rounded-2xl
          shadow-lg shadow-main/30
          transition-all duration-200
          hover:-translate-y-1 hover:shadow-xl hover:shadow-main/40
          active:scale-95 active:translate-y-0
          overflow-hidden
        `}
      >
        {/* Glare */}
        <div className="pointer-events-none absolute -top-4 -right-4 w-14 h-14 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100" />

        {/* Arrow SVG — inline, no external asset needed */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`
            w-5 h-5 transition-transform duration-200
            ${isHovered ? "-translate-y-0.5" : "translate-y-0"}
          `}
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>

        {/* Ripple border on hover */}
        <span
          className={`
            pointer-events-none absolute inset-0 rounded-2xl border-2 border-white/30
            transition-opacity duration-200
            ${isHovered ? "opacity-100" : "opacity-0"}
          `}
        />
      </button>

      {/* Tooltip */}
      <span
        className={`
          absolute bottom-full right-0 mb-2
          text-[10px] font-black uppercase tracking-widest
          bg-main text-white px-2.5 py-1 rounded-lg whitespace-nowrap
          shadow-md shadow-main/20
          transition-all duration-200
          ${isHovered ? "opacity-100 -translate-y-0.5" : "opacity-0 translate-y-1"}
        `}
      >
        Voltar ao topo
      </span>
    </div>
  );
};
