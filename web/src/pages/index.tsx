import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Main, Columns, AccessSection } from "./styles";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | WAS</title>
      </Head>

      <div className="container">
        <Columns>
          <Main>
            <h1>Bem-vindo ao WAS</h1>
            <p>O envio de mensagens esquematizadas e em massa no WhatsApp deixou de ser um problema!</p>

            <ul>
              <li>Envio de mensagens em massa</li>
              <li>Separe seus contatos por grupos</li>
              <li>Tudo gratuítamente</li>
            </ul>

            <AccessSection>
              <Link href="/login" passHref={true}>
                <a>
                  Faça login
                </a>
              </Link>
              <span>
                Não possui conta?
                <Link href="/registrar" passHref={true}>
                  <a>
                    Cadastre-se
                  </a>
                </Link>
              </span>
            </AccessSection>
          </Main>

          <Image 
            src="/assets/messages.svg" 
            width="470" 
            height="438" 
            alt="Bem-vindo ao WAS" 
            priority={true} 
          />
        </Columns>
      </div>
    </>
  )
}

export default Home;
