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
      card.children[1].style.padding = "1.25rem";
      card.children[1].style.maxHeight = card.children[1].scrollHeight + card.children[1].scrollHeight + "px";
      card.childNodes[0].childNodes[1].style.transform = "rotate(180deg)";
    } else {
      card.dataset.toggle = "closed"
      card.children[1].style.padding = null;
      card.children[1].style.maxHeight = null;
      card.childNodes[0].childNodes[1].style.transform = "";
    }
  }

  const { title, thumbnail_url, channel_title, description, total_videos, completed_videos, id } = props.playlist;
  const { onClick } = props;

  return (
    <div className="columns">
      <div className="column is-half is-offset-one-quarter">
        <div className="card" data-toggle="closed">

          <a className="card-header" onClick={toggleHide}>
            <p className="card-header-title">
              {title}
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
              <figure className="image is-96x96">
                <img src={thumbnail_url} alt="pic" />
              </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">From the <br /><b>{channel_title}</b> channel</p>
                <p className="subtitle view-progress">{completed_videos}/{total_videos} Complete</p>
              </div>
            </div>
            <pre>{!!description ? description : "No description available"}</pre>
          </div>
          <footer className="card-footer" id={id}>
            <a onClick={onClick} className="card-footer-item">Watch</a>
            <a className="card-footer-item" onClick={onClick}>Stats</a>
            <a className="card-footer-item" onClick={onClick}>Edit</a>
          </footer>
        </div>
      </div>
    </div>
  )
}
