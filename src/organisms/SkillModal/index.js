import React, { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { modal, item, barContainer, bar, value } from "./animations";
import {
  ModalOverlay,
  ModalContainer,
  CloseIcon,
  ModalContentWrap,
  Name,
  LevelWrap,
  LevelBar,
  LevelValue,
} from "./SkillModalElements";
import Icon from "../../atoms/Icon";

const SkillModal = ({ openModal, toggleModal, data }) => {
  const ref = useRef();
  const closeModal = (e) => {
    if (ref.current === e.target) {
      toggleModal();
    }
  };

  return (
    <AnimatePresence>
      {openModal && (
        <ModalOverlay ref={ref} onClick={closeModal}>
          <ModalContainer
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <CloseIcon onClick={toggleModal} />
            <ModalContentWrap>
              <Name variants={item}>{data.name}</Name>
              <Icon variants={item} icon={data.name} />
              <LevelWrap variants={barContainer}>
                <LevelBar variants={bar(data.level)} />
                <LevelValue variants={value}>{data.level}%</LevelValue>
              </LevelWrap>
            </ModalContentWrap>
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default SkillModal;
