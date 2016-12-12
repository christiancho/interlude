import React from 'react';

class SongContextMenu extends React.Component {

  constructor(props){
    super(props);

    this.playSong = this.playSong.bind(this);
  }

  playSong(){
    this.props.fetchSong(this.props.songId);
    $('.context-menu-visible').addClass('context-menu-hidden')
    $('.context-menu-visible').removeClass('context-menu-visible')
  }

  contextMenuVisible() {
    $('.context-menu-hidden').addClass('context-menu-visible');
    $('.context-menu-hidden').removeClass('context-menu-hidden');
  }

  contextMenuInvisible(event) {
    event.preventDefault();
    $('.context-menu-visible').addClass('context-menu-hidden')
    $('.context-menu-visible').removeClass('context-menu-visible')
  }

  createPlaylistOptions(){

    const playlistOptions = this.props.currentUser.playlists.map( (playlist, index) => {
      return(
        <li key={ index }>{ playlist.name }</li>
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
            <li>Add to a playlist:</li>
              { this.createPlaylistOptions() }
          </ul>
        </div>
      </div>
    );

  }

}

export default SongContextMenu;
