import WorldPlanet from "./universeWorlds/WorldPlanet";
import { worlds } from "./universeWorlds/data/worldUniverseData";
import { getWorldOffset } from "./universeWorlds/getWorldOffset";

type Props = {
  time: number;
  homeRadius: number;
  homeColor: string;
};

export default function UniverseWorlds({ time, homeRadius, homeColor }: Props) {
  return (
    <>
      {Object.entries(worlds).map(([key, world]) => {
        const offset =
          key === "home" ? { dx: 0, dy: 0 } : getWorldOffset(key, time);

        return (
          <WorldPlanet
            key={key}
            id={key}
            world={{
              ...world,
              x: world.x + offset.dx,
              y: world.y + offset.dy,
              radius: key === "home" ? homeRadius : world.radius,
              color: key === "home" ? homeColor : world.color,
            }}
            central={key === "home"}
          />
        );
      })}
    </>
  );
}
