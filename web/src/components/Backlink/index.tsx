import Link from "next/link";
import { IoArrowUndoSharp } from "react-icons/io5";
import { Container, StyledLink } from "./styles";

interface IBacklink {
  href: string;
}

export function Backlink({ href }: IBacklink) {
  return (
    <Container>
      <Link href={href} passHref={true}>
        <StyledLink>
          <IoArrowUndoSharp />
          voltar
        </StyledLink>
      </Link>
    </Container>
  )
}