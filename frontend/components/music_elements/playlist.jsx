import React from 'react';
import Spinner from '../spinner';
import { parseSeconds } from '../../util/parse_util';
import { Link, withRouter } from 'react-router';

class Playlist extends React.Component {

  constructor(props) {
    super(props);

    this.generateTrackList = this.generateTrackList.bind(this);
    this.playPlaylist = this.playPlaylist.bind(this);
  }

  componentDidMount(){
    this.props.fetchPlaylist(this.props.params.playlistId);
  }

  generateTrackList(songs){

    if ( !songs ) return ( <tr></tr> );

    const orderedKeys = Object.keys(songs).sort();
    const songList = orderedKeys.map( ( ord, index ) => {
      const song = songs[ord];
      const durationString = parseSeconds(song.duration);
      return(
        <tr className="track-listing" key={ index }>
          <td>{ ord }</td>
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
            <th>No.</th>
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

  generateRandomHeader() {

    const randomNumber = Math.floor( Math.random() * Object.keys(this.props.playlist.tracks).length );
    const randomOrd = Object.keys(this.props.playlist.tracks)[randomNumber];
    const randomArtistImageUrl = this.props.playlist.tracks[randomOrd].artistImageUrl;
    return (
      <div className="header-image"
        style={ { backgroundImage: `url(${randomArtistImageUrl})` } } />
    );
  }

  generateMosaic() {

    const urlStore = {};

    for (let i = 1; i < 5; i++){
      const randomNumber = Math.floor( Math.random() * Object.keys(this.props.playlist.tracks).length );
      const randomOrd = Object.keys(this.props.playlist.tracks)[randomNumber];
      const randomAlbumImageUrl = this.props.playlist.tracks[randomOrd].albumCoverUrl;
      urlStore[i] = randomAlbumImageUrl;
    }

    return(
      <div className="playlist-mosaic">
        <div className="mosaic-tile" style={ { backgroundImage: `url(${urlStore[1]})` } } />
        <div className="mosaic-tile" style={ { backgroundImage: `url(${urlStore[2]})` } } />
        <div className="mosaic-tile" style={ { backgroundImage: `url(${urlStore[3]})` } } />
        <div className="mosaic-tile" style={ { backgroundImage: `url(${urlStore[4]})` } } />
      </div>
    );
  }

  playPlaylist() {
    this.props.playPlaylist(this.props.playlist.tracks);
  }

  render(){
    if ( this.props.loading ) return (<Spinner />);

    const playlist = this.props.playlist;
    return(
      <section className="playlist-view">

        { this.generateRandomHeader() }
        <section className="header-info">
          { this.generateMosaic() }
          <div className="header-details">
            <span className="view-type">Playlist</span>
            <h1>{ playlist.name }</h1>
            <h2>By: { playlist.owner }</h2>
            <h3>Updated: { (new Date(playlist.updated_at)).toLocaleDateString() }</h3>
            <button className="playlist-play-button" onClick={ this.playPlaylist }>Play</button>
          </div>
        </section>

        <section className="article-main scrollable-y">
          <section className="artist-songs">
            { this.generateTrackList( playlist.tracks ) }
          </section>
        </section>

      </section>
    );
  }

}

export default withRouter(Playlist);
