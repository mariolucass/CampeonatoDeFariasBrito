import { usePlayersContext } from "@/context/players_context";
import { getPlayers } from "@/services/players_service";
import { useEffect } from "react";

export const Strikers = () => {
  const { players, setPlayers } = usePlayersContext();

  useEffect(() => {
    getPlayers({ players, setPlayers });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const baseClassLi =
    "flex w-full justify-between px-2 h-[32px] items-center text-xs lg:text-xl";

  const baseClassSpan = "flex justify-center";

  const sortedList = [...players.filter((elem) => elem.goals > 0)];

  console.log(sortedList);

  const renderStrikers = [
    {
      id: "",
      nickname: "JOG",
      image: "",
      matches_played: "PJ",
      goals: "GOLS",
      team: {
        name: "TIME",
      },
    },
    ...sortedList.reverse(),
  ].map((elem, index) => (
    <li
      key={elem.id}
      className={
        index % 2 == 0
          ? `${index == 0 && "font-bold"} ${baseClassLi} bg-bgone`
          : `${baseClassLi} bg-bgtwo`
      }
    >
      <div className="flex lg:gap-8 h-[26px] items-center">
        <span className="flex justify-center w-[18px] lg:w-[80px] ">
          {index != 0 ? `${index}º` : "POS"}
        </span>

        <span className="ml-4 flex w-[64px] font-bold justify-left lg:w-[104px] lg:ml-0">
          {elem.nickname}
        </span>

        <span className="flex w-[56px] font-bold justify-left lg:w-[80px]">
          {elem.team.name}
        </span>
      </div>

      <div className="flex gap-2 h-[26px] items-center">
        <span className={` ${baseClassSpan} w-[32px] lg:w-[72px]`}>
          {elem.matches_played}
        </span>
        <span className={`${baseClassSpan} w-[32px] lg:w-[40px]`}>
          {elem.goals}
        </span>
      </div>
    </li>
  ));

  return (
    <>
      <ul className="w-10/12 m-auto pb-4">{renderStrikers}</ul>
      <span className="pb-4 text-center w-10/12">
        Ao longo do campeonato serão adicionadas e atualizadas as informacões.
      </span>
    </>
  );
};
