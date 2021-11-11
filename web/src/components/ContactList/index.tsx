import { BsCheck } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";
import { ContainerBox, List, Item, CheckBox, Info, Select } from "./styles";

export function ContactList() {
  return (
    <ContainerBox>
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

      <Select>
        <select>
          <option 
            value="" 
            selected 
            disabled 
            hidden
          >
            Listas pré-definidas
          </option>
          <option value="Todos">Todos</option>
          <option value="Clientes">Clientes</option>
          <option value="Pessoal interno">Pessoal interno</option>
          <option value="Alunos">Alunos</option>
        </select>

        <RiArrowDownSFill size={24} />
      </Select>

      
      
    </ContainerBox>
  )
}