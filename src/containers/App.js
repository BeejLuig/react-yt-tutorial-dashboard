import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// custom node modules
import Home from '../views/Home';
import Login from '../views/Login';
import Signup from '../views/Signup';
import Navbar from '../views/Navbar';
import NotFound from '../views/NotFound'
import { signup } from '../redux/modules/Auth/actions';

class App extends Component {

  handleSignin(values) {
    this.props.store.dispatch(
      signup(values)
    );
  }

  render() {
    return (
      <Router>
        <div className="App">
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup">
              <Signup onSubmit={this.handleSignin.bind(this)} />
            </Route>
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
