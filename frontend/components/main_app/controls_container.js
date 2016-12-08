import { connect } from 'react-redux';
import Controls from './controls';
import { playMusic, pauseMusic } from '../../actions/music_actions';

const mapStateToProps = ( state ) => {
  return {
    playing: state.currentTrack.playing
  };
};

const mapDispatchToProps = dispatch => ({
  playMusic: () => dispatch(playMusic()),
  pauseMusic: () => dispatch(pauseMusic())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
