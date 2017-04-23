import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

const Navbar = () => (
  <nav className="nav has-shadow has-text-centered">

    <div className="nav-left">
      <Link to="/" className="nav-item">YT Tutorial Dashboard</Link>
    </div>

    <div className="nav-right nav-menu is-active">
      <Link to="/signup" className="nav-item">Sign up</Link>
      <Link to="/login" className="nav-item" >Log in</Link>
    </div>
  </nav>
);

const Signup = () => <div>Signup</div>
const Home = () => <div>Home</div>
const Login = () => <div>Login</div>
const NotFound = () => <div>Not Found</div>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
