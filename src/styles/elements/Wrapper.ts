import styled from 'styled-components'

export const WrapperSummary = styled.div`
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

export const WrapperList = styled.div<{
  bgColor?: string
  textColor?: string
  padding?: string
}>`
  position: relative;
  width: 100%;

  padding: ${props => props.padding || 0};

  background-color: ${props => props.bgColor || 'transparent'};
  color: ${props => props.textColor || props.theme.colors.text.primary};
`

export const WrapperForm = styled.div`
  width: 100%;
  /* padding: 10px; */
  padding-bottom: 2rem;

  form {
    label {
      width: 100%;
    }
    span {
      width: 100%;
      height: 22px;

      font-size: 13px;
      color: crimson;
    }
  }
`