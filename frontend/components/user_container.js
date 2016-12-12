import { connect } from 'react-redux';
import User from './user';
import { fetchUser } from '../actions/user_actions';
import { fetchPlaylistsByUsername } from '../actions/playlist_actions';

const mapStateToProps = state => ({
  user: state.user,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  fetchUser: username => dispatch(fetchUser(username)),
  fetchPlaylistsByUsername: username => dispatch(fetchPlaylistsByUsername(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
