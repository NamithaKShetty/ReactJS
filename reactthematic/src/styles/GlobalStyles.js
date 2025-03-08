import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#222")};
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    font-family: Arial, sans-serif;
    transition: all 0.3s ease-in-out;
  }

  button {
    background-color: ${({ theme }) => (theme === "light" ? "#006600" : "#009900")};
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
  }

  button:hover {
    background-color: ${({ theme }) => (theme === "light" ? "#004f00" : "#007700")};
  }
`;
