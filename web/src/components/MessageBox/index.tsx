import { FaTelegramPlane } from "react-icons/fa";

import {
  MessageForm,
  TextArea,
  ControllBox,
  SelectedContactsBox,
  SendMessageButton
} from "./styles";

import { useWhatsApp } from "@hooks/useWhatsApp";
import { Load } from "@components/Load";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

interface ISendManyMessageFormValues {
  message: string;
}

export function MessageBox() {
  const { handleSendMessage, isSendingMessage } = useWhatsApp();
  const { register, handleSubmit } = useForm();

  const [phones, setPhones] = useState<string[]>([
    "5583987956936",
    "5583987956936",
    "5583987956936"
  ]);

  async function handleSendManyMessages({ message }: ISendManyMessageFormValues) {
    if (!message || phones.length === 0) {
      toast.error("Necessário informar mensagem e pelo menos um contato");
      return;
    }

    const sendManyMessagesPromise = Promise.all(
      phones.map(async (phone) => await handleSendMessage(message, phone))
    );

    toast.promise(
      sendManyMessagesPromise,
      {
        loading: `Enviando mensagens...`,
        success: () => `Mensagens foram enviadas`,
        error: () => `Falha ao enviar mensagens.`,
      },
      {
        loading: {
          icon: '💬'
        },
        success: {
          duration: 6000,
        },
      }
    );
  }

  return (
    <MessageForm onSubmit={handleSubmit(handleSendManyMessages)}>
      <TextArea
        id="message"
        placeholder="Escreva sua mensagem aqui"
        title="Sua mensagem"
        {...register("message", { required: true })}
      />

      <ControllBox>
        <SelectedContactsBox>
        </SelectedContactsBox>

        <SendMessageButton type="submit">
          {isSendingMessage
            ? <Load size={20} />
            : <FaTelegramPlane size={18} />
          }
        </SendMessageButton>
      </ControllBox>
    </MessageForm>
  )
}