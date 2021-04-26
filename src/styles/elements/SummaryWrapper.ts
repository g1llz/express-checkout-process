import styled from 'styled-components'

export const SummaryWrapper = styled.div`
  position: absolute;
  display: block;

  top: -10px;
  right: -10px;
  left: -10px;

  z-index: 9;

  background-color: #fff;
  border-radius: 0;
  padding: 40px 0 20px 0;

  box-shadow: 0 3px 7px 0px #c5c5c5;

  @media (min-width: 300px) and (max-width: 359px) {
    > div {
      padding: 0 10px;
    }
  }

  @media (min-width: 360px) {
    > div {
      padding: 0 20px;
    }
  }
`
