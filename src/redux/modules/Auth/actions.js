import 'isomorphic-fetch';
import { reset, SubmissionError } from 'redux-form'
import { browserHistory } from 'react-router';

// Action Creators
export const authenticationRequest = () => {
  return {
    type: 'AUTHENTICATION_REQUEST'
  }
}

export const setCurrentUser = (user) => {
  return {
    type: 'AUTHENTICATION_SUCCES',
    user
  }
}

// Async actions
export const signup = (userDetails) => {
  return dispatch => {
    dispatch(authenticationRequest());
    return fetch('https://intense-plains-72706.herokuapp.com/api/v1/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: userDetails })
    })
    .then(response => response.json())
    .then(body => {
      const slug = body.user.username.split(" ").join("_");
      localStorage.setItem('dash.token', body.token);
      console.log(body.user)
      dispatch(setCurrentUser(body.user));
      dispatch(reset('signup'));
      browserHistory.push(`/users/${slug}/dashboard`)
    })
    .catch(err => {
      console.log("Error!")
      throw new SubmissionError(err)
    });
  }
}
