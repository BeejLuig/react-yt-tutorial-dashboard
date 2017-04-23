import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav has-shadow has-text-centered">
    <div className="container">
      <div className="nav-left">
        <Link to="/" className="nav-item">YTTD</Link>
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

      <div id="menu" className="nav-right nav-menu">
        <Link to="/signup" className="nav-item">Sign up</Link>
        <Link to="/login" className="nav-item" >Log in</Link>
      </div>
    </div>
  </nav>
);

export default Navbar
