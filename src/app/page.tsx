"use client";
import Taskbar from "@/components/Taskbar/Taskbar";
import AppList from "@/components/Desktop/AppList";
import { Apps } from "@/data/apps";
import AppWindow from "@/components/AppWindow/IE/AppWindow";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="min-h-screen w-full max-w-3xl">
        <AppWindow title="IE" icon="internet-explorer-32x32"/>
        <div className="flex flex-col flex-wrap content-start h-[calc(100vh-36px)] p-2">
          {Apps.map((app, index) => (
            <AppList key={app.id} index={index} app={app} />
          ))}
        </div>
        <Taskbar />
      </main>
    </div>
  );
}
