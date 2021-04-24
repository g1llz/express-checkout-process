import styled from 'styled-components'

interface ButtonProps {
  bgColor?: string
  textColor?: string
}

const Common = styled.button<ButtonProps>`
  border: 0;

  background-color: ${props => props.bgColor || props.theme.colors.button.primary};
  color: ${props => props.textColor || props.theme.colors.text.foreground};

  cursor: pointer;
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

export const CircleButton = styled(Common)<{ mini?: string }>`
  width: ${props => (props.mini === 'true' ? '32px' : '64px')};
  height: ${props => (props.mini === 'true' ? '32px' : '64px')};

  border-radius: 50%;
`
