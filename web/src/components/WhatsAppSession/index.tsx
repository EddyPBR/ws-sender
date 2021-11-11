import { MessageBox } from "@components/MessageBox";
import { ContactList } from "@components/ContactList";

import { Container } from "./styles";

export function WhatsAppSession() {
  return (
    <Container>
      <MessageBox />
      <ContactList />
    </Container>
  );
}