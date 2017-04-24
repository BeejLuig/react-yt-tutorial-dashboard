import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// import FormInput from '../../components/FormInput';

class SignupForm extends Component {

  handleSubmit = data => this.props.onSubmit(data);

  render() {

    const { pristine, submitting, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <div className="field">
          <label className="label" htmlFor="username">Username</label>
          <p className="control">
            <Field name="username" className="input" component="input" type="text" placeholder="Username"/>
          </p>
        </div>
        <div className="field">
          <label className="label" htmlFor="password">Password</label>
          <p className="control">
            <Field name="password" className="input" component="input" type="password" placeholder="Password" />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button type="submit" className="button is-success" disabled={pristine || submitting}>{ submitting ? 'Loading...' : 'Sign up'}</button>
          </p>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Username is required';
  } else if (values.username.length < 2) {
    errors.email = 'Username must be a minimum of 2 characters';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be a minimum of 8 characters';
  }

  return errors;
}

export default reduxForm({
  form: 'signup',
  validate
})(SignupForm);
