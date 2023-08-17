import { IPlayersState } from "@/interfaces/players_interface";
import { api } from "./axios";

export const getPlayers = async ({ players, setPlayers }: IPlayersState) => {
  if (!players.length) {
    const { data } = await api.get("/players/");
    setPlayers(data);
  }
};

export const retrievePlayer = async () => {};
export const createPlayer = async () => {};
export const updatePlayer = async () => {};
export const deletePlayer = async () => {};
