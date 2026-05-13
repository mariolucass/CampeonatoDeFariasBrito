import { IMatchesState, Match } from "@/interfaces/matches_interface";
import { api } from "./axios";
import { fetchMock, isMockMode } from "./mock_handler";

export const getMatches = async ({ matches, setMatches }: IMatchesState) => {
  if (!matches.length) {
    if (isMockMode) {
      const data = await fetchMock<Match[]>("/mocks/matches.json");
      setMatches(data);
    } else {
      const { data } = await api.get("/matches/");
      setMatches(data);
    }
  }
};

export const retrieveMatch = async () => {};
export const createMatch = async () => {};
export const updateMatch = async () => {};
export const deleteMatch = async () => {};
