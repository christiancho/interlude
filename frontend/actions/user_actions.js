import * as UserAPIUtil from '../util/user_api_util';
import {
  requestData
} from './music_actions';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_NEW_USER_PIC = "RECEIVE_NEW_USER_PIC";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
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

export function fetchAllUsers (){
  return (dispatch) => {
    dispatch(requestData());
    return UserAPIUtil.fetchAllUsers()
      .then( users => dispatch(receiveAllUsers(users)));
  };
}

export function updateUserProfilePicture(formData, username){
  return (dispatch) => {
    return UserAPIUtil.updateUser(formData, username)
      .then( user => dispatch(receiveNewUserPic(user)) );
  };
}
