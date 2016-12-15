import React from 'react';
import Spinner from '../spinner';
import { parseSeconds } from '../../util/parse_util';
import { Link, withRouter } from 'react-router';
import SongContextMenu from '../main_app/song_context_menu';

class Playlist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };

    this.generateTrackList = this.generateTrackList.bind(this);
    this.playPlaylist = this.playPlaylist.bind(this);
    this.showSongMenu = this.showSongMenu.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.renderRemoveButton = this.renderRemoveButton.bind(this);
    this.followPlaylist = this.followPlaylist.bind(this);
    this.unfollowPlaylist = this.unfollowPlaylist.bind(this);
    this.handleFollowToggle = this.handleFollowToggle.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  showSongMenu(songId, e){
    e.preventDefault();
    this.songMenu.songId = songId;
    $('.context-menu-hidden').addClass('context-menu-visible');
    $('.context-menu-hidden').removeClass('context-menu-hidden');
    $('.song-context-menu').css({ top: (e.pageY - 10), left: (e.pageX + 5) });
  }

  handlePlayClick(songId){
    this.props.fetchSong(songId);
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

  handleRemoveClick(listingId){
    this.props.requestRemoveSongFromPlaylist(listingId);
  }

  componentDidMount(){
    this.props.fetchPlaylist(this.props.params.playlistId);
  }

  renderRemoveButton(listingId){
    if ( this.props.currentUser.username === this.props.playlist.owner ) {
      return (
        <td
          className="remove-song icon"
          onClick={ this.handleRemoveClick.bind(null, listingId) }
        ></td>
      );
    } else {
      return;
    }
  }

  renderRemoveButtonHeader(){
    if ( this.props.currentUser.username === this.props.playlist.owner ) {
      return (<th className="remove-song-column"></th>);
    } else {
      return;
    }
  }

  generateTrackList( tracks ){

    if ( !tracks ) return ( <tr></tr> );

    const songList = tracks.order.map( ( songId, index ) => {
      const song = tracks[songId];
      const durationString = parseSeconds(song.duration);
      const nowPlayingClass = ( this.props.currentTrack.id === songId ) ? "now-playing" : "";
      return(
        <tr
          className="track-listing"
          key={ index }
          onContextMenu={ this.showSongMenu.bind(null, song.id) }
        >
          <td className="play-tracklist icon" onClick={ this.handlePlayClick.bind(null, song.id) }></td>
          <td className="add-tracklist icon" onClick={ this.handleAddClick.bind(null, song ) }></td>
          { this.renderRemoveButton(song.listing_id) }
          <td>{ song.title }</td>
          <td>{ song.artist_name }</td>
          <td>{ song.album_title }</td>
          <td className={ nowPlayingClass }>{ durationString }</td>
        </tr>
      );
    });

    return (
      <table className="track-list">
        <tbody>
          <tr>
            <th className="play-button-column"></th>
            <th className="add-song-column"></th>
            { this.renderRemoveButtonHeader() }
            <th>Song</th>
            <th>Artist(s)</th>
            <th>Album</th>
            <th className="duration-heading"></th>
          </tr>
          { songList }
        </tbody>
      </table>
    );
  }

  playPlaylist() {
    this.props.playPlaylist(this.props.playlist);
  }

  followPlaylist(){
    return this.props.followPlaylist(this.props.playlist.id, this.props.currentUser.username);
  }

  unfollowPlaylist(followId){
    return this.props.unfollowPlaylist(followId);
  }

  handleFollowToggle(follows, followId){

    $('.unfollow-button').prop('disabled',true);
    $('.follow-button').prop('disabled',true);
    $('.unfollow-button').addClass('disabled-button');
    $('.follow-button').addClass('disabled-button');

    let followPromise;
    if ( follows ) {
      followPromise = this.unfollowPlaylist( followId );
    } else {
      followPromise = this.followPlaylist();
    }

    followPromise.then( () => {
      $('.unfollow-button').prop('disabled',false);
      $('.follow-button').prop('disabled',false);
    });
  }

  updateForm(property){
    return event => this.setState({ [property]: event.target.value });
  }

  updatePlaylistName(e){
    e.preventDefault();
    this.props.updatePlaylist(this.props.playlist.id, this.state.name);
  }

  generateFollowButton(){

    const playlist = this.props.playlist;
    if ( playlist.owner === this.props.currentUser.username ) {
      return;
    }

    const buttonClass = playlist.user_follows ? "unfollow-button" : "follow-button";
    const buttonText = playlist.user_follows ? "Unfollow" : "Follow";

    return (
      <button
        className={ buttonClass }
        onClick={ this.handleFollowToggle.bind(null, playlist.user_follows, playlist.follow_id) }
      >{ buttonText }</button>
    );

  }

  generateEditPencil(){
    if ( this.props.playlist.owner !== this.props.currentUser.username ) {
      return;
    }

    return(
      <div className="edit-form-wrapper">
        <div className="edit-pencil" onClick={ this.modalVisible } />
        <div
          className="new-playlist-modal modal-hidden"
          onClick={ this.modalInvisible }
        />
        <form
          className="new-playlist-form modal-hidden"
          onSubmit={ this.updatePlaylistName }
        >
          <input
            type="text"
            value={ this.state.name }
            placeholder={ this.props.playlist.name }
            onChange={ this.updateForm('name') }
          />
        <input type="submit" value="Rename Playlist" />
        </form>
      </div>
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

  render(){
    if ( this.props.loading || !this.props.playlist.tracks ) return (<Spinner />);
    if ( Object.keys(this.props.playlist.tracks).length === 0 ) return(
      <section className="playlist-view">
        <h2>Playlist is empty</h2>
      </section>
    );

    const playlist = this.props.playlist;
    return(
      <section className="playlist-view">

        <div className="header-image"
          style={ { backgroundImage: `url(${ playlist.image_url })` } } />
        <section className="header-info">
          <div className="playlist-cover"
            style={ { backgroundImage: `url(${ playlist.image_url })` } } />
          <div className="header-details">
            <span className="view-type">Playlist</span>
            <h1>
              { playlist.name }
              { this.generateEditPencil() }
            </h1>
            <h2>By: { playlist.owner }</h2>
            <h3>Updated: { (new Date(playlist.updated_at)).toLocaleDateString() }</h3>
            <button className="big-play-button" onClick={ this.playPlaylist }>Play</button>
            { this.generateFollowButton() }
          </div>

        </section>

        <section className="article-main scrollable-y">
          <section className="artist-songs">
            { this.generateTrackList( playlist.tracks ) }
          </section>
        </section>

        <SongContextMenu
          currentUser={ this.props.currentUser }
          playlistSourceId={ this.props.playlist.id }
          fetchSong={ this.props.fetchSong }
          ref={ ref => { this.songMenu = ref } }
        />

      </section>
    );
  }

}

export default withRouter(Playlist);
