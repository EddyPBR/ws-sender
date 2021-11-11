import Image from "next/image";
import { QrCode } from "@components/QrCode";

import { Container } from "./styles";

export function Tutorial() {
  return (
    <Container>
      <article>
        <p>
          Para utilizar o WAS precisamos que você conecte o seu WhatsApp, o
          procecimento é bem simples, abra o aplicativo em seu smartphone e
          siga o exemplo abaixo.
        </p>
        <Image
          src="/assets/was-qrcode.png"
          alt="Faça o escaneamento do QrCode com o seu WhatsApp"
          width="470"
          height="220"
          priority={true}
        />
        <p>
          Com tudo feito, basta escanear o QR Code que fornecemos.
        </p>
      </article>
      <QrCode />
    </Container>
  )
}