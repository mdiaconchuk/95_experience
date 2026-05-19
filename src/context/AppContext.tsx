// openApp, closeApp, toggleMinimize y focusApp
"use client";
import { createContext, ReactNode, useState } from "react";
import { AppType } from "@/types/types";

export const AppContext = createContext<AppContextInterface | null>(null);

interface AppContextInterface {
  openedApps: AppType[];
  openApp: (app: AppType) => void;
  focusApp: (app: AppType) => void;
  closeApp: (app: AppType) => void
}

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [openedApps, setOpenedApps] = useState<AppType[]>([]);
  const [maxZIndex, setMaxZIndex] = useState<number>(0);

  // OPEN APP FUNCTION
  const openApp = (app: AppType): void => {
    const nextZIndex = maxZIndex + 1;
    setMaxZIndex(nextZIndex);

    const alreadyOpen: boolean = openedApps.some(
      (opened) => opened.id === app.id,
    );
    // Check if app is already open
    if (alreadyOpen) {
      setOpenedApps(
        openedApps.map((item) =>
          item.id === app.id
            ? {
                ...item,
                isMinimized: false,
                isFocused: true,
                zIndex: nextZIndex,
              }
            : { ...item, isFocused: false },
        ),
      );
    } else {
      // If not open:

      const cleanOpenedApps = openedApps.map((item) => ({
        ...item,
        isFocused: false,
      }));

      const newInstance: AppType = {
        ...app,
        isOpen: true,
        isMinimized: false,
        isFocused: true,
        zIndex: nextZIndex,
      };

      // Add the app to array:
      setOpenedApps([...cleanOpenedApps, newInstance]);
    }
  };

  const closeApp = (app: AppType) => {
  setOpenedApps(
    openedApps.filter((item) => item.id !== app.id)
  )
}

  /* const toggleApp = () => {
  Debería minimizar la aplicación: Mantener la etiqueta en la taskbar pero debe
  dejar de renderizar el componente principal.
} */

  const focusApp = (app: AppType): void => {
    const nextZIndex = maxZIndex + 1;
    setMaxZIndex(nextZIndex);
    
  setOpenedApps(
    openedApps.map((item) => 
      item.id === app.id ? {...item, isFocused: true, zIndex: nextZIndex} : {...item, isFocused: false})
    )
  }

  const data = {
    openedApps,
    openApp,
    focusApp,
    closeApp,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
