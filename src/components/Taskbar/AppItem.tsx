import React from "react";
import Image from "next/image";

interface AppItemProps {
  index: number;
  name: string;
  icon: string;
  type?: string;
  isSpecial: boolean;
}

function AppItem({ index, name, icon, type, isSpecial }: AppItemProps) {
  return (
    <React.Fragment>
      {index === 0 && isSpecial && (
        <div
          className="w-full border-t border-t-win-gray-dark
                 border-b border-b-white my-1 mx-auto pointer"
        />
      )}
      <div className="group flex items-center gap-x-3 hover:bg-win-blue hover:text-white w-full pl-2 mr-9 py-1 cursor-pointer">
        <Image
          src={`/assets/icons/${icon}.png`}
          alt={name}
          width={32}
          height={32}
        />
        <p className="text-sm">{name}</p>

        {type === "folder" && (
          <p className="absolute right-2 group-hover:fill-white">
            <svg viewBox="0 0 16 16" height="0.75em">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          </p>
        )}
      </div>
    </React.Fragment>
  );
}

export default AppItem;
