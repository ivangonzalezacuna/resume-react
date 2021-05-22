import React from 'react'
import {
  TimelineWrapper,
  TimelineContainer,
  Item,
  Time,
  TimeText,
  Title,
  Subtitle,
  Description,
  Content
} from './TimelineElements'

const timelineItem = {
  initial: { y: -10, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const TimelineSection = ({ items }) => {
  return (
    <TimelineWrapper>
      <TimelineContainer>
        {items.map((item, index) => (
          <Item key={index}>
            <Time>
              <TimeText variants={timelineItem}>
                {item.date}
              </TimeText>
            </Time>
            <Content>
              <Title variants={timelineItem}>
                {item.place}
              </Title>
              <Subtitle variants={timelineItem}>
                {item.role}
              </Subtitle>
              <Description variants={timelineItem}>
                {item.description}
              </Description>
            </Content>
          </Item>
        ))}
      </TimelineContainer>
    </TimelineWrapper>
  )
}

export default TimelineSection
