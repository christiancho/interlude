import {
  ADD_SONG_TO_QUEUE,
  ADD_PLAYLIST_TO_QUEUE,
  PLAY_NEXT,
  PLAY_PREV,
  TOGGLE_SHUFFLE,
  TOGGLE_REPEAT,
  RETRIEVE_QUEUE
} from '../actions/queue_actions';
import { RECEIVE_SONG } from '../actions/music_actions';

const defaultState = {
  currentTrackId: 0,
  order: [],
  tracks: {},
  shuffle: false,
  repeat: false
};

function queueReducer(state = defaultState, action){
  switch(action.type) {

    case RECEIVE_SONG:
      return Object.assign(
        {},
        state,
        { currentTrackId: action.song.id }
      );

    case ADD_SONG_TO_QUEUE:
      const newOrderForAdd = state.order;
      newOrderForAdd.push(action.song.id);
      const newTracksWithAdd = Object.assign(
        {},
        state.tracks,
        { [action.song.id]: action.song }
      );
      return Object.assign(
        {},
        state,
        { order: newOrderForAdd, tracks: newTracksWithAdd }
      );

    case ADD_PLAYLIST_TO_QUEUE:

    case PLAY_NEXT:
      if ( state.order.length < 1 ) return Object.assign(
        {},
        state,
        defaultState
      );

      const newOrderForNext = state.order;
      const nextSongId = newOrderForNext.shift();
      const newTracksWithRemoved = Object.assign( {}, state.tracks );
      delete newTracksWithRemoved[state.currentTrackId];
      return Object.assign(
        {},
        state,
        {
          currentTrackId: nextSongId,
          order: newOrderForNext,
          tracks: newTracksWithRemoved
        }
      );

    case RETRIEVE_QUEUE:
      return Object.assign( {}, state, action.queue );

    default:
      return state;
  }

}

export default queueReducer;
