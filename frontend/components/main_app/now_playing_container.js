import { connect } from 'react-redux';
import NowPlaying from './now_playing';
import { playMusic, pauseMusic } from '../../actions/music_actions';

const mapStateToProps = state => ({
  currentTrack: state.currentTrack
});

const mapDispatchToProps = dispatch => ({
  playMusic: () => dispatch(playMusic()),
  pauseMusic: () => dispatch(playMusic())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlaying);
