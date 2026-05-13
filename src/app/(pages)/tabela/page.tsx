"use client";

import { Table } from "@/components/Table";
import { downloadTabela } from "@/data/downloadData";
import { ContainerTransition } from "@/layouts/ContainerTransition";
import Image from "next/image";
import DownloadIcon from "../../../../public/assets/download.svg";

const phases = [
  { label: "Final", tag: "FIN", component: <Table final /> },
  { label: "Semifinal", tag: "SF", component: <Table semifinals /> },
  { label: "Quartas de Final", tag: "QF", component: <Table quarterfinals /> },
  { label: "2ª Fase", tag: "2F", component: <Table second /> },
  {
    label: "1ª Fase",
    tag: "1F",
    component: <Table />,
    note: "Ao decorrer do campeonato serão adicionados os jogos referentes à 2ª Fase e mata-mata.",
  },
];

const TabelaPage = () => (
  <ContainerTransition>
    <main className="flex flex-col items-center min-h-screen">
      {/* ── PAGE HEADER ── */}
      <section className="w-full bg-main py-10 lg:py-14 relative overflow-hidden">
        {/* Diagonal texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
            backgroundSize: "18px 18px",
          }}
        />
        {/* Accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-tertiary via-white/20 to-tertiary/40" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-white text-center lg:text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/40 mb-2">
              1ª Divisão · Campo Municipal de Farias Brito
            </p>
            <h1
              className="font-black uppercase leading-none text-white"
              style={{
                fontSize: "clamp(2rem, 6vw, 4rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Tabela de Jogos
            </h1>
          </div>

          <a
            href={downloadTabela}
            download="tabela.pdf"
            className="group flex-shrink-0"
          >
            <div className="flex items-center gap-3 bg-white/10 hover:bg-tertiary border border-white/20 hover:border-tertiary text-white rounded-xl px-6 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              <Image src={DownloadIcon} alt="Download" className="w-5 h-5" />
              <span className="text-lg font-black uppercase tracking-[0.15em]">
                Baixar Tabela
              </span>
            </div>
          </a>
        </div>
      </section>
      {/* ── PHASE SECTIONS ── */}
      <div className="w-full max-w-5xl mx-auto px-4 py-10 flex flex-col gap-12">
        {phases.map(({ label, tag, component, note }) => (
          <section key={tag} className="flex flex-col gap-0">
            {/* Phase header */}
            <div className="flex items-center gap-4 mb-4">
              {/* Tag badge */}
              <span className="flex-shrink-0 bg-main text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg">
                {tag}
              </span>

              <h2 className="font-black uppercase text-xl lg:text-2xl tracking-tight">
                {label}
              </h2>

              {/* Ruled line */}
              <div className="flex-1 h-px bg-current opacity-10" />
            </div>

            {/* Table */}
            <div className="rounded-xl overflow-hidden border border-current border-opacity-[0.08]">
              {component}
            </div>

            {/* Optional note */}
            {note && (
              <p className="mt-3 text-center text-xs lg:text-lg opacity-40 font-medium italic px-4">
                {note}
              </p>
            )}
          </section>
        ))}
      </div>
    </main>
  </ContainerTransition>
);

export default TabelaPage;
