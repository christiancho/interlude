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

  createPlaylistRequest(event){
    event.preventDefault();
    createPlaylist(this.state).then(
      () => {
        msg.show('Playlist created successfully', { type: 'success' });
        this.props.fetchPlaylistsByUsername(this.props.username);
      },
      errors => {
        const firstKey = Object.keys(errors.responseJSON)[0];
        msg.show(firstKey + " " + errors.responseJSON[firstKey], { type: 'error'});
      }
    );
  }

  createImage(playlist){
    return(
      <div className="playlist-list-link"
        style={ { backgroundImage: `url(${ playlist.image_url })` } } >
        <h3>{ playlist.name }</h3>
      </div>
    );
  }

  generatePlaylists(playlistsObj){

    const playlistKeys = Object.keys(playlistsObj);
    const playlists = playlistKeys.map( key => {
      const playlist = playlistsObj[key];
      playlist.id = key;
      return playlist;
    });

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

    return(
      <section className="main-container your-music-container">
        <h1>Your Music</h1>
        <button
          className="new-playlist-button"
          onClick={ this.modalVisible }
        >New Playlist</button>
        <h2>Your Playlists</h2>

        <section className="playlist-bar scrollable-x">
          { this.generatePlaylists(this.props.playlists) }
        </section>

        <h2>Playlists You Follow</h2>

        <section className="playlist-bar scrollable-x">
          { this.generatePlaylists(this.props.subscriptions) }
        </section>

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
