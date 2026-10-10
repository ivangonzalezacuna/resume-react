import { afterEach, describe, expect, it, vi } from "vitest";
import { scrollToSection } from "./scrollToSection";

afterEach(() => {
  document.body.innerHTML = "";
  vi.unstubAllGlobals();
});

describe("scrollToSection", () => {
  it("uses smooth scrolling when reduced motion is not requested", () => {
    const section = document.createElement("section");
    section.id = "projects";
    section.scrollIntoView = vi.fn();
    document.body.append(section);
    vi.stubGlobal(
      "matchMedia",
      vi.fn(() => ({ matches: false })),
    );

    scrollToSection("projects");

    expect(section.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("uses automatic scrolling when reduced motion is requested", () => {
    const section = document.createElement("section");
    section.id = "projects";
    section.scrollIntoView = vi.fn();
    document.body.append(section);
    vi.stubGlobal(
      "matchMedia",
      vi.fn(() => ({ matches: true })),
    );

    scrollToSection("projects");

    expect(section.scrollIntoView).toHaveBeenCalledWith({ behavior: "auto" });
  });

  it("does nothing when the requested section does not exist", () => {
    vi.stubGlobal("matchMedia", vi.fn());

    expect(() => scrollToSection("missing")).not.toThrow();
    expect(window.matchMedia).not.toHaveBeenCalled();
  });
});
