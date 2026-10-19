import { worlds } from "./universeWorlds/data/worldUniverseData";

type Props = {
  homeColor: string;
};

/**
 * Defines reusable SVG assets for the universe.
 *
 * This component is responsible for:
 * - planet shadow effects
 * - planet surface gradients
 *
 * Assets defined inside <defs> are not rendered directly.
 * Instead, they can be referenced by other SVG elements,
 * allowing every planet to reuse the same visual effects.
 *
 * A dedicated gradient is generated for each world so planets
 * appear as illuminated spheres rather than flat colored circles.
 *
 * The home world is a special case because its color changes
 * over time and must therefore receive its current animated color.
 */
export default function UniverseDefs({ homeColor }: Props) {
  return (
    <defs>
      {/* Shared shadow applied to planets to reinforce depth. */}
      <filter id="planetShadow">
        <feDropShadow
          dx="0"
          dy="5"
          stdDeviation="8"
          floodColor="#000000"
          floodOpacity="0.5"
        />
      </filter>

      {/* Generate one reusable gradient per world. */}
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
            {/* Specular light reflection */}
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />

            {/* Transition from highlight to surface color */}
            <stop offset="10%" stopColor="#FFFFFF" stopOpacity="0.6" />

            {/* Main planet color */}
            <stop offset="30%" stopColor={color} />
            <stop offset="85%" stopColor={color} />

            {/* Dark edge to simulate curvature */}
            <stop offset="100%" stopColor="#000000" stopOpacity="0.8" />
          </radialGradient>
        );
      })}
    </defs>
  );
}
