import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';

//redux
import {
  googleSignInPending,
  emailSignInPending,
} from '../../redux/user-reducer/user-actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonBarContainer,
} from './sign-in.styles';

const SignIn = ({ emailSignInPending, googleSignInPending }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInPending(email, password);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle> I already have account </SignInTitle>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          value={email}
          handleChange={handleChange}
          label='email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <ButtonBarContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton
            type='button'
            isGoogleSignIn
            onClick={googleSignInPending}
          >
            Sign In With Google{' '}
          </CustomButton>
        </ButtonBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInPending: () => dispatch(googleSignInPending()),
  emailSignInPending: (email, password) =>
    dispatch(emailSignInPending({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
