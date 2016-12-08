import { connect } from 'react-redux';
import NowPlaying from './now_playing';
import { playMusic, pauseMusic, fetchSong } from '../../actions/music_actions';

const mapStateToProps = state => ({
  currentTrack: state.currentTrack
});

const mapDispatchToProps = dispatch => ({
  fetchSong: songId => dispatch(fetchSong(songId)),
  pauseMusic: () => dispatch(pauseMusic())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlaying);
