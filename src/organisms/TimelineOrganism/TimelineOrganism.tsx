import { ExperienceTranslationInfo } from "../../i18n/types";
import { item } from "./animations";
import {
  Container,
  Content,
  Description,
  DescriptionWrapper,
  Dot,
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
              {data.description.map((line, id) => (
                <DescriptionWrapper key={id} variants={item}>
                  <Dot />
                  <Description>{line}</Description>
                </DescriptionWrapper>
              ))}
            </Content>
          </Item>
        ))}
      </Container>
    </Wrapper>
  );
};
