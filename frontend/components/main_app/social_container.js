import { connect } from 'react-redux';
import Social from './social';
import { fetchAllUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Social);
