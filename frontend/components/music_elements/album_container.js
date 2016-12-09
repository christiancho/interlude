import { connect } from 'react-redux';
import Album from './album';
import { fetchAlbum, fetchArtist, fetchSong } from '../../actions/music_actions';
import { sendSongToQueue } from '../../actions/queue_actions';

const mapStateToProps = state => ({
  album: state.music.album,
  artist: state.music.artist,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  fetchArtist: artistId => dispatch(fetchArtist(artistId)),
  fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
  fetchSong: songId => dispatch(fetchSong(songId)),
  sendSongToQueue: song => dispatch(sendSongToQueue(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
