import styled from 'styled-components'

export const Space = styled.div<{ size?: string }>`
  height: ${props => props.size || '2rem'};
`
