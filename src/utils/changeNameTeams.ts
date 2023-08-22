import { Match } from "@/interfaces/matches_interface";
import { Team } from "@/interfaces/teams_interface";

export const changeNameTeamsInMatches = (elem: Match) => {
  const listTeamsFiltered = [
    "Pedro Fernandes",
    "Meninos da Vila",
    "Atlético Lázio",
  ];

  const teamsChanged = ["P. Fernandes", "M. da Vila", "Atl. Lázio"];

  if (listTeamsFiltered.includes(elem.visitant.name)) {
    const index = listTeamsFiltered.indexOf(elem.visitant.name);
    elem.visitant.name = teamsChanged[index];
    return elem;
  }

  if (listTeamsFiltered.includes(elem.principal.name)) {
    const index = listTeamsFiltered.indexOf(elem.principal.name);
    elem.principal.name = teamsChanged[index];
    return elem;
  }

  return elem;
};

export const changeNameTeams = (elem: Team) => {
  const listTeamsFiltered = [
    "Pedro Fernandes",
    "Meninos da Vila",
    "Atlético Lázio",
  ];

  const teamsChanged = ["P. Fernandes", "M. da Vila", "Atl. Lázio"];

  if (listTeamsFiltered.includes(elem.name)) {
    const index = listTeamsFiltered.indexOf(elem.name);
    elem.name = teamsChanged[index];
    return elem;
  }

  return elem;
};
