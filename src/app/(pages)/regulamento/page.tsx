"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { ContainerTransition } from "@/layouts/ContainerTransition";
import { Regulamento } from "@/layouts/Regulamento";
import Image from "next/image";
import DownloadIcon from "../../../assets/download.svg";

const RegulamentoPage = () => {
  return (
    <ContainerTransition>
      <main className="flex flex-col gap-4">
        <SectionTitle />

        <section className="w-10/12 m-auto max-w-3xl margin-auto h-[400px] overflow-y-auto">
          <Regulamento />
        </section>

        <a
          href="https://drive.google.com/uc?id=1yBJ1muAFbmF6Nvoeyi-KaOrNPd8ZnfAs&export=download"
          download="regulamento.pdf"
        >
          <button className="bg-main w-1/2 m-auto text-white p-2 flex items-center gap-1 rounded-lg justify-center max-w-xs my-4 lg:text-xl">
            <Image src={DownloadIcon} alt="Download" />
            BAIXAR REGULAMENTO
          </button>
        </a>
      </main>
    </ContainerTransition>
  );
};

export default RegulamentoPage;
