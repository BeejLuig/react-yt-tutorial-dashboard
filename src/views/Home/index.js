import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './home.css';

type Props = {
  isAuthenticated: boolean,
}

class Home extends Component {

  props: Props

  render() {

    const { isAuthenticated } = this.props;
    return (
      <section id="hero" className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column">
                <p className="title">YouTube Tutorial Dashboard</p>
                <div className="subtitle">
                  <p>Import your favorite playlists</p>
                  <p>Track your progress</p>
                </div>
                <p>
                  <Link to={isAuthenticated ? "/dashboard" : "/signup"} id="call-to-action" className="button is-success is-inverted is-medium is-outlined">Get Started</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default connect(
  state => ({
    isAuthenticating: state.auth.isAuthenticating,
    isAuthenticated: state.auth.isAuthenticated,
  })
)(Home);
