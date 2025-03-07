import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import { FaMoon, FaSun, FaSignOutAlt, FaUser } from "react-icons/fa";
import UserProfile from "./UserProfile"; // Import UserProfile
import styled from "styled-components";

const NavBar = styled.nav`
  background: ${({ theme }) => (theme === "light" ? "#004F00" : "#222")};
  color: #fff;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, login, logout } = useContext(AuthContext);

  return (
    <NavBar theme={theme}>
      <h3>Advanced App</h3>
      <div className="d-flex align-items-center gap-3">
        <button className="btn btn-outline-warning me-2" onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
        {user ? (
          <>
            <UserProfile />
            <button className="btn btn-danger" onClick={logout}>
              <FaSignOutAlt /> Logout
            </button>
          </>
        ) : (
          <button className="btn btn-primary" onClick={login}>
            <FaUser /> Login
          </button>
        )}
      </div>
    </NavBar>
  );
}

export default Navbar;
