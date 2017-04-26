import React from 'react';
import './card.css';

export default function Card(props) {

  const findCard = (element) => {
    return element.className === "card" ? element : findCard(element.parentNode)
  }

  const toggleHide = (e) => {
    const card = findCard(e.target);
    if(card.dataset.toggle === "closed") {
      card.dataset.toggle = "open";
      console.log(card.children[1])
      card.children[1].style.padding = "1.25rem";
      card.children[1].style.maxHeight = card.children[1].scrollHeight + "px";
      card.childNodes[0].childNodes[1].style.transform = "rotate(180deg)";
    } else {
      card.dataset.toggle = "closed"
      card.children[1].style.padding = null;
      card.children[1].style.maxHeight = null;
      card.childNodes[0].childNodes[1].style.transform = "";
    }
  }

  return (
    <div className="columns">
      <div className="column is-half is-offset-one-quarter">
        <div className="card" data-toggle="closed">

          <a className="card-header" onClick={toggleHide}>
            <p className="card-header-title">
              Video
            </p>
            <span className="card-header-icon">
              <span className="icon">
                <i className="fa fa-chevron-up"></i>
              </span>
            </span>
          </a>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
              <figure className="image is-48x48">
                <img src="http://bulma.io/images/placeholders/96x96.png" alt="pic" />
              </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">@johnsmith</p>
              </div>
            </div>
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
      </div>
    </div>
  )
}
