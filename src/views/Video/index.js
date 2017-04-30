import React from 'react';
import YouTube from 'react-youtube';

const Video = (props) => {

  const opts = {
    width: "100%",
    maxWidth: "640",
    maxHeight: "360"
  }

  const { title, description, video_id } = props.video;
  const { playlist } = props;

  return (
    <div className="container is-fluid">

      <header className="header" id="video-header">
        <h1 className="title is-spaced">{title}</h1>
        <h2 className="subtitle">
          { playlist ? playlist.title : "Loading..." }
          <span className="pull-right">{ playlist ? playlist.channel_title : "Loading.." }</span>
        </h2>
      </header>

      <div className="has-text-centered">
        <section id="video-container" className="content has-text-centered">
          <YouTube
            videoId={video_id}
            opts={opts}
            className="is-clearfix is-centered-vertically"
          />
        </section>
      </div>

      <footer id="video-footer">
        <div className="section">
          <p className="header"><b>Description</b></p>
          <p className="content">
            { description }
          </p>
        </div>
      </footer>

    </div>
  )
}

export default Video
