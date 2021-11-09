import type { NextPage, GetServerSideProps, NextPageContext } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { parseCookies, destroyCookie } from "nookies";
import { Navbar } from "@components/Navbar";
import { QrCode } from "@components/QrCode";
import { api } from "@services/api";

import { Presentation, Tutorial } from "./styles";

interface IUserData {
  email: string;
}

interface IDashboardPageContext extends NextPageContext {
  user: IUserData;
}

type DashboardStatusType = "not initialized" | "initialized" | "in session";

const Dashboard: NextPage<IDashboardPageContext> = ({ user }) => {
  const [status, setStatus] = useState<DashboardStatusType>("not initialized");

  return (
    <>
      <Head>
        <title>Dashboard | WAS</title>
      </Head>

      <Navbar onDashboard />

      <div className="container mini">
        {(status === "not initialized") && (
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

              <button type="button" onClick={() => setStatus("initialized")}>
                Iniciar
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
        {(status === "initialized") && (
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