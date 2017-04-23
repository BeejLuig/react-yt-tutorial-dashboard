import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <section className="hero is-primary">
    <div className="hero-body">
      <h1 className="title">YouTube Tutorial Dashboard</h1>
      <div className="subtitle">
        <p>Import your favorite playlists</p>
        <p>Track your progress</p>
      </div>
    </div>
    <footer className="hero-footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <Link to="/signup" className="button is-success is-inverted is-medium is-outlined">Try it now</Link>
          </p>
          <br />
        </div>
      </div>
    </footer>
  </section>
)

export default Home;
