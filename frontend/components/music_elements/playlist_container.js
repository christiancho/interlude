import { connect } from 'react-redux';
import Playlist from './playlist.jsx';
import { fetchPlaylist, playPlaylist } from '../../actions/music_actions';

const mapStateToProps = state => ({
  playlist: state.music.playlist,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
  playPlaylist: firstSongId => dispatch(playPlaylist(firstSongId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
