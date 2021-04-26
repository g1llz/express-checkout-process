import styled from 'styled-components'

interface CardProps {
  bgColor?: string
}

export const Card = styled.div<CardProps>`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 10px 15px 10px 0;
  border-radius: 10px;

  background-color: ${props => props.bgColor || props.theme.colors.background.card};
  color: ${props => props.theme.colors.text.foreground};

  box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);

  h2 {
    text-transform: capitalize;
  }

  button.close {
    position: absolute;
    top: 10px;
    left: 0;
    width: 50px;
  }

  &[data-testid='product-component'] {
    cursor: pointer;
  }

  @media (min-width: 360px) {
    margin: 10px 20px 10px 10px;
  }

  @media (min-width: 401px) {
    margin: 10px 25px 10px 15px;
  }

  @media (min-width: 767px) {
    width: initial;
  }

  @media (min-width: 1100px) {
    width: 100%;
  }

  &[data-detail='card'] {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding-top: 60px;
    border-radius: 0;
    z-index: 8;

    @media (min-width: 360px) {
      margin: 0;
    }

    @media (min-width: 767px) {
      max-width: 400px;
      height: 100vh;

      box-shadow: 8px 5px 10px rgba(0, 0, 0, 0.125);
    }
  }
`
