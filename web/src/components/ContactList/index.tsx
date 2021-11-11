import { BsCheck } from "react-icons/bs";
import { ContactBox, List, Item, CheckBox, Info } from "./styles";

export function ContactList() {
  return (
    <ContactBox>
      <List>
        <Item>
          <Info>
            <strong>Edvaldo Junior</strong>
            <span>+55 83 98795-6936</span>
          </Info>

          <CheckBox isChecked>
            <BsCheck size={24} />
          </CheckBox>
        </Item>
      </List>
    </ContactBox>
  )
}