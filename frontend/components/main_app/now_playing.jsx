import React from 'react';
import ControlsContainer from './controls_container';
import { Link } from 'react-router';

class NowPlaying extends React.Component {

  componentWillReceiveProps(nextProps){

    if (!this.audio) return;

    if ( nextProps.currentTrack.playing && !this.props.currentTrack.playing ) {
      this.audio.play();
    } else if ( !nextProps.currentTrack.playing && this.props.currentTrack.playing ) {
      this.audio.pause();
    }

  }


  render(){

    let componentClass = "now-playing-wrapper";
    if ( !this.props.currentTrack.id ) {
      componentClass = "no-music";
    }

    const track = this.props.currentTrack;

    return(
      <footer className={ componentClass }>

        <audio
          src={ track.media_url }
          ref={ ref => this.audio = ref }
          onEnded={ this.props.sendPlayNextAction }
          autoPlay
        />

        <section className="now-playing-info">
          <Link to={ "artists/" + track.artistId + "/albums/" + track.albumId }>
            <div
              className="now-playing-album-cover"
              style={ { backgroundImage: `url(${track.albumCoverUrl})` } }
            />
          </Link>
          <span className="now-playing-title"><h2>{ track.title }</h2></span>
          <span className="now-playing-artist">
            <h3>
              <Link to={ "artists/" + track.artistId }>{ track.artistName }</Link>
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
