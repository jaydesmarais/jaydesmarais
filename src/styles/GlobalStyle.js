import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Unbounded;
  }

  body {
    margin: auto;
    background: black;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  strong,
  ul {
    color: white;
  }
`;

export default GlobalStyle;