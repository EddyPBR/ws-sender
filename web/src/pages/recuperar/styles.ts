import styled from "styled-components";
import { darken } from "polished";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 4rem 0;
`;

export const Box = styled.main`
  display: flex;
  flex-direction: column;

  padding: 4.8rem 4rem;
  background-color: ${props => props.theme.colors.black1};
  border-radius: 1.2rem;
  max-width: 37rem;
  width: 100%;
  margin-top: 4rem;

  h1 {
    font-size: 3.6rem;
    font-weight: 400;
  }

  p {
    font-size: 1.6rem;
    margin-top: 0.8rem;
  }

  @media(max-width: 380px) {
    padding: 4.8rem 3.2rem;

    h1 {
      font-size: 3.2rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;

export const RecoverForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin-top: 3.2rem;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.green1};
    color: ${props => props.theme.colors.white};
    width: 100%;
    height: 4.4rem;
    font-size: 1.6rem;
    font-weight: bold;
    border-radius: 0.8rem;
    transition: background-color 0.2s;
    user-select: none;

    &:hover {
      background-color: ${props => darken(0.05, props.theme.colors.green1)};
    }
  }
`;

export const OtherSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  margin-top: 4rem;
  max-width: 37rem;

  span {
    font-size: 1.6rem;
    text-align: center;

    a {
      margin-left: 0.4rem;
      color: ${props => props.theme.colors.blue};
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;