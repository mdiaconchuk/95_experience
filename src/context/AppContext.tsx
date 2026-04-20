import { createContext, useState, useContext, ReactNode } from "react";
import { AppContextType } from "@/types/types";

// 1. Definimos qué funciones va a tener nuestro Windows
interface WinContext {
  apps: AppContextType[];
  openApp: (id: number) => void;
  closeApp: (id: number) => void;
}

const WinContext = createContext<WinContext | undefined>(undefined);

export const WinProvider = ({ children, initialApps }: { children: ReactNode, initialApps: AppContextType[] }) => {
  const [apps, setApps] = useState(initialApps);

  // LA LÓGICA: Cuando llamás a esta función, React refresca TODO lo que use el context
  const openApp = (id: number) => {
    setApps(current => current.map(app => 
      app.id === id ? { ...app, isOpen: true, isMinimized: false } : app
    ));
  };

  const closeApp = (id: number) => {
    setApps(current => current.map(app => 
      app.id === id ? { ...app, isOpen: false } : app
    ));
  };

  return (
    <WinContext.Provider value={{ apps, openApp, closeApp }}>
      {children}
    </WinContext.Provider>
  );
};

export const useWindows = () => useContext(WinContext)!;