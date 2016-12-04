import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Splash from './splash';
import AuthBegin from './auth_form/auth_begin';
import LoginFormContainer from './auth_form/login_form_container';
import SignupFormContainer from './auth_form/signup_form_container';

const Root = ({ store }) => {

  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ Splash }>
          <IndexRoute component={ AuthBegin } />
          <Route path="/login" component={ LoginFormContainer } />
          <Route path="/signup" component={ SignupFormContainer }/>

        </Route>
      </Router>
    </Provider>
  );

};

export default Root;
