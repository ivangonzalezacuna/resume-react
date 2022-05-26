import { Header, SplashHeader } from "../components";
import { RouteTransition } from "../RouteTransition";
import { HeaderProps } from "../types/types";

export const HomePage = ({
  isFirstMount,
  fastTransition,
  setFastTransition,
}: HeaderProps) => {
  return (
    <>
      {isFirstMount && <SplashHeader />}
      <RouteTransition>
        <Header
          isFirstMount={isFirstMount}
          fastTransition={fastTransition}
          setFastTransition={setFastTransition}
        />
      </RouteTransition>
    </>
  );
};
