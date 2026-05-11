import Image from 'next/image'

interface AppWindowProps {
  title: string;
  icon: string;
  type?: "folder" | "other";
}

function AppWindow({ title, icon, type }: AppWindowProps) {
  return (
    <div className="absolute top-10 left-10 w-150 h-100 bg-win-bg border-win-out p-0.5 flex flex-col z-10 select-none shadow-md">
      {/* Title bar*/}
      <div className="flex justify-between items-center bg-win-blue text-white px-1 py-0.5 mb-0.5 cursor-default">
        <div className="flex items-center gap-1 font-bold text-sm tracking-wide">
          <Image src={`/assets/icons/${icon}.png`} alt="Internet Explorer" width={16} height={16} className="shrink-0" />
          <span>{title}</span>
        </div>
        
        {/* Controles de la ventana */}
        <div className="flex items-center gap-0.5">
          <button className="w-4 h-4 bg-win-bg border-win-out active:border-win-in flex items-center justify-center focus:outline-none">
            <span className="text-black font-bold -translate-y-1">_</span>
          </button>
          <button className="w-4 h-4 bg-win-bg border-win-out active:border-win-in flex items-center justify-center focus:outline-none">
            <div className="size-2.5 border-black border-t-2 border-l border-r border-b mt-0.5" />
          </button>
          <button className="w-4 h-4 bg-win-bg border-win-out active:border-win-in flex items-center justify-center focus:outline-none ml-[2px]">
            <span className="text-black font-bold text-[10px]">X</span>
          </button>
        </div>
      </div>

      {/* Menú de la ventana (solo visible en carpetas) */}
      {type === "folder" && (
        <div className="flex items-center gap-3 px-2 py-0.5 text-sm text-black">
          <span className="cursor-pointer"><span className="underline">F</span>ile</span>
          <span className="cursor-pointer"><span className="underline">E</span>dit</span>
          <span className="cursor-pointer"><span className="underline">V</span>iew</span>
          <span className="cursor-pointer"><span className="underline">H</span>elp</span>
        </div>
      )}

      {/* Contenido principal */}
      {/* <div className="flex-1 bg-white border-win-in mt-1 overflow-auto p-4 text-black">
      </div> */}
    </div>
  )
}

export default AppWindow