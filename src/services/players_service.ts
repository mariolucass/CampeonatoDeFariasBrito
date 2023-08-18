import { IPlayersState, Player } from "@/interfaces/players_interface";
import { Dispatch, SetStateAction } from "react";
import { api } from "./axios";
interface getPlayersByTeamProps {
  teamId: string;
  setPlayers: Dispatch<SetStateAction<Player[]>>;
}



export const getPlayers = async ({ players, setPlayers }: IPlayersState) => {
  if (!players.length) {
    const { data } = await api.get("/players/");

    setPlayers(data);
  }
};

export const getPlayersByTeam = async ({
  teamId,
  setPlayers,
}: getPlayersByTeamProps) => {
  const { data } = await api.get(`teams/${teamId}/players/`);
  setPlayers(data);
};

export const retrievePlayer = async () => {};
export const createPlayer = async () => {};
export const updatePlayer = async () => {};
export const deletePlayer = async () => {};
