import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: inline-flex;
  overflow-y: hidden;
  padding: 0 10px;

  @media (min-width: 360px) {
    padding: 0 15px;
  }

  @media (min-width: 767px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    margin: auto;
    padding: 0;
  }

  @media (min-width: 1100px) {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;

    max-width: 1200px;
    margin: auto;
    padding: 0;
  }
`
