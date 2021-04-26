import styled from 'styled-components'

interface CardProps {
  bgColor?: string
}

export const Card = styled.div<CardProps>`
  &[data-expand='true'] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding-top: 60px;
    border-radius: 0;
    z-index: 8;
  }

  &[data-expand='false'] {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 10px 15px 10px 0;
    border-radius: 10px;
  }

  background-color: ${props =>
    props.bgColor || props.theme.colors.background.card};
  color: ${props => props.theme.colors.text.foreground};

  box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);

  img {
    width: 128px;
    height: 128px;
  }

  h2 {
    text-transform: capitalize;
  }

  button.close {
    position: absolute;
    top: 10px;
    left: 0;
    width: 50px;
  }

  @media (min-width: 360px) {
    &[data-expand='true'] {
      margin: 0;
    }

    &[data-expand='false'] {
      margin: 10px 20px 10px 10px;
    }
  }

  @media (min-width: 401px) {
    &[data-expand='true'] {
      margin: 0;
    }

    &[data-expand='false'] {
      margin: 10px 25px 10px 15px;
    }
  }
`
