import React from "react";
import {
  InitialTransitionContainer,
  InitialTransitionText,
  Logo,
} from "./InititalTransitionElements";
import IvanLogo from "../../images/background/logo.svg";
import { container, text } from "./animations";

const InitialTransition = () => {
  return (
    <InitialTransitionContainer
      initial="initial"
      animate="animate"
      variants={container}
    >
      <InitialTransitionText variants={text}>
        <Logo src={IvanLogo} alt="logo" />
      </InitialTransitionText>
    </InitialTransitionContainer>
  );
};

export default InitialTransition;
