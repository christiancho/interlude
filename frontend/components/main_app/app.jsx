import React from 'react';
import NavBarContainer from './nav_bar_container';
import NowPlayingContainer from './now_playing_container';
import { withRouter } from 'react-router';

class App extends React.Component {

  render(){
    return (
      <section className="app-wrapper">
        <NavBarContainer />
        <main className="main-content-wrapper">
          { this.props.children }
        </main>
        <NowPlayingContainer />
      </section>
    );
  }

}

export default withRouter(App);
