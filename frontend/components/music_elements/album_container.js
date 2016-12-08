import { connect } from 'react-redux';
import Album from './album';
import { fetchAlbum, fetchArtist } from '../../actions/music_actions';

const mapStateToProps = state => ({
  album: state.music.album,
  artist: state.music.artist,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  fetchArtist: artistId => dispatch(fetchArtist(artistId)),
  fetchAlbum: albumId => dispatch(fetchAlbum(albumId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
