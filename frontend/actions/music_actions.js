import * as MusicAPIUtil from '../util/music_api_util';

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const PLAY_LIST_FROM_STATE = "PLAY_LIST_FROM_STATE";
export const REQUEST_DATA = "REQUEST_DATA";

export const requestData = () => ({
  type: REQUEST_DATA
});

export const receiveArtsts = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
});


export const playListFromState = trackList => ({
  type: PLAY_LIST_FROM_STATE,
  trackList
});

export function fetchAlbum(albumId){
  return (dispatch) => {
    dispatch(requestData());
    return MusicAPIUtil.fetchAlbum(albumId)
      .then( album => dispatch(receiveAlbum(album)) );
  };
}

export function fetchArtists() {
  return (dispatch) => {
    dispatch(requestData());
    return MusicAPIUtil.fetchArtists()
      .then( artists => dispatch(receiveArtsts(artists)) );
  };
}

export function fetchArtist(artistId) {
  return (dispatch) => {
    dispatch(requestData());
    return MusicAPIUtil.fetchArtist(artistId)
      .then( artist => dispatch(receiveArtist(artist)) );
  };
}

export function fetchSong(songId) {
  return (dispatch) => {
    return MusicAPIUtil.fetchSong(songId)
      .then( song => dispatch(receiveSong(song)) );
  };
}

export function fetchPlaylist(playlistId) {
  return (dispatch) => {
    dispatch(requestData());
    return MusicAPIUtil.fetchPlaylist(playlistId)
      .then( playlist => dispatch(receivePlaylist(playlist)) );
  };
}

export function playPlaylist(trackList) {
  return (dispatch) => {
    return MusicAPIUtil.fetchSong(trackList[1].id)
      .then( song => dispatch(receiveSong(song)) )
      .then( () => dispatch(playListFromState(trackList)) );
  };
}
