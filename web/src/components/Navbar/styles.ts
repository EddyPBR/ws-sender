import styled from "styled-components";
import Link from "next/link";

interface INavItemProps {
  isActive?: boolean;
}

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;

  height: 100%;
  width: 8rem;
  
  background-color: ${props => props.theme.colors.black1};
`;

export const Container = styled.div`
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;

  width: 100%;
  height: 100%;

  padding: 3.2rem 0;
`;

export const Links = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;

  height: 100%;
  width: 100%;
`;

export const LogoutButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  margin: 0 auto;

  background: transparent;
  
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  svg {
    transition: color 0.2s;
    color: ${props => props.theme.colors.black3};
  }

  &:hover {
    svg {
      color: ${props => props.theme.colors.red};
    }
  }
`;

export const NavItem = styled.li<INavItemProps>`
  a {
    transition: color 0.2s;
    color: ${props => props.isActive 
      ? props.theme.colors.green1
      : props.theme.colors.black3
    };

    &:hover {
      color: ${props => props.theme.colors.green2};
    }
  }
`;

export const WasIcon = styled.div`
  margin: 0 auto;
  width: 3.2rem;
  height: 3.2rem;
`;