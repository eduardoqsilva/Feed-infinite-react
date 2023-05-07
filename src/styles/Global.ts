import { createGlobalStyle } from "styled-components";
import { colors } from "./variables";

export const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.gray1};
    color: ${colors.gray7};
  }
`