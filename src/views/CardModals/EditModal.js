import React from 'react';

const EditModal = (props) => {
  const { playlist, onClick, handleDelete, handleRefresh, handleReset } = props
  const { title } = playlist
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClick}></div>
        <div id="modal-content" className="modal-content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <p className="title">Edit Playlist: <br /><b>{title}</b></p>
              <ul>
                <li>
                  <p><b>Refresh</b> playlist to match edits made by publishing channel</p>
                </li>
                <li>
                  <p><b>Reset</b> all videos in playlist to incomplete status</p>
                </li>
                <li>
                  <p><b>Delete</b> delete playlist from your account (can't be undone!)</p>
                </li>
              </ul>
              <br />
              <div className="field is-grouped">
                <p className="control">
                  <a className="button is-info" onClick={handleRefresh}>
                    Refresh
                  </a>
                </p>
                <p className="control">
                  <a className="button is-primary" onClick={handleReset}>
                    Reset
                  </a>
                </p>
                <p className="control">
                  <a className="button is-danger" onClick={handleDelete}>
                    Delete
                  </a>
                </p>
            </div>
          </div>
        </div>
      <button id="modal-close" className="modal-close" onClick={onClick}></button>
    </div>
  </div>
  )
}

export default EditModal
