// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label style={{ fontSize: '16px' }}>{label}</label>
        <div style={{ margin: '4px' }}>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      {reviewFields}
      <br />
      <button className="yellow darken-4 btn white-text" onClick={onCancel}>
        Back <i className="material-icons left">arrow_left</i>
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="teal btn right white-text"
      >
        Send Survey
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

// SurveyForm Review knows about the history object that is
// provided by react-router and is passed on the props object

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
