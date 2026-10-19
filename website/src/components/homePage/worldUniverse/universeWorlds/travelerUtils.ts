import {
    commonRoutes,
    rareRoutes,
    travelerColors,
    uncommonRoutes,
} from "./data/worldUniverseData";

/**
 * A traveler represents a moving particle
 * travelling between two worlds.
 */
export type Traveler = {
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

/**
 * Creates a traveler on a random route.
 */
export function createTraveler(): Traveler {
  const [from, to] = randomRoute();

  return {
    from,
    to,
    progress: Math.random(),
    color: randomColor(),
  };
}
