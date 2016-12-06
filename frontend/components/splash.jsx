import React from 'react';
import { withRouter } from 'react-router';
import SplashRight from './auth_form/splash_right';

const Splash = ({ children }) => {

  return (
    <section className="splash">
      <div className="splash-wrapper">
        { children }
        <div className="splash-divider" />
        <SplashRight />
      </div>
    </section>
  );

};

export default withRouter(Splash);
