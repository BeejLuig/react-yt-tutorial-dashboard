import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './VideoContainer.css'
import YouTube from 'react-youtube';

// custom node modules

type Props = {

}

class VideoContainer extends Component {

  props: Props

  componentDidMount() {
  }

  render() {

    const options = {
      width: "100%",
      maxWidth: "640",
      maxHeight: "360"
    }

    return (
      <section className="section">
        <div className="columns">
          <div className="column">
            <div className="container is-fluid">
              <header className="header" id="video-header">
                <h1 className="title is-spaced">Install Ruby on Rails on Windows 7, 8 or 10 in 3 Minutes</h1>
                <h2 className="subtitle">
                  Tutorials: video 1
                  <span className="pull-right">Codecademy</span>
                </h2>
              </header>
              <div className="has-text-centered">
                <section id="video-container" className="content has-text-centered">
                  <YouTube
                    videoId="OHgXELONyTQ"
                    opts={options}
                    className="is-clearfix is-centered-vertically"
                  />
                </section>
              </div>
              <footer id="video-footer">
                <div className="section">
                  <p className="header"><b>Description</b></p>
                  <p className="content">
                    We'll walk you through how to set up Ruby on Rails on your Windows machine in less than 5 minutes. We'll be using http://railsinstaller.org/en to make the installation easier.
                  </p>
                </div>
                <hr />
              </footer>
            </div>
          </div>
          <div className="column is-one-third">
            <aside id="video-list">
              <div className="panel">
                <p className="panel-heading">
                  Videos
                </p>
                <div className="panel-block">
                  <p className="control">
                    <a className="button is-primary is-outlined is-fullwidth">Done with this video</a>
                  </p>
                </div>
                <a className="panel-block">
                  <span className="panel-icon">
                    <i className="fa fa-circle done" aria-hidden="true"></i>
                  </span>
                  <span className="panel-text">Video1</span>
                </a>

                <a className="panel-block">
                  <span className="panel-icon">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                  </span>
                  <span className="panel-text">Video1</span>
                </a>

                <a className="panel-block">
                  <span className="panel-icon">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                  </span>
                  <span className="panel-text">Video1</span>
                </a>

                <a className="panel-block">
                  <span className="panel-icon">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                  </span>
                  <span className="panel-text">Video1</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    )
  }
}

export default connect(
  state => ({}), { }
)(VideoContainer);
