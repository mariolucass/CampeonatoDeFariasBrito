import { CommitteeMember } from "@/interfaces/context_interface";
import { Team } from "@/interfaces/teams_interface";
import { Player } from "@/interfaces/players_interface";
import { Dispatch, SetStateAction } from "react";
import { api } from "./axios";
import { fetchMock, isMockMode } from "./mock_handler";

interface getCommittesByTeamProps {
  teamId: string;
  setCommittees: Dispatch<SetStateAction<CommitteeMember[]>>;
}

export const getComitteesByTeam = async ({
  teamId,
  setCommittees,
}: getCommittesByTeamProps) => {
  if (isMockMode) {
    const rankings = await fetchMock<Team[]>("/mocks/rankings.json");
    const team = rankings.find(t => t.id === teamId);
    if (team) {
      const playersByTeam = await fetchMock<Record<string, Player[]>>("/mocks/teams.json");
      const teamPlayers = playersByTeam[team.name] || [];
      setCommittees(teamPlayers.filter((p: any) => p.is_committee) as unknown as CommitteeMember[]);
    } else {
      setCommittees([]);
    }
  } else {
    const { data } = await api.get(`teams/${teamId}/committees/`);
    setCommittees(data);
  }
};
