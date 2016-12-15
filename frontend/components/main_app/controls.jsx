import React from 'react';
import { withRouter } from 'react-router';
import { parseSeconds } from '../../util/parse_util';

class Controls extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      currentPosition: 0,
      volume: 1
    };

    this.togglePause = this.togglePause.bind(this);
    this.goToPlaylist = this.goToPlaylist.bind(this);
    this.playNext = this.playNext.bind(this);
    this.startSongOver = this.startSongOver.bind(this);
    this.updateProperties = this.updateProperties.bind(this);
    this.changePosition = this.changePosition.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.leavePlayInfo = this.leavePlayInfo.bind(this);
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

  componentWillReceiveProps(newProps){
    const nextSongId = newProps.playQueue.currentTrackId;
    if ( !!nextSongId && nextSongId > 0 && nextSongId != this.props.playQueue.currentTrackId ) {
      this.props.fetchSong(nextSongId);
    }
  }

  playNext() {
    if ( Object.keys(this.props.playQueue.tracks).length === 0 ) return;
    const nextOrderIndex = this.props.playQueue.currentOrderIndex + 1;
    const nextSongId = this.props.playQueue.order[nextOrderIndex];
    this.props.sendPlayNextAction(nextSongId);
  }

  startSongOver() {
    this.props.audioEl.currentTime = 0;
  }

  updateProperties() {
    this.setState({
      currentPosition: this.props.audioEl.currentTime,
      volume: this.props.audioEl.volume
    });
  }

  changePosition(event){
    const ratioAtClick = ( event.pageX - event.target.offsetLeft ) / event.target.offsetWidth;
    this.props.audioEl.currentTime = ratioAtClick * this.props.audioEl.duration;
  }

  changeVolume(event) {
    this.props.audioEl.volume = event.target.value;
  }

  leavePlayInfo(){
    localStorage.setItem('currentTrack', JSON.stringify(this.props.currentTrack) );
    localStorage.setItem('playQueue', JSON.stringify(this.props.playQueue) );
  }

  render(){
    if ( !this.props.audioEl ){
      return(
        <div className="controls-wrapper"></div>
      );
    }

    this.props.audioEl.onended = this.playNext;

    const playPauseClass = this.props.audioEl.paused ? "play" : "pause";
    const playPauseClasses = playPauseClass + " play-pause" + " control";
    const duration = this.props.songDuration;
    const secondsPlayed = Math.floor(this.props.audioEl.currentTime);
    const secondsLeft = Math.floor(duration - this.props.audioEl.currentTime);

    this.props.audioEl.ontimeupdate = this.updateProperties;

    const shuffleClass = this.props.playQueue.shuffle ? "toggle-shuffle-on" : "toggle-shuffle";
    const repeatClass = this.props.playQueue.repeat ? "toggle-repeat-on" : "toggle-repeat";

    window.onunload = this.leavePlayInfo;

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
          <li
            className="twenty-px view-playlist control"
            onClick={ this.goToPlaylist }></li>
          <li
            className={ `twenty-px ${shuffleClass} control` }
            onClick={ this.props.sendToggleShuffleAction }></li>
          <li
            className={ `twenty-px ${repeatClass} control` }
            onClick={ this.props.sendToggleRepeatAction }></li>
          <li className="twenty-px volume control">
            <div className="vol-slider-wrapper">
              <input
                type="range"
                className="vol-slider"
                defaultValue={ this.state.volume }
                min="0"
                max="1"
                step="0.01"
                onChange={ this.changeVolume }
              />
            </div>
          </li>
        </ul>

      </div>
    );
  }

}

export default withRouter(Controls);
