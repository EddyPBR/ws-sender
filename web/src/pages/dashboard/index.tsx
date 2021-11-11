import type { NextPage, GetServerSideProps, NextPageContext } from "next";
import Head from "next/head";
import { parseCookies, destroyCookie } from "nookies";
import { Navbar } from "@components/Navbar";
import { Presentation } from "@components/Presentation";
import { Tutorial } from "@components/Tutorial";
import { WhatsAppSession } from "@components/WhatsAppSession";

import { api } from "@services/api";
import { useWhatsApp } from "@hooks/useWhatsApp";

interface IUserData {
  email: string;
}

interface IDashboardPageContext extends NextPageContext {
  user: IUserData;
}

const Dashboard: NextPage<IDashboardPageContext> = ({ user }) => {
  const { sessionId, whatsAppSession } = useWhatsApp();

  return (
    <>
      <Head>
        <title>Dashboard | WAS</title>
      </Head>

      <Navbar onDashboard />

      <div className="container mini">
        {(!sessionId) &&
          <Presentation email={user.email} />
        }

        {(sessionId && !whatsAppSession) &&
          <Tutorial />
        }

        {(sessionId && whatsAppSession) &&
          <WhatsAppSession />
        }
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