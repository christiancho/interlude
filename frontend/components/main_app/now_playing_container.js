import { connect } from 'react-redux';
import NowPlaying from './now_playing';
import { playMusic, pauseMusic, fetchSong } from '../../actions/music_actions';
import { sendPlayNextAction } from '../../actions/queue_actions';

const mapStateToProps = state => ({
  currentTrack: state.currentTrack,
});

const mapDispatchToProps = dispatch => ({
  fetchSong: songId => dispatch(fetchSong(songId)),
  pauseMusic: () => dispatch(pauseMusic()),
  sendPlayNextAction: () => dispatch(sendPlayNextAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlaying);
