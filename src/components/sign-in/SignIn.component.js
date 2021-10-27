import React from 'react'
import FormInput from '../../components/formInput/FormInput.component';
import CustomButton from '../button-custom/CustomButton.component';
import { signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className="signIn">
                <h2 class="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} action="">
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label='email' required/>
                    <FormInput name="password" type="password" handleChange={this.handleChange} value={this.state.email} label='password' required/>
                    <div class="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In Google</CustomButton>
                    </div>
                </form>
            </div>
            )
    }
}
export default SignIn;
