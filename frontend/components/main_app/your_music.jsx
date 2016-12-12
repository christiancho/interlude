import React from 'react';
import Spinner from '../spinner';
import { Link } from 'react-router';
import { createPlaylist } from '../../util/playlist_api_util';

class YourMusic extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name: "",
      username: this.props.username
    };

    this.updateForm = this.updateForm.bind(this);
    this.createPlaylistRequest = this.createPlaylistRequest.bind(this);
  }

  updateForm(property){
    return event => this.setState({ [property]: event.target.value });
  }

  componentDidMount(){
    this.props.fetchPlaylistsByUsername(this.props.username);
  }

  createPlaylistRequest(event){
    event.preventDefault();
    createPlaylist(this.state);
  }

  createImage(playlist){
    if ( playlist.playlistImageUrl ) {
      return(
        <div className="album-list-link"
          style={ { backgroundImage: `url(${ playlist.playlistImageUrl })` } } >
          <h3>{ playlist.name }</h3>
        </div>
      );
    } else {
      const urlStore = {};

      for (let i = 1; i < 5; i++){
        const randomIndex = Math.floor( Math.random() * playlist.albumCovers.length );
        const randomAlbumImageUrl = playlist.albumCovers[randomIndex].albumCoverUrl;
        urlStore[i] = randomAlbumImageUrl;
      }

      return(
        <div className="playlist-mosaic">
          <div className="mosaic-tile" style={ { backgroundImage: `url(${urlStore[1]})` } } />
          <div className="mosaic-tile" style={ { backgroundImage: `url(${urlStore[2]})` } } />
          <div className="mosaic-tile" style={ { backgroundImage: `url(${urlStore[3]})` } } />
          <div className="mosaic-tile" style={ { backgroundImage: `url(${urlStore[4]})` } } />
          <h3>{ album.title }</h3>
        </div>
      );
    }
  }

  generatePlaylists(playlists){
    const playlistsList = playlists.map( (playlist, index) => {
      return (
        <li key={ index}>
            <Link to={ `playlists/${ playlist.id }` }>
              { this.createImage(playlist) }
            </Link>
        </li>
      );
    });

    return (
      <ul className="album-list">
        { playlistsList }
      </ul>
    );

  }

  modalVisible() {
    $('.modal-hidden').addClass('modal-visible');
    $('.modal-hidden').removeClass('modal-hidden');
  }

  modalInvisible() {
    $('.modal-visible').addClass('modal-hidden')
    $('.modal-visible').removeClass('modal-visible');
  }

  render() {
    if ( this.props.loading ) return (<Spinner />);
    if ( !this.props.playlists ) return (<Spinner />);

    const playlists = this.props.playlists;
    return(
      <section className="main-container">
        <h1>Your Music</h1>
        <h2>Your Playlists</h2>
        <button
          className="new-playlist-button"
          onClick={ this.modalVisible }
        >New Playlist</button>

        <section className="your-playlists scrollable-x">
          { this.generatePlaylists( playlists ) }
        </section>

        <h2>Playlists You Follow</h2>

        <div
          className="new-playlist-modal modal-hidden"
          onClick={ this.modalInvisible }
        />
        <form
          className="new-playlist-form modal-hidden"
          onSubmit={ this.createPlaylistRequest }
        >
          <input
            type="text"
            value={ this.state.name }
            placeholder="Name of playlist"
            onChange={ this.updateForm('name') }
          />
          <input type="submit" value="Create Playlist" />
          </form>
      </section>
    );
  }

}

export default YourMusic;
