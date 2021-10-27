import React from 'react'
import styled from 'styled-components';
import SignIn from '../../components/sign-in/SignIn.component';

const UserSignInUpPage = () => {
    return (
        <StyledSignIn>
            <SignIn />
        </StyledSignIn>
    )
}

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
`;

export default UserSignInUpPage;
