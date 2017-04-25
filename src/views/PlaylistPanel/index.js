import React from 'react';
import './playlistPanel.css'

const PlaylistPanel = (props) =>
  <nav className="panel">
    <p className="panel-heading">
      Tutorial Playlists
    </p>
    <div className="panel-block">
      <form id="addUrl" onSubmit={props.onSubmit}>
        <div className="field has-addons">
          <p className="control is-expanded">
            <input className="input" id="url_input" type="text" placeholder="Add playlist URL" />
          </p>
          <p className="control">
            <button className="button">Add</button>
          </p>
        </div>
      </form>
    </div>

    { props.playlists[0] === undefined ?
    <div>
      <a className="panel-block is-active">You don't have any playlists yet...</a>
      <a className="panel-block">Enter a YouTube playlist URL above...</a>
      <a className="panel-block">To get started!</a>
    </div> : props.playlists.map((playlist, i) => <a key={i} id={playlist.id} onClick={props.onClick} className="panel-block is-active">{playlist.snippet.title}</a>)
    }
  </nav>

  export default PlaylistPanel;
