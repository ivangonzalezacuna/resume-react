import { ExperienceTranslationInfo } from "../../i18n/types";
import { item } from "./animations";
import {
  Container,
  Content,
  Description,
  Item,
  Subtitle,
  Time,
  TimeText,
  Title,
  Wrapper,
} from "./styles";

export const TimelineOrganism = ({
  items,
}: {
  items: ExperienceTranslationInfo[];
}) => {
  return (
    <Wrapper>
      <Container>
        {items.map((data, key) => (
          <Item key={key}>
            <Time>
              <TimeText variants={item}>
                {data.start} - {data.end}
              </TimeText>
            </Time>
            <Content>
              <Title variants={item}>{data.location}</Title>
              <Subtitle variants={item}>{data.responsibility}</Subtitle>
              <Description variants={item}>{data.description}</Description>
            </Content>
          </Item>
        ))}
      </Container>
    </Wrapper>
  );
};
