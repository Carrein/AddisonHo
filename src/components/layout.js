import React from "react";
import "@fontsource/quattrocento";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "../theme/theme";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Quattrocento";
    font-size: 18px;
    background: ${(props) => props.theme.colors.background}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Quattrocento";
  }
`;

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </React.Fragment>
  );
}
