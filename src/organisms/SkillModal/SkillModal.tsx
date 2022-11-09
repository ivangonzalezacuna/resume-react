import { useRef } from "react";
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
} from "./styles";
import { ResumeIcon } from "../../atoms";
import { SkillInfo } from "../../types";

export type SkillModalProps = {
  openModal: boolean;
  toggleModal: () => void;
  skill: SkillInfo;
};

export const SkillModal = ({
  openModal,
  toggleModal,
  skill,
}: SkillModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const closeModal = (target: EventTarget) => {
    if (ref.current === target) {
      toggleModal();
    }
  };

  return (
    <AnimatePresence>
      {openModal && (
        <ModalOverlay ref={ref} onClick={({ target }) => closeModal(target)}>
          <ModalContainer
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <CloseIcon onClick={toggleModal} />
            <ModalContentWrap>
              <Name variants={item}>{skill.name}</Name>
              <ResumeIcon skill variants={item} icon={skill.name} />
              <LevelWrap variants={barContainer}>
                <LevelBar variants={bar(skill.level)} />
                <LevelValue variants={value}>{skill.level}%</LevelValue>
              </LevelWrap>
            </ModalContentWrap>
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};
