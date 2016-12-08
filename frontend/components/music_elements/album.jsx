import React from 'react';
import Spinner from '../spinner';
import { Link } from 'react-router';

class Album extends React.Component {

  constructor(props){
    super(props);

    this.handlePlayClick = this.handlePlayClick.bind(this);
  }

  componentDidMount(){
    this.props.fetchArtist(this.props.params.artistId);
    this.props.fetchAlbum(this.props.params.albumId);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.params.albumId !== nextProps.params.albumId){
      this.props.fetchAlbum(nextProps.params.albumId);
    }
  }

  handlePlayClick(id){
    this.props.fetchSong(id);
  }

  generateTrackList(songs){

    if ( !songs ) return ( <tr></tr> );

    const songList = songs.map( ( song, index ) => {
      const minutes = String( Math.floor( song.duration / 60 ) );
      const seconds = ( "0" + String( song.duration - ( minutes * 60 ) ) ).slice(-2);
      const durationString = ("00" + minutes + ":" + seconds).slice(-5);
      return(
        <tr className="track-listing" key={ index }>
          <td className="play-button" onClick={ this.handlePlayClick.bind(null, song.id) }></td>
          <td>{ song.title }</td>
          <td>{ song.artist_name }</td>
          <td>{ song.album_title }</td>
          <td>{ durationString }</td>
        </tr>
      );
    });

    return (
      <table className="track-list">
        <tbody>
          <tr>
            <th className="play-button-column"></th>
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
    if ( this.props.loading ) return (<Spinner />);

    const album = this.props.album;
    const artist = this.props.artist;

    return (
      <article className="album-view">
        <section className="album-header">

          <div className="header-image-cropper">
            <img src={ artist.image_url }/>
          </div>

          <div className="header-wrapper">
            <div className="album-cover">
              <img src={ album.image_url } />
            </div>
            <div className="header-details">
              <span className="view-type">Album</span>
              <h1>{ album.title }</h1>
              <h2>Artist: { artist.name }</h2>
              <h2>Year: { album.year }</h2>
            </div>
          </div>

        </section>

        <section className="album-songs">
          { this.generateTrackList( album.songs ) }
        </section>

      </article>
    );
  }

}

export default Album;
