import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  justify-self: start;
  margin: 0 1rem;
`;

export const Image = styled.img`
  height: 23px;
  width: auto;
`;
