import { useEffect, useState } from "react";

import {
    BASE_HOME_RADIUS,
    homeColors,
    TRAVEL_SPEED,
} from "../universeWorlds/data/worldUniverseData";

import { createTraveler, type Traveler } from "../universeWorlds/travelerUtils";

/**
 * Manages all animated universe state except the
 * shared animation clock.
 */
export default function useUniverseAnimation(isRunning: boolean) {
  const [travelers, setTravelers] = useState<Traveler[]>(() =>
    Array.from({ length: 1 }, () => createTraveler()),
  );

  const [homeRadius, setHomeRadius] = useState(BASE_HOME_RADIUS);

  const [homeColor, setHomeColor] = useState(homeColors[0]);

  /**
   * Move travelers between worlds.
   */
  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setTravelers((current) =>
        current.map((traveler) => {
          const nextProgress = traveler.progress + TRAVEL_SPEED;

          if (nextProgress < 1) {
            return {
              ...traveler,
              progress: nextProgress,
            };
          }

          return createTraveler();
        }),
      );
    }, 30);

    return () => clearInterval(interval);
  }, [isRunning]);

  /**
   * Pulse the central world.
   */
  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      const pulse = BASE_HOME_RADIUS + Math.sin(Date.now() / 2000) * 34;

      setHomeRadius(pulse);
    }, 40);

    return () => clearInterval(interval);
  }, [isRunning]);

  /**
   * Cycle the central world color.
   */
  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setHomeColor(homeColors[Math.floor(Math.random() * homeColors.length)]);
    }, 2500);

    return () => clearInterval(interval);
  }, [isRunning]);

  return {
    travelers,
    homeRadius,
    homeColor,
  };
}
