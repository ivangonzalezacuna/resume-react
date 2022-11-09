import { Contact, Footer } from "../components";
import { RouteTransition } from "../RouteTransition";

export const ContactPage = () => {
  return (
    <RouteTransition>
      <Contact />
      <Footer />
    </RouteTransition>
  );
};
