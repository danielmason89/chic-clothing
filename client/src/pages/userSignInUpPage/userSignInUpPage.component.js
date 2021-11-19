import React from "react";
import styled from "styled-components";
import SignIn from "../../components/sign-in/SignIn.component";
import SignUp from "../../components/sign-up/SignUp.component";

const UserSignInUpPage = () => {
  return (
    <StyledSignInUp>
      <SignIn />
      <SignUp />
    </StyledSignInUp>
  );
};

const StyledSignInUp = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: auto;
    margin: 10px auto;
  }
`;

export default UserSignInUpPage;
