import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    padding: 20px 60px;

    @media screen and (max-width: 800px) {
      padding: 0.225rem;
    }
  }

  a{
    color: black;
    text-decoration: none;
  }

`;

export default GlobalStyle;
