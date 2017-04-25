import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlaylists } from '../../services/YoutubeService.js';
import PlaylistPanel from '../PlaylistPanel';
import './dashboard.css';

type Props = {
  currentUser: object,
}

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playlists: [],
      selectedPlaylistTitle: "",
      selectedPlaylistDescription: "",
      modal: "modal"
    }
  }

  props: Props

  handleSubmit(e) {
    e.preventDefault();
    const value = document.getElementById("url_input").value;
    getPlaylists(value).then(e => {
      this.setState({
        playlists: e.items.map(item => item)
      });
    })
  }

  handleClick(e) {
    if (e.target.id === "modal-close") {
      this.setState({
        modal: "modal"
      })
    } else {
      const playlist = this.state.playlists.find(p => p.id === e.target.id).snippet;
      console.log(playlist)
      this.setState({
        selectedPlaylistTitle: playlist.title,
        selectedPlaylistDescription: playlist.description,
        modal: "modal is-active",
      });
    }
  }

  render() {
    const { currentUser } = this.props;
    console.log(this.state);
    return (
      <section className="section dashboard">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <p className="title is-large">Welcome, <b>{currentUser.username}</b>!</p>
              <PlaylistPanel
                onSubmit={this.handleSubmit.bind(this)}
                onClick={this.handleClick.bind(this)}
                playlists={this.state.playlists}
              />
            </div>
          </div>
        </div>

        <div className={this.state.modal}>
          <div className="modal-background"></div>
            <div id="modal-content" className="modal-content">
              <p><b>{this.state.selectedPlaylistTitle}</b></p>
              <p>{(!!this.state.selectedPlaylistDescription) ? this.state.selectedPlaylistDescription : "No description provided"}</p>
            </div>
          <button id="modal-close" className="modal-close" onClick={this.handleClick.bind(this)}></button>
        </div>
      </section>
    )
  }
}

export default connect(state => {
  return {
    currentUser: state.auth.currentUser
  }
})(Dashboard);
