import { useCallback, useState } from "react";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { Sidebar } from "./Sidebar";

const SidebarHarness = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open menu</button>
      <Sidebar isOpen={isOpen} close={close} activeSection="hero" />
    </>
  );
};

describe("mobile navigation", () => {
  afterEach(() => {
    cleanup();
    document.body.style.overflow = "";
  });

  it("moves and contains focus while open, then restores focus when closed", async () => {
    const user = userEvent.setup();
    document.body.style.overflow = "auto";
    render(<SidebarHarness />);

    const trigger = screen.getByRole("button", { name: "Open menu" });
    trigger.focus();
    await user.click(trigger);

    const firstLink = screen.getByRole("link", { name: "Experience" });
    const lastLink = screen.getByRole("link", { name: "Contact" });
    expect(document.activeElement).toBe(firstLink);

    lastLink.focus();
    await user.tab();
    expect(document.activeElement).toBe(firstLink);

    await user.keyboard("{Escape}");
    expect(document.activeElement).toBe(trigger);
    expect(document.body.style.overflow).toBe("auto");
  });
});
