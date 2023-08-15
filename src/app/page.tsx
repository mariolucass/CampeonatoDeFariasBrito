"use client";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import { CarrouselPageMain } from "@/components/Carrousel";
import { NavOptions } from "@/components/NavOptions";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <section className="flex flex-col bg-bgtwo w-full items-center justify-center gap-4 py-7 mt-16">
          <div className="flex flex-col w-10/12 text-center m-auto gap-4">
            <h1 className="font-bold text-3xl">
              CAMPEONATO FARIASBRITENSE DE FUTEBOL 2023
            </h1>
          </div>

          <div className="w-full flex justify-center items-center">
            <CarrouselPageMain />
          </div>

          <div className="flex flex-col w-10/12 text-center m-auto gap-4">
            <h1 className="text-2xl bg-tertiary text-white w-[164px] m-auto rounded font-medium">
              SAIBA MAIS
            </h1>
          </div>

          <div className="mt-8">
            <h1 className="font-bold text-2xl">O QUE VOCÊ PROCURA?</h1>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center">
          <span className="text-lg font-bold mb-4">
            Clique na opção para saber mais!
          </span>

          <NavOptions />
        </section>

        <section>
          <h1>FOTOS DO FIM DE SEMANA</h1>

          <div></div>
        </section>
      </main>
    </>
  );
}
