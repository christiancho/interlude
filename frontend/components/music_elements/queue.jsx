import React from 'react';
import { parseSeconds } from '../../util/parse_util';
import { Link } from 'react-router';

class Queue extends React.Component{

  constructor(props){
    super(props);

    this.generateTrackList = this.generateTrackList.bind(this);
  }

  generateTrackList( order, tracks ){

    if ( order.length ===0 ) {
      return (
        <h2>No tracks in queue.</h2>
      );
    }

    const songList = order.map( ( id, index ) => {
      const song = tracks[id];
      const durationString = parseSeconds(song.duration);
      const nowPlayingClass = ( this.props.currentTrack.id === id ) ? "now-playing" : "";
      return(
        <tr className="track-listing" key={ index }>
          <td>{ song.title }</td>
          <td>{ song.artist_name }</td>
          <td>{ song.album_title }</td>
          <td className={ nowPlayingClass }>{ durationString }</td>
        </tr>
      );
    });

    return (
      <table className="track-list">
        <tbody>
          <tr>
            <th>Song</th>
            <th>Artist(s)</th>
            <th>Album</th>
            <th className="duration-heading"></th>
          </tr>
          { songList }
        </tbody>
      </table>
    );
  }

  render() {
    const order = this.props.playQueue.order;
    const tracks = this.props.playQueue.tracks;
    const currentTrack = this.props.currentTrack;

    return (
      <section className="queue">
        <h1>Play Queue</h1>
        { this.generateTrackList(order, tracks) }
      </section>
    );
  }

}

export default Queue;
