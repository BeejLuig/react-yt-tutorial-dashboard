import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class Signup extends Component {

  render() {

    const { pristine, submitting, handleSubmit } = this.props;

    return (
      <section className="section">
        <div className="container">
          <div>
            <h1 className="title">Sign Up</h1>
          </div>
          <br />
          <form onSubmit={handleSubmit}>
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
                <button type="submit" className="button is-success" disabled={pristine || submitting}>Sign up</button>
              </p>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default reduxForm({
  form: 'signup'  // a unique identifier for this form
})(Signup)
