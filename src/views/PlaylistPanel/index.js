import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PlaylistPanel.css';

class PlaylistPanel extends Component {

  render() {

    const { videos, onClick, handleComplete, videoIsRequesting } = this.props;

    const panelBlocks = videos ? (
      videos.map((video, index) => {

        let status = "";

        if (video["complete?"]) { status = "complete" }
        if (video.is_active) { status = "is-active" }

        return (
          <a className="panel-block has-text-left" key={index} data-id={video.id} onClick={onClick}>
            <span className="panel-icon">
              <i className={`fa fa-circle ${status}`} aria-hidden="true"></i>
            </span>
            <span className="panel-text">{video.title}</span>
          </a>
        )
      })
    )
    :

    "Loading..."

    return (
      <aside id="video-list">
        <div className="panel">
          <p className="panel-heading">
            Videos
          </p>
          <div className="panel-block">
            <p className="control">
              <a className="button is-primary is-outlined is-fullwidth" onClick={handleComplete}>Done with this video</a>
            </p>
          </div>
          <div id="video-blocks">
            { panelBlocks }
          </div>
        </div>
      </aside>
    )
  }
}

export default connect(
  state => ({
    videos: state.videos.videos,
    activeVideo: state.videos.activeVideo
  })
)(PlaylistPanel)
