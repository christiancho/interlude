import * as MusicAPIUtil from '../util/music_api_util';

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
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
