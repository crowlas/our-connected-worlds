import { useEffect, useMemo, useState } from "react";

import {
  BASE_HOME_RADIUS,
  homeColors,
  TRAVEL_SPEED,
} from "./worldUniverse/universeWorlds/data/worldUniverseData";

import UniverseDefs from "./worldUniverse/UniverseDefs";
import UniverseStars from "./worldUniverse/UniverseStars";
import UniverseTravelers from "./worldUniverse/UniverseTravelers";
import UniverseWorlds from "./worldUniverse/UniverseWorlds";

import type { Traveler } from "./worldUniverse/universeWorlds/travelerUtils";
import { createTraveler } from "./worldUniverse/universeWorlds/travelerUtils";

/**
 * Main universe visualization.
 *
 * Responsibilities:
 * - manage universe animations
 * - manage traveler movement
 * - animate the central world
 * - compose all SVG layers
 */
export default function WorldUniverse() {
  const [travelers, setTravelers] = useState<Traveler[]>(() =>
    Array.from({ length: 1 }, () => createTraveler()),
  );

  const [homeRadius, setHomeRadius] = useState(BASE_HOME_RADIUS);

  const [homeColor, setHomeColor] = useState(homeColors[0]);

  const [time, setTime] = useState(Date.now());

  /**
   * Global animation clock used by world motions.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now());
    }, 50);

    return () => clearInterval(interval);
  }, []);

  /**
   * Background star field is generated once and
   * remains stable for the lifetime of the component.
   */
  const stars = useMemo(
    () =>
      Array.from({ length: 200 }, (_, index) => ({
        id: index,
        x: Math.random() * 900,
        y: Math.random() * 650,
        r: Math.random() * 1.8 + 0.3,
        opacity: Math.random() * 0.8 + 0.2,
      })),
    [],
  );

  /**
   * Animate traveler movement.
   */
  useEffect(() => {
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
  }, []);

  /**
   * Pulse animation for the central world.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      const pulse = BASE_HOME_RADIUS + Math.sin(Date.now() / 2000) * 34;

      setHomeRadius(pulse);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  /**
   * Cycles the color of the central world.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setHomeColor(homeColors[Math.floor(Math.random() * homeColors.length)]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg width={900} height={650}>
      <UniverseDefs homeColor={homeColor} />

      <UniverseStars stars={stars} />

      <UniverseTravelers travelers={travelers} time={time} />

      <UniverseWorlds
        time={time}
        homeRadius={homeRadius}
        homeColor={homeColor}
      />
    </svg>
  );
}
