import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { sendSearchQuery, clearSearchResults } from '../../../actions/search_actions';
import { fetchSong } from '../../../actions/music_actions';

const mapStateToProps = state => ({
  searchResults: state.searchResults
});

const mapDispatchToProps = dispatch => ({
  clearSearchResults: () => dispatch(clearSearchResults()),
  fetchSong: songId => dispatch(fetchSong(songId)),
  sendSearchQuery: searchQuery => dispatch(sendSearchQuery(searchQuery))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
