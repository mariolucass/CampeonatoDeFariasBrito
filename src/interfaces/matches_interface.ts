import { Dispatch, SetStateAction } from "react";

export interface Match {
  id: string;
  date: string;

  goals_principal: number;
  goals_penalty_principal: number;

  principal: {
    id: string;
    name: string;
    crest: string;
  };

  goals_visitant: number;
  goals_penalty_visitant: number;
  visitant: {
    id: string;
    name: string;
    crest: string;
  };
}

export interface IMatchesState {
  matches: Match[];
  setMatches: Dispatch<SetStateAction<Match[]>>;
}

export interface IMatchesContext extends IMatchesState {}
