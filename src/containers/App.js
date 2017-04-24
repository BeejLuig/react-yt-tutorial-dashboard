import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';

// custom node modules
import Home from '../views/Home';
import Login from '../views/Login';
import Signup from '../views/Signup';
import Navbar from '../views/Navbar';
import NotFound from '../views/NotFound';
import Dashboard from '../views/Dashboard/';
import MatchAuthenticated from '../components/MatchAuthenticated/';
import RedirectUnauthenticated from '../components/RedirectUnauthenticated/';
import { authenticate, authenticationFailure, logout } from '../redux/modules/Auth/actions';

type Props = {
  isAuthenticating: boolean,
  isAuthenticated: boolean,
  logout: () => void,
  authenticate: () => void,
  authenticationFailure: () => void
}

class App extends Component {

  props: Props

  componentDidMount() {
    const token: string = localStorage.getItem('token');
    if (token) {
      console.log('Fetching a new token!');
      this.props.authenticate();
    } else {
      this.props.authenticationFailure();
    }
  }

  render() {

    const { isAuthenticated, isAuthenticating, currentUser, logout } = this.props;
    const authProps = { isAuthenticated, isAuthenticating, currentUser };

    return (
      <Router>
        <div className="App">
        <Navbar isAuthenticated={isAuthenticated}  logout={logout} />
          <Switch>
            <Route exact path="/" component={Home} />
            <MatchAuthenticated path="/dashboard" exact component={Dashboard} {...authProps} />
            <RedirectUnauthenticated exact path="/login" component={Login} {...authProps} />
            <RedirectUnauthenticated exact path="/signup" component={Signup} {...authProps} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({
    isAuthenticating: state.auth.isAuthenticating,
    isAuthenticated: state.auth.isAuthenticated,
    currentUser: state.auth.currentUser
  }), { logout, authenticate, authenticationFailure }
)(App);
