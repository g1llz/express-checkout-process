import styled from 'styled-components'

interface ButtonProps {
  color?: string
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  max-width: 250px;
  height: 32px;

  border: 0;
  border-radius: 4px;

  background-color: ${props => props.color || '#0d2020'};
  color: #dce3e7;

  cursor: pointer;
  margin-bottom: 5px;
`
