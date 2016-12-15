import { connect } from 'react-redux';
import User from './user';
import { fetchUser, updateUserProfilePicture } from '../actions/user_actions';

const mapStateToProps = state => ({
  user: state.user,
  loading: state.loading,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUser: username => dispatch(fetchUser(username)),
  updateUserProfilePicture: (formData, username) => {
    dispatch(updateUserProfilePicture(formData, username));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
