import styled from 'styled-components'

export const SummaryWrapper = styled.div<{ display?: string }>`
  position: absolute;
  display: ${props => props.display || 'hidden'};

  top: 40px;
  right: 5px;
  z-index: 9;

  background-color: #FFF;
  border-radius: 14px;
  padding: 10px;

  box-shadow: 0 3px 7px 0px #c5c5c5;
`