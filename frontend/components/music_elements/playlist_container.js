import { connect } from 'react-redux';
import Playlist from './playlist.jsx';
import {
  fetchPlaylist,
  playPlaylist,
  followPlaylist,
  unfollowPlaylist,
  updatePlaylist
} from '../../actions/playlist_actions';
import { fetchSong } from '../../actions/music_actions';
import { sendSongToQueue } from '../../actions/queue_actions';

const mapStateToProps = state => ({
  playlist: state.music.playlist,
  loading: state.loading,
  currentUser: state.session.currentUser,
  currentTrack: state.currentTrack
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
  playPlaylist: firstSongId => dispatch(playPlaylist(firstSongId)),
  fetchSong: songId => dispatch(fetchSong(songId)),
  updatePlaylist: (playlistId, newName) => dispatch(updatePlaylist(playlistId, newName)),
  sendSongToQueue: song => dispatch(sendSongToQueue(song)),
  unfollowPlaylist: followId => dispatch(unfollowPlaylist(followId)),
  followPlaylist: (playlistId, userId) => dispatch(followPlaylist(playlistId, userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
