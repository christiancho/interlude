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
      return(
        <tr className="track-listing" key={ index }>
          <td>{ song.title }</td>
          <td>{ song.artistName }</td>
          <td>{ song.albumTitle }</td>
          <td>{ durationString }</td>
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

  renderCurrentlyPlaying(currentTrack){
    if ( currentTrack.id === 0 ) {
      return (
        <div className="currently-playing-in-queue">
          Currently Playing: None
        </div>
      );
    } else {
      return (
        <div className="currently-playing-in-queue">
          Currently Playing: { currentTrack.title } by&nbsp;
          <Link to={ `artists/${currentTrack.artistId}` }>
            { currentTrack.artistName }
          </Link> on <Link to={ `artists/${currentTrack.artistId}/albums/${currentTrack.albumId}` }>
            { currentTrack.albumTitle }
          </Link>
        </div>
      );
    }
  }

  render() {
    const order = this.props.playQueue.order;
    const tracks = this.props.playQueue.tracks;
    const currentTrack = this.props.currentTrack;

    return (
      <section className="queue">
        <h1>Play Queue</h1>
        { this.renderCurrentlyPlaying(currentTrack) }
        { this.generateTrackList(order, tracks) }
      </section>
    );
  }

}

export default Queue;
