import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlaylists } from '../../services/YoutubeService.js';
import AddPlaylistInput from '../AddPlaylistInput';
import Card from '../Card/';
import './dashboard.css';

type Props = {
  currentUser: object,
}

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playlists: [],
      newPlaylistTitle: "",
      newPlaylistDescription: "",
      modal: "modal",
      value: ""
    }
  }

  props: Props

  handleSubmit(e) {
    e.preventDefault();

    const value = document.getElementById("url_input").value;

    getPlaylists(this.parseIdFromUrl(value)).then(e => {
      if(e.errors) {
        console.log(e.errors);
        this.setState({
          selectedPlaylistTitle: "Error",
          selectedPlaylistDescription: e.errors.join("\n") + "Please try again!",
          modal: "modal is-active",
          value: ""
        })
      } else {
        const playlist = e.items[0];
        this.setState({
          selectedPlaylistTitle: playlist.snippet.title,
          selectedPlaylistDescription: playlist.snippet.description,
          modal: "modal is-active",
          value: ""
        })
      }
    })
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
                playlists={this.state.playlists}
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
              />
            </div>
          </div>
        </div>

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        <div className={this.state.modal}>
          <div className="modal-background"></div>
            <div id="modal-content" className="modal-content">
              <p><b>{this.state.selectedPlaylistTitle}</b></p>
              <p>{(!!this.state.selectedPlaylistDescription) ? this.state.selectedPlaylistDescription : "No description provided"}</p>
              <p>
                <a className="button is-success modal-button">Add</a>
                <a className="button modal-button" onClick={this.handleCloseModal.bind(this)}>Cancel</a>
              </p>
            </div>
          <button id="modal-close" className="modal-close" onClick={this.handleCloseModal.bind(this)}></button>
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
