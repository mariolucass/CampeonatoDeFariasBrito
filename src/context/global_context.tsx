import { IChildren, IGlobalContext } from "@/interfaces/global";
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

export function GlobalProvider({ children }: IChildren) {
  const useWindowSize = () => {
    const isClient = typeof window === "object";
    const [windowSize, setWindowSize] = useState({
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    });

    useEffect(() => {
      if (!isClient) {
        return;
      }

      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return windowSize;
  };

  const [drawerState, setDrawerState] = useState<boolean>(false);

  const openDrawer = () => setDrawerState(true);
  const closeDrawer = () => setDrawerState(false);

  return (
    <GlobalContext.Provider
      value={{ drawerState, openDrawer, closeDrawer, useWindowSize }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobalContext = () => useContext(GlobalContext);
