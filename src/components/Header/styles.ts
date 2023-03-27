import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 12.5rem;
  background: ${(props) => props.theme['gray-700']};
  padding: 2.5rem 0 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 3.5rem;
  }
`
