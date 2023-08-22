import { CommitteeMember } from "@/interfaces/context_interface";
import { Player } from "@/interfaces/players_interface";
import { getComitteesByTeam } from "@/services/committee_service";
import { getPlayersByTeam } from "@/services/players_service";
import Image from "next/image";
import { useEffect, useState } from "react";

interface PlayersCardsProps {
  teamId: string;
  isCommitte?: boolean;
}

export const PlayersCards = ({ teamId, isCommitte }: PlayersCardsProps) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [committees, setCommittees] = useState<CommitteeMember[]>([]);

  useEffect(() => {
    isCommitte
      ? getComitteesByTeam({ teamId, setCommittees })
      : getPlayersByTeam({ teamId, setPlayers });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teamId]);

  const listToUse = isCommitte ? committees : players;

  const renderPlayerCard = listToUse.map((elem: any) => (
    <li key={elem.id} className="w-full flex bg-bgone rounded">
      <div>
        {/* <Image
          src={Neymar}
          alt="Neymar"
          width={"104"}
          height={"100"}
          className="rounded-xl"
        /> */}
      </div>

      <div className="flex flex-col ml-4 my-auto">
        <span className="font-bold text-base">{elem.name.toUpperCase()}</span>
        <span className="font-bold text-sm">
          (
          {elem.nickname
            ? elem.nickname.toUpperCase()
            : elem.name.toUpperCase()}
          )
        </span>
        {isCommitte ? <></> : <span>{elem.city.toUpperCase()}-CE</span>}
      </div>
    </li>
  ));

  return listToUse.length ? (
    <ul className="flex flex-col flex-wrap gap-4 p-4">{renderPlayerCard}</ul>
  ) : (
    <div className=" w-full flex flex-col flex-wrap gap-4 p-4 justify-center items-center">
      <h2 className="text-xl">Ainda sem informações</h2>
    </div>
  );
};
