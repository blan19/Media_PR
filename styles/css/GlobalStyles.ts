import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
  /* reset */
  ${reset}

  html, body, #__next {
    width: 100%;
    height: 100%;
    background-color: #212329;
  }

  * {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
