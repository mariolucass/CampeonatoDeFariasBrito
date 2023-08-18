import { IChildren } from "@/interfaces/global";
import { ITeamsContext, Team } from "@/interfaces/teams_interface";
import { getTeams } from "@/services/teams_service";
import { createContext, useContext, useEffect, useState } from "react";

const TeamsContext = createContext<ITeamsContext>({} as ITeamsContext);

export function TeamsProvider({ children }: IChildren) {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    getTeams({ teams, setTeams });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TeamsContext.Provider value={{ teams, setTeams }}>
      {children}
    </TeamsContext.Provider>
  );
}
export const useTeamsContext = () => useContext(TeamsContext);
