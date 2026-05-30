import { Image, Wrapper } from "./styles";
import LogoSvg from "../../images/background/logo.svg";

export const Logo = ({ closeIfOpen }: { closeIfOpen: () => void }) => {
  return (
    <Wrapper to="/" onClick={closeIfOpen}>
      <Image src={LogoSvg} alt="logo" />
    </Wrapper>
  );
};
