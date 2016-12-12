import React from 'react';
import Spinner from './spinner';
import { Link } from 'react-router';

class User extends React.Component {

  componentDidMount(){
    const username = this.props.params.username;
    this.props.fetchUser(username);
    this.props.fetchPlaylistsByUsername(username);
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

  render(){
    if ( this.props.loading ) return (<Spinner />);

    const user = this.props.user;
    if ( !this.props.user.playlists ) return (<Spinner />);

    const playlists = user.playlists;

    return(
      <article className="article-view">

        <div className="header-image"
          style={ { backgroundImage: `url(${ user.image_url })` } } />
        <section className="header-info">
          <div className="profile-picture"
            style={ { backgroundImage: `url(${ user.image_url })` } }/>
          <div className="header-details">
            <span className="view-type">User</span>
            <h1>{ user.username }</h1>
            <h2>{ user.f_name } { user.l_name }</h2>
            <h3>Member since: { (new Date(user.created_at)).toLocaleDateString() }</h3>
          </div>
        </section>

        <section className="article-main scrollable-y">

          <h2 className="article-sub-heading">Playlists</h2>
          <section className="user-playlists scrollable-x">
            { this.generatePlaylists( playlists ) }
          </section>

        </section>

      </article>
    );

  }

}

export default User;
