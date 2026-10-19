import { worlds } from "./universeWorlds/data/worldUniverseData";

type Props = {
  homeColor: string;
};

export default function UniverseDefs({ homeColor }: Props) {
  return (
    <defs>
      <filter id="planetShadow">
        <feDropShadow
          dx="0"
          dy="5"
          stdDeviation="8"
          floodColor="#000000"
          floodOpacity="0.5"
        />
      </filter>

      {Object.entries(worlds).map(([key, world]) => {
        const color = key === "home" ? homeColor : world.color;

        return (
          <radialGradient
            key={key}
            id={`planet-${key}`}
            cx="25%"
            cy="25%"
            r="75%"
          >
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />

            <stop offset="10%" stopColor="#FFFFFF" stopOpacity="0.6" />

            <stop offset="30%" stopColor={color} />

            <stop offset="85%" stopColor={color} />

            <stop offset="100%" stopColor="#000000" stopOpacity="0.8" />
          </radialGradient>
        );
      })}
    </defs>
  );
}
