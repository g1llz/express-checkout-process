import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body html #root {
    height: 100%;
  }

  body {
    color: ${props => props.theme.colors.text.primary};
    font: 400 16px 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

  h1 {
    font-weight: 700;

    @media (max-width: 359px) {
      font-size: 1.5rem;
    }
  }

  h2 {
    font-weight: 700;
  }
`
