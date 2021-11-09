import Image from "next/image";
import Link from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiContactsBook2Line } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";

import { Container, Links, LogoutButton, Nav, NavItem, WasIcon } from "./styles";

interface INavbarProps {
  onDashboard?: boolean;
  onContacts?: boolean;
  onProfile?: boolean;
}

export function Navbar({ onDashboard, onContacts, onProfile}: INavbarProps) {
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
            <Link href="#" passHref>
              <a>
                <AiOutlineDashboard size={24} />
              </a>
            </Link>
          </NavItem>

          <NavItem  isActive={onContacts}>
            <Link href="#" passHref>
              <a>
                <RiContactsBook2Line size={24} />
              </a>
            </Link>
          </NavItem>

          <NavItem  isActive={onProfile}>
            <Link href="#" passHref>
              <a>
                <FaUserCircle size={24} />
              </a>
            </Link>
          </NavItem>
        </Links>

        <LogoutButton type="button">
          <GoSignOut size={24} />
        </LogoutButton>
      </Container>
    </Nav>
  )
}