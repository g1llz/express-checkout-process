import styled from 'styled-components'

export const Box = styled.div`
  width: 225px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  justify-content: flex-start;
  align-items: center;

  row-gap: 1rem;

  margin: 20px;

  [data-wrapper='product'] {
    position: absolute;
    top: 0px;
    left: 12px;

    img {
      width: 142px !important;
      height: 142px !important;
    }
  }

  .grid-a {
    grid-column: 3/3;
    margin-left: 30px;
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

    [data-wrapper='product'] {
      top: 50px;
      left: 25px;

      img {
        width: 220px !important;
        height: 220px !important;
      }
    }
  }

  @media (min-width: 370px) {
  }

  @media (min-width: 401px) {
    width: 275px;

    [data-wrapper='product'] {
      top: 50px;
      left: 45px;
    }
  }

  @media (min-width: 767px) {
    width: 200px;
    height: 250px;

    .grid-b {
      height: 50px;
    }

    [data-wrapper='product'] {
      top: 0px;
      left: 5px;

      img {
        width: 128px !important;
        height: 128px !important;
      }
    }
  }

  &[data-detail='box'] {
    width: 275px;

    [data-wrapper='detail'] {
      position: absolute;
      top: 55px;
      left: 40px;

      img {
        width: 148px !important;
        height: 148px !important;
      }
    }

    @media (min-width: 360px) {
      width: 315px;

      [data-wrapper='detail'] {
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
      width: 335px;
    }

    @media (min-width: 401px) {
      width: 365px;

      [data-wrapper='detail'] {
        top: 50px;
        left: 10px;
      }
    }

    @media (min-width: 767px) {
      width: 365px;
      height: 350px;

      .grid-a {
        grid-column: 1/3;
        margin-left: 0;
      }

      [data-wrapper='detail'] {
        top: 130px;
        left: 160px;

        img {
          width: 200px !important;
          height: 200px !important;
        }
      }
    }
  }
`
