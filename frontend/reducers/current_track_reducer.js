import { RECEIVE_SONG } from '../actions/music_actions';
import { PLAY_NEXT } from '../actions/queue_actions';

const defaultState = {
  id: 0,
  title: "",
  artists: [],
  media_url: "",
  albumCoverUrl: "",
  playing: false,
  volume: 1
};

const playState = {
  playing: true
};

const pauseState = {
  playing: false
};

function currentTrackReducer(state = defaultState, action) {
  switch(action.type) {
    case RECEIVE_SONG:
      return Object.assign( {}, state, action.song, playState);
    default:
      return state;
  }
}

export default currentTrackReducer;
