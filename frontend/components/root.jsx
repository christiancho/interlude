import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Splash from './splash';
import AuthBegin from './auth_form/auth_begin';
import LoginFormContainer from './auth_form/login_form_container';
import SignupFormContainer from './auth_form/signup_form_container';
import BrowseContainer from './main_app/browse_container';

const Root = ({ store }) => {

  const _requireLogin = (nextState, replace) => {
    if ( !store.getState().session.currentUser ) replace("/");
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    if ( !!store.getState().session.currentUser ) replace("/browse");
  };

  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>

        <Route path="/" component={ Splash } onEnter={ _redirectIfLoggedIn }>
          <IndexRoute component={ AuthBegin } />
          <Route path="/login" component={ LoginFormContainer } />
          <Route path="/signup" component={ SignupFormContainer } />
        </Route>

        <Route path="/browse" component={ BrowseContainer } onEnter={ _requireLogin }/>

      </Router>
    </Provider>
  );

};

export default Root;
