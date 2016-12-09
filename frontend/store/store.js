import { createStore, applyMiddleware } from 'redux';
import { songSaver } from '../middlewares/song_saver';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

const configureStore = ( preloadedState = {} ) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger())
  );
};

export default configureStore;
