import ArtilhariaIcon from "../assets/pages/artilharia.svg";
import ClassificacaoIcon from "../assets/pages/classificacao.svg";
import EquipesIcon from "../assets/pages/equipes.svg";
import RegulamentoIcon from "../assets/pages/regulamento.svg";
import SumulasIcon from "../assets/pages/sumulas.svg";
import TabelaIcon from "../assets/pages/tabela.svg";

export const navOptionsList = [
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
