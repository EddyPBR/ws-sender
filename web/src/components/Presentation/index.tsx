import Image from "next/image";
import { useWhatsApp } from "@hooks/useWhatsApp";
import { Load } from "@components/Load";

import { Container, StartSectionButton } from "./styles";

interface IPresentationProps {
  email: string;
}

export function Presentation({ email }: IPresentationProps) {
  const { isLoadingSession, handleCreateWhatsAppSession } = useWhatsApp();

  return (
    <Container>
      <article>
        <h1>
          Olá,
          <br />
          <strong>
            {email}
          </strong>
        </h1>

        <p>
          Seja bem vindo ao <b>WAS</b>, para iniciar basta clicar no botão iniciar
          conexão, assim vamos construir uma nova instância para o seu
          WhatsApp.
        </p>

        <StartSectionButton
          type="button"
          onClick={handleCreateWhatsAppSession}
          disabled={isLoadingSession}
        >
          {isLoadingSession
            ? <Load />
            : "Iniciar"
          }
        </StartSectionButton>
      </article>

      <Image
        src="/assets/connect.svg"
        width="500"
        height="384"
        alt="Inicie a instância e vamos começar!"
        priority={true}
      />
    </Container>
  )
}