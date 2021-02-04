import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "../theme/theme";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Playfair+Display:400,700');

  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
  }
`;

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </React.Fragment>
  );
}
