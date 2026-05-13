import { CommitteeMember } from "@/interfaces/context_interface";
import { Player } from "@/interfaces/players_interface";
import { getComitteesByTeam } from "@/services/committee_service";
import { getPlayersByTeam } from "@/services/players_service";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Spinner } from "../ui/spinner";

interface PlayersCardsProps {
  teamId: string;
  isCommitte?: boolean;
}

export const PlayersCards = ({ teamId, isCommitte }: PlayersCardsProps) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [committees, setCommittees] = useState<CommitteeMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      if (isCommitte) {
        await getComitteesByTeam({ teamId, setCommittees });
      } else {
        await getPlayersByTeam({ teamId, setPlayers });
      }
      setLoading(false);
    };
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teamId]);

  const listToUse = (
    isCommitte
      ? committees.sort((a, b) => a.nickname.localeCompare(b.nickname))
      : players.sort((a, b) => a.nickname.localeCompare(b.nickname))
  ) as any[];

  /* ── Loading ── */
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-10 opacity-40">
        <Spinner className="h-8 w-8" />
        <span className="text-[10px] font-black uppercase tracking-widest">
          Carregando...
        </span>
      </div>
    );
  }

  /* ── Empty ── */
  if (!listToUse.length) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 py-10 opacity-30">
        <span className="text-3xl select-none">—</span>
        <span className="text-xs font-black uppercase tracking-widest">
          Ainda sem informações
        </span>
      </div>
    );
  }

  /* ── Cards ── */
  return (
    <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 p-3 w-full">
      {listToUse.map((elem) => (
        <li
          key={elem.id}
          className="group flex flex-col items-center gap-2 rounded-xl bg-bgtwo border border-current border-opacity-[0.07] p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-main/30 hover:shadow-md"
        >
          {/* Photo */}
          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-bgone">
            <Image
              src={`/mocks/${elem.image}`}
              alt={elem.nickname}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Subtle gradient at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Name */}
          <span className="w-full text-center font-black uppercase text-xs lg:text-lg tracking-tight leading-tight line-clamp-2">
            {elem.nickname}
          </span>
        </li>
      ))}
    </ul>
  );
};
