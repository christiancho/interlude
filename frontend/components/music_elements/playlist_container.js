import { connect } from 'react-redux';
import Playlist from './playlist.jsx';
import {
  fetchPlaylist,
  playPlaylist,
  followPlaylist,
  unfollowPlaylist,
  updatePlaylist,
  requestRemoveSongFromPlaylist
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
  sendSongToQueue: song => dispatch(sendSongToQueue(song)),
  unfollowPlaylist: followId => dispatch(unfollowPlaylist(followId)),
  updatePlaylist: (playlistId, newName) => dispatch(updatePlaylist(playlistId, newName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
