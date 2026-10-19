import { useMemo } from "react";

import UniverseDefs from "./worldUniverse/UniverseDefs";
import UniverseStars from "./worldUniverse/UniverseStars";
import UniverseTravelers from "./worldUniverse/UniverseTravelers";
import UniverseWorlds from "./worldUniverse/UniverseWorlds";

import useUniverseAnimation from "./worldUniverse/hooks/useUniverseAnimation";
import useUniverseClock from "./worldUniverse/hooks/useUniverseClock";

/**
 * Main universe orchestration component.
 *
 * See README.md for architectural and design details.
 */
export default function WorldUniverse() {
  const time = useUniverseClock();

  const { travelers, homeRadius, homeColor } = useUniverseAnimation();

  /**
   * Generate the star field once.
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
