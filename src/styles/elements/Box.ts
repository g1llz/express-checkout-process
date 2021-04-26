import styled from 'styled-components'

export const Box = styled.div`
  width: 225px;

  &[data-expand='true'] {
    width: 275px;
  }

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  justify-content: flex-start;
  align-items: center;

  row-gap: 1rem;

  margin: 20px;

  .grid-a {
    grid-column: 3/3;
    margin-left: 10px;
  }

  .grid-b {
    grid-column: 1/3;
    grid-row: 1/5;
  }

  .grid-c,
  .grid-d {
    grid-column: 1/3;
  }

  .grid-e {
    grid-column: 1/3;
  }

  .grid-f {
    grid-column: 3/3;
    text-align: end;
  }

  .grid-g {
    grid-column: 3/3;
    margin-left: 50px;
  }

  @media (min-width: 360px) {
    width: 240px;

    &[data-expand='true'] {
      width: 315px;
    }

    .grid-a {
      grid-column: 3/3;
    }

    .grid-b {
      grid-column: 2/3;
      grid-row: 2/3;
      height: 150px;
    }

    .grid-c,
    .grid-d {
      grid-column: 1/3;
    }

    [data-wrapper='false'] {
      position: absolute;
      top: 50px;
      left: 25px;

      img {
        width: 220px !important;
        height: 220px !important;
      }
    }

    [data-wrapper='true'] {
      position: absolute;
      top: 50px;
      left: 5px;

      img {
        width: 256px !important;
        height: 256px !important;
      }
    }
  }

  @media (min-width: 370px) {
    &[data-expand='true'] {
      width: 335px;
    }
  }

  @media (min-width: 401px) {
    width: 275px;

    &[data-expand='true'] {
      width: 365px;
    }

    [data-wrapper='false'] {
      top: 50px;
      left: 45px;
    }

    [data-wrapper='true'] {
      top: 50px;
      left: 10px;
    }
  }
`
