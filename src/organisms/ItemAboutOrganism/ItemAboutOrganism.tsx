import { useState } from "react";
import { ExperienceInfo } from "../../types";
import { collapsible, item } from "./animations";
import {
  Collapsible,
  DescriptionText,
  DescriptionWrapper,
  ItemBlockOne,
  ItemBlockTwo,
  ItemContainer,
  ItemWrapper,
  Location,
  LocationIcon,
  Name,
  NameIconStudy,
  NameIconWork,
  Time,
  Title,
} from "./styles";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

export const ItemAboutOrganism = ({
  data,
  type,
}: {
  data: ExperienceInfo;
  type: "work" | "study";
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ItemWrapper>
        <Collapsible variants={item} onClick={() => setOpen(!open)}>
          {open ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
        </Collapsible>
        <ItemContainer>
          <ItemBlockOne>
            <Title variants={item}>{data.responsibility}</Title>
            <Name variants={item}>
              {type === "work" ? <NameIconWork /> : <NameIconStudy />}
              {data.location}
            </Name>
            <Location variants={item}>
              <LocationIcon />
              {data.city}
            </Location>
          </ItemBlockOne>
          <ItemBlockTwo>
            <Time variants={item}>
              {data.start} - {data.end}
            </Time>
          </ItemBlockTwo>
        </ItemContainer>
      </ItemWrapper>
      <DescriptionWrapper
        initial={open ? "open" : "collapsed"}
        animate={open ? "open" : "collapsed"}
        variants={collapsible}
      >
        {data.description.map((desc, key) => (
          <DescriptionText key={key}>{desc}</DescriptionText>
        ))}
      </DescriptionWrapper>
    </>
  );
};
