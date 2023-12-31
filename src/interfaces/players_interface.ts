import { Dispatch, SetStateAction } from "react";

export interface Player {
  id: string;
  image: string;
  matches_played: string;
  name: string;
  age: number;
  city: string;
  nickname: string;
  goals: number;

  team: {
    name: string;
  };
}

export interface IPlayersState {
  players: Player[];
  setPlayers: Dispatch<SetStateAction<Player[]>>;
}

export interface IPlayersContext extends IPlayersState {}
