import styled from 'styled-components'
import Lottie from 'react-lottie-player'
import { motion } from 'framer-motion'

export const ContactContainer = styled(motion.div)`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #161616;
`

export const SectionTitle = styled(motion.h1)`
  font-size: clamp(1.7rem, 8vw, 3rem);
  letter-spacing: 1.5px;
  color: gray;
  position: absolute;
  text-align: center;
  top: ${({ center }) => center ? '50%' : '20%'};
  z-index: 1;

  @media screen and (max-width: 500px) {
    top: ${({ center }) => center ? '50%' : '22%'};
  }
`

export const FormContainer = styled(motion.div)`
  display: flex;
  height: auto;
  width: calc(100% - 40px);
  max-width: 900px;
  margin: 200px 0 20px 0;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  z-index: 2;

  @media screen and (max-height: 400px) {
    margin-top: 130px;
  }
`

export const FormContent = styled.div`
  border-radius: 10px;
  position: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);
`

export const FormWrap = styled.form`
  padding: 20px 30px;
`

export const FormH1 = styled.h1`
  font-size: 1rem;
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;
  color: #f9f9f9;
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

export const FormLabel = styled(motion.label)`
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 6px;
  color: #f9f9f9;

  span {
    color: red;
    font-weight: 700;
    margin-left: 5px;
  }
`

export const FormInput = styled(motion.input)`
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
    border: 2px solid red;
  }
`

export const FormTextArea = styled(motion.textarea)`
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
    border: 2px solid red;
  }
`

export const Error = styled.p`
  font-size: 0.8rem;
  margin: 0.5rem;
  padding: 5px;
  color: #f00e0e;
  text-align: center;
  background: #101010;
  border-radius: 2px;
`

export const FormBtnWrap = styled(motion.div)`
  width: 50%;
  margin: 0 auto;
`

export const FormButton = styled.button`
  width: 100%;
  background: red;
  color: #121212;
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
    background: #f9f9f9;
    color: #121212;
  }
`

export const FormSuccessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 50vw;
  max-width: 400px;

  @media screen and (max-width: 400px) {
    width: 80vw;
  }
`

export const FormSuccessMsg = styled.h2`
  font-size: clamp(1.2rem, 8vw, 1.5rem);
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);
  color: #f9f9f9;
`

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: rgba(30,30,30,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
`

export const LoadingPopupWrap = styled(motion.div)`
  position: fixed;
  top: 50%;
  right: 50%;
  width: 150px;
  height: 150px;
  margin-top: -75px;
  margin-right: -75px;
  background: #f9f9f9;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoadingAnimation = styled(Lottie)`
  height: 150px;
  width: 150px;
`