import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import {
  SignInContainer,
  SignInTitle,
  ButtonBarContainer,
} from './sign-in.styles';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle> I already have account </SignInTitle>
        <span>Sign in with email and password</span>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            handleChange={(e) => this.handleChange(e)}
            label='email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            handleChange={(e) => this.handleChange(e)}
            label='password'
            required
          />
          <ButtonBarContainer>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton
              type='button'
              isGoogleSignIn
              onClick={signInWithGoogle}
            >
              Sign In With Google{' '}
            </CustomButton>
          </ButtonBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
