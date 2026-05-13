"use client";

import { navOptionsList } from "@/data/navOptions";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  BarChart2,
  ScrollText,
  FileText,
  Users,
  Crosshair,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { ElementType } from "react";

// ─── Icon Map ────────────────────────────────────────────────────────────────
// Maps each route to a Lucide icon component

const ICON_MAP: Record<string, ElementType> = {
  "/tabela": CalendarDays,
  "/classificacao": BarChart2,
  "/regulamento": FileText,
  "/sumulas": ScrollText,
  "/equipes": Users,
  "/artilharia": Crosshair,
};

// ─── Color Palette ────────────────────────────────────────────────────────────

// Alternating between brand orange and brand green
const ACCENT: [string, string] = ["var(--main)", "var(--tertiary)"];

// ─── Animation Variants ───────────────────────────────────────────────────────

const EASE = [0.25, 0.1, 0.25, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.04 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE },
  },
};

// ─── NavOptions Component ─────────────────────────────────────────────────────

export const NavOptions = () => {
  const router = useRouter();

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 w-full max-w-5xl mx-auto"
      role="list"
    >
      {navOptionsList.map((item, index) => {
        const accent = ACCENT[index % 2];
        const Icon = ICON_MAP[item.page] ?? CalendarDays;
        const isMain = index % 2 === 0;

        return (
          <motion.li
            key={item.page}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.35, ease: EASE }}
            onClick={() => router.push(item.page)}
            role="listitem"
            aria-label={`Navegar para ${item.title}`}
            className="group relative flex flex-col justify-between min-h-[188px] lg:min-h-[208px] p-6 md:p-7 bg-white rounded-[26px] border border-[#1D1D1F]/[0.06] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] cursor-pointer overflow-hidden select-none"
          >
            {/* ── Ambient glow on hover ──────────────────────────────────── */}
            <div
              aria-hidden="true"
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ backgroundColor: `${isMain ? "#e65e1c" : "#22864a"}` }}
              // opacity controlled via Tailwind opacity-0/opacity-100
            />
            {/* Softer inner surface tint on hover */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[26px]"
              style={{
                background: `radial-gradient(ellipse at top right, ${isMain ? "rgba(230,94,28,0.055)" : "rgba(34,134,74,0.05)"} 0%, transparent 70%)`,
              }}
            />

            {/* ── Icon squircle ──────────────────────────────────────────── */}
            <motion.div
              whileHover={{ scale: 1.12, rotate: -6 }}
              transition={{ duration: 0.38, ease: EASE }}
              aria-hidden="true"
              className="relative z-10 w-[52px] h-[52px] rounded-[16px] flex items-center justify-center shrink-0 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] transition-shadow duration-300 group-hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.12)]"
              style={{ backgroundColor: `${isMain ? "rgba(230,94,28,0.1)" : "rgba(34,134,74,0.1)"}` }}
            >
              <Icon
                className="w-[22px] h-[22px] transition-colors duration-300"
                style={{ color: accent }}
                strokeWidth={1.75}
              />
            </motion.div>

            {/* ── Text content ───────────────────────────────────────────── */}
            <div className="relative z-10 flex flex-col gap-1.5 mt-auto pr-8">
              <h3 className="text-[16px] md:text-[17px] font-bold text-[#1D1D1F] tracking-tight leading-tight">
                {item.title}
              </h3>
              <p className="text-[13px] font-medium text-[#515154] leading-relaxed line-clamp-2">
                {item.description}
              </p>
            </div>

            {/* ── Arrow CTA ──────────────────────────────────────────────── */}
            <div
              aria-hidden="true"
              className="absolute bottom-6 right-6 md:bottom-7 md:right-7 flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300"
                style={{ backgroundColor: isMain ? "rgba(230,94,28,0.1)" : "rgba(34,134,74,0.1)" }}
              >
                <ArrowRight
                  className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{ color: accent }}
                  strokeWidth={2.5}
                />
              </motion.div>
            </div>

            {/* ── Bottom accent line ─────────────────────────────────────── */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-b-[26px]"
              style={{
                background: `linear-gradient(90deg, transparent, ${isMain ? "#e65e1c" : "#22864a"}, transparent)`,
                opacity: 0.5,
              }}
            />
          </motion.li>
        );
      })}
    </motion.ul>
  );
};
