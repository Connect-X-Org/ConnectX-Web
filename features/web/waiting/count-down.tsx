"use client";
import { useEffect, useState } from "react";

const TimeBlock = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center justify-center gap-2 rounded-xl bg-muted p-6">
    <div className="font-bold text-4xl tabular-nums">
      {String(value).padStart(2, "0")}
    </div>
    <div className="text-sm uppercase tracking-wider">{label}</div>
  </div>
);
export default function CountDown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set your target date here
    const targetDate = new Date("2025-11-21T23:59:59").getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto w-full max-w-4xl py-6">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <TimeBlock label="Days" value={timeLeft.days} />
        <TimeBlock label="Hours" value={timeLeft.hours} />
        <TimeBlock label="Minutes" value={timeLeft.minutes} />
        <TimeBlock label="Seconds" value={timeLeft.seconds} />
      </div>
    </div>
  );
}
