import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: rgb(21, 31, 40);
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  h1 {
    width: 100%;
    color: white;
    text-align: center;
  }
  h2 {
    width: 100%;
    color: white;
    font-weight: normal;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 50px;
  }
`;

export default GlobalStyle;
