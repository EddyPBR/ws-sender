import type { NextPage, GetServerSideProps, NextPageContext } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { parseCookies, destroyCookie } from "nookies";
import { Navbar } from "@components/Navbar";
import { QrCode } from "@components/QrCode";
import { Load } from "@components/Load";
import { api } from "@services/api";

import { Presentation, Tutorial } from "./styles";

interface IUserData {
  email: string;
}

interface IDashboardPageContext extends NextPageContext {
  user: IUserData;
}

interface ICreateWhatsAppSesssionResponse {
  sessionId: string;
}

const Dashboard: NextPage<IDashboardPageContext> = ({ user }) => {
  const [session, setSession] = useState<string | null>(null);

  const [isLoadingSession, setIsLoadingSession] = useState(false);

  async function handleCreateWhatsAppSession() {
    setIsLoadingSession(true);

    try {
      const { data: { sessionId } } = await api.post<ICreateWhatsAppSesssionResponse>("whatsapp/start");

      localStorage.setItem("was@sessionId", sessionId);

      setSession(sessionId);
    } catch {
      toast.error("Falha ao inicializar sessão do WhatsApp");
      setIsLoadingSession(false);
    }
  }

  useEffect(() => {
    const sessionId = localStorage.getItem("was@sessionId");
    sessionId ? setSession(sessionId) : null;
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard | WAS</title>
      </Head>

      <Navbar onDashboard />

      <div className="container mini">
        {(!session) && (
          <Presentation>
            <article>
              <h1>
                Olá,
                <br />
                <strong>
                  {user?.email}
                </strong>
              </h1>

              <p>
                Seja bem vindo ao <b>WAS</b>, para iniciar basta clicar no botão iniciar 
                conexão, assim vamos construir uma nova instância para o seu 
                WhatsApp.
              </p>

              <button type="button" onClick={handleCreateWhatsAppSession} disabled={isLoadingSession}>
                { isLoadingSession ? <Load /> : "Iniciar" }
              </button>
            </article>

            <article>
              <Image 
                src="/assets/connect.svg" 
                width="500"
                height="384" 
                alt="Inicie a instância e vamos começar!" 
                priority={true} 
              />
            </article>
          </Presentation>
        )}

        {(session) && (
          <Tutorial>
            <article>
              <p>
                Para utilizar o WAS precisamos que você conecte o seu WhatsApp, o 
                procecimento é bem simples, abra o aplicativo em seu smartphone e 
                siga o exemplo abaixo.
              </p>
              <Image
                src="/assets/was-qrcode.png"
                alt="Para conectar o WAS ao seu WhatsApp, abra o aplicativo, 
                precione no ícone de três pontinhos (opções), depois selecione 
                'aparelhos conectados' e finalmente pressione o botão 
                'Conectar aparelho', faça o escaneamento do QR Code e pronto!"
                width="470"
                height="220"
                priority={true}
              />
              <p>
                Com tudo feito, basta escanear o QR Code que fornecemos.
              </p>
            </article>
            <QrCode />
          </Tutorial>
        )}
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["was@token"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  try {
    const { data: user } = await api.get<IUserData>("/user", {
      headers: {
        cookie: `was@token=${token}`,
      },
    });

    return {
      props: {
        user
      },
    };
  } catch {
    destroyCookie(ctx, "was@token");

    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
}

export default Dashboard;