import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import Credits from './Credits';

import Payments from './Payments';

const App = (props) => {
  useEffect(() => {
    props.fetchUser();
  });

  return (
    <BrowserRouter basename="/">
      <Header />
      <div className="container">
        <br />
        <Routes>
          <Route path="/card" element={<Payments />} />
          <Route path="/" element={<Landing />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/surveys" element={<Dashboard />} />
          <Route path="/surveys/new" element={<SurveyNew />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default connect(null, actions)(App);
