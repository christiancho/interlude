import {
  REQUEST_DATA,
  RECEIVE_ARTIST,
  RECEIVE_ARTISTS,
  RECEIVE_ALBUM
} from '../actions/music_actions';

function loadingReducer(state = true, action){
  switch(action.type) {
    case REQUEST_DATA:
      return true;
    case RECEIVE_ARTIST:
    case RECEIVE_ARTISTS:
    case RECEIVE_ALBUM:
      return false;
    default:
      return state;
  }
}

export default loadingReducer;
