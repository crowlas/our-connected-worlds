# World Universe

## Purpose

The universe visualization is the centerpiece of the home page.

Its goal is not to represent gameplay mechanics but to visually introduce
the core concept of the project:

```text
Independent Worlds
        ↓
Connected Through Travel
```

The animation helps visitors immediately understand that worlds can
coexist within a larger ecosystem.

---

## Architecture

WorldUniverse acts as the orchestration layer.

It owns all animation state and delegates rendering to specialized
components.

```text
WorldUniverse
│
├── UniverseDefs
├── UniverseStars
├── UniverseTravelers
└── UniverseWorlds
```

---

## Visual Layers

### UniverseDefs

Defines reusable SVG effects and planet gradients.

### UniverseStars

Renders the static star field background.

Stars are intentionally generated only once to maintain visual stability.

### UniverseTravelers

Displays moving travelers between worlds.

Travelers symbolize players exploring the ecosystem.

### UniverseWorlds

Renders animated worlds and their movement patterns.

---

## Animation Model

The universe uses a single shared clock.

Every animated element derives its movement from the current timestamp.

This keeps animations synchronized and avoids managing multiple unrelated
timers.

---

## Home World

The central world differs from surrounding worlds:

- Animated size
- Animated color
- Stable position

This helps establish it as the player's world and naturally attracts the
visitor's attention.

---

## Design Philosophy

The universe intentionally favors symbolism over realism.

The goal is to communicate ideas:

- exploration
- discovery
- movement
- connection

rather than simulate an actual solar system.
