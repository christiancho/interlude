import * as PlaylistAPIUtil from '../util/playlist_api_util';
import * as MusicAPIUtil from '../util/music_api_util';
import { requestData, REQUEST_DATA, receiveSong } from './music_actions';

export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const PLAY_LIST_FROM_STATE = "PLAY_LIST_FROM_STATE";
export const PLAY_ALBUM_FROM_STATE = "PLAY_ALBUM_FROM_STATE";
export const RECEIVE_PLAYLISTS_BY_USERNAME = "RECEIVE_PLAYLISTS_BY_USERNAME";
export const ADD_PLAYLIST_FOLLOW = "ADD_PLAYLIST_FOLLOW";
export const REMOVE_PLAYLIST_FOLLOW = "REMOVE_PLAYLIST_FOLLOW";

export const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

export const playListFromState = trackList => ({
  type: PLAY_LIST_FROM_STATE,
  trackList
});

export const receivePlaylistsByUsername = playlists => ({
  type: RECEIVE_PLAYLISTS_BY_USERNAME,
  playlists
});

export const playAlbumFromState = album => ({
  type: PLAY_ALBUM_FROM_STATE,
  album
});

export const addPlaylistFollow = playlistListing => ({
  type: ADD_PLAYLIST_FOLLOW,
  playlistListing
});

export const removePlaylistFollow = playlist => ({
  type: REMOVE_PLAYLIST_FOLLOW,
  playlist
});

export function fetchPlaylist(playlistId) {
  return (dispatch) => {
    dispatch(requestData());
    return PlaylistAPIUtil.fetchPlaylist(playlistId)
      .then( playlist => dispatch(receivePlaylist(playlist)) );
  };
}

export function playPlaylist(trackList) {
  return (dispatch) => {
    return MusicAPIUtil.fetchSong(trackList[0].id)
      .then( song => dispatch(receiveSong(song)) )
      .then( () => dispatch(playListFromState(trackList)) );
  };
}

export function playAlbum(album) {
  return (dispatch) => {
    return MusicAPIUtil.fetchSong(album.songs[0].id)
      .then( song => dispatch(receiveSong(song)) )
      .then( () => dispatch(playAlbumFromState(album)) );
  };
}

export function fetchPlaylistsByUsername(username) {
  return (dispatch) => {
    dispatch(requestData());
    return PlaylistAPIUtil.fetchPlaylistsByUsername(username)
      .then( playlists => dispatch(receivePlaylistsByUsername(playlists)) );
  };
}

export function unfollowPlaylist(followId) {
  return (dispatch) => {
    dispatch(requestData());
    return PlaylistAPIUtil.unfollowPlaylist(followId)
      .then( playlist => dispatch(removePlaylistFollow(playlist)) )
      .then( playlist => dispatch(fetchPlaylist(playlist.id)) );
  };
}

export function followPlaylist(playlistId, userId) {
  return (dispatch) => {
    dispatch(requestData());
    return PlaylistAPIUtil.followPlaylist(playlistId, userId)
      .then( playlistListing => dispatch(addPlaylistFollow(playlistListing)) )
      .then( () => dispatch(fetchPlaylist(playlistId)) );
  };
}
