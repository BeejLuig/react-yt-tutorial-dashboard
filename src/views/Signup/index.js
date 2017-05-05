import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

//import local modules
import { signup } from '../../redux/modules/Auth/actions';
import SignupForm from './SignupForm';


class Signup extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  handleSignup = data => this.props.signup({ user: data }, this.context.router);

  render() {

    return (
      <section className="section signup">
        <div className="container">
          <div>
            <h1 className="title">Sign Up</h1>
          </div>
          <br />
          <SignupForm onSubmit={this.handleSignup} />
          <br />
          <p><b>Already have an account?</b></p>
          <NavLink to="/login">Log in</NavLink>
        </div>
      </section>
    )
  }
}

export default connect(null, { signup })(Signup);
