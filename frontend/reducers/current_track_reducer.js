import { RECEIVE_SONG } from '../actions/music_actions';
import { LOGOUT } from '../actions/session_actions';
import {
  PLAY_LIST_FROM_STATE,
  PLAY_ALBUM_FROM_STATE
} from '../actions/playlist_actions';
import { PLAY_NEXT } from '../actions/queue_actions';
import { merge } from 'lodash';

let defaultState = {
  id: 0,
  playing: false,
  restart: false,
  localStorageLoad: false
};

const playState = {
  playing: true,
  restart: false
};

const pauseState = {
  playing: false,
  restart: false
};

function currentTrackReducer(state = defaultState, action) {
  switch(action.type) {

    case LOGOUT:
      return defaultState;

    case RECEIVE_SONG:
      return Object.assign(
        {},
        state,
        action.song,
        playState
      );

    case PLAY_NEXT:
      return Object.assign(
        {},
        state,
        { id: action.nextSongId }
      );

    case PLAY_LIST_FROM_STATE:
    case PLAY_ALBUM_FROM_STATE:
      if (action.tracks.order.length === 0) return state;
      const newId = action.tracks[action.tracks.order[0]].id;
      return Object.assign(
        {},
        state,
        {
          id: newId,
          playing: true,
          restart: true
        }
      );


    default:
      return state;
  }
}

export default currentTrackReducer;
