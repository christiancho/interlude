import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/session_actions';

import {
  ADD_PLAYLIST_FOLLOW,
  REMOVE_PLAYLIST_FOLLOW
} from '../actions/playlist_actions';

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

    case ADD_PLAYLIST_FOLLOW:
      const subscriptionsWithAdd = state.currentUser.subscriptions;
      subscriptionsWithAdd.push({
        playlist_id: action.playlist_id,
        follow_id: action.id
      });
      return merge(
        {},
        state,
        { currentUser: { subscriptions: subscriptionsWithAdd } }
      );

    case REMOVE_PLAYLIST_FOLLOW:
      const subscriptionsWithRemove = [];
      state.currentUser.subscriptions.forEach( subscription => {
        if ( action.playlist.id !== subscription.playlist_id ) {
          subscriptionsWithRemove.push(subscription);
        }
      });
      return merge(
        {},
        state,
        { currentUser: { subscriptions: subscriptionsWithRemove } }
      );

    case CLEAR_ERRORS:
      return Object.assign( {}, state, { errors: {} });

    default:
      return state;
  }
};

export default sessionReducer;
