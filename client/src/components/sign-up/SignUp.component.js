import React, { useState } from "react";
import { connect } from "react-redux";
// Styles
import styled from "styled-components";
// Components
import FormInput from "../formInput/FormInput.component";
import CustomButton from "../button-custom/CustomButton.component";
// Firebase
import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <StyledSignUp>
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton className="button" type="submit">
          Sign Up
        </CustomButton>
      </form>
    </StyledSignUp>
  );
};

const StyledSignUp = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  .title {
    margin: 1.6rem 0rem;
  }

  @media screen and (max-width: 800px) {
    width: 380px;
    text-align: center;

    .button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: auto;
    }
  }
`;

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
