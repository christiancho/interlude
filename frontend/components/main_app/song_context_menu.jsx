import React from 'react';
import { addSongToPlaylist } from '../../util/playlist_api_util';

class SongContextMenu extends React.Component {

  constructor(props){
    super(props);

    this.playSong = this.playSong.bind(this);
    this.addSong = this.addSong.bind(this);
    this.createPlaylistOptions = this.createPlaylistOptions.bind(this);
  }

  playSong(){
    this.props.fetchSong(this.songId);
    $('.context-menu-visible').addClass('context-menu-hidden');
    $('.context-menu-visible').removeClass('context-menu-visible');
  }

  contextMenuVisible() {
    $('.context-menu-hidden').addClass('context-menu-visible');
    $('.context-menu-hidden').removeClass('context-menu-hidden');
  }

  contextMenuInvisible(e) {
    e.preventDefault();
    $('.context-menu-visible').addClass('context-menu-hidden');
    $('.context-menu-visible').removeClass('context-menu-visible');
  }

  addSong(playlistId, e) {
    this.contextMenuInvisible(e);
    addSongToPlaylist(playlistId, this.songId).then( () => {
      msg.show('Added to playlist', { type: 'success' });
    });
  }

  createPlaylistOptions(){

    const playlistKeys = Object.keys(this.props.currentUser.playlists);
    const playlists = playlistKeys.map( key => {
      return this.props.currentUser.playlists[key];
    });

    const playlistOptions = playlists.map( (playlist, index) => {
      if ( playlist.id === this.props.playlistSourceId ){
        return;
      }
      return(
        <li
          key={ index }
          onClick={ this.addSong.bind(null, playlist.id) }
        >Add to: { playlist.name }</li>
      );
    });

    return(
      <ul className="context-menu-playlists">
        { playlistOptions }
      </ul>
    );
  }

  render(){

    return(
      <div>
        <div
          className="song-context-menu-wrapper context-menu-hidden"
          onClick={ this.contextMenuInvisible }
          onContextMenu={ this.contextMenuInvisible }
        />
        <div className="song-context-menu context-menu-hidden">
          <ul>
            <li onClick={ this.playSong }>Play Now</li>
              { this.createPlaylistOptions() }
          </ul>
        </div>
      </div>
    );

  }

}

export default SongContextMenu;
