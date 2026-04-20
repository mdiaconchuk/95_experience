import Taskbar from "@/components/Taskbar/Taskbar";
import AppList from "@/components/Desktop/AppList";
import { Apps } from "@/data/apps";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="min-h-screen w-full max-w-3xl">
        <div className="flex flex-col flex-wrap content-start h-[calc(100vh-36px)] p-2">
          {Apps.map((app, index) => (
            <AppList
              key={index}
              index={index}
              name={app.name}
              icon={app.icon}
            />
          ))}
        </div>
        <Taskbar />
      </main>
    </div>
  );
}
