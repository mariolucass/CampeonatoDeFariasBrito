"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { Table } from "@/components/Table";
import { ContainerTransition } from "@/layouts/ContainerTransition";
import Image from "next/image";
import DownloadIcon from "../../../assets/download.svg";

const TabelaPage = () => {
  return (
    <ContainerTransition>
      <main className="flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center bg-bgtwo">
          <SectionTitle />
        </div>

        <section className="flex flex-col w-3/4 m-auto justify-center items-center text-center p-4">
          <h1 className="text-2xl font-bold">TABELA DE JOGOS - 1ª DIVISÃO</h1>

          <h4 className="text-sm">(Jogos realizados no campo municipal)</h4>

          <a
            className="w-full"
            href="https://drive.google.com/uc?id=1l-ny0TyMXirILio_4kV2zMbRjMWzmvVI&export=download"
            download="tabela.pdf"
          >
            <button className="bg-tertiary w-10/12 m-auto text-white p-2 flex items-center gap-1 rounded-lg justify-center max-w-xs my-2 lg:text-xl">
              <Image src={DownloadIcon} alt="Download" />
              BAIXAR TABELA
            </button>
          </a>
        </section>

        <section className="flex w-full flex-col max-w-5xl mb-8">
          <h1 className=" flex bg-main text-2xl w-3/4 m-auto justify-center items-center text-white py-1">
            1ª FASE
          </h1>

          <Table />
        </section>
      </main>
    </ContainerTransition>
  );
};

export default TabelaPage;
