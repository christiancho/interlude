import React from 'react';
import Spinner from '../spinner';
import { Link } from 'react-router';
import PlaylistsBar from '../util/playlists_bar';

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
    this.modalInvisible();
    this.props.createPlaylist(this.state);
  }

  modalVisible() {
    $('.modal-hidden').addClass('modal-visible');
    $('.modal-hidden').removeClass('modal-hidden');
  }

  modalInvisible() {
    $('.modal-visible').addClass('modal-hidden');
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

        <PlaylistsBar
          playlistsObj={ this.props.playlists }
          type={ "USER_OWN_PLAYLISTS" }
        />

        <h2>Playlists You Follow</h2>

        <PlaylistsBar
          playlistsObj={ this.props.subscriptions }
          type={ "USER_SUBSCRIPTIONS" }
        />

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
