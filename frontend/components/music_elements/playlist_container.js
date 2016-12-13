import { connect } from 'react-redux';
import Playlist from './playlist.jsx';
import { fetchPlaylist, playPlaylist } from '../../actions/playlist_actions';
import { fetchSong } from '../../actions/music_actions';

const mapStateToProps = state => ({
  playlist: state.music.playlist,
  loading: state.loading,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
  playPlaylist: firstSongId => dispatch(playPlaylist(firstSongId)),
  fetchSong: songId => dispatch(fetchSong(songId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
