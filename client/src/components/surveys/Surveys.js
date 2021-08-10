import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import SurveyList from './SurveyList';
import SurveyDetail from './SurveyDetail';
import './SurveyList.css';

function Surveys({ fetchSurveys, surveys }) {
  const [data, setdata] = useState({ showSurveyDetail: false, surveyId: "" });

  useEffect(() => {
    fetchSurveys();
  }, [fetchSurveys]);

  function renderSurveyIntro() {
    return (
      <div className="container">
        <h4 className="text-center">Surveys</h4>
        <p className="text-center">
          Create and Track all your Surveys here.
          <br />
          To create a new Survey, click on the red New Survey Button on the
          bottom right of your screen.
        </p>
      </div>
    );
  }

  function renderSurveyDetail(surveyId) {
    return surveys.find((elem) => {
      if (elem._id === data.surveyId) return [elem];
    });
  }

  function renderSurveys() {
    if (!data.showSurveyDetail) {
      return (
        <SurveyList
          onDetailsClick={(id) => {
            return setdata({ showSurveyDetail: true, surveyId: id });
          }}
          surveys={surveys}
        />
      );
    } else {
      return (
        <SurveyDetail
          currentSurvey={renderSurveyDetail(data.surveyId)}
          onReturnClick={() => {
            return setdata({ showSurveyDetail: false, surveyId: "" });
          }}
        />
      );
    }
  }

  function renderContent() {
    return (
      <div>
        {renderSurveyIntro()}
        {renderSurveys()}
      </div>
    );
  }
  return <div>{renderContent()}</div>;
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(Surveys);