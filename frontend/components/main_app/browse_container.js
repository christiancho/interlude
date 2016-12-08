import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Browse from './browse';
import { fetchArtists } from '../../actions/music_actions';

const mapStateToProps = ( state ) => {
  return {
    artists: state.music.artists,
    loading: state.loading
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    fetchArtists: () => dispatch(fetchArtists())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
