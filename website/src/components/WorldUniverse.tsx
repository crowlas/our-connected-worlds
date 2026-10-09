import { useEffect, useMemo, useState } from "react";

import WorldPlanet from "./WorldPlanet";

import {
    BASE_HOME_RADIUS,
    commonRoutes,
    homeColors,
    rareRoutes,
    TRAVEL_SPEED,
    travelerColors,
    uncommonRoutes,
    worlds,
} from "../data/worldUniverseData";

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

function getWorldOffset(key: string, time: number) {
  const motions: Record<
    string,
    {
      amplitude: number;
      speed: number;
      phase: number;
    }
  > = {
    fantasy: {
      amplitude: 20,
      speed: 1000,
      phase: 0,
    },

    history: {
      amplitude: 20,
      speed: 10000,
      phase: 1,
    },

    scifi: {
      amplitude: 22,
      speed: 2200,
      phase: 2,
    },

    apocalypse: {
      amplitude: 10,
      speed: 1000,
      phase: 3,
    },

    horror: {
      amplitude: 1,
      speed: 25,
      phase: 4,
    },

    adventure: {
      amplitude: 450,
      speed: 3200,
      phase: 5,
    },

    cute: {
      amplitude: 7,
      speed: 1700,
      phase: 6,
    },

    orbital: {
      amplitude: 12,
      speed: 1200,
      phase: 7,
    },

    nightmare: {
      amplitude: 20,
      speed: 3000,
      phase: 8,
    },

    pets: {
      amplitude: 25,
      speed: 2500,
      phase: 9,
    },
  };

  const motion = motions[key];

  if (!motion) {
    return { dx: 0, dy: 0 };
  }

  return {
    dx: Math.sin(time / motion.speed + motion.phase) * motion.amplitude,

    dy: Math.cos(time / motion.speed + motion.phase) * motion.amplitude,
  };
}

export default function WorldUniverse() {
  const [travelers, setTravelers] = useState(() =>
    Array.from({ length: 1 }, () => createTraveler()),
  );

  const [homeRadius, setHomeRadius] = useState(BASE_HOME_RADIUS);

  const [homeColor, setHomeColor] = useState(homeColors[0]);

  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now());
    }, 50);

    return () => clearInterval(interval);
  }, []);

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
      const pulse = BASE_HOME_RADIUS + Math.sin(Date.now() / 2000) * 34;

      setHomeRadius(pulse);
    }, 4);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHomeColor(homeColors[Math.floor(Math.random() * homeColors.length)]);
    }, 2500);

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
      </svg>
    </section>
  );
}
