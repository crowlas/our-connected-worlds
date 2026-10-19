import WorldPlanet from "./universeWorlds/WorldPlanet";
import { worlds } from "./universeWorlds/data/worldUniverseData";
import { getWorldOffset } from "./universeWorlds/getWorldOffset";

type Props = {
  time: number;
  homeRadius: number;
  homeColor: string;
};

/**
 * Renders every world in the universe.
 *
 * This component acts as an adapter between:
 * - the static world definitions stored in worldUniverseData
 * - the animated visual state managed by WorldUniverse
 *
 * Each render starts from the immutable world definitions and applies
 * the current animation state:
 *
 * - moving worlds receive an orbital offset
 * - the home world receives its animated radius
 * - the home world receives its animated color
 *
 * The resulting animated world is then passed to WorldPlanet, which is
 * responsible only for rendering and not for computing animations.
 */
export default function UniverseWorlds({ time, homeRadius, homeColor }: Props) {
  return (
    <>
      {Object.entries(worlds).map(([key, world]) => {
        /**
         * Most worlds follow a movement pattern to make the
         * universe feel alive.
         *
         * The home world remains fixed in the center and therefore
         * does not receive an orbital offset.
         */
        const offset =
          key === "home" ? { dx: 0, dy: 0 } : getWorldOffset(key, time);

        return (
          <WorldPlanet
            key={key}
            gradientId={`planet-${key}`}
            world={{
              /**
               * Create the animated version of the world.
               *
               * The source definition remains unchanged while
               * visual properties are adjusted according to the
               * current animation state.
               */
              ...world,

              x: world.x + offset.dx,
              y: world.y + offset.dy,

              /**
               * The home world is visually emphasized using
               * a pulse effect controlled by WorldUniverse.
               */
              radius: key === "home" ? homeRadius : world.radius,

              /**
               * The home world cycles through colors while
               * surrounding worlds keep their fixed identity.
               */
              color: key === "home" ? homeColor : world.color,
            }}
            central={key === "home"}
          />
        );
      })}
    </>
  );
}
