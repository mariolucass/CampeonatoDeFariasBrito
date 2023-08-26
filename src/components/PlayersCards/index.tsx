import { CommitteeMember } from "@/interfaces/context_interface";
import { Player } from "@/interfaces/players_interface";
import { getComitteesByTeam } from "@/services/committee_service";
import { getPlayersByTeam } from "@/services/players_service";
import { Spinner } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface PlayersCardsProps {
  teamId: string;
  isCommitte?: boolean;
}

export const PlayersCards = ({ teamId, isCommitte }: PlayersCardsProps) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [committees, setCommittees] = useState<CommitteeMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getInfos = async () => {
    if (isCommitte) {
      await getComitteesByTeam({ teamId, setCommittees });
      setLoading(false);
    } else {
      await getPlayersByTeam({ teamId, setPlayers });
      setLoading(false);
    }
  };

  useEffect(() => {
    getInfos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teamId]);

  const listToUse = isCommitte
    ? committees.sort((a, b) => a.nickname.localeCompare(b.nickname))
    : players.sort((a, b) => a.nickname.localeCompare(b.nickname));

  const renderPlayerCard = listToUse.map((elem: any) => (
    <li
      key={elem.id}
      className="w-1/3 flex flex-col bg-bgone rounded-lg justify-center items-center lg:w-1/5"
    >
      <div className="w-full m-auto flex justify-center items-center h-[128px] lg:h-[208px]">
        <Image
          src={elem.image}
          alt={elem.name}
          width={"104"}
          height={"100"}
          className="rounded-lg m-0 mt-2"
          style={{ width: "80%", height: "90%", objectFit: "cover" }}
        />
      </div>

      <div className="flex flex-col my-auto text-center">
        <span className="font-bold text-xl">{elem.nickname}</span>
      </div>
    </li>
  ));

  return loading ? (
    <div className=" w-full flex flex-col flex-wrap gap-4 p-4 justify-center items-center text-bgmodal">
      <Spinner className="h-12 w-12" />
    </div>
  ) : listToUse.length ? (
    <ul className="flex flex-wrap gap-0 p-0 justify-center items-center bg-bgone rounded-lg pb-2">
      {renderPlayerCard}
    </ul>
  ) : (
    <div className=" w-full flex flex-col flex-wrap gap-4 p-4 justify-center items-center">
      <h2 className="text-xl">Ainda sem informações</h2>
    </div>
  );
};
