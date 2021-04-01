import { MdClose } from 'react-icons/md'
import styled from 'styled-components'
import { final } from '../../data/palette'
import Lottie from 'react-lottie'
import { motion } from 'framer-motion'

export const ContactBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(30,30,30,0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const CloseContactButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 1000;
  color: ${final.background_light};
`

export const FormContainer = styled(motion.div)`
  margin: 100px auto;
  max-width: 800px;
  width: calc(100% - 20vw);
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
  height: calc(100% - 10vh);
  display: flex;
  flex-direction: column;
  grid-template-columns: 1fr;
  justify-content: center;
`

export const FormContent = styled.div`
  border-radius: 10px;
  position: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);
`

export const FormWrap = styled.form`
  position: absolute;
  padding: 20px 30px;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 90%;
  display: block;
  border-radius: 10px;
  background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`

export const FormH1 = styled.h1`
  font-size: 1rem;
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;
  color: ${final.background_light};
`

export const FormInputs = styled.div`
  text-align: start;
  margin-bottom: 0.5rem;
  width: 100%;

  p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #f00e0e;
  }
`

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 6px;
  color: ${final.background_light};

  span {
    color: ${final.foreground_light2};
    font-weight: 700;
    margin-left: 5px;
  }
`

export const FormInput = styled.input`
  display: block;
  padding: 0 10px;
  outline: none;
  border-radius: 4px;
  height: 40px;
  width: 100%;
  border: none;
  opacity: 0.7;

  &::placeholder {
    color: #595959;
    font-size: 12px;
  }

  &:focus {
    opacity: 1;
    border: 2px solid ${final.foreground_light2};
  }
`

export const FormTextArea = styled.textarea`
  display: block;
  padding: 10px;
  outline: none;
  border-radius: 4px;
  width: 100%;
  border: none;
  opacity: 0.7;
  resize: vertical;

  &::placeholder {
    color: #595959;
    font-size: 12px;
  }

  &:focus {
    opacity: 1;
    border: 2px solid ${final.foreground_light2};
  }
`

export const FormButton = styled.button`
  width: 100%;
  background: ${final.foreground_light2};
  color: ${final.background};
  padding: 14px 0;
  margin-top: 25px;
  margin-bottom: 20px;
  border: none;
  border-radius: 50px;
  font-size: clamp(16px, 4vw, 20px);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
  outline: none;
  border: none;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: ${final.background_light};
    color: ${final.background};
  }
`

export const SuccessFormWrap = styled.form`
  position: absolute;
  padding: 20px 30px;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);
`

export const FormImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 95%;
  top: 60%;
  left: 50%;
  transform: translateY(-50%, -50%);
`

export const FormImg = styled.img`
  width: 100%;
  height: 100%;
`

export const FormImgLottie = styled(Lottie)``