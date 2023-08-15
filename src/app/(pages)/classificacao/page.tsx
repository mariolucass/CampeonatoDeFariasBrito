"use client";

import { Schedule } from "@/components/Schedule";

const ClassificacaoPage = () => {
  return (
    <main>
      <section></section>

      <section className="flex flex-col w-3/4 m-auto justify-center items-center p-4">
        <h1 className="text-2xl font-bold">Classificação - 1ª divisão</h1>
        <h4 className="text-sm">
          (O campeonato será realizado em grupo único)
        </h4>
      </section>

      <section>
        <h1 className=" flex bg-main mt-4 text-2xl w-3/4 m-auto justify-center items-center text-white py-1">
          GRUPO ÚNICO
        </h1>

        <Schedule />
      </section>
    </main>
  );
};

export default ClassificacaoPage;
