import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface IGlobalContext {
  drawerState: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}
