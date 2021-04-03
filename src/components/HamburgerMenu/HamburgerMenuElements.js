import styled from 'styled-components'
import { final } from '../../data/palette'

export const MobileIcon = styled.div`
  display: ${({ showIcon }) => (showIcon) ? 'block' : 'none'};
  position: fixed;
  top: 0;
  right: 0;
  transform: translate(-60%, 30%);
  cursor: pointer;
  color: ${final.background_light};
  z-index: 400;

  @media screen and (max-width: 768px) {
    display: block;
  }

  @media screen and (max-height: 400px) {
    display: block;
  }
`

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ scrollNav }) => (scrollNav ? final.background : 'transparent')};
  padding: 5px;
  border-radius: 3px;
  width: 34px;
  height: 34px;

  @media screen and (max-height: 400px) {
    background: ${({ scrollNav }) => (scrollNav ? final.background : 'transparent')};
  }
`
