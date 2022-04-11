import React from "react";
import Header from "../components/Header";
import InitialTransition from "../components/InitialTransition";
import RouteTransition from "../RouteTransition";

const HomePage = ({ isFirstMount, fastTransition, updateFastTransition }) => {
  return (
    <>
      {isFirstMount && <InitialTransition isFirstMount={isFirstMount} />}
      <RouteTransition>
        <Header
          isFirstMount={isFirstMount}
          fastTransition={fastTransition}
          updateFastTransition={updateFastTransition}
        />
      </RouteTransition>
    </>
  );
};

export default HomePage;
