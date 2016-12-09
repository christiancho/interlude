import { connect } from 'react-redux';
import Controls from './controls';
import { playMusic, pauseMusic, fetchSong } from '../../actions/music_actions';
import { sendPlayNextAction } from '../../actions/queue_actions';

const mapStateToProps = ( state ) => {
  return {
    playing: state.currentTrack.playing
  };
};

const mapDispatchToProps = dispatch => ({
  playMusic: () => dispatch(playMusic()),
  pauseMusic: () => dispatch(pauseMusic()),
  fetchSong: songId => dispatch(fetchSong(songId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
