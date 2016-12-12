import {
  REQUEST_DATA,
  RECEIVE_ARTIST,
  RECEIVE_ARTISTS,
  RECEIVE_ALBUM,
  RECEIVE_SONG,
  RECEIVE_PLAYLIST
} from '../actions/music_actions';

function loadingReducer(state = true, action){
  switch(action.type) {
    case REQUEST_DATA:
      return true;
    case RECEIVE_ARTIST:
    case RECEIVE_ARTISTS:
    case RECEIVE_ALBUM:
    case RECEIVE_SONG:
    case RECEIVE_PLAYLIST:
      return false;
    default:
      return state;
  }
}

export default loadingReducer;
