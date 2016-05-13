import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import App from '../../ui/pages/App.jsx';
import Login from '../../ui/pages/Login.jsx';
import Signup from '../../ui/pages/Signup.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="login" component={Login}/>
      <Route path="signup" component={Signup}/>
    </Route>
  </Router>
);
