"use client";

import { Schedule } from "@/components/Schedule";
import { ContainerTransition } from "@/layouts/ContainerTransition";

const legendItems = [
  { abbr: "POS", label: "Posição" },
  { abbr: "PJ", label: "Partidas Jogadas" },
  { abbr: "V", label: "Vitória" },
  { abbr: "VP", label: "Vitória por Penâltis" },
  { abbr: "DP", label: "Derrota por Penâltis" },
  { abbr: "D", label: "Derrotas" },
  { abbr: "GP", label: "Gols Pró (Marcados)" },
  { abbr: "GC", label: "Gols Contra (Sofridos)" },
  { abbr: "SG", label: "Saldo de Gols" },
  { abbr: "P", label: "Pontos" },
];

const Legend = () => (
  <div className="w-10/12 mx-auto mt-4 flex flex-wrap gap-x-4 gap-y-2">
    {legendItems.map(({ abbr, label }) => (
      <span key={abbr} className="text-xs opacity-60">
        <span className="font-black opacity-100">{abbr}</span> — {label}
      </span>
    ))}
  </div>
);

const phases = [
  {
    tag: "2F",
    title: "Classificação — 2ª Fase",
    subtitle:
      "Grupo único · Os 8 mais bem classificados avançam para as quartas",
    groupLabel: "Grupo Único · 2ª Fase",
    component: <Schedule second />,
    note: "* Com o fim da primeira fase os pontos, gols e afins são zerados. Os 8 mais bem classificados (grifados em verde) avançam para as quartas de final.",
  },
  {
    tag: "1F",
    title: "Classificação — 1ª Fase",
    subtitle: "Grupo único · Os 16 melhores avançam",
    groupLabel: "Grupo Único · 1ª Fase",
    component: <Schedule />,
    note: "* Os 16 times mais bem classificados avançarão para a segunda fase. Os 5 últimos (grifados em vermelho) serão eliminados.",
  },
];

const ClassificacaoPage = () => (
  <ContainerTransition>
    <main className="flex flex-col items-center min-h-screen">
      <section className="w-full bg-main py-10 lg:py-14 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-tertiary via-white/20 to-tertiary/40" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-white text-center lg:text-left">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/40 mb-2">
            Grupo Único · Campo Municipal de Farias Brito
          </p>
          <h1
            className="font-black uppercase leading-none"
            style={{
              fontSize: "clamp(2rem, 6vw, 4rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Classificação
          </h1>
        </div>
      </section>

      {/* ── PHASE SECTIONS ── */}
      <div className="w-full max-w-5xl mx-auto px-4 py-10 flex flex-col gap-14">
        {phases.map(({ tag, title, subtitle, groupLabel, component, note }) => (
          <section key={tag} className="flex flex-col gap-0">
            {/* Phase header */}
            <div className="flex items-center gap-4 mb-1">
              <span className="flex-shrink-0 bg-main text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg">
                {tag}
              </span>
              <h2 className="font-black uppercase text-xl lg:text-2xl tracking-tight">
                {title}
              </h2>
              <div className="flex-1 h-px bg-current opacity-10" />
            </div>

            <p className="text-xs opacity-40 font-medium uppercase tracking-widest mb-4 pl-1">
              {subtitle}
            </p>

            {/* Group label bar */}
            <div className="w-10/12 mx-auto flex items-center gap-3 mb-2">
              <div className="flex-1 h-px bg-current opacity-10" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] opacity-30">
                {groupLabel}
              </span>
              <div className="flex-1 h-px bg-current opacity-10" />
            </div>

            {/* Table */}
            <div className="rounded-xl overflow-hidden border border-current border-opacity-[0.08]">
              {component}
            </div>

            {/* Note */}
            <p className="w-10/12 mx-auto mt-3 text-xs lg:text-lg font-semibold opacity-50 text-justify italic">
              {note}
            </p>

            {/* Legend */}
            <Legend />
          </section>
        ))}
      </div>
    </main>
  </ContainerTransition>
);

export default ClassificacaoPage;
