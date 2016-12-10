import React from 'react';
import { withRouter } from 'react-router';
import { parseSeconds } from '../../util/parse_util';

class Controls extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      currentPosition: 0,
    };

    this.togglePause = this.togglePause.bind(this);
    this.goToPlaylist = this.goToPlaylist.bind(this);
    this.playNext = this.playNext.bind(this);
    this.startSongOver = this.startSongOver.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.changePosition = this.changePosition.bind(this);
  }

  goToPlaylist(){
    this.props.router.push("/queue");
  }

  togglePause(){
    if (this.props.audioEl.paused){
      this.props.audioEl.play();
    } else {
      this.props.audioEl.pause();
    }
  }

  playNext() {
    this.props.sendPlayNextAction();
  }

  startSongOver() {
    this.props.audioEl.currentTime = 0;
  }

  updatePosition() {
    this.setState({
      currentPositiion: this.props.audioEl.currentTime
    });
  }

  changePosition(event){
    const ratioAtClick = ( event.pageX - event.target.offsetLeft ) / event.target.offsetWidth;
    this.props.audioEl.currentTime = ratioAtClick * this.props.audioEl.duration;
  }

  render(){

    if (!this.props.audioEl){
      return(
        <div className="controls-wrapper" />
      );
    }

    const playPauseClass = this.props.audioEl.paused ? "play" : "pause";
    const playPauseClasses = playPauseClass + " play-pause" + " control";
    const duration = this.props.songDuration;
    const secondsPlayed = Math.floor(this.props.audioEl.currentTime);
    const secondsLeft = Math.floor(duration - this.props.audioEl.currentTime);

    this.props.audioEl.ontimeupdate = this.updatePosition;

    return(
      <div className="controls-wrapper">

        <div className="play-position-slider">
          <span>{ parseSeconds(secondsPlayed) }</span>
          <progress
            max={ duration }
            value={ secondsPlayed }
            onClick={ this.changePosition }
          />
          <span>-{ parseSeconds(secondsLeft) }</span>
        </div>

        <section className="now-playing-controls">
          <div className="twenty-five-px prev control" onClick={ this.startSongOver }/>
          <div className={ playPauseClasses } onClick={ this.togglePause }/>
          <div className="twenty-five-px next control" onClick={ this.playNext } />
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
