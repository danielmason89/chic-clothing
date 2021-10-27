import React from 'react'
import styled from 'styled-components';
import FormInput from '../../components/formInput/FormInput.component';
import CustomButton from '../button-custom/CustomButton.component';
import { auth, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render(){
        return(
            <StyledSignIn>
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} action="">
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label='Email' required/>
                    <FormInput name="password" type="password" handleChange={this.handleChange} value={this.state.password} label='Password' required/>
                    <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Google Sign-in</CustomButton>
                    </div>
                </form>
            </StyledSignIn>
            )
    }
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

export default SignIn;
