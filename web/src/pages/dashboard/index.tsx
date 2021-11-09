import type { NextPage, GetServerSideProps, NextPageContext } from "next";
import Head from "next/head";
import Image from "next/image";
import { parseCookies, destroyCookie } from "nookies";
import { Navbar } from "@components/Navbar";
import { api } from "@services/api";

import { Presentation } from "./styles";

interface IUserData {
  email: string;
}

interface IDashboardPageContext extends NextPageContext {
  user: IUserData;
}

const Dashboard: NextPage<IDashboardPageContext> = ({ user }) => {
  return (
    <>
      <Head>
        <title>Dashboard | WAS</title>
      </Head>

      <Navbar onDashboard />

      <div className="container mini">
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

            <button type="button">
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