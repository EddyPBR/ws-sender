import type { NextPage } from "next";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import { useRouter } from "next/router";

import { Container } from "@styles/global";

import { api } from "@services/api";

import { QrCode } from "@components/QrCode";

interface IWhatsAppSession {
  WABrowserId: string;
  WASecretBundle: string;
  WAToken1: string;
  WAToken2: string;
}

const Home: NextPage = () => {
  const [session, setSession] = useState<IWhatsAppSession | undefined>();

  const router = useRouter();

  useEffect(() => {
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

    if (!session) {
      return;
    }

    checkWhatsappSession(JSON.parse(session));
  }, []);

  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_API_URL || "");

    socket.on("new_connection", (session: IWhatsAppSession) => {
      const sessionString = JSON.stringify(session);
      localStorage.setItem("@ws-sender:session", sessionString);
      router.push("/dashboard")
    });
  }, []);

  return (
    <Container>
      {!session
        ? <QrCode />
        : <h1>Autenticado!</h1>
      }
    </Container>
  )
}

export default Home
