import styled from 'styled-components'
import { final } from '../../data/palette'
import { Link } from 'react-scroll'
import { FaAngleUp } from 'react-icons/fa'

export const GoTopWrapper = styled(Link)`
  display: none;

  @media screen and (max-height: 400px) {
    display: block;
    position: fixed;
    bottom: 0;
    right: 0;
    transform: translate(-60%, -30%);
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${final.background};
    border-radius: 3px;
    z-index: 150;
    cursor: pointer;
  }
`

export const GoTopIcon = styled(FaAngleUp)`
  color: ${final.background_light};
  font-size: 24px;
  margin: 5px;
`