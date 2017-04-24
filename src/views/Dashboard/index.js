import React, { Component } from 'react';
import { connect } from 'react-redux';

type Props = {
  currentUser: object,
}

class Dashboard extends Component {

  props: Props

  render() {
    const { currentUser } = this.props;

    return (
      <section className="section dashboard">
        <div className="container">
          <p className="title">Dashboard</p>
          <p>Logged in as: <b>{currentUser.username}</b></p>
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
