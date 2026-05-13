"use client";

import { sumulasData } from "@/data/sumulas";
import { ContainerTransition } from "@/layouts/ContainerTransition";
import { handleDateWithMoment } from "@/utils/handleDate";
import "moment/locale/pt-br";
import Image from "next/image";

const SumulasPage = () => {
  const sumulasDays = Object.keys(sumulasData);

  return (
    <ContainerTransition>
      <main className="flex flex-col items-center min-h-screen">
        {/* ── BANNER ── */}

        {/* ── PAGE HEADER ── */}
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
              Campeonato Municipal · 2023
            </p>
            <h1
              className="font-black uppercase leading-none"
              style={{
                fontSize: "clamp(2rem, 6vw, 4rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Súmulas
            </h1>
          </div>
        </section>

        {/* ── DAYS ── */}
        <div className="w-full max-w-5xl mx-auto px-4 py-10 flex flex-col gap-14">
          {[...sumulasDays].reverse().map((day) => {
            const matches = sumulasData[day as keyof typeof sumulasData]!;

            return (
              <section key={day} className="flex flex-col gap-6">
                {/* Day header */}
                <div className="flex items-center gap-4">
                  <span className="flex-shrink-0 bg-main text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg">
                    DIA
                  </span>
                  <h2 className="font-black uppercase text-xl lg:text-2xl tracking-tight">
                    {day.toUpperCase()}
                  </h2>
                  <div className="flex-1 h-px bg-current opacity-10" />
                </div>

                {/* Match cards */}
                <ul className="flex flex-col gap-6">
                  {matches.map((match, index) => {
                    const isPenalty =
                      match.goals_principal === match.goals_visitant;
                    const isCariutabaCorrection =
                      match.principal === "CARIUTABA" &&
                      match.visitante === "JUVENTUDE";

                    return (
                      <li
                        key={index}
                        className="flex flex-col bg-white rounded-[32px] border border-[#1D1D1F]/5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] overflow-hidden mb-8"
                      >
                        {/* --- CABEÇALHO DO JOGO (Estilo Apple Sports) --- */}
                        <div className="flex flex-col items-center justify-center pt-8 pb-6 px-4 md:px-8 bg-[#F5F5F7]/60 border-b border-[#1D1D1F]/5">
                          {/* Placar e Equipes */}
                          <div className="flex items-center justify-center gap-4 md:gap-8 w-full max-w-2xl">
                            <span className="flex-1 text-right text-[16px] md:text-[20px] font-bold text-[#1D1D1F] uppercase tracking-tight truncate">
                              {match.principal}
                            </span>

                            <div className="shrink-0 flex items-center justify-center gap-3">
                              <span className="text-[32px] md:text-[40px] font-black text-[#1D1D1F] tabular-nums tracking-tighter leading-none">
                                {match.goals_principal}
                              </span>
                              <span className="text-[20px] md:text-[24px] font-black text-[#515154] opacity-30 pb-1">
                                ×
                              </span>
                              <span className="text-[32px] md:text-[40px] font-black text-[#1D1D1F] tabular-nums tracking-tighter leading-none">
                                {match.goals_visitant}
                              </span>
                            </div>

                            <span className="flex-1 text-left text-[16px] md:text-[20px] font-bold text-[#1D1D1F] uppercase tracking-tight truncate">
                              {match.visitante}
                            </span>
                          </div>

                          {/* Metadados (Pills) */}
                          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-5">
                            {isPenalty && (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#1D1D1F]/5 shadow-sm text-[11px] font-bold uppercase tracking-widest text-[#1D1D1F]">
                                <span className="text-[#515154]">
                                  Pênaltis:
                                </span>
                                <span className="tabular-nums">
                                  {match.goals_penalty_principal} –{" "}
                                  {match.goals_penalty_visitant}
                                </span>
                              </span>
                            )}
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest text-[#515154]">
                              {handleDateWithMoment(match.date)}
                            </span>
                          </div>
                        </div>

                        {/* --- CORPO (Súmulas e Avisos) --- */}
                        <div className="flex flex-col p-6 md:p-8 gap-6 bg-white">
                          {/* Aviso de Correção (Estilo Callout iOS) */}
                          {isCariutabaCorrection && (
                            <div className="flex items-start gap-3 bg-[#0071e3]/[0.04] border border-[#0071e3]/10 rounded-[20px] p-4 md:p-5">
                              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0071e3]/10 shrink-0 mt-0.5">
                                <span className="text-[#0071e3] font-bold text-[12px]">
                                  !
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0071e3] mb-1">
                                  Correção de Súmula
                                </span>
                                <p className="text-[14px] text-[#1D1D1F] font-medium leading-relaxed">
                                  O autor do segundo gol da equipe do Cariutaba
                                  foi marcado por Silvestre dos Santos (07).
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Galeria de Fotos da Súmula */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                            <div className="relative rounded-[24px] overflow-hidden border border-[#1D1D1F]/10 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.06)] bg-[#F5F5F7] group">
                              <Image
                                src={match.image1}
                                alt="Súmula Página 1"
                                width={500}
                                height={700}
                                className="object-cover w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                              />
                              {/* Overlay sutil para dar efeito de papel escaneado */}
                              <div className="absolute inset-0 ring-1 ring-inset ring-[#1D1D1F]/5 rounded-[24px] pointer-events-none" />
                            </div>

                            <div className="relative rounded-[24px] overflow-hidden border border-[#1D1D1F]/10 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.06)] bg-[#F5F5F7] group">
                              <Image
                                src={match.image2}
                                alt="Súmula Página 2"
                                width={500}
                                height={700}
                                className="object-cover w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                              />
                              <div className="absolute inset-0 ring-1 ring-inset ring-[#1D1D1F]/5 rounded-[24px] pointer-events-none" />
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>
      </main>
    </ContainerTransition>
  );
};

export default SumulasPage;
