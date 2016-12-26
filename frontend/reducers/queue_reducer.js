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
import { PLAY_LIST_FROM_STATE, PLAY_ALBUM_FROM_STATE } from '../actions/playlist_actions';
import { shuffle } from '../util/array_util';

import { merge } from 'lodash';

let defaultState = {
  currentOrderIndex: -1,
  order: [],
  unshuffledOrder: [],
  tracks: {},
  repeat: false,
  shuffle: false
};

function queueReducer(state = defaultState, action){
  switch(action.type) {

    case ADD_SONG_TO_QUEUE:
      const newOrderForAdd = state.order;
      newOrderForAdd.push(action.song.id);
      const newTracksWithAdd = Object.assign(
        {},
        state.tracks,
        { [action.song.id]: action.song }
      );
      const newOrderIndex = ( state.order.length === 0 ) ? 0 : state.currentOrderIndex;
      return Object.assign(
        {},
        state,
        {
          order: newOrderForAdd,
          tracks: newTracksWithAdd,
          currentOrderIndex: newOrderIndex
        }
      );

    case PLAY_NEXT:
      let newIndex = state.currentOrderIndex + 1;
      if ( newIndex >= Object.keys(state.tracks).length && state.repeat ){
        newIndex = 0;
      }
      return Object.assign(
        {},
        state,
        { currentOrderIndex: newIndex }
      );

    case PLAY_LIST_FROM_STATE:
    case PLAY_ALBUM_FROM_STATE:
      if ( action.tracks.order.length === 0 ) return state;
      const newOrder = action.tracks.order;
      const newUnshuffledOrder = action.tracks.order;
      const newTracks = Object.assign(
        {},
        action.tracks
      );
      delete newTracks.order;
      return Object.assign(
        {},
        state,
        {
          currentOrderIndex: 0,
          order: newOrder,
          tracks: newTracks,
          unshuffledOrder: newUnshuffledOrder,
          shuffle: false,
          repeat: false
        }
      );

    case TOGGLE_SHUFFLE:
      let newShuffleOrder;
      if (state.shuffle){
        newShuffleOrder = state.unshuffledOrder.slice(0);
      } else {
        newShuffleOrder = state.order.slice(0);
        shuffle(newShuffleOrder);
      }
      const currentSongId = state.order[state.currentOrderIndex];
      const newShuffleOrderIndex = newShuffleOrder.indexOf(currentSongId);
      return merge(
        {},
        state,
        {
          currentOrderIndex: newShuffleOrderIndex,
          order: newShuffleOrder,
          shuffle: !state.shuffle
        }
      );

    case TOGGLE_REPEAT:
      return merge(
        {},
        state,
        { repeat: !state.repeat }
      );

    case RETRIEVE_QUEUE:
      return Object.assign( {}, state, action.queue );

    case RECEIVE_SONG:
      if ( state.order.length <= 1 ) {
        return Object.assign(
          {},
          state,
          {
            currentOrderIndex: 0,
            order: [action.song.id],
            unshuffledOrder: [action.id],
            tracks: {
              [action.song.id] : action.song
            },
            repeat: state.repeat,
            shuffle: state.shuffle
          }
        );
      }
      return state;

    default:
      return state;
  }

}

export default queueReducer;
