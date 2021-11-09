import styled from "styled-components";
import { darken } from "polished";

export const Presentation = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  article {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    max-width: 47rem;

    h1 {
      font-size: 4.8rem;
      font-weight: 400;
      line-height: 3.4rem;
      color: ${props => props.theme.colors.white};

      strong {
        font-size: 2.4rem;
        font-weight: 400;
      }
    }

    p {
      b {
        color: ${props => props.theme.colors.green2};
      }
    }

    button {
      padding: 1.4rem 2.8rem;
      border-radius: 0.4rem;
      background-color: ${props => props.theme.colors.green1};
      color: ${props => props.theme.colors.white};
      font-weight: bold;
      user-select: none;
      transition: background-color 0.2s;
      font-size: 1.6rem;
      width: 14rem;

      &:hover {
        background-color: ${props => darken(0.05, props.theme.colors.green1)};
      }
    }
  }
`;