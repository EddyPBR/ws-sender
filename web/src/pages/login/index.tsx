import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";
import { Backlink } from "@components/Backlink";
import { SystemLinks } from "@components/SystemLinks";

import { Content, Box, LoginForm } from "./styles";

interface ILoginFormValues {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  async function handleLogin({ email, password }: ILoginFormValues) {
    console.log(email, password);
  }

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

            <LoginForm onSubmit={handleSubmit(handleLogin)}>
              <label htmlFor="email" className={`${errors?.email ? "input error" : "input"}`} >
                <AiOutlineMail />
                <input 
                  id="email"
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  title="Seu email"
                  {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
                />
              </label>

              <label htmlFor="password" className={`${errors?.password ? "input error" : "input"}`}>
                <BsShieldLock />
                <input 
                  id="password" 
                  type="password" 
                  placeholder="Sua senha" 
                  title="senha" 
                  {...register("password", {required: true, minLength: 6, maxLength: 18})}
                />
              </label>

              <button type="submit">Login</button>
            </LoginForm>
          </Box>

          <SystemLinks
            recover
            register
          />
        </Content>
      </div>
    </>
  )
}

export default Login;
