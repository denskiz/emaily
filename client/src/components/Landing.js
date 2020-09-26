import React from 'react';
import './Landing.css';

function Landing() {
  return (
    <div>
      <section className="section section-about grey lighten-5 center">
        <div className="container">
          <div className="wrapper">
            <div className="hero">
              <h1>Emaily</h1>
              <h3>Get Feedback from your users faster</h3>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <ul className="collection with-header z-depth-4">
                <li className="collection-header">
                  <h5>Instructions</h5>
                </li>
                <li className="collection-item">
                  <i className="material-icons left">attach_money</i>
                  Purchase Credits to create Surveys
                </li>
                <li className="collection-item">
                  <i className="material-icons left">assignment</i>
                  Create Surveys with a title and a question
                </li>
                <li className="collection-item">
                  <i className="material-icons left">group_add</i>
                  Enter a comma-separated list of the recipient email addresses.
                </li>
                <li className="collection-item">
                  <i className="material-icons left">equalizer</i>
                  Send the survey and await feedback. Each emailer campaign's
                  response tally can be monitored in your user dashboard.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h4>Tech Stack</h4>
        <p>This app was built with:</p>
        <div className="container">
          <div className="row">
            <div className="col s6">
              <ul>
                <li className="bold">Front End:</li>
                <li>React</li>
                <li>Redux</li>
                <li>Chart.js</li>
                <li>Materialize CSS</li>
              </ul>
            </div>
            <div className="col s6">
              <ul>
                <li className="bold">Back End:</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Passport</li>
                <li>Google Oauth</li>
                <li>Send Grid API</li>
                <li>Stripe API</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
