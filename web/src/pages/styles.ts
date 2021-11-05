import styled from "styled-components";
import { darken } from "polished";

export const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  width: 100%;
  height: 100%;

  @media(max-width: 1170px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 4rem 0;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 47rem;

  @media(max-width: 1170px) {
    margin: 0 auto;
    margin-top: 8rem;
  }

  h1 {
    font-size: 4.8rem;
    color: ${props => props.theme.colors.green2};

    @media(max-width: 1170px) {
      font-size: 3.6rem;
    }
  }

  p {
    margin-top: 1.2rem;
    line-height: 2.8rem;

    @media(max-width: 1170px) {
      font-size: 1.6rem;
    }
  }

  ul {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    list-style: none;

    @media(max-width: 1170px) {
      font-size: 1.6rem;
    }

    li:before {
      content: "";
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background-color: ${props => props.theme.colors.green2};
      display: inline-block;
      margin-bottom: 0.4rem;
      margin-right: 0.8rem;

      @media(max-width: 1170px) {
        width: 0.6rem;
        height: 0.6rem;
      }
    }
  }
`;

export const AccessSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.4rem;
  margin-top: 6.4rem;

  @media(max-width: 380px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
  }

  > a {
    padding: 1.4rem 2.8rem;
    border-radius: 0.4rem;
    background-color: ${props => props.theme.colors.green1};
    color: ${props => props.theme.colors.white};
    font-weight: bold;
    user-select: none;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${props => darken(0.05, props.theme.colors.green1)};
    }
  }

  span {
    font-size: 1.6rem;

    @media(max-width: 1170px) {
      font-size: 1.4rem;
    }

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