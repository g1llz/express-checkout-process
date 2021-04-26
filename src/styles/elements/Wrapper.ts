import styled from 'styled-components'

export const WrapperSummary = styled.div`
  position: absolute;
  display: block;
  width: 100%;

  top: -10px;
  right: -10px;

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

  @media (min-width: 767px) {
    max-width: 350px;
    top: 60px;
    border-radius: 4px;
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

  @media (min-width: 767px) {
    max-width: 500px;
  }
`

export const WrapperForm = styled.div`
  width: 100%;
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

  @media (min-width: 767px) {
    max-width: 500px;

    form {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 10px;

      grid-template-areas:
        'name name'
        'email phone'
        'address address'
        'country zipcode';

      .grid-a {
        grid-area: name;
      }

      .grid-b {
        grid-area: email;
      }

      .grid-c {
        grid-area: address;
      }

      .grid-d {
        grid-area: country;
      }

      .grid-e {
        grid-area: zipcode;
      }

      .grid-f {
        grid-area: phone;
      }
    }
  }
`
