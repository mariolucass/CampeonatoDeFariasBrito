import { IChildren } from "@/interfaces/global";
import { IPlayersContext, Player } from "@/interfaces/players_interface";
import { createContext, useContext, useState } from "react";

const PlayersContext = createContext<IPlayersContext>({} as IPlayersContext);

export function PlayersProvider({ children }: IChildren) {
  const [players, setPlayers] = useState<Player[]>([]);
  return (
    <PlayersContext.Provider value={{ players, setPlayers }}>
      {children}
    </PlayersContext.Provider>
  );
}
export const usePlayersContext = () => useContext(PlayersContext);
