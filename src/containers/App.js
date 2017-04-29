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
import Dashboard from './Dashboard/';
import VideoContainer from './VideoContainer'
import MatchAuthenticated from '../components/MatchAuthenticated/';
import RedirectUnauthenticated from '../components/RedirectUnauthenticated/';
import Errors from '../components/Errors';
import { authenticate, authenticationFailure, logout } from '../redux/modules/Auth/actions';


type Props = {
  isAuthenticating: boolean,
  isAuthenticated: boolean,
  logout: () => void,
  authenticate: () => void,
  authenticationFailure: () => void,
  errors: [],
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
    const { isAuthenticated, isAuthenticating, currentUser, logout, errors } = this.props;
    const authProps = { isAuthenticated, isAuthenticating, currentUser };

    return (
      <Router>
        <div className="App">
        <Navbar isAuthenticated={isAuthenticated}  logout={logout} />
      { !!errors ? <Errors errors={errors} /> : null }
          <Switch>
            <Route exact path="/" component={Home} />
            <MatchAuthenticated path="/dashboard" exact component={Dashboard} {...authProps} />
            <MatchAuthenticated path="/playlists" exact component={Dashboard} {...authProps} />
            <MatchAuthenticated path="/watch" exact component={VideoContainer} {...authProps} />
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
    currentUser: state.auth.currentUser,
    errors: state.auth.errors
  }), { logout, authenticate, authenticationFailure }
)(App);
