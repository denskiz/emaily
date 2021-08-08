import { connect } from "react-redux";
import Payments from "./Payments";

const Credits = ({ auth }) => {
  function renderCredits() {
    if (auth) {
      return <span>{auth.credits}</span>;
    } else {
      return <span>None</span>;
    }
  }

  function renderCreditsIntro() {
    return (
      <div className="alert alert-info" role="alert">
        Purchase credits which are required to create new Surveys.
      </div>
    );
  }

  function renderQuickInfoCard() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Quick Info</h5>
          <p className="card-text">
            This is a demo version of the application. Therefore we don't accept
            any REAL financial information.
          </p>
          <p className="card-text">
            To purchase Credits click on the Add Credits button and enter the
            following details :
          </p>
          <ul>
            <li>
              <blockquote>Email: Your Email</blockquote>
            </li>
            <li>
              <blockquote>Card Number: 4242 4242 4242 4242</blockquote>
            </li>
            <li>
              <blockquote>Card Exp (MM/YY): Any Valid Date</blockquote>
            </li>
            <li>
              <blockquote>CVV: Any 3 digit number</blockquote>
            </li>
          </ul>
          <p>
            <b>Note: We do not store your personal/financial information.</b>
          </p>
        </div>
      </div>
    );
  }
  function renderCreditsInfoCard() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Credit Info</h5>
          <blockquote>
            <b>Available Credits : {renderCredits()}</b>
          </blockquote>
          <a className="btn btn-primary">
            <Payments />
          </a>
        </div>
      </div>
    );
  }
  function renderContent() {
    return (
      <>
        {renderCreditsIntro()}
        <section className="section">
          <div className="row">
            <div className="col s12 m8">{renderQuickInfoCard()}</div>
            <div className="col s12 m4">{renderCreditsInfoCard()}</div>
          </div>
        </section>
      </>
    );
  }

  return <>{renderContent()}</>;
};

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}
export default connect(mapStateToProps)(Credits);
