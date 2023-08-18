import { IChildren, IGlobalContext } from "@/interfaces/global";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

export function GlobalProvider({ children }: IChildren) {
  const [drawerState, setDrawerState] = useState<boolean>(false);

  const openDrawer = () => setDrawerState(true);
  const closeDrawer = () => setDrawerState(false);

  return (
    <GlobalContext.Provider value={{ drawerState, openDrawer, closeDrawer }}>
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobalContext = () => useContext(GlobalContext);
