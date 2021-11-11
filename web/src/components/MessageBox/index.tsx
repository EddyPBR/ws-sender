import { FaTelegramPlane } from "react-icons/fa";
import {
  MessageForm,
  TextArea,
  ControllBox,
  SelectedContactsBox,
  SendMessageButton
} from "./styles";

export function MessageBox() {
  return (
    <MessageForm>
      <TextArea
        id="message"
        name="message"
        title="Sua mensagem"
        placeholder="Escreva sua mensagem aqui"
      />

      <ControllBox>
        <SelectedContactsBox>
        </SelectedContactsBox>

        <SendMessageButton type="submit">
          <FaTelegramPlane size={18} />
        </SendMessageButton>
      </ControllBox>
    </MessageForm>
  )
}