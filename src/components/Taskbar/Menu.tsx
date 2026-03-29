import React from "react";
import Image from "next/image";
import { Apps } from "@/data/apps";

function Menu() {
  const isLastApp = Apps.length - 1;

  return (
    <div className="border-win-out h-auto bg-win-bg inline-block p-0.5">
      <div className="flex">
        {/* SIDEBAR IMAGE */}
        <div className="w-6 shrink-0 bg-win-gray-dark flex items-end">
          <Image
            src="/assets/images/sidebar.png"
            alt="Sidebar"
            width={24}
            height={150}
            className="w-full h-auto"
          />
        </div>
        {/* APP LIST */}
        <div className="flex flex-col py-0.5">
          {/* APP ITEM */}
          {Apps.map((app, index) => (
            <React.Fragment key={app.id}>
              {index === isLastApp && (
                <div
                  className="w-full border-t border-t-win-gray-dark
                 border-b border-b-white my-1 mx-auto"
                />
              )}
              <div className="flex items-center gap-x-3 hover:bg-win-blue hover:text-white w-full pl-2 pr-12 py-1 cursor-pointer">
                <Image
                  src={`/assets/icons/${app.icon}.png`}
                  alt={app.name}
                  width={32}
                  height={32}
                />
                <p className="text-sm">{app.name}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
