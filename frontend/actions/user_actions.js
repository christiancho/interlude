import * as UserAPIUtil from '../util/user_api_util';
import {
  requestData
} from './music_actions';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_NEW_USER_PIC= "RECEIVE_NEW_USER_PIC";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveNewUserPic = user => ({
  type: RECEIVE_NEW_USER_PIC,
  user
});

export function fetchUser(username) {
  return (dispatch) => {
    dispatch(requestData());
    return UserAPIUtil.fetchUser(username)
      .then( user => dispatch(receiveUser(user)) );
  };
}

export function updateUserProfilePicture(formData, username){
  return (dispatch) => {
    return UserAPIUtil.updateUser(formData, username)
      .then( user => dispatch(receiveNewUserPic(user)) );
  };
}
