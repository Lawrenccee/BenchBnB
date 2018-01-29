import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ path, component: Component, exact, loggedIn }) => (
  <Route 
    path={path} 
    exact={exact} 
    component={(props) => (
      loggedIn ? (
        <Redirect to="/" />
      ) : (
        <Component {...props } />
      )
    )}
  />
);

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));