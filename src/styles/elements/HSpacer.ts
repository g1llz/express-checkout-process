import styled from 'styled-components'

export const HSpacer = styled.div<{ space?: string }>`
  height: ${props => props.space || '2rem'};
`
