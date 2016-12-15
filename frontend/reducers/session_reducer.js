import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/session_actions';

import {
  TOGGLE_FOLLOW,
  RECEIVE_NEW_PLAYLIST,
  RECEIVE_DELETED_PLAYLIST,
  RECEIVE_UPDATED_PLAYLIST_IMAGE
} from '../actions/playlist_actions';

import {
  RECEIVE_NEW_USER_PIC
} from '../actions/user_actions';

import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: {}
};

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){

    case RECEIVE_CURRENT_USER:
      return Object.assign( {}, state, { currentUser: action.currentUser } );

    case RECEIVE_ERRORS:
      return Object.assign( {}, state, { errors: action.errors });

    case CLEAR_ERRORS:
      return Object.assign( {}, state, { errors: {} });

    case RECEIVE_NEW_USER_PIC:
      return Object.assign( {}, state, { currentUser: action.user } );

    case RECEIVE_NEW_PLAYLIST:
      const newUserWithPlaylists = Object.assign( {}, state.currentUser );
      newUserWithPlaylists.playlists = merge(
        {},
        state.currentUser.playlists,
        { [action.playlist.id]: action.playlist }
      );
      return Object.assign(
        {},
        state,
        { currentUser: newUserWithPlaylists }
      );

    case RECEIVE_DELETED_PLAYLIST:
      const newUserWithDeletedPlaylist = Object.assign({}, state.currentUser);
      delete newUserWithDeletedPlaylist.playlists[action.playlistId];
      return Object.assign(
        {},
        state,
        { currentUser: newUserWithDeletedPlaylist }
      );

    case RECEIVE_UPDATED_PLAYLIST_IMAGE:
      const newUserWithImageUpdate = Object.assign({}, state.currentUser);
      newUserWithImageUpdate.playlists[action.playlist.id] = action.playlist;
      return Object.assign(
        {},
        state,
        { currentUser: newUserWithImageUpdate }
      );

    case TOGGLE_FOLLOW:
      const playlistFollow = action.playlistFollow;
      const newSubscriptions = Object.assign( {}, state.currentUser.subscriptions );
      if ( !!newSubscriptions[playlistFollow.playlist_id] ) {
        delete newSubscriptions[playlistFollow.playlist_id];
      } else {
        newSubscriptions[playlistFollow.playlist_id] = {
          follow_id: playlistFollow.id,
          image_url: playlistFollow.playlist_image_url,
          name: playlistFollow.playlist_name
        };
      }
      const newUser = Object.assign( {}, state.currentUser );
      newUser.subscriptions = newSubscriptions;

      return Object.assign(
        {},
        state,
        { currentUser: newUser }
      );

    default:
      return state;
  }
};

export default sessionReducer;
