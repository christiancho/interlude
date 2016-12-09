import { connect } from 'react-redux';
import Queue from './queue';

const mapStateToProps = state => {
  return {
    playQueue: state.playQueue
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Queue);
