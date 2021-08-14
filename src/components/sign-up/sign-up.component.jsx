import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  render() {
    return (
      <SignUpContainer>
        <SignUpTitle> I do not have a account </SignUpTitle>
        <span>Sign up with email and password</span>
        <form className='sign-up-form' onSubmit={(e) => this.handleSubmit(e)}>
          <FormInput
            type='text'
            name='displayName'
            value={this.state.displayName}
            handleChange={(e) => this.handleChange(e)}
            label='name'
            required
          />
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
          <FormInput
            type='password'
            name='confirmPassword'
            value={this.state.confirmPassword}
            handleChange={(e) => this.handleChange(e)}
            label='confirm password'
            required
          />
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;
