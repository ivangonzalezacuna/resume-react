import styled from 'styled-components'
import { Element } from 'react-scroll'
import { final } from '../../data/palette'

export const InfoContainer = styled(Element)`
  color: ${final.background_light};
  background: ${final.background};
  cursor: default;

  @media screen and (max-width: 800px) {
    padding: 40px 0;
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
  padding: 100px 50px 0px 50px;
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

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: auto;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 60px 24px 100px 24px;
  justify-content: center;
`

export const InfoCard = styled.div`
  background: ${final.background};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  margin: 30px 0;
  box-shadow: 0 1px 3px rgba(255,255,255,0.5);
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: translateY(-1px);
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    padding: 15px;
  }

  @media screen and (max-width: 480px) {
    padding: 5px;
  }
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-gap: 10px;
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 800px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
  }
`

export const Column1 = styled.div`
  padding: 0 10px;
  grid-area: col1;
  display: inline-block;
`

export const Column2 = styled.div`
  padding: 0 10px;
  grid-area: col2;
  display: inline-block;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  height: 200px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const TextRow = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin: 3px 0;

  @media screen and (max-width: 800px) {
    justify-content: center;
  }

  @media screen and (max-width: 480px) {
    justify-content: start;
  }
`

export const Company = styled.p`
  color: ${final.background_light};
  font-weight: 600;
  line-height: 1.5;
  font-size: 32px;
  margin-bottom: 10px;

  @media screen and (max-width: 800px) {
    font-size: 26px;
  }

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`

export const JobTitle = styled.p`
  color: ${final.background_light};
  font-weight: 700;
  font-size: 14px;

  @media screen and (max-width: 800px) {
    font-size: 13px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`

export const Dates = styled.p`
  color: ${final.background_light};
  font-style: italic;
  font-weight: 700;
  font-size: 14px;

  @media screen and (max-width: 800px) {
    font-size: 13px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`

export const Description = styled.p`
  font-size: 15px;
  line-height: 24px;
  color: ${final.background_light};

  @media screen and (max-width: 800px) {
    font-size: 14px;
    line-height: 22px;
  }

  @media screen and (max-width: 480px) {
    line-height: 21px;
  }
`

export const TextIcon = styled.a`
  color: ${final.background_light};
  font-size: 16px;
  margin-right: 10px;
  display: 'block';
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`