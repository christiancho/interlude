import React from 'react';
import NavBarContainer from './nav_bar_container';
import { withRouter } from 'react-router';

class App extends React.Component {

  render(){

    return (
      <div className="app-wrapper">
        <section className="nav-bar">
          <NavBarContainer />
        </section>
        <section className="main-content">
          { this.props.router.children }
        </section>
        <section className="now-playing">

        </section>
      </div>
    );
  }

}

export default withRouter(App);
