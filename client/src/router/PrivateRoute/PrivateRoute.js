import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const CustomerHomeRouter = ({component: Component, ...rest}) => {
  const isAuthenticated = ( sessionStorage.getItem('isLogged') === "true" )
  return(
    <>
      <Route {...rest} render={props => isAuthenticated ?
        ( <Component {...props} /> )
        :
        ( <Redirect to="/signup"/> )
      } />  
    </>
  )
};

export default CustomerHomeRouter;