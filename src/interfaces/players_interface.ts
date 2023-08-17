import { Dispatch, SetStateAction } from "react";

export interface Player {
  id: string;
  name: string;
  age: number;
  city: string;
  nickname: string;
}

export interface IPlayersState {
  players: Player[];
  setPlayers: Dispatch<SetStateAction<Player[]>>;
}

export interface IPlayersContext extends IPlayersState {}
