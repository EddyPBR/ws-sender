import styled from "styled-components";

export const QRCodeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.white};
  padding: 3.2rem;
  border-radius: 0.8rem;
`;