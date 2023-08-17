import { Dispatch, SetStateAction } from "react";
import { Player } from "./players_interface";

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

export interface ITeamsState {
  teams: Team[];
  setTeams: Dispatch<SetStateAction<Team[]>>;
}

export interface ITeamsContext extends ITeamsState {}
