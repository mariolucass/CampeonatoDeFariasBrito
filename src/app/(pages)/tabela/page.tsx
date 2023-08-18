"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { Table } from "@/components/Table";

const TabelaPage = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <SectionTitle />

      <section className="flex flex-col w-3/4 m-auto justify-center items-center p-4">
        <h1 className="text-2xl font-bold">Tabela de jogos - 1ª divisão</h1>

        <h4 className="text-sm">(Jogos realizados no campo municipal)</h4>
      </section>

      <section className="flex w-full flex-col max-w-5xl mb-8">
        <h1 className=" flex bg-main text-2xl w-3/4 m-auto justify-center items-center text-white py-1">
          1ª RODADA
        </h1>

        <Table />
      </section>
    </main>
  );
};

export default TabelaPage;
