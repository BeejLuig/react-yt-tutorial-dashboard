import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPlaylist } from '../../redux/modules/Playlists/actions';
import AddPlaylistInput from '../AddPlaylistInput';
import Card from '../Card/';
import PlaylistModal from '../PlaylistModal/';
import './dashboard.css';

type Props = {
  currentUser: object,
}

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playlist: {},
      playlistVideos: [],
      modal: "modal",
      modalIsOpen: false,
      value: ""
    }
  }

  props: Props

  handleSubmit(e) {
    e.preventDefault();
    const value = document.getElementById("url_input").value;
    const id = this.parseIdFromUrl(value)

    this.props.createPlaylist(id);
  }

  parseIdFromUrl(input) {
    const str = input.match(/(?:list=).*(?=&)|(?=list=).*/);
    if(str) {
      return str[0].split("=")[1]
    } else {
      return input
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleCloseModal(e) {
    this.setState({
      modal: "modal"
    })
  }

  render() {
    const { currentUser } = this.props;
    const { playlist, playlistVideos, modal, modalIsOpen, errors, value } = this.state;
    const { handleCloseModal } = this;

    return (
      <section className="section dashboard">

        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <p className="title is-large">Welcome, <b>{currentUser.username}</b>!</p>
            </div>
          </div>
        </div>

        <div className="container is-fluid" id="playlist_title_container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter has-text-centered">
              <p className="title is-medium notification is-primary">My Playlists</p>
              <AddPlaylistInput
                onSubmit={this.handleSubmit.bind(this)}
                playlist={playlist}
                value={value}
                onChange={this.handleChange.bind(this)}
              />
              <p className="is-danger">{ !!errors ? errors.join(". ") + ". Try again!" : null}</p>
            </div>
          </div>
        </div>

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        { modalIsOpen ?

          <PlaylistModal
            playlist={playlist}
            videos={playlistVideos}
            modal={modal}
            onClick={handleCloseModal.bind(this)}
          />

          :

          null
        }
      </section>
    )
  }
}

export default connect(state => {
  return {
    currentUser: state.auth.currentUser,
    playlists: state.playlists
  }
}, { createPlaylist })(Dashboard);
