import { ExperienceInfo } from "../../types";
import { ItemAboutOrganism } from "../ItemAboutOrganism";
import { Container, Wrapper } from "./styles";

export const ListItemAboutOrganism = ({
  items,
  type,
}: {
  items: ExperienceInfo[];
  type: "work" | "study";
}) => {
  return (
    <Wrapper>
      <Container>
        {items.map((data, key) => (
          <ItemAboutOrganism key={key} data={data} type={type} />
        ))}
      </Container>
    </Wrapper>
  );
};
