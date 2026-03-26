"use client";
import Image from "next/image";
import { FormatTime } from "@/app/lib/utils";
import { useEffect, useState } from "react";

function NavbarClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      setTime(FormatTime(new Date()));
    };
    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-win-in ml-auto px-3 flex gap-x-2 items-center">
      <Image
        src="/assets/icons/speaker-16x16.png"
        alt="Speaker"
        width={16}
        height={16}
      />
      <p>{time || "00:00 AM"}</p>
    </div>
  );
}

export default NavbarClock;
