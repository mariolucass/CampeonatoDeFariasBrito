import {
  ITeamsSecondRoundState,
  ITeamsState,
  Team,
  TeamSecondRound,
} from "@/interfaces/teams_interface";
import { Player } from "@/interfaces/players_interface";
import { api } from "./axios";
import { fetchMock, isMockMode } from "./mock_handler";

export const getTeams = async ({ teams, setTeams }: ITeamsState) => {
  if (!teams.length) {
    if (isMockMode) {
      const rankings = await fetchMock<Team[]>("/mocks/rankings.json");
      const playersByTeam = await fetchMock<Record<string, Player[]>>("/mocks/teams.json");
      const data = rankings.map((team) => ({
        ...team,
        players: playersByTeam[team.name] || [],
      }));
      setTeams(data);
    } else {
      const { data } = await api.get("/teams/");
      setTeams(data);
    }
  }
};

export const getTeamsSecondRound = async ({
  teamsSecondRound,
  setTeamsSecondRound,
}: ITeamsSecondRoundState) => {
  if (!teamsSecondRound.length) {
    if (isMockMode) {
      const secondRound = await fetchMock<TeamSecondRound[]>(
        "/mocks/teams-second-round.json"
      );
      const playersByTeam = await fetchMock<Record<string, Player[]>>("/mocks/teams.json");
      const data = secondRound.map((team) => ({
        ...team,
        players: playersByTeam[team.name] || [],
      }));
      setTeamsSecondRound(data);
    } else {
      const { data } = await api.get("/teams/second-round/");
      setTeamsSecondRound(data);
    }
  }
};

export const getRankings = async ({ teams, setTeams }: ITeamsState) => {
  if (!teams.length) {
    if (isMockMode) {
      const rankings = await fetchMock<Team[]>("/mocks/rankings.json");
      const playersByTeam = await fetchMock<Record<string, Player[]>>("/mocks/teams.json");
      const data = rankings.map((team) => ({
        ...team,
        players: playersByTeam[team.name] || [],
      }));
      setTeams(data);
    } else {
      const { data } = await api.get("/rankings/");
      setTeams(data);
    }
  }
};

export const retrieveTeam = async () => {};
export const createTeam = async () => {};
export const updateTeam = async () => {};
export const deleteTeam = async () => {};
