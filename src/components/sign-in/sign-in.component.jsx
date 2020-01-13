import React, { Component } from 'react';
import FormInputComponent from '../form-input/form-input.component';
import CustomButtonComponent from '../custom-button/custom-button.component';
import { auth } from '../../firebase/firebase.utils';

import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignInComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: '',
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <FormInputComponent
            type="email"
            name="email"
            value={this.state.email}
            required
            label="Email"
            handleChange={this.handleChange}
            autoComplete="new-password"
          />
          <FormInputComponent
            type="password"
            name="password"
            value={this.state.password}
            required
            label="Password"
            handleChange={this.handleChange}
            autoComplete="new-password"
          />
          <div className="buttons">
            <CustomButtonComponent type="submit">Sign In</CustomButtonComponent>
            <CustomButtonComponent onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButtonComponent>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInComponent;
