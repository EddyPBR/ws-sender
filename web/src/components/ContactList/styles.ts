import styled from "styled-components";

export const ContactBox = styled.section`
  list-style: none;
  
  width: 100%;
  max-width: 37rem;
  height: 45rem;

  background-color: ${props => props.theme.colors.black1};
  border-radius: 0.8rem;
`;

export const List = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  padding: 1.6rem 3.4rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  &::-webkit-scrollbar-track-piece {
    background-color: ${props => props.theme.colors.black1};
  }
`;

export const Item = styled.li`
  width: 100%;
  height: 6.8rem;
  padding: 1.6rem 1.8rem;
  border-radius: 0.8rem;

  display: flex;
  flex-direction: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;

  background-color: ${props => props.theme.colors.black2};
`;

export const Info = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  strong {
    font-size: 1.4rem;
    color: ${props => props.theme.colors.white};
  }

  span {
    font-size: 1.4rem;
    color: ${props => props.theme.colors.gray1};
  }
`;

interface ICheckBoxProps {
  isChecked?: boolean;
}

export const CheckBox = styled.div<ICheckBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.6rem;
  height: 2.6rem;
  border-radius: 0.4rem;
  
  background-color: ${props => props.theme.colors.black3};
  border: 1px solid transparent;

  border-color: ${props => props.isChecked ? props.theme.colors.green1 : "transparent" };
  
  svg {
    color: ${props => props.theme.colors.green1};
    display: ${props => props.isChecked ? "block" : "none" };
  }
`;
