"use client";

import { PlayersCards } from "@/components/PlayersCards";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { Spinner } from "@/components/ui/spinner";
import { useTeamsContext } from "@/context/teams_context";
import { downloadFicha } from "@/data/downloadData";
import { teamsData } from "@/data/teamsData";
import { ContainerTransition } from "@/layouts/ContainerTransition";
import { getTeams } from "@/services/teams_service";
import { RenderCrest } from "@/utils/renderCrest";
import { Briefcase, ChevronDown, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import DownloadIcon from "../../../../public/assets/download.svg";

type OpenCollapseState = { [key: string]: boolean };

const EquipesPage = () => {
  const { teams, setTeams } = useTeamsContext();

  useEffect(() => {
    getTeams({ teams, setTeams });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defaultOpenState: OpenCollapseState = teamsData.reduce((acc, team) => {
    acc[team.name] = false;
    return acc;
  }, {} as OpenCollapseState);

  const [collapse, setCollapse] = useState<OpenCollapseState>(defaultOpenState);
  const [expandedTeam, setExpandedTeam] = useState("");

  const toggleCollapse = (teamName: string) => {
    setCollapse((prev) => ({ ...prev, [teamName]: !prev[teamName] }));
    setExpandedTeam(teamName);
  };

  teams.sort((a, b) => a.name.localeCompare(b.name));

  const renderTeams = teams.map((elem, index) => {
    const isOpen = expandedTeam === elem.name && collapse[elem.name];

    return (
      <li
        key={elem.name}
        className="mb-4 bg-white rounded-[24px] border border-[#1D1D1F]/5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.08)] transition-all duration-400 ease-out overflow-hidden"
      >
        <Collapsible
          open={isOpen}
          onOpenChange={() => toggleCollapse(elem.name)}
        >
          {/* --- CABEÇALHO DO TIME (Trigger) --- */}
          <button
            onClick={() => toggleCollapse(elem.name)}
            className={`
            w-full flex items-center gap-4 p-5 transition-colors duration-300 text-left
            ${isOpen ? "bg-[#F5F5F7]/60" : "hover:bg-[#F5F5F7]/40"}
          `}
          >
            {/* Índice */}
            <span className="text-[13px] font-bold tabular-nums text-[#515154] opacity-60 w-5 shrink-0 text-right">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Escudo */}
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              {RenderCrest(elem.crest)}
            </div>

            {/* Nome do Time */}
            <span className="text-[17px] font-bold uppercase tracking-tight text-[#1D1D1F] flex-1">
              {elem.name}
            </span>

            {/* Ícone de Expansão Nativo */}
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full bg-white border border-[#1D1D1F]/5 shadow-sm shrink-0 transition-transform duration-400 ease-[cubic-bezier(0.87,_0,_0.13,_1)] ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <ChevronDown
                className="w-4 h-4 text-[#515154]"
                strokeWidth={2.5}
              />
            </div>
          </button>

          {/* --- CONTEÚDO EXPANSÍVEL (Painel) --- */}
          <CollapsibleContent>
            <div className="w-full bg-white p-6 md:p-8 flex flex-col gap-10 border-t border-[#1D1D1F]/5">
              {/* Seção 1: Jogadores */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#0071e3]/10 text-[#0071e3]">
                    <Users className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </div>
                  <h2 className="text-[12px] font-bold uppercase tracking-widest text-[#515154]">
                    Elenco de Jogadores
                  </h2>
                  <div className="flex-1 h-px bg-[#1D1D1F]/[0.06] ml-2" />
                </div>

                <div className="pl-1">
                  <PlayersCards teamId={elem.id} />
                </div>
              </div>

              {/* Seção 2: Comissão Técnica */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[var(--main)]/10 text-[var(--main)]">
                    <Briefcase className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </div>
                  <h2 className="text-[12px] font-bold uppercase tracking-widest text-[#515154]">
                    Comissão Técnica
                  </h2>
                  <div className="flex-1 h-px bg-[#1D1D1F]/[0.06] ml-2" />
                </div>

                <div className="pl-1">
                  <PlayersCards teamId={elem.id} isCommitte />
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </li>
    );
  });

  return (
    <ContainerTransition>
      <main className="flex flex-col items-center min-h-screen">
        <section className="w-full bg-main py-10 lg:py-14 relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
              backgroundSize: "18px 18px",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-tertiary via-white/20 to-tertiary/40" />

          <div className="relative z-10 max-w-3xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6 text-white">
            <div className="text-center lg:text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/40 mb-2">
                Campeonato Municipal · 2023
              </p>
              <h1
                className="font-black uppercase leading-none"
                style={{
                  fontSize: "clamp(2rem, 6vw, 4rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Equipes
              </h1>
            </div>

            <a
              href={downloadFicha}
              download="ficha.pdf"
              className="flex-shrink-0"
            >
              <div className="flex items-center gap-3 bg-white/10 hover:bg-tertiary border border-white/20 hover:border-tertiary text-white rounded-xl px-6 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                <Image src={DownloadIcon} alt="Download" className="w-5 h-5" />
                <span className="text-sm font-black uppercase tracking-[0.15em]">
                  Ficha de Inscrição
                </span>
              </div>
            </a>
          </div>
        </section>

        <div className="w-full max-w-3xl mx-auto px-4 py-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-main text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg flex-shrink-0">
              1ª DIV
            </span>
            <h2 className="font-black uppercase text-lg tracking-tight">
              Equipes 1ª Divisão
            </h2>
            <div className="flex-1 h-px bg-current opacity-10" />
            {teams.length > 0 && (
              <span className="text-xs font-black opacity-30 tabular-nums">
                {teams.length} equipes
              </span>
            )}
          </div>

          {!teams.length ? (
            <div className="flex flex-col items-center justify-center gap-4 min-h-[400px] opacity-40">
              <Spinner className="h-10 w-10" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Carregando equipes...
              </span>
            </div>
          ) : (
            <ul className="flex flex-col gap-3 mb-12">{renderTeams}</ul>
          )}
        </div>
      </main>
    </ContainerTransition>
  );
};

export default EquipesPage;
