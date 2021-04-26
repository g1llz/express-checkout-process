import styled from 'styled-components'

interface ButtonProps {
  bgColor?: string
  textColor?: string
}

const Common = styled.button<ButtonProps>`
  border: 0;

  background-color: ${props =>
    props.bgColor || props.theme.colors.button.primary};
  color: ${props => props.textColor || props.theme.colors.text.foreground};

  cursor: pointer;

  &[disabled] {
    opacity: 0.7;
    cursor: default;
  }
`

export const Button = styled(Common)<{ maxWidth?: string }>`
  width: 100%;
  max-width: ${props => props.maxWidth || '250px'};
  height: 32px;

  border-radius: 4px;
  margin-bottom: 5px;
`

export const TagButton = styled(Common)`
  text-transform: capitalize;
  margin-right: 2px;
`

export const CircleButton = styled(Common)`
  width: 42px;
  height: 42px;

  &[data-minibutton='true'] {
    width: 32px;
    height: 32px;
  }

  &[data-addbutton='true'] {
    width: 56px;
    height: 56px;
    box-shadow: 0 0 10px 1px #24af47de;
  }

  border-radius: 50%;

  @media (min-width: 360px) {
    width: 48px;
    height: 48px;

    &[data-minibutton='true'] {
      width: 38px;
      height: 38px;
    }

    &[data-addbutton='true'] {
      width: 62px;
      height: 62px;
    }
  }

  /* @media  (min-width: 400px) {
    width: 32px;
    height: 32px;
  } */
`
