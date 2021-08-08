import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Google from "../google.svg";
import "./Header.css";

const Header = ({ auth }) => {
  function renderContent() {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <li style={{ listStyle: "none" }} className="nav-item">
            <a href="/auth/google" className="login-container">
              <img className="google" src={Google} alt="Google" />
              <p className="login">Login with Google</p>
            </a>
          </li>
        );
      default:
        return (
          <ul className="nav justify-content-end">
            <li key="1" className="nav-item">
              <Link to="/credits" className="nav-link">
                Credits
              </Link>
            </li>

            <li key="2" className="nav-item">
              <Link to="/surveys" className="nav-link">
                Surveys
              </Link>
            </li>

            <li key="3" className="nav-item">
              <a href="/api/logout" className="nav-link">
                Logout
              </a>
            </li>
          </ul>
        );
    }
  }

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid container">
        <Link to={auth ? "/surveys" : "/"} className="navbar-brand">
          <i className="bi bi-envelope"></i>
          {"  "}Emaily
        </Link>
        {renderContent()}
      </div>
    </nav>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
