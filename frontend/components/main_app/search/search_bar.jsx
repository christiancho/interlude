import React from 'react';
import { Link } from 'react-router';

class SearchBar extends React.Component {

  constructor(props){
    super(props);

    this.updateResults = this.updateResults.bind(this);
    this.handleSongClick = this.handleSongClick.bind(this);
  }

  updateResults(event){
    const searchQuery = event.target.value;
    if ( searchQuery.length < 3 ) return;

    this.props.sendSearchQuery(searchQuery);

  }

  handleSongClick(songId){
    this.props.fetchSong(songId);
  }

  renderArtists(){
    if ( this.results.artists.length === 0 ) return;

    const artistsList = this.results.artists.map( artist => {
      return(
        <li className="search-list-item">
          <Link to={ `/artists/${artist.id}` }>
            <div className="search-list-link">
              { artist.name }
            </div>
          </Link>
        </li>
      );
    });

    return (
      <section className="results-section">
        <span className="results-heading">Artists</span>
        <ul className="results-list">
          { artistsList }
        </ul>
      </section>
    );
  }

  renderAlbums(){
    if ( this.results.albums.length === 0 ) return;

    const albumsList = this.results.albums.map( album => {
      return(
        <li className="search-list-item">
          <Link to={ `/artists/${album.artist_id}/albums/${album.id}`}>
            <div className="search-list-link">
              { album.title } by { album.artist_name }
            </div>
          </Link>
        </li>
      );
    });

    return (
      <section className="results-section">
        <span className="results-heading">Albums</span>
        <ul className="results-list">
          { albumsList }
        </ul>
      </section>
    );
  }

  renderSongs(){
    if ( this.results.songs.length === 0 ) return;

    const songsList = this.results.songs.map( song => {
      return(
        <li className="search-list-item">
          <div
            className="search-play"
            onClick={ this.handleSongClick.bind(null, song.id) }/>
          { song.title } from { song.album_title } by { song.artist_name }
        </li>
      );
    });

    return (
      <section className="results-section">
        <span className="results-heading">Songs</span>
        <ul className="results-list">
          { songsList }
        </ul>
      </section>
    );
  }

  renderPlaylists(){
    if ( this.results.playlists.length === 0 ) return;

    const playlistsList = this.results.playlists.map( playlist => {
      return(
        <li className="search-list-item">
          <Link to={ `/playlists/${playlist.id}` }>
            <div className="search-list-link">
              { playlist.name } by { playlist.owner }
            </div>
          </Link>
        </li>
      );
    });

    return (
      <section className="results-section">
        <span className="results-heading">Playlists</span>
        <ul className="results-list">
          { playlistsList }
        </ul>
      </section>
    );
  }

  renderUsers(){
    if ( this.results.users.length === 0) return;

    const usersList = this.results.users.map( user => {
      return(
        <li className="search-list-item">
          <Link to={ `/users/${user.username}` }>
            <div className="search-list-link">
              { user.username }: { user.f_name } { user.l_name }
            </div>
          </Link>
        </li>
      );
    });

    return (
      <section className="results-section">
        <span className="results-heading">Users</span>
        <ul className="results-list">
          { usersList }
        </ul>
      </section>
    );
  }

  render(){

    this.results = this.props.searchResults;

    return (
      <section className="search-bar">
        <input
          type="text"
          className="search-input"
          onChange={ this.updateResults }
        />
      { this.renderArtists() }
      { this.renderAlbums() }
      { this.renderSongs() }
      { this.renderPlaylists() }
      { this.renderUsers() }
      </section>
    );
  }

}

export default SearchBar;
