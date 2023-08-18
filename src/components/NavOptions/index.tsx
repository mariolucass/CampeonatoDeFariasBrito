import Image from "next/image";
import { useRouter } from "next/navigation";
import ArtilhariaIcon from "../../assets/pages/artilharia.svg";
import ClassificacaoIcon from "../../assets/pages/classificacao.svg";
import EquipesIcon from "../../assets/pages/equipes.svg";
import RegulamentoIcon from "../../assets/pages/regulamento.svg";
import SumulasIcon from "../../assets/pages/sumulas.svg";
import TabelaIcon from "../../assets/pages/tabela.svg";

export const NavOptions = () => {
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

  const liClassDefault =
    "h-[176px] w-2/5 p-4 rounded-[14px] text-white flex flex-col justify-between max-w-xs cursor-pointer hover:drop-shadow-xl hover:scale-110 transition ease-in-out delay-150 ";

  return (
    <ul className="flex flex-wrap gap-8 justify-center lg:flex-col lg:w-full lg:h-[408px] lg:items-center">
      {listOptions.map((elem, index) => (
        <li
          key={index}
          className={
            index % 2 != 0
              ? `${liClassDefault} bg-tertiary`
              : `${liClassDefault} bg-main`
          }
          onClick={() => router.push(elem.page)}
        >
          <div className="w-[48px] h-[48px]">
            <Image
              src={elem.component}
              alt={elem.title}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full">
            <h3 className="text-xl">{elem.title}</h3>
            <span
              className={`h[12px] text-xs leading-[0.1em] font-light lg:text-base `}
            >
              {elem.description}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};
