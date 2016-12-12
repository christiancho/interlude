import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_PLAYLISTS_BY_USERNAME } from '../actions/playlist_actions';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_USER:
      return Object.assign( {}, state, action.user );
    case RECEIVE_PLAYLISTS_BY_USERNAME:
      return Object.assign( {}, state, { playlists: action.playlists } )
    default:
      return state;
  }
};

export default userReducer;
