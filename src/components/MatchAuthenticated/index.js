// @flow
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

type Props = {
  path: string,
  exactly?: any,
  component: any,
  isAuthenticated: boolean,
  isAuthenticating: boolean,
  currentUser: any
}

const MatchAuthenticated = ({
  path,
  exactly,
  isAuthenticated,
  isAuthenticating,
  currentUser,
  component: Component,
}: Props) =>
  <Route
    exactly={exactly}
    path={path}
    render={(props) => {
      if (isAuthenticated) { return <Component {...props} />; }
      if (isAuthenticating) { return null; }
      if (!isAuthenticating && !isAuthenticated) { return <Redirect to={{ pathname: '/login' }} />; }
      return null;
    }}
  />;

export default MatchAuthenticated;
