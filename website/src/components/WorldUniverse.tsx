import { useEffect, useMemo, useState } from "react";

const BASE_HOME_RADIUS = 45;
const TRAVEL_SPEED = 0.012;

const homeColors = [
  "#2E8B57", // nature
  "#3B82F6", // technology
  "#8B5CF6", // magic
  "#EC4899", // cute
  "#D97706", // historical
  "#991B1B", // horror
  "#06B6D4", // sci-fi
  "#10B981", // adventure
];

type World = {
  x: number;
  y: number;
  radius: number;
  label: string;
  icon?: string;
  color: string;
  satellite?: boolean;
};

const worlds: Record<string, World> = {
  home: {
    x: 450,
    y: 320,
    radius: BASE_HOME_RADIUS,
    label: "Your World",
    color: homeColors[0],
  },

  fantasy: {
    x: 250,
    y: 370,
    radius: 40,
    label: "Fantasy",
    color: "#8B5CF6",
  },

  history: {
    x: 250,
    y: 220,
    radius: 38,
    label: "History",
    color: "#D97706",
  },

  cute: {
    x: 420,
    y: 520,
    radius: 38,
    label: "Cute",
    color: "#EC4899",
  },

  horror: {
    x: 650,
    y: 430,
    radius: 40,
    label: "Horror",
    color: "#991B1B",
  },

  adventure: {
    x: 690,
    y: 230,
    radius: 42,
    label: "Adventure",
    color: "#10B981",
  },

  scifi: {
    x: 500,
    y: 90,
    radius: 58,
    label: "Sci‑Fi",
    color: "#06B6D4",
  },

  apocalypse: {
    x: 760,
    y: 100,
    radius: 55,
    label: "Apocalypse",
    color: "#6B7280",
  },

  orbital: {
    x: 440,
    y: 30,
    radius: 18,
    label: "",
    icon: "🛰",
    color: "#67E8F9",
    satellite: true,
  },

  nightmare: {
    x: 730,
    y: 500,
    radius: 18,
    label: "",
    icon: "🌙",
    color: "#450A0A",
    satellite: true,
  },

  pets: {
    x: 510,
    y: 575,
    radius: 18,
    label: "",
    icon: "🐾",
    color: "#F9A8D4",
    satellite: true,
  },
};

const rareRoutes = [
  ["home", "fantasy"],
  ["home", "history"],
  ["home", "cute"],
  ["home", "horror"],
  ["home", "adventure"],
  ["home", "scifi"],
] as const;

const uncommonRoutes = [
  ["fantasy", "history"],
  ["fantasy", "scifi"],
  ["scifi", "adventure"],
  ["horror", "adventure"],
  ["cute", "fantasy"],
] as const;

const commonRoutes = [
  ["apocalypse", "home"],
  ["apocalypse", "scifi"],
  ["horror", "nightmare"],
  ["cute", "pets"],
  ["scifi", "orbital"],
] as const;

const travelerColors = [
  "#D4A24C",
  "#60A5FA",
  "#34D399",
  "#F472B6",
  "#A78BFA",
  "#F97316",
];

type Traveler = {
  from: string;
  to: string;
  progress: number;
  color: string;
};

function randomColor() {
  return travelerColors[Math.floor(Math.random() * travelerColors.length)];
}

function randomRoute() {
  const roll = Math.random();

  if (roll < 0.7) {
    return commonRoutes[Math.floor(Math.random() * commonRoutes.length)];
  }

  if (roll < 0.95) {
    return uncommonRoutes[Math.floor(Math.random() * uncommonRoutes.length)];
  }

  return rareRoutes[Math.floor(Math.random() * rareRoutes.length)];
}

function createTraveler(): Traveler {
  const [from, to] = randomRoute();

  return {
    from,
    to,
    progress: Math.random(),
    color: randomColor(),
  };
}

export default function WorldUniverse() {
  const [travelers, setTravelers] = useState(() =>
    Array.from({ length: 3 }, () => createTraveler()),
  );

  const [homeRadius, setHomeRadius] = useState(BASE_HOME_RADIUS);

  const [homeColor, setHomeColor] = useState(homeColors[0]);

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

  useEffect(() => {
    const interval = setInterval(() => {
      const pulse = BASE_HOME_RADIUS + Math.sin(Date.now() / 500) * 5;

      setHomeRadius(pulse);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHomeColor(homeColors[Math.floor(Math.random() * homeColors.length)]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "4rem 0",
        background: "#0F172A",
      }}
    >
      <svg width={900} height={650}>
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

        {stars.map((star) => (
          <circle
            key={star.id}
            cx={star.x}
            cy={star.y}
            r={star.r}
            fill="white"
            opacity={star.opacity}
          />
        ))}

        {travelers.map((traveler, index) => {
          const from = worlds[traveler.from];
          const to = worlds[traveler.to];

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

        {Object.entries(worlds).map(([key, world]) => (
          <WorldPlanet
            key={key}
            id={key}
            world={{
              ...world,
              radius: key === "home" ? homeRadius : world.radius,
              color: key === "home" ? homeColor : world.color,
            }}
            central={key === "home"}
          />
        ))}
      </svg>
    </section>
  );
}

type WorldPlanetProps = {
  id: string;
  world: World;
  central?: boolean;
};

function WorldPlanet({ id, world, central = false }: WorldPlanetProps) {
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
            fontFamily: "Inter, system-ui, sans-serif",
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
