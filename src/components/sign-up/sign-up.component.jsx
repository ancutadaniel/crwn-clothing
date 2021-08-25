import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { emailSignUpPending } from '../../redux/user-reducer/user-actions';
// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

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
    const { emailSignUpPending } = this.props;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    emailSignUpPending({ displayName, email, password });
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

const mapDispatchToProps = (dispatch) => ({
  emailSignUpPending: (userCredentials) =>
    dispatch(emailSignUpPending(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
