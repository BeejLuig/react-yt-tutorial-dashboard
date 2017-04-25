import React from 'react';
import './errors.css';

const Errors = (props) => (
  <div id="errors" className="level">
    <div className="level-item has-text-centered is-warning">
      <div>
        <p className="title">Error</p>
        { props.errors ? props.errors.map(error => <p className="header">{error}</p>) : null}
      </div>
    </div>
  </div>
)

export default Errors;
