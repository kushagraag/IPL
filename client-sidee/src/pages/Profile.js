import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Profile = ({ name, email, profileImage }) => {
  return (
    <ProfileContainer>
      <div>
        <h4>Sample Profile Page
          </h4>
      </div>
    </ProfileContainer>
  );
};

export default Profile;

