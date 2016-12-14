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

export const updatePlaylist = (playlistId, newName) => {
  return $.ajax({
    method: 'patch',
    url: `api/playlists/${playlistId}`,
    data: { playlist: { name: newName } },
    dataType: 'JSON'
  });
};

export const fetchPlaylistsByUsername = username => {
  return $.ajax({
    url: `api/users/${username}/playlists`
  });
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
};

export const removeSongFromPlaylist = listingId => {
  return $.ajax({
    method: 'delete',
    url: `api/playlist_listings/${listingId}`
  });
};

export const followPlaylist = (playlistId, username) => {
  return $.ajax({
    method: 'post',
    url: 'api/playlist_follows',
    data: { playlist_follow: {
      playlist_id: playlistId,
      username: username
    }},
    dataType: 'JSON'
  });
};

export const unfollowPlaylist = playlistFollowId => {
  return $.ajax({
    method: 'delete',
    url: `api/playlist_follows/${playlistFollowId}`
  });
};
