import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";

import { Content, Box, LoginForm, OtherSection } from "./styles";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login | WAS</title>
      </Head>

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
              <a href="#">
                cadastre-se
              </a>
            </span>

            <span>
              Esqueceu sua senha?
              <a href="#">
                recuperar senha
              </a>
            </span>
          </OtherSection>
        </Content>
      </div>
    </>
  )
}

export default Login;
