import { connect } from 'react-redux';
import Queue from './queue';

const mapStateToProps = state => ({
  playQueue: state.playQueue,
  currentTrack: state.currentTrack
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Queue);
