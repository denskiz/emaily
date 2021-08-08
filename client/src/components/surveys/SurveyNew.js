// Survey new shows SurveyForm and SurveyForm Review
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import { useState } from "react";

const SurveyNew = () => {
  const [showFormReview, setShowFormReview] = useState(false);

  function renderForm() {
    if (showFormReview) {
      return <SurveyFormReview onCancel={() => setShowFormReview(false)} />;
    }

    return <SurveyForm onSurveySubmit={() => setShowFormReview(true)} />;
  }

  return (
    <div className="row justify-content-md-center">
      <div className="col-6">
        <h1 className="text-center">Create New Survey</h1>
        <p className="text-center">
          {showFormReview
            ? "Please review the following entries"
            : "Please fill out the following entries"}
        </p>
        {renderForm()}
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default SurveyNew;
