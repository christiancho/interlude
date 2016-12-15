import { connect } from 'react-redux';
import Playlist from './playlist.jsx';
import {
  fetchPlaylist,
  playPlaylist,
  followPlaylist,
  unfollowPlaylist,
  updatePlaylist,
  requestRemoveSongFromPlaylist,
  sendDeletePlaylistRequest,
  updatePlaylistImage
} from '../../actions/playlist_actions';
import { fetchSong } from '../../actions/music_actions';
import { sendSongToQueue } from '../../actions/queue_actions';

const mapStateToProps = state => ({
  currentTrack: state.currentTrack,
  currentUser: state.session.currentUser,
  loading: state.loading,
  playlist: state.music.playlist
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
  fetchSong: songId => dispatch(fetchSong(songId)),
  followPlaylist: (playlistId, userId) => dispatch(followPlaylist(playlistId, userId)),
  playPlaylist: firstSongId => dispatch(playPlaylist(firstSongId)),
  requestRemoveSongFromPlaylist: listingId => dispatch(requestRemoveSongFromPlaylist(listingId)),
  sendDeletePlaylistRequest: playlistId => dispatch(sendDeletePlaylistRequest(playlistId)),
  sendSongToQueue: song => dispatch(sendSongToQueue(song)),
  unfollowPlaylist: followId => dispatch(unfollowPlaylist(followId)),
  updatePlaylist: (playlistId, newName) => dispatch(updatePlaylist(playlistId, newName)),
  updatePlaylistImage: (playlistId, formData) => dispatch(updatePlaylistImage(playlistId, formData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
