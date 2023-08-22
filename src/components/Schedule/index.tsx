import { useTeamsContext } from "@/context/teams_context";

export const Schedule = () => {
  const { teams } = useTeamsContext();

  const baseClassLi =
    "flex w-full justify-between px-2 h-[32px] items-center text-xs  lg:text-xl";

  const baseClassSpan = "flex justify-center w-[12px] lg:w-[36px]";

  const listTeamsFiltered = [
    "Pedro Fernandes",
    "Meninos da Vila",
    "Atlético Lázio",
  ];

  const teamsChanged = ["P. Fernandes", "M. da Vila", "Atl. Lázio"];

  const listToRender = teams.map((elem) => {
    if (listTeamsFiltered.includes(elem.name)) {
      const index = listTeamsFiltered.indexOf(elem.name);
      elem.name = teamsChanged[index];
      return elem;
    }

    return elem;
  });

  const renderTeams = [
    {
      id: "",
      name: "TIME",
      matches_played: "PJ",
      wins: "V",
      wins_penalty: "VP",
      loses_penalty: "DP",
      loses: "D",
      goals_scored: "GP",
      goals_suffered: "GS",
      goals_difference: "SG",
      points: "P",
    },
    ...listToRender.reverse(),
  ].map((elem, index) => {
    return (
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
            {elem.name}
          </span>
        </div>

        <div className="flex gap-2">
          <span className={baseClassSpan}>{elem.matches_played}</span>
          <span className={baseClassSpan}>{elem.wins}</span>
          <span className={baseClassSpan}>{elem.wins_penalty}</span>
          <span className={baseClassSpan}>{elem.loses_penalty}</span>
          <span className={baseClassSpan}>{elem.loses}</span>
          <span className={baseClassSpan}>{elem.goals_scored}</span>
          <span className={baseClassSpan}>{elem.goals_suffered}</span>
          <span className={baseClassSpan}>{elem.goals_difference}</span>
        </div>

        <div>
          <span className=" flex justify-center font-bold w-[18px] lg:w-[48px] ">
            {elem.points}
          </span>
        </div>
      </li>
    );
  });

  return <ul className="w-3/4 m-auto">{renderTeams}</ul>;
};
