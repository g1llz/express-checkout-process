import styled from 'styled-components'

interface InputProps {
  inputColor?: string
}

export const Input = styled.input<InputProps>`
  width: inherit;
  height: 42px;
  padding: 5px 10px;
  margin: 3px;
  color: ${props => props.inputColor || '#1c923a'};
  background: #eaeaea;
  border: none;
  border-radius: 3px;
`
