import { usePlayersContext } from "@/context/players_context";

export const Strikers = () => {
  const { players } = usePlayersContext();

  const baseClassLi =
    "flex w-full justify-between px-2 h-[32px] items-center text-xs  lg:text-xl";

  const baseClassSpan = "flex justify-center ";

  const renderStrikers = [
    {
      id: "",
      nickname: "JOGADOR",
      matches_played: "PARTIDAS",
      goals: "GOLS",
    },
    ...players.reverse(),
  ].map((elem, index) => (
    <li
      key={elem.id}
      className={
        index % 2 == 0
          ? `${index == 0 && "font-bold"} ${baseClassLi} bg-bgone`
          : `${baseClassLi} bg-bgtwo`
      }
    >
      <div className="flex gap-2">
        <span className="flex justify-center w-[18px] lg:w-[48px] ">
          {index != 0 ? `${index}º` : "POS"}
        </span>

        <span className="flex w-[80px] font-bold justify-left lg:w-[160px]">
          {elem.nickname}
        </span>
      </div>

      <div className="flex gap-2">
        <span className={baseClassSpan}>{elem.matches_played}</span>
        <span className={baseClassSpan}>{elem.goals}</span>
      </div>
    </li>
  ));

  return <ul className="w-3/4 m-auto">{renderStrikers}</ul>;
};
