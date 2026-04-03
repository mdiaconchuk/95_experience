import React from "react";
import Image from "next/image";
import { Apps } from "@/data/apps";
import { SpecialApps } from "@/data/apps";
import AppItem from "./AppItem";

function Menu() {
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
            <AppItem 
            key={index}
            index={index} 
            name={app.name} 
            icon={app.icon} 
            type={app.type} 
            isSpecial={false} />
          ))}

          {/* SPECIAL APP MAP */}
          {SpecialApps.map((app, index) => (
            <AppItem 
            key={index}
            index={index} 
            name={app.name} 
            icon={app.icon} 
            type={app.type} 
            isSpecial={true} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
