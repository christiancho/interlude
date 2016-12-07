import {
  REQUEST_DATA,
  RECEIVE_ARTIST
} from '../actions/music_actions';

function loadingReducer(state = {}, action){
  switch(action.type) {
    case REQUEST_DATA:
      return true;
    case RECEIVE_ARTIST:
      return false;
    default:
      return state;
  }
}

export default loadingReducer;
