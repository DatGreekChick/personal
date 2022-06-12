import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgba(0, 0, 0, 1);
    padding-bottom: 5%;
  }
  
  body,
  a,
  h2,
  h3,
  p,
  button,
  span,
  input,
  textarea {
    color: ghostwhite;
    font-family: ${props => props.theme.fontFamily};
  }

  *:focus {
    outline: none;
  }

  .grecaptcha-badge {
    opacity: 0;
    left: 0;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    body {
      background-image: none;
    }
  }
`

export default GlobalStyle
