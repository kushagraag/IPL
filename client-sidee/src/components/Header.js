import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

function Header() {
  return (
    <MainHeader>
      <LogoLink to="/">
        <Logo
          src="./images/tata_ipl_logo_png_by_harshmore7781_df0fniy-fullview.png"
          alt="logo" sizes="100px"
        />
      </LogoLink>
      <Navbar />
    </MainHeader>
  );
}

const MainHeader = styled.header`
  padding: 0 12rem;
  height: 6rem;
  background-color: ${({ theme }) => theme.color.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLink = styled(NavLink)`
  text-decoration: none;
`;

const Logo = styled.img`
  height: 3rem; /* Adjust the height as needed */
  width: auto;
`;
export default Header;
