import { CommitteeMember } from "@/interfaces/context_interface";
import { Dispatch, SetStateAction } from "react";
import { api } from "./axios";

interface getCommittesByTeamProps {
  teamId: string;
  setCommittees: Dispatch<SetStateAction<CommitteeMember[]>>;
}

export const getComitteesByTeam = async ({
  teamId,
  setCommittees,
}: getCommittesByTeamProps) => {
  const { data } = await api.get(`teams/${teamId}/committees/`);

  setCommittees(data);
};
