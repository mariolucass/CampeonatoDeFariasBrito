"use client";

import { TableInDashboard } from "@/components/TableInDashboard";
import dynamic from "next/dynamic";

const CarrouselPageMain = dynamic(
  () => import("@/components/Carrousel").then((mod) => mod.CarrouselPageMain),
  { ssr: false }
);

const NavOptions = dynamic(
  () => import("@/components/NavOptions").then((mod) => mod.NavOptions),
  { ssr: false }
);

const WeekendPictures = dynamic(
  () => import("@/components/WeekendPictures").then((mod) => mod.WeekendPictures),
  { ssr: false }
);
import {
  downloadFicha,
  downloadRegulamento,
  downloadTabela,
} from "@/data/downloadData";
import { ContainerTransition } from "@/layouts/ContainerTransition";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Camera, Download } from "lucide-react";

// ─── Animation Variants ───────────────────────────────────────────────────────

const EASE = [0.25, 0.1, 0.25, 1] as const;

const fadeInUp: Variants = {
  // Only animate transform + opacity — GPU-composited properties.
  // filter:blur was previously here but triggers software rasterization on every frame.
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

const stagger: Variants = {
  hidden: {},
  // delayChildren:0 on hero means h1 starts animating immediately → improves LCP.
  // Sections below the fold keep a small delay via their own AnimatedSection viewport trigger.
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

const VIEWPORT = { once: true, amount: 0.2 } as const;

// ─── Section Wrapper Component ────────────────────────────────────────────────

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const AnimatedSection = ({ children, className = "", id }: SectionProps) => (
  <motion.section
    id={id}
    initial="hidden"
    whileInView="visible"
    variants={stagger}
    viewport={VIEWPORT}
    className={className}
  >
    {children}
  </motion.section>
);

// ─── Section Eyebrow + Heading ────────────────────────────────────────────────

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  eyebrowColor?: string;
  centered?: boolean;
}

const SectionHeading = ({
  eyebrow,
  title,
  eyebrowColor = "text-[#515154]",
  centered = true,
}: SectionHeadingProps) => (
  <motion.div
    variants={fadeInUp}
    className={`space-y-2 ${centered ? "text-center" : "text-left"}`}
  >
    <p className={`text-[11px] font-bold uppercase tracking-[0.18em] ${eyebrowColor}`}>
      {eyebrow}
    </p>
    <h2
      className="font-black tracking-tight text-[#1D1D1F] leading-none"
      style={{ fontSize: "clamp(1.75rem, 4vw, 2.625rem)" }}
    >
      {title}
    </h2>
  </motion.div>
);

// ─── Download Card ────────────────────────────────────────────────────────────

interface DownloadCardProps {
  href: string;
  filename: string;
  label: string;
  title: string;
  featured?: boolean;
  accentColor: string;
}

const DownloadCard = ({
  href,
  filename,
  label,
  title,
  featured = false,
  accentColor,
}: DownloadCardProps) => (
  <motion.a
    href={href}
    download={filename}
    variants={cardVariant}
    whileHover={{ y: -6, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.3, ease: EASE }}
    aria-label={`Baixar ${title} em PDF`}
    className={`
      group relative flex flex-col items-center text-center p-8 rounded-[28px] overflow-hidden
      transition-shadow duration-500 cursor-pointer
      ${
        featured
          ? "bg-white border-2 border-[var(--main)]/25 shadow-[0_8px_32px_-8px_rgba(230,94,28,0.12)]"
          : "bg-white border border-[#1D1D1F]/[0.06] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)]"
      }
    `}
    style={
      featured
        ? {
            boxShadow:
              "0 8px 32px -8px rgba(230,94,28,0.12), 0 0 0 2px rgba(230,94,28,0.18)",
          }
        : undefined
    }
  >
    {/* Hover shimmer */}
    <span className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/60 to-transparent" />

    {/* Featured glow background */}
    {featured && (
      <span className="pointer-events-none absolute inset-0 bg-[var(--main)]/[0.025] group-hover:bg-[var(--main)]/[0.05] transition-colors duration-500 rounded-[28px]" />
    )}

    {/* Icon */}
    <motion.div
      whileHover={{ scale: 1.15, rotate: -4 }}
      transition={{ duration: 0.35, ease: EASE }}
      className={`
        relative z-10 w-[60px] h-[60px] rounded-[18px] flex items-center justify-center mb-6
        shadow-[0_2px_12px_-4px_rgba(0,0,0,0.1)]
        ${featured ? "bg-[var(--main)]/10" : `bg-[${accentColor}]/10`}
      `}
      style={{ backgroundColor: `${accentColor}1A` }}
    >
      {/* Inline Lucide icon — eliminates the download.svg HTTP request */}
      <Download
        aria-hidden="true"
        className="w-[22px] h-[22px]"
        style={{ color: featured ? "#e65e1c" : accentColor }}
        strokeWidth={2}
      />
    </motion.div>

    {/* Label */}
    <p
      className="relative z-10 text-[10px] font-bold uppercase tracking-[0.16em] mb-1.5"
      style={{ color: featured ? "#c2410c" : "#515154" }}
    >
      {label}
    </p>

    {/* Title */}
    <h3 className="relative z-10 text-[19px] font-bold text-[#1D1D1F] mb-6 leading-tight">
      {title}
    </h3>

    {/* CTA */}
    <span
      className="relative z-10 mt-auto flex items-center gap-1 text-[13px] font-bold opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
      style={{ color: featured ? "var(--main)" : accentColor }}
    >
      Baixar PDF{" "}
      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
    </span>
  </motion.a>
);

// ─── Page Component ───────────────────────────────────────────────────────────

const Home = () => (
  <ContainerTransition>
    <main
      className="flex min-h-screen flex-col items-center overflow-x-hidden bg-[#F5F5F7] font-sans text-[#1D1D1F] selection:bg-[var(--main)]/20"
      role="main"
    >
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative w-full pt-20 pb-24 lg:pt-32 lg:pb-36 overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Ambient glow orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[-15%] left-1/2 -translate-x-1/2 w-[120vw] max-w-[1100px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(230,94,28,0.09) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-[-10%] w-[40vw] max-w-[500px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,134,74,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Noise texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.018] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 max-w-7xl mx-auto"
        >
          {/* Season badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#1D1D1F]/[0.07] text-[#1D1D1F] text-[11px] font-bold uppercase tracking-[0.16em] shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)]">
              <span
                aria-hidden="true"
                className="w-[7px] h-[7px] rounded-full bg-[var(--main)]"
                style={{ boxShadow: "0 0 0 3px rgba(230,94,28,0.2), 0 0 8px rgba(230,94,28,0.4)" }}
              />
              Temporada 2023
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            id="hero-heading"
            variants={fadeInUp}
            className="font-black text-center leading-[0.9] uppercase select-none"
            style={{
              fontSize: "clamp(2.6rem, 9.5vw, 6.5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            <span className="block text-[#1D1D1F]">Campeonato</span>
            <span
              className="block mt-1"
              style={{
                background: "linear-gradient(135deg, #e65e1c 0%, #f0803e 50%, #e65e1c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Fariasbritense
            </span>
            <span className="block text-[#1D1D1F] mt-1">de Futebol</span>
          </motion.h1>

          {/* Divider with label */}
          <motion.div
            variants={fadeIn}
            className="flex items-center gap-4 w-full max-w-sm"
            aria-hidden="true"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#1D1D1F]/10" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#515154] shrink-0">
              Classificação Geral
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#1D1D1F]/10" />
          </motion.div>

          {/* Standings table */}
          <motion.div
            variants={fadeInUp}
            className="w-full max-w-7xl"
          >
            <div className="bg-white/65 backdrop-blur-3xl rounded-[28px] border border-[#1D1D1F]/[0.06] shadow-[0_16px_56px_-16px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.5)_inset] overflow-hidden">
              <TableInDashboard />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── HIGHLIGHTS CAROUSEL ───────────────────────────────────────────────── */}
      <AnimatedSection
        className="w-full bg-white py-24 lg:py-32 border-y border-[#1D1D1F]/[0.04]"
        id="destaques"
        aria-labelledby="carousel-heading"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-12">
          <SectionHeading
            eyebrow="Melhores Momentos"
            title="Destaques da Rodada"
            eyebrowColor="text-[#c2410c]"
          />
          <motion.div variants={fadeInUp} className="w-full">
            <CarrouselPageMain />
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ── DOWNLOADS ─────────────────────────────────────────────────────────── */}
      <AnimatedSection
        className="relative w-full bg-[#F5F5F7] py-24 lg:py-32 overflow-hidden"
        id="downloads"
        aria-labelledby="downloads-heading"
      >
        {/* Section glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[800px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,134,74,0.05) 0%, transparent 65%)",
            filter: "blur(50px)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center gap-14">
          {/* Section header */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center text-center gap-6"
          >
            <div className="w-[52px] h-[52px] rounded-[16px] bg-white flex items-center justify-center border border-[#1D1D1F]/[0.06] shadow-[0_4px_16px_-6px_rgba(0,0,0,0.08)]">
              <Download
                className="w-[22px] h-[22px] text-[#515154]"
                strokeWidth={2}
                aria-hidden="true"
              />
            </div>
            <div className="space-y-2">
              <h2
                id="downloads-heading"
                className="font-black tracking-tight text-[#1D1D1F] leading-none"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.625rem)" }}
              >
                Baixe e se informe.
              </h2>
              <p className="text-[16px] text-[#515154] font-medium leading-relaxed max-w-md">
                Acesso rápido a todos os documentos, regras e tabelas oficiais
                do campeonato.
              </p>
            </div>
          </motion.div>

          {/* Download cards grid */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-5xl"
          >
            <DownloadCard
              href={downloadRegulamento}
              filename="regulamento.pdf"
              label="Documento"
              title="Regulamento"
              accentColor="#22864a"
            />
            <DownloadCard
              href={downloadFicha}
              filename="ficha.pdf"
              label="Formulário"
              title="Ficha de Inscrição"
              featured
              accentColor="#e65e1c"
            />
            <DownloadCard
              href={downloadTabela}
              filename="tabela.pdf"
              label="Cronograma"
              title="Tabela de Jogos"
              accentColor="#22864a"
            />
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ── NAVIGATION ────────────────────────────────────────────────────────── */}
      <AnimatedSection
        className="w-full bg-white py-24 lg:py-32 border-y border-[#1D1D1F]/[0.04]"
        id="navegacao"
        aria-labelledby="nav-heading"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-12">
          <SectionHeading
            eyebrow="Navegação Rápida"
            title="Explore o Campeonato"
          />
          <motion.div variants={fadeInUp} className="w-full">
            <NavOptions />
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ── PHOTO GALLERY ─────────────────────────────────────────────────────── */}
      <AnimatedSection
        className="w-full bg-[#F5F5F7] py-24 lg:py-32"
        id="fotos"
        aria-labelledby="gallery-heading"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10">
          {/* Gallery header — title left, icon right */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 px-1"
          >
            <div className="text-center sm:text-left">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--main)] mb-2">
                Mural Fotográfico
              </p>
              <h2
                id="gallery-heading"
                className="font-black tracking-tight text-[#1D1D1F] leading-none"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.625rem)" }}
              >
                Fotos da Rodada
              </h2>
            </div>

            <motion.div
              whileHover={{ scale: 1.08, rotate: 5 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-white border border-[#1D1D1F]/[0.06] shadow-[0_4px_16px_-6px_rgba(0,0,0,0.08)] text-[var(--main)]"
              aria-hidden="true"
            >
              <Camera className="w-5 h-5" strokeWidth={2} />
            </motion.div>
          </motion.div>

          {/* Gallery container */}
          <motion.div
            variants={fadeInUp}
            className="w-full bg-white/70 backdrop-blur-xl p-3 rounded-[28px] border border-[#1D1D1F]/[0.05] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.06)]"
          >
            <WeekendPictures />
          </motion.div>
        </div>
      </AnimatedSection>
    </main>
  </ContainerTransition>
);

export default Home;
