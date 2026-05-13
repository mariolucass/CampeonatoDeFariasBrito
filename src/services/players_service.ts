import { IPlayersState, Player } from "@/interfaces/players_interface";
import { Team } from "@/interfaces/teams_interface";
import { Dispatch, SetStateAction } from "react";
import { api } from "./axios";
import { fetchMock, isMockMode } from "./mock_handler";

interface getPlayersByTeamProps {
  teamId: string;
  setPlayers: Dispatch<SetStateAction<Player[]>>;
}

export const getPlayers = async ({ players, setPlayers }: IPlayersState) => {
  if (!players.length) {
    if (isMockMode) {
      const playersByTeam = await fetchMock<Record<string, Player[]>>("/mocks/teams.json");
      const allPlayers = Object.entries(playersByTeam).flatMap(([teamName, playerList]) =>
        playerList
          .filter((p: any) => !p.is_committee)
          .map(player => ({ ...player, team: { name: teamName } }))
      );
      setPlayers(allPlayers as Player[]);
    } else {
      const { data } = await api.get("/players/");
      setPlayers(data);
    }
  }
};

export const getPlayersByTeam = async ({
  teamId,
  setPlayers,
}: getPlayersByTeamProps) => {
  if (isMockMode) {
    const rankings = await fetchMock<Team[]>("/mocks/rankings.json");
    const team = rankings.find(t => t.id === teamId);
    if (team) {
      const playersByTeam = await fetchMock<Record<string, Player[]>>("/mocks/teams.json");
      const teamPlayers = playersByTeam[team.name] || [];
      setPlayers(teamPlayers.filter((p: any) => !p.is_committee) as Player[]);
    } else {
      setPlayers([]);
    }
  } else {
    const { data } = await api.get(`teams/${teamId}/players/`);
    setPlayers(data);
  }
};

export const retrievePlayer = async () => {};
export const createPlayer = async () => {};
export const updatePlayer = async () => {};
export const deletePlayer = async () => {};
