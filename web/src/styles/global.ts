import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 0.4rem;
      height: 0.4rem;
    }

    &::-webkit-scrollbar-track-piece {
      background-color: ${props => props.theme.colors.background};
    }

    &::-webkit-scrollbar-thumb {
      border: 0.2rem solid ${props => props.theme.colors.green1};
      background-clip: padding-box;
      border-radius: 9999px;
    }
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

  .container.mini {
    padding-left: 7rem;
  }

  .input {
    width: 100%;
    position: relative;
    height: 4.2rem;

    > svg {
      position: absolute;
      z-index: 10;
      margin-left: 1.2rem;
      top: 50%;
      transform: translateY(-40%);
      font-size: 2rem;
    }

    > input {
      width: 100%;
      position: absolute;
      height: 4.8rem;
      background: transparent;
      padding-left: 4rem;
      border: solid 0.1rem ${props => props.theme.colors.black3};
      border-radius: 0.8rem;
      color: ${props => props.theme.colors.gray1};
      font-size: 1.6rem;
      
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px ${props => props.theme.colors.black1} inset;
        -webkit-text-fill-color: ${props => props.theme.colors.gray1} !important;
      }
    }
  }

  .input.error {
    > svg {
      color: ${props => props.theme.colors.red};
    }
    
    > input {
      border: solid 0.2rem ${props => props.theme.colors.red};
      outline-color: ${props => props.theme.colors.red};

      &:focus {
        outline: 0.1rem solid ${props => props.theme.colors.red} !important;
      }

      &:focus-visible {
        outline-color: 0.1rem solid ${props => props.theme.colors.red} !important;
      }
    }
  }
`;