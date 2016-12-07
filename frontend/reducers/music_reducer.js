import { RECEIVE_ARTIST } from '../actions/music_actions';

const defaultState = {
  artist: {},
  album: {},
  song: {}
};

function musicReducer(state = defaultState, action) {
  switch(action.type) {
    case RECEIVE_ARTIST:
      return Object.assign( {}, state, { artist: action.artist } );
    default:
      return state;
  }
}

export default musicReducer;
