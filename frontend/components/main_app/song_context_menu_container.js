import { connect } from 'react-redux';
import SongContextMenu from './song_context_menu';
import { fetchSong } from '../../actions/music_actions';
import {
  requestRemoveSongFromPlaylist,
  requestAddSongToPlaylist
} from '../../actions/playlist_actions';

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => ({
  requestRemoveSongFromPlaylist: listingId => dispatch(requestRemoveSongFromPlaylist(listingId)),
  requestAddSongToPlaylist: (playlistId, songId) => dispatch(requestAddSongToPlaylist(playlistId, songId)),
  fetchSong: songId => dispatch(fetchSong(songId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongContextMenu);
