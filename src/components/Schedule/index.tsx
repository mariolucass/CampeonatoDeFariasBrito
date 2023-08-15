import { Team } from "@/interfaces/global";
import { api } from "@/services/axios";
import { useEffect, useState } from "react";

export const Schedule = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  const getTeams = async () => {
    if (!teams.length) {
      const teams = await api.get("/teams");
      setTeams(teams.data);
    }
  };
  useEffect(() => {
    getTeams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const baseClassLi =
    "flex w-full justify-between px-2 h-[32px] items-center text-xs";

  const renderTeams = [
    {
      id: "",
      name: "TIME",
      matches_played: "PJ",
      wins: "V",
      draws: "E",
      loses: "D",
      goals_scored: "GP",
      goals_suffered: "GS",
      goals_difference: "SG",
      points: "P",
    },
    ...teams,
  ].map((elem, index) => (
    <li
      key={elem.id}
      className={
        index % 2 == 0 ? `${baseClassLi} bg-bgone` : `${baseClassLi} bg-bgtwo`
      }
    >
      <div className="flex gap-2">
        <span className="flex justify-center w-[18px]">
          {index != 0 ? `${index}º` : "P"}
        </span>
        <span className="flex w-[80px] font-bold justify-center">
          {elem.name}
        </span>
      </div>

      <div className="flex gap-2">
        <span className="flex justify-center w-[12px]">
          {elem.matches_played}
        </span>
        <span className="flex justify-center w-[12px]">{elem.wins}</span>
        <span className="flex justify-center w-[12px]">{elem.draws}</span>
        <span className="flex justify-center w-[12px]">{elem.loses}</span>
        <span className="flex justify-center w-[12px]">
          {elem.goals_scored}
        </span>
        <span className="flex justify-center w-[12px]">
          {elem.goals_suffered}
        </span>
        <span className="flex justify-center w-[12px]">
          {elem.goals_difference}
        </span>
      </div>

      <div>
        <span className="font-bold w-[18px]">{elem.points}</span>
      </div>
    </li>
  ));

  return <ul className="w-3/4 m-auto">{renderTeams}</ul>;
};
