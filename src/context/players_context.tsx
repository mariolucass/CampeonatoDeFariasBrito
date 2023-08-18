import { IChildren } from "@/interfaces/global";
import { IPlayersContext, Player } from "@/interfaces/players_interface";
import { getPlayers } from "@/services/players_service";
import { createContext, useContext, useEffect, useState } from "react";

const PlayersContext = createContext<IPlayersContext>({} as IPlayersContext);

export function PlayersProvider({ children }: IChildren) {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    getPlayers({ players, setPlayers });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PlayersContext.Provider value={{ players, setPlayers }}>
      {children}
    </PlayersContext.Provider>
  );
}
export const usePlayersContext = () => useContext(PlayersContext);
