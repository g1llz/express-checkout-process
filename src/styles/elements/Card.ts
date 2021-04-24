import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  max-width: 300px;
  height: 100vh;
  max-height: 400px;

  background-color: ${props => props.theme.colors.background.card};
  color: ${props => props.theme.colors.text.foreground};

  padding: 15px;
  margin: 12px;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);

  img {
    height: 100%;
    max-height: 250px;
  }
`
