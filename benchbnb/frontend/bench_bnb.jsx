import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
  defineUtils();
});

const defineUtils = () => {
  window.login = APIUtil.login;
  window.logout = APIUtil.logout;
  window.createUser = APIUtil.createUser;
  window.testUser = APIUtil.testUser;
};
