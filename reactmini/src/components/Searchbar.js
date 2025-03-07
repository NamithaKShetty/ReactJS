import React, { useState, useEffect, useContext } from "react";
import { debounce } from "lodash";
import { ThemeContext } from "../context/ThemeContext"; // Import Theme Context
import styled from "styled-components";

const SearchWrapper = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #004F00;
  border-radius: 5px;
  background: ${({ theme }) => (theme === "dark" ? "#333" : "#fff")};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

const ListItem = styled.li`
  background: ${({ theme }) => (theme === "dark" ? "#444" : "#f8f9fa")};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  animation: fadeIn 0.5s ease-in-out;
`;

const items = [
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Python",
  "Django",
  "Machine Learning",
  "Data Science",
  "Cyber Security",
];

function SearchList() {
  const { theme } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = debounce((query) => {
    setFilteredItems(
      items.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, 300);

  useEffect(() => {
    handleSearch(search);
  }, [search]);

  return (
    <SearchWrapper>
      <h2>🔍 Advanced Search</h2>
      <Input
        type="text"
        placeholder="Search topics..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        theme={theme}
      />
      <List>
        {filteredItems.map((item, index) => (
          <ListItem key={index} theme={theme}>{item}</ListItem>
        ))}
      </List>
    </SearchWrapper>
  );
}

export default SearchList;
