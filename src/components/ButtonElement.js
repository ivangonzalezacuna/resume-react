import styled from 'styled-components'
import { final } from '../data/palette'

export const Button = styled.div`
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
    color: ${final.background};
  }
`