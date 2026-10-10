import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useActiveSection } from "./useActiveSection";

let intersectionCallback: IntersectionObserverCallback | undefined;

beforeEach(() => {
  intersectionCallback = undefined;
  document.body.innerHTML = `
    <section id="hero"></section>
    <section id="experience"></section>
    <section id="projects"></section>
    <section id="skills"></section>
    <section id="about"></section>
    <section id="contact"></section>
  `;
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      constructor(callback: IntersectionObserverCallback) {
        intersectionCallback = callback;
      }
      observe() {}
      disconnect() {}
    },
  );
});

afterEach(() => {
  document.body.innerHTML = "";
  vi.unstubAllGlobals();
});

describe("useActiveSection", () => {
  it("updates the active section to the most visible observed section", () => {
    const { result } = renderHook(() => useActiveSection());
    const projects = document.getElementById("projects");

    expect(result.current).toBe("hero");

    act(() => {
      intersectionCallback?.(
        [
          {
            target: projects!,
            intersectionRatio: 0.75,
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      );
    });

    expect(result.current).toBe("projects");
  });
});
