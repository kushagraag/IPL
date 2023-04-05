import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <Nav>
      <div className="menuItem">
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/livescore">LiveScore</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/pointstable">points table</NavLink>
          </li>

          <li>
            <NavLink className="navbar-link" to="/schedule">schedule</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/statistic">statistic</NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
.navbar-list {
  display: flex;
  gap: 4.8rem;
  li {
    margin-top: 40px;
    list-style: none;
    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.color.black};
        transition: color 0.3s linear;
      }
      &:hover,
      &:active {
        color: ${({ theme }) => theme.color.helper};
      }
    }
  }
}
`

export default Navbar;
