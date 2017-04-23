import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="nav has-shadow">

          <div className="nav-left is-active">
          <a className="nav-item">
            Home
          </a>
          </div>

          <div className="nav-right nav-menu is-active">
            <a className="nav-item">
              Sign up
            </a>
            <a className="nav-item">
              Log in
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
