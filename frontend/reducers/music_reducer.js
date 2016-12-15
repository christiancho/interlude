import {
  RECEIVE_ARTIST,
  RECEIVE_ARTISTS,
  RECEIVE_ALBUM
} from '../actions/music_actions';

import {
  RECEIVE_PLAYLIST,
  TOGGLE_FOLLOW,
  REMOVE_SONG_FROM_PLAYLIST
} from '../actions/playlist_actions';

import { merge } from 'lodash';

const defaultState = {
  artists: {},
  artist: {},
  album: {},
  playlist: {}
};

function musicReducer(state = defaultState, action) {
  switch(action.type) {

    case RECEIVE_ARTISTS:
      return merge( {}, state, { artists: action.artists } );

    case RECEIVE_ARTIST:
      return Object.assign( {}, state, { artist: action.artist } );

    case RECEIVE_ALBUM:
      return Object.assign( {}, state, { album: action.album } );

    case RECEIVE_PLAYLIST:
      return Object.assign( {}, state, { playlist: action.playlist } );

    case REMOVE_SONG_FROM_PLAYLIST:
      const newTracks = Object.assign(
        {},
        state.playlist.tracks
      );
      const indexOfSong = newTracks.order.indexOf(action.song_id);
      newTracks.order.splice(indexOfSong, 1);
      delete newTracks[action.song_id];
      const newPlaylistWithRemoval = Object.assign(
        {},
        state.playlist,
        { tracks: newTracks }
      );
      return Object.assign(
        {},
        state,
        { playlist: newPlaylistWithRemoval }
      );

    case TOGGLE_FOLLOW:
      const newPlaylist = merge(
        {},
        state.playlist
      );
      if ( state.playlist.user_follows ){
        newPlaylist.user_follows = false;
        newPlaylist.follow_id = 0;
      } else {
        newPlaylist.user_follows = true;
        newPlaylist.follow_id = action.playlistFollow.id;
      }

      return Object.assign(
        {},
        state,
        { playlist: newPlaylist }
      );

    default:
      return state;
  }
}

export default musicReducer;
