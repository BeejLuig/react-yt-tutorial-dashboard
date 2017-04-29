import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

type Props = {
  isAuthenticated: boolean,
  logout: () => void,
}

class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuIsActive: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  static contextTypes = {
    router: PropTypes.object,
  }

  props: Props

  handleLogout() {
    this.setState({
      menuIsActive: this.state.menuIsActive ? false : true
    });
    this.props.logout(this.context.router);
  }

  toggleMenu() {
    this.setState({
      menuIsActive: this.state.menuIsActive ? false : true
    });
  }

  render() {

    const menuClass = this.state.menuIsActive ? " is-active" : ""

    const { isAuthenticated } = this.props;
    return (
      <nav className="nav has-shadow has-text-centered">
        <div className="container">
          <div className="nav-left">
            <NavLink to="/" className="nav-item">YTTD</NavLink>
          </div>

          <span className={"nav-toggle" + menuClass} onClick={this.toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </span>

          { isAuthenticated ?
            <div id="menu" className={"nav-right nav-menu" + menuClass}>
                <NavLink
                  to="/dashboard"
                  className="nav-item"
                  onClick={this.toggleMenu}
                >Dashboard</NavLink>
                <NavLink
                  to="/"
                  className="nav-item"
                  onClick={this.handleLogout}
                >Logout</NavLink>
            </div>

            :

            <div id="menu" className={"nav-right nav-menu" + menuClass}>
                <NavLink
                  to="/signup"
                  className="nav-item"
                  onClick={this.toggleMenu}
                >Sign up</NavLink>
                <NavLink
                  to="/login"
                  className="nav-item"
                  onClick={this.toggleMenu}
                >Log in</NavLink>
            </div>
          }
        </div>
      </nav>
    )
  }
}

export default Navbar;
