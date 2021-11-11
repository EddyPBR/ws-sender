import type { NextPage, GetServerSideProps, NextPageContext } from "next";
import Head from "next/head";
import Image from "next/image";
import { parseCookies, destroyCookie } from "nookies";
import { Navbar } from "@components/Navbar";
import { QrCode } from "@components/QrCode";
import { Load } from "@components/Load";
import { api } from "@services/api";
import { useWhatsApp } from "@hooks/useWhatsApp";

import { Presentation } from "@components/Presentation";

import { Tutorial } from "./styles";

interface IUserData {
  email: string;
}

interface IDashboardPageContext extends NextPageContext {
  user: IUserData;
}

const Dashboard: NextPage<IDashboardPageContext> = ({ user }) => {
  const { sessionId, whatsAppSession, isLoadingSession, handleCreateWhatsAppSession } = useWhatsApp();

  return (
    <>
      <Head>
        <title>Dashboard | WAS</title>
      </Head>

      <Navbar onDashboard />

      <div className="container mini">
        {(!sessionId) && ( <Presentation email={user.email} /> )}

        {(sessionId && !whatsAppSession) && (
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

        {(sessionId && whatsAppSession) && (
          <h1>pronto para enviar mensagens</h1>
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