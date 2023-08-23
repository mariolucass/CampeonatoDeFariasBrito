import { ITeamsState } from "@/interfaces/teams_interface";
import { api } from "./axios";

export const getTeams = async ({ teams, setTeams }: ITeamsState) => {
  if (!teams.length) {
    const { data } = await api.get("/teams/");
    setTeams(data);
  }
};

export const retrieveTeam = async () => {};
export const createTeam = async () => {};
export const updateTeam = async () => {};
export const deleteTeam = async () => {};
