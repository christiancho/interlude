export const fetchPlaylist = playlistId => {
  return $.ajax({
    url: `api/playlists/${playlistId}`
  });
};

export const createPlaylist = playlist => {
  return $.ajax({
    method: 'post',
    url: 'api/playlists',
    data: { playlist },
    dataType: 'JSON'
  });
};

export const fetchPlaylistsByUsername = username => {
  return $.ajax({
    url: `api/users/${username}/playlists`
  })
};

export const addSongToPlaylist = (playlistId, songId) => {
  return $.ajax({
    method: 'post',
    url: 'api/playlist_listings',
    data: { playlist_listing: {
      playlist_id: playlistId,
      song_id: songId
    }},
    dataType: 'JSON'
  });
}

export const removeSongFromPlaylist = listingId => {
  return $.ajax({
    method: 'delete',
    url: `api/playlist_listings/${listingId}`
  });
}
