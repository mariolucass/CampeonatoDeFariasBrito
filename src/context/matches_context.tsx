import { IChildren } from "@/interfaces/global";
import { IMatchesContext, Match } from "@/interfaces/matches_interface";
import { getMatches } from "@/services/matches_service";
import { createContext, useContext, useEffect, useState } from "react";

const MatchesContext = createContext<IMatchesContext>({} as IMatchesContext);

export function MatchesProvider({ children }: IChildren) {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    getMatches({ matches, setMatches });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MatchesContext.Provider value={{ matches, setMatches }}>
      {children}
    </MatchesContext.Provider>
  );
}
export const useMatchesContext = () => useContext(MatchesContext);
