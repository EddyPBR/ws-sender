import styled, { keyframes } from "styled-components";

interface LoadAnimationProps {
  size?: number;
}

const rotate = () => keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadAnimation = styled.span<LoadAnimationProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;

  > svg {
    width: ${props => props.size ? `${props.size / 10}rem` : `2rem`};
    height: ${props => props.size ? `${props.size / 10}rem` : `2rem`};
    animation: ${rotate()} 1.8s linear infinite;
  }
`;