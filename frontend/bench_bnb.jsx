import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApi from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  window.SessionApi = SessionApi;
  ReactDOM.render(<h1>BenchBnB</h1>, root);
});

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
