import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import FormInput from "../../components/formInput/FormInput.component";
import CustomButton from "../button-custom/CustomButton.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <StyledSignIn>
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit} action="">
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Google Sign-in
          </CustomButton>
        </div>
      </form>
    </StyledSignIn>
  );
};

const StyledSignIn = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  .title {
    margin: 1.6rem 0rem;
  }
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (max-width: 800px) {
    width: 380px;
    display: flex;
    flex-direction: column;
    text-align: center;
    .title {
      margin: 1.6rem 0rem;
    }
    .buttons {
      display: flex;
      flex-direction: row;
      margin: 0 0.5rem;
    }
  }
`;

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
