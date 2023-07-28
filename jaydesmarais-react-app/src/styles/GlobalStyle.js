import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: black;
    font-family: Unbounded;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: white;
  }

  #section {
    margin: 0 auto;
    padding: 100px 50px;
    max-width: 1000px;
  }
`;
 
export default GlobalStyle;