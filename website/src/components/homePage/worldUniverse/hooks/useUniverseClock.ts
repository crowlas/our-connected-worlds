import { useEffect, useState } from "react";

/**
 * Provides a shared animation clock used by all
 * moving elements within the universe.
 */
export default function useUniverseClock() {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now());
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return time;
}
