import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/modules/Auth/actions';
import LoginForm from './LoginForm';

type Props = {
  login: () => void,
}

class Login extends Component {

  static contextTypes = {
    router: PropTypes.object,
  }

  props: Props

  handleLogin = data => this.props.login({ user: data}, this.context.router);

  render() {
    return  (
      <section className="section login_form">
        <div className="container">
          <div>
            <h1 className="title">Login</h1>
          </div>
          <br />
          <LoginForm onSubmit={this.handleLogin} />
          <br />
          <p><b>Need an account?</b></p>
          <NavLink to="/signup">Sign up</NavLink>
        </div>
      </section>
    )
  }
}

export default connect(null, { login })(Login);
