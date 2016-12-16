import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import musicReducer from './music_reducer';
import loadingReducer from './loading_reducer';
import currentTrackReducer from './current_track_reducer';
import queueReducer from './queue_reducer';
import searchesReducer from './searches_reducer';
import userReducer from './user_reducer';
import usersReducer from './users_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  loading: loadingReducer,
  music: musicReducer,
  currentTrack: currentTrackReducer,
  playQueue: queueReducer,
  searchResults: searchesReducer,
  user: userReducer,
  users: usersReducer
});

export default rootReducer;
