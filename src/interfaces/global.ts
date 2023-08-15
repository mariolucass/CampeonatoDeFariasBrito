import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface Player {
  id: string;
  name: string;
  age: number;
  city: string;
  nickname: string;
}

export interface Team {
  id: string;
  name: string;
  players: Player[];
  matches_played: number;
  wins: number;
  loses: number;
  draws: number;

  goals_scored: number;
  goals_suffered: number;
  goals_difference: number;

  points: number;
}

export interface Match {
  id: string;
  visitant: {
    id: string;
    name: string;
    points: number;
    matches_played: number;
  };
  principal: {
    id: string;
    name: string;
    points: number;
    matches_played: number;
  };
  goals_visitant: number;
  goals_principal: number;
  date: null;
}
