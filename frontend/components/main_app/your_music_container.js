import { connect } from 'react-redux';
import YourMusic from './your_music';
import { fetchPlaylistsByUsername } from '../../actions/playlist_actions';

const mapStateToProps = state => ({
  playlists: state.user.playlists,
  loading: state.loading,
  username: state.session.currentUser.username
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylistsByUsername: username => dispatch(fetchPlaylistsByUsername(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YourMusic);
