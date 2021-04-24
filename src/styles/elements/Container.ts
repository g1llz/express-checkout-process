import styled from 'styled-components'

interface ContainerProps {
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | 'unset' | 'initial' | 'inherit'
  direction?:
    | 'column'
    | 'row'
    | 'column-reverse'
    | 'row-reverse'
    | 'inherit'
    | 'unset'
    | 'initial'
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: ${props => props.direction || 'column'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
`
