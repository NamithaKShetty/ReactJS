import React from "react";
import styled from "styled-components";

const TeamContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => (theme === "light" ? "#f9f9f9" : "#333")};
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const TeamList = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Member = styled.div`
  background: ${({ theme }) => (theme === "light" ? "#fff" : "#444")};
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Team = () => {
  return (
    <TeamContainer>
      <h2>Meet Our Team</h2>
      <TeamList>
        <Member>
          <h3>Jane Doe</h3>
          <p>Frontend Developer</p>
        </Member>
        <Member>
          <h3>John Smith</h3>
          <p>Backend Developer</p>
        </Member>
        <Member>
          <h3>Emma Wilson</h3>
          <p>UI/UX Designer</p>
        </Member>
      </TeamList>
    </TeamContainer>
  );
};

export default Team;
