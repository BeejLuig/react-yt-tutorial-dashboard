import React from 'react';
import './PlaylistModal.css'

const PlaylistModal = (props) => {
  const { playlist, onClick, handleAddUserPlaylist } = props
  const { title, description, thumbnailUrl, channelTitle, id } = playlist
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClick}></div>
        <div id="modal-content" className="modal-content">
          <div className="columns">
            <div className="column is-half">
              <figure className="image has-text-centered">
                <img className="is-4by3 modal-image" src={thumbnailUrl} alt={title}/>
              </figure>
              <br />
              <p>
                <a className="button is-success modal-button" onClick={handleAddUserPlaylist} id={id}> Add to My Playlists</a>
                <a className="button modal-button" onClick={onClick}>Cancel</a>
              </p>
            </div>
            <div className="column">
              <p className="title is-spaced">{title}</p>
              <p className="subtitle">a playlist from the <b>{channelTitle}</b> channel</p>
              <p>{(!!description) ? description : "No description provided"}</p>
            </div>
          </div>
        </div>
      <button id="modal-close" className="modal-close" onClick={onClick}></button>
    </div>
  )
}

export default PlaylistModal
