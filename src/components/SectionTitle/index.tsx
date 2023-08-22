"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import ArtilhariaIcon from "../../assets/pages/artilharia.svg";
import ClassificacaoIcon from "../../assets/pages/classificacao.svg";
import EquipesIcon from "../../assets/pages/equipes.svg";
import RegulamentoIcon from "../../assets/pages/regulamento.svg";
import SumulasIcon from "../../assets/pages/sumulas.svg";
import TabelaIcon from "../../assets/pages/tabela.svg";

export const SectionTitle = () => {
  const pathName = usePathname();
  const router = useRouter();

  const listTableAndSchedule = ["tabela", "classificacao"];
  const divDefaultClass =
    " flex flex-col justify-center items-center w-1/2 cursor-pointer";

  if (listTableAndSchedule.includes(pathName.substring(1))) {
    return (
      <section className="flex w-full h-[172px] max-w-5xl">
        <div
          className={
            pathName.substring(1) === "tabela"
              ? `${divDefaultClass}  bg-tertiary text-white`
              : `${divDefaultClass} bg-bgtwo`
          }
          onClick={() => {
            if (pathName.substring(1) !== "tabela") {
              router.push("/tabela");
            }
          }}
        >
          <div className="flex justify-center items-center w-1/3">
            <Image
              src={TabelaIcon}
              alt="Tabela"
              width={56}
              height={56}
              className={
                pathName.substring(1) === "classificacao" ? "white-svg " : ""
              }
            />
          </div>
          <h1 className="mt-[6px] text-xl">TABELA</h1>
        </div>

        <div
          className={
            pathName.substring(1) === "classificacao"
              ? `${divDefaultClass}  bg-tertiary text-white`
              : `${divDefaultClass} bg-bgtwo `
          }
          onClick={() => {
            if (pathName.substring(1) !== "classificacao") {
              router.push("/classificacao");
            }
          }}
        >
          <div className="flex justify-center items-center w-1/3 ">
            <Image
              src={ClassificacaoIcon}
              alt="Classificação"
              width={63}
              height={63}
              className={
                pathName.substring(1) !== "classificacao" ? " white-svg" : ""
              }
            />
          </div>

          <h1 className="text-xl">CLASSIFICAÇÃO</h1>
        </div>
      </section>
    );
  }

  const dictPages = {
    regulamento: {
      icon: RegulamentoIcon,
      title: "REGULAMENTO",
      description: "Regulamento do campeonato - 1ª divisão.",
    },
    sumulas: {
      icon: SumulasIcon,
      title: "SÚMULAS",
      description: "Súmulas do campeonato - 1ª divisão.",
    },
    artilharia: {
      icon: ArtilhariaIcon,
      title: "ARTILHARIA",
      description: "Confira as equipes do campeonato.",
    },
    equipes: {
      icon: EquipesIcon,
      title: "EQUIPES",
      description: "Confira os artilheiros do campeonato.",
    },
  };

  type PageKey = keyof typeof dictPages;
  const path = pathName.substring(1) as PageKey;

  return (
    <section className="flex flex-col justify-center items-center p-6 bg-bgtwo h-[172px] w-full">
      <div>
        <Image
          src={dictPages[path].icon}
          alt="Regulamento"
          className="white-svg"
          width={64}
          height={64}
        />
      </div>
      <h1 className="text-4xl font-bold">{dictPages[path].title}</h1>
      <span className="text-sm">{dictPages[path].description}</span>
    </section>
  );
};
