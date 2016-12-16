import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Browse from './browse';
import { fetchArtists } from '../../actions/music_actions';

const mapStateToProps = ( state ) => ({
  artists: state.music.artists,
  loading: state.loading
});

const mapDispatchToProps = ( dispatch ) => ({
  fetchArtists: () => dispatch(fetchArtists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
