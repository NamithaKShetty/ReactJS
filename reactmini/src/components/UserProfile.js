import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #fff;
`;

const UserName = styled.span`
  font-weight: bold;
  color: white;
`;

function UserProfile() {
  const { user } = useContext(AuthContext);

  return (
    user && (
      <ProfileContainer>
        <Avatar src={user.avatar} alt="User Avatar" />
        <UserName>{user.name}</UserName>
      </ProfileContainer>
    )
  );
}

export default UserProfile;
