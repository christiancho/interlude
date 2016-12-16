import React from 'react';
import { Link } from 'react-router';

export default ( props ) => {

  if ( !props.playlistsObj ) return (<div/>);

  const playlistKeys = Object.keys(props.playlistsObj);

  if ( playlistKeys.length === 0 ){
    switch( props.type ){
      case "USER_PAGE":
        return(<h3>User does not have any playlists.</h3>);
      case "USER_OWN_PLAYLISTS":
        return(<h3>You do not have any playlists.</h3>);
      case "USER_SUBSCRIPTIONS":
        return(<h3>You do not follow any playlists.</h3>);
    }
  }

  const playlists = playlistKeys.map( key => {
    const playlist = props.playlistsObj[key];
    playlist.id = key;
    return playlist;
  });

  const playlistsList = playlists.map( (playlist, index) => {
    return (
      <li key={ index}>
          <Link to={ `playlists/${ playlist.id }` }>
            <div className="playlists-list-link"
              style={ { backgroundImage: `url(${ playlist.image_url })` } } >
              <h3>{ playlist.name }</h3>
            </div>
          </Link>
      </li>
    );
  });

  return (
    <section className="playlists-bar">
      <ul className="playlists-list">
        { playlistsList }
      </ul>
    </section>
  );

};
