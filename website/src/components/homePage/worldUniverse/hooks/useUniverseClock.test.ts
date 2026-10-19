import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import useUniverseClock from "./useUniverseClock";

/**
 * Tests for the shared universe clock.
 *
 * The clock acts as the time source for all animated
 * elements in the universe. Pausing the clock should
 * freeze every animation derived from it.
 */
describe("useUniverseClock", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("updates time while running", () => {
    const { result } = renderHook(() => useUniverseClock(true));

    const initial = result.current;

    act(() => {
      vi.advanceTimersByTime(100);
    });

    /**
     * A running clock should continuously produce newer
     * timestamps.
     */
    expect(result.current).not.toBe(initial);
  });

  it("does not update when paused", () => {
    const { result } = renderHook(() => useUniverseClock(false));

    const initial = result.current;

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    /**
     * When paused, the clock must remain stable to keep
     * dependent animations frozen.
     */
    expect(result.current).toBe(initial);
  });
});
