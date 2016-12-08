import React from 'react';

class Controls extends React.Component {

  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    return this.props.playing ? this.props.pauseMusic : this.props.playMusic;
  }

  render(){

    const playPauseClass = this.props.playing ? "pause-button" : "play-button";

    return(
      <section className="now-playing-controls">
        <div className="previous-button" />
        <div className={ playPauseClass } onClick={ this.toggle() }/>
        <div className="next-button" />
      </section>
    );
  }

}

export default Controls;
