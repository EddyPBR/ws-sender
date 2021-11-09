import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiContactsBook2Line } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { toast } from "react-hot-toast";
import { api } from "@services/api";
import { Load } from "@components/Load";

import { Container, Links, LogoutButton, Nav, NavItem, WasIcon } from "./styles";

interface INavbarProps {
  onDashboard?: boolean;
  onContacts?: boolean;
  onProfile?: boolean;
}

export function Navbar({ onDashboard, onContacts, onProfile }: INavbarProps) {
  const router = useRouter();
  const [isLoggingOff, setIsLoggingOff] = useState(false);

  async function handleLogout() {
    setIsLoggingOff(true);

    try {
      await api.delete("/authenticate");
      toast.error("I will miss you :(");
      router.push("/login");
    } catch {
      toast.error("Falha ao fazer logout, tente novamente");
      setIsLoggingOff(false);
    }
  }

  return (
    <Nav>
      <Container>
        <WasIcon>
          <Link href="/" passHref={true}>
            <a>
              <Image
                src="/assets/was-logo.svg"
                width="32"
                height="32"
                alt="Bem-vindo ao WAS"
                priority={true}
              />
            </a>
          </Link>
        </WasIcon>

        <Links>
          <NavItem isActive={onDashboard}>
            <Link href="/dashboard" passHref>
              <a>
                <AiOutlineDashboard size={24} />
              </a>
            </Link>
          </NavItem>

          <NavItem isActive={onContacts}>
            <Link href="/contacts" passHref>
              <a>
                <RiContactsBook2Line size={24} />
              </a>
            </Link>
          </NavItem>

          <NavItem isActive={onProfile}>
            <Link href="/profile" passHref>
              <a>
                <FaUserCircle size={24} />
              </a>
            </Link>
          </NavItem>
        </Links>

        <LogoutButton
          type="button"
          onClick={handleLogout}
          disabled={isLoggingOff}
        >
          {isLoggingOff
            ? <Load />
            : <GoSignOut size={24} />
          }
        </LogoutButton>
      </Container>
    </Nav>
  )
}