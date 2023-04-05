import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

function Header() {
  return (
    <>
    
            
      <MainHeading>
        <NavLink to = "/">
        <img src="./images/tata_ipl_logo_png_by_harshmore7781_df0fniy-fullview.png" alt="logo" className="logo" />
            
        </NavLink>
        <Navbar>
          
        </Navbar>
      </MainHeading>
    </>
  );
}

const MainHeading = styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color:${({theme}) => theme.color.bg};
display:flex;
justify-content: space-between;
align-item: center;
.logo{
  margin-top: 30px;
  height: 5rem;
}
`;


export default Header;
