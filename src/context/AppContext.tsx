// openApp, closeApp, toggleMinimize y focusApp
"use client";
import { createContext, ReactNode, useState } from "react";
import { AppType } from "@/types/types";

export const AppContext = createContext<AppContextInterface | null>(null);

interface AppContextInterface {
  openedApps: AppType[];
  openApp: (app: AppType) => void;
}

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [openedApps, setOpenedApps] = useState<AppType[]>([]);
  const openApp = (app: AppType): void => {
    const alreadyOpen: boolean = openedApps.some(
      (opened) => opened.id === app.id,
    );
    // Check if app is already open
    if (alreadyOpen) {
      setOpenedApps(
        openedApps.map((item) =>
          item.id === app.id
            ? { ...item, isMinimized: false, zIndex: openedApps.length + 1 }
            : item,
        ),
      );
    } else {
      // If not open:
      const newInstance: AppType = {
        ...app,
        isOpen: true,
        isMinimized: false,
        zIndex: openedApps.length + 1,
      };

      // Add the app to array:
      setOpenedApps([...openedApps, newInstance]);
    }
  };

  /* const closeApp = () => {
  Debería cerrar (dejar de renderizar) el componente principal de la aplicación misma,
  a la vez que hacer lo mismo en la barra de tareas.
} */

  /* const toggleApp = () => {
  Debería minimizar la aplicación: Mantener la etiqueta en la taskbar pero debe
  dejar de renderizar el componente principal.
} */

  /* const focusApp = () => {
  Debería aumentar el zIndex del componente principal de la aplicación 
} */

  const data = {
    openedApps,
    openApp,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
