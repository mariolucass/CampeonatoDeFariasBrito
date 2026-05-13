import { Dispatch, SetStateAction } from "react";
import { Player } from "./players_interface";

export interface Team {
  id: string;
  crest: string;
  name: string;
  players: Player[];
  matches_played: number;
  wins: number;
  wins_penalty: number;
  loses_penalty: number;
  loses: number;
  draws: number;

  goals_scored: number;
  goals_suffered: number;
  goals_difference: number;

  points: number;
}

export interface TeamSecondRound {
  id: string;
  crest: string;
  name: string;
  players: Player[];
  matches_played_second_round: number;
  wins_second_round: number;
  wins_penalty_second_round: number;
  loses_penalty_second_round: number;
  loses_second_round: number;
  draws_second_round: number;

  goals_scored_second_round: number;
  goals_suffered_second_round: number;
  goals_difference_second_round: number;

  points_second_round: number;
}

export interface ITeamsState {
  teams: Team[];
  setTeams: Dispatch<SetStateAction<Team[]>>;
}

export interface ITeamsSecondRoundState {
  teamsSecondRound: TeamSecondRound[];
  setTeamsSecondRound: Dispatch<SetStateAction<TeamSecondRound[]>>;
}

export interface ITeamsContext extends ITeamsState, ITeamsSecondRoundState {}

export interface RenderTeamInMatch {
  name: string;
  image: string;
}
