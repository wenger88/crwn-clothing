import React, { Component } from 'react';

import './sign-up.styles.scss';
import FormInputComponent from '../form-input/form-input.component';
import CustomButtonComponent from '../custom-button/custom-button.component';
import { auth } from '../../firebase/firebase.utils';
import { createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUpComponent extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  handleSubmit = async event => {
    event.preventDefault();
    console.log('submitted');
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('Passwords dont match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      console.log(user);
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (e) {
      console.error(e);
    }
  };

  handleChange = event => {
    console.log('submitted');
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInputComponent
            type="text"
            name="displayName"
            value={displayName}
            label="Display Name"
            handleChange={this.handleChange}
            required
          />
          <FormInputComponent
            type="email"
            name="email"
            value={email}
            label="Email"
            handleChange={this.handleChange}
            required
          />
          <FormInputComponent
            type="password"
            name="password"
            value={password}
            label="Password"
            handleChange={this.handleChange}
            required
          />
          <FormInputComponent
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            handleChange={this.handleChange}
            required
          />
          <CustomButtonComponent type="submit">SIGN UP</CustomButtonComponent>
        </form>
      </div>
    );
  }
}

export default SignUpComponent;
