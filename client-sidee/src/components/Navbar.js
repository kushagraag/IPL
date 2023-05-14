import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.color.bg};
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: center;
`;

const NavbarList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  padding: 10px;
  margin: 0 5px;
  border-bottom: 2px solid transparent;
  font-size: 22px; /* Adjust the font size as needed */

  &:hover {
    border-bottom: 2px solid #333;
  }

  &.active {
    font-weight: bold;
    border-bottom: 2px solid #333;
  }
`;


function Navbar() {
  return (
    <Nav>
      <MenuItem>
        <NavbarList>
          <li>
            <NavbarLink exact to="/">Home</NavbarLink>
          </li>
          <li>
            <NavbarLink to="/livescore">LiveScore</NavbarLink>
          </li>
          <li>
            <NavbarLink to="/pointstable">Points Table</NavbarLink>
          </li>
          <li>
            <NavbarLink to="/schedule">Schedule</NavbarLink>
          </li>
          <li>
            <NavbarLink to="/statistic">Statistic</NavbarLink>
          </li>
          <li>
            <NavbarLink to="/login">Login</NavbarLink>
          </li>
        </NavbarList>
      </MenuItem>
    </Nav>
  );
}

export default Navbar;
