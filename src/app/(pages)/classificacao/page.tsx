"use client";

import { Schedule } from "@/components/Schedule";
import Image from "next/image";

import ClassificaoIcon from "../../../assets/pages/classificacao.svg";
import TabelaIcon from "../../../assets/pages/tabela.svg";

const ClassificacaoPage = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <section className="flex w-full h-[104px] max-w-5xl">
        <div className="flex flex-col justify-center items-center w-1/2 bg-bgtwo">
          <div className="flex justify-center items-center w-1/3">
            <Image src={TabelaIcon} alt="Tabela" className="m-2" />
          </div>
          <h1 className="mt-1">TABELA</h1>
        </div>

        <div className="flex flex-col justify-center items-center w-1/2 bg-tertiary text-white">
          <div className="flex justify-center items-center w-1/3">
            <Image src={ClassificaoIcon} alt="Classificação" />
          </div>

          <h1>CLASSIFICAÇÃO</h1>
        </div>
      </section>

      <section className="flex flex-col w-3/4 m-auto justify-center items-center p-4 max-w-5xl">
        <h1 className="text-2xl font-bold">Classificação - 1ª divisão</h1>
        <h4 className="text-sm">
          (O campeonato será realizado em grupo único)
        </h4>
      </section>

      <section className="flex w-full flex-col max-w-5xl">
        <h1 className="flex bg-main mt-4 text-2xl w-3/4 m-auto justify-center items-center text-white py-1">
          GRUPO ÚNICO
        </h1>
        <Schedule />
      </section>
    </main>
  );
};

export default ClassificacaoPage;
