import { createGlobalStyle } from 'styled-components'

const GlobalStyle: any = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }

  body {
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
  }
`

export default GlobalStyle