// @flow
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

type Props = {
  component: any,
  path: string,
  exactly?: boolean,
  isAuthenticated: boolean,
  isAuthenticating: boolean,
}

const RedirectAuthenticated = ({
  path,
  exactly,
  isAuthenticated,
  isAuthenticating,
  component: Component,
}: Props) =>
  <Route
    exactly={exactly}
    path={path}
    render={(props) => {
      if (isAuthenticated) { return <Redirect to={{ pathname: '/' }} />; }
      if (!isAuthenticated) { return <Component {...props} />; }
      return null;
    }}
  />;

export default RedirectAuthenticated;
