import { connect } from 'react-redux';
import signupForm from './signup_form';
import { signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = ( state ) => {
  return {
    errors: state.session.errors
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(signupForm);
