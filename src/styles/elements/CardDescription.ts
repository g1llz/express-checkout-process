import styled from 'styled-components'

export const CardDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  background-color: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.text.primary};

  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  width: 100%;
  height: 100%;
  
  padding: 20px 30px;
  margin-top: 30px;
`
