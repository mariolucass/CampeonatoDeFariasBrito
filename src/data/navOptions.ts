import ArtilhariaIcon from "../../public/assets/pages/artilharia.svg";
import ClassificacaoIcon from "../../public/assets/pages/classificacao.svg";
import EquipesIcon from "../../public/assets/pages/equipes.svg";
import RegulamentoIcon from "../../public/assets/pages/regulamento.svg";
import SumulasIcon from "../../public/assets/pages/sumulas.svg";
import TabelaIcon from "../../public/assets/pages/tabela.svg";

export const navOptionsList = [
  {
    component: TabelaIcon,
    title: "TABELA",
    description: "Confira a tabela do campeonato.",
    page: "/tabela",
  },
  {
    component: ClassificacaoIcon,
    title: "CLASSIFICAÇÃO",
    description: "Confira a classificação do campeonato.",
    page: "/classificacao",
  },
  {
    component: RegulamentoIcon,
    title: "REGULAMENTO",
    description: "Confira o regulamento da competição.",
    page: "/regulamento",
  },
  {
    component: SumulasIcon,
    title: "SÚMULAS",
    description: "Confira as súmulas da competição.",
    page: "/sumulas",
  },
  {
    component: EquipesIcon,
    title: "EQUIPES",
    description: "Verifique as equipes do campeonato.",
    page: "/equipes",
  },
  {
    component: ArtilhariaIcon,
    title: "ARTILHARIA",
    description: "Verifique os artilheiros do campeonato.",
    page: "/artilharia",
  },
];
