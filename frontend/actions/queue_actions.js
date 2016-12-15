export const ADD_SONG_TO_QUEUE = "ADD_SONG_TO_QUEUE";
export const ADD_PLAYLIST_TO_QUEUE = "ADD_PLAYLIST_TO_QUEUE";
export const PLAY_NEXT = "PLAY_NEXT";
export const PLAY_PREV = "PLAY_PREV";
export const TOGGLE_SHUFFLE = "TOGGLE_SHUFFLE";
export const TOGGLE_REPEAT = "TOGGLE_REPEAT";
export const RETRIEVE_QUEUE = "RETRIEVE_QUEUE";

export const addSongToQueue = song => ({
  type: ADD_SONG_TO_QUEUE,
  song
});

export const addPlaylistToQueue = playlist => ({
  type: ADD_PLAYLIST_TO_QUEUE,
  playlist
});

export const playNext = (nextSongId) => ({
  type: PLAY_NEXT,
  nextSongId
});

export const playPrev = () => ({
  type: PLAY_PREV
});

export const toggleShuffle = () => ({
  type: TOGGLE_SHUFFLE
});

export const toggleRepeat = () => ({
  type: TOGGLE_REPEAT
});

export const retrieveQueue = queue => ({
  type: RETRIEVE_QUEUE,
  queue
});

export function sendSongToQueue(song) {
  return (dispatch) => {
    dispatch(addSongToQueue(song));
  };
}

export function sendPlaylistToQueue(playlist) {
  return (dispatch) => {
    dispatch(addPlaylistToQueue(playlist));
  };
}

export function sendPlayNextAction(nextSongId) {
  return (dispatch) => {
    dispatch(playNext(nextSongId));
  };
}

export function sendPlayPrevAction() {
  return (dispatch) => {
    dispatch(playPrev());
  };
}

export function sendToggleShuffleAction() {
  return (dispatch) => {
    dispatch(toggleShuffle());
  };
}

export function sendToggleRepeatAction() {
  return (dispatch) => {
    dispatch(toggleRepeat());
  };
}

export function sendQueneFromLocalStorage(queue) {
  return (dispatch) => {
    dispatch(retrieveQueue(queue));
  };
}
