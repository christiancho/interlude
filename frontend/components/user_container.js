import { connect } from 'react-redux';
import User from './user';
import { fetchUser, updateUserProfilePicture } from '../actions/user_actions';
import { fetchPlaylistsByUsername } from '../actions/playlist_actions';

const mapStateToProps = state => ({
  user: state.user,
  loading: state.loading,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUser: username => dispatch(fetchUser(username)),
  fetchPlaylistsByUsername: username => dispatch(fetchPlaylistsByUsername(username)),
  updateUserProfilePicture: (formData, username) => {
    dispatch(updateUserProfilePicture(formData, username));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
