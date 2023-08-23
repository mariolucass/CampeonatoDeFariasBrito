"use client";

import { IChildren } from "@/interfaces/global";
import { GlobalProvider } from "./global_context";
import { MatchesProvider } from "./matches_context";
import { PlayersProvider } from "./players_context";
import { TeamsProvider } from "./teams_context";

export const ContextProvider = ({ children }: IChildren) => (
  <GlobalProvider>
    <TeamsProvider>
      <PlayersProvider>
        <MatchesProvider>{children}</MatchesProvider>
      </PlayersProvider>
    </TeamsProvider>
  </GlobalProvider>
);
