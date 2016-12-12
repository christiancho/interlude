import * as UserAPIUtil from '../util/user_api_util';
import {
  REQUEST_DATA,
  requestData
} from './music_actions';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export function fetchUser(username) {
  return (dispatch) => {
    dispatch(requestData());
    return UserAPIUtil.fetchUser(username)
      .then( user => dispatch(receiveUser(user)) );
  };
}
