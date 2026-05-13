import { IChildren } from "@/interfaces/global";
import {
  ITeamsContext,
  Team,
  TeamSecondRound,
} from "@/interfaces/teams_interface";
import { createContext, useContext, useState } from "react";

const TeamsContext = createContext<ITeamsContext>({} as ITeamsContext);

export function TeamsProvider({ children }: IChildren) {
  const [teams, setTeams] = useState<Team[]>([]);
  const [teamsSecondRound, setTeamsSecondRound] = useState<TeamSecondRound[]>(
    []
  );

  return (
    <TeamsContext.Provider
      value={{ teams, setTeams, teamsSecondRound, setTeamsSecondRound }}
    >
      {children}
    </TeamsContext.Provider>
  );
}
export const useTeamsContext = () => useContext(TeamsContext);
