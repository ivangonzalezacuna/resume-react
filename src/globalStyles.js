import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Encode Sans Expanded', sans-serif;
  }

  html, body {
    overflow-x: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
  }
`

export default GlobalStyle