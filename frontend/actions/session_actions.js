import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const LOGOUT = "LOGOUT";

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const login = user => {
  return (dispatch) => {
    return SessionAPIUtil.login(user)
      .then(
        userData => dispatch(receiveCurrentUser(userData)),
        errors => dispatch(receiveErrors(errors.responseJSON))
      );
  };
};

export const logout = () => {
  return (dispatch) => {
    return SessionAPIUtil.logout()
      .then(
        () => dispatch(logout()),
        errors => dispatch(receiveErrors(errors.responseJSON))
      );
  };
};

export const signup = user => {
  return (dispatch) => {
    return SessionAPIUtil.signup(user)
      .then(
        userData => dispatch(receiveCurrentUser(userData)),
        errors => dispatch(receiveErrors(errors.responseJSON))
      );
  };
};
