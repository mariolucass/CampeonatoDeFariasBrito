"use client";

import { Strikers } from "@/components/Strikers";
import { ContainerTransition } from "@/layouts/ContainerTransition";

const ArtilhariaPage = () => (
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

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-white text-center lg:text-left">
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
            Artilharia
          </h1>
        </div>
      </section>

      <div className="w-full max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-main text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg flex-shrink-0">
            ⚽
          </span>
          <h2 className="font-black uppercase text-lg tracking-tight">
            Ranking de Artilheiros
          </h2>
          <div className="flex-1 h-px bg-current opacity-10" />
        </div>

        <div className="rounded-xl border border-current border-opacity-[0.08] overflow-hidden">
          <Strikers />
        </div>
      </div>
    </main>
  </ContainerTransition>
);

export default ArtilhariaPage;
