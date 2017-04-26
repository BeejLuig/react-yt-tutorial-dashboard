import React from 'react';
import './card.css';

export default function Card(props) {
  const { onClick } = props;
  return (
    <div className="card" data-toggle="closed">

      <a className="card-header" onClick={onClick}>
        <p className="card-header-title">
          Component
        </p>
        <span className="card-header-icon">
          <span className="icon">
            <i className="fa fa-chevron-up"></i>
          </span>
        </span>
      </a>
      <div className="card-content hidden">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="http://bulma.io/images/placeholders/96x96.png" alt="size" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">John Smith</p>
            <p className="subtitle is-6">@johnsmith</p>
          </div>
        </div>
      </div>
      <div className="card-content hidden">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p>
        <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
        <br />
        <small>11:09 PM - 1 Jan 2016</small>
      </div>
      <footer className="card-footer">
        <a className="card-footer-item">Watch</a>
        <a className="card-footer-item">Stats</a>
        <a className="card-footer-item">Edit</a>
      </footer>
    </div>
  )
}
