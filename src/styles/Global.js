import styled, { createGlobalStyle } from "styled-components";

import InterFont from "../fonts/Inter-VariableFont_slnt,wght.ttf";

const Global = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url(${InterFont}) format('truetype');
    font-weight: 1 999;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', sans-serif;
  }
`;

export default Global;
