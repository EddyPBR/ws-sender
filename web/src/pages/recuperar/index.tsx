import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { Backlink } from "@components/Backlink";

import { Content, Box, LoginForm, OtherSection } from "./styles";

const Registrar: NextPage = () => {
  return (
    <>
      <Head>
        <title>Recuperar | WAS</title>
      </Head>

      <Backlink href="/" />

      <div className="container">
        <Content>
          <Image
            src="/assets/was-logo.svg"
            width="62"
            height="62"
            alt="Fazer login no WAS"
            priority={true}
          />

          <Box>
            <h1>Recuperar</h1>
            <p>Informe seu email logo abaixo</p>

            <LoginForm>
              <label htmlFor="email" className="input">
                <AiOutlineMail />
                <input id="email" type="email" placeholder="informe seu email" title="email" name="email" />
              </label>

              <button type="submit">Enviar</button>
            </LoginForm>
          </Box>

          <OtherSection>
            <span>
              Já possui conta?
              <Link href="/login" passHref={true}>
                <a>
                  Fazer login
                </a>
              </Link>
            </span>

            <span>
              Não possui conta?
              <Link href="/registrar" passHref={true}>
                <a>
                  Cadastre-se
                </a>
              </Link>
            </span>
          </OtherSection>
        </Content>
      </div>
    </>
  )
}

export default Registrar;
