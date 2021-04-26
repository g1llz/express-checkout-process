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
  height: 100%;

  display: inline-flex;
  overflow-y: hidden;
  padding: 0 10px;
`
