import { useMatchesContext } from "@/context/matches_context";
import { defaultCrest } from "@/data/teamsData";
import { RenderTeamInMatch } from "@/interfaces/teams_interface";
import { getMatches } from "@/services/matches_service";
import { changeNameTeamsInMatches } from "@/utils/changeNameTeams";
import { RenderCrest } from "@/utils/renderCrest";
import { useEffect, useMemo } from "react";

// Componente visual mantido limpo e isolado
const TeamDisplay = ({ name, image }: RenderTeamInMatch) => (
  <div className="flex flex-col justify-center items-center w-1/3 gap-4">
    <div className="w-[72px] h-[72px] lg:w-[88px] lg:h-[88px] drop-shadow-md transition-transform duration-300 hover:scale-105">
      {RenderCrest(image)}
    </div>
    <span className="w-full text-base lg:text-lg text-center px-2 font-semibold text-gray-800 tracking-tight leading-tight">
      {name}
    </span>
  </div>
);

export const TableInDashboard = () => {
  const { matches, setMatches } = useMatchesContext();

  useEffect(() => {
    getMatches({ matches, setMatches });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const finalMatch = useMemo(() => {
    if (!matches || matches.length === 0) return null;

    // Pegamos a lista filtrada
    const filtered = matches
      .slice(43)
      .map((elem) => changeNameTeamsInMatches(elem));

    // Como é apenas a final, assumimos que é o último/único item relevante desta lista
    // Retornamos apenas o primeiro elemento encontrado para o destaque
    return filtered[0];
  }, [matches]);

  // Skeleton de loading atualizado para o novo formato estático
  if (!finalMatch) {
    return (
      <div className="flex justify-center items-center w-full lg:w-11/12 mx-auto my-6">
        <div className="w-full max-w-4xl h-[220px] bg-[#F5F5F7] rounded-[2.5rem] flex items-center justify-center p-8 animate-pulse shadow-sm">
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="h-3 w-24 bg-gray-300/50 rounded-full"></div>
            <div className="flex w-full justify-center gap-10 items-center">
              <div className="w-[72px] h-[72px] rounded-full bg-gray-300/50"></div>
              <div className="h-12 w-28 bg-gray-300/50 rounded-2xl"></div>
              <div className="w-[72px] h-[72px] rounded-full bg-gray-300/50"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full lg:w-11/12 mx-auto my-6 px-4 lg:px-0">
      {/* Container Hero Apple Pro: 
        - shadow-[0_8px_30px_rgb(0,0,0,0.04)]: Sombra super difusa e elegante
        - border border-black/[0.03]: Borda quase invisível para dar limite físico ao card
        - p-10 lg:p-14: Respiro (whitespace) generoso
      */}
      <div className="w-full max-w-4xl bg-[#F5F5F7] rounded-[2.5rem] p-10 lg:p-14 flex flex-col items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.03]">
        {/* Badge superior */}
        <span className="text-xs lg:text-sm font-bold text-gray-400 tracking-[0.25em] uppercase mb-8 text-center block w-full">
          Grande Final
        </span>

        {/* Layout do Placar */}
        <div className="flex justify-between items-center w-full max-w-2xl mx-auto">
          <TeamDisplay
            name={finalMatch.principal.name.toUpperCase()}
            image={finalMatch.principal.crest || defaultCrest}
          />

          {/* Placar em Destaque */}
          <div className="flex flex-1 justify-center items-center gap-4 lg:gap-8 text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter">
            <span>{finalMatch.goals_principal}</span>
            <span className="text-2xl lg:text-3xl text-gray-300 font-medium pb-2 lg:pb-3">
              X
            </span>
            <span>{finalMatch.goals_visitant}</span>
          </div>

          <TeamDisplay
            name={finalMatch.visitant.name.toUpperCase()}
            image={finalMatch.visitant.crest || defaultCrest}
          />
        </div>
      </div>
    </div>
  );
};
