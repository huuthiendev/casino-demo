import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #373737;
  padding: 16px 0;
  position: relative;

  @media (max-width: 880px) {
    flex-direction: column;
    padding: 32px;
  }
`;

const NavLinkWrapper = styled.div`
  @media (max-width: 880px) {
    display: ${(props) => (props.active ? "block" : "none")};
    text-align: center;
    padding: 32px 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  transition: 0.2s;
  color: white;
  text-align: center;
  padding: 16px;

  &.${(props) => props.activeClassName} {
    background: #8DC63F;
  }

  @media (max-width: 880px) {
    display: block;
    margin: 32px auto;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  display: none;
  position: absolute;
  right: 20px;
  top: 18px;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  @media (max-width: 880px){
    display: block;
  }
`;

const Navbar = () => {
  const [active, setActive] = useState(false);

  const links = [
    {
      page: "Top Games",
      href: "/",
    },
    { page: "New Games", href: "/new-games" },
    { page: "Slots", href: "/slots" },
    {
      page: "Jackpots",
      href: "/jackpots",
    },
    { page: "Live", href: "/live" },
    { page: "Blackjack", href: "/blackjack" },
    { page: "Roulette", href: "/roulette" },
    { page: "Table", href: "/table" },
    { page: "Poker", href: "/poker" },
    { page: "Other", href: "/other" },
  ];

  return (
    <NavbarWrapper>
      <StyledFontAwesomeIcon icon={faBars} onClick={() => setActive(!active)} />
      <NavLinkWrapper active={active}>
        {links.map((link) => (
          <StyledNavLink
            activeClassName="active"
            key={link.page}
            to={link.href}
          >
            {link.page}
          </StyledNavLink>
        ))}
      </NavLinkWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
