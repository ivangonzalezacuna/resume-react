import styled from 'styled-components'
import { final } from '../../data/palette'
import { Link } from 'react-router-dom'

export const AboutContainer = styled.aside`
  position: fixed;
  z-index: ${({ isAboutOpen }) => (isAboutOpen ? '300' : '1')};
  width: 100%;
  height: 100%;
  background: ${final.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s ease-in-out;
  opacity: ${({ isAboutOpen }) => (isAboutOpen ? '100%' : '0%')};
  top: ${({ isAboutOpen }) => (isAboutOpen ? '0' : '-100%')};
  cursor: default;
`

export const Lang = styled.div`
  position: absolute;
  top: 1.6rem;
  left: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const LangItem = styled.div`
  color: ${({ current }) => (current ? final.foreground_light2 : final.background_light)};
  font-size: 13px;
  cursor: pointer;
  margin: 0 4px 0 4px;
`

export const AboutWrapper = styled.div`
  color: ${final.background_light};
  width: 100%;
  max-width: 1300px;
  margin-top: 3.5rem;
  padding-bottom: 1.5rem;
  height: calc(100% - 3.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 16px;
  grid-template-areas: "img info";
  padding: 10px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas: "img" "info";
  }
`

export const AboutImgWrap = styled.div`
  grid-area: 'image';
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImgWrap = styled.div`
  height: 200px;
  width: 200px;
  overflow: hidden;
  border-radius: 10%;
`

export const AboutImg = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 10%;
  transition: transform 0.8s ease;
  overflow: hidden;

  &:hover {
    transform: scale(1.2);
  }
`

export const AboutInfo = styled.div`
  grid-area: 'info';
  min-height: 200px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 10px;
`

export const AboutName = styled.h1`
  margin-bottom: 20px;
  font-weight: 700;
  color: ${final.foreground_light1};

  span {
    font-weight: 400;
    font-size: 85%;
    color: ${final.background_light};
  }
`

export const AboutDescription = styled.span`
  color: ${final.background_light};
  font-size: 15px;
  padding: 10px;
`

export const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`

export const BtnDownload = styled.a`
  background: ${final.foreground_light2};
  white-space: nowrap;
  outline: none;
  border: none;
  border-radius: 50px;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  color: ${final.background};
  font-size: 14px;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    background-color: ${final.background_light};
  }
`

export const TopLineWrap = styled.div`
  display: flex;
  z-index: 1;
  height: auto;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 100px 50px 50px 50px;
  justify-content: start;
`

export const TopLine = styled.p`
  color: ${final.foreground_light1};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`

export const ContactTitle = styled.h1`
  color: ${final.background_light};
  margin: 100px 0 50px 20px;
  text-align: start;
  text-transform: uppercase;
  font-size: clamp(1.2rem, 4vw, 1.6rem);
`

export const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 16px;
  width: 100%;
  margin-top: 10px;
  padding: 0 10px;
  align-items: center;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

export const ContactSection = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  max-width: 1100px;
  height: 150px;
  background: ${final.foreground_dark1_op01};
  margin: 5px 10px;
  box-shadow: 0 1px 3px ${final.foreground_light1_op05};
  border-radius: 6px;
  display: flex;
  align-items: center;

  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: translateY(-1px);
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ContactIconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  box-shadow: 0 1px 3px ${final.foreground_light2};
  border-radius: 3px;
  margin: 10px;

  @media screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`

export const ContactIconImg = styled.a`
  font-size: 30px;
  color: ${final.foreground_light2};

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`

export const ContactInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`

export const ContactSectionTitle = styled.h1`
  font-size: clamp(16px, 4vw, 20px);
  margin-bottom: 16px;
  color: ${final.background_light};
`

export const ContactSectionItem = styled.h1`
  font-size: clamp(13px, 4vw, 15px);
  font-weight: 400;
  color: ${final.background_light};

  &:hover {
    color: ${final.foreground_light2};
  }
`

export const SocialMedia = styled.section`
  width: 100%;
  padding: 0 24px;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 48px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: ${final.background_light};
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`

export const WebsiteRights = styled.small`
  color: ${final.background_light};
  margin-bottom: 16px;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

export const SocialIconLink = styled.a`
  color: ${final.background_light};
  font-size: 24px;
`