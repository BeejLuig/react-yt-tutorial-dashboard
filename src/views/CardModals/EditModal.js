import React from 'react';

const EditModal = (props) => {
  const { playlist, onClick, handleDelete } = props
  const { title } = playlist
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClick}></div>
        <div id="modal-content" className="modal-content">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <p className="title">Edit Playlist: <b>{title}</b></p>
              <p>Refresh playlist to match edits made by publishing channel or delete playlist from your account (can't be undone!)</p>
              <br />
              <div className="field is-grouped">
                <p className="control">
                  <a className="button is-info">
                    Refresh
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
