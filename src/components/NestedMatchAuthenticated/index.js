// @flow
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

type Props = {
  path: string,
  exactly?: any,
  component: any,
  isAuthenticated: boolean,
  isAuthenticating: boolean,
  currentUser: any,
  children: any
}

const NestedMatchAuthenticated = ({
  path,
  isAuthenticated,
  isAuthenticating,
  currentUser,
  component: Component,
  children
}: Props) => (
  <Route
    path={path}
    render={(props) => {
      if (isAuthenticated && props.location.pathname === "/watch" ) { return <Redirect to={{ pathname: '/dashboard'}} />; }
      if (isAuthenticated) { return <Component {...props} >{children}</Component>; }
      if (isAuthenticating) { return null; }
      if (!isAuthenticating && !isAuthenticated) { return <Redirect to={{ pathname: '/login' }} />; }
      return null;
    }}
  >{children}</Route>
)

export default NestedMatchAuthenticated;
