import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 25px;
  max-width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    padding: 0 15px;
  }
`;

export const Container = styled.div`
  border-radius: 0 0px 0px 0;
  padding: 5px 0;

  @media screen and (max-width: 500px) {
    margin-left: 15px;

    &:after {
      left: -18px;
    }
  }
`;
