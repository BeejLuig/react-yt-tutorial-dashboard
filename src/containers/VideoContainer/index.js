import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './VideoContainer.css'
import Video from '../../views/Video/';
import PlaylistPanel from '../../views/PlaylistPanel/';
import { getPlaylistVideos, switchActiveVideos, completeVideo } from '../../redux/modules/Videos/actions';
import { getUserPlaylists } from '../../redux/modules/Playlists/actions';

// custom node modules

class VideoContainer extends Component {

  static contextTypes = {
    router: PropTypes.object,
  }

  componentDidMount() {
    const pathname = this.props.location.pathname.split("/");
    const id = pathname[pathname.length - 1];
    this.props.getPlaylistVideos(id);
    this.props.getUserPlaylists();
  }

  getId(target){
    if(target.dataset.id) {
      return parseInt(target.dataset.id, 10)
    } else {
      return this.getId(target.parentNode)
    }
  }

  handleClick(e){
    const newId = this.getId(e.target);
    this.props.switchActiveVideos(newId)
  }

  handleComplete() {
    const id = this.props.activeVideo.id;
    this.props.completeVideo(id);
  }

  render() {

    const { playlists, activeVideo, playlistIsRequesting, videoIsRequesting } = this.props;
    const playlist = playlists.find(playlist => playlist.id === activeVideo.playlist_id)

    return (
      <section className="section">
        <div className="columns">
          <div className="column">

        { playlistIsRequesting || videoIsRequesting ? null : <Video video={activeVideo} playlist={playlist} /> }

          </div>
          <div className="column is-one-third">
          { playlistIsRequesting || videoIsRequesting ? null
            :
            <PlaylistPanel
              onClick={this.handleClick.bind(this)}
              handleComplete={this.handleComplete.bind(this)}
            />
          }
          </div>
        </div>
      </section>
    )
  }
}

export default connect(
  state => ({
    playlists: state.playlists.playlists,
    activeVideo: state.videos.activeVideo,
    videos: state.videos.videos,
    playlistIsRequesting: state.playlists.isRequesting,
    videoIsRequesting: state.playlists.isRequesting
  }), { getPlaylistVideos, getUserPlaylists, switchActiveVideos, completeVideo }
)(VideoContainer);
