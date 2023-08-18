"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Burguer from "../../assets/burguer.svg";
import Logo from "../../assets/logo.svg";
import ArtilhariaIcon from "../../assets/pages/artilharia.svg";
import ClassificacaoIcon from "../../assets/pages/classificacao.svg";
import EquipesIcon from "../../assets/pages/equipes.svg";
import RegulamentoIcon from "../../assets/pages/regulamento.svg";
import SumulasIcon from "../../assets/pages/sumulas.svg";
import TabelaIcon from "../../assets/pages/tabela.svg";
import Search from "../../assets/search.svg";

export const Header = () => {
  const router = useRouter();
  const listOptions = [
    {
      component: TabelaIcon,
      title: "TABELA",
      description: "Confira a tabela do campeonato",
      page: "/tabela",
    },
    {
      component: ClassificacaoIcon,
      title: "CLASSIFICAÇÃO",
      description: "Confira a classificação do campeonato",
      page: "/classificacao",
    },
    {
      component: RegulamentoIcon,
      title: "REGULAMENTO",
      description: " Confira o regulamento  do campeonato",
      page: "/regulamento",
    },
    {
      component: SumulasIcon,
      title: "SÚMULAS",
      description: " Confira as súmulas do campeonato",
      page: "/sumulas",
    },
    {
      component: EquipesIcon,
      title: "EQUIPES",
      description: "Confira as equipes do campeonato",
      page: "/equipes",
    },
    {
      component: ArtilhariaIcon,
      title: "ARTILHARIA",
      description: "Confira os artilheiros do campeonato",
      page: "/artilharia",
    },
  ];

  const items = listOptions.map((elem, index) => (
    <li key={elem.title} className=" hover:scale-110">
      <Link href={elem.page} className="text-2xl">
        {elem.title}
      </Link>
    </li>
  ));

  return (
    <header className="w-full bg-main p-6 flex justify-between lg:justify-around">
      <Image
        src={Burguer}
        alt="logo"
        width={30}
        height={30}
        className="lg:hidden"
      />

      <Image
        src={Logo}
        alt="logo"
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />

      <ul className="hidden lg:flex lg:gap-8 lg:font-bold lg:text-white">
        {items}
      </ul>

      <Image
        src={Search}
        alt="logo"
        width={30}
        height={30}
        className="lg:hidden"
      />
    </header>
  );
};
