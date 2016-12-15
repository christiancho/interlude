import {
  RECEIVE_USER,
  RECEIVE_NEW_USER_PIC
} from '../actions/user_actions';
import { RECEIVE_PLAYLISTS_BY_USERNAME } from '../actions/playlist_actions';

import { merge } from 'lodash';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_USER:
      return Object.assign( {}, state, action.user );
    case RECEIVE_NEW_USER_PIC:
      const newImageUrl = action.user.image_url;
      return merge(
        {},
        state,
        { image_url: newImageUrl }
      );
    case RECEIVE_PLAYLISTS_BY_USERNAME:
      return Object.assign( {}, state, { playlists: action.playlists } )
    default:
      return state;
  }
};

export default userReducer;
