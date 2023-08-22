"use client";

import { CarrouselPageMain } from "@/components/Carrousel";
import { NavOptions } from "@/components/NavOptions";
import { TableInDashboard } from "@/components/TableInDashboard";
import { WeekendPictures } from "@/components/WeekendPictures";
import { ContainerTransition } from "@/layouts/ContainerTransition";
import Image from "next/image";
import DownloadIcon from "../assets/download.svg";

const Home = () => {
  return (
    <ContainerTransition>
      <main className="flex min-h-screen flex-col items-center lg:gap-6">
        <section className="h-[152px] w-full flex justify-center items-center max-w-7xl">
          <TableInDashboard />
        </section>

        <div className="flex justify-center items-center w-full bg-bgtwo">
          <section className="flex flex-col  w-full items-center justify-center gap-4 py-4 max-w-7xl">
            <div className="py-4 flex flex-col w-10/12 text-center m-auto gap-4 lg:py-2">
              <h1 className="font-bold text-3xl lg:text-5xl">
                CAMPEONATO FARIASBRITENSE DE FUTEBOL 2023
              </h1>
            </div>

            <div className="w-full flex justify-center items-center">
              <CarrouselPageMain />
            </div>

            <div className="flex flex-col w-10/12 justify-center items-center lg:w-full lg:gap-2">
              <span className="font-bold text-lg lg:text-3xl">
                Baixe e se informe!
              </span>

              <div className="flex flex-col w-full gap-2 lg:flex-row items-center justify-center">
                <a
                  className="w-10/12"
                  href="https://drive.google.com/uc?id=1yBJ1muAFbmF6Nvoeyi-KaOrNPd8ZnfAs&export=download"
                  download="regulamento.pdf"
                >
                  <button className="bg-tertiary w-10/12 m-auto text-white p-2 flex items-center gap-1 rounded-lg justify-center max-w-xs my-2 lg:text-xl">
                    <Image src={DownloadIcon} alt="Download" />
                    BAIXAR REGULAMENTO
                  </button>
                </a>

                <a
                  className="w-10/12"
                  href="https://drive.google.com/uc?id=1Ot9VwW4FowPCcyBkuwHeu-1vdFhkLzUa&export=download"
                  download="ficha.pdf"
                >
                  <button className="bg-main w-10/12 m-auto text-white p-2 flex items-center gap-1 rounded-lg justify-center max-w-xs my-2 lg:text-xl">
                    <Image src={DownloadIcon} alt="Download" />
                    BAIXAR FICHA DE INSCRIÇÃO
                  </button>
                </a>

                <a
                  className="w-10/12"
                  href="https://drive.google.com/uc?id=1l-ny0TyMXirILio_4kV2zMbRjMWzmvVI&export=download"
                  download="tabela.pdf"
                >
                  <button className="bg-tertiary w-10/12 m-auto text-white p-2 flex items-center gap-1 rounded-lg justify-center max-w-xs my-2 lg:text-xl">
                    <Image src={DownloadIcon} alt="Download" />
                    BAIXAR TABELA
                  </button>
                </a>
              </div>
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
          <section className=" w-full p-4 flex flex-col justify-center items-center lg:w-full max-w-7xl lg:my-4 lg:mb-8">
            <h1 className="lg:flex text-lg font-bold mb-4 lg:text-3xl lg:m-w-full lg:items-center ">
              FOTOS DO CAMPEONATO
            </h1>

            <div className="w-full flex justify-center items-center">
              <WeekendPictures />
            </div>
          </section>
        </div>
      </main>
    </ContainerTransition>
  );
};

export default Home;
