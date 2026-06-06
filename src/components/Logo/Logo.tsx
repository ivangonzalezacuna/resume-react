import { Wrapper, Image } from "./styles";
import LogoSvg from "../../images/background/logo.svg";

export const Logo = (_props: { closeIfOpen?: () => void }) => {
  return (
    <Wrapper href="#hero">
      <Image src={LogoSvg} alt="logo" />
    </Wrapper>
  );
};
