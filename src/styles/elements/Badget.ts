import styled from 'styled-components'

interface BadgetProps {
  bgColor?: string
  textColor?: string
}

export const Badget = styled.span<BadgetProps>`
  position: absolute;
  top: -3px;
  right: -3px;

  width: 22px;
  height: 22px;

  padding: 3px;
  border-radius: 50%;
  
  background-color: ${props => props.bgColor || props.theme.colors.badget.primary};
  color: ${props => props.textColor || props.theme.colors.text.foreground};

  /* @media  (min-width: 360px) {
    width: 32px;
    height: 32px;
  } */

  /* @media  (min-width: 400px) {
    width: 32px;
    height: 32px;
  } */
`
