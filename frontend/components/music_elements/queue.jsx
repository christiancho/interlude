import React from 'react';
import { parseSeconds } from '../../util/parse_util';

class Queue extends React.Component{

  constructor(props){
    super(props);

    this.generateTrackList = this.generateTrackList.bind(this);
  }

  generateTrackList( order, tracks ){

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

  render() {
    const order = this.props.playQueue.order;
    const tracks = this.props.playQueue.tracks;

    if ( Object.keys(tracks).length === 0 ) return (
      <section className="queue">
        <h1>Play Queue</h1>
        <h2>Your queue is empty.</h2>
      </section>
    );

    return (
      <section className="queue">
        <h1>Play Queue</h1>
        { this.generateTrackList(order, tracks) }
      </section>
    );
  }

}

export default Queue;
