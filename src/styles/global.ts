import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    color: ${props => props.theme.colors.text.primary};
    font: 400 16px Roboto, sans-serif;
  }
`
