import { useEffect, useState } from "react";

/**
 * Provides a shared animation clock used by all
 * moving elements within the universe.
 */
export default function useUniverseClock(isRunning: boolean) {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setTime(Date.now());
    }, 50);

    return () => clearInterval(interval);
  }, [isRunning]);

  return time;
}
