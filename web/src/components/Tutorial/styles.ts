import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  article {
    display: flex;
    flex-direction: column;
    gap: 2.8rem;
    max-width: 47rem;
  }
`;