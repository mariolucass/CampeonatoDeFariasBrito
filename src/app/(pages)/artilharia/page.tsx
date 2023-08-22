"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { Strikers } from "@/components/Strikers";
import { ContainerTransition } from "@/layouts/ContainerTransition";

const ArtilhariaPage = () => {
  return (
    <ContainerTransition>
      <main className="flex flex-col gap-4 justify-center items-center w-full">
        <SectionTitle />

        <section className="w-full max-w-7xl margin-auto flex flex-col items-center">
          <h1 className="bg-main text-2xl p-2 w-2/3 text-center text-white lg:mt-4">
            ARTILHARIA
          </h1>

          <Strikers />

          <span className="w-2/3 m-auto text-center text-small my-4">
            {/* Ao final do campeonato o artilheiro ganhará um troféu e cem reais. Se
          houver empate no número de gols, o jogador mais velho se consagrará
          artilheiro do campeonato! */}
          </span>
        </section>
      </main>
    </ContainerTransition>
  );
};

export default ArtilhariaPage;
