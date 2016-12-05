import { connect } from 'react-redux';
import loginForm from './login_form';
import { login, clearErrors } from '../../actions/session_actions';

const mapStateToProps = ( state ) => {
  return {
    errors: state.session.errors
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loginForm);
