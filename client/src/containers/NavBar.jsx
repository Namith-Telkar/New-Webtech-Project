import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../store/actions';

const Navbar = ({ auth, logout }) => (
  <nav className="navbar">
    <div className="container">
      <ul className="navbar-container">
        {!auth.isAuthenticated && (
          <Fragment>
            <li>
              <Link className="navbar-item-lr" to="/register">
                Register
              </Link>
            </li>
            <li>
              <Link className="navbar-brand" to="/">
                Polls Page
              </Link>
            </li>
            <li>
              <Link className="navbar-item-lr" to="/login">
                Login
              </Link>
            </li>
          </Fragment>
        )}
        {auth.isAuthenticated && (
          <Fragment>
            <li>
              <Link className="navbar-item" to="/poll/new" onSelect>
                New Poll
              </Link>
            </li>
            <li>
              <Link className="navbar-brand" to="/">
                Polls Page
              </Link>
            </li>
            <li>
              <a className="navbar-item" onClick={logout} onSelect>
                Logout
              </a>
            </li>
          </Fragment>
        )}
      </ul>
      {auth.isAuthenticated && (
        <p className="navbar-user">Logged in as {auth.user.username}</p>
      )}
    </div>
  </nav>
);

export default connect(
  store => ({
    auth: store.auth,
  }),
  { logout },
)(Navbar);
