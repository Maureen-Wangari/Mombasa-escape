
"use client";

import { useEffect, useState } from "react";

export default function CountDownTimer({
  targetDate = "2026-10-24T08:00:00+03:00",
}) {
  // Keep the initial render identical on the server and browser.
  const [time, setTime] = useState({
    Days: 0,
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = Math.max(
        0,
        new Date(targetDate).getTime() - Date.now()
      );

      setTime({
        Days: Math.floor(difference / 86400000),
        Hours: Math.floor((difference / 3600000) % 24),
        Minutes: Math.floor((difference / 60000) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      });
    };

    // Calculate after the component mounts in the browser.
    calculateTime();

    const timer = setInterval(calculateTime, 1000);

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
