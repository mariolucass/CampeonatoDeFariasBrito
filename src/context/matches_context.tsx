import { IChildren } from "@/interfaces/global";
import { IMatchesContext, Match } from "@/interfaces/matches_interface";
import { createContext, useContext, useState } from "react";

const MatchesContext = createContext<IMatchesContext>({} as IMatchesContext);

export function MatchesProvider({ children }: IChildren) {
  const [matches, setMatches] = useState<Match[]>([]);
  return (
    <MatchesContext.Provider value={{ matches, setMatches }}>
      {children}
    </MatchesContext.Provider>
  );
}
export const useMatchesContext = () => useContext(MatchesContext);
