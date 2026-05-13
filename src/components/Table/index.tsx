"use client";

import { useMatchesContext } from "@/context/matches_context";
import { matches_wo } from "@/data/secondFase";
import { defaultCrest } from "@/data/teamsData";
import { getMatches } from "@/services/matches_service";
import { changeNameTeamsInMatches } from "@/utils/changeNameTeams";
import { RenderCrest } from "@/utils/renderCrest";

import moment from "moment";
import "moment/locale/pt-br";
import { useEffect } from "react";
import { Spinner } from "../ui/spinner";

interface IProps {
  second?: boolean;
  quarterfinals?: boolean;
  semifinals?: boolean;
  final?: boolean;
}

export const Table = ({ second, quarterfinals, semifinals, final }: IProps) => {
  const { matches, setMatches } = useMatchesContext();

  useEffect(() => {
    getMatches({ matches, setMatches });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredMatches = () => {
    if (final) return matches.slice(43);
    if (semifinals) return matches.slice(41, 43);
    if (quarterfinals) return matches.slice(37, 41);
    if (second) return matches.slice(21, 37);
    return matches.slice(0, 21).map((elem) => changeNameTeamsInMatches(elem));
  };

  const handleDate = (date: string) => {
    moment.locale("pt-br");
    const formatted = moment(date, "YYYY-MM-DDTHH:mm")
      .format("LLLL")
      .replace(",", " —")
      .replace("às", "·")
      .replace("de 2023", "")
      .toUpperCase();
    return formatted !== "DATA INVÁLIDA" ? formatted : "A DEFINIR";
  };

  const renderMatches = filteredMatches().map((elem, index) => {
    const gameIsOver =
      elem.goals_visitant +
        elem.goals_principal +
        elem.goals_penalty_principal +
        elem.goals_penalty_visitant !==
      0;

    const isPenalty =
      gameIsOver && elem.goals_principal === elem.goals_visitant;
    const isWO = matches_wo.includes(elem.id);

    const principalWins =
      gameIsOver &&
      (elem.goals_principal > elem.goals_visitant ||
        (isPenalty &&
          elem.goals_penalty_principal > elem.goals_penalty_visitant));

    const visitantWins =
      gameIsOver &&
      (elem.goals_visitant > elem.goals_principal ||
        (isPenalty &&
          elem.goals_penalty_visitant > elem.goals_penalty_principal));

    return (
      <li
        key={index}
        className="flex flex-col w-full bg-white rounded-[24px] border border-[#1D1D1F]/5 p-4 md:p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.06)] transition-all duration-400 ease-out"
      >
        {/* --- DATA DA PARTIDA --- */}
        <div className="flex items-center justify-center pb-3 mb-3 border-b border-[#1D1D1F]/[0.05]">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#515154]">
            {handleDate(elem.date)}
          </span>
        </div>

        {/* --- LINHA DO PLACAR --- */}
        <div className="flex items-center justify-between w-full">
          {/* EQUIPE MANDANTE (ESQUERDA) */}
          <div
            className={`flex flex-1 items-center justify-end gap-3 md:gap-4 transition-all duration-300 ${
              !principalWins && gameIsOver
                ? "opacity-40 grayscale-[40%]"
                : "opacity-100"
            }`}
          >
            <span className="text-[14px] md:text-[15px] font-bold text-[#1D1D1F] uppercase text-right leading-tight line-clamp-2">
              {elem.principal.name}
            </span>
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0">
              {RenderCrest(elem.principal.crest ?? defaultCrest)}
            </div>
          </div>

          {/* PLACAR CENTRAL */}
          <div className="shrink-0 flex flex-col items-center justify-center w-[100px] md:w-[120px]">
            {gameIsOver ? (
              <div className="flex flex-col items-center">
                {/* Gols Regulares */}
                <div className="flex items-center gap-2.5 text-[26px] md:text-[32px] font-black text-[#1D1D1F] tabular-nums tracking-tight">
                  <span>{elem.goals_principal}</span>
                  <span className="text-[16px] text-[#515154] font-medium opacity-40 pb-1">
                    ×
                  </span>
                  <span>{elem.goals_visitant}</span>
                </div>

                {/* Metadados: Pênaltis ou W.O. (Pill Apple Style) */}
                {isPenalty && (
                  <div className="mt-1 flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F5F5F7] border border-[#1D1D1F]/5">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#515154]">
                      Pen
                    </span>
                    <span className="text-[11px] font-black text-[#1D1D1F] tabular-nums">
                      {elem.goals_penalty_principal} -{" "}
                      {elem.goals_penalty_visitant}
                    </span>
                  </div>
                )}

                {!isPenalty && isWO && (
                  <div className="mt-1 px-3 py-0.5 rounded-full bg-[var(--main)]/10 border border-[var(--main)]/20 text-[var(--main)] text-[10px] font-bold uppercase tracking-widest">
                    W.O.
                  </div>
                )}
              </div>
            ) : (
              /* A Jogar */
              <div className="flex flex-col items-center gap-1">
                <span className="text-[20px] font-black text-[#515154] opacity-30">
                  ×
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#515154] opacity-50">
                  A Jogar
                </span>
              </div>
            )}
          </div>

          {/* EQUIPE VISITANTE (DIREITA) */}
          <div
            className={`flex flex-1 items-center justify-start gap-3 md:gap-4 transition-all duration-300 ${
              !visitantWins && gameIsOver
                ? "opacity-40 grayscale-[40%]"
                : "opacity-100"
            }`}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0">
              {RenderCrest(elem.visitant.crest ?? defaultCrest)}
            </div>
            <span className="text-[14px] md:text-[15px] font-bold text-[#1D1D1F] uppercase text-left leading-tight line-clamp-2">
              {elem.visitant.name}
            </span>
          </div>
        </div>
      </li>
    );
  });

  if (!matches.length) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 min-h-[300px]">
        <Spinner className="h-8 w-8 text-[#0071e3]" />
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#515154]">
          Sincronizando partidas...
        </span>
      </div>
    );
  }

  return (
    <ul className="flex flex-col w-full px-4 mx-auto gap-4 max-w-3xl py-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {renderMatches}
    </ul>
  );
};
