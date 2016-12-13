import { connect } from 'react-redux';
import Album from './album';
import { fetchAlbum, fetchArtist, fetchSong } from '../../actions/music_actions';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { sendSongToQueue } from '../../actions/queue_actions';

const mapStateToProps = state => ({
  album: state.music.album,
  artist: state.music.artist,
  loading: state.loading,
  currentUser: state.session.currentUser,
  currentTrack: state.currentTrack
});

const mapDispatchToProps = dispatch => ({
  fetchArtist: artistId => dispatch(fetchArtist(artistId)),
  fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
  fetchSong: songId => dispatch(fetchSong(songId)),
  fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
  sendSongToQueue: song => dispatch(sendSongToQueue(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
