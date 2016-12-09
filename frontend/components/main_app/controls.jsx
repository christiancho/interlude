import React from 'react';
import { withRouter } from 'react-router';
import { parseSeconds } from '../../util/parse_util';

class Controls extends React.Component {

  constructor(props){
    super(props);

    this.togglePause = this.togglePause.bind(this);
    this.goToPlaylist = this.goToPlaylist.bind(this);
  }

  goToPlaylist(){
    this.props.router.push("/queue");
  }

  togglePause(){
    return this.props.playing ? this.props.pauseMusic : this.props.playMusic;
  }

  render(){

    const playPauseClass = this.props.playing ? "pause" : "play";
    const playPauseClasses = playPauseClass + " play-pause" + " control";
    const duration = this.props.songDuration;

    return(
      <div className="controls-wrapper">
        <div className="play-position-slider">
          <span>0:00</span>
          <input
            type="range"
            onClick={ this.props.changePosition }
            min="0"
            step="0.1"
            max={ duration }
            defaultValue={ this.props.defaultPosition }
          />
          <span>{ parseSeconds(duration) }</span>
        </div>
        <section className="now-playing-controls">
          <div className="twenty-five-px prev control" />
          <div className={ playPauseClasses } onClick={ this.togglePause() }/>
          <div className="twenty-five-px next control" onClick={ this.props.playNext } />
        </section>

        <ul className="playlist-controls">
          <li className="twenty-px view-playlist control" onClick={ this.goToPlaylist }></li>
          <li className="twenty-px toggle-shuffle control"></li>
          <li className="twenty-px toggle-repeat control"></li>
          <li className="twenty-px volume control"></li>
        </ul>

      </div>
    );
  }

}

export default withRouter(Controls);
