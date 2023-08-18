import { Dispatch, SetStateAction } from "react";

export interface Player {
  id: string;
  matches_played: string;
  name: string;
  age: number;
  city: string;
  nickname: string;
  goals: number;
}

export interface IPlayersState {
  players: Player[];
  setPlayers: Dispatch<SetStateAction<Player[]>>;
}

export interface IPlayersContext extends IPlayersState {}
