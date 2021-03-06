import styled, { css } from 'styled-components';

const buttonStyled = css`
background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const InvertedButtonStyled = css`
  background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`;

const googleSignInStyles = css`
background-color: #4285f4;
    color: white;
    border: none;

    &:hover {
      background-color: #2a6eda;
      border: none;
    }
`;

const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
      return googleSignInStyles;
    }
    return props.inverted ? InvertedButtonStyled : buttonStyled;
  }

export const StyledButton = styled.button` 
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 14px;
  text-transform: uppercase;
  font-family: 'Open Sans';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;