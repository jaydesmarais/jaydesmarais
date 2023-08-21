import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Athiti';
  }

  h1,
  h2,
  h4,
  h5,
  h6 {
    font-family: 'Italiana';
  }

  h3{
    font-family: 'Italiana';
  }

  body {
    font-size: 1.25em;
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