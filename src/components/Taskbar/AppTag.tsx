import Image from "next/image";
import { AppType } from "@/types/types";

interface AppTagProps {
  app: AppType;
}

function AppTag({ app }: AppTagProps) {
  const isActive = !app.isMinimized;

  return (
    <button
      className={`flex self-center min-w-24 max-w-40 mr-1 px-0.5 py-1 cursor-pointer select-none
        active:border-win-in ${
          isActive ? "border-win-in font-bold" : "border-win-out font-normal"
        }`}
    >
      <div className="flex items-center gap-x-1 w-full px-1 overflow-hidden">
        <Image
          src={`/assets/icons/${app.taskbarIcon}.png`}
          alt={app.name}
          width={16}
          height={16}
          className="shrink-0"
        />
        <p className="truncate text-left leading-none">{app.name}</p>
      </div>
    </button>
  );
}

export default AppTag;
