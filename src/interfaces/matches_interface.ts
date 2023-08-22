import { Dispatch, SetStateAction } from "react";

export interface Match {
  id: string;
  date: string;

  goals_principal: number;
  principal: {
    id: string;
    name: string;
    points: number;
    matches_played: number;
  };

  goals_visitant: number;
  visitant: {
    id: string;
    name: string;
    points: number;
    matches_played: number;
  };
}

export interface IMatchesState {
  matches: Match[];
  setMatches: Dispatch<SetStateAction<Match[]>>;
}

export interface IMatchesContext extends IMatchesState {}
