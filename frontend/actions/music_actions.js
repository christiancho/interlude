import * as MusicAPIUtil from '../util/music_api_util';

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const REQUEST_DATA = "REQUEST_DATA";

export const requestData = () => ({
  type: REQUEST_DATA
});

export const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

export function fetchArtist(artistId) {
  return (dispatch) => {
    dispatch(requestData());
    return MusicAPIUtil.fetchArtist(artistId)
      .then( artist => dispatch(receiveArtist(artist)) );
  };
}
