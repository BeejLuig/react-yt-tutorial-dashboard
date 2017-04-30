import React from 'react';

const StatsModal = (props) => {
  const { playlist, onClick, videos } = props
  const { title } = playlist
  const percentComplete = Math.floor((playlist.completed_videos / playlist.total_videos) * 100)
  const videoItems = videos.length > 0 ? (
    videos.map((video, index) => {

      let status = "";

      if (video["complete?"]) { status = "complete" }

      return (
        <li className="has-text-left" key={index} data-id={video.id} onClick={onClick}>
          <span className="panel-icon">
            <i className={`fa fa-circle ${status}`} aria-hidden="true"></i>
          </span>
          <span className="panel-text">{video.title}</span>
        </li>
      )
    })
  )
  :

  "Loading..."
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClick}></div>
        <div id="modal-content" className="modal-content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <p className="title"><b>{title}</b></p>
              <p className="subtitle">{percentComplete}% complete <br />{playlist.completed_videos} / {playlist.total_videos} videos</p>
              <p><b>Playlist Id (YouTube):</b> {playlist.playlist_id}</p>
              <p><b>Channel:</b> {playlist.channel_title}</p>
              <br />
              <p><b>Videos:</b></p>
              <ul>
                { videoItems }
              </ul>
              <br />
              <div className="field is-grouped">
                <p className="control">
                  <a className="button" onClick={onClick}>
                    Close
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

export default StatsModal
