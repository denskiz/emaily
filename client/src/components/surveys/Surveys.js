import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import SurveyList from './SurveyList';
import SurveyDetail from './SurveyDetail';
import './SurveyList.css';

function Surveys({ fetchSurveys, surveys }) {
  const [data, setdata] = useState({ showSurveyDetail: false, surveyId: '' });

  useEffect(() => {
    fetchSurveys();
  }, [fetchSurveys]);

  function renderSurveyIntro() {
    return (
      <section className="section section-about grey lighten-5 center scrollspy">
        <div className="container">
          <h4>Surveys</h4>
          <p>
            Create and Track all your Surveys here.
            <br />
            To create a new Survey, click on the red + icon on the bottom right
            of your screen.
          </p>
        </div>
      </section>
    );
  }

  function renderSurveyDetail(surveyId) {
    return surveys.find(elem => {
      if (elem._id === data.surveyId) return [elem];
    });
  }

  function renderSurveys() {
    if (!data.showSurveyDetail) {
      return (
        <SurveyList
          onDetailsClick={id => {
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
            return setdata({ showSurveyDetail: false, surveyId: '' });
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

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(Surveys);
