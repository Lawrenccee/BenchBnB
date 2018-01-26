import * as SessionApi from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (err) => ({
  type: RECEIVE_ERRORS,
  err
});

export const login = (user) => dispatch => (
  SessionApi.login(user)
    .then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (err) => dispatch(receiveErrors([err]))
    )
);

export const logout = () => dispatch => (
  SessionApi.logout()
    .then(
      () => dispatch(receiveCurrentUser(null)),
      (err) => dispatch(receiveErrors([err]))
    )
);

export const signup = (user) => dispatch => (
  SessionApi.signup(user)
    .then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (err) => dispatch(receiveErrors([err]))
    )
);
