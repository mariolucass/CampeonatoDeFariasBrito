"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { downloadRegulamento } from "@/data/downloadData";
import { ContainerTransition } from "@/layouts/ContainerTransition";
import { Regulamento } from "@/layouts/Regulamento";
import Image from "next/image";
import DownloadIcon from "../../../assets/download.svg";

const RegulamentoPage = () => (
  <ContainerTransition>
    <main className="flex flex-col gap-4">
      <SectionTitle />

      <section className="w-10/12 h-[60vh] m-auto max-w-3xl margin-auto lg:h-[650px] overflow-y-auto">
        <Regulamento />
      </section>

      <a href={downloadRegulamento} download="regulamento.pdf" className="mb-4">
        <button className="bg-main w-1/2 m-auto text-white p-2 flex items-center gap-1 rounded-lg justify-center max-w-xs my-4 lg:text-xl ">
          <Image src={DownloadIcon} alt="Download" />
          BAIXAR REGULAMENTO
        </button>
      </a>
    </main>
  </ContainerTransition>
);

export default RegulamentoPage;
