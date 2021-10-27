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
width: 30vw;
display: flex;
flex-direction: column;
 .title {
     margin: 1.6rem 0px;
 }
`;

export default UserSignInUpPage;
