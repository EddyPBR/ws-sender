import Link from "next/link";
import { Content } from "./styles";

interface ISystemLinksProps {
  login?: boolean;
  recover?: boolean;
  register?: boolean;
}

export function SystemLinks({ login, recover, register }: ISystemLinksProps) {
  return (
    <Content>
      {
        login && (
          <span>
            Já possui conta?
            <Link href="/login" passHref={true}>
              <a>
                Fazer login
              </a>
            </Link>
          </span>
        )
      }
      {
        recover && (
          <span>
            Esqueceu sua senha?
            <Link href="/recuperar" passHref={true}>
              <a>
                Recuperar senha
              </a>
            </Link>
          </span>
        )
      }
      {
        register && (
          <span>
            Não possui conta?
            <Link href="/registrar" passHref={true}>
              <a>
                Cadastre-se
              </a>
            </Link>
          </span>
        )
      }
    </Content>
  )
}