import {
  RECEIVE_ARTIST,
  RECEIVE_ARTISTS,
  RECEIVE_ALBUM,
  RECEIVE_PLAYLIST
} from '../actions/music_actions';

import { merge } from 'lodash';

const defaultState = {
  artists: {},
  artist: {},
  album: {},
  playlist: {}
};

function musicReducer(state = defaultState, action) {
  switch(action.type) {
    case RECEIVE_ARTISTS:
      return merge( {}, state, { artists: action.artists } );
    case RECEIVE_ARTIST:
      return Object.assign( {}, state, { artist: action.artist } );
    case RECEIVE_ALBUM:
      return Object.assign( {}, state, { album: action.album } );
    case RECEIVE_PLAYLIST:
      return Object.assign( {}, state, { playlist: action.playlist } );
    default:
      return state;
  }
}

export default musicReducer;
