import { RECEIVE_SONG } from '../actions/music_actions';

export const songSaver = ( { getState, dispatch } ) => next => action => {
  if ( action.type === RECEIVE_SONG ) {
    localStorage.lastSongId = action.song.id;
  } 
  return next(action);
};
