import { About, Footer } from "../components";
import { RouteTransition } from "../RouteTransition";

export const AboutPage = () => {
  return (
    <RouteTransition>
      <About />
      <Footer />
    </RouteTransition>
  );
};
