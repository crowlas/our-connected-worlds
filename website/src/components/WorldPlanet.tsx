import type { World } from "../data/worldUniverseData";

type Props = {
  id: string;
  world: World;
  central?: boolean;
};

export default function WorldPlanet({ id, world, central = false }: Props) {
  return (
    <>
      <circle
        cx={world.x}
        cy={world.y}
        r={world.radius}
        fill={`url(#planet-${id})`}
        filter="url(#planetShadow)"
      />

      {world.satellite ? (
        <text x={world.x} y={world.y + 5} textAnchor="middle" fontSize="14">
          {world.icon}
        </text>
      ) : (
        <text
          x={world.x}
          y={world.y + world.radius + 22}
          fill="white"
          textAnchor="middle"
          style={{
            fontFamily: world.fontFamily ?? "Inter, system-ui, sans-serif",
            fontSize: central ? "15px" : "12px",
            fontWeight: central ? 700 : 500,
            letterSpacing: "0.5px",
            userSelect: "none",
          }}
        >
          {world.label}
        </text>
      )}
    </>
  );
}
