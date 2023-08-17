"use client";

import { IChildren } from "@/interfaces/global";
import { MatchesProvider } from "./matches_context";
import { PlayersProvider } from "./players_context";
import { TeamsProvider } from "./teams_context";

export const ContextProvider = ({ children }: IChildren) => (
  <TeamsProvider>
    <PlayersProvider>
      <MatchesProvider>{children}</MatchesProvider>
    </PlayersProvider>
  </TeamsProvider>
);
