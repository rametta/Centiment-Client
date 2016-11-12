import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

// Custom Components
import Layout from './components/layout';
import HomePage from './components/pages/homePage';
import QuizPage from './components/pages/quizPage';
import LoginPage from './components/pages/loginPage';
import SignupPage from './components/pages/signupPage';
import AnalysisPage from './components/pages/analysisPage';
import ReferencePage from './components/pages/referencePage';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/" component={HomePage}></Route>
      <Route path="/quiz" component={QuizPage}></Route>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/signup" component={SignupPage}></Route>
      <Route path="/analysis" component={AnalysisPage}></Route>
      <Route path="/references" component={ReferencePage}></Route>
    </Route>
  </Router>
  , document.getElementById('root'));
