import { connect } from 'react-redux';
import Controls from './controls';
import { sendPlayNextAction } from '../../actions/queue_actions';

const mapStateToProps = ( state ) => ({
  currentTrack: state.currentTrack,
  playQueue: state.playQueue
});

const mapDispatchToProps = dispatch => ({
  sendPlayNextAction: () => dispatch(sendPlayNextAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
