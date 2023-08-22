"use client";

import { Schedule } from "@/components/Schedule";
import { SectionTitle } from "@/components/SectionTitle";
import { ContainerTransition } from "@/layouts/ContainerTransition";

const ClassificacaoPage = () => {
  return (
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
          <h1 className="flex bg-main text-2xl w-3/4 m-auto justify-center items-center text-white py-1">
            GRUPO ÚNICO
          </h1>

          <Schedule />
        </section>
      </main>
    </ContainerTransition>
  );
};

export default ClassificacaoPage;
