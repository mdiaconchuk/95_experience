"use client";
import Image from "next/image";
import Clock from "./Clock";
import { useState } from "react";
import Menu from "./Menu";

function Taskbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="absolute z-50 bottom-0 flex h-9 py-0.5 px-0.5 w-screen bg-win-bg border-win-out border-b-0 text-sm">
      {/* Menu */}
      {isOpen && (
        <div className="absolute bottom-full left-0">
          <Menu />
        </div>
      )}

      {/* Start button */}
      <button
        className={`flex self-center px-0.5 py-0.5 font-bold cursor-pointer ${isOpen ? "border-win-in" : "border-win-out"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${isOpen ? "border border-dotted" : ""} flex items-center gap-x-1 px-1`}
        >
          <Image
            src="/assets/icons/windows-16x16-1bpp.png"
            alt="Start"
            width={18}
            height={18}
          />
          <p className="tracking-wide">Start</p>
        </div>
      </button>

      {/* Hour Info */}
      <Clock />
    </div>
  );
}

export default Taskbar;
