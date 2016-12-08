import React from 'react';
import ControlsContainer from './controls_container';

class NowPlaying extends React.Component {

  constructor(props){
    super(props);
    this.updateSong = this.updateSong.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if ( nextProps.currentTrack.playing && this.props.currentTrack.id ) {
      this.audio.play();
    } else if ( this.props.currentTrack.id ) {
      this.audio.pause();
    }
  }

  componentDidMount(){
    if ( localStorage.lastSongId ) {
      this.props.fetchSong( localStorage.lastSongId )
        .then( () => this.props.pauseMusic() );
    }
    if ( localStorage.lastSongPosition && this.audio ) {
      this.audio.currentTime = parseFloat(localStorage.lastSongPosition);
    }

  }

  updateSong(){
    localStorage.lastSongPosition = this.audio.currentTime;
  }

  render(){
    if ( !this.props.currentTrack.id && !localStorage.lastSongId ) {
      return(
        <footer className="no-music"></footer>
      );
    }

    $(window).unload( this.updateSong );

    const track = this.props.currentTrack;

    return(
      <footer className="now-playing-wrapper">
        <audio
          src={ track.media_url }
          ref={ ref => this.audio = ref }
          autoPlay
        />
        <section className="now-playing-info">
          <img src={track.album_cover_url } className="now-playing-album-cover"/>
          <h2 className="now-playing-title">{ track.title }</h2>
          <h3 className="now-playing-artist">{ track.artist_name }</h3>
        </section>

        <ControlsContainer />

      </footer>
    );
  }

}

export default NowPlaying;
