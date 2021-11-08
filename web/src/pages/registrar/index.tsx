import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";
import { Backlink } from "@components/Backlink";
import { SystemLinks } from "@components/SystemLinks";

import { Content, Box, RegisterForm } from "./styles";

interface IRegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const Registrar: NextPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  async function handleRegisterPassword({ email, password, confirmPassword }: IRegisterFormValues) {
    if(password !== confirmPassword) {
      console.log("As senhas não estão iguais!")
    }

    console.log(email);
  }

  return (
    <>
      <Head>
        <title>Registrar | WAS</title>
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
            <h1>Registrar</h1>
            <p>Informe seu email e crie uma senha</p>

            <RegisterForm onSubmit={handleSubmit(handleRegisterPassword)}>
              <label htmlFor="email" className={`${errors?.email ? "input error" : "input"}`}>
                <AiOutlineMail />
                <input 
                  id="email" 
                  type="email" 
                  placeholder="seuemail@exemplo.com" 
                  title="email"
                  {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
                />
              </label>

              <label htmlFor="password" className={`${errors?.email ? "input error" : "input"}`}>
                <BsShieldLock />
                <input 
                  id="password" 
                  type="password" 
                  placeholder="sua senha" 
                  title="senha"
                  {...register("password", { required: true, minLength: 6, maxLength: 18 })}
                />
              </label>

              <label htmlFor="confirmPassword" className={`${errors?.email ? "input error" : "input"}`}>
                <BsShieldLock />
                <input 
                  id="confirmPassword" 
                  type="confirmPassword" 
                  placeholder="confirme sua senha" 
                  title="confirmar senha"
                  {...register("confirmPassword", { required: true, minLength: 6, maxLength: 18 })}
                />
              </label>

              <button type="submit">Cadastrar</button>
            </RegisterForm>
          </Box>

          <SystemLinks
            login
            recover
          />
        </Content>
      </div>
    </>
  )
}

export default Registrar;
