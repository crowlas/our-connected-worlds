import { worldMotions } from "./data/worldMotionData";

/**
 * Computes animated movement for a world.
 */
export function getWorldOffset(key: string, time: number) {
  const motion = worldMotions[key as keyof typeof worldMotions];

  if (!motion) {
    return {
      dx: 0,
      dy: 0,
    };
  }

  return {
    dx: Math.sin(time / motion.speed + motion.phase) * motion.amplitude,

    dy: Math.cos(time / motion.speed + motion.phase) * motion.amplitude,
  };
}
