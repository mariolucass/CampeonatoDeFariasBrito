import { Dispatch, SetStateAction } from "react";

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

export interface IMatchesState {
  matches: Match[];
  setMatches: Dispatch<SetStateAction<Match[]>>;
}

export interface IMatchesContext extends IMatchesState {}
