import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import useUniverseAnimation from "./useUniverseAnimation";

/**
 * Tests for the universe animation hook.
 *
 * This hook is responsible for:
 * - moving travelers between worlds
 * - animating the central world's pulse effect
 * - supporting pause / resume behavior
 *
 * Timers are mocked to make animations predictable
 * and independent from real time.
 */
describe("useUniverseAnimation", () => {
  beforeEach(() => {
    /**
     * Fake timers allow tests to advance time instantly
     * without waiting for actual intervals to execute.
     */
    vi.useFakeTimers();
  });

  afterEach(() => {
    /**
     * Restore the standard timer implementation after
     * each test to prevent side effects between tests.
     */
    vi.useRealTimers();
  });

  it("moves travelers while animation is running", () => {
    const { result } = renderHook(() => useUniverseAnimation(true));

    const initialProgress = result.current.travelers[0].progress;

    act(() => {
      vi.advanceTimersByTime(60);
    });

    /**
     * A running animation should continuously advance
     * traveler progress toward its destination.
     */
    expect(result.current.travelers[0].progress).toBeGreaterThan(
      initialProgress,
    );
  });

  it("does not move travelers when paused", () => {
    const { result } = renderHook(() => useUniverseAnimation(false));

    const initialProgress = result.current.travelers[0].progress;

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    /**
     * Pausing the animation should freeze traveler
     * positions regardless of elapsed time.
     */
    expect(result.current.travelers[0].progress).toBe(initialProgress);
  });

  it("updates home radius while running", () => {
    const { result } = renderHook(() => useUniverseAnimation(true));

    const initialRadius = result.current.homeRadius;

    act(() => {
      vi.advanceTimersByTime(100);
    });

    /**
     * The home world should pulse over time to make it
     * visually distinct from surrounding worlds.
     */
    expect(result.current.homeRadius).not.toBe(initialRadius);
  });
});
