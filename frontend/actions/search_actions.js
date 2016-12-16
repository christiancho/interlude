import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const FETCHING_SEARCH = "FETCHING_SEARCH";

export const fetchingSearch = () => ({
  type: FETCHING_SEARCH
});

export const receiveSearchResults = results => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
});

export function sendSearchQuery(searchQuery) {
  return (dispatch) => {
    dispatch(fetchingSearch());
    return SearchAPIUtil.sendSearchQuery(searchQuery)
      .then( results => dispatch(receiveSearchResults(results)) );
  };
}
