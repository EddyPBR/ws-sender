import styled from "styled-components";
import { lighten } from "polished";

export const MessageForm = styled.form`
  width: 100%;
  max-width: 43rem;
  height: 52rem;
  background-color: ${props => props.theme.colors.black1};
  border-radius: 1.2rem;

  display: flex;
  flex-direction: column;
`;

export const TextArea = styled.textarea`
  padding: 3.6rem 3rem;
  max-width: 100%;
  height: 37.7rem;
  resize: none;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.theme.colors.gray1};
  font-size: 1.6rem;
`;

export const ControllBox = styled.div`
  width: 100%;
  height: 14.4rem;
  border-radius: 0 0 1.2rem 1.2rem;
  background-color: ${props => lighten(0.05, props.theme.colors.black1)};
  padding: 2.2rem 1.6rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SelectedContactsBox = styled.div`
  margin-left: 1.4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.8rem;

  height: 10rem;
  width: 100%;
  max-width: 32.8rem;
  overflow-y: scroll;

  padding: 1.4rem;
  border-radius: 0.4rem;
  background-color: ${props => props.theme.colors.black2};

  &::-webkit-scrollbar-track-piece {
    background-color: ${props => props.theme.colors.black2};
  }
`;

export const SendMessageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.black2};
  border: 0.1rem solid ${props => props.theme.colors.black3};
  transition: background-color 0.2s, border-color 0.16s;
  
  > svg {
    transition: color 0.2s;
    color: ${props => props.theme.colors.gray1};
  }

  &:hover {
    background-color: ${props => lighten(0.02, props.theme.colors.black2)};
    border-color: ${props => props.theme.colors.green1};

    > svg {
      color: ${props => props.theme.colors.green1};
    }
  }
`;