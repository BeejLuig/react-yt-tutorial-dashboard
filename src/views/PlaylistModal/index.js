import React from 'react';
import './PlaylistModal.css'

const PlaylistModal = (props) => {
  const { playlist, videos, modal, onClick } = props
  return (
    <div className={modal}>
      <div className="modal-background" onClick={onClick}></div>
        <div id="modal-content" className="modal-content">
          <div className="columns">
            <div className="column is-half">
              <figure className="image has-text-centered">
                <img className="is-4by3 modal-image" src={playlist.thumbnails.standard.url} alt={playlist.title}/>
              </figure>
              <br />
              <p>
                <a className="button is-success modal-button">Add to My Playlists</a>
                <a className="button modal-button" onClick={onClick}>Cancel</a>
              </p>
            </div>
            <div className="column">
              <p className="title is-spaced">{playlist.title}</p>
              <p className="subtitle">a playlist from the <b>{playlist.channelTitle}</b> channel</p>
              <p>{(!!playlist.description) ? playlist.description : "No description provided"}</p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-half is-offset-one-quarter has-text-centered">
              <p className="is-medium"><b>{videos.length} Videos</b></p>
              <a onClick={
                e => {
                  const videoList = document.getElementById("video-list");
                  if(videoList.className === "has-text-left hidden"){
                    videoList.className = "has-text-left";
                  } else {
                    videoList.className += " hidden"
                  }
                }
              }><p><small>See video list</small></p></a>
              <ol id="video-list" className="has-text-left hidden">
                { videos.map((video, index) => <li key={index}><p>{video.snippet.title}</p><br /></li>) }
              </ol>
            </div>
          </div>
        </div>
      <button id="modal-close" className="modal-close" onClick={onClick}></button>
    </div>
  )
}

export default PlaylistModal
