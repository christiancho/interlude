import React from 'react';
import Spinner from '../spinner';
import { Link } from 'react-router';
import { parseSeconds } from '../../util/parse_util';
import SongContextMenu from '../main_app/song_context_menu';

class Album extends React.Component {

  constructor(props){
    super(props);

    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.showSongMenu = this.showSongMenu.bind(this);
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

  handleAddClick(song){
    if ( !this.props.currentTrack.id ) {
      return this.handlePlayClick(song.id);
    }
    this.props.sendSongToQueue(song);
    msg.show(`Added ${song.title} to queue`, {
      type: 'success'
    });
  }

  showSongMenu(songId, e){
    e.preventDefault();
    this.songMenu.songId = songId;
    $('.context-menu-hidden').addClass('context-menu-visible');
    $('.context-menu-hidden').removeClass('context-menu-hidden');
    $('.song-context-menu').css({ top: (e.pageY - 10), left: (e.pageX + 5) });
  }

  generateTrackList(songs){

    if ( !songs ) return ( <tr></tr> );

    const songList = songs.map( ( song, index ) => {
      const durationString = parseSeconds(song.duration);
      return(
        <tr
          className="track-listing"
          key={ index }
          onContextMenu={ this.showSongMenu.bind(null, song.id) }
        >
          <td className="play-tracklist icon" onClick={ this.handlePlayClick.bind(null, song.id) }></td>
          <td className="add-tracklist icon" onClick={ this.handleAddClick.bind(null, song ) }></td>
          <td>{ song.title }</td>
          <td>{ durationString }</td>
        </tr>
      );
    });

    return (
      <table className="track-list">
        <tbody>
          <tr>
            <th className="play-button-column"></th>
            <th className="add-song-column"></th>
            <th>Song</th>
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
      <article className="article-view">

        <div className="header-image"
          style={ { backgroundImage: `url(${artist.image_url})` } } />
        <section className="header-info">
          <div className="album-cover"
            style={ { backgroundImage: `url(${album.image_url})` } } />
          <div className="header-details">
            <span className="view-type">Album</span>
            <h1>{ album.title }</h1>
            <h2>Artist: { artist.name }</h2>
            <h2>Year: { album.year }</h2>
          </div>
        </section>

        <section className="article-main scrollable-y">
          <section className="artist-songs">
            { this.generateTrackList( album.songs ) }
          </section>
        </section>

        <SongContextMenu
          currentUser={ this.props.currentUser }
          fetchSong={ this.props.fetchSong }
          fetchPlaylist={ this.props.fetchPlaylist }
          goToPlayList={ false }
          ref={ ref => { this.songMenu = ref } }
        />

      </article>
    );
  }

}

export default Album;
