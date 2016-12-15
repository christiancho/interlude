import React from 'react';
import ControlsContainer from './controls_container';
import { Link } from 'react-router';

class NowPlaying extends React.Component {

  componentDidMount(){
    if ( this.props.currentTrack.localStorageLoad ){
      this.props.fetchSong(this.props.currentTrack.id)
        .then( () => this.audio.pause() );
    }
  }

  componentWillReceiveProps(newProps){
    if ( newProps.currentTrack.restart || this.props.currentTrack.id !== newProps.currentTrack.id ) {
      this.props.fetchSong(newProps.currentTrack.id);
    }
    if ( this.props.currentTrack.id === newProps.currentTrack.id ) {
      this.audio.currentTime = 0;
    }
  }

  render(){

    let componentClass = "now-playing-wrapper";
    if ( this.props.currentTrack.id <= 0 ) {
      componentClass = "no-music";
    }
    const track = this.props.currentTrack;
    return(
      <footer className={ componentClass }>

        <audio
          src={ track.media_url }
          ref={ ref => this.audio = ref }
          autoPlay
        />

        <section className="now-playing-info">
          <Link to={ "artists/" + track.artist_id + "/albums/" + track.album_id }>
            <div
              className="now-playing-album-cover"
              style={ { backgroundImage: `url(${track.album_image_url})` } }
            />
          </Link>
          <span className="now-playing-title"><h2>{ track.title }</h2></span>
          <span className="now-playing-artist">
            <h3>
              <Link to={ "artists/" + track.artist_id }>{ track.artist_name }</Link>
            </h3>
          </span>
        </section>

        <ControlsContainer
          songDuration={ track.duration }
          audioEl={ this.audio }
        />

      </footer>
    );
  }

}

export default NowPlaying;
