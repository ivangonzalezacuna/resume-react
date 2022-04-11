import React from "react";
import {
  TimelineWrapper,
  TimelineContainer,
  Item,
  Time,
  TimeText,
  Title,
  Subtitle,
  Description,
  Content,
} from "./TimelineElements";
import { item } from "./animations";

const TimelineSection = ({ items }) => {
  return (
    <TimelineWrapper>
      <TimelineContainer>
        {items.map((data, index) => (
          <Item key={index}>
            <Time>
              <TimeText variants={item}>{data.date}</TimeText>
            </Time>
            <Content>
              <Title variants={item}>{data.place}</Title>
              <Subtitle variants={item}>{data.role}</Subtitle>
              <Description variants={item}>{data.description}</Description>
            </Content>
          </Item>
        ))}
      </TimelineContainer>
    </TimelineWrapper>
  );
};

export default TimelineSection;
