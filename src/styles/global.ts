import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 1px ${(props) => props.theme['purple']}
  }
  body {
    background-color:  ${(props) => props.theme['gray-600']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }
  body, input-security, textarea, button {
    font: 400 1rem 'Inter', sans-serif;
  }
`