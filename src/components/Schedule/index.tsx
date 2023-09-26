import { useTeamsContext } from "@/context/teams_context";
import { getTeams } from "@/services/teams_service";
import { changeNameTeams } from "@/utils/changeNameTeams";
import { Spinner } from "@material-tailwind/react";
import { useEffect } from "react";

export const Schedule = () => {
  const { teams, setTeams } = useTeamsContext();
  useEffect(() => {
    getTeams({ teams, setTeams });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const baseClassLi =
    "flex w-full justify-between px-2 h-[32px] items-center text-xs  lg:text-xl";
  const baseClassSpan = "flex justify-center w-[12px] lg:w-[36px]";
  const listToRender = teams.map((elem) => changeNameTeams(elem));

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
      goals_suffered: "GC",
      goals_difference: "SG",
      points: "P",
    },
    ...listToRender.reverse(),
  ].map((elem, index) => {
    if (index > 20) {
    }

    const backgroundBg = index > 16 ? "bg-[#ff8a8a]" : "";

    return (
      <li
        key={elem.id}
        className={
          index % 2 == 0
            ? `${
                index == 0 && "font-bold"
              } ${baseClassLi} ${backgroundBg} bg-bgone`
            : `${baseClassLi} ${backgroundBg} bg-bgtwo`
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

  return !teams.length ? (
    <div className="flex items-center justify-center gap-8 text-bgmodal p-16 w-3/4 m-auto">
      <Spinner className="h-12 w-12" />
    </div>
  ) : (
    <ul className="w-10/12 m-auto">{renderTeams}</ul>
  );
};
