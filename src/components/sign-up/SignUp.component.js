import React from 'react'
// Styles
import styled from 'styled-components';
// Components
import FormInput from '../formInput/FormInput.component';
import CustomButton from '../button-custom/CustomButton.component';
// Firebase
import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '', 
            password: '', 
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword) {
            alert("passwords don't match")
            return;
        }
        try{
        const { user } = await auth.createUserWithEmailAndPassword(email, password);

        await createUserProfileDocument(user, { displayName });

        this.setState({
        displayName: '',
        email: '', 
        password: '', 
        confirmPassword: ''
        });
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }


    render() {
        const { displayName, email, password, confirmPassword } = this.state;
    return (
        <StyledSignUp>
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Name' required/>
                <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required/>
                <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required/>
                <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required/>
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form> 
        </StyledSignUp>
        )
    }
}

const StyledSignUp = styled.div`
display: flex;
flex-direction: column;
width: 380px;

.title {
    margin: 1.6rem 0rem;
}
`;

export default SignUp;
