import { createGlobalStyle } from "styled-components";
import { colors, font } from "./variables";

export const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.gray1};
    color: ${colors.gray7};
    font-family: ${font.default};

    display: flex;
    justify-content: center;
    padding: 1.5rem;

    & > #root {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`