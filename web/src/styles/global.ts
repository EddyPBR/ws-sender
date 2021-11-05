import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.gray1};
    font: ${props => props.theme.fonts.regular};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, strong, b {
    font: ${props => props.theme.fonts.bold};
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
  
  button {
    border: none;
    cursor: pointer;
  }

  @media(max-width: 768px) {
    html {
      font-size: 58.5939%;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 90vw;
    max-width: 117rem;
    margin: 0 auto;
  }
`;