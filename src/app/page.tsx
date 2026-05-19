"use client";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import Taskbar from "@/components/Taskbar/Taskbar";
import AppList from "@/components/Desktop/AppList";
import { Apps } from "@/data/apps";

export default function Home() {
  const context = useContext(AppContext);

  if (!context) return null;
  const { openedApps } = context;

  return (
    <div className="min-h-screen bg-[#008080] overflow-hidden">
      {/* Desktop */}
      <main className="relative h-[calc(100vh-36px)] w-full">
        
        {/* Desktop Icons */}
        <div className="flex flex-col flex-wrap content-start h-full p-2">
          {Apps.map((app, index) => (
            <AppList key={app.id} index={index} app={app} />
          ))}
        </div>

        {/* Open apps windows */}
        {openedApps.map((app) => {
          const Component = app.component;
          // Only render not minimized apps
          if (app.isMinimized) return null;

          return (
            <div 
              key={app.id}
              className="absolute"
              style={{ 
                zIndex: app.zIndex,
                top: `${50 + (app.id * 20)}px`,
                left: `${50 + (app.id * 20)}px`
              }}
            >
              {/* @ts-ignore - Por si TS chilla con el componente dinámico */}
              {typeof Component === 'function' ? <Component app={app} /> : Component}
            </div>
            
          );
        })}
        
      </main>

      {/* Taskbar */}
      <Taskbar />
    </div>
  );
}
