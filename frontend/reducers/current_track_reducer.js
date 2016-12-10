import { RECEIVE_SONG } from '../actions/music_actions';

const emptyState = {
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

const defaultState = Object.assign(
  {},
  emptyState,
  { position: localStorage.lastSongPosition }
);

function currentTrackReducer(state = defaultState, action) {
  switch(action.type) {
    case RECEIVE_SONG:
      return Object.assign( {}, state, action.song, playState);
    default:
      return state;
  }
}

export default currentTrackReducer;
