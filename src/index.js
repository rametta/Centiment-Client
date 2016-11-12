import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

// Custom Components
import App from './components/app';
import Home from './components/home';
import Quiz from './components/quiz';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home}></Route>
      <Route path="/quiz" component={Quiz}></Route>
    </Route>
  </Router>
  , document.getElementById('root'));
