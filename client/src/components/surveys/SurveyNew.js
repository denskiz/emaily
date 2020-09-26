// SurveyNew shows SurveyForm and SurveyFormReview
import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

const headerMessageToFillForm = 'Please fill out the following entries';
const headerMessageToReviewForm = 'Please review the following entries';

const SurveyNew = () => {
  const [showFormReview, setShowFormReview] = useState(false);

  function renderSurveyFormIntro() {
    return (
      <section className="section section-about grey lighten-5 center scrollspy">
        <div className="container">
          <h4>Create New Survey</h4>
          <p>
            {showFormReview
              ? headerMessageToReviewForm
              : headerMessageToFillForm}
          </p>
        </div>
      </section>
    );
  }
  function renderForm() {
    if (showFormReview) {
      return <SurveyFormReview onCancel={() => setShowFormReview(false)} />;
    }

    return <SurveyForm onSurveySubmit={() => setShowFormReview(true)} />;
  }

  function renderContent() {
    return (
      <section className="section section-recent">
        <div className="container">
          <div className="row">
            <div className="col s12">{renderForm()}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div>
      {renderSurveyFormIntro()}
      {renderContent()}
    </div>
  );
};

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
