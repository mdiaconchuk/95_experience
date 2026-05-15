import Image from "next/image";

interface AppWindowProps {
  title: string;
  icon: string;
  type?: "folder" | "other";
  children: React.ReactNode;
}

function AppWindow({ title, icon, type, children }: AppWindowProps) {
  return (
    <div className="absolute top-10 left-10 w-150 h-100 bg-win-bg border-win-out p-0.5 flex flex-col z-10 select-none">
      {/* Title bar*/}
      <div className="flex justify-between items-center bg-win-blue text-white px-1.5 py-0.5 mb-0.5 cursor-default">
        <div className="flex items-center gap-1 text-sm tracking-wide">
          <Image
            src={`/assets/icons/${icon}.png`}
            alt="Internet Explorer"
            width={16}
            height={16}
            className="shrink-0"
          />
          <span>{title}</span>
        </div>

        {/* Controles de la ventana */}
        <div className="flex gap-0.5 *:cursor-pointer">
          <button className="windowControlBtn">
            <span className="text-black font-bold">_</span>
          </button>
          <button className="windowControlBtn">
            <div className="size-2.5 border-black border-t-2 border-l border-r border-b" />
          </button>
          <button className="windowControlBtn">
            <span className="text-black font-bold text-xs mt-0.5">X</span>
          </button>
        </div>
      </div>

      {/* Buttons menu */}
      <div className="flex items-center gap-3 px-2 pt-0.5 text-md text-black *:cursor-pointer">
        <span>
          <span className="underline">F</span>ile
        </span>
        <span>
          <span className="underline">E</span>dit
        </span>
        <span>
          <span className="underline">V</span>iew
        </span>
        <span>
          <span className="underline">H</span>elp
        </span>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 bg-white border-win-in overflow-auto text-black">
        {children}
      </div>
    </div>
  );
}

export default AppWindow;
