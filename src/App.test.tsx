import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import App from "./App";

vi.mock("./components/Navbar", () => ({ Navbar: () => null }));
vi.mock("./components/Footer", () => ({ Footer: () => null }));
vi.mock("./components/Hero", () => ({ Hero: () => null }));
vi.mock("./components/Experience", () => ({ Experience: () => null }));
vi.mock("./components/Projects", () => ({ Projects: () => null }));
vi.mock("./components/Skills", () => ({ Skills: () => null }));
vi.mock("./components/About", () => ({ About: () => null }));
vi.mock("./components/Contact", () => ({ Contact: () => null }));

describe("main content skip link", () => {
  afterEach(cleanup);

  it("targets a focusable main landmark", () => {
    render(<App />);

    const skipLink = screen.getByRole("link", {
      name: "Skip to main content",
    });
    const main = screen.getByRole("main");

    expect(skipLink.getAttribute("href")).toBe("#main-content");
    expect(main.tabIndex).toBe(-1);
    const clickEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });
    skipLink.dispatchEvent(clickEvent);
    expect(clickEvent.defaultPrevented).toBe(false);
  });
});
