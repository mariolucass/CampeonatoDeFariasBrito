import { usePlayersContext } from "@/context/players_context";
import { cn } from "@/lib/utils";
import { getPlayers } from "@/services/players_service";
import { useEffect } from "react";
import { Spinner } from "../ui/spinner";

const POSITION_STYLES: Record<number, string> = {
  1: "bg-[#FF9500]/15 text-[#D97D00]",
  2: "bg-[#8E8E93]/15 text-[#515154]",
  3: "bg-[#A2845E]/15 text-[#8B6B43]",
};

export const Strikers = () => {
  const { players, setPlayers } = usePlayersContext();

  useEffect(() => {
    getPlayers({ players, setPlayers });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sorted = players;

  if (!players.length) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 min-h-[300px]">
        <Spinner className="h-8 w-8 text-[var(--main)]" />
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#515154]">
          Buscando artilheiros...
        </span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Container Principal (Glass Card) */}
      <div className="bg-white rounded-[24px] md:rounded-[32px] border border-[#1D1D1F]/5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] overflow-hidden">
        {/* Cabeçalho da Lista */}
        <div className="flex items-center px-4 md:px-6 py-4 bg-[#F5F5F7]/80 border-b border-[#1D1D1F]/5 backdrop-blur-md">
          <span className="w-12 text-[10px] font-bold uppercase tracking-widest text-[#515154] text-center shrink-0">
            Pos
          </span>
          <span className="flex-1 text-[10px] font-bold uppercase tracking-widest text-[#515154] ml-3 md:ml-4">
            Jogador
          </span>
          <span className="w-32 text-[10px] font-bold uppercase tracking-widest text-[#515154] text-left hidden sm:block shrink-0">
            Equipe
          </span>
          <span className="w-16 text-[10px] font-bold uppercase tracking-widest text-[#515154] text-center shrink-0">
            Gols
          </span>
        </div>

        {/* Linhas de Jogadores */}
        <ul className="flex flex-col">
          {sorted.map((elem, index) => {
            const position = index + 1;
            const isTop3 = position <= 3;
            const medalStyle =
              POSITION_STYLES[position] ?? "bg-transparent text-[#515154]";

            return (
              <li
                key={elem.id}
                className="group flex items-center px-4 md:px-6 py-3.5 border-b border-[#1D1D1F]/[0.04] last:border-0 hover:bg-[#F5F5F7]/60 transition-colors duration-200"
              >
                {/* 1. Posição (Medalha Apple) */}
                <div className="w-12 flex justify-center shrink-0">
                  <span
                    className={cn(
                      "flex items-center justify-center w-8 h-8 rounded-[10px] text-[14px] font-black tabular-nums transition-colors",
                      medalStyle,
                      !isTop3 && "opacity-60",
                    )}
                  >
                    {position}
                  </span>
                </div>

                {/* 2. Nome do Jogador */}
                <div className="flex-1 min-w-0 ml-3 md:ml-4">
                  <h3 className="text-[15px] font-bold text-[#1D1D1F] tracking-tight truncate uppercase">
                    {elem.nickname}
                  </h3>
                  {/* Equipe no Mobile (Aparece embaixo do nome) */}
                  <p className="text-[12px] font-medium text-[#515154] truncate sm:hidden mt-0.5">
                    {elem.team.name}
                  </p>
                </div>

                {/* 3. Equipe (Desktop) */}
                <div className="w-32 shrink-0 hidden sm:flex items-center">
                  <span className="text-[13px] font-medium text-[#515154] truncate">
                    {elem.team.name}
                  </span>
                </div>

                {/* 4. Gols (Metadata Pill) */}
                <div className="w-16 flex justify-center shrink-0">
                  <span
                    className={cn(
                      "flex items-center justify-center min-w-[36px] h-[28px] px-2.5 rounded-[10px] text-[14px] font-black tabular-nums transition-all duration-300",
                      isTop3
                        ? "bg-[var(--main)]/10 text-[var(--main)] group-hover:bg-[var(--main)]/15"
                        : "bg-[#F5F5F7] text-[#1D1D1F] group-hover:bg-[#E5E5EA]",
                    )}
                  >
                    {elem.goals}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
