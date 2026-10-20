
"use client";

import { useEffect, useState } from "react";

export default function CountDownTimer({
  targetDate = "2026-10-24T08:00:00+03:00",
}) {
  const calculateTime = () => {
    const difference = Math.max(
      0,
      new Date(targetDate).getTime() - Date.now()
    );

    return {
      Days: Math.floor(difference / 86400000),
      Hours: Math.floor((difference / 3600000) % 24),
      Minutes: Math.floor((difference / 60000) % 60),
      Seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculateTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown">
      {Object.entries(time).map(([unit, value]) => (
        <div className="countdown-unit" key={unit}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{unit}</span>
        </div>
      ))}
    </div>
  );
}
