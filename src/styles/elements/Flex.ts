import styled from 'styled-components'

interface FlexProps {
  content?: string
  alignItems?: string
  width?: string
  direction?: string
}

export const Flex = styled.div<FlexProps>`
  position: relative;
  width: ${props => props.width || '100%'};

  display: flex;
  justify-content: ${props => props.content || 'space-between'};
  align-items: ${props => props.alignItems || 'center' };

  flex-direction: ${props => props.direction || 'initial'};

  @media (min-width: 767px) {
    &[data-pages='success'] {
      max-width: 500px;
      justify-content: center;
    }
  }
`
