import Image from "next/image";
import NavbarClock from "./NavbarClock";

function navbar() {
  return (
    <div className="absolute bottom-0 flex h-9 py-0.5 px-0.5 w-screen bg-[#C0C0C0] border-win-out border-b-0 text-sm">
      {/* Start button */}
      <button className="group flex gap-x-1 px-1.5 font-bold border-win-out hover:border-win-in">
        <div className="group-hover:translate-px flex items-center gap-x-1">
          <Image
            src="/assets/icons/windows-16x16-1bpp.png"
            alt="Start"
            width={16}
            height={16}
          />
          <p>Start</p>
        </div>
      </button>

      {/* Hour Info */}
      <NavbarClock/>
      
    </div>
  );
}

export default navbar;
