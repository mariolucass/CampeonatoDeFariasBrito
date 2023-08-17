"use client";

import { CarrouselPageMain } from "@/components/Carrousel";
import { NavOptions } from "@/components/NavOptions";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center lg:gap-6">
        <div className="flex justify-center items-center w-full bg-bgtwo">
          <section className="flex flex-col  w-full items-center justify-center gap-4 py-7 mt-16 max-w-7xl">
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
        </div>

        <section className="flex flex-col justify-center items-center lg:w-full max-w-7xl">
          <span className="text-lg font-bold mb-4 lg:text-3xl lg:w-full lg:pl-11">
            Clique na opção para saber mais!
          </span>

          <NavOptions />
        </section>
        <div className=" w-full bg-bgtwo ">
          <section className="flex flex-col justify-center items-center lg:w-full max-w-7xl">
            <h1>FOTOS DO FIM DE SEMANA</h1>

            <div></div>
          </section>
        </div>
      </main>
    </>
  );
}
