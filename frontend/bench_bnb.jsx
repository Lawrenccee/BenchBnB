import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApi from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import { login } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // Testing Start
  window.SessionApi = SessionApi;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  // Testing End

  ReactDOM.render(<Root store={store} />, root);
});

// Ajax tests
// $.ajax({
//   method: 'POST',
//   url: '/api/users',
//   data: {user: {
//     username: 'test',
//     password: 'password'
//   }},
//   dataType: 'json'
// }).then((user) => console.log(user));

// $.ajax({
//   method: 'GET',
//   url: '/api/users/4',
//   dataType: 'json'
// }).then((user) => console.log(user));

// LOGIN
// window.dispatch(login({
//   username: 'test',
//   password: 'password'
// }));

// $.ajax({
//   method: 'POST',
//   url: '/api/benches',
//   dataType: 'json',
//   data: { bench: { description: "new bench", lat: 37.740000, lng: -122.400000 } }
// }).then((user) => console.log(user));
