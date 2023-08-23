"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { Strikers } from "@/components/Strikers";
import { ContainerTransition } from "@/layouts/ContainerTransition";

const ArtilhariaPage = () => (
  <ContainerTransition>
    <main className="flex flex-col gap-4 justify-center items-center w-full">
      <SectionTitle />

      <section className="w-full max-w-7xl margin-auto flex flex-col items-center">
        <h1 className="bg-main text-2xl p-2 w-10/12 text-center text-white lg:mt-4">
          ARTILHARIA
        </h1>

        <Strikers />
      </section>
    </main>
  </ContainerTransition>
);

export default ArtilhariaPage;
