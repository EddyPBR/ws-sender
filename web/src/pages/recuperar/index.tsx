import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { Backlink } from "@components/Backlink";
import { SystemLinks } from "@components/SystemLinks";

import { Content, Box, RecoverForm } from "./styles";

interface IRecoverPasswordFormValues {
  email: string;
}

const Registrar: NextPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  async function handleRecoverPassword({ email }: IRecoverPasswordFormValues) {
    console.log(email);
  }

  return (
    <>
      <Head>
        <title>Recuperar senha | WAS</title>
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
            <h1>Recuperar senha</h1>
            <p>Vamos lhe enviar um email de recuperação!</p>

            <RecoverForm onSubmit={handleSubmit(handleRecoverPassword)}>
              <label htmlFor="email" className={`${errors?.email ? "input error" : "input"}`}>
                <AiOutlineMail />
                <input
                  id="email"
                  type="email"
                  placeholder="informe seu email"
                  title="email"
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                />
              </label>

              <button type="submit">Recuperar</button>
            </RecoverForm>
          </Box>

          <SystemLinks
            login
            register
          />
        </Content>
      </div>
    </>
  )
}

export default Registrar;
