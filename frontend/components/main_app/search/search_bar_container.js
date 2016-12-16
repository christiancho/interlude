import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { sendSearchQuery } from '../../../actions/search_actions';
import { fetchSong } from '../../../actions/music_actions';

const mapStateToProps = state => ({
  searchResults: state.searchResults
});

const mapDispatchToProps = dispatch => ({
  sendSearchQuery: searchQuery => dispatch(sendSearchQuery(searchQuery)),
  fetchSong: songId => dispatch(fetchSong(songId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
