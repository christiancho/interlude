import React from 'react';

class NowPlaying extends React.Component {

  render(){
    if ( !this.props.currentTrack.id ) {
      return(
        <footer className="no-music"></footer>
      );
    }

    const track = this.props.currentTrack;
    const status = track.playing ? "Playing" : "Paused";
    return(
      <footer className="now-playing-wrapper">
        <img src={track.album_cover_url }/>
        { track.title }
        { track.album_title }
        { track.artist_name }
        { track.media_url }
      </footer>
    );
  }

}

export default NowPlaying;
