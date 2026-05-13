import { useTeamsContext } from "@/context/teams_context";
import { cn } from "@/lib/utils";
import { getTeams, getTeamsSecondRound } from "@/services/teams_service";
import { changeNameTeams } from "@/utils/changeNameTeams";
import { useEffect } from "react";
import { Spinner } from "../ui/spinner";

interface IProps {
  second?: boolean;
}

const ELIMINATED_FIRST = [
  "Monte Pio",
  "Atl. Lázio",
  "Lamaju",
  "P. Fernandes",
  "M. da Vila",
];

const COLS = [
  { key: "matches_played", key2: "matches_played_second_round", label: "PJ" },
  { key: "wins", key2: "wins_second_round", label: "V" },
  { key: "wins_penalty", key2: "wins_penalty_second_round", label: "VP" },
  { key: "loses_penalty", key2: "loses_penalty_second_round", label: "DP" },
  { key: "loses", key2: "loses_second_round", label: "D" },
  { key: "goals_scored", key2: "goals_scored_second_round", label: "GP" },
  { key: "goals_suffered", key2: "goals_suffered_second_round", label: "GC" },
  {
    key: "goals_difference",
    key2: "goals_difference_second_round",
    label: "SG",
  },
];

// Cores HIG Apple para Status
const STATUS_COLORS = {
  advance: "#34C759", // Apple Green
  eliminate: "#FF3B30", // Apple Red
  neutral: "#515154", // Apple Gray
};

export const Schedule = ({ second }: IProps) => {
  const { teams, setTeams, teamsSecondRound, setTeamsSecondRound } =
    useTeamsContext();

  useEffect(() => {
    second
      ? getTeamsSecondRound({ teamsSecondRound, setTeamsSecondRound })
      : getTeams({ teams, setTeams });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listToRender = second
    ? teamsSecondRound
        .map((elem) => changeNameTeams(elem))
        .filter((elem) => !ELIMINATED_FIRST.includes(elem.name))
    : teams.map((elem) => changeNameTeams(elem));

  const sorted = [...listToRender].reverse();

  const getRowStatus = (index: number): "advance" | "eliminate" | "neutral" => {
    if (second && index < 8) return "advance";
    if (!second && index > 15) return "eliminate";
    return "neutral";
  };

  // --- EMPTY STATE PRO ---
  if (!teams.length) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 min-h-[400px]">
        <Spinner className="h-8 w-8 text-[#0071e3]" />
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#515154]">
          Carregando classificação...
        </span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 px-4 md:px-0">
      {/* ── CONTAINER DA TABELA (Glass Card) ── */}
      <div className="w-full bg-white rounded-[24px] md:rounded-[32px] border border-[#1D1D1F]/5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] overflow-x-auto scrollbar-hide">
        <table className="w-full min-w-[600px] border-collapse">
          {/* ── CABEÇALHO ── */}
          <thead>
            <tr className="bg-[#F5F5F7]/80 border-b border-[#1D1D1F]/5">
              <th className="text-center px-4 py-3.5 w-12">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#515154]">
                  Pos
                </span>
              </th>
              <th className="text-left px-3 py-3.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#515154]">
                  Equipe
                </span>
              </th>
              {COLS.map((col) => (
                <th
                  key={col.label}
                  className="text-center px-2 py-3.5 w-[40px]"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#515154]">
                    {col.label}
                  </span>
                </th>
              ))}
              <th className="text-center px-4 py-3.5 w-[60px]">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1D1D1F]">
                  Pts
                </span>
              </th>
            </tr>
          </thead>

          {/* ── LINHAS (ROWS) ── */}
          <tbody className="divide-y divide-[#1D1D1F]/[0.04]">
            {sorted.map((elem, index) => {
              const status = getRowStatus(index);
              const points = second
                ? (elem as any).points_second_round
                : (elem as any).points;

              return (
                <tr
                  key={(elem as any).id ?? index}
                  className="group transition-colors duration-200 hover:bg-[#F5F5F7]/60"
                >
                  {/* Posição */}
                  <td className="px-4 py-3 text-center">
                    <span
                      className={cn(
                        "text-[13px] font-bold tabular-nums",
                        status === "advance"
                          ? "text-[#34C759]"
                          : status === "eliminate"
                            ? "text-[#FF3B30]"
                            : "text-[#515154]",
                      )}
                    >
                      {index + 1}
                    </span>
                  </td>

                  {/* Nome do Time */}
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-2.5">
                      {/* Indicador Sutil de Status */}
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: STATUS_COLORS[status] }}
                      />
                      <span className="text-[14px] font-bold text-[#1D1D1F] uppercase tracking-tight truncate max-w-[180px] md:max-w-[240px]">
                        {elem.name}
                      </span>
                    </div>
                  </td>

                  {/* Estatísticas (PJ, V, E, D...) */}
                  {COLS.map((col) => {
                    const val = second
                      ? (elem as any)[col.key2]
                      : (elem as any)[col.key];
                    return (
                      <td key={col.label} className="text-center px-2 py-3">
                        <span className="text-[13px] font-medium tabular-nums text-[#515154] group-hover:text-[#1D1D1F] transition-colors">
                          {val ?? "—"}
                        </span>
                      </td>
                    );
                  })}

                  {/* Pontos (Pill) */}
                  <td className="text-center px-4 py-3">
                    <div className="flex justify-center">
                      <span
                        className={cn(
                          "flex items-center justify-center min-w-[32px] h-[26px] px-2 rounded-[8px] text-[13px] font-black tabular-nums transition-colors",
                          status === "advance"
                            ? "bg-[#34C759]/10 text-[#34C759]"
                            : status === "eliminate"
                              ? "bg-[#FF3B30]/10 text-[#FF3B30]"
                              : "bg-[#F5F5F7] text-[#1D1D1F] group-hover:bg-[#E5E5EA]",
                        )}
                      >
                        {points ?? "0"}
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ── LEGENDA (Metadata Style) ── */}
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 px-4 py-2 mt-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#34C759]" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#515154]">
            {second ? "Quartas de Final" : "Avança para 2ª Fase"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF3B30]" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#515154]">
            Eliminado
          </span>
        </div>
      </div>
    </div>
  );
};
