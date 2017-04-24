import { createUser, loginUser } from '../services/userService';
import { storeToken } from '../services/authService';

export const userSignupSuccess = (profile) => {
  return {
    type: 'USER_SIGNUP_SUCCESS',
    isAuthenticated: true,
    profile,
  }
}

export const updateErrors = (errors) => {
  return {
    type: 'UPDATE_ERRORS',
    errors
  }
};

export const signUp = (user) => {
  return dispatch => {
    return createUser(user)
      .then((data) => {
        if (data.errors) {
          const errors = data.errors.map(error => error.message);
          return dispatch(updateErrors(errors));
        }
        storeToken(data.token);
        dispatch(userSignupSuccess(data.user));
      })
      .catch(err => err);
  }
};

export const login = (username, password) => {
  return dispatch => {
    return loginUser(username, password)
      .then((data) => {
        if (data.errors){
          const errors = data.errors.map(error => error.message);
          return dispatch(updateErrors(errors));
        }
        storeToken(data.token);
        dispatch(userSignupSuccess(data.user));
      })
      .catch(err => console.log(err));
  }
}
