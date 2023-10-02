import { useEffect, useState } from "react";

export function useDate() {
  const eventDate = new Date("2023-10-21T08:59:59").getTime();
  const [timeRemaining, setTimeRemaing] = useState(eventDate - Date.now());
  useEffect(() => {
    const countDown = setInterval(() => {
      const currentTime = Date.now();
      const timeRemaining = eventDate - currentTime;
      if (timeRemaining <= 0) {
        clearInterval(countDown);
        setTimeRemaing(0);
      } else {
        setTimeRemaing(timeRemaining);
      }
    }, 1000);
    return () => clearInterval(countDown);
  }, [eventDate]);
  const day = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return { day, hours, mins, secs };
}
