import { connect } from 'react-redux';
import NowPlaying from './now_playing';
import { playMusic, pauseMusic, fetchSong } from '../../actions/music_actions';
import { sendPlayNextAction, sendQueneFromLocalStorage } from '../../actions/queue_actions';

const mapStateToProps = state => ({
  currentTrack: state.currentTrack,
  playQueue: state.playQueue
});

const mapDispatchToProps = dispatch => ({
  fetchSong: songId => dispatch(fetchSong(songId)),
  pauseMusic: () => dispatch(pauseMusic()),
  sendPlayNextAction: () => dispatch(sendPlayNextAction()),
  sendQueneFromLocalStorage: queue => dispatch(sendQueneFromLocalStorage(queue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlaying);
