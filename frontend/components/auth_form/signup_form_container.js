import { connect } from 'react-redux';
import signupForm from './signup_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = ( state ) => {
  return {
    loggedIn: state.session.loggedIn,
    errors: state.session.errors
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    signup: user => dispatch(signup(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(signupForm);
