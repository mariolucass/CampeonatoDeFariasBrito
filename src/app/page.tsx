"use client";

import { CarrouselPageMain } from "@/components/Carrousel";
import { NavOptions } from "@/components/NavOptions";
import { TableInDashboard } from "@/components/TableInDashboard";
import { WeekendPictures } from "@/components/WeekendPictures";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center lg:gap-6">
      <section className="h-[152px] w-full flex justify-center items-center max-w-7xl">
        <TableInDashboard />
      </section>

      <div className="flex justify-center items-center w-full bg-bgtwo">
        <section className="flex flex-col  w-full items-center justify-center gap-4 py-4 max-w-7xl">
          <div className="py-4 flex flex-col w-10/12 text-center m-auto gap-4">
            <h1 className="font-bold text-3xl lg:text-5xl">
              CAMPEONATO FARIASBRITENSE DE FUTEBOL 2023
            </h1>
          </div>

          <div className="w-full flex justify-center items-center">
            <CarrouselPageMain />
          </div>
        </section>
      </div>

      <section className="p-4 flex flex-col justify-center items-center lg:w-full max-w-7xl">
        <span className="lg:flex text-lg font-bold mb-4 lg:text-3xl lg:m-w-full lg:items-center ">
          Clique na opção para saber mais!
        </span>

        <NavOptions />
      </section>

      <div className="flex justify-center items-center w-full bg-bgtwo">
        <section className=" w-full p-4 flex flex-col justify-center items-center lg:w-full max-w-7xl lg:my-4">
          <h1 className="lg:flex text-lg font-bold mb-4 lg:text-3xl lg:m-w-full lg:items-center ">
            FOTOS DO FIM DE SEMANA
          </h1>

          <div className="w-full flex justify-center items-center">
            <WeekendPictures />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
