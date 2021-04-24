import styled from 'styled-components'

interface BoxProps {
  width?: string
}

export const Box = styled.div<BoxProps>`
  width: ${props => props.width || '250px'};

  display: grid;
  grid-template-columns: 100%;
  justify-content: flex-start;
  align-items: center;
`
