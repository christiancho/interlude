import React from 'react';
import ControlsContainer from './controls_container';
import { Link } from 'react-router';

class NowPlaying extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentPosition: this.props.currentTrack.position
    };

    this.leaveState = this.leaveState.bind(this);
    this.playNext = this.playNext.bind(this);
    this.changePosition = this.changePosition.bind(this);
  }

  componentWillReceiveProps(nextProps){

    if (!this.audio) return;

    if ( nextProps.currentTrack.playing && !this.props.currentTrack.playing ) {
      this.audio.play();
    } else if ( !nextProps.currentTrack.playing && this.props.currentTrack.playing ) {
      this.audio.pause();
    }

    if ( !!this.audio && !!localStorage.lastSongPosition ) {
      this.audio.currentTime = parseFloat(localStorage.lastSongPosition);
    }


  }

  componentDidMount(){

    const id = parseInt(localStorage.lastSongId);

    if ( !!id && id > 0 ) {
      this.props.fetchSong( localStorage.lastSongId )
        .then( () => this.props.pauseMusic() )
        .then( () => {
          if ( localStorage.lastSongPosition ){
            this.audio.currentTime = parseFloat(localStorage.lastSongPosition);
          }
        });
    }

    const lastQueue = JSON.parse(localStorage.lastQueue);
    if ( lastQueue.order.length > 0 ) {
      this.props.sendQueneFromLocalStorage(lastQueue);
    }

  }

  playNext(){
    if ( this.props.playQueue.order.length > 0 ){
      const nextSongId = this.props.playQueue.order[0];
      this.props.fetchSong(nextSongId)
        .then(() => {
          this.props.sendPlayNextAction();
        });
    }
  }


  leaveState(){
    localStorage.lastSongPosition = this.audio.currentTime;
    localStorage.lastSongId = this.props.currentTrack.id;
    localStorage.lastQueue = JSON.stringify( this.props.playQueue );
  }

  changePosition(event){
    this.audio.currentTime = event.target.value;
    this.setState({
      currentPosition: this.audio.currentTime
    });
  }

  render(){
    const id = parseInt(localStorage.lastSongId);
    if ( ( !id || id <= 0 ) && !( this.props.currentTrack.id ) ) {
      return(
        <footer className="no-music"></footer>
      );
    }

    $(window).unload( this.leaveState );

    const track = this.props.currentTrack;

    return(
      <footer className="now-playing-wrapper">
        <audio
          src={ track.media_url }
          ref={ ref => this.audio = ref }
          onEnded={ this.playNext }
          autoPlay
        />
        <section className="now-playing-info">
          <Link to={ "artists/" + track.artistId + "/albums/" + track.albumId }>
            <img src={ track.albumCoverUrl } className="now-playing-album-cover"/>
          </Link>
          <h2 className="now-playing-title">{ track.title }</h2>
          <h3 className="now-playing-artist artist-link">
            <Link to={ "artists/" + track.artistId }>{ track.artistName }</Link>
          </h3>
        </section>

        <ControlsContainer
          currentPosition={ this.state.currentPosition }
          songDuration={ track.duration }
          changePosition={ this.changePosition }
          playNext={ this.playNext }
        />

      </footer>
    );
  }

}

export default NowPlaying;
