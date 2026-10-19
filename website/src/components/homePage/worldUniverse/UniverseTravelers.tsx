import { worlds } from "./universeWorlds/data/worldUniverseData";
import { getWorldOffset } from "./universeWorlds/getWorldOffset";
import type { Traveler } from "./universeWorlds/travelerUtils";

type Props = {
  travelers: Traveler[];
  time: number;
};

export default function UniverseTravelers({ travelers, time }: Props) {
  return (
    <>
      {travelers.map((traveler, index) => {
        const fromOffset =
          traveler.from === "home"
            ? { dx: 0, dy: 0 }
            : getWorldOffset(traveler.from, time);

        const toOffset =
          traveler.to === "home"
            ? { dx: 0, dy: 0 }
            : getWorldOffset(traveler.to, time);

        const from = {
          ...worlds[traveler.from],
          x: worlds[traveler.from].x + fromOffset.dx,
          y: worlds[traveler.from].y + fromOffset.dy,
        };

        const to = {
          ...worlds[traveler.to],
          x: worlds[traveler.to].x + toOffset.dx,
          y: worlds[traveler.to].y + toOffset.dy,
        };

        const x = from.x + (to.x - from.x) * traveler.progress;

        const y = from.y + (to.y - from.y) * traveler.progress;

        return (
          <g key={index}>
            <line
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={traveler.color}
              strokeWidth={2}
              opacity={0.1}
            />

            <circle cx={x} cy={y} r={6} fill={traveler.color} />
          </g>
        );
      })}
    </>
  );
}
