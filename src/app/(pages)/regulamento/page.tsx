"use client";

import { downloadRegulamento } from "@/data/downloadData";
import { ContainerTransition } from "@/layouts/ContainerTransition";
import { Regulamento } from "@/layouts/Regulamento";
import Image from "next/image";
import DownloadIcon from "../../../../public/assets/download.svg";

const RegulamentoPage = () => (
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

        <div className="relative z-10 max-w-3xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6 text-white">
          <div className="text-center lg:text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/40 mb-2">
              Campeonato Municipal · 2023
            </p>
            <h1
              className="font-black uppercase leading-none"
              style={{
                fontSize: "clamp(2rem, 6vw, 4rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Regulamento
            </h1>
          </div>

          {/* Download button */}
          <a
            href={downloadRegulamento}
            download="regulamento.pdf"
            className="flex-shrink-0"
          >
            <div className="flex items-center gap-3 bg-white/10 hover:bg-tertiary border border-white/20 hover:border-tertiary text-white rounded-xl px-6 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              <Image src={DownloadIcon} alt="Download" className="w-5 h-5" />
              <span className="text-lg font-black uppercase tracking-[0.15em]">
                Baixar PDF
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="w-full max-w-3xl mx-auto px-4 py-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="flex-shrink-0 bg-main text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg">
            DOC
          </span>
          <span className="font-black uppercase text-lg tracking-tight">
            Documento Oficial
          </span>
          <div className="flex-1 h-px bg-current opacity-10" />
        </div>

        {/* Scrollable regulamento */}
        <div className="rounded-xl border border-current border-opacity-[0.08] overflow-hidden">
          <div className="overflow-y-auto max-h-[65vh] lg:max-h-[680px] px-6 py-6 lg:px-8 lg:py-8">
            <Regulamento />
          </div>
        </div>

        {/* Bottom hint */}
        <p className="mt-3 text-center text-xs opacity-30 font-medium tracking-wide">
          Role para ler o regulamento completo · ou baixe o PDF acima
        </p>
      </section>
    </main>
  </ContainerTransition>
);

export default RegulamentoPage;
