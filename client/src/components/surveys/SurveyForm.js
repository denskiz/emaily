// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React from 'react';
// Field shows any type of input
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

const SurveyForm = props => {
  function renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  return (
    <div>
      <form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
        {renderFields()}
        <Link to="/surveys" className="btn left white-text  red darken-1">
          Cancel <i className="material-icons left">clear</i>
        </Link>

        <button type="submit" className="teal btn right white-text">
          Next <i className="material-icons right">arrow_right</i>
        </button>
      </form>
    </div>
  );
};

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name, error }) => {
    if (!values[name]) {
      errors[name] = error;
    }
  });
  // if (!values.title) {
  //   errors.title = 'You must provide a survey title';
  // }
  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
