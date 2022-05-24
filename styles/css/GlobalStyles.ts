import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
  /* reset */
  ${reset}

  /* theme */
  body {
    --color-primary: "#61DAFB";
    --color-font: "#fff";
    --font-h1: 5.5rem;
    --font-p: 3rem;
  }

  /* style */
  html, body, #__next {
    width: 100%;
    height: 100%;
    background-color: #212329;
    color: #fff;
    font-family: 'Nanum Gothic Coding', --apple-system, monospace;
    font-size: 62.5%;
    @media screen and (max-width: 1280px) {
      font-size: 56.3%;
    }
    @media screen and (max-width: 1024px) {
      font-size: 50%;
    }
    @media screen and (max-width: 768px) {
      font-size: 43.8%;
    }
    @media screen and (max-width: 480px) {
      font-size: 37.5%;
    }
    @media screen and (max-width: 400px) {
      font-size: 31.2%;
    }
    @media screen and (max-width: 300px) {
      font-size: 18.6%;
    }
  }

  * {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
