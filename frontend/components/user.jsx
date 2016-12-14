import React from 'react';
import Spinner from './spinner';
import { Link } from 'react-router';
import PlaylistsBar from './util/playlists_bar';

class User extends React.Component {

  componentDidMount(){
    const username = this.props.params.username;
    this.props.fetchUser(username);
  }

  render(){
    if ( this.props.loading ) return <Spinner />;

    const user = this.props.user;
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
          <PlaylistsBar
            playlistsObj={ playlists }
            type={ "USER_PAGE" }
          />

        </section>

      </article>
    );

  }

}

export default User;
