import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Header({ auth }) {
  function renderContent() {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Link to="/credits">Credits</Link>
          </li>,
          <li key="2">
            <Link to="/surveys">Surveys</Link>
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  return (
    <nav>
      <div className="nav-wrapper  blue-grey darken-4">
        <div className="container">
          <Link to="/" className="left brand-logo">
            <i className="large material-icons">email</i>
            Emaily
          </Link>

          <ul className="right">{renderContent()}</ul>
        </div>
      </div>
    </nav>
  );
}

function mapStateToProps({ auth }) {
  return { auth };
}

//shortcut to mapStateToProps(state) and return {auth: state.auth}
export default connect(mapStateToProps)(Header);
