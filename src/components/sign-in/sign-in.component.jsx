import React from 'react';
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
    const { emailSignInPending } = this.props;
    const { email, password } = this.state;
    emailSignInPending(email, password);
  };

  render() {
    const { googleSignInPending } = this.props;
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
              onClick={googleSignInPending}
            >
              Sign In With Google{' '}
            </CustomButton>
          </ButtonBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInPending: () => dispatch(googleSignInPending()),
  emailSignInPending: (email, password) =>
    dispatch(emailSignInPending({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
