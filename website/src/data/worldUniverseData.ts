export const BASE_HOME_RADIUS = 45;
export const TRAVEL_SPEED = 0.006;

export const homeColors = [
  "#2E8B57",
  "#3B82F6",
  "#8B5CF6",
  "#EC4899",
  "#D97706",
  "#991B1B",
  "#06B6D4",
  "#10B981",
];

export type World = {
  x: number;
  y: number;
  radius: number;
  label: string;
  icon?: string;
  color: string;
  satellite?: boolean;
  fontFamily?: string;
};

export const worlds: Record<string, World> = {
  home: {
    x: 450,
    y: 320,
    radius: BASE_HOME_RADIUS,
    label: "Your World",
    color: homeColors[0],
    fontFamily: "Inter",
  },

  fantasy: {
    x: 250,
    y: 370,
    radius: 40,
    label: "Fantasy",
    color: "#8B5CF6",
    fontFamily: "Cinzel",
  },

  history: {
    x: 250,
    y: 220,
    radius: 38,
    label: "History",
    color: "#D97706",
    fontFamily: "Cormorant Garamond",
  },

  cute: {
    x: 420,
    y: 520,
    radius: 38,
    label: "Cute",
    color: "#EC4899",
    fontFamily: "Comfortaa",
  },

  horror: {
    x: 650,
    y: 430,
    radius: 40,
    label: "Horror",
    color: "#991B1B",
    fontFamily: "Creepster",
  },

  adventure: {
    x: 690,
    y: 230,
    radius: 42,
    label: "Adventure",
    color: "#10B981",
    fontFamily: "Marcellus",
  },

  scifi: {
    x: 500,
    y: 90,
    radius: 58,
    label: "Sci‑Fi",
    color: "#06B6D4",
    fontFamily: "Orbitron",
  },

  apocalypse: {
    x: 760,
    y: 100,
    radius: 55,
    label: "Apocalypse",
    color: "#6B7280",
    fontFamily: "Bebas Neue",
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
    x: 690,
    y: 470,
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

export const rareRoutes = [
  ["home", "fantasy"],
  ["home", "history"],
  ["home", "cute"],
  ["home", "horror"],
  ["home", "adventure"],
  ["home", "scifi"],
] as const;

export const uncommonRoutes = [
  ["fantasy", "history"],
  ["fantasy", "scifi"],
  ["scifi", "adventure"],
  ["horror", "adventure"],
  ["cute", "fantasy"],
] as const;

export const commonRoutes = [
  ["apocalypse", "home"],
  ["apocalypse", "scifi"],
  ["horror", "nightmare"],
  ["cute", "pets"],
  ["scifi", "orbital"],
] as const;

export const travelerColors = [
  "#D4A24C",
  "#60A5FA",
  "#34D399",
  "#F472B6",
  "#A78BFA",
  "#F97316",
];
