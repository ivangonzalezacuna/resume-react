import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Navbar } from "../Navbar";

let mediaQueryListener: ((event: MediaQueryListEvent) => void) | undefined;
let mediaQueryMatches = false;

beforeEach(() => {
  mediaQueryMatches = false;
  mediaQueryListener = undefined;

  vi.stubGlobal(
    "matchMedia",
    vi.fn(() => ({
      get matches() {
        return mediaQueryMatches;
      },
      media: "(min-width: 768px)",
      onchange: null,
      addEventListener: vi.fn(
        (_type: string, listener: (event: MediaQueryListEvent) => void) => {
          mediaQueryListener = listener;
        },
      ),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  );
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      observe() {}
      disconnect() {}
    },
  );
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) =>
    callback(0),
  );
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  document.body.style.overflow = "";
});

describe("mobile navigation", () => {
  it("moves focus into the dialog, traps focus, and restores the trigger on Escape", () => {
    render(<Navbar />);
    const trigger = screen.getByRole("button", { name: "Open menu" });

    vi.spyOn(trigger, "getClientRects").mockReturnValue([
      new DOMRect(),
    ] as unknown as DOMRectList);
    trigger.focus();
    fireEvent.click(trigger);

    const dialog = screen.getByRole("dialog", { name: "Navigation menu" });
    const links = within(dialog);
    expect(links.getByRole("link", { name: "Experience" })).toBe(
      document.activeElement,
    );
    expect(document.body.style.overflow).toBe("hidden");

    fireEvent.keyDown(document, { key: "Tab", shiftKey: true });
    expect(links.getByRole("link", { name: "Contact" })).toBe(
      document.activeElement,
    );

    fireEvent.keyDown(document, { key: "Escape" });

    expect(trigger).toBe(document.activeElement);
    expect(document.body.style.overflow).toBe("");
  });

  it("closes and releases the scroll lock when the viewport becomes desktop-sized", () => {
    document.body.style.overflow = "auto";
    render(<Navbar />);
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));

    mediaQueryMatches = true;
    act(() => mediaQueryListener?.({ matches: true } as MediaQueryListEvent));

    expect(
      screen
        .getByRole("button", { name: "Open menu" })
        .getAttribute("aria-expanded"),
    ).toBe("false");
    expect(document.body.style.overflow).toBe("auto");
    expect(
      document.querySelector(
        "nav[aria-label='Primary navigation'] a[href='#experience']",
      ),
    ).toBe(document.activeElement);
  });
});
