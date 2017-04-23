import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// local imports
import Home from '../views/Home';
import Login from '../views/Login';
import Signup from '../views/Signup';
import Navbar from '../views/Navbar';
import NotFound from '../views/NotFound'

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
