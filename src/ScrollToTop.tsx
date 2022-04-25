import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300); // Scroll to top when the page transition is exactly in the middle of its interaction
  }, [pathname]);

  return null;
}
