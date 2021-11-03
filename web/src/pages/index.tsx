import type { NextPage } from "next";
import QRCode from "react-qr-code";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import { useRouter } from "next/router";

import { Load } from "../components/Load";

import { Container, QRCodeBox } from "../styles/global";

import { api } from "../services/api";

interface IWhatsAppSession {
  WABrowserId: string;
  WASecretBundle: string;
  WAToken1: string;
  WAToken2: string;
}

const Home: NextPage = () => {
  const [qrCodeSession, setQrCodeSession] = useState<string | undefined>();
  const [session, setSession] = useState<IWhatsAppSession | undefined>();

  const router = useRouter();

  useEffect(() => {
    const getQRCode = async () => {
      try {
        const response = await api.get("qrcode");
        const { qrCode } = response.data;
        setQrCodeSession(qrCode);
      } catch (err) {
        console.log(err);
      }
    }

    const checkWhatsappSession = async (session: IWhatsAppSession) => {
      try {
        await api.post("session", session);

        setSession(session);
        router.push("/dashboard");
      } catch (err) {
        setSession(undefined);
        localStorage.removeItem("@ws-sender:session");
        console.log(err);
      }
    }

    const session = localStorage.getItem("@ws-sender:session");

    if(session) {
      checkWhatsappSession(JSON.parse(session));
    } else {
      getQRCode();
    }
  }, []);

  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_API_URL || "");

    socket.on("new_connection", (session: IWhatsAppSession) => {
      const sessionString = JSON.stringify(session);
      localStorage.setItem("@ws-sender:session", sessionString);
      router.push("/dashboard");
    });
  }, []);

  return (
    <Container>
      { session && <h1>AUTENTICADO</h1> }

      {qrCodeSession && !session ? (
        <QRCodeBox>
          <QRCode value={qrCodeSession} />
        </QRCodeBox>
      ) : (
        <Load size={32} />
      )}
    </Container>
  )
}

export default Home
