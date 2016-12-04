import React from 'react';
import { withRouter } from 'react-router';
import SplashRight from './auth_form/splash_right';

const Splash = ({ children }) => {

  return (
    <section className="splash">
      { children }
      <div className="splash-divider" />
      <SplashRight />
    </section>
  );

};

export default withRouter(Splash);
