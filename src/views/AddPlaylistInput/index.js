import React from 'react';
import './addPlaylistInput.css'

const AddPlaylistInput = (props) =>
  <form id="addUrl" onSubmit={props.onSubmit}>
    <div className="field has-addons">
      <p className="control is-expanded">
        <input className="input" id="url_input" type="text" value={props.value} onChange={props.onChange} placeholder="Add playlist URL" />
      </p>
      <p className="control">
        <button className="button">Add</button>
      </p>
    </div>
  </form>

  export default AddPlaylistInput;
