export const fetchPlaylist = playlistId => {
  return $.ajax({
    url: `api/playlists/${playlistId}`
  })
};

export const createPlaylist = playlist => {
  return $.ajax({
    method: 'post',
    url: 'api/playlists',
    data: { playlist },
    dataType: 'JSON'
  })
};

export const fetchPlaylistsByUsername = username => {
  return $.ajax({
    url: `api/users/${username}/playlists`
  })
};
