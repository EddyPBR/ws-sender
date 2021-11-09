import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";
import { Backlink } from "@components/Backlink";
import { SystemLinks } from "@components/SystemLinks";
import { Load } from "@components/Load";
import { api } from "@services/api";
import { toast } from "react-hot-toast";

import { Content, Box, LoginForm } from "./styles";

interface ILoginFormValues {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  async function handleLogin({ email, password }: ILoginFormValues) {
    setIsLoggingIn(true);

    try {
      await api.post("/authenticate", {
        email,
        password
      });

      toast.success("Bem-vindo ao WAS! :)");
      router.push("/dashboard");
    } catch {
      toast.error("Usuário ou senha inválidos");
      setIsLoggingIn(false);
    }
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
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                />
              </label>

              <label htmlFor="password" className={`${errors?.password ? "input error" : "input"}`}>
                <BsShieldLock />
                <input
                  id="password"
                  type="password"
                  placeholder="Sua senha"
                  title="senha"
                  {...register("password", { required: true, minLength: 6, maxLength: 18 })}
                />
              </label>

              <button
                type="submit"
                disabled={isLoggingIn}
              >
                {
                  isLoggingIn
                    ? <Load />
                    : "Login"
                }
              </button>
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
