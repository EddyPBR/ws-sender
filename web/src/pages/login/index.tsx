import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";
import { Backlink } from "@components/Backlink";

import { Content, Box, LoginForm, OtherSection } from "./styles";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login | WAS</title>
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
            <h1>Login</h1>
            <p>Faça login para acessar o sistema</p>

            <LoginForm>
              <label htmlFor="email" className="input">
                <AiOutlineMail />
                <input id="email" type="email" placeholder="seuemail@exemplo.com" title="email" name="email" />
              </label>

              <label htmlFor="password" className="input">
                <BsShieldLock />
                <input id="password" type="password" placeholder="sua senha" title="senha" name="password" />
              </label>

              <button type="submit">Login</button>
            </LoginForm>
          </Box>

          <OtherSection>
            <span>
              Não possui conta?
              <Link href="/registrar" passHref={true}>
                <a>
                  Cadastre-se
                </a>
              </Link>
            </span>

            <span>
              Esqueceu sua senha?
              <Link href="/recuperar" passHref={true}>
                <a>
                  Recuperar senha
                </a>
              </Link>
            </span>
          </OtherSection>
        </Content>
      </div>
    </>
  )
}

export default Login;
