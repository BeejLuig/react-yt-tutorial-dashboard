import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

type Props = {
  isAuthenticated: boolean,
  logout: () => void,
}

class Navbar extends Component {

  static contextTypes = {
    router: PropTypes.object,
  }

  props: Props

  handleLogout = () => this.props.logout(this.context.router);

  render() {

    const { isAuthenticated } = this.props;
    return (
      <nav className="nav has-shadow has-text-centered">
        <div className="container">
          <div className="nav-left">
            <NavLink to="/" className="nav-item">YTTD</NavLink>
          </div>

          <span className="nav-toggle"
            onClick={(e)=>{
                e.target.classList.toggle('is-active');
                document.getElementById("menu").classList.toggle('is-active');
              }
            }>
            <span></span>
            <span></span>
            <span></span>
          </span>

          { isAuthenticated ?
            <div id="menu" className="nav-right nav-menu">
                <NavLink
                  to="/dashboard"
                  className="nav-item"
                >Dashboard</NavLink>
                <NavLink
                  to="/"
                  className="nav-item"
                  onClick={this.handleLogout}
                >Logout</NavLink>
            </div>

            :

            <div id="menu" className="nav-right nav-menu">
                <NavLink
                  to="/signup"
                  className="nav-item"
                >Sign up</NavLink>
                <NavLink
                  to="/login"
                  className="nav-item"
                >Log in</NavLink>
            </div>
          }
        </div>
      </nav>
    )
  }
}

export default Navbar;
