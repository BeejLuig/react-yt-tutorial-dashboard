import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserPlaylist, getUserPlaylists, deleteUserPlaylists } from '../../redux/modules/Playlists/actions';
import { getPlaylists } from '../../services/YoutubeService'
import AddPlaylistInput from '../../views/AddPlaylistInput';
import Card from '../../views/Card/';
import PlaylistModal from '../../views/PlaylistModal/';
import EditModal from '../../views/CardModals/EditModal';
import './dashboard.css';

type Props = {
  currentUser: object,
}

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playlistModalIsOpen: false,
      editModalIsOpen: false,
      value: "",
      selectedPlaylist: {},
      errors: []
    }
  }

  props: Props

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      errors: [],
      value: ""
    });

    const value = document.getElementById("url_input").value;
    const id = this.parseIdFromUrl(value)

    getPlaylists(id).then(resp => {
      const playlist = resp.items[0];
      const { id } = playlist
      const { title, description, channelTitle } = playlist.snippet
      const { standard, high, medium } = playlist.snippet.thumbnails
      const thumbnail = standard || high || medium || playlist.thumbnails.default
      const selectedPlaylist = {
        id,
        title,
        description,
        channelTitle,
        thumbnailUrl: thumbnail.url
      }

      this.setState({
        playlistModalIsOpen: true,
        selectedPlaylist
      });

    }).catch(errors => {
      console.log(errors)
      this.setState({
        errors: ["No playlist found with the given id"]
      });
    })
  }

  handleAddUserPlaylist(e) {
    this.setState({
      playlistModalIsOpen: false,
      editModalIsOpen: false
    })
    this.props.addUserPlaylist(e.target.id);
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

  handleDelete() {
    this.props.deleteUserPlaylists(this.state.selectedPlaylist.id)
    this.setState({
      playlistModalIsOpen: false,
      editModalIsOpen: false
    })
  }

  handleCloseModal(e) {
    this.setState({
      playlistModalIsOpen: false,
      editModalIsOpen: false
    })
  }

  handleCardButtonClick(e) {
    const target = e.target.innerText;
    if(target === "Edit") {
      const selectedPlaylist = this.props.playlists.playlists.find(p => p.id === parseInt(e.target.id, 10))
      this.setState({
        editModalIsOpen: true,
        selectedPlaylist
      });
    }
  }

  componentDidMount() {
    this.props.getUserPlaylists();
  }

  render() {
    const { currentUser } = this.props;
    const { playlists, isRequesting } = this.props.playlists
    const { playlistModalIsOpen, editModalIsOpen, value, selectedPlaylist, errors } = this.state;
    const { handleCloseModal, handleAddUserPlaylist, handleCardButtonClick, handleDelete } = this;
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
                value={value}
                onChange={this.handleChange.bind(this)}
              />
              <p className="is-danger">{ errors.length > 0 ? errors.join(". ") + ". Try again!" : null}</p>
            </div>
          </div>
        </div>

        { playlists.length > 0 ? playlists.map(playlist => (
          <Card
            key={playlist.id}
            playlist={playlist}
            onClick={handleCardButtonClick.bind(this)}
          />)) : (
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <div className="notification is-info has-text-centered">
                  { isRequesting ? "Loading..." : "You have no playlists. Add some!" }
                </div>
              </div>
            </div>
          )
        }

        { playlistModalIsOpen ?

          <PlaylistModal
            playlist={selectedPlaylist}
            onClick={handleCloseModal.bind(this)}
            handleAddUserPlaylist={handleAddUserPlaylist.bind(this)}
          />

          :

          null
        }
        { editModalIsOpen ?

          <EditModal
            onClick={handleCloseModal.bind(this)}
            playlist={selectedPlaylist}
            handleDelete={handleDelete.bind(this)}
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
}, { addUserPlaylist, getUserPlaylists, deleteUserPlaylists })(Dashboard);
