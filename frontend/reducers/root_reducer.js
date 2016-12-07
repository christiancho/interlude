import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import musicReducer from './music_reducer';
import loadingReducer from './loading_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  loading: loadingReducer,
  music: musicReducer
});

export default rootReducer;
