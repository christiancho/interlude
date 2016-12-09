import {
  ADD_SONG_TO_QUEUE,
  ADD_PLAYLIST_TO_QUEUE,
  PLAY_NEXT,
  PLAY_PREV,
  TOGGLE_SHUFFLE,
  TOGGLE_REPEAT,
  RETRIEVE_QUEUE
} from '../actions/queue_actions';

const defaultState = {
  currentTrackIndex: 0,
  order: [],
  tracks: {},
  shuffle: false,
  repeat: false
};

function queueReducer(state = defaultState, action){
  switch(action.type) {

    case ADD_SONG_TO_QUEUE:

      const newOrder = state.order;
      newOrder.push(action.song.id);
      const newTracks = Object.assign(
        {},
        state.tracks,
        { [action.song.id]: action.song }
      );
      return Object.assign(
        {},
        state,
        { order: newOrder, tracks: newTracks }
      );

    case ADD_PLAYLIST_TO_QUEUE:
    case PLAY_NEXT:
      if ( state.order.length === 0 ) return state;
      debugger
      return state;
    case RETRIEVE_QUEUE:
      return Object.assign( {}, state, action.queue );
    default:
      return state;
  }

}

export default queueReducer;
