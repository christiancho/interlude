import { connect } from 'react-redux';
import Controls from './controls';
import {
  sendPlayNextAction,
  sendToggleRepeatAction,
  sendToggleShuffleAction
} from '../../actions/queue_actions';
import { fetchSong } from '../../actions/music_actions';

const mapStateToProps = ( state ) => ({
  currentTrack: state.currentTrack,
  playQueue: state.playQueue
});

const mapDispatchToProps = dispatch => ({
  sendPlayNextAction: nextSongId => dispatch(sendPlayNextAction(nextSongId)),
  fetchSong: songId => dispatch(fetchSong(songId)),
  sendToggleRepeatAction: () => dispatch(sendToggleRepeatAction()),
  sendToggleShuffleAction: () => dispatch(sendToggleShuffleAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
