"use client";
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
    <div className="border-win-in ml-auto px-3 flex gap-x-2 items-center select-none">
      <p>{time || "00:00 AM"}</p>
    </div>
  );
}

export default NavbarClock;
