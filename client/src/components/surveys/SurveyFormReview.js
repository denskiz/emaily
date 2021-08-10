// SurveyFormReview shows users their form inputs for review
import { connect } from "react-redux";
import * as actions from "../../actions";

import { Link } from "react-router-dom";

const SurveyReview = ({ onCancel, formValues, submitSurvey }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>
        <label className="form-text">Survey Title</label>
        <div>{formValues.title}</div>
      </div>
      <div>
        <label className="form-text">Subject Line</label>
        <div>{formValues.subject}</div>
      </div>
      <div>
        <label className="form-text">Email Body</label>
        <div>{formValues.body}</div>
      </div>
      <div>
        <label className="form-text">Recipient Email List</label>
        <div>{formValues.recipients}</div>
      </div>
      <br />
      <button onClick={onCancel} className="btn btn-danger">
        <span className="btn-label">
          <i className="bi bi-arrow-90deg-left"></i>
        </span>
        {"  "}Back
      </button>

      <Link
        className="btn btn-success float-end"
        onClick={() => submitSurvey(formValues)}
        to="/"
      >
        <i className="bi bi-envelope-fill"></i> {"  "}Send Survey
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { formValues: state.formData };
};

export default connect(mapStateToProps, actions)(SurveyReview);
