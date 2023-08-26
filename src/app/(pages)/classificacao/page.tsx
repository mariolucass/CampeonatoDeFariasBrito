"use client";

import { Schedule } from "@/components/Schedule";
import { SectionTitle } from "@/components/SectionTitle";
import { ContainerTransition } from "@/layouts/ContainerTransition";

const ClassificacaoPage = () => (
  <ContainerTransition>
    <main className="flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center bg-bgtwo">
        <SectionTitle />
      </div>

      <section className="flex flex-col w-3/4 m-auto justify-center items-center p-4 max-w-5xl">
        <h1 className="text-2xl font-bold">CLASSIFICAÇÃO - 1ª DIVISÃO</h1>

        <h4 className="text-sm">
          (O campeonato será realizado em grupo único)
        </h4>
      </section>

      <section className="flex w-full flex-col max-w-5xl mb-8">
        <h1 className="flex bg-main text-2xl w-10/12 m-auto justify-center items-center text-white py-1">
          GRUPO ÚNICO - 1ª FASE
        </h1>

        <Schedule />

        <h4 className="w-10/12 m-auto pt-4 text-left">
          <span className="font-bold">POS:</span> Posição
          <span className="font-bold"> PJ:</span> Partidas Jogadas
          <span className="font-bold"> V:</span> Vitória
          <span className="font-bold"> VP:</span> Vitória por Penâltis
          <span className="font-bold"> DP:</span> Derrota por Penâltis
          <span className="font-bold"> D:</span>
          Derrotas <span className="font-bold">GP:</span> Gols Pró (Marcados)
          <span className="font-bold"> GC:</span> Gols Contra (Sofridos)
          <span className="font-bold"> SG:</span> Saldo de Gols
          <span className="font-bold"> P:</span> Pontos
        </h4>
      </section>
    </main>
  </ContainerTransition>
);

export default ClassificacaoPage;
