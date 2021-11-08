import styled from "styled-components";

export const Content = styled.section`
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