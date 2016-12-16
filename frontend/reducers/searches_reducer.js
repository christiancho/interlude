import {
  FETCHING_SEARCH,
  RECEIVE_SEARCH_RESULTS,
  CLEAR_SEARCH_RESULTS
} from '../actions/search_actions';

const defaultState = {
  artists: [],
  albums: [],
  songs: [],
  playlists: [],
  users: [],
  fetching: false
};

function SearchesReducer(state = defaultState, action){
  switch(action.type){

    case CLEAR_SEARCH_RESULTS:
      return Object.assign( {}, state, defaultState );

    case FETCHING_SEARCH:
      return Object.assign( {}, state, { fetching: true });

    case RECEIVE_SEARCH_RESULTS:
      const copy = Object.assign({}, action.results);
      copy.fetching = false;
      return Object.assign(
        {},
        state,
        copy
      );

    default:
      return state;

  }
}

export default SearchesReducer;
