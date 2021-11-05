import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  width: 90vw;
  max-width: 117rem;
  position: relative;
  margin: 0 auto;
`;

export const StyledLink = styled.a`
  font-size: 2rem;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
  transition: color .2s;
  color: ${props => props.theme.colors.green1};

  position: absolute;
  z-index: 10;

  top: 3.2rem;

  &:hover {
    color: ${props => lighten(0.15, props.theme.colors.green1)};
    text-decoration: underline;
  }
`;