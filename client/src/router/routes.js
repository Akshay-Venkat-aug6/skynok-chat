import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
// Pages
import CredentialsPage from '../pages/CredentialsPage';
import HomePage from '../pages/HomePage';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Login/Signup Page */}
        <Route exact path="/signup" component={CredentialsPage}/>
        {/* Home Page */}
        <PrivateRoute exact path="/" component={HomePage}/>
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;