import { IMatchesState } from "@/interfaces/matches_interface";
import { api } from "./axios";

export const getMatches = async ({ matches, setMatches }: IMatchesState) => {
  if (!matches.length) {
    const { data } = await api.get("/matches/");
    setMatches(data);
  }
};

export const retrieveMatch = async () => {};
export const createMatch = async () => {};
export const updateMatch = async () => {};
export const deleteMatch = async () => {};
