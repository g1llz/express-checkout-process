import styled from 'styled-components'

interface FlexProps {
  content?: string
  width?: string
  direction?: string
}

export const Flex = styled.div<FlexProps>`
  position: relative;
  width: ${props => props.width || '100%'};

  display: flex;
  justify-content: ${props => props.content || 'space-between'};
  align-items: center;

  flex-direction: ${props => props.direction || 'initial'};
`
